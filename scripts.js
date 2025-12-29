// Small interactions for the portfolio
document.addEventListener('DOMContentLoaded', function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Configure this endpoint to your form receiver (Formspree, your API, etc.)
  // Example Formspree endpoint: 'https://formspree.io/f/yourFormId'
  // If left empty, form will fallback to opening a mailto: link.
  const CONTACT_ENDPOINT = 'https://formspree.io/f/mbdjwygg';

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  function showMessage(text, isError){
    if(!msg) return;
    msg.textContent = text;
    msg.style.color = isError ? '#ff7b7b' : '';
  }

  if(form){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const message = data.get('message') || '';

      // Basic validation
      if(!email || !message){
        showMessage('Por favor completa tu email y mensaje.', true);
        return;
      }

      showMessage('Enviando…');

      if(CONTACT_ENDPOINT && CONTACT_ENDPOINT.includes('formspree.io')){
        // Send as form-encoded to Formspree
        try{
          const res = await fetch(CONTACT_ENDPOINT, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: data
          });
          const json = await res.json();
          if(res.ok){
            showMessage('Mensaje enviado. Gracias — te responderé pronto.');
            form.reset();
          } else {
            showMessage(json.error || 'Error enviando el mensaje.', true);
          }
        }catch(err){
          showMessage('Error de red al enviar el mensaje.', true);
        }
        return;
      }

      if(CONTACT_ENDPOINT){
        // Generic POST JSON endpoint
        try{
          const res = await fetch(CONTACT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ name, email, message })
          });
          if(res.ok){
            showMessage('Mensaje enviado. Gracias — te responderé pronto.');
            form.reset();
          } else {
            const txt = await res.text();
            showMessage('Error del servidor: ' + txt, true);
          }
        }catch(err){
          showMessage('Error de red al enviar el mensaje.', true);
        }
        return;
      }

      // Fallback: open user's mail client
      const subject = encodeURIComponent('Contacto desde portafolio: ' + name);
      const body = encodeURIComponent('Email: ' + email + '\n\n' + message);
      window.location.href = `mailto:${encodeURIComponent('canoezequiel7802@gmail.com')}?subject=${subject}&body=${body}`;
    });
  }
});
