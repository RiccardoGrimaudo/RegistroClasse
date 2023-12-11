class RegistroClasse {
    nome;
    cognome;
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    toString() {
        return this.nome + " " + this.cognome;
    }
}

class ElencoStudenti {
    studenti;
    constructor() {
        this.studenti = []; // inizializzazione dell'array studenti
    }

    aggiungiStudente(studente1) {
        let index = this.studenti.findIndex(studente => studente.cognome > studente1.cognome); // confronta il cognome di ogni studente con il cognome del nuovo studente 
        if (index === -1) { // se non viene trovato un indice in cui inserire il nuovo studente
            this.studenti.push(studente1); // push per aggiungere il nuovo studente alla fine dell'array
        } else {
            this.studenti.splice(index, 0, studente1); // splice per insere lo studente in una determinata posizione
        }

        console.log("Nuovo studente: " + studente1);
    }

    visualizzaStudenti() {
        console.log(`Elenco studenti: ${this.studenti.join(", ")}`); // gli elementi dell'array saranno separati da una virgola
    }

    aggiornaStudente(indice, nuovoNome, nuovoCognome) {
        if (indice >= 0 && indice < this.studenti.length) { // verifica se l'indice è valido e si trova all'interno dell'array
            this.studenti[indice] = new RegistroClasse(nuovoNome, nuovoCognome); // aggiorna lo studente all'indice specificato con nome e cognome

            console.log(`Studente aggiornato all'indice ${indice}: ${nuovoNome} ${nuovoCognome}`);
        } else {
            console.log("Indice non valido. Ritenta");
        }
    }

    rimuoviStudente(indice) {
        if (indice >= 0 && indice < this.studenti.length) { // verifica se l'indice è valido
            this.studenti.splice(indice, 1); // rimuovere un solo studente dall'array, all'indice 1

            console.log("Studente rimosso.");
        } else {
            console.log("Impossibile rimuovere lo studente."); // se l'indice non è valido
        }
    }
}

const registro = new ElencoStudenti();

registro.aggiungiStudente(new RegistroClasse("Calogero", "Raia"));
registro.aggiungiStudente(new RegistroClasse("Erika", "Ciminelli"));
registro.aggiungiStudente(new RegistroClasse("Juri", "Fiorito"));

registro.visualizzaStudenti(); // visualizza l'elenco degli studenti

registro.aggiornaStudente(2, "Riccardo", "Grimaudo"); // aggiorna lo studente in base all'indice, con un nuovo nome e cognome

registro.visualizzaStudenti(); // visualizza l'elenco aggiornato degli studenti

registro.rimuoviStudente(1); // rimuove lo studente in base all'indice

registro.visualizzaStudenti(); // visualizza l'elenco aggiornato degli studenti