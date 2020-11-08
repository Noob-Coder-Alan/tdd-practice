const asciiOffset = 5

function simpleEncryptor(string){
    return string.split('').map(char => char.charCodeAt(0)).map(ascii => ascii + asciiOffset).map(asciiEncrypted => String.fromCharCode(asciiEncrypted)).join('')
}

function simpleDecryptor(encryptedString){
    return encryptedString.split('').map(x => x.charCodeAt(0)).map(ascii => ascii - asciiOffset).map(ascii => String.fromCharCode(ascii)).join('')
}

