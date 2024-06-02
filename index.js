const container = document.querySelector('.container');

function createHtmlString(element) {
    return `
        <h2 class='title'>Заголовок: ${element.title}</h2>
        <p>Статья: ${element.body}</p><br>
        `
}

function addToPage(newPostHtml) {
    container.insertAdjacentHTML('beforeEnd', newPostHtml);
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const newPostHtml = createHtmlString(element);
            addToPage(newPostHtml);
        });
    })
    .catch(error => console.log(error));
})
