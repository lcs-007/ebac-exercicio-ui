/// <reference types="cypress"/>

describe('funcionalidade: login' , ()=> {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

it('deve fazer login com sucesso' , () => {
    cy.get('#username').type('lucascosta@costa.com.br')
    cy.get('#password').type('lucas@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, lucascosta (não é lucascosta? Sair)')
})

it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('lucascostakal123lç@costa.com.br')
    cy.get('#password').type('lucas@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')
});

it('deve exibir uma mensagem de erro ao inserir  uma senha inválida', () => {
    cy.get('#username').type('lucascosta@costa.com.br')
    cy.get('#password').type('lucas@123janeiro')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')
    
});




})