import qr from "qrcode-terminal";
import chalk from "chalk";
//importações

//mostra erro | confere tamanho |Gera qrcode
async function handle(err, result) {
    if (err) {
        console.log("error on aplication");
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green.bold("QRCODE gerado com sucesso: \n"));
        console.log(qrcode);
    })
}

//exporta a função
export default handle;