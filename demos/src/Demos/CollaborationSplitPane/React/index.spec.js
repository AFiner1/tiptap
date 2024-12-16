context('/src/Demos/CollaborationSplitPane/React/', () => {
  beforeEach(() => {
    cy.visit('/src/Demos/CollaborationSplitPane/React/')
  })

  it('should load with initial content', () => {
    cy.get('.editor__content').should('contain', 'Welcome to the collaborative editor!')
  })

  it('should show the current room with participants', () => {
    cy.wait(6000)
    cy.get('.editor__status')
      .should('contain', 'rooms.')
      .should('contain', 'users online')
  })

  it('should allow user to change name', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('Jane Doe')
      cy.get('.editor__name > button').click()
      cy.wait(6000)
      cy.get('.editor__name').should('contain', 'Jane Doe')
    })
  })
})