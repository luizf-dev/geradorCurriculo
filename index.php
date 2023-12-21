<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gerador de Currículos</title>
    <link rel="shortcut icon" href="assets/img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
    <body>    
        <nav class="navbar-light bg-dark">
            <div class="container">
                <img src="assets/img/logo.png" alt="logo">
                <a class="title"  href="index.php"> Gerador de Currículos</a>
            </div>            
        </nav>
        <main>
            <form action="gerarCurriculo.php" method="post" target="_blank" enctype="multipart/form-data">
                <div class="card">
                    <div class="card-body col-sm-12">
                        <h4 class="card-title">Informações Pessoais</h4>

                        <div class="form-group ">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" name="nome" id="nome">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" class="form-control" name="email" id="email">
                        </div>
                        
                        <div class="row">
                            <div class="form-group col-md-6 col-sm-12">
                                <label for="data-nascimento">Data Nascimento</label>
                                <input type="text" class="form-control date" name="data-nascimento" id="data-nascimento">
                            </div>

                        
                            <div class="form-group col-md-6 col-sm-12">
                                <label for="estado-civil">Estado Civil</label>
                                <input type="text" class="form-control" name="estado-civil" id="estado-civil">
                            </div>
                        </div>
                            
                        
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="rua">Rua</label>
                                    <input type="text" class="form-control col-sm-12" name="rua" id="rua">
                                </div>
                            </div> 
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="numero">Numero</label>
                                    <input type="number" class="form-control" name="numero" id="numero">
                                </div>
                            </div> 
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="bairro">Bairro</label>
                                    <input type="text" class="form-control" name="bairro" id="bairro">
                                </div>
                            </div>                                   
                        
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="cidade">Cidade</label>
                                    <input type="text" class="form-control" name="cidade" id="cidade">
                                </div>
                            </div> 
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="estado">Estado</label>
                                    <input type="text" class="form-control" name="estado" id="estado">
                                </div>
                            </div>                                  

                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="telefone">Telefone</label>
                                    <input type="text" class="form-control phone" name="telefone" id="telefone">
                                </div>
                            </div>                                                                                                                                      
                        </div>
                    </div>

                    <div class="card-body" id="div-links">
                        <h4 class="card-title">Meus Links(Linkedin, sites, blogs e/ou redes sociais)</h4>
                        <button class="btn btn-success btn-add btn-sm right" id="btn-adicionar-link" title="Adicionar Links"> Adicionar Links</button>
                    </div><br>               

                    <div class="card-body" id="div-experiencias">
                        <h4 class="card-title">Minhas Experiências <small>(Se não hover data de saída, o campo será gerado como 'Atualmente'!)</small></h4>
                        <button class="btn btn-success btn-add btn-sm right" id="btn-adicionar-experiencia" title="Adicionar experiência">Adicionar experiência</button>
                    </div>

                    <div class="card-body" id="div-formacoes">
                        <h4 class="card-title">Minha Formação Acadêmica</h4>
                        <button class="btn btn-success btn-add btn-sm right" id="btn-adicionar-formacao" title="Adicionar formação">Adicionar formação</button>
                    </div>

                    <div class="card-body" id="div-cursos">
                        <h4 class="card-title">Meus cursos</h4>
                        <button class="btn btn-success btn-add btn-sm right" id="btn-adicionar-cursos" title="Adicionar curso">Adicionar cursos</button>
                    </div>

                    <div class="card-body" id="div-habilidades">
                        <h4 class="card-title">Minhas habilidades <small>(Aqui você pode descrever suas melhores habilidades, melhores competências, etc... Preencha uma competência por campo!)</small></h4>
                        <button class="btn btn-success btn-add btn-sm right" id="btn-adicionar-habilidades" title="Adicionar habilidades">Adicionar habilidades</button>
                    </div>

                    <div class="card-body" id="div-sobre">
                        <h4 class="card-title">Sobre mim <small>(Aqui você pode contar um pouco sobre você, seus objetivos profissionais, etc...)</small> </h4>
                        <button class="btn btn-success btn-add btn-sm right" id="btn-adicionar-sobre" title="Adicionar sobre mim">Adicionar sobre mim</button>
                    </div>
                    
                    <div class="card-footer bg-dark">
                        <button class="btn btn-success btn-submit" type="submit">Gerar currículo</button>
                        <button class="btn btn-warning btn-reset" type="reset">Limpar campos</button>
                    </div>
                </div>
            </form>
        </main>       
        
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="assets/js/index.js"></script> 
        <!-- Biblioteca Jquery Mask Plugin--> 
        <script src="assets/Mask-Plugin/dist/jquery.mask.min.js"></script>              
    </body>
</html>