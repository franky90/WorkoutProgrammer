/ <reference types="Cypress" />

describe('Submit form with correct data. ', ()=>{

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

// Check Gender as Female

  it('Select Gender as female and check does it have value "female"', ()=>{
     cy.get('.form-input > [type="radio"]').check('female').should('have.value','female')
  })

  it('Type correct Message and check does this pole contain correct message', () => {
    cy.get('#textArea')
    .type('This is test message').should('have.value', 'This is test message')
  })
 
  // it('Submit Form',()=>{
  //   cy.get('#form').submit() 
  // })
  // And now we have to check does API has correct data 
  
it('Now is submitting and checking respond', ()=>{
    cy.request('GET', 'http://localhost:3000/', {)
  .then((response) => {
    // response.body is automatically serialized into JSON
    expect(response.status).to.eq(200)
    // expect(response.body).to.have.property('first', 'Piotr') // true
  })
    // cy.request('GET','http://localhost:3000/api/form').its('status').should('include', '200')
  })
  

})