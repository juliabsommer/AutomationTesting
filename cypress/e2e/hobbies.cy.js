describe('Validate checkbox from Hobbies', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.viewport( 1280, 720 )
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.wait(2000)
    })
  
    it('PreCheck all the 3 checkboxes', () => {
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

        cy.get('#checkbox1')
        .should('be.visible')
        .check()

        cy.get('#checkbox2')
        .should('be.visible')
        .check()

        cy.get('#checkbox3')
        .should('be.visible')
        .check()
    } )
} )