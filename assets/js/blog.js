const postsList = document.getElementById('postsList');
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

if (blogPosts.length === 0) {
    postsList.innerHTML = '<li>No blog posts available.</li>';
} else {
    blogPosts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="card mb-4 shadow-sm">
    <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.content}</p>
        <div class="d-flex justify-content-between">
            <small class="text-muted">Posted by <strong>${post.username}</strong></small>
            <small class="text-muted">${post.date}</small>
        </div>
    </div>
</div>

            
        `;
        postsList.appendChild(li);
    });
}

document.getElementById('backBtn').addEventListener('click', function () {
    window.location.href = 'index.html';
});
