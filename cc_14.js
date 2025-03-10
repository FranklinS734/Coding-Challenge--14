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


//Task 3 - Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets(){
    // Select all ticket elements on the page
    const highPriorityTickets = document.querySelectorAll('.ticket-card');
    
   // Convert the NodeList to an array and apply priority-based styling to each ticket
    const arrTickets = Array.from(highPriorityTickets);
    arrTickets.forEach((ticket) => {
        styleSingleCard(ticket);
    })
}
// Function to apply styling based on the ticket's priority level
function styleSingleCard(currentCard){
     // Retrieve the priority label from the ticket
    const priority = currentCard.querySelector('.priority-label');
        
    // Check if the ticket has a "High" priority and update the styling accordingly
    if(priority.textContent.replace('Priority: ', '').toLowerCase() === 'high'){
        
        currentCard.classList.remove('other-priority');
        
       
        currentCard.classList.add('high-priority');
    }
    else{
        currentCard.classList.remove('high-priority');
        currentCard.classList.add('other-priority');
    }
}
addTicket('John H', 'Cannot edit account', 'High');
addTicket('Lee Jack', 'Page not loaidng', 'Low');