import { Button } from "../../../../componentes/Components/Button";
import { Sparkle } from "../../../../componentes/Components/Sparkle";
import { formatarDiaMes, type Manutencao } from "../../dados";
import { Anel, ContagemCard, SoTabletOuMaior, Textos, botaoAgendar, estrela } from "./style";

type ContagemManutencaoProps = {
    manutencao: Manutencao;
};

// Raio 48 no viewBox de 112: comprimento da circunferência.
const CIRCUNFERENCIA = 2 * Math.PI * 48;

// Celular: anel ao lado dos textos (telas/MinhasUnhas.html). Tablet/desktop: anel em cima, com a estrela.
export const ContagemManutencao = ({ manutencao }: ContagemManutencaoProps) => {
    // O arco mostra quanto do intervalo já passou desde a última visita.
    const passou = (manutencao.intervaloDias - manutencao.diasRestantes) / manutencao.intervaloDias;
    const arco = CIRCUNFERENCIA * passou;

    return (
        <ContagemCard aria-label="Sua manutenção">
            <Sparkle tamanho={64} className={estrela} />

            <Anel>
                <svg viewBox="0 0 112 112" role="img" aria-label={`Faltam ${manutencao.diasRestantes} de ${manutencao.intervaloDias} dias para a manutenção`}>
                    <circle cx="56" cy="56" r="48" fill="none" strokeWidth="10" data-trilho="" />
                    <circle
                        cx="56"
                        cy="56"
                        r="48"
                        fill="none"
                        strokeWidth="10"
                        data-arco=""
                        strokeLinecap="round"
                        strokeDasharray={`${arco} ${CIRCUNFERENCIA}`}
                        transform="rotate(-90 56 56)"
                    />
                </svg>
                <div aria-hidden="true">
                    <strong>{manutencao.diasRestantes}</strong>
                    <span>dias</span>
                </div>
            </Anel>

            <Textos>
                <span>Manutenção ideal</span>
                <strong>até {formatarDiaMes(manutencao.prazo)}</strong>
                <SoTabletOuMaior>
                    A cada {manutencao.intervaloDias} dias, desde a visita de {formatarDiaMes(manutencao.ultimaVisita)}
                </SoTabletOuMaior>
                <Button to="/agendar" tamanho="compacto" className={botaoAgendar}>
                    Agendar agora
                </Button>
            </Textos>
        </ContagemCard>
    );
};
