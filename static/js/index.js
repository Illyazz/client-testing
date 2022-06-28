const { fetchData } = require('./api');
const handlers = require('./handlers');

function changeHeader(username) {
    const header = document.getElementById('account-name');
    header.innerContent =username
}

function handleSubmit(event){ 
    event.preventDefault();
    console.log('This is the event>>>',event);
    const form = event.target;
    console.log('This is the event target >>>',event.target)
    console.log(('This is the name input section',event.target.name))
    const userName = form.name.value;
    console.log('This is the name input section value >>>',userName);
    changeHeader(userName)
    fetchData(userName)
}

function init(){
    const modeCheck = document.getElementById('dark-mode');
    const form = document.querySelector('#github-form')
    form.addEventListener('submit',handleSubmit)

    modeCheck.addEventListener('click', handlers.switchMode)
}

init()


module.exports = {init}
