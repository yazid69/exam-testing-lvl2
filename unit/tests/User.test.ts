import { describe, it, expect } from 'vitest';
import { User } from '../src/User';
describe('User', () => {
    it('crée un utilisateur avec la catégorie par défaut "standard"', () => {
        const user = new User('1', 'test', 'test@example.com');
        expect(user.name).toBe('test');
        expect(user.category).toBe('standard');
    });

    it('peut emprunter tant qu’il n’a pas atteint la limite', () => {
        const user = new User('2', 'yl', 'yl@yl.com', 'premium');
        expect(user.canBorrow()).toBe(true);
        user.currentLoans = ['a', 'b', 'c', 'd', 'e'];
        expect(user.canBorrow()).toBe(false);
    });

    it('ajoute un emprunt', () => {
        const user = new User('3', 'chpa', 'chpa@chpa.com');
        user.addLoan('book1');
        expect(user.currentLoans).toContain('book1');
    });

    it('retire un emprunt', () => {
        const user = new User('4', 'foobar', 'foobar@foobar.com');
        user.currentLoans = ['book1', 'book2'];
        user.removeLoan('book1');
        expect(user.currentLoans).not.toContain('book1');
        expect(user.currentLoans).toContain('book2');
    });
});
