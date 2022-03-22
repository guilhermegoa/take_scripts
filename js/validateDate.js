const run = (input) => {
    input = removeWhiteSpace(input);

    const inputSplit = input.split("/");

    if (!isVaLidInput(input) ||
        !isValidDay(inputSplit[0]) ||
        !isValidMonth(inputSplit[1]) ||
        !isValidYear(inputSplit[2])) {
        return "Invalido";
    }

    const dateNow = Date.now();
    const inputDate = new Date(inputSplit[2], inputSplit[1], inputSplit[0]).getTime();

    return inputDate >= dateNow ? "Valido" : "Invalido";
}

const removeWhiteSpace = (input) => {
    input = input.trim();
    const EMPTY_STR = '';
    const WHITE_SPACES = RegExp('(\\s+)', 'gi');

    return input.replace(WHITE_SPACES, EMPTY_STR);
}

const isVaLidInput = (input) => {
    const pattern = RegExp('\\d{2}\\/\\d{2}\\/\\d{4}', 'g');

    return pattern.test(input);
}

const isValidDay = (day) => {
    const DAYMAX = 31
    const DAYMIN = 1

    return day >= DAYMIN && day <= DAYMAX;
}

const isValidMonth = (month) => {
    const MONTHMIM = 1
    const MONTHMAX = 12

    return month >= MONTHMIM && month <= MONTHMAX;
}
const isValidYear = (year) => {
    const currentYear = new Date().getFullYear()

    return year >= currentYear;
}



console.log(run("31/05/2022    "))