
const obtenerPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        const posts = await response.json();

        return posts;

    } catch (error) {
        console.error('No se encuentra post', error);
        return [];
    }
};

const mostrarPosts = async () => {
    const postsData = document.getElementById('post-data');
    postsData.innerHTML = '';

    try {
        const posts = await obtenerPosts();
        const ul = document.createElement('ul');

        posts.forEach(post => {
            const li = document.createElement('li');
            const titulo = document.createElement('h3');
            titulo.textContent = post.title;
            const body = document.createElement('p');
            body.textContent = post.body
            li.appendChild(titulo);
            li.appendChild(body);

            ul.appendChild(li);
        });
        postsData.appendChild(ul);
    } catch (error) {
        console.error('no se encuentra post', error);
    }
};

function getPosts() {
    mostrarPosts();
}
