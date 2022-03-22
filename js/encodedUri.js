const uri = "/tickets?$filter=(agentIdentity eq 'danielpereira.paula%40grupopardini.com.br@blip.ai')&$closed=true&$skip=0&$take=100"

const uriEncoded = encodeURI(uri)

console.log(uriEncoded)