const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

const getData = async function() {
const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url)));
console.log('users', await users.json());
console.log('posta', await posts.json());
console.log('albums', await albums.json());
}

getData()