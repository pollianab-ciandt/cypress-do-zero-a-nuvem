// forma 1
// // Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
//   cy.get('#firstName').type('John')
//   cy.get('#lastName').type('Doe')
//   cy.get('#email').type('john.doe@example.com')
//   cy.get('#open-text-area').type('Teste')
//   cy.get('button[type="submit"]').click()
// })

// forma 2
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data) => {
//   cy.get('#firstName').type(data.firstName)
//   cy.get('#lastName').type(data.lastName)
//   cy.get('#email').type(data.email)
//   cy.get('#open-text-area').type(data.message)
//   cy.get('button[type="submit"]').click()
// })

//forma 3
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    message: 'Teste.'
}) => {
  cy.get('#firstName').type(data.firstName)
  cy.get('#lastName').type(data.lastName)
  cy.get('#email').type(data.email)
  cy.get('#open-text-area').type(data.message)
  //cy.get('button[type="submit"]').click()
  cy.contains('button', 'Enviar').click() //com o contains
})
