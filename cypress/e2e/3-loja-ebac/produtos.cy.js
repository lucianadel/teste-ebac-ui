/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Argus All-Weather Tank')
        cy.get(' .product-block ')
        
        cy.get('#tab-title-description >').should('contain', 'Descrição')
                
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Helena Hooded Fleece'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain','Helena Hooded Fleece' )
        
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('helena hooded fleece') 
        cy.get('.product_title').should('contain','Helena Hooded Fleece' )
        
    });

    it.only('Deve adicionar produto ao carrinho', () => {
        
    });


    
    
});
