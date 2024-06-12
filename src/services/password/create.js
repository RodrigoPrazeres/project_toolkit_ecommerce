import chalk from "chalk";
import handle from "./handle.js";
//importações

//cria e mostra a senha
async function createPassword() {
    console.log(chalk.green.bold("password"));
    const password = await handle();
    console.log(password);
}

//exporta a função
export default createPassword;