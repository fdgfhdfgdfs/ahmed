function submitData() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // ���� ������ �������� �� LocalStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));

        // ����� ������
        document.getElementById('message').textContent = '�� ������ ������� �����!';
        
        // ����� ������ ��� ����� ��� ����
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        document.getElementById('message').textContent = '���� ����� ���� ��������.';
    }
}
