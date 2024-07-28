class Agenda {
    contato: Contato[];

    // Array de contatos
    constructor() {
        this.contato = [];
    }

    // Adicionar contato
    adicionarContato(contato: Contato) {
        this.contato.push(contato);
    }

    // Busca o contato
    buscarContato(nome: string): Contato | undefined {
        let i;
        for (i = 0; i < this.contato.length; i++) {
            if (this.contato[i].nome == nome) {
                return this.contato[i];
            }
        }
        return undefined;
    }

    // Remover o contato
    removerContato(nome: string): boolean {
        let i;
        for (i = 0; i < this.contato.length; i++) {
            if (this.contato[i].nome == nome) {
                this.contato.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}