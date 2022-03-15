function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username === 'Mark' && password === '123456'){
        alert('Login successfuly!');

    }else {
        alert('login failed')
    }
}
