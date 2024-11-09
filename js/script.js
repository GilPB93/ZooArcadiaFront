// Function to update the date and time on reports
function updateDateTime() {
    let now = new Date();
    let datetime = now.toLocaleString();
    document.getElementById('datetime').innerText = datetime;
}
// Update the date and time every second
setInterval(updateDateTime, 1000);
// Initial call to display the date and time immediately
updateDateTime();