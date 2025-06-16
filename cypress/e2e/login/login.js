import  { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"; 

Given("que estou na tela inicio", ()=>{
cy.visit('https://www.automationexercise.com/login')
})

When("digito usuario com senha clicando em entrar", ()=>{
cy.get('.login-form > form > [type="email"]').type('teste@inmetrics.com.br')
 cy.get('[type="password"]').type('Teste@123')
 cy.get('[data-qa="login-button"]').click()
})

And("apresenta tela inicio logado", ()=>{
cy.get('b').contains('inmetrics')
})

And("busco e clico para add produto no carrinho", ()=>{
cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p').contains("Men Tshirt")
cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
})

Then("apresenta mensagem de produto add no carrinho e valida", ()=>{
cy.get('.modal-title').contains("Added!")
cy.get('u').click()
cy.contains("Tshirts").should("be.visible");
cy.get('.col-sm-6 > .btn').click()
cy.get('.cart_description > p').contains("Tshirts")

})









/*____________________

Given("que estou logado no meu user", ()=>{
cy.get(':nth-child(10) > a').contains('inmetrics')
})

When("escolho o protudo e clico view Product ", ()=>{
cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
})

Then("apresenta tela inicio logado", ()=>{  
cy.get(':nth-child(10) > a').contains('Blue Top')  
})
*/