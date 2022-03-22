const run = (input) => {
    input = removeWhiteSpace(input);

    const pattern = RegExp('^[\\w+.]+@\\w+\\.\\w{2,}(?:\\.\\w{2})?$', 'g')

    return pattern.test(input) ? input : "Input inesperado";
}

const removeWhiteSpace = (input) => {
    input = input.trim();
    const EMPTY_STR = '';
    const WHITE_SPACES = RegExp('(\\s+)', 'gi');

    return input.replace(WHITE_SPACES, EMPTY_STR);
}


console.log(run("gg_gg@ggg.    com     "))