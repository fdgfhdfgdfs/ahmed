function submitData() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // ‰ﬁÊ„ » Œ“Ì‰ «·»Ì«‰«  ›Ì LocalStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));

        // —”«·… «·‰Ã«Õ
        document.getElementById('message').textContent = ' „ «” ·«„ »Ì«‰« ﬂ »‰Ã«Õ!';
        
        //  ‰ŸÌ› «·ÕﬁÊ· »⁄œ «·÷€ÿ ⁄·Ï «·“—
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        document.getElementById('message').textContent = 'Ì—ÃÏ ≈œŒ«· Ã„Ì⁄ «·»Ì«‰« .';
    }
}
