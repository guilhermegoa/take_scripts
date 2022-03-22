const run = (input) => {
    try {
        let menuOptions = {
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(1|um)|(1|um)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(2|dois)|(2|dois)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(3|tr[êe]s)|(3|tr[êe]s)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(4|quatro)|(4|quatro)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(5|cinco)|(5|cinco)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(6|seis)|(6|seis)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(7|sete)|(7|sete)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(8|oito)|(8|oito)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(9|nove)|(9|nove)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------",
            "\\s*^(((op|op[cç])([cç][aâãáà]o)?)?\\s*(10|dez)|(10|dez)?\\s*(\-|.)?\\s*(----------))\\s*$": "----------"
        }

        const match = matchKey(menuOptions, input);
        const selectedOption = menuOptions[match];

        return !selectedOption ? "Input inesperado" : selectedOption;
    } catch (e) {
        return "Erro inesperado";
    }
};

const matchKey = (options, input) => {
    return Object.keys(options).find((key) => input.match(new RegExp(key, 'gmi')));
};
