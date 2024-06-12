import prompt from "prompt";

import mainPrompt from "./prompts/prompt_main.js";

import createQRCODE from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
//importações

//mostra prompts para decisão da função
async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) await createQRCODE();
        if (choose.select == 2) await createPassword();

    })
}

main();