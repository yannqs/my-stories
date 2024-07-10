document.addEventListener('DOMContentLoaded', () => {
    // Админ-панель
    const adminSection = document.querySelector('#admin');
    const newStoryForm = document.createElement('form');

    newStoryForm.innerHTML = `
        <label for="title">Название рассказа:</label>
        <input type="text" id="title" name="title" class="form-control mb-2">
        <label for="content">Содержание:</label>
        <textarea id="content" name="content" class="form-control mb-2"></textarea>
        <button type="submit" class="btn btn-primary">Добавить рассказ</button>
    `;

    adminSection.appendChild(newStoryForm);

    newStoryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;
        const storySection = document.querySelector('#stories');
        const newStory = document.createElement('div');
        newStory.classList.add('story', 'mt-4');
        newStory.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        storySection.appendChild(newStory);
    });

    // Форма контактов
    const contactForm = document.querySelector('#contacts form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Ваше сообщение отправлено!');
    });
});
