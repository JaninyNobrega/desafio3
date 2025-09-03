// Função 1: Juros Compostos
function calcularJurosCompostos(capitalInicial, taxaJuros, tempo) {
  return capitalInicial * Math.pow(1 + taxaJuros / 100, tempo); 
}

document.getElementById("form-juros").addEventListener("submit", function(e) {
  e.preventDefault();
  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value);
  const tempo = parseInt(document.getElementById("tempo").value);

  const resultado = calcularJurosCompostos(capital, taxa, tempo);
  document.getElementById("resultado-juros").innerText =
    `Valor final do investimento: R$ ${resultado.toFixed(2)}`;
});

// Função 2: Validar Carteira Cripto (formato simples)
function validarCarteira(carteira) {
  const regex = /^[a-zA-Z0-9]{26,35}$/; 
  return regex.test(carteira);
}

document.getElementById("form-carteira").addEventListener("submit", function(e) {
  e.preventDefault();
  const carteira = document.getElementById("carteira").value;
  const valido = validarCarteira(carteira);
  document.getElementById("resultado-carteira").innerText = 
    valido ? "✅ Carteira válida!" : "❌ Carteira inválida!";
});

// Função 3: Organizar Transações
function organizarTransacoes(lista) {
  return lista.sort((a, b) => b - a);
}

document.getElementById("form-transacoes").addEventListener("submit", function(e) {
  e.preventDefault();
  const valores = document.getElementById("transacoes").value
    .split(",")
    .map(v => parseFloat(v.trim()))
    .filter(v => !isNaN(v));

  const ordenados = organizarTransacoes(valores);
  const lista = document.getElementById("resultado-transacoes");
  lista.innerHTML = "";
  ordenados.forEach(v => {
    const li = document.createElement("li");
    li.textContent = `R$ ${v.toFixed(2)}`;
    lista.appendChild(li);
  });
});

// Função 4: Verificar Força de Senha
function verificarForcaSenha(senha) {
  let forca = 0;
  if (senha.length >= 8) forca++;
  if (/[A-Z]/.test(senha)) forca++;
  if (/[0-9]/.test(senha)) forca++;
  if (/[^A-Za-z0-9]/.test(senha)) forca++;

  switch(forca) {
    case 4: return "Muito forte ✅";
    case 3: return "Forte 👍";
    case 2: return "Média 😐";
    default: return "Fraca ❌";
  }
}

document.getElementById("form-senha").addEventListener("submit", function(e) {
  e.preventDefault();
  const senha = document.getElementById("senha").value;
  const resultado = verificarForcaSenha(senha);
  document.getElementById("resultado-senha").innerText = `Força da senha: ${resultado}`;
});
