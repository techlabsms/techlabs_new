/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe("Apply", () => {
  before(() => {
    cy.visit("/")
  })

  it("visit apply page", () => {
    cy.get(
      "#gatsby-focus-wrapper > div.cookieConsent > button:nth-child(3)"
    ).click()
    cy.get("#navigations-08 > ul > li.nav-item.ml-3 > a").click()
    cy.get("#navigations-08 > ul > li.nav-item.ml-3 > a").click()
    cy.url().should("eq", "http://localhost:8000/apply")
  })

  it("should choose a location", () => {
    cy.get(
      "#gatsby-focus-wrapper > div.container > div:nth-child(2) > select"
    ).select("Germany")

    cy.get(
      "#gatsby-focus-wrapper > div.container > div:nth-child(3) > div:nth-child(2) > a > div"
    ).click()

    cy.get(
      "#gatsby-focus-wrapper > div.d-block > div.container.d-none.d-lg-block.my-5.py-5 > div.row.mt-5 > div > h2"
    ).should("contain.text", "Application Process")
  })
})
