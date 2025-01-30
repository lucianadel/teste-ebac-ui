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

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Green',qtd )

        cy.get('.woocommerce-message').should('contain',  qtd +' × “Abominable Hoodie” foram adicionados no seu carrinho.')  
    });

    it.only('Deve adicionar produto ao carrinho  buscando massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            // let qtd = 7
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(
             dados[1].tamanho,
             dados[1].cor,
             dados[1].quantidade)

        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto) 
        })


        
    });

    


    
    
});
