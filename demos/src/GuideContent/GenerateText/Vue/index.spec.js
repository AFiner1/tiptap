context('/src/GuideContent/GenerateText/Vue/', () => {
  before(() => {
    cy.visit('/src/GuideContent/GenerateText/Vue/')
  })

  // TODO: Write tests

  it('should load the page correctly', () => {
    cy.get('.tiptap').should('exist')
  })
})