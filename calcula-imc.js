// fórmila imc  peso/(altura*altura)
function  calculaImc(){
    var trs = document.getElementsByClassName("paciente"); // array de TRS    

        
    for(var i =0;i<= trs.length-1;i++){
        
        //var pacienteTr = trs[i];
        
        var tdNome = document.getElementsByClassName("info-nome")[i].textContent;
        var tdPeso = document.getElementsByClassName("info-peso")[i].textContent;
        var tdAltura = document.getElementsByClassName("info-altura")[i].textContent;
        
        
            var paciente = {
                "nome": tdNome,
                "peso": tdPeso,
                "altura": tdAltura,
                "calcImc" : function(){
                   return this.peso/(this.altura * this.altura);
                    
                }};
        var imc = paciente.calcImc();
        var tdImc = document.getElementsByClassName("info-imc")[i];
        tdImc.textContent = imc;
       
    }

    }

   var botao = document.getElementById("calcula-imcs");
    botao.addEventListener("click",calculaImc);
   

