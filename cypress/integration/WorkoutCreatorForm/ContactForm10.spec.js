
/ <reference types="Cypress" />


describe('Try to submit form with correct data. Attach file smaller then 2 Mb and JPG format.', ()=>{

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

  it('Select Gender as female and check does it have value "female"', ()=>{
     cy.get('.form-input > [type="radio"]').check('female').should('have.value','female')
  })

  // Attach file
  it('Attach file lower then 2Mb and jpg format',()=>{
    cy.get('#fileUpload').attachFile('testPicture.jpg')
  })
 

  it('Type correct Message and check does this pole contain correct message', () => {
    cy.get('#textArea')
    .type('This is test message').should('have.value', 'This is test message')
  })

  it('Submit Form',()=>{
    cy.get('#form').submit() 
  })

})