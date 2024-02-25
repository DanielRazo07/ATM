var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "91011" }
];

var currentUser = null;

function authenticate() {
    var accountIndex = document.getElementById('account').value;
    var password = document.getElementById('password').value;
    
    if (cuentas[accountIndex].password === password) {
        currentUser = cuentas[accountIndex];
        document.getElementById('login').style.display = 'none';
        document.getElementById('options').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function checkBalance() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('balance').style.display = 'block';
    document.getElementById('current-balance').innerText = `Current Balance: $${currentUser.saldo}`;
}

function deposit() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
}

function withdraw() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
}

function confirmTransaction() {
    var amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Invalid amount. Please enter a valid amount.');
        return;
    }

    if (document.getElementById('transaction').style.display === 'block') {
        if (document.getElementById('options').style.display === 'none') {
            currentUser.saldo += amount;
            alert(`$${amount} has been deposited. New balance: $${currentUser.saldo}`);
        } else {
            if (currentUser.saldo - amount < 10) {
                alert('Transaction failed. Insufficient balance. Minimum balance is $10.');
            } else if (currentUser.saldo + amount > 990) {
                alert('Transaction failed. Maximum balance limit exceeded. Maximum balance is $990.');
            } else {
                currentUser.saldo -= amount;
                alert(`$${amount} has been withdrawn. New balance: $${currentUser.saldo}`);
            }
        }
    }

    document.getElementById('transaction').style.display = 'none';
    document.getElementById('options').style.display = 'block';
}

