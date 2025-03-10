// Task 2: Adding Support Tickets Dynamically
// Selecting the ticket container
 
// Creating a div element to represent the ticket
const ticket = document.createElement('div');
ticket.setAttribute('class', 'ticket');

// making a paragraph element for the issue description
const issueText= document.createElement('p');
issueText.textContent = issueDescription;

// making a heading element for name
const nameHeading = document.createElement('h2');
nameHeading.textContent = customerName;


// creating a span to display priority level
const priorityState = document.createElement('span');
priorityState.textContent = `Priority: ${priorityLevel}`;
priorityState.setAttribute('class', priorityLevel.toLowerCase());

// button to make ticket resolved.
const resolveButton = document.createElement('button');
resolveButton.textContent = 'Resolve';
resolveButton.setAttribute('class', 'resolve-button');

// button that allows editing to ticket details
const editButton = document.createElement('button');
editButton.textContent = 'Edit Ticket';
editButton.setAttribute('class', 'edit-button')
