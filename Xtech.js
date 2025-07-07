// Dark mode
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});

// Contato
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  try {
    const res = await fetch('https://example.com/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
      showStatus('form-status', 'Mensagem enviada com sucesso! ✅');
      this.reset();
    } else throw new Error();
  } catch {
    showStatus('form-status', 'Erro ao enviar.', true);
  }
});

// Feedback
document.getElementById('feedback-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const feedback = this.querySelector('textarea').value;
  try {
    const res = await fetch('https://example.com/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ feedback }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
      showStatus('feedback-status', 'Obrigado pelo feedback! ✅');
      this.reset();
    } else throw new Error();
  } catch {
    showStatus('feedback-status', 'Erro ao enviar.', true);
  }
});

function showStatus(id, msg, isError = false) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.color = isError ? 'red' : 'green';
  setTimeout(() => el.textContent = '', 3000);
}
