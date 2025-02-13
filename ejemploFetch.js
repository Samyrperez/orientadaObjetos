fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => {
    const postTitle = data.title;
    const postBody = data.body;
    const post = document.createElement('div');
    post.innerHTML = `
        <h2>${postTitle}</h2>
        <p>${postBody}</p>
    `;
    document.body.appendChild(post);
})
.catch(error => console.error(error));