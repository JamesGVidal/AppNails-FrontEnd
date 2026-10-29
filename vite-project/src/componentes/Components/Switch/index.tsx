import { SwitchBotao } from "./style";

type SwitchProps = {
    ligado: boolean;
    onMudar: (ligado: boolean) => void;
    // id do texto que dá nome ao switch (aria-labelledby).
    rotuloId: string;
};

export const Switch = ({ ligado, onMudar, rotuloId }: SwitchProps) => {
    return <SwitchBotao type="button" role="switch" aria-checked={ligado} aria-labelledby={rotuloId} onClick={() => onMudar(!ligado)} />;
};
