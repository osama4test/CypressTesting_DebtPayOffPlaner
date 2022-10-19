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

    it("SigningIn user with Invalid credentials", function () {



        cy.get('#formly_2_input_username_0').type(this.data.validUsername)

        cy.get('#formly_2_input_password_1').type(this.data.validPass)

        cy.get("button[type='submit']").click()

        cy.get('h3').should('have.text', 'Hi QA Test! Primary')

        cy.get('.row > .left-flex > app-payoff-progress-card > .payoff-progress').should('be.visible')

    })


})