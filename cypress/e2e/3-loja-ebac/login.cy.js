/// <reference types="cypress"/>

const perfil = require ('../../fixtures/perfil.json')

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('luciana.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form >.button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, luciana.teste (não é luciana.teste? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('lucian.@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')        
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('luciana.teste@teste.com.br')
        cy.get('#password').type('teste@1000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail luciana.teste@teste.com.br está incorreta. Perdeu a senha?')
        
    });


// criando novo teste,importando de um arquivo
    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, luciana.teste (não é luciana.teste? Sair)')

    });

//  forma nativa
    it('Deve fazer login com sucesso - usando fixtures', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, luciana.teste (não é luciana.teste? Sair)')
        })
    });

// comandos customizados
    it.only('Deve fazer login com sucesso - usando Comandos customizados', () => {
        cy.login('luciana.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, luciana.teste (não é luciana.teste? Sair)')
    });
})



