import { Button } from "../../../../componentes/Components/Button";
import type { Servico } from "../../dados";
import { diasSemana, formatarDuracao, formatarPreco, lerData } from "../../formatacao";
import { Lembrete, ResumoAside, ResumoLista, botaoConfirmar, linkDuvida } from "./style";

type ResumoLateralProps = {
    servico: Servico;
    data: string | null;
    hora: string | null;
    lembrete: boolean;
    onMudarLembrete: (valor: boolean) => void;
    onConfirmar: () => void;
};

// "qua, 28/10 às 13:30"
const textoQuando = (data: string | null, hora: string | null) => {
    if (!data || !hora) return "Escolha dia e horário";

    const dia = lerData(data);
    return `${diasSemana[dia.getDay()]}, ${dia.getDate()}/${dia.getMonth() + 1} às ${hora}`;
};

// Só no tablet/desktop (telas/AgendarDesktop.html). No celular entra o ResumoFixo.
export const ResumoLateral = ({ servico, data, hora, lembrete, onMudarLembrete, onConfirmar }: ResumoLateralProps) => {
    return (
        <ResumoAside aria-label="Resumo do agendamento">
            <h2>Resumo</h2>

            <ResumoLista>
                <div>
                    <dt>Serviço</dt>
                    <dd>{servico.nome}</dd>
                </div>
                <div>
                    <dt>Quando</dt>
                    <dd>{textoQuando(data, hora)}</dd>
                </div>
                <div>
                    <dt>Duração</dt>
                    <dd>{formatarDuracao(servico)}</dd>
                </div>
                <div data-total>
                    <dt>Valor</dt>
                    <dd>{formatarPreco(servico.preco)}</dd>
                </div>
            </ResumoLista>

            <Lembrete>
                <input type="checkbox" checked={lembrete} onChange={(evento) => onMudarLembrete(evento.target.checked)} />
                Quero receber lembrete na véspera e quando a manutenção estiver chegando
            </Lembrete>

            <Button className={botaoConfirmar} disabled={!data || !hora} onClick={onConfirmar}>
                Confirmar agendamento
            </Button>

            <a href="#whatsapp" className={linkDuvida}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z" />
                </svg>
                Dúvida? Fale com a Gaby
            </a>
        </ResumoAside>
    );
};
