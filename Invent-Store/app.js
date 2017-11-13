// const electron = require('electron');
// const { ipcRenderer } = electron;


// const from = document.querySelector('form');
// from.addEventListener('submit', submitForm);

function submitForm() {
    // e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (email == '' || email == ' ' || password == '' || password == ' ' ) {
        alert('please complete login requirment');
    } else {
        // ipcRenderer.send('item:add', item)
        window.URL('./src/home.html')
    }
}