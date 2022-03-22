
const WHATSAPP_DOMAIN = "wa.gw.msging.net";

const functionHandleMessage = (domain, menu) => {
  let { header, content, options } = JSON.parse(menu);

  domain = domain.split('@')[1];

  if (domain == WHATSAPP_DOMAIN) {
    return buildWhatsAppQuickReply(header, content, options);
  } else {
    return buildBlipChatTextMenu(content, options, header.document.link);
  }
}

const buildWhatsAppQuickReply = (header, content, options) => {
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
        header,
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

const buildBlipChatTextMenu = (content, options, link) => {
  let message = link + "<br><br>"

  message += content + "<br><br>";

  for (let index in options) {
    message += options[index] + "<br>";
  }

  return {
    "type": "text/plain",
    "body": message
  }
}

const menu = {
  "header": {
    "type": "document",
    "text": "Fibrina",
    "document": {
      "link": "https://s3-sa-east-1.amazonaws.com/i.imgtake.takenet.com.br/ykuvqnbe.rp1/06.Informativo-FIBRINA.pdf",
      "filename": "Fibrina"
    }
  },
  "content": "Nesse pdf você irá encontrar todas informações que precisa sobre Fibrina.",
  "options": {
    "Entendi": "Entendi!",
    "Voltar": "Voltar"
  }
}

console.log(functionHandleMessage(WHATSAPP_DOMAIN, JSON.stringify(menu)))