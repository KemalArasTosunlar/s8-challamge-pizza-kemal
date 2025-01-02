describe('Pizza Order Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/Order');
  });

  it('should type text into name input', () => {
    cy.get('#name')
      .type('John Doe')
      .should('have.value', 'John Doe');
  });

  it('should select multiple toppings', () => {
    cy.get('input[type="checkbox"]').check(['peperoni', 'Sosis', 'Kanada Jambonu']);
    cy.get('input[type="checkbox"]:checked').should('have.length', 3);
  });

  it('should submit the form', () => {
    cy.get('#name').type('John Doe');
    cy.get('input[type="radio"][value="medium"]').check();
    cy.get('input[type="checkbox"]').check(['peperoni', 'Sosis']);
    cy.get('textarea').type('Extra cheese please');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/success');
  });
});