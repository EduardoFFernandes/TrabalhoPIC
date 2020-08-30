# sitrabalho/Trabalho_SI

Repositório do trabalho de Sistemas de Informação - UnB

## Getting Started

Download links:

SSH clone URL: ssh://git@git.jetbrains.space/trabalhosi/sitrabalho/Trabalho_SI.git

HTTPS clone URL: https://git.jetbrains.space/trabalhosi/sitrabalho/Trabalho_SI.git



These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Prérequisitos para esse código funcionar:

vsCode
npm install nodemon --save
npm install express --save
npm install bodyParser --save
npm install handlebars --save
npm install pg --save

com Postgres 12 instalado crie um Database e com os seus dados configure o arquivo configDatabase.js:

user: 'nome do Usuario',
host: 'localhost',
database: 'nome do Database',
password: 'senha',
port: 5432,

e crie essa tabela:

CREATE TABLE users(
    id SERIAL,
    name VARCHAR(255),
    email VARCHAR(255)
);

Nesse primeiro momento eu fiz apenas um CRUD simples com node.js, então a estrutura para fazermos nosso projeto ja foi criada. Proximo passo é decidir como sera nosso banco de dados.

## Deployment

Add additional notes about how to deploy this on a production system.

## Resources

Add links to external resources for this project, such as CI server, bug tracker, etc.


(test)

