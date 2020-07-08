
function fun() {


    const scriptURL = 'https://script.google.com/macros/s/AKfycby14SCnYdATUEYeiyrcNdp19X_DjQ46mzWgouEoS8THEYrRfWk/exec'

    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            reset_contact()
            .catch(error => console.error('Error!', error.message))
    })
}

function reset_contact() {
    document.getElementById('Name').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Subject').value = '';
    document.getElementById('Message').value = '';
}
