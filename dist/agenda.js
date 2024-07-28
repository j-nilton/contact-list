"use strict";
class Agenda {
    // Array de contatos
    constructor() {
        this.contato = [];
    }
    // Adicionar contato
    adicionarContato(contato) {
        this.contato.push(contato);
    }
    // Busca o contato
    buscarContato(nome) {
        let i;
        for (i = 0; i < this.contato.length; i++) {
            if (this.contato[i].nome == nome) {
                return this.contato[i];
            }
        }
        return undefined;
    }
    // Remover o contato
    removerContato(nome) {
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
