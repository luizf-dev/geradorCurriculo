<?php

//* Gera um array com os dados a serem enviados para impressão no currículo
//* Cada elemento do array recebe o valor de um campo do formulário

$dados = array(
    'nome' => $_POST['nome'],
    'estado_civil' => $_POST['estado-civil'],
    'data_nascimento' => $_POST['data-nascimento'],
    'rua' => $_POST['rua'],
    'numero' => $_POST['numero'],
    'bairro' => $_POST['bairro'],
    'cidade' => $_POST['cidade'],
    'estado' => $_POST['estado'],
    'telefone' => $_POST['telefone'],
    'email' => $_POST['email'],


    'links' => isset($_POST['link']) ?
          array(
              'descricoes' => $_POST['descricao'],
              'links' => $_POST['link'],
          ) : null, //* Se o usuário não adicionou nenhuma formação, esse elemento ficará nulo


    'experiencias' => isset($_POST['experiencia-cargo']) ? 
          array(
            'cargos' => $_POST['experiencia-cargo'],
            'empresas' => $_POST['experiencia-empresa'],
            'inicios' =>  $_POST['experiencia-inicio'],
            'fins' => $_POST['experiencia-fim'],
          ) :null,// * Se o usuário não adicionou nenhuma experiência, esse elemento ficará nulo


    'formacoes' => isset($_POST['formacao-curso']) ?
          array(
              'cursos' => $_POST['formacao-curso'],
              'instituicoes' => $_POST['formacao-instituicao'],
              'inicios' => $_POST['formacao-inicio'],
              'conclusoes' => $_POST['formacao-conclusao']
          ) : null, // * Se o usuário não adicionou nenhuma formação, esse elemento ficará nulo


    'cursos' => isset($_POST['curso-aperfeicoamento']) ?
        array(
            'cursosAperfeicoamentos' => $_POST['curso-aperfeicoamento'],
            'instituicoes' => $_POST['curso-instituicao'],
            'inicios' => $_POST['curso-inicio'],
            'conclusoes' => $_POST['curso-conclusao'],
            'cargasHorarias' => $_POST['curso-cargaHoraria']
        ) : null, //* Se o usuario não adicionou nenhum curso ou aperfeiçoamento, esse elemento ficará nulo

    'minhasHabilidades' => isset($_POST['habilidade']) ?
        array(
            'habilidades' => $_POST['habilidade']
        ) : null, //* Se o usuario não adicionou nenhuma habilidade, esse elemento ficará nulo

    'sobreMim' => isset($_POST['sobre']) ?
        array(
            'textoSobre' => $_POST['sobre']
        ) : null, //* Se o usuario não adicionou nenhuma habilidade, esse elemento ficará nulo
);

//? Carrega o arquivo referente ao modelo de currículo selecionado
//? Quando faz isso, poderemos imprimir o conteúdo da variável $dados no currículo
require_once("modelo/modelo.php");