/ <reference types="Cypress" />

describe('Try to submit form without selecting Gender. Others poles filled corretly.', ()=>{

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

  it('Type correct Email and check does this pole contain correct email', () => {
    cy.get('#email')
    .type('testing@gmail.com').should('have.value', 'testing@gmail.com')
  })

  it('Check is default value of selector is "---Choose Option---- then select Training Experience level as Begginer and check does selector contain value "begginer"', () => {
   cy.get('#experience')
   .should('have.value', 'empty')

   cy.get('#experience').select('begginer').should('have.value', 'begginer')
  })

  it('Check is Gender not selected', ()=>{
    cy.get('.form-input > [type="radio"]').should('have.value','')
})

  it('Type correct Message and check does this pole contain correct message', () => {
    cy.get('#textArea')
    .type('This is test message').should('have.value', 'This is test message')
  })

  it('Submit Form',()=>{
    cy.get('#form').submit() 
  })

})