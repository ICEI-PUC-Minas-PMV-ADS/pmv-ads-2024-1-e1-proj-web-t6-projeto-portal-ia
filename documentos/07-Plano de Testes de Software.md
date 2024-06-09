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

|Caso de Teste    | CT-5.0 - TELA INICIAL - Verificar o header da página |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste |  Verificar a funcionalidade e a navegação do header da página. |
| Passos | 1 - Navegar pelo header e clicar em todos os botões e links disponíveis. <br />2 - Verificar se todos os botões e links redirecionam para as páginas corretas. <br />3 - Clicar na logo e verificar se redireciona para a tela inicial. <br />4 - Abrir todos os menus drop-down e verificar se todos os links dentro deles funcionam corretamente. |
| Critérios de êxito | 1 - Todos os botões e links do header devem redirecionar para as páginas corretas. <br />2 - A logo deve redirecionar para a tela inicial ao ser clicada. <br />3 - Todos os links dentro dos menus drop-down devem funcionar corretamente e redirecionar para as páginas corretas. |
| Responsável | Jéssica Melo. |

|Caso de Teste    | CT-5.1 - TELA INICIAL - Verificar o funcionamento do filtro de pesquisa e dos links da página Inicial |
|:---|:---|
| Requisitos Associados | RF-03 e RF-05 |
| Objetivo do Teste | Verificar se o filtro de pesquisa funciona corretamente e se todos os links na página inicial estão funcionando conforme esperado. |
| Passos | 1 - Navegar pela página inicial e localizar o filtro de pesquisa.<br>2 - Inserir diferentes termos de pesquisa no campo e pressionar "Enter".<br>3 - Verificar se você está sendo redirecionado corretamente para a página de resultados.<br>4 - Confirmar se os resultados exibidos correspondem aos termos de pesquisa inseridos <br>5 - Navegar pela página inicial e clicar em todos os links disponíveis.<br>6 - Verificar se todos os links redirecionam para as páginas corretas e sem erros. |
| Critérios de êxito | 1 - O filtro de pesquisa deve exibir resultados relevantes e corretos para os termos de pesquisa inseridos.<br>2 - A página de resultados de busca deve carregar corretamente após a busca.<br>3 - Todos os filtros adicionais devem funcionar corretamente e refinar os resultados conforme esperado.<br>4 - Todos os links na página inicial devem redirecionar para as páginas corretas sem erros. |
| Responsável | Jéssica Melo. |

|Caso de Teste    | CT-6 - Tela de Resultados |
|:---|:---|
| Requisitos Associados | RF-03, RF-04 e RF-08 |
| Objetivo do Teste | Objetivo: Verificar a presença e funcionalidade  |
| Passos | 1 - Verifique se o campo de busca está presente na página inicial. Digite um termo de pesquisa e verifique os resultados. Digite um termo inexistente e verifique a resposta da aplicação.<br>2 - Verifique se os filtros (Estudos, Trabalho, Lazer, Marketing) estão presentes na página inicial. Clique em cada filtro e verifique os resultados.<br>3 - Verifique se cada cartão de IA contém um link "Acessar".Clique no link "Acessar" e verifique o redirecionamento.
| Critérios de êxito | 1 - O campo de busca deve estar visível. Resultados devem aparecer de acordo com o termo pesquisado. Mensagem apropriada deve ser exibida para termos inexistentes.<br>2 -Os filtros devem estar visíveis. Resultados devem aparecer de acordo com o filtro aplicado.<br>3 - Todos os cartões de IA devem conter um link "Acessar". O redirecionamento deve levar para a página da IA correspondente. |
| Responsável | Willian Abreu. |


|Caso de Teste    | CT-7 - Tela de Perfil |
|:---|:---|
| Requisitos Associados | RF-05 e RF-13 |
| Objetivo do Teste | Validar e confirmar o preenchimento de todos os campos de dados e a alteração de imagem/foto.|
| Passos | 1. Fazer login no sistema com um usuário válido.<br>2. Navegar até a tela de perfil.<br>3. Verificar que todos os campos obrigatórios estão presentes e vazios (ou com dados de exemplo se aplicável).<br>4. Preencher todos os campos de acordo com as exigências de validação (ex: formatos de data, restrições de caracteres, etc.).<br>5. Tentar enviar um formulário com dados inválidos e verificar se as mensagens de erro são exibidas corretamente.<br>6. Fazer upload de uma nova imagem/foto de perfil.<br>7. Verificar que a nova imagem foi salva e está sendo exibida corretamente.<br>8. Salvar as alterações.<br>9. Fazer logout e login novamente para garantir que as alterações persistem. |
| Critérios de êxito | 1. O usuário consegue visualizar a tela de perfil após o login.<br>2. Todos os campos podem ser preenchidos corretamente.<br>3. Mensagens de erro são exibidas para entradas inválidas.<br>4. A imagem/foto de perfil pode ser alterada e a nova imagem é exibida corretamente.<br>5. As alterações nos dados e na imagem persistem após o logout e login novamente.|
| Responsável | Winnie Yvelise.|
