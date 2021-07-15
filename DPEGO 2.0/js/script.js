function verifica() {
    if ( document.getElementById("nome").value == "") { 
         alert("Por favor, preencha os campos corretamente."); 
        return; 
    } 
    if ( document.getElementById("nascimento").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
        return; 
    } 
    if ( document.getElementById("mae").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
        return; 
    } 
    if ( document.getElementById("pai").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
        return; 
    } 
    if ( document.getElementById("genero").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
        return; 
    } 
    if ( document.getElementById("escolaridade").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
        return; 
    } 
    if ( document.getElementById("estado_civil").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
        return; 
    } 
    else{
        if(document.getElementById('pessoais').style.display == 'block'){
            document.getElementById('pessoais').style.display ='none';
            document.getElementById('contato').style.display ='block';
            
        }else{
            document.getElementById('pessoais').style.display = "block";
        }
    }
}

$("#cep").focusout(function(){
    $.ajax({
        
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
    
        dataType: 'json',
        
        success: function(resposta){

            $("#logradouro").val(resposta.logradouro);
            $("#complemento").val(resposta.complemento);
            $("#bairro").val(resposta.bairro);
            $("#cidade").val(resposta.localidade);
            $("#uf").val(resposta.uf);
            $("#numero").focus();
        }
    });
});

function voltar(){
    if(document.getElementById('pessoais').style.display == 'none'){
        document.getElementById('pessoais').style.display ='block';
        document.getElementById('contato').style.display ='none';
        
    }else{
        document.getElementById('pessoais').style.display = "none";
    }
}

function avancar() {
    if ( document.getElementById("cep").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("logradouro").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("bairro").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("cidade").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("uf").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("numero").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 

   else{
    if(document.getElementById('familia').style.display == 'none'){
        document.getElementById('familia').style.display ='block';
        document.getElementById('contato').style.display ='none';
        
    }else{
        document.getElementById('familia').style.display = "none";
    }

   }
}

function avancar(){
    if(document.getElementById('familia').style.display == 'none'){
        document.getElementById('familia').style.display ='block';
        document.getElementById('contato').style.display ='none';
        
    }else{
        document.getElementById('familia').style.display = "none";
    }
}

function volte(){
    if(document.getElementById('familia').style.display == 'block'){
        document.getElementById('familia').style.display ='none';
        document.getElementById('contato').style.display ='block';
        
    }else{
        document.getElementById('familia').style.display = "block";
    }
}
function salvar(){
    if ( document.getElementById("membro").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("ativos").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("individual").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("familiar").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("saude").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("isento").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("tipo").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    } 
    if ( document.getElementById("resumo").value == "") { 
        alert("Por favor, preencha os campos corretamente."); 
       return; 
    }
    else{
        if(document.getElementById('salve').style.display == 'none'){
            document.getElementById('salve').style.display ='block';
            document.getElementById('familia').style.display ='none';
            
        }else{
            document.getElementById('salve').style.display = "none";
        }

   }
}
function back(){
    if(document.getElementById('salve').style.display == 'block'){
        document.getElementById('salve').style.display ='none';
        document.getElementById('familia').style.display ='block';
        
    }else{
        document.getElementById('salve').style.display = "block";
    }
}