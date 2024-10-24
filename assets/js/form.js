document.getElementById('blogForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!username || !title || !content) {
        errorMessage.textContent = 'Please complete all fields.';
        return;
    }

    const blogPost = {
        username,
        title,
        content,
        date: new Date().toLocaleString()
    };

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = '../blog.html';
});
