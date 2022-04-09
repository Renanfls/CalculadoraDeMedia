function Calcular() { 
  var notaPrimeiroBimestre = parseFloat(document.getElementById("nota1").value);
  var notaSegundoBimestre = parseFloat(document.getElementById("nota2").value);
  var notaTerceiroBimestre = parseFloat(document.getElementById("nota3").value);
  var notaQuartoBimestre = parseFloat(document.getElementById("nota4").value);
      
  // Imprime a conta em uma única linha
  var conta = document.getElementById("conta")
  conta.innerHTML = "(" + notaPrimeiroBimestre + " + " + notaSegundoBimestre + " + " + notaTerceiroBimestre + " + " + notaQuartoBimestre + ")" + " / 4";
  
    // var notaFinal recebe o resultado da operação
  var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4
  
  // .toFixed(0) especifica a quantidade de casas decimais da operação
  var media = notaFinal.toFixed(0)

  // Imprime string + o valor da operação atribuida a variável "media"
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = "Sua média nesse semestre foi: " + media

  // Identifica se o Aluno(a) passou ou não
  var situacao = document.getElementById("situacao")
  if (media => 6) {
  situacao.innerHTML = "Você está Aprovado(a)! :)";
  
  } else {
  situacao.innerHTML = "Você está Reprovado(a) :("
  }
}