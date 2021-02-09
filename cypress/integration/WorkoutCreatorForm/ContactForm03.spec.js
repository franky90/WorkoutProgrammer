/ <reference types="Cypress" />

describe('Try to submit form with empty poles First Name and Last Name. Others poles filled corretly.', ()=>{

   it('visit Workout Creator website', ()=>{
    cy.visit('http://localhost:3000/')
})



it('Check is pole "First Name" empty', () => {
    cy.get('#firstName').should('have.value', '')
  })

  it('Check is pole "Last Name" empty', () => {
    cy.get('#lastName').should('have.value', '')
  })

  it('Type correct email and check does this pole contain correct email', () => {
    cy.get('#email')
    .type('testing@gmail.com').should('have.value', 'testing@gmail.com')
  })

  it('Check is default value of selector is "---Choose Option---- then select Training Experience level as Begginer and check does selector contain value "begginer"', () => {
   cy.get('#experience')
   .should('have.value', 'empty')

   cy.get('#experience').select('begginer').should('have.value', 'begginer')
  })

  it('Check is Gender not selected', ()=>{
    cy.get('.form-input > [type="radio"]').should('have.value','Not Selected')
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

  it('Check does error box contains message "First Name is required"', ()=>{
    cy.get('#error > .errorCell').should('include.text', 'First Name is required')
  })

    it('Check does error box contains message "Last Name is required"', ()=>{
      cy.get('#error > .errorCell').should('include.text', 'Last Name is required')
  })

})