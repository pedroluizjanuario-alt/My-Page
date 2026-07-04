// Envio do formulário de contato via Formspree, sem redirecionar a página.
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const statusEl = form.querySelector('.form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        statusEl.textContent = 'Mensagem enviada. Volto o contato em breve.';
        statusEl.className = 'form-status success';
        form.reset();
      } else {
        statusEl.textContent = 'Algo deu errado. Tenta de novo ou manda direto pro e-mail.';
        statusEl.className = 'form-status error';
      }
    } catch (err) {
      statusEl.textContent = 'Falha de conexão. Tenta de novo em instantes.';
      statusEl.className = 'form-status error';
    } finally {
      submitBtn.textContent = originalLabel;
      submitBtn.disabled = false;
    }
  });
});
