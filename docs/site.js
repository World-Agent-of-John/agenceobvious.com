// La carte d'exemple : Valider joue l'exécution, rien n'est envoyé.
const carte = document.getElementById("carte");
if (carte) {
  const valider = document.getElementById("valider");
  const rejouer = document.getElementById("rejouer");
  const etat = document.getElementById("etat");
  const fait = document.getElementById("fait");
  valider.addEventListener("click", () => {
    carte.classList.add("validee");
    etat.textContent = "Validé";
    fait.textContent = "Fait. Rien n'est parti avant votre accord.";
    valider.hidden = true;
    rejouer.hidden = false;
    rejouer.focus({ preventScroll: true });
  });
  rejouer.addEventListener("click", () => {
    carte.classList.remove("validee");
    etat.textContent = "À valider";
    fait.textContent = "Rien ne part tant que vous n'avez pas validé.";
    rejouer.hidden = true;
    valider.hidden = false;
    valider.focus({ preventScroll: true });
  });
}

// Le formulaire part vers le webhook n8n ; en cas d'échec, l'adresse mail reste proposée.
const formulaire = document.getElementById("formulaire");
if (formulaire) {
  const bouton = document.getElementById("envoyer");
  const message = document.getElementById("message-envoi");
  formulaire.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";
    message.classList.remove("erreur");
    if (!formulaire.reportValidity()) return;
    bouton.disabled = true;
    bouton.textContent = "Envoi…";
    try {
      const r = await fetch(formulaire.action, { method: "POST", body: new FormData(formulaire) });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(String(r.status));
      const zone = document.getElementById("zone-formulaire");
      zone.innerHTML =
        '<div class="merci" tabindex="-1"><h3>Merci, c\'est reçu.</h3><p>Nous revenons vers vous très vite, à l\'adresse que vous avez donnée.</p></div>';
      zone.firstElementChild.focus();
    } catch {
      message.classList.add("erreur");
      message.innerHTML =
        'L\'envoi n\'a pas abouti. Réessayez, ou écrivez-nous à <a href="mailto:john@agenceobvious.com">john@agenceobvious.com</a>.';
      bouton.disabled = false;
      bouton.textContent = "Envoyer";
    }
  });
}
