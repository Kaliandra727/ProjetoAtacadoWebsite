$(document).ready( function(){
    CarregarCategorias();

    $('#ddlCAT').change(function() {
    var idsubs = $('#ddlCAT option:selected').val();
    CarregarSubcategorias(idsubs);
    });
});

function CarregarCategorias() {
var urlServico = 'https://localhost:7022/api/categoria';
$.get(urlServico, function (retorno, status) {

    var keys = Object.keys(retorno);

    for (var i = 0; i < keys.length; i++) {
        var categoria = retorno[i];
        var id = categoria.codigo;
        var descricao = categoria.descricao;
        var situacao = categoria.situacao;

        var linhaINI = "<tr>";
        var colunaID = "<td>" + id + "</td>";
        var colunaDESC = "<td>" + descricao + "</td>";
        var colunaSIT = "<td>" + situacao + "</td>";
        var linhaFIM = "</tr>";

        var opcao = '<option value="' + id + '">' + descricao + '</option>';
        $("#ddlCAT").append(opcao);
    }
});
}

function CarregarSubcategorias(idCat) {
var urlServico = 'https://localhost:7022/api/estoque/Subcategoria/PorIdCategoria/' + idCat;
$.get(urlServico, function (retorno, status) {
    var keys = Object.keys(retorno);
    if(keys.length == 0){
        alert("Erro ao obter dados!");
        return;
    }
    else{
       for (var i = 0; i < keys.length; i++) {
        var subcategorias = retorno[i];
        var idsub = subcategorias.idSubcategoria;
        var descricao = subcategorias.descricaoSubcategoria;

        var linhaINI = "<tr>";
        var colunaSUB = "<td>" + idsub + "</td>";
        var colunaDES = "<td>" + descricao + "</td>";
        var linhaFIM = "</tr>";

        var linha = linhaINI + colunaSUB + colunaDES + linhaFIM;
        $('#tblSubcategorias tbody').append(linha);
       }
    }

}
)};