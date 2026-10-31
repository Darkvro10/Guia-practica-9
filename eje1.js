import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tieneLongitudValida = (password) => password.length >= 8;
function registrarUsuario(usuario, password) {

    if (tieneLongitudValida(password)) {
        return "Usuario " + usuario + " registrado correctamente. Contraseña segura.";
    } else {
        return "No se pudo registrar al usuario. La contraseña debe tener al menos 8 caracteres.";
    }
}

rl.question("Ingrese su nombre de usuario: ", (usuario) => {

    rl.question("Ingrese su contraseña: ", (password) => {

        console.log("\n--- RESULTADO DEL REGISTRO ---");
        console.log(registrarUsuario(usuario, password));

        rl.close();
    });

});