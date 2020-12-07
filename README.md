# todo-back

Back-end do projetos ToDos Unesp utilizando MySQL e JavaScript.

## Instalação

É necessário o uso do node-js e do mysql server.
Para a configuração do banco de dados, faça a instalação do [MySQL Server](https://dev.mysql.com/downloads/) (no sistema operacional Windows, recomendo a utilização do [XAMPP](https://www.apachefriends.org/pt_br/index.html)).
Em seguida, conecte-se com a instância do seu database (sugiro diretamente pelo console ou o uso do [DBeaver](https://dbeaver.io/)), e crie um novo database com o nome *todounesp*.
Clone o repositório e execute o comando:

``` bash
npm install
```

Assim que todas as dependências forem instaladas, o próximo passo é configurar a conexão com o banco de dados. Consulte o arquivo *.env* para a devida configuração de senha como no exemplo abaixo:

``` env
// .env

# Database
DATABASE_HOST=localhost
DATABASE_NAME=todounesp
DATABASE_USER=root
DATABASE_PASSWORD=
```

Se o usuário root não tiver senha configurada (normalmente o padrão), deixe o campo vazio.
Configurado corretamente, execute o comando:

``` bash
npm run migrate
```

Este comando criará automaticamente as tabelas no banco de dados.

## Executando

Execute o comando abaixo para inicar o servidor:

``` bash
npm start
```

Você pode realizar requisições via [Postman](https://www.postman.com/) utilizando a coleção exportada dentro deste repositório neste [link](https://github.com/caioaletroca/todo-back/blob/main/ToDo%20Unesp.postman_collection.json), acessando o endereço <http://localhost:2999>.

## Créditos

Todo o desenvolvimento foi feito para um trabalho universitário do Curso de Engenharia de Controle e Automação , para a matéria Sistema de Computacionais na UNESP Sorocaba.
