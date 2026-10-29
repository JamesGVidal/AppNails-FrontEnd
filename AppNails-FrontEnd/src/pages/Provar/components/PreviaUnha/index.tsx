import type { Formato } from "../../dados";

type PreviaUnhaProps = {
    corHex: string;
    formato: Formato["id"];
};

// Contorno da unha em cada formato. "quadrada" é o desenho de telas/Provar.html.
const contornos: Record<Formato["id"], string> = {
    quadrada: "M5 26C5 12 13 3 23 3s18 9 18 23v30a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z",
    almond: "M23 2C31 9 41 19 41 32v24a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V32C5 19 15 9 23 2z",
    bailarina: "M13 3h20l8 21v32a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V24z",
};

export const PreviaUnha = ({ corHex, formato }: PreviaUnhaProps) => {
    return (
        <svg width="46" height="62" viewBox="0 0 46 62" role="img" aria-label="Prévia da unha na cor escolhida">
            <path d={contornos[formato]} fill={corHex} stroke="#2B3A4D" strokeOpacity="0.15" />
            <path d="M14 14c4-5 9-6 12-6" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
    );
};
