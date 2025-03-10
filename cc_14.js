// Task 2: Adding Support Tickets Dynamically
function createSupportTicket(customer, issue, priority) {
    //Getting the main container where the support tickets will be added
    let divTicketContainer = document.getElementById('ticketContainer');
    
    //Creating a new div element to represent the ticket
    const ticketCard = document.createElement('div');
    ticketCard.setAttribute('class','ticket-card');
    
    //Adding a paragraph to describe the issue
    const issueDesc = document.createElement('p');
    issueDesc.setAttribute('class', 'issue-description');
    issueDesc.textContent = issue;
    ticketCard.append(issueDesc);
    
    //Addingname as a header inside ticket
    const custName = document.createElement('h2');
    custName.setAttribute('class', 'ticket-header');
    custName.textContent = customer;
    ticketCard.append(custName);

    //Adding  label to show case level
    const priorityLabel = document.createElement('p');
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;
    
    ticketCard.classList.add('other-priority');
    ticketCard.append(priorityLabel);
    const resolveBtn = document.createElement('button');
    resolveBtn.setAttribute('class', 'resolve-btn');
    resolveBtn.textContent = 'Resolve';
    ticketCard.append(resolveBtn); 
 
    // Task 4 - Implementing Ticket Resolution with Event Bubbling
resolveBtn.addEventListener('click', (event) => {
    // Removes the ticket from the page when the "Resolve" button is clicked
    ticketCard.remove();
        
    // Stops the click event from propagating to parent elements (prevents event bubbling)
    event.stopPropagation();
});

// Logs the customer's name when the ticket itself is clicked
ticketCard.addEventListener('click', () => {
    console.log('Clicked On Support Ticket:', custName.textContent);
});

 
    // Task 3 - Highlight high-priority tickets
function highlightHighPriorityTickets() {
    // Get all tickets currently displayed
    const highPriorityTickets = document.querySelectorAll('.ticket-card');
    
    // Convert NodeList to an array and apply styles based on priority
    const arrTickets = Array.from(highPriorityTickets);
    arrTickets.forEach((ticket) => {
        styleSingleCard(ticket);
    });
}

// Apply styles depending on the ticket's priority level
function styleSingleCard(currentCard) {
    // Get the priority label from the ticket
    const priority = currentCard.querySelector('.priority-label');
        
    // If the priority is "High", apply the correct styling
    if (priority.textContent.replace('Priority: ', '').toLowerCase() === 'high') {
        currentCard.classList.remove('other-priority'); // Remove any non-high styles
        currentCard.classList.add('high-priority'); // Add high-priority styling
    } else {
        currentCard.classList.remove('high-priority'); 
        currentCard.classList.add('other-priority'); // Default styling for non-high-priority tickets
    }
}