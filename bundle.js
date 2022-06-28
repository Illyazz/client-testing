(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const { renderPublicRepoCount} = require('./helpers')


async function fetchData(username) {
    try{
    await fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => renderPublicRepoCount(data))
}catch {
    console.log('error')
}
}

module.exports = {fetchData}

},{"./helpers":3}],2:[function(require,module,exports){
const { darkMode, lightMode } = require('./helpers');

function switchMode(e){
    console.log('mode')
    e.target.checked ? darkMode() : lightMode();
}

module.exports = { switchMode }
},{"./helpers":3}],3:[function(require,module,exports){
function darkMode(){
    const body = document.querySelector('body');
    body.className = 'dark';
}

function lightMode(){
    const body = document.querySelector('body');
    body.className = 'light';
}

function renderPublicRepoCount(userData){
    const count = userData.public_repos;
    const span = document.getElementById('repo-count');
    span.textContent = count;
    const descrip = document.querySelector('#descrip')
    descrip.textContent = ' public repos'
    document.getElementById('name').value = ''
};

function renderName(name){
    const accountNameHolder = document.getElementById('account-name')
    accountNameHolder.textContent = name;
}

function renderError(err){
    const error = document.createElement('div');
    error.textContent = `Oh no! ${err}`;
    error.className = 'error';
    error.onclick = closeError;
    document.querySelector('header').appendChild(error);
}

function closeError(){
    const error = document.querySelector('.error');
    error.remove();
}

module.exports = { darkMode, lightMode, renderName, renderPublicRepoCount, renderError, closeError }
},{}],4:[function(require,module,exports){
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

},{"./api":1,"./handlers":2}]},{},[4]);
