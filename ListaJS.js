function exercicio1(n) {
    if (n < 0) {
        return null;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function exercicio2(mensagem, n) {
    if (n <= 0) {
        return ""; 
    }

    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado += mensagem;
        if (i < n - 1) {
            resultado += " "; 
        }
    }
    return resultado;
}

function exercicio3(valor1, valor2, operacao) {
    switch (operacao) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            if (valor2 === 0) {
                return null; // erro de divisão por zero
            }
            return valor1 / valor2;
        default:
            return null; // operação invalida
    }
}

function exercicio4(numero) {
    const resultados = [];
    
    for (let i = 1; i <= 10; i++) {
        resultados[i - 1] = numero * i; 
    }
    
    return resultados;
}

function exercicio5(numero) {
    return parseInt(numero.toString().split('').reverse().join('')) || 0;
}

function exercicio6(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (const char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

function exercicio7(seq) {
    const pilha = [];
    const mapa = {
        '(': ')',
        '[': ']'
    };

    for (const char of seq) {
        if (mapa[char]) {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.length === 0 || mapa[pilha.pop()] !== char) {
                return false;
            }
        }
    }

    return pilha.length === 0;
}
function exercicio8(size) {
    const nomes = ['Giovanna', 'Mateus', 'João Vitor', 'Nicolas', 'Giroto', 'Kanye West', 'Luca', 'Thiago'];
    const lista = [];

    for (let i = 0; i < size; i++) {
        const id = i + 1;
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18; 
        lista.push({ id, nome, idade });
    }

    return lista;
}

function exercicio9(lista) {
    const totalIdades = lista.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    return totalIdades / lista.length || 0; 
}

function exercicio10(lista, atributo) {
    return lista.sort((a, b) => (a[atributo] > b[atributo]) ? 1 : -1);
}
