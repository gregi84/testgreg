document.getElementById('waitlistForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var form = this;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset(); // Reset the form after successful submission
            document.getElementById('thankYouMessage').classList.remove('hidden'); // Display the thank you message
        } else {
            alert("Oops! There was a problem with your submission. Please try again later.");
        }
    }).catch(error => {
        alert("Oops! There was a problem with your submission. Please try again later.");
    });
});
