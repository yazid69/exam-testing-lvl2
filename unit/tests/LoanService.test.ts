import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoanService } from '../src/LoanService';
import { Book } from '../src/Book';
import { User } from '../src/User';

describe('LoanService', () => {
    let loanService: LoanService;
    let book: Book;
    let user: User;

    beforeEach(() => {
        loanService = new LoanService();
        book = new Book('b1', 'Titre', 'Auteur');
        user = new User('u1', 'Nom', 'mail@test.com', 'standard');
        loanService.addBook(book);
        loanService.addUser(user);
    });

    it('emprunte un livre disponible avec un utilisateur valide', () => {
        const result = loanService.borrowBook('b1', 'u1', new Date('2023-01-01'));
        expect(result).toBe(true);
        const updatedBook = loanService.getBook('b1');
        expect(updatedBook?.status).toBe('borrowed');
        expect(user.currentLoans).toContain('b1');
    });

    it('refuse l’emprunt si le livre n’existe pas', () => {
        const result = loanService.borrowBook('fakeId', 'u1');
        expect(result).toBe(false);
    });

    it('refuse l’emprunt si l’utilisateur a atteint sa limite', () => {
        user.currentLoans = ['a', 'b', 'c'];
        const result = loanService.borrowBook('b1', 'u1');
        expect(result).toBe(false);
    });

    it('refuse l’emprunt si le livre est déjà emprunté', () => {
        loanService.borrowBook('b1', 'u1');
        const user2 = new User('u2', 'Autre', 'a@b.com');
        loanService.addUser(user2);
        const result = loanService.borrowBook('b1', 'u2');
        expect(result).toBe(false);
    });

    it('retourne un livre à temps sans pénalité', () => {
        loanService.borrowBook('b1', 'u1', new Date('2023-01-01'));
        const penalty = loanService.returnBook('b1', new Date('2023-01-10'));
        expect(penalty).toBe(0);
        expect(book.status).toBe('available');
        expect(user.currentLoans).not.toContain('b1');
    });

    it('calcule une pénalité si le livre est en retard', () => {
        loanService.borrowBook('b1', 'u1', new Date('2023-01-01'));
        const penalty = loanService.returnBook('b1', new Date('2023-02-01'));
        expect(penalty).toBeGreaterThan(0);
    });

    it('ne renvoie pas de pénalité si dueDate est manquante (cas limite)', () => {
        book.status = 'borrowed';
        book.borrowedBy = 'u1';
        loanService.addUser(user);
        const penalty = loanService.returnBook('b1');
        expect(penalty).toBe(0);
    });

    it('appelle user.addLoan lors de l’emprunt', () => {
        const spy = vi.spyOn(user, 'addLoan');
        loanService.borrowBook('b1', 'u1');
        expect(spy).toHaveBeenCalledWith('b1');
    });

    it('appelle user.removeLoan lors du retour', () => {
        loanService.borrowBook('b1', 'u1');
        const spy = vi.spyOn(user, 'removeLoan');
        loanService.returnBook('b1');
        expect(spy).toHaveBeenCalledWith('b1');
    });

    it('récupère les livres empruntés', () => {
        loanService.borrowBook('b1', 'u1');
        const borrowed = loanService.getBorrowedBooks();
        expect(borrowed.length).toBe(1);
        expect(borrowed[0].status).toBe('borrowed');
    });

    it('récupère les livres disponibles', () => {
        const available = loanService.getAvailableBooks();
        expect(available.length).toBe(1);
    });

    it('récupère les livres d’un utilisateur', () => {
        loanService.borrowBook('b1', 'u1');
        const userLoans = loanService.getUserLoans('u1');
        expect(userLoans.length).toBe(1);
    });

    it('récupère les livres en retard', () => {
        loanService.borrowBook('b1', 'u1', new Date('2023-01-01'));
        const overdue = loanService.getOverdueBooks(new Date('2023-03-01'));
        expect(overdue.length).toBe(1);
    });

    it('retourne -1 si retour d’un livre inexistant', () => {
        const result = loanService.returnBook('unknown');
        expect(result).toBe(-1);
    });
});
