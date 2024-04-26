function validaAcesso(){
    let user = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;

    if( !user || !senha){
        alert("Preencha todos os campos");
    } else{
        window.location.href = "bem-vindo.html";
    }
    
}