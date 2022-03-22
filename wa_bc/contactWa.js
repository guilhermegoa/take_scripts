const WHATSAPP_DOMAIN = "wa.gw.msging.net";

const run = (domain, contact) => {
    let { addresses, emails, name, org, phones, urls } = JSON.parse(contact);

    domain = domain.split('@')[1];

    if (domain == WHATSAPP_DOMAIN) {
        return buildWhatsAppQuickReply(addresses, emails, name, org, phones, urls);
    } else {
        return buildBlipChatTextcontact(addresses, emails, name, org, phones, urls);
    }
}

const buildWhatsAppQuickReply = (addresses, emails, name, org, phones, urls) => {
    return {
        "type": "application/json",
        "body": {
            "type": "contacts",
            "contacts": [
                {
                    "addresses": addresses,
                    "emails": emails,
                    "name": name,
                    "org": org,
                    "phones": phones,
                    "urls": urls
                }
            ]
        }
    }
}


const buildBlipChatTextcontact = (addresses, emails, name, org, phones, urls) => {
    let message = addresses[0].city + "<br><br>";
    message += emails[0].email + "<br><br>";
    message += name.first_name + "<br><br>";
    message += org.company + "<br><br>";
    message += phones[0].phone + "<br><br>";
    message += urls[0].url + "<br><br>";

    return {
        "type": "text/plain",
        "body": message
    }
}
