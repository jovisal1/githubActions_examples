require("dotenv").config();
const core = require("@actions/core");
const persona_a_avisar = core.getInput("persona_a_avisar");

//Importando la libreria node-telegram-bot-api
const TelegramBot = require("node-telegram-bot-api");
// Creando nuestra variable que almacenara nuestro token para autenticarnos con el bot creado con BotFather
const token = process.env.TELEGRAM_TOKEN;
// A continuacion, creamos nuestro bot y configuramos el parametro polling igualandolo a True, Con esto logramos que el bot esté en constante proceso de escucha y procesamiento de datos respecto al token de la API de Telegram.
const bot = new TelegramBot(token, { polling: false });
// A partir de estas tres líneas de código, ya podríamos empezar a crear comandos y eventos para darle funcionalidad a nuestro bot.
bot.sendMessage(
  process.env.CHAT_ID,
  persona_a_avisar + ", se ha ejecutado correctamente el workflow ahora sí"
);
core.setOutput("response", "Mensaje enviado");
