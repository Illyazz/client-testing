
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
