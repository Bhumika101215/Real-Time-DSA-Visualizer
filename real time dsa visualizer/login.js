// Example: Login call
async function login(email, password) {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if(response.ok) {
        window.location.href = "dashboard.html"; // Login ke baad dashboard par bhejein
    } else {
        alert(data.message);
    }
}