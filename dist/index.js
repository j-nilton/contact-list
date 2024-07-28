"use strict";
// Exemplo de contatos para testar o código
const contato1 = new Contato("João Silva", "123456789", "joao.silva@example.com");
const contato2 = new Contato("Maria Santos", "987654321", "maria.santos@example.com");
const contato3 = new Contato("Pedro Oliveira", "456789123", "pedro.oliveira@example.com");
// Criando uma instância da agenda
const minhaAgenda = new Agenda();
// Adicionando os contatos à agenda
minhaAgenda.adicionarContato(contato1);
minhaAgenda.adicionarContato(contato2);
minhaAgenda.adicionarContato(contato3);
// Testando a busca de um contato pelo nome
console.log(minhaAgenda.buscarContato("Maria Santos")); // Deve retornar o objeto do contato de Maria Santos
// Testando a remoção de um contato pelo nome
console.log(minhaAgenda.removerContato("Pedro Oliveira")); // Deve retornar true, indicando que o contato foi removido
// Verificando se o contato foi removido
console.log(minhaAgenda.buscarContato("Pedro Oliveira")); // Deve retornar undefined, pois o contato foi removido
// Verifica os contatos restantes
console.log(minhaAgenda.contato);
