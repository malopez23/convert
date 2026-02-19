// Cotação de moedas do dia.
const USD = 5.23;
const EUR = 6.15;
const GBP = 7.03;

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o valor do input para receber apenas números inteiros
amount.addEventListener("input", () => {
  const hasCharactesRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactesRegex, "");
});

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    default:
      alert("Selecione uma moeda válida.");
      break;
  }
};

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calculando o valor total da conversão
    let total = amount * price;

    // Formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total da conversão
    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result");

    console.log(error);
    alert("Ocorreu um erro ao converter a moeda. Tente novamente mais tarde.");
  }
}

// Formata a moeda em Real Brasileiro (BRL)
function formatCurrencyBRL(value) {
  // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
