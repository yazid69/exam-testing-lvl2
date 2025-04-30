import { describe, expect, it, beforeEach } from 'vitest';
import { RestaurantSystem } from '../RestaurantService';
import { ICustomer, IProduct } from '../types';

describe('Restaurant System Integration Tests', () => {
    let system: RestaurantSystem;
    let customer: ICustomer;
    let pizza: IProduct;
    let soda: IProduct;

    beforeEach(() => {
        system = new RestaurantSystem();

        customer = system.getCustomerService().createCustomer({
            name: 'Jean Dupont',
            email: 'jean@example.com',
            address: '123 Rue de Paris, 75001 Paris',
            phone: '+33123456789',
        });

        pizza = system.getProductService().createProduct({
            name: 'Pizza',
            description: 'Fromage',
            price: 15,
            category: 'main',
            available: true,
            preparationTimeMinutes: 20,
        });

        soda = system.getProductService().createProduct({
            name: 'Soda',
            description: 'Boisson gazeuse',
            price: 4,
            category: 'drink',
            available: true,
            preparationTimeMinutes: 1,
        });
    });

    it('Processus de commande complet', () => {
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
            { productId: soda.id, quantity: 2 },
        ]);

        const { order, invoice } = result;
        expect(order).toBeDefined();
        expect(invoice).toBeDefined();
        expect(order?.items.length).toBe(2);
        expect(order?.totalAmount).toBe(15 + 4 * 2);
        expect(invoice?.totalAmount).toBe(order?.totalAmount);
        expect(invoice?.tax).toBeCloseTo(order!.totalAmount * 0.1);
        const paySuccess = system.getInvoiceService().payInvoice(invoice!.id, 'credit_card');
        expect(paySuccess).toBe(true);
        const updatedInvoice = system.getInvoiceService().getInvoice(invoice!.id);
        expect(updatedInvoice?.paid).toBe(true);
        expect(updatedInvoice?.paymentMethod).toBe('credit_card');
        expect(updatedInvoice?.paidAt).toBeDefined();
    });

    it('Gestion des points de fidélité', () => {
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 2 },
        ]);
        expect(result.order).toBeDefined();
        const updatedCustomer = system.getCustomerService().getCustomer(customer.id);
        expect(updatedCustomer?.loyaltyPoints).toBe(3);
    });

    it('Commande échoue si un produit est indisponible', () => {
        system.getProductService().updateProductAvailability(pizza.id, false);
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
        ]);
        expect(result.order).toBeNull();
        expect(result.invoice).toBeNull();
    });

    it('Mise à jour disponibilité produit et effet sur commande', () => {
        system.getProductService().updateProductAvailability(pizza.id, false);
        let result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
        ]);
        expect(result.order).toBeNull();

        system.getProductService().updateProductAvailability(pizza.id, true);
        result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
        ]);
        expect(result.order).toBeDefined();
    });

    it('Changement de statut de commande', () => {
        const order = system.getOrderService().createOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
        ])!;
        const success1 = system.getOrderService().updateOrderStatus(order.id, 'preparing');
        expect(success1).toBe(true);
        const success2 = system.getOrderService().updateOrderStatus(order.id, 'ready');
        expect(success2).toBe(true);
        const updated = system.getOrderService().getOrder(order.id);
        expect(updated?.status).toBe('ready');
    });

    it('Annulation impossible si commande non \"pending\"', () => {
        const order = system.getOrderService().createOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
        ])!;
        system.getOrderService().updateOrderStatus(order.id, 'preparing');
        const cancelled = system.getOrderService().cancelOrder(order.id);
        expect(cancelled).toBe(false);
    });

    it('Annulation possible si commande \"pending\"', () => {
        const order = system.getOrderService().createOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
        ])!;
        const cancelled = system.getOrderService().cancelOrder(order.id);
        expect(cancelled).toBe(true);
        const updated = system.getOrderService().getOrder(order.id);
        expect(updated?.status).toBe('cancelled');
    });

    it('Vérifie les montants et taxes', () => {
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
            { productId: soda.id, quantity: 1 },
        ]);
        const order = result.order!;
        const invoice = result.invoice!;
        const expectedTotal = pizza.price + soda.price;
        const expectedTax = expectedTotal * 0.1;
        expect(order.totalAmount).toBe(expectedTotal);
        expect(invoice.totalAmount).toBe(expectedTotal);
        expect(invoice.tax).toBeCloseTo(expectedTax);
    });
});
