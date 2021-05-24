describe('Apply Now / Location Page flow', () => {
    it('Correctly navigates to location page, clicks on apply if available', () => {       
    cy.visit("/")
    cy.get('.cookieConsent').children('button').first().click()

    const navItems = cy.get('.navbar').children('#navigations-08').children().children()
    navItems.should('have.length', 5)

    navItems.children().first().click()
    
    cy.url().should('include', 'locations')
    
    cy.get('#locations-techlabs>.my-5').children().get('.locations--card__link>.locations--card').each(($card) => {
        cy.wrap($card)
        .children()
        .first()
        .should('have.class', 'locations--card-img')

        cy.wrap($card)
        .children()
        .last()
        .children()
        .first()
        .children('h3')
        .should('exist')
    })
    let randomIndex = Math.floor(Math.random() * 15)
    cy.get('#locations-techlabs>.my-5').children().eq(randomIndex).click({waitForAnimations: false})

    cy.url().should('include', 'location')

    cy.get('.location-hero>.row>.location-card').children()
    .should('have.length', 4)
    
    let heroButton = cy.get('.location-hero>.row>.location-card').children().last()
    if (heroButton.contains('Contact us')) {
        heroButton.should('have.attr', 'href')
        .and('include', 'mailto:')
    } else if (heroButton.contains('Apply')) {
        heroButton.should('have.attr', 'href')
        .and('include', 'typeform')
        heroButton.click()
    }
  })

   // deutsch
   it('Correctly navigates to DE location page, clicks on apply if available', () => {       
    cy.visit("/de")
    cy.get('.cookieConsent').children('button').first().click()

    const navItems = cy.get('.navbar').children('#navigations-08').children().children()
    navItems.should('have.length', 5)

    navItems.children().first().click()

    cy.url().should('include', 'locations')
    cy.get('#locations-techlabs>.my-5').children().get('.locations--card__link>.locations--card').each(($card) => {
        cy.wrap($card)
        .children()
        .first()
        .should('have.class', 'locations--card-img')

        cy.wrap($card)
        .children()
        .last()
        .children()
        .first()
        .children('h3')
        .should('exist')
    })
    let randomIndex = Math.floor(Math.random() * 15)
    cy.get('#locations-techlabs>.my-5').children().eq(randomIndex).click({waitForAnimations: false})

    cy.url().should('include', 'location')

    cy.get('.location-hero>.row>.location-card').children()
    .should('have.length', 4)

    let heroButton = cy.get('.location-hero>.row>.location-card').children().last()
    if (heroButton.contains('Kontaktiere uns')) {
        heroButton.should('have.attr', 'href')
        .and('include', 'mailto:')
    } else if (heroButton.contains('Jetzt Bewerben')) {
        heroButton.should('have.attr', 'href')
        .and('include', 'typeform')
        heroButton.click()
    }
   })


   // portuguese
   it('Correctly navigates to PT location page, clicks on apply if available', () => {       
     cy.visit("/pt")
     cy.get('.cookieConsent').children('button').first().click()

    const navItems = cy.get('.navbar').children('#navigations-08').children().children()
    navItems.should('have.length', 5)

    navItems.children().first().click()
    
    cy.url().should('include', 'locations')

    cy.get('#locations-techlabs>.my-5').children().get('.locations--card__link>.locations--card').each(($card) => {
        cy.wrap($card)
        .children()
        .first()
        .should('have.class', 'locations--card-img')

        cy.wrap($card)
        .children()
        .last()
        .children()
        .first()
        .children('h3')
        .should('exist')
    })
    let randomIndex = Math.floor(Math.random() * 15)
    cy.get('#locations-techlabs>.my-5').children().eq(randomIndex).click({waitForAnimations: false})

    cy.url().should('include', 'location')

    cy.get('.location-hero>.row>.location-card').children()
    .should('have.length', 4)

    let heroButton = cy.get('.location-hero>.row>.location-card').children().last()
    if (heroButton.contains('Entre em contato')) {
        heroButton.should('have.attr', 'href')
        .and('include', 'mailto:')
    } else if (heroButton.contains('Inscreva-se')) {
        heroButton.should('have.attr', 'href')
        .and('include', 'typeform')
        heroButton.click()
    }
   })
})
