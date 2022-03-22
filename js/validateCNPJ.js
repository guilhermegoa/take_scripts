function run(input) {
    if (!isValid(input)) {
        return "Invalido";
    }

    const numbers = changeToArray(input);
    const digits = numbers.slice(12);

    const digit0 = calculateDigits(12, numbers);
    if (digit0 !== digits[0]) {
        return "Invalido";
    };

    const digit1 = calculateDigits(13, numbers);
    return digit1 === digits[1] ? "Valido" : "Invalido"
};

function changeToArray(input) {
    const match = input.toString().match(/\d/g);
    return numbers = Array.isArray(match) ? match.map(Number) : [];
};

function calculateDigits(x, numbers) {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
        const n = slice[x - i];
        sum += n * factor--;
        if (factor < 2) factor = 9;
    };

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
};

function isValid(input) {
    // Valida se o tipo passado é numero
    if (isNaN(parseInt(input))) {
        return false;
    };

    // Limita ao máximo de 18 caracteres, para CNPJ formatado
    if (input.length > 18) {
        return false;
    };

    // Teste Regex para veificar se é uma string apenas dígitos válida
    const digitsOnly = /^\d{14}$/.test(input);

    // Teste Regex para verificar se é uma string formatada válida
    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(input);

    // Se o formato é válido, usa um truque para seguir o fluxo da validação
    if (!digitsOnly && !validFormat) {
        return false;
    };

    const numbers = changeToArray(input)

    // Valida a quantidade de dígitos
    if (numbers.length !== 14) {
        return false;
    };

    // Elimina inválidos com todos os dígitos iguais
    const items = [...new Set(numbers)]
    if (items.length === 1) {
        return false;
    };

    return true;
};

console.log(run("32008891000119"))