

//var tabela = document.getElementsByTagName("table")[0];
//quando quiser usar o query selector(que sempre traz um elemento sem precisar 
//dizer se é geyById,Class ou TagName, ele acha internamente sozinho. )
//mas quando quiser usar um querySelector que traz um array, usa-se 
//document.querySelectorAll("table"); // retorna um array




var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click",function(event){
    
    event.preventDefault(); // impede o comportamento padrão do botão.
    
    var campoNome = document.getElementById("campo-nome");
    var campoPeso = document.getElementById("campo-peso");
    var campoAltura = document.getElementById("campo-altura");
    
    var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+ campoNome.value +"</td>"+
						"<td class='info-peso'>"+ campoPeso.value +"</td>"+
						"<td class='info-altura'>"+ campoAltura.value +"</td>"+
						"<td class='info-imc'></td>"+
					"</tr>";

    var tabela = document.querySelector("table");//retorna o primeiro elemento
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;
    
    campoNome.value = "";
    campoAltura.value = "";
    campoPeso.value = "";
    
    calculaImc();
});
