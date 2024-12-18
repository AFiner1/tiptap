context('/src/Nodes/Mention/Vue/', () => {
  before(() => {
    cy.visit('/src/Nodes/Mention/Vue/')
  })

  // TODO: Write tests

  it('should mention a user', () => {
    cy.get('.tiptap').type('{selectall}{backspace}@')

    // check if the mention autocomplete is visible
    cy.get('.tippy-content .dropdown-menu').should('be.visible')

    // select the first user
    cy.get('.tippy-content .dropdown-menu button').first().then($el => {
      const name = $el.text()

      $el.click()

      // check if the user is mentioned
      cy.get('.tiptap').should('have.text', `@${name} `)
    })
  })
})