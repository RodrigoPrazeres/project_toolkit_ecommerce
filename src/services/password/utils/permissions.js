//confere as permissões de criação da senha

async function permissions() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS == "true") {
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (process.env.LOWERCASE_LETTERS == "true") {
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")
    }

    if (process.env.NUMBERS == "true") {
        permitted.push(... "0123456789")
    }

    if (process.env.SPECIAL_CHARACTERS == "true") {
        permitted.push(... "!@#$%¨&*()-_")
    }

    return permitted;
}
//exporta a função
export default permissions