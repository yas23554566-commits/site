document.getElementById("Enviar").addEventListener("click",validarFormulario)
function validarFormulario(){
  if(document.getElementById("nome_usuario").value !== "" && document.getElementById("email_usuario").value !== ""){
    alert("obrigado, você receberá nossas novidades");
  }else{
    alert("Por favor, preencha os campos nome e email.");
  }
  if(document.getElementById("telefone_usuario").value === ""){
    alert("Por favor, preencha o campo telefone.");
  }
}