describe('Apply Now / Navbar flow', () => {
    it('Correctly navigates to application page, clicks on Aachen and displays apply button(s)', () => {       
    // open homepage
    cy.visit('http://localhost:8000/')
    // close cookies consent banner
    cy.get('button').contains('I understand').click()
    // click on "Apply Now" button in the navbar
    cy.get('.nav-button').contains('Apply now').click()
    // Url should contain "/apply"
    cy.url().should('include', '/apply')
    // select dropdown Country -> Germany
    cy.get('.dropdown-select').select('Germany')
    // click on "Aachen" Apply Card
    cy.get('[href="#requirements"]').contains('Aachen').click()
    // if open, btn apply, should be enabled (or else, disabled)
    cy.get('.btn-primary').contains('Application currently closed').should('be.disabled')
    cy.get('.btn-primary').contains('Apply now').should('not.be.disabled')
    })
  })

  // MAKE DYNAMIC!!