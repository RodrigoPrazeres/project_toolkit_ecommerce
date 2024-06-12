import chalk from "chalk";

const promptQRCODE = [
    {
        name: "link",
        description: chalk.green.bold("digite o link para gerar o QRCODE"),
    },
    {
        name: "type",
        description: chalk.green.bold("escolha entre o tipo (1 - normal) ou (2 - terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptQRCODE;