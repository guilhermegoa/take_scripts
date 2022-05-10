const run = (input) => {
    isMoreOneWord = input.split(' ').length > 1

    input = isMoreOneWord ?
        removeSpecialCharacters(removeExcessOfWhiteSpace(input)) :
        removeSpecialCharacters(removeWhiteSpace(input));

    try {
        const matchItens = {
            "^1\\.?$|(1\\.?)?((Sou o Medico)|(Medico))": "Sou o Medico",
            "^2\\.?$|(2\\.?)?((Sou assistente do Medico)|(Assistente do Medico)|(Assistente))": "Sou assistente do Medico",
        };

        const match = Object.keys(matchItens).find((key) => input.match(RegExp(key, 'gmi')));
        const selected = matchItens[match];

        return selected ? selected : "Input inesperado";
    } catch (err) {
        return "Erro inesperado";
    }
}

const removeWhiteSpace = (input) => {
    input = input.trim();
    const EMPTY_STR = '';
    const WHITE_SPACES = RegExp('(\\s+)', 'gi');

    return input.replace(WHITE_SPACES, EMPTY_STR);
}

const removeExcessOfWhiteSpace = (input) => {
    input = input.trim();
    const SPACE_STR = ' ';
    const WHITE_SPACES = RegExp('(\\s{2,})', 'gi');

    return input.replace(WHITE_SPACES, SPACE_STR);
}

const removeSpecialCharacters = (input) => {
    input = replaceSpecialLetters(input);
    const EMPTY_STR = '';
    const SPECIAL_CHAR = RegExp('[^\\w\\s]*', 'gi');

    return input.replace(SPECIAL_CHAR, EMPTY_STR);
}

const replaceSpecialLetters = (input) => {
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const capitalizeAll = (text) => {
    return text.replace(/(^|\s)\S/g, (l) => l.toUpperCase());
}

const capitalizeFirstLetter = (text) => {
    return text.replace(/^\w/g, (l) => l.toUpperCase());
}


console.log(run("Hospital Parceiro ou Credenciado"))
