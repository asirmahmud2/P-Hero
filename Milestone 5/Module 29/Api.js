function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        //Promise A response
        .then(response => response.json())
        // Convert the response to json
        .then(json => console.log(json))
    //receive the json and print 
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}

// {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// }

const displayPost = (post) => {


    // get The container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";

    post.forEach(p => {
        //2. create HTML element
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${p.title}</h2>
            <p>${p.body}</p>
        </div>
        `;
        postContainer.appendChild(postCard);
    });
}