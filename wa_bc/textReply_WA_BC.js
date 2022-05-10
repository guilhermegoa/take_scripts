const WHATSAPP_DOMAIN = 'wa.gw.msging.net';

const run = (domain, menu) => {
    let { content, options_WA, options_BC } = JSON.parse(menu);

    domain = domain.split('@')[1];

    if (domain == WHATSAPP_DOMAIN) {
        return buildWhatsAppQuickReply(content, options_WA);
    } else {
        return buildBlipChatQuickReply(content, options_BC);
    }
}

const replaceHTMLToMarkdown = (content) => {
    return content.replace(/<br>/g, '\n').replace(/<b>/g, '*').replace(/<\/b>/g, '*');
}

const buildWhatsAppQuickReply = (content, options) => {
    let buttons = Object.keys(options).map((key) => {
        return {
            'type': 'reply',
            'reply': {
                'id': key,
                'title': options[key],
                'payload': key
            }
        }
    });

    return {
        'type': 'application/json',
        'body': {
            'recipient_type': 'individual',
            'type': 'interactive',
            'interactive': {
                'type': 'button',
                'body': {
                    'text': replaceHTMLToMarkdown(content)
                },
                'action': {
                    'buttons': buttons
                }
            }
        }
    }
}

const buildBlipChatQuickReply = (content, options) => {
    return {
        "type": "application/vnd.lime.select+json",
        "body": {
            "scope": "immediate",
            "text": content,
            "options": options
        }
    }
}

const teste = {
    "content": "<b>Não foi possível abrir sua solicitação de urgência</b>, pois o seu pedido já se encontra concluído.<br><br>Caso queira mais informações, gostaria de <b>falar com um consultor?</b>",
    "options_WA": {
        "Sim": "Sim",
        "Nao": "Não",
        "Falar com consultor": "Falar com consultor"
    },
    "options_BC": [
        {
            "order": 1,
            "text": "Sim"
        },
        {
            "order": 2,
            "text": "Não"
        },
        {
            "order": 3,
            "text": "Falar com consultor"
        },
    ]
}

console.log(run("asdjakjs", JSON.stringify(teste)))

