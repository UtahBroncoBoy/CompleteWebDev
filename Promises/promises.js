const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    results.map(urlItem =>{
        console.log(urlItem);
    })
}).catch(() => console.log('There has been an error fetching data.'))