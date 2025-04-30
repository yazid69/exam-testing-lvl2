import { describe, it, expect } from 'vitest';
import { Book } from '../src/Book';

describe('Book', () => {
    it('crée un livre avec le statut "available"', () => {
        const book = new Book('1', '2025', 'Yazid');
        expect(book.title).toBe('2025');
        expect(book.author).toBe('Yazid');
        expect(book.status).toBe('available');
    });

    it('détecte si le livre est emprunté', () => {
        const book = new Book('2', 'Test', 'Auteur');
        book.status = 'borrowed';
        expect(book.isBorrowed()).toBe(true);
    });

    it('détecte si le livre est disponible', () => {
        const book = new Book('3', 'Test', 'Auteur');
        book.status = 'available';
        expect(book.isAvailable()).toBe(true);
    });

    it('détecte si le livre est en maintenance', () => {
        const book = new Book('4', 'Test', 'Auteur');
        book.status = 'maintenance';
        expect(book.isInMaintenance()).toBe(true);
    });
});
