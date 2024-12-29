context('/src/Demos/CollaborationSplitPane/React/', () => {
  beforeEach(() => {
    cy.visit('/src/Demos/CollaborationSplitPane/React/')
  })

  it('should initialize with default content', () => {
    cy.get('.ProseMirror').should('contain', 'Hi 👋, this is a collaborative document.')
    cy.get('.ProseMirror').should('contain', 'Feel free to edit and collaborate in real-time!')
  })

  it('should allow user to change name', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('John Doe')
      cy.get('.collab-status-group button').click()
      cy.get('.collab-status-group').should('contain', 'John Doe')
    })
  })
})
    cy.get('.ProseMirror').should('contain', 'Hi 👋, this is a collaborative document.')
    cy.get('.ProseMirror').should('contain', 'Feel free to edit and collaborate in real-time!')
  })

  it('should allow user to change name', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('John Doe')
      cy.get('.collab-status-group button').click()
      cy.get('.collab-status-group').should('contain', 'John Doe')
    })
  })
})