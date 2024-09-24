/// <reference types="cypress"/>

describe('funcionalidade: login' , ()=> {

it('deve fazer login com sucesso' , () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('lucascosta@costa.com.br')
    cy.get('#password').type('lucas@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, lucascosta (não é lucascosta? Sair)')
})

})