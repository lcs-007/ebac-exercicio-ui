/// <reference types="cypress"/>

describe('describe: produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
   
    it('deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
          //.first()
          //.last()
          //.eq(2)
          .contains('Aero Daily Fitness Tee')

          .click()

          cy.get('#tab-title-reviews > a').should('contain' , 'Avaliações')
    });
});