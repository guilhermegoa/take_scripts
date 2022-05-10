const run = (input, smallTalksResponse) => {
    try {
        input = removeExcessOfWhiteSpace(input);

        return !hasSmallTalks(smallTalksResponse) &&
            isSpecialCharacters(input) &&
            !ContainNumbers(input) &&
            isFullName(input) ? input : "Input inesperado";
    } catch (err) {
        return "Erro inesperado";
    }

}

const removeExcessOfWhiteSpace = (input) => {
    input = input.trim();
    const SPACE_STR = ' ';
    const WHITE_SPACES = RegExp('(\\s{2,})', 'gi');

    return input.replace(WHITE_SPACES, SPACE_STR);
}

const hasSmallTalks = (smalltalksResponse) => {
    const { intent, hasCursed } = JSON.parse(smalltalksResponse);

    return intent != "None" || hasCursed;
}

const ContainNumbers = (input) => {
    const NUMBER_PATTERN = RegExp('[0-9]', 'gmi');

    return NUMBER_PATTERN.test(input)
}

const isFullName = (name) => {
    name = name.split(" ");

    return (name.length >= 2 && name[0].length >= 3 && name[1] !== "");
}

const isSpecialCharacters = (input) => {
    input = replaceSpecialLetters(input);
    const EMPTY_STR = '';
    const SPECIAL_CHAR = RegExp('[^\\w\\s]*', 'gi');

    inputWithoutSpecialCharacters = input.replace(SPECIAL_CHAR, EMPTY_STR);

    return input.length == inputWithoutSpecialCharacters.length
}

const replaceSpecialLetters = (input) => {
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const smalltalk = {
    "intent": "Greeting",
    "hasCursed": false
}

console.log(run("abacaxi amarelo", JSON.stringify(smalltalk)))
// console.log(IsContainNumbers("Midçaaasd  asdad"))