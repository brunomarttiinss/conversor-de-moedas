async function converter() {
    const valor = document.getElementById("valor").value;
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;

    if (!valor) {
        alert("Por favor, insira um valor.");
        return;
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const taxa = dados.rates[moedaDestino];
        const resultado = (valor * taxa).toFixed(2);
        document.getElementById("resultado").innerText = `Resultado: ${resultado} ${moedaDestino}`;
    } catch (erro) {
        alert("Erro ao obter taxas de câmbio. Tente novamente mais tarde.");
    }
}

