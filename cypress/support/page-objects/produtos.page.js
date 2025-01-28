class produtosPage{
    visitarUrl() {
        cy.visit('produtos')
        
    }

    buscarProduto (nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista (nomeProduto) {
            cy.get(' .product-block ')
            .contains(nomeProduto)
            .click()
    }

    visitarProduto(nomeProduto){
        // cy.visit(`produtos/${nomeProduto}`)

        const urlFormatada = nomeProduto.replace(/ /g, '-')
            cy.visit(`produtos/${urlFormatada}`) 
    }           
    
    addProdutoCarrinho () {

    }
}

export default new produtosPage()