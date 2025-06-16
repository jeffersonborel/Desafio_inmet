Feature: login validation

Scenario:  fazer login
Given  que estou na tela inicio
When  digito usuario com senha clicando em entrar
And  apresenta tela inicio logado
And  busco e clico para add produto no carrinho
Then  apresenta mensagem de produto add no carrinho e valida

