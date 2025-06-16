************************Projeto inmetrics***************************

Para este projeto foi instalado   cypress: 14.4.1, cypress-cucumber-preprocessor": 4.3.1

Passos: Na pasta "package.json" foi add   "cypress-cucumber-preprocessor":
"nonGlobalStepDefinitions": true, "stepDefinitions": "cypress/e2e/login" (para a chamada)

 Na pasta "cypress.config.js" foi add a const
  const cucumber = require('cypress-cucumber-preprocessor').default
  const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  
  Foram criadas as pasta "LOGIN" com arquivo "login.js para escrita dos passos para especionar e importar Given, When, And, Then
  Foram criadas login.feature com cenarios 

  
