 import _ from 'lodash';

describe('Teste de API', () => {
    it('Valida o nome da lista', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
        }).then((response) => {
            expect(response.status).to.eq(200);

            // Usando lodash para acessar a propriedade, se preferir
            const listName = _.get(response, 'body.data.list.name');

            cy.log('Nome da lista:', listName);
            expect(listName).to.eq('Professional');
        });
    });
});
 
 








 /*  cypress/e2e/trello_api.cy.js

describe('API de Ações do Trello', () => {
  it('Deve retornar status 200 para a ação específica do Trello', () => {
    const actionId = '592f11060f95a3d3d46a987a';
    const url = `https://api.trello.com/1/actions/${actionId}`;

    cy.request('GET', url)
      .then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body.data.list).to.have.property('name');
        cy.log(`Nome da lista: ${response.body.data.list.name}`);
      });
  });
});
*/

