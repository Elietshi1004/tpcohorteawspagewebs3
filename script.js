// Gestion du formulaire de connexion
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      // Rediriger l'utilisateur vers la page d'accueil
      window.location.href = '/';
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    alert('Une erreur est survenue. Veuillez réessayer plus tard.');
  }
});

// Gestion du formulaire d'inscription
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }

  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });

    if (response.ok) {
      alert('Inscription réussie. Vous pouvez maintenant vous connecter.');
      window.location.href = 'login.html';
    } else {
      alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    alert('Une erreur est survenue. Veuillez réessayer plus tard.');
  }
});
