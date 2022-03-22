const uri = "/tickets?$filter=(agentIdentity eq 'data')&$closed=true&$skip=0&$take=100"

const uriEncoded = encodeURI(uri)

console.log(uriEncoded)