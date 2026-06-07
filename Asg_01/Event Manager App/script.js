// ============================================
// 1. OUR DATA — array of event objects
// ============================================
let events = [
  {
    name: "Tech Innovation Summit",
    date: "2025-08-15",
    description: "A gathering of tech leaders discussing AI and future computing trends."
  },
  {
    name: "Annual Charity Gala",
    date: "2025-07-04",
    description: "An elegant evening fundraiser supporting local education."
  },
  {
    name: "Web Dev Workshop",
    date: "2024-03-10",
    description: "Hands-on workshop covering HTML, CSS, and JavaScript basics."
  }
];

// ============================================
// 2. SET FOOTER YEAR AUTOMATICALLY
// ============================================
// getElementById finds the element with id="year"
// textContent sets the text inside it
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// 3. HELPER — FORMAT DATE FOR DISPLAY
// ============================================
// "2025-08-15"  →  "August 15, 2025"
function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', options);
  // We add T00:00:00 to avoid timezone issues that can shift the date by 1 day
}

// ============================================
// 4. SORT EVENTS BY DATE (earliest first)
// ============================================
function sortEvents() {
  events.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
    // If result is negative: a comes first
    // If result is positive: b comes first
    // This sorts oldest → newest
  });
}

// ============================================
// 5. RENDER — draw event cards on the page
// ============================================
function renderEvents(list) {
  // 'list' is the array we want to display (could be filtered)

  const container = document.getElementById('eventsList');
  container.innerHTML = ''; // clear whatever was there before

  if (list.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#888;grid-column:1/-1;">No events found.</p>';
    return; // stop the function here
  }

  // Loop through each event and create a card
  list.forEach(function(event, index) {

    // Check if event is in the past
    const today = new Date().toISOString().split('T')[0]; // "2025-06-07"
    const isPast = event.date < today; // simple string comparison works for YYYY-MM-DD

    // Create a new div element
    const card = document.createElement('div');
    card.classList.add('event-card');      // give it the 'event-card' class
    if (isPast) card.classList.add('past'); // add 'past' class if old

    // Set the HTML inside the card
    card.innerHTML = `
      <h3>${event.name}</h3>
      <div class="date">📅 ${formatDate(event.date)} ${isPast ? '(Past)' : '(Upcoming)'}</div>
      <p>${event.description}</p>
      <button class="delete-btn" onclick="deleteEvent(${index})">🗑 Delete</button>
    `;
    // Note: onclick="deleteEvent(${index})" passes the card's position number
    // so we know WHICH event to delete

    // Add the card to the container div on the page
    container.appendChild(card);
  });
}

// ============================================
// 6. ADD EVENT — runs when button is clicked
// ============================================
document.getElementById('addBtn').addEventListener('click', function() {
  // addEventListener listens for a 'click' event on the button
  // When clicked, it runs this function

  // Read values from the form inputs
  const name = document.getElementById('eventName').value.trim();
  // .value gets what the user typed, .trim() removes extra spaces

  const date = document.getElementById('eventDate').value;
  const desc = document.getElementById('eventDesc').value.trim();
  const warning = document.getElementById('warningMsg');

  // VALIDATE — check all fields are filled
  if (!name || !date || !desc) {
    // !name means "if name is empty string" (empty strings are falsy in JS)
    warning.classList.remove('hidden'); // show the warning message
    return; // stop — don't add the event
  }

  // Hide warning if it was showing
  warning.classList.add('hidden');

  // Add new event to our array
  events.push({ name: name, date: date, description: desc });

  // Sort and re-render
  sortEvents();
  renderEvents(events);

  // Clear the form inputs
  document.getElementById('eventName').value = '';
  document.getElementById('eventDate').value = '';
  document.getElementById('eventDesc').value = '';
});

// ============================================
// 7. DELETE EVENT
// ============================================
function deleteEvent(index) {
  // splice(startIndex, deleteCount) removes items from array
  events.splice(index, 1); // remove 1 item at position 'index'

  sortEvents();

  // After deleting, re-render with current search filter applied
  const searchVal = document.getElementById('searchInput').value.trim().toLowerCase();
  if (searchVal) {
    filterEvents(searchVal);
  } else {
    renderEvents(events);
  }
}

// ============================================
// 8. SEARCH / FILTER EVENTS
// ============================================
function filterEvents(query) {
  const filtered = events.filter(function(event) {
    // .filter() creates a NEW array with only items that pass the test
    return event.name.toLowerCase().includes(query) ||
           event.date.includes(query);
    // includes() checks if a string contains another string
  });

  renderEvents(filtered); // show only matching events
}

// Listen for typing in the search box
document.getElementById('searchInput').addEventListener('input', function(e) {
  // 'input' event fires every time the user types a character
  filterEvents(e.target.value.trim().toLowerCase());
  // e.target is the search input itself, .value is what's typed
});

// ============================================
// 9. INITIAL LOAD — run when page first opens
// ============================================
sortEvents();
renderEvents(events);