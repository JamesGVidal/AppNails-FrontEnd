import { Button } from "../../../../componentes/Components/Button";
import type { Servico } from "../../dados";
import { diasSemana, formatarDuracao, formatarPreco, lerData } from "../../formatacao";
import { ResumoFixoContainer, ResumoLinha, botaoConfirmar } from "./style";

type ResumoFixoProps = {
    servico: Servico;
    data: string | null;
    hora: string | null;
    onConfirmar: () => void;
};

// "qua, 28 · 13:30 · 1h30"
const textoQuando = (servico: Servico, data: string | null, hora: string | null) => {
    if (!data || !hora) return "Escolha dia e horário";

    const dia = lerData(data);
    return `${diasSemana[dia.getDay()]}, ${String(dia.getDate()).padStart(2, "0")} · ${hora} · ${formatarDuracao(servico)}`;
};

// Só no celular: resumo preso no rodapé (telas/Agendar.html). No tablet/desktop entra o ResumoLateral.
export const ResumoFixo = ({ servico, data, hora, onConfirmar }: ResumoFixoProps) => {
    return (
        <ResumoFixoContainer aria-label="Resumo do agendamento">
            <ResumoLinha>
                <div>
                    <strong>{servico.nome}</strong>
                    <span>{textoQuando(servico, data, hora)}</span>
                </div>
                <span>{formatarPreco(servico.preco)}</span>
            </ResumoLinha>

            <Button className={botaoConfirmar} disabled={!data || !hora} onClick={onConfirmar}>
                Confirmar agendamento
            </Button>
        </ResumoFixoContainer>
    );
};
