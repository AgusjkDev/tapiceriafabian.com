import {
    FacebookIcon,
    InstagramIcon,
    WhatsAppIcon,
    type IconType,
} from "@/components/common/icons";

export const WHATSAPP_QUICK_CHAT_URL = new URL(
    "https://wa.me/5491123574690?text=Hola+Fabi%C3%A1n%2C+te+contacto+para+solicitar+un+presupuesto.",
);
export const INSTAGRAM_PROFILE_URL = new URL(
    "https://instagram.com/tapiceria.fabian",
);

export const socials = [
    {
        text: "tapiceria.fabian",
        url: new URL("https://facebook.com/tapiceria.fabian"),
        color: "#1877f2",
        icon: FacebookIcon,
    },
    {
        text: "tapiceria.fabian",
        url: INSTAGRAM_PROFILE_URL,
        color: "#e1306c",
        icon: InstagramIcon,
    },
    {
        text: "+54 011 2357-4690",
        url: WHATSAPP_QUICK_CHAT_URL,
        color: "#25d366",
        icon: WhatsAppIcon,
    },
] satisfies {
    text: string;
    url: URL;
    color: `#${string}`;
    icon: IconType;
}[];

export enum Category {
    CLASSIC = "Clásico",
    MODERN = "Moderno",
    RESTORATION = "Restauración",
    LUXURY = "Lujo",
    VINTAGE = "Vintage",
}
