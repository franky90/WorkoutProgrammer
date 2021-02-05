/ <reference types="Cypress" />

describe('Try to submit form with empty pole Email.Others poles filled corretly.', ()=>{

   it('visit Workout Creator website', ()=>{
    cy.visit('http://localhost:3000/')
})



it('Type correct First Name and check does this pole contain correct first name', () => {
  cy.get('#firstName')
  .type('firstName').should('have.value', 'firstName')
})

it('Type correct Last Name and check does this pole contain correct last name', () => {
  cy.get('#lastName')
  .type('lastName').should('have.value', 'lastName')
})

it('Check is pole "Email" empty', () => {
  cy.get('#email').should('have.value', '')
})

  it('Check is default value of selector is "---Choose Option---- then select Training Experience level as Begginer and check does selector contain value "begginer"', () => {
   cy.get('#experience')
   .should('have.value', 'empty')

   cy.get('#experience').select('begginer').should('have.value', 'begginer')
  })

  it('Check is Gender not selected', ()=>{
    cy.get('.form-input > [type="radio"]').should('have.value','')
})
    it('Select Gender as female and check does it have value "female"', ()=>{
     cy.get('.form-input > [type="radio"]').check('female').should('have.value','female')
  })

  it('Type correct Message and check does this pole contain correct message', () => {
    cy.get('#textArea')
    .type('This is test message').should('have.value', 'This is test message')
  })

  it('Submit Form',()=>{
    cy.get('#form').submit() 
  })

  it('Check does error box contains message "Incorrect email address"', ()=>{
    cy.get('#error > .errorCell').should('include.text', 'Incorrect email address')
  })


})