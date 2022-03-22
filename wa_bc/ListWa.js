const WHATSAPP_DOMAIN = 'wa.gw.msging.net';

const run = (domain, menu) => {
    let { header, body, action } = JSON.parse(menu);

    domain = domain.split('@')[1];

    if (domain == WHATSAPP_DOMAIN) {
        return buildWhatsAppQuickReply(header, body, action);
    } else {
        return buildBlipChatTextMenu(header, body, action);
    }
}

const replaceHTMLToMarkdown = (content) => {
    return content.replace(/<br>/g, '\n').replace(/<b>/g, '*').replace(/<\/b>/g, '*');
}

const buildWhatsAppQuickReply = (header, body, action) => {
    return {
        'type': 'application/json',
        'body': {
            "recipient_type": "individual",
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": header,
                "body": body,
                "action": action
            }
        }
    }
}

const buildBlipChatTextMenu = (header, body, action) => {
    const content = action.sections[0].rows.map(row => `${row.title}<br>${row.description}<br><br>`)

    return {
        'type': 'text/plain',
        'body': `${header.text}<br><br>${body.text}<br><br>${action.button}<br><br>${content.join('')}`
    }
}


const menu = {
    "header": {
        "type": "text",
        "text": "Conte-me mais"
    },
    "body": {
        "text": "Sobre qual dos assuntos abaixo você gostaria de falar?"
    },
    "action": {
        "header": "Conte-me mais",
        "button": "Selecione",
        "sections": [
            {
                "title": "",
                "rows": [
                    {
                        "id": "ID 1.1",
                        "title": "Tempo",
                        "description": "Disponibilidade de tempo para estudar"
                    },
                    {
                        "id": "ID 1.2",
                        "title": "Conteúdo",
                        "description": "Qualidade e diversidade de conteúdo"
                    },
                    {
                        "id": "ID 1.3",
                        "title": "Investimento",
                        "description": "Valor do curso e como posso pagar"
                    },
                    {
                        "id": "ID 1.4",
                        "title": "Concorrente",
                        "description": "Está preferindo um concorrente?"
                    },
                    {
                        "id": "ID 1.5",
                        "title": "Professores",
                        "description": "Busco professores renomados para aprender"
                    },
                    {
                        "id": "ID 1.6",
                        "title": "Tecnologia",
                        "description": "Tecnologia para me auxiliar no aprendizado"
                    },
                    {
                        "id": "ID 1.7",
                        "title": "Teste grátis",
                        "description": "Experimente por 7 dias"
                    },
                    {
                        "id": "ID 1.8",
                        "title": "Voltar",
                        "description": "Voltar para o início do atendimento"
                    }
                ]
            },
        ]
    }
};

console.log(run(`qweqwe`, JSON.stringify(menu)))