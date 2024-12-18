context('/src/Marks/TextStyle/Vue/', () => {
  before(() => {
    cy.visit('/src/Marks/TextStyle/Vue/')
  })

  // TODO: Write tests

  it('should apply bold style to the selected text', () => {
    cy.get('.tiptap').type('Hello world.{selectall}')
    cy.get('button').contains('Bold').click()
    cy.get('.tiptap strong').should('exist').should('have.text', 'Hello world')
  })

  it('should apply italic style to the selected text', () => {
    cy.get('.tiptap').type('Hello world.{selectall}')
    cy.get('button').contains('Italic').click()
    cy.get('.tiptap em').should('exist').should('have.text', 'Hello world')
  })
})