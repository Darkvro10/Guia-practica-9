import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function enviarCorreo(usuario, mensaje) {
    console.log("\n--- NOTIFICACION POR CORREO ---");
    console.log("Destinatario: " + usuario);
    console.log("Mensaje: " + mensaje);
}

function enviarSMS(usuario, mensaje) {
    console.log("\n--- NOTIFICACION POR SMS ---");
    console.log("Destinatario: " + usuario);
    console.log("Mensaje: " + mensaje);
}
function procesarAlerta(usuario, tipoAlerta, callbackElegido) {

    let mensaje = "Tiene una nueva alerta del sistema: " + tipoAlerta;

    callbackElegido(usuario, mensaje);
}

rl.question("Ingrese el nombre del usuario: ", (usuario) => {

    console.log("\nSeleccione el medio de notificacion:");
    console.log("1. Correo electronico");
    console.log("2. Mensaje SMS");

    rl.question("Seleccione una opcion: ", (opcion) => {

        rl.question("Ingrese el tipo de alerta: ", (tipoAlerta) => {

            if (opcion === "1") {
                procesarAlerta(usuario, tipoAlerta, enviarCorreo);
            } else if (opcion === "2") {
                procesarAlerta(usuario, tipoAlerta, enviarSMS);
            } else {
                console.log("Opcion no valida.");
            }

            rl.close();
        });
    });
});