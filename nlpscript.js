// script.js
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
}

function showCommentForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('comment-form').style.display = 'block';
}

function submitComment() {
    const commentText = document.getElementById('comment-text').value;
    const commentContainer = document.createElement('div');
    commentContainer.innerHTML = `<p>${commentText}</p>`;
    document.body.appendChild(commentContainer);

    // You may want to send the comment to the server/database here

    // Clear the comment textarea
    document.getElementById('comment-text').value = '';

    // Hide the comment form
    document.getElementById('comment-form').style.display = 'none';
}
function closePopup(formId) {
    document.getElementById(formId).style.display = 'none';
}
