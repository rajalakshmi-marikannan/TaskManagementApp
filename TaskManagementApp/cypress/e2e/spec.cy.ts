// Please complete the following end to end tests for the entire application

describe('Task table', () => {

  it('should display a list of tasks', () => {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to change the completion status of a task from Yes to No or from No to Yes', () => {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to change the assigned user of a task', () => {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to create a task', () => {

    cy.visit('http://localhost:4500');
    cy.get('[data-cy="task-title-input"]').type('Implement Test');
    cy.get('[data-cy="task-description-input"]').type('Implement Test for Internship');
    cy.get('[data-cy="task-duedate-input"]').type('2024-02-11');
    cy.get('[data-cy="user-dropdown"').click().get('mat-option').contains('Jesper').click();
    cy.get('[data-cy="add-task-button"').click();
    cy.get('[data-cy="task-table"]').should('contain.text', 'Implement Test for Internship');

  });

  it('should be able to delete a task', () => {

    cy.visit('http://localhost:4500');
    cy.get('[data-cy="task-table"]').contains('td', 'Implement Test for Internship').parent().within(() => {
      cy.get('button').first().click();
    });
    cy.get('[data-cy="task-table"]').should('not.contain', 'Implement Test for Internship')

  });


});

describe('User table', () => {
  it('should display a list of users', () => {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });


  it('should be able to create a user', () => {

    cy.visit('http://localhost:4500');
    cy.get('[data-cy="username-input"]').type('Rajalakshmi');
    cy.get('[data-cy="password-input"]').type('Raji456');
    cy.get('[data-cy="email-input"]').type('rajalakshmi.marikannan@incipientus.com');
    cy.get('[data-cy="add-user-button"').click();
    cy.get('[data-cy="user-table"]').should('contain', 'Rajalakshmi');
  
  });

  it('should be able to delete a user', () => {

    cy.visit('http://localhost:4500');
    cy.get('[data-cy="user-table"]').contains('td', 'Rajalakshmi').parent().within(() => {
      cy.get('button').first().click();
    });
    cy.get('[data-cy="user-table"]').should('not.contain', 'Rajalakshmi')
  
  });

  it('should not be able to delete a user if they have tasks assigned to them', () => {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });
});


