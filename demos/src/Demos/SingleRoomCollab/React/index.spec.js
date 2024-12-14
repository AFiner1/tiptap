context('/src/Demos/SingleRoomCollab/React/', () => {
  beforeEach(() => {
    cy.visit('/src/Demos/SingleRoomCollab/React/')
  })

  it('should synchronize changes between two users', () => {
    // Simulate User 1 typing
    cy.get('.editor__content').first().type('Hello from User 1')
    cy.wait(1000) // Wait for synchronization

    // Verify User 2 sees the changes
    cy.get('.editor__content').last().should('contain.text', 'Hello from User 1')

    // Simulate User 2 typing
    cy.get('.editor__content').last().type(' and User 2')
    cy.wait(1000) // Wait for synchronization

    // Verify User 1 sees the changes
    cy.get('.editor__content').first().should('contain.text', 'Hello from User 1 and User 2')
  })

  /* it('should show the current room with participants', () => {
    cy.wait(6000)
    cy.get('.editor__status')
      .should('contain', 'rooms.')
      .should('contain', 'users online')
  })

  it('should allow user to change name', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('John Doe')
      cy.get('.editor__name > button').click()
      cy.wait(6000)
      cy.get('.editor__name').should('contain', 'John Doe')
    })
  }) */
})