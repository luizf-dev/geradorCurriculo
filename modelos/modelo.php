<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Currículo - Imprimir Modelo</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="img/icone-formacao-1.png" type="image/x-icon">
</head>
<body>
    <main class="print">
        <section class="topo">
            <img src="img/icone-formacao-1.png" alt="">
            <h1 class="nome"><?= $dados['nome']; ?></h1>
            <p><span>Rua: </span><?= $dados['rua']; ?><span> | N°: </span><?= $dados['numero']; ?><span> | Bairro: </span>  <?= $dados['bairro']; ?></p>
            <p><span>Cidade: </span><?= $dados['cidade']; ?></p> 
            <p><span>Estado: </span><?= $dados['estado']; ?></p> 
            <p><span>Telefone(s): </span><?= $dados['telefone']; ?></p>        
            <p><span>Email: </span><?= $dados['email']; ?></p>
            <?php if($dados['links']) { ?>
                <?php for($i = 0; $i < sizeof($dados['links']['links']); $i++) { ?>
                    <p><span><?= $dados['links']['descricoes'][$i] ?>: </span><?= $dados['links']['links'][$i] ?></p>                               
                <?php } ?>                
            <?php } ?>
        </section><hr>


        <section class="conteudo">             
            <div class="div-experiencias">
                <?php if($dados['experiencias']) { ?>
                    <h3>Experiência Profissional</h3>

                    <ul class="lista-topicos">
                        <?php for($i = 0; $i < sizeof($dados['experiencias']['cargos']); $i++) { ?>
                            <li>
                                <div>
                                    <h4><?= $dados['experiencias']['cargos'][$i] ?></h4>
                                    <p><?= $dados['experiencias']['empresas'][$i] ?></p>
                                    <p><?= $dados['experiencias']['inicios'][$i] ?> - <?= $dados['experiencias']['fins'][$i] ?></p>
                                </div>
                            </li>
                        <?php } ?>
                    </ul>
                <?php } ?>
            </div>

            <div class="div-formacoes">        
                <?php if($dados['formacoes']) { ?>
                    <h3>Formação Acadêmica</h3>

                    <ul class="lista-topicos">
                        <?php for($i = 0; $i < sizeof($dados['formacoes']['cursos']); $i++) { ?>
                            <li>
                                <div>
                                    <h4><?= $dados['formacoes']['cursos'][$i] ?></h4>
                                    <p><?= $dados['formacoes']['instituicoes'][$i] ?></p>
                                    <p><?= $dados['formacoes']['inicios'][$i] ?> - <?= $dados['formacoes']['conclusoes'][$i] ?></p>
                                </div>
                            </li>
                        <?php } ?>
                    </ul>
                <?php } ?>
            </div>

            <div class="div-cursos">        
                <?php if($dados['cursos']) { ?>
                    <h3>Cursos e Aperfeiçoamentos</h3>

                    <ul class="lista-topicos">
                        <?php for($i = 0; $i < sizeof($dados['cursos']['cursosAperfeicoamentos']); $i++) { ?>
                            <li>
                                <div>
                                    <h4><?= $dados['cursos']['cursosAperfeicoamentos'][$i] ?></h4>
                                    <p><?= $dados['cursos']['instituicoes'][$i] ?></p>
                                    <p><?= $dados['cursos']['inicios'][$i] ?> - <?= $dados['cursos']['conclusoes'][$i] ?></p>
                                    <p><?= $dados['cursos']['cargasHorarias'][$i] ?></p>
                                </div>
                            </li>
                        <?php } ?>
                    </ul>
                <?php } ?>
            </div>

            <div class="div-habilidades">        
                <?php if($dados['minhasHabilidades']) { ?>
                    <h3>Habilidades</h3>

                    <ul class="lista-topicos">
                        <?php for($i = 0; $i < sizeof($dados['minhasHabilidades']['habilidades']); $i++) { ?>
                            <li>
                                <div>
                                    <h4><?= $dados['minhasHabilidades']['habilidades'][$i] ?></h4>
                                </div>
                            </li>
                        <?php } ?>
                    </ul>
                <?php } ?>
            </div>

            <div class="div-sobre">        
                <?php if($dados['sobreMim']) { ?>
                        <h3>Sobre Mim</h3>

                    
                        <?php for($i = 0; $i < sizeof($dados['sobreMim']['textoSobre']); $i++) { ?>
                            
                            <p><?= $dados['sobreMim']['textoSobre'][$i] ?></p>
                           
                        <?php } ?>
                   
                <?php } ?>
            </div>
        </section>
        <button class="no-print button-print" onclick="window.print();"> Imprimir</button>  
    </main>
</body>
</html>