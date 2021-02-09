/ <reference types="Cypress" />

describe('Submit form with default data. Poles empty.', ()=>{

   it('Visit Workout Creator website', ()=>{
    cy.visit('http://localhost:3000/')
})

  it('Submit Form',()=>{
    cy.get('#form').submit() 
  })

//Check are poles empty or not selected

it('Check is pole "First Name" empty', () => {
  cy.get('#firstName').should('have.value', '')
})

it('Check is pole "Last Name" empty', () => {
  cy.get('#lastName').should('have.value', '')
})

it('Check is pole "Email" empty', () => {
  cy.get('#email').should('have.value', '')
})

it('Check is selector value "---Choose Option----"', () => {
 cy.get('#experience').should('have.value', 'empty')
})

it('Check is Gender not selected', ()=>{
  cy.get('.form-input > [type="radio"]').should('have.value','Not Selected')
})
it('Check is pole "Message" empty', () => {
  cy.get('#textArea').should('have.value', '')
})

  //Check Error Box

  it('Check does error box contains message "First Name is required"', ()=>{
    cy.get('#error > .errorCell').should('include.text', 'First Name is required')
  })

    it('Check does error box contains message "Last Name is required"', ()=>{
      cy.get('#error > .errorCell').should('include.text', 'Last Name is required')
  })

  it('Check does error box contains message "Incorrect email address"', ()=>{
    cy.get('#error > .errorCell').should('include.text', 'Incorrect email address')
})


  it('Check does error box contains message "Message has to be longer then 10 characters"', ()=>{
    cy.get('#error > .errorCell').should('include.text', 'Message has to be longer then 10 characters')
})

it('Check does error box contains message "Message has to be longer then 10 characters"', ()=>{
  cy.get('#error > .errorCell').should('include.text', 'Message has to be longer then 10 characters')
})

it('Check does error box contains message "Please select Training Experience level"', ()=>{
  cy.get('#error > .errorCell').should('include.text', 'Please select Training Experience level')
})


})