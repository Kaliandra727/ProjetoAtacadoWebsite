$(document).ready( function(){
    CarregarCategorias()
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

            var linha = linhaINI + colunaID + colunaDESC + colunaSIT + linhaFIM;
            $("#tblCategorias tbody").append(linha);
        }
    });
}