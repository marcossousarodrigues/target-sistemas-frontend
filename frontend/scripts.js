
// 1. Calcular soma do índice
function calcularSomaIndice() {
    let indice = 13, soma = 0, k = 0;
    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    document.getElementById('resultadoSoma').textContent = `Resultado da SOMA: ${soma}`;
}

// 2. Verificar Fibonacci
function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numeroFibonacci').value);
    if (!numero) {
        const textContent =
            document.getElementById('resultadoFibonacci');
        textContent.textContent = 'O preenchimento deste campo é obrigatório.'
        return
    }

    let a = 0, b = 1, temp;
    if (numero === 0 || numero === 1) {
        document.getElementById('resultadoFibonacci').textContent = `${numero} pertence à sequência de Fibonacci.`;
        return;
    }
    while (b < numero) {
        temp = b;
        b = a + b;
        a = temp;
    }
    const resultado = (b === numero) ? "pertence" : "NÃO pertence";
    document.getElementById('resultadoFibonacci').textContent = `${numero} ${resultado} à sequência de Fibonacci.`;
}

// 3. Análise de faturamento
function analisarFaturamento() {
    const input = document.getElementById('faturamento').value;
    if (!input) {
        const textContent =
            document.getElementById('resultadoFaturamento');
        textContent.textContent = 'O preenchimento deste campo é obrigatório.'
        return
    }

    const faturamento = input.split(',').map(Number).filter(v => !isNaN(v));
    const diasValidos = faturamento.filter(valor => valor > 0);
    const menor = Math.min(...diasValidos);
    const maior = Math.max(...diasValidos);
    const media = diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;
    const diasAcimaMedia = diasValidos.filter(valor => valor > media).length;

    document.getElementById('resultadoFaturamento').textContent =
        `Menor: ${menor}, Maior: ${maior}, Dias acima da média: ${diasAcimaMedia}`;
}

// 4. Percentual de faturamento por estado
function calcularPercentual() {
    const faturamentoEstados = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };
    const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
    let resultado = "";
    for (const estado in faturamentoEstados) {
        const percentual = (faturamentoEstados[estado] / totalFaturamento) * 100;
        resultado += `${estado}: ${percentual.toFixed(2)}%<br>`;
    }
    document.getElementById('resultadoPercentual').innerHTML = resultado;
}

// 5. Inverter string
function inverterString() {
    const texto = document.getElementById('textoString').value;
    let invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    document.getElementById('resultadoString').textContent = `String invertida: ${invertida}`;
}
