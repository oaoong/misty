describe('Misty Component Tests', () => {
  it('Normal Story', () => {
    cy.visit('/iframe.html?args=&viewMode=story&id=ui-misty--normal')
    cy.get('[data-cy=misty-body]').should('be.visible')
    cy.get('[data-cy=misty-contents]').should('not.exist')
    cy.get('[data-cy=misty-close_button]').contains('X').click()
    cy.get('[data-cy=misty-contents]').should('be.visible')
    cy.get('[data-cy=misty-body]').should('not.exist')
  })

  it('Preload Story', () => {
    cy.visit('/iframe.html?args=&viewMode=story&id=ui-misty--preload')
    cy.get('[data-cy=misty-body]').should('be.visible')
    cy.get('[data-cy=misty-contents]').should('exist')
    cy.get('[data-cy=misty-contents]').should('not.be.visible')
    cy.get('[data-cy=misty-close_button]').contains('X').click()
    cy.get('[data-cy=misty-contents]').should('be.visible')
    cy.get('[data-cy=misty-body]').should('exist')
  })

  it('Verified Story', () => {
    cy.visit('/iframe.html?args=&viewMode=story&id=ui-misty--verified')
    cy.get('[data-cy=misty-contents]').should('be.visible')
    cy.get('[data-cy=misty-body]').should('not.exist')
  })
})
