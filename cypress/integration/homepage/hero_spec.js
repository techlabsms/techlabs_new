describe('Hompage Hero testing', () => {
    it('Opens the homepage', () => {
      cy.visit('http://localhost:8000/')
    })

    it('Homepage Hero - Content', () => {
        cy.visit('http://localhost:8000/')
        cy.contains('We Build')
    })

    it('Homepage Hero - Button to Programs page', () => {
        cy.visit('http://localhost:8000/')
        cy.get('.btn').contains('Program').click()
        cy.url().should('include', '/program')
    })
  })