describe('Visit All Pages', () => {
  it('Visits All Pages', () => {
    cy.visit('http://localhost:3000')
    cy.get('.title').should('have.text', 'Home')

    cy.visit('http://localhost:3000/users')
    cy.get('.title').should('have.text', 'Users')

    cy.visit('http://localhost:3000/settings')
    cy.get('.title').should('have.text', 'Settings')

    cy.visit('http://localhost:3000/logout')
    cy.get('.title').should('have.text', 'Logout')

    cy.visit('http://localhost:3000/addProject')
    cy.get('.title').should('have.text', 'Add Project')

    cy.visit('http://localhost:3000/projects')
    cy.get('.title').should('have.text', 'Projects')
  })
})

describe('Delete Project', () => {
  it('Visits Projects Page', () => {
    cy.visit('http://localhost:3000/projects')
  })

  it('Deletes a Project', () => {
    cy.get(":nth-child(1) > .css-1ex1afd-MuiTableCell-root > div > #long-button").click();
    cy.contains('Delete').click();
  })
})

describe('Table Pagination Check', () => {
  it('Visits Projects Page', () => {
    cy.visit('http://localhost:3000/projects')
  })

  it('Checks Current Pagination', () => {
    cy.contains('1–5')
  })

  it('Clicks Pagination Button ', () => {
    cy.get('.MuiTablePagination-actions > [tabindex="0"]').click()
    cy.contains('6–')
  })
})