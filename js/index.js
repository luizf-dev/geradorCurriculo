$(function(){

    //?Quando clicar no botão para adicionar um novo link de site, portfolio ou rede social e/ou profissional
    $("#btn-adicionar-link").click(function(e){
        //!Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar os links
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '           <div class="col-lg-5 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Ex: Linkedin/ Site/ Portfolio" name="descricao[]">'+
                    '            </div>'+ 
                    '            <div class="col-lg-6 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Insira aqui o link" name="link[]">'+
                    '            </div>'+      
                    '            <div class="col-lg-1">'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover Link">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-links">
        $("#div-links").append(linha);
    });

    //*******************************************************************************************\\


    //?Quando clicar no botão para adicionar nova experiência
    $("#btn-adicionar-experiencia").click(function(e){
        //!Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar experiência
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-sm-12 col-md-4 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Cargo" name="experiencia-cargo[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-3 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Empresa" name="experiencia-empresa[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Início" name="experiencia-inicio[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Fim" name="experiencia-fim[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-1">'+
                    '                <button type="button" class="btn btn-danger btn-links btn-remover-item form-control" title="Remover experiência">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-experiencias">
        $("#div-experiencias").append(linha);
    });

    //***************************************************************************************\\

     //? Quando clicar no botão para adicionar nova formação
     $("#btn-adicionar-formacao").click(function(e){
        // !Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar formação
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-4 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Curso" name="formacao-curso[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-3 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Instituição" name="formacao-instituicao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Início" name="formacao-inicio[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Conclusão" name="formacao-conclusao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover formação">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-formacoes">
        $("#div-formacoes").append(linha);
    });

    //***************************************************************************************\\

     //? Quando clicar no botão para adicionar um novo curso
     $("#btn-adicionar-cursos").click(function(e){
        // !Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar cursos
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-3 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Curso e/ou aperfeiçoamento" name="curso-aperfeicoamento[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Instituição" name="curso-instituicao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Início" name="curso-inicio[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Conclusão" name="curso-conclusao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Carga horária" name="curso-cargaHoraria[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover curso">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-cursos">
        $("#div-cursos").append(linha);
    });

    //***************************************************************************************\\

     //? Quando clicar no botão para adicionar uma nova habilidade
     $("#btn-adicionar-habilidades").click(function(e){
        // !Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar habilidade
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-11 div-links">'+
                    '                <input type="text" class="form-control" placeholder="Suas habilidades, competências, etc.." name="habilidade[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover Habilidade">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-habilidades">
        $("#div-habilidades").append(linha);
    });

    //***************************************************************************************\\

    
     //? Quando clicar no botão para adicionar um texto sobre mim
     $("#btn-adicionar-sobre").click(function(e){
        // !Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar um texto sobre
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-11 div-links">'+               
                    '                 <textarea name="sobre[]" placeholder="Digite o texto falando um pouco sobre você"  class="form-control" id="sobre" cols="30" rows="10"></textarea>'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover Sobre">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-habilidades">
        $("#div-habilidades").append(linha);
    });

    //?Quando clicar no botão para remover algum campo
    $("#div-formacoes, #div-experiencias, #div-links, #div-cursos, #div-habilidades, #div-sobre").on("click", ".btn-remover-item", function(){
        //*Remove a <div class="card"> que contém a formação ou experiência
        $(this).parent().parent().parent().parent().remove();
    })
});