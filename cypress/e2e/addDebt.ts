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

    it("AddingDebtInfo", function () {



        cy.get('#formly_2_input_username_0').type(this.data.validUsername)

        cy.get('#formly_2_input_password_1').type(this.data.validPass)

        cy.get("button[type='submit']").click()

        cy.get('h3').should('have.text', 'Hi QA Test! Primary')

        cy.get('.menu-toggle').click()

        cy.get('.tabs > :nth-child(2) > .mat-ripple').should('be.visible').click({ force: true })

        cy.get('.add-debt > .mat-focus-indicator').click()

        cy.get('formly-group.ng-star-inserted > :nth-child(1) > formly-wrapper-mat-form-field.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Mikasa')

        cy.get('.addons-left > formly-wrapper-mat-form-field.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('100')

        cy.get('.addons-right > formly-wrapper-mat-form-field.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('10')

        cy.get('.tooltip-wrapper > formly-wrapper-mat-form-field.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('10')

        cy.get('.add-simple-button').click()

        cy.wait(3000)

        cy.get('app-account-card').last().should('be.visible').click()

        cy.get('.title').should('have.text', 'Mikasa')
    })


})
