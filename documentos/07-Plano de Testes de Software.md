# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<br />Site publicado na internet;
<br />Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir. 

|Caso de Teste    | CT-1 - Tela de Contato |
|:---|:---|
| Requisitos Associados | RF-05, RF-06 e RF-07 |
| Objetivo do Teste | Validar que existe uma area destinada ao envio de mensagens ao suporte, area para a exibição dos meios de contato e apresentação da equipe responsável.|
| Passos | 1 - Validar que todos os elementos gráficos estão na tela (mensagem, contato e equipe responsável). <br />2 - Na area de suporte, preencher campos "Email", "Mensagem". Após o preenchimento, fazer o envio do chamado clicando no botão "Enviar". |
| Critérios de êxito | 1 - Que todos os elementos gráficos estejam presentes na tela. <br />2 - Que o usuário receba a seguinte mensagem de confirmação "Mensagem enviada com sucesso".|
| Responsável | Cássia de Arruda.|

|Caso de Teste    | CT-2 - Fórum - Listagem |
|:---|:---|
| Requisitos Associados | RF-12 |
| Objetivo do Teste | Validar que os tópicos discutidos estejam listados da tela inicial do Fórum. |
| Passos | 1 - Validar que todos os elementos gráficos estão na tela (listagem das discussões). <br />2 - Clicar no primeiro tópico da listagem.|
| Critérios de êxito | 1 - Que todos os elementos gráficos estejam presentes na tela. <br />2 - Que o usuário seja direcionado a uma nova tela que exibe mais detalhes sobre a discussão escolhida.  |
| Responsável | Cássia de Arruda. |

|Caso de Teste    | CT-3 - Fórum - Discussão |
|:---|:---|
| Requisitos Associados | RF-12 |
| Objetivo do Teste | Validar que o tópico escolhido seja exibido na tela de discussão e que um novo comentário seja persistido. |
| Passos | 1 - Validar que todos os elementos gráficos estão na tela (campos para envio de comentário). <br />2 - Preencher campos "Seu nome", "Seu comentário" e clicar no botão "Adicione Comentário".|
| Critérios de êxito | 1 - Que todos os elementos gráficos estejam presentes na tela. <br />2 - Que o comentário seja persistido. |
| Responsável | Cássia de Arruda. |
 
|Caso de Teste    | CT-4 - Cadastro |
|:---|:---|
| Requisitos Associados | RF-09 |
| Objetivo do Teste | Validar que oas informações digitadas no cadastro estejam salvas para utilização posterior. |
| Passos | 1 - Validar que todos os elementos gráficos estejam na tela (Área para inserção de: Nome, usuário, e-mail, celular, senha, confirmar senha e pergunta secreta). <br />2 - Preencher campos "Nome Completo", "Usuário", "e-mail", "Celular", "senha", "confirmar senha" e "pergunta secreta". Checar se cada campo está de acordo com suas regras estabelecidas. Clicar no botão "Cadastrar".|
| Critérios de êxito | 1 - Que todos os elementos gráficos estejam presentes na tela. <br />2 - Que cada campo esteja de acordo com suas regras estabelecidas. <br/>3 - Que as informações inseridas fiquem salvas no localStorage. |
| Responsável | Tiago Marques. |
