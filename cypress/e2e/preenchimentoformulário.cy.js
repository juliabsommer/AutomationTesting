
describe('Fill in form', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.viewport( 1280, 720 )
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.wait(2000)
    })
  
    it('Fill in form succesfully', () => {
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .should('be.visible')
        .type('Júlia')

        cy.get(':nth-child(1) > :nth-child(3) > .form-control')
        .should('be.visible')
        .type('walmyr@exemplo.com')

        cy.get('.col-md-8 > .form-control')
        .should('be.visible')
        .type('Av Paulista 0000')

        cy.get('#eid > .form-control')
        .should('be.visible')
        .type('julia000@hotmail.com')

        cy.get(':nth-child(4) > .col-md-4 > .form-control')
        .should('be.visible')
        .type('99999999')

        cy.get('.col-md-4 > :nth-child(2) > .ng-valid')
        .should('be.visible')
        .check()

        cy.get('#checkbox3')
        .should('be.visible')
        .check()

        cy.get('#msdd').click()
        cy.get(':nth-child(8) > .ui-corner-all').click( {force: true} )

    
        cy.get('#section > .container > .row').click()

        cy.get('#Skills').select('CSS')

        cy.get('.select2-selection__arrow').click()
        cy.get('#select2-country-results > :nth-child(2)').click()

        cy.get('#yearbox').select('1980')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('April')
        cy.get('#daybox').select('10')

        cy.get('#firstpassword')
        .type('teste123')

        cy.get('#secondpassword')
        .type('teste123')

        cy.get('#submitbtn').click()
    })
  })