describe('Apply Now / Navbar flow', () => {
    it('Correctly navigates to application page, clicks on Aachen and displays apply button(s)', () => {       
    cy.visit("/")
    cy.get('.cookieConsent').children('button').first().click()
    let countriesCount = 0

    const navItems = cy.get('.navbar').children('#navigations-08').children().children()
    navItems.should('have.length', 5)

    navItems.children().last().click()
    
    cy.url().should('include', 'apply')

    const explainerTexts = cy.get('.c-explainer__text')
    explainerTexts.should('have.length', 3)
    explainerTexts.first().children('p').contains('a').should('have.attr', 'href').and('match', /\/program/)

    cy.get('.c-tracker__btn').click()
    let index = Math.floor(Math.random() * 9)
    cy.get('.dropdown-select').children().should('have.length', 9)
    cy.get('.dropdown-select option').eq(index).invoke('val').then((value) => {
      cy.get('.dropdown-select').select(value)
    })

    const cards = cy.get('.c-tracker__animation--up').children().children('.row').last().children()
    cards.each(($card) => {
      cy.wrap($card).find('a').should('have.attr', 'href').and('match', /#requirements/)
    })

    })
  })
