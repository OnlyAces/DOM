function moduleProject1() {
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // Task 1 - Add a "widget" class name to widgets
  const widgets = document.querySelectorAll('.widget'); 
  widgets.forEach(widget => {
    widget.classList.add('widget');
  });

  // Task 2 - Build a "Quote of the Day" widget
  const quoteWidget = document.createElement('div');
  quoteWidget.textContent = 'quote goes here';
  document.body.appendChild(quoteWidget);

  // Task 3 - Build a "Corporate Speak" widget
  const corporateSpeakWidget = document.createElement('div');
  corporateSpeakWidget.textContent = 'Corporate  goes here';
  document.body.appendChild(corporateSpeakWidget);

  // Task 4 - Build a "Countdown" widget
  const countdownWidget = document.createElement('div');
  document.body.appendChild(countdownWidget);

  function updateCountdown() {
  
    const timeRemaining = calculateTimeRemaining(); 
    countdownWidget.textContent = `Time remaining: ${timeRemaining} seconds`;
  }

  setInterval(updateCountdown, 1000);

  // Task 5 - Build a "Friends" widget
  const friendsWidget = document.createElement('div');
  const friendsList = document.createElement('ul');
  const friends = ["Friend 1", "Friend 2", "Friend 3"]; 
  friends.forEach(friend => {
    const listItem = document.createElement('li');
    listItem.textContent = friend;
    friendsList.appendChild(listItem);
  });
  friendsWidget.appendChild(friendsList);
  document.body.appendChild(friendsWidget);

  // Task 6 - Make it so user can tab through the widgets
  widgets.forEach(widget => {
    widget.tabIndex = 0; 
  });
}


// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
