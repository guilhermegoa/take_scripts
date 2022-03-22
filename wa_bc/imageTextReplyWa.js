const WHATSAPP_DOMAIN = "wa.gw.msging.net";

const menu = {
    "content": "Olá, <b>{{ Laboratório }}</b >.Tudo bem ? 🙂 <br><br>" +
        "Agora, você pode emitir < b > Notas Fiscais, Boletos</b > e ainda, agendar Solicitações de Urgência, tudo em um único lugar! ❤ <br><br>" +
        "É rápido, prático, sem dores de cabeça e o mais bacana: tudo via <b>WhatsApp</b>! <br><br>" +
        "Isso mesmo! Nossos serviços de atendimento ao cliente estão em constantes mudanças e crescimento, pois sempre pensamos no bem-estar de nossos parceiros. 😊 <br><br>" +
        "Atenciosamente, Customer Service <br><br>" +
        "<b>Hermes Pardini, compromisso em melhor atender!</b> ☘️. <br><br>",
    "options": {
        "Descadastrar numero": "Descadastrar número",
    },
    "image": "https://sindinfor.org.br/wp-content/uploads/2020/10/take-og-image.png"
}

const run = (domain, menu) => {
    let { content, options, image } = JSON.parse(menu);

    domain = domain.split('@')[1];

    if (domain == WHATSAPP_DOMAIN) {
        return buildWhatsAppQuickReply(content, options, image);
    } else {
        return buildBlipChatTextMenu(content, options, image);
    }
}

const buildWhatsAppQuickReply = (content, options, image) => {
    let buttons = Object.keys(options).map((key) => {
        return {
            "type": "reply",
            "reply": {
                "id": key,
                "title": options[key],
                "payload": key
            }
        }
    });

    return {
        "type": "application/json",
        "body": {
            "recipient_type": "individual",
            "type": "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "text": "image_pardini",
                    "image": {
                        "link": image
                    }
                },
                "body": {
                    "text": content
                },
                "action": {
                    "buttons": buttons
                }
            }
        }
    }
}


const buildBlipChatTextMenu = (content, options, image) => {
    let message = image + "<br><br>"

    message += content + "<br><br>";

    for (let index in options) {
        message += `${options[index]}<br>`;
    }

    return {
        "type": "text/plain",
        "body": message
    }
}


console.log(run("asdasd", JSON.stringify(menu)))