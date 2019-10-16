//recuperar o botão
const botao = document.querySelector('#calcular');
console.log(botao);

//escutador de eventos
botao.addEventListener('click', function(event) {
  event.preventDefault();

  //pegar os dados
  const v1 = document.querySelector('#valor1').value;
  const v2 = document.querySelector('#valor2').value;
  const operacao = document.querySelector('#operacao').value;
  let resultado = 0;

  //validando - se tiver algo errado faz o if - tudo certo faz o else
  if ( (v1.length == 0) || (isNaN(v1)) ) {
    alert('Campo valor 1 inválido');
  }

  else if ( (v2.length == 0) || (isNaN(v2)) ) {
      alert('Campo valor 2 inválido');
    }

  else if ( operacao == '0'  ) {
      alert('Selecione uma operação válida');
    }

  // caso esteja tudo certo, faz isso aqui....
  else {
    if (operacao == '1') {
      resultado = (Number(v1) + Number(v2));
    }

    else if (operacao == '2') {
      resultado = (v1 - v2);
    }

    else if (operacao == '3') {
      resultado = (v1 * v2);
    }
    else{
      resultado = (v1 / v2);
    }
  }
  document.querySelector('#resultado').textContent = resultado.toFixed(1);
});
