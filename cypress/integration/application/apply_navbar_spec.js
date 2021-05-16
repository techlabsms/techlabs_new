describe('Apply Now / Navbar flow', () => {
    it('Correctly navigates to EN application page, selects a country and observes the TypeForm', () => {       
    cy.visit("/")
    cy.get('.cookieConsent').children('button').first().click()

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
      cy.wrap($card)
        .find('a')
        .should('have.attr', 'href')
        .and('match', /#requirements/)
      if ($card.find('a>div').has('class', 'chooseCity--card__disabled')) {
        let innerCard = $card.find('a>div')
        cy.wrap(innerCard)
          .should('not.have.css', 'background', 'white')
          .and('contain', 'Available Tracks')
          .click()
        cy.get('.c-typformEmbedd').should('not.exist')
      } else {
        let innerCard = $card.find('a>div')
        cy.wrap(innerCard)
          .should('not.contain', 'Next Batch will be announced soon')
          .click()
        cy.get('.c-typformEmbedd').should('exist').and('be.visible')
      }
    })
  })

  // deutsch
  it('Correctly navigates to DE application page, selects a country and observes the TypeForm', () => {       
    cy.visit("/de")
    cy.get('.cookieConsent').children('button').first().click()

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
      cy.wrap($card)
        .find('a')
        .should('have.attr', 'href')
        .and('match', /#requirements/)
      if ($card.find('a>div').has('class', 'chooseCity--card__disabled')) {
        let innerCard = $card.find('a>div')
        cy.wrap(innerCard)
          .should('not.have.css', 'background', 'white')
          .and('contain', 'Verfügbare Tracks')
          .click()
        cy.get('.c-typformEmbedd').should('not.exist')
      } else {
        let innerCard = $card.find('a>div')
        cy.wrap(innerCard)
          .should('not.contain', 'Das nächste Programm wird bald angekündigt')
          .click()
        cy.get('.c-typformEmbedd').should('exist').and('be.visible')
      }
    })
  })

  // portuguese
  it('Correctly navigates to PT application page, selects a country and observes the TypeForm', () => {       
    cy.visit("/pt")
    cy.get('.cookieConsent').children('button').first().click()

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
      cy.wrap($card)
        .find('a')
        .should('have.attr', 'href')
        .and('match', /#requirements/)
      if ($card.find('a>div').has('class', 'chooseCity--card__disabled')) {
        let innerCard = $card.find('a>div')
        cy.wrap(innerCard)
          .should('not.have.css', 'background', 'white')
          .and('contain', 'Trilhas disponíveis')
          .click()
        cy.get('.c-typformEmbedd').should('not.exist')
      } else {
        let innerCard = $card.find('a>div')
        cy.wrap(innerCard)
          .should('not.contain', 'Novas turmas serão anunciadas em breve')
          .click()
        cy.get('.c-typformEmbedd').should('exist').and('be.visible')
      }
    })
  })
})
