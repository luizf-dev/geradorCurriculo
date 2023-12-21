$(document).ready(function(){

    //?mascara para o input telefone e data
    $('.phone').mask('(00) 00000 0000');
    $('.date').mask('00/00/0000');


    //?adiciona um novo link de site, portfolio ou rede social e/ou profissional
    $("#btn-adicionar-link").click(function(e){
        //!Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar os links
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '           <div class="col-lg-5 div-links">'+
                    '                <label for="descricao">Descrição do link</label>'+                                     
                    '                <input type="text" class="form-control" placeholder="Ex: Linkedin/Site/Blog/Portfolio" name="descricao[]">'+
                    '            </div>'+ 
                    '            <div class="col-lg-6 div-links">'+
                    '                <label for="link">URL do link</label>'+                                     
                    '                <input type="text" class="form-control" placeholder="https://meulink.com" name="link[]">'+
                    '            </div>'+      
                    '            <div class="col-sm-12 col-lg-1">'+
                    '                <label for="remover">Remover</label>'+                                     
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover Link">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-links">
        $("#div-links").append(linha);
    });
    //*******************************************************************************************\\



    //?adiciona nova experiência
    $("#btn-adicionar-experiencia").click(function(e){
        //!Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar experiência
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-sm-12 col-md-4 div-links">'+
                    '                <label for="cargo">Cargo</label>'+                                     
                    '                <input type="text" class="form-control" placeholder="Cargo" name="experiencia-cargo[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-3 div-links">'+
                    '                <label for="empresa">Empresa</label>'+  
                    '                <input type="text" class="form-control" placeholder="Empresa" name="experiencia-empresa[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-2 div-links">'+
                    '                <label for="admissao">Data de Admissão</label>'+  
                    '                <input  type="text" class="form-control date" placeholder="DD/MM/AAAA" name="experiencia-inicio[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-2 div-links">'+
                    '                <label for="saida">Data de Saída</label>'+  
                    '                <input  type="text" class="form-control date" placeholder="DD/MM/AAAA" name="experiencia-fim[]">'+
                    '            </div>'+
                    '            <div class="col-sm-12 col-md-1">'+
                    '                <label for="Remover">Remover</label>'+  
                    '                <button type="button" class="btn btn-danger btn-links btn-remover-item form-control" title="Remover experiência">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-experiencias">
        $("#div-experiencias").append(linha);
        $('.date').mask('00/00/0000');
    });
    //***************************************************************************************\\



     //?adiciona nova formação
     $("#btn-adicionar-formacao").click(function(e){
        // !Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar formação
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-4 div-links">'+
                    '            <label for="curso">Nome do Curso</label>'+
                    '                <input type="text" class="form-control" placeholder="Curso" name="formacao-curso[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-3 div-links">'+
                    '            <label for="instituicao">Nome da Instituição</label>'+
                    '                <input type="text" class="form-control" placeholder="Instituição" name="formacao-instituicao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '            <label for="inicio">Data de Início</label>'+
                    '                <input type="text" class="form-control date" placeholder="DD/MM/AAAA" name="formacao-inicio[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '            <label for="conclusao">Data Conclusão</label>'+
                    '                <input type="text" class="form-control date" placeholder="DD/MM/AAAA" name="formacao-conclusao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '            <label for="remover">Remover</label>'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover formação">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-formacoes">
        $("#div-formacoes").append(linha);
        $(".date").mask("00/00/0000");
    });
    //***************************************************************************************\\



     //?adiciona um novo curso
     $("#btn-adicionar-cursos").click(function(e){
        // !Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar cursos
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-3 div-links">'+
                    '                <label for="curso">Nome do Curso</label>'+
                    '                <input type="text" class="form-control" placeholder="Curso e/ou aperfeiçoamento" name="curso-aperfeicoamento[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <label for="instituicao">Nome Instituição</label>'+
                    '                <input type="text" class="form-control" placeholder="Instituição" name="curso-instituicao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <label for="curso-inicio">Data Início</label>'+
                    '                <input type="text" class="form-control date" placeholder="DD/MM/AAAA" name="curso-inicio[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <label for="curso-conclusao">Data Conclusão</label>'+
                    '                <input type="text" class="form-control date" placeholder="DD/MM/AAAA" name="curso-conclusao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2 div-links">'+
                    '                <label for="curso-cargaHoraria">Carga Horária</label>'+
                    '                <input type="number" class="form-control" placeholder="000 horas" name="curso-cargaHoraria[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <label for="remover">Remover</label>'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover curso">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-cursos">
        $("#div-cursos").append(linha);
        $(".date").mask('00/00/0000');
    });
    //***************************************************************************************\\



     //?adiciona uma nova habilidade
     $("#btn-adicionar-habilidades").click(function(e){
        // !Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //* Gera a estrutura do HTML necessária para criar uma nova linha para adicionar habilidade
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-11 div-links">'+
                    '<label for="habilidade">Habilidades, Competências</label>'+
                    '                <input type="text" class="form-control" placeholder="Descreva suas habilidades, competências, etc.." name="habilidade[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <label for="remover">Remover</label>'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover Habilidade">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-habilidades">
        $("#div-habilidades").append(linha);
    });
    //***************************************************************************************\\

    
     //?adiciona um texto sobre mim
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
                    '                <label for="remover">Remover</label>'+
                    '                <button type="button" class="btn btn-danger btn-links form-control btn-remover-item" title="Remover Sobre">&times;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div><br>';
        
        //* Adiciona a nova linha na <div id="div-sobre">
        $("#div-sobre").append(linha);
    });

    //?Quando clicar no botão para remover algum campo
    $("#div-formacoes, #div-experiencias, #div-links, #div-cursos, #div-habilidades, #div-sobre")
    .on("click", ".btn-remover-item", function(){
        //*Remove a <div class="card"> que contém a formação ou experiência
        $(this).parent().parent().parent().parent().remove();
    })
});