import type { ButtonHTMLAttributes } from "react";
import { ChipBotao } from "./style";

type ChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-pressed"> & {
    selecionado?: boolean;
    // pilula: opções da prova virtual · bloco: horários do agendamento
    formato?: "pilula" | "bloco";
};

// Estados: normal, selecionado (aria-pressed) e indisponível (disabled).
export const Chip = ({ selecionado = false, formato = "pilula", ...props }: ChipProps) => {
    return <ChipBotao type="button" aria-pressed={selecionado} data-formato={formato} {...props} />;
};
