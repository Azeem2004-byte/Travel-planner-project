document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const tripList = document.getElementById('trip-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${destination} from ${startDate} to ${endDate}`;
    tripList.appendChild(listItem);

    // Clear the form
    this.reset();
});