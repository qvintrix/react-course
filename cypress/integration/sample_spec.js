describe('React app e2e tests', function() {
    beforeEach(function() {
        cy.visit('http://localhost:8080');
    });

    it('contains "React App" in the title', function() {
        cy.title().should('contain', 'React App');
    });


    it('input works', function() {
        cy.get('.search-form__input-field')
            .type('Bill')
            .should('have.value', 'Bill')
    });
});
