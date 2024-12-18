context('/src/GuideContent/GenerateText/Vue/', () => {
  before(() => {
    cy.visit('/src/GuideContent/GenerateText/Vue/')
  })

  it('should load the page correctly', () => {
    // Check if the main editor element is present
    cy.get('.tiptap').should('exist')
  })
})