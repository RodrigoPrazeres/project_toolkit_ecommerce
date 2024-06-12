import permissions from "./utils/permissions.js";
//importações

//cria a senha baseado nas permissões importadas
async function handle() {
    let characters = [];
    let password = "";

    //recebe a quantidade de caracteres e quais são permitidos
    const passwordLength = process.env.PASSWORD_LENGTH
    characters = await permissions();

//adiciona caracteres na senha até o limite de tamanho delimitado pelo .env
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

//exporta a função
export default handle;