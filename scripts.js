document.addEventListener('DOMContentLoaded', () => {
    const adminSection = document.querySelector('#admin');
    const newStoryForm = document.createElement('form');

    newStoryForm.innerHTML = `
        <label for="title">Название рассказа:</label>
        <input type="text" id="title" name="title">
        <label for="content">Содержание:</label>
        <textarea id="content" name="content"></textarea>
        <button type="submit">Добавить рассказ</button>
    `;

    adminSection.appendChild(newStoryForm);

    newStoryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;
        const storySection = document.querySelector('#stories');
        const newStory = document.createElement('div');
        newStory.classList.add('story');
        newStory.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        storySection.appendChild(newStory);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Ваше сообщение отправлено!");
    });
});
