import { Button } from "../../../../componentes/Components/Button";
import { Container } from "../../../../componentes/Components/Container";
import { Sparkle } from "../../../../componentes/Components/Sparkle";
import type { Manutencao } from "../../dados";
import {
    CardContainer,
    CardFoto,
    CardIdentificacao,
    CardProgresso,
    CardRotulo,
    CardValor,
    SoTabletOuMaior,
    barra,
    botaoManutencao,
    chevronMobile,
    estrelaGrande,
    estrelaPequena,
} from "./style";

type CardManutencaoProps = {
    nomeCliente: string;
    manutencao: Manutencao;
};

// "2026-10-03" -> "03/10"
const formatarDiaMes = (dataIso: string) => {
    const [, mes, dia] = dataIso.split("-");
    return `${dia}/${mes}`;
};

export const CardManutencao = ({ nomeCliente, manutencao }: CardManutencaoProps) => {
    return (
        <Container as="section" aria-label="Sua manutenção">
            <CardContainer>
                <Sparkle tamanho={90} cor="var(--creme)" className={estrelaGrande} />
                <Sparkle tamanho={22} cor="var(--creme)" className={estrelaPequena} />

                <CardIdentificacao>
                    <CardFoto src={manutencao.fotoUrl} alt={`Suas últimas unhas: ${manutencao.descricaoUltimaVisita}`} />
                    <div>
                        <CardRotulo>
                            <SoTabletOuMaior>Oi, {nomeCliente} · </SoTabletOuMaior>
                            Sua manutenção
                        </CardRotulo>
                        <CardValor>
                            <SoTabletOuMaior>vence </SoTabletOuMaior>
                            em {manutencao.diasRestantes} dias
                        </CardValor>
                    </div>
                </CardIdentificacao>

                <CardProgresso>
                    <div
                        className={barra}
                        role="progressbar"
                        aria-label="Tempo desde a última visita"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={manutencao.progresso}
                    >
                        <div style={{ width: `${manutencao.progresso}%` }} />
                    </div>
                    <p>
                        Última visita em {formatarDiaMes(manutencao.ultimaVisita)} · {manutencao.descricaoUltimaVisita}
                    </p>
                </CardProgresso>

                <Button
                    to="/agendar"
                    variante="clara"
                    tamanho="medio"
                    className={botaoManutencao}
                    iconeFinal={
                        <svg className={chevronMobile} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 6 6 6-6 6" />
                        </svg>
                    }
                >
                    Agendar manutenção
                </Button>
            </CardContainer>
        </Container>
    );
};
