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
// Task 5 - Inline Editing for Support Tickets
ticketCard.addEventListener('dblclick', () => {
    // Prevents multiple edit inputs from appearing on the ticket at once
    if(ticketCard.querySelector('.save-btn')) {
        return;
    }
    
    // Clears the current ticket content to prepare for editing
    ticketCard.innerHTML = '';

    // Creates an input field to edit the customer's name
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.value = custName.textContent;

    // Creates an input field to edit the issue description
    const issueInput = document.createElement('input');
    issueInput.setAttribute('type', 'text');
    issueInput.value = issueDesc.textContent;

    // Creates an input field to edit the priority level (Low, Medium, or High)
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'text');
    priorityInput.value = priorityLabel.textContent.replace('Priority: ', '');

    // Creates a button to save the edited ticket
    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save';

    // Appends the input fields and save button to the ticket for editing
    ticketCard.appendChild(nameInput);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(issueInput);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(priorityInput);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(saveBtn);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(resolveBtn);

    // Saves the edited ticket details when the save button is clicked
    saveBtn.onclick = () => {
        // Updates the customer name if the value is valid; otherwise, reverts to the old value
        if (nameInput.value != null && nameInput.value.trim() != '') {
            custName.textContent = nameInput.value.trim();
        } else {
            alert('Customer name cannot be empty, reverting to old value');
        }

        // Updates the issue description if the value is valid; otherwise, reverts to the old value
        if (issueInput.value != null && issueInput.value.trim() != '') {
            issueDesc.textContent = issueInput.value.trim();
        } else {
            alert('Issue description cannot be empty, reverting to old value');
        }

        // Updates the priority label if the value is valid; otherwise, reverts to the old value
        if (priorityInput.value != null && priorityInput.value.trim() != '') {
            priorityLabel.textContent = `Priority: ${priorityInput.value.trim()}`;
        } else {
            alert('Priority cannot be empty, reverting to old value');
        }

        // Restores the ticket layout after editing
        ticketCard.innerHTML = '';
        ticketCard.append(custName, issueDesc, priorityLabel, resolveBtn);

        // Re-applies the correct styles if the priority was changed
        styleSingleCard(ticketCard);
    };
});

// Adds the completed ticket to the ticket container
divTicketContainer.appendChild(ticketCard);

// Applies the appropriate styling based on the ticket's priority level
styleSingleCard(ticketCard);
return ticketCard;
}

// When the webpage loads, create initial support tickets
document.addEventListener('DOMContentLoaded', function () {
    createSupportTicket('john hooverman', 'Cannot access account', 'High');
    createSupportTicket('Lee Ja', 'frozen', 'low');
    highlightHighPriorityTickets();
})

// When the "Add Ticket" button is clicked, create a new support ticket
// and apply the correct styling based on its priority
document.getElementById('addTicketBtn').addEventListener('click', () => {
    const currentTicket = createSupportTicket('neil', ' glitch report', 'High');
    styleSingleCard(currentTicket);
})
 
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