# todo-back

Back-end do projetos ToDos Unesp utilizando MySQL e JavaScript.

## Instalação

É necessário o uso do node-js e do mysql server.
Para a configuração do banco de dados, faça a instalação do [MySQL Server](https://dev.mysql.com/downloads/) (no sistema operacional Windows, recomendo a utilização do [XAMPP](https://www.apachefriends.org/pt_br/index.html)).
Clone o repositório e execute o comando:

``` bash
npm install
```

Assim que todas as dependências forem instaladas, o próximo passo é configurar a conexão com o banco de dados. Consulte o arquivo ".env" para a devida configuração de senha.
Configurado corretamente, execute o comando:

``` bash
npm run migrate
```

## Executando

Execute o comando abaixo para inicar o servidor:

``` bash
npm start
```

## Créditos

Todo o desenvolvimento foi feito para um trabalho universitário do Curso de Engenharia de Controle e Automação , para a matéria Sistema de Computacionais na UNESP Sorocaba.
