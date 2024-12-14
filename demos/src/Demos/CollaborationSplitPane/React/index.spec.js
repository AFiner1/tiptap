context('/src/Demos/CollaborationSplitPane/React/', () => {
  beforeEach(() => {
    cy.visit('/src/Demos/CollaborationSplitPane/React/')
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
})