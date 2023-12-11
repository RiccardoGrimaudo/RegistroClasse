const studentForm = document.getElementById('student-form'); 
const rimuoviButton = document.getElementById('rimuovi-studente');  // variabili assegnate agli elementi HTML

function salvaStudenti() {      // funzione per salvare gli studenti nel localStorage
  localStorage.setItem('studenti', JSON.stringify(registro.studenti)); // dati convertiti in una stringa
}

function caricaStudenti() {     // funzione per caricare gli studenti dal localStorage
  const studentiSalvati = localStorage.getItem('studenti'); // ottiene i dati degli studenti dal localStorage
  if (studentiSalvati) {
    registro.studenti = JSON.parse(studentiSalvati); // dati convertiti in un oggetto 
  }
}

function aggiornaElencoStudenti() {     // per aggiornare l'elenco degli studenti nell'HTML
  const studentList = document.getElementById('student-list');
  studentList.innerHTML = ''; // rimuove tutti gli elementi precedenti dall'elenco

  registro.studenti.forEach((studente, indice) => {
    const studenteElemento = document.createElement('li');  // <li> per ogni studente
    studenteElemento.textContent = studente.toString(); // imposta il testo dell'elemento con la stringa dello studente

    const rimuoviButton = document.createElement('button'); // crea il bottone
    rimuoviButton.textContent = 'Rimuovi';
    rimuoviButton.addEventListener('click', function() {
      registro.rimuoviStudente(indice);
      salvaStudenti(); // salva gli studenti aggiornati nel localStorage
      aggiornaElencoStudenti();
    });

    studenteElemento.appendChild(rimuoviButton); // aggiunge il pulsante di rimozione come figlio dell'elemento studente
    studentList.appendChild(studenteElemento);
  });
}

studentForm.addEventListener('submit', function(event) {  // gestore per l'evento di invio del form
  event.preventDefault();

  const nome = document.getElementById('nome-input').value;
  const cognome = document.getElementById('cognome-input').value;

  const nuovoStudente = new RegistroClasse(nome, cognome);
  registro.aggiungiStudente(nuovoStudente);
  salvaStudenti();
  aggiornaElencoStudenti();

  document.getElementById('nome-input').value = '';
  document.getElementById('cognome-input').value = '';
  document.getElementById("visualizza-studenti").addEventListener("click", function() {
  });
});

rimuoviButton.addEventListener('click', function() {
  registro.rimuoviStudente(indice);
  salvaStudenti();
  aggiornaElencoStudenti();
});

window.addEventListener('load', function() {
  caricaStudenti();
  aggiornaElencoStudenti();
});