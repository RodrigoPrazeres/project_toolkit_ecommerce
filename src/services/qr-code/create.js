import prompt from "prompt";
import promptQRCODE from "../../prompts/promptQRCODE.js";
import handle from "./handle.js";
//importações

//mostra o prompt para criação de qrcode
async function createQRCODE() {
    prompt.get(promptQRCODE, handle);

    prompt.start();
}

//exporta a função
export default createQRCODE;