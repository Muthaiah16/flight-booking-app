document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    const bookingDetails = `Flight booked from ${origin} to ${destination} on ${date}.`;

    document.getElementById('booking-details').innerText = bookingDetails;
});
