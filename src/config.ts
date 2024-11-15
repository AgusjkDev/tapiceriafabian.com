type Config = {
    contactUrl: URL;
};

export default {
    contactUrl: new URL(
        `https://wa.me/5491150467356?text=${encodeURIComponent("Hola Fabián, te contacto para solicitar un presupuesto. ")}`,
    ),
} satisfies Config;
