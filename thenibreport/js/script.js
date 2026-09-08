// Revela / oculta la nota manuscrita asociada a un artículo
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.seal-btn');

  buttons.forEach((btn) => {
    const targetId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(targetId);
    if (!panel) return;

    btn.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        // Deja un momento para que el panel se despliegue antes de llevar la vista
        setTimeout(() => {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    });
  });
});
