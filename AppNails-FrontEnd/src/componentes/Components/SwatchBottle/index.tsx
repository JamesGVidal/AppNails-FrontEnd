import { FrascoSvg } from "./style";

type SwatchBottleProps = {
    cor: string;
    // Sem nome, o vidrinho é decorativo e fica oculto para leitores de tela.
    nome?: string;
    largura?: number;
};

export const SwatchBottle = ({ cor, nome, largura = 30 }: SwatchBottleProps) => {
    return (
        <FrascoSvg
            width={largura}
            height={(largura * 46) / 30}
            viewBox="0 0 30 46"
            role={nome ? "img" : undefined}
            aria-label={nome}
            aria-hidden={nome ? undefined : true}
        >
            <rect x="10" y="1" width="10" height="13" rx="2" fill="#2B3A4D" />
            <rect x="3" y="14" width="24" height="30" rx="9" fill={cor} stroke="#2B3A4D" strokeOpacity="0.2" />
            <rect x="7" y="19" width="4" height="15" rx="2" fill="#FFFFFF" fillOpacity="0.5" />
        </FrascoSvg>
    );
};
