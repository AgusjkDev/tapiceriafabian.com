import {
    FacebookIcon,
    InstagramIcon,
    WhatsAppIcon,
    type IconType,
} from "@/components/common/icons";

export const socials = [
    {
        text: "tapiceria.fabian",
        url: "#",
        color: "#1877f2",
        icon: FacebookIcon,
    },
    {
        text: "tapiceria.fabian",
        url: "#",
        color: "#e1306c",
        icon: InstagramIcon,
    },
    {
        text: "+54 011 2357-4690",
        url: "#",
        color: "#25d366",
        icon: WhatsAppIcon,
    },
] satisfies {
    text: string;
    url: "#";
    color: `#${string}`;
    icon: IconType;
}[];
