/// <reference types="cypress" />


describe('Depended Fucntions', function () {
  beforeEach(function () {


    cy.visit('/')

    cy.fixture('signinCredentials').then(function (data) {

      this.data = data


    })

    cy.clearLocalStorage()
    cy.clearCookies()


  })

  context("Smoke Tests", function () {


    it("SigningIn user with Invalid credentials", function () {



      cy.get('#formly_2_input_username_0').type(this.data.InvalidUsername)

      cy.get('#formly_2_input_password_1').type(this.data.InvalidPass)

      cy.get("button[type='submit']").should('be.disabled')

    })

    it("SigningIn user with valid credentials", function () {



      cy.get('#formly_2_input_username_0').type(this.data.validUsername)

      cy.get('#formly_2_input_password_1').type(this.data.validPass)

      cy.get("button[type='submit']").click()

      cy.get('h3').should('have.text', 'Hi QA Test! Primary')

    })

  })
})