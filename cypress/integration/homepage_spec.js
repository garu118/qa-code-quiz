describe('Homepage Test', () => {
  it('Visits QA Code Quiz', () => {
    cy.visit('http://localhost:8080')
    });
  it('Title must contain "qa.code-quiz.dev"', function() {
    cy.title().should('contain', 'qa.code-quiz.dev');
  })
  it('Find 2 Input field ', function() {
    cy.get('input').should('have.length', 2)
  })
  it('Username field should contain id "username"', function() {
    cy.get('[id="username"]');
  })
  it('Password field should contain id "password"', function() {
    cy.get('[id="password"]');
  })
  it('Page should have Login button', function() {
    cy.get('button:contains("LOGIN")')
  })
})    
