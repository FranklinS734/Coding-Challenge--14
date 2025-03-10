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
}
