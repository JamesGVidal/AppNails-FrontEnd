import type { CSSProperties } from "react";
import { Link } from "react-router";
import { AutoGrid } from "../../../../componentes/Components/AutoGrid";
import { Container } from "../../../../componentes/Components/Container";
import { Heading } from "../../../../componentes/Components/Heading";
import type { Servico } from "../../dados";
import { ServicoCard, ServicosSecao } from "./style";

type ServicosProps = {
    servicos: Servico[];
};

// 60 -> "1h", 150 -> "2h30", 30 -> "30 min"
const formatarDuracao = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;

    if (horas === 0) return `${resto} min`;
    return resto === 0 ? `${horas}h` : `${horas}h${resto}`;
};

const formatarPreco = (preco: number | null) =>
    preco === null ? "[PREÇO]" : preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Só no tablet/desktop (telas/InicioDesktop.html); a tela do celular não tem esta seção.
export const Servicos = ({ servicos }: ServicosProps) => {
    return (
        <ServicosSecao>
            <Container as="section" id="servicos">
                <Heading nivel={2} tamanho="secao">
                    Serviços
                </Heading>

                {/* 14px como na referência (fora da escala de espaçamento) */}
                <AutoGrid min="240px" style={{ "--autogrid-gap": "14px" } as CSSProperties}>
                    {servicos.map((servico) => (
                        <ServicoCard key={servico.id}>
                            <h3>{servico.nome}</h3>
                            <span>
                                {servico.adicional ? "+" : ""}
                                {formatarDuracao(servico.duracaoMin)} · {servico.observacao}
                            </span>
                            <strong>{formatarPreco(servico.preco)}</strong>
                            <Link to="/agendar">Agendar</Link>
                        </ServicoCard>
                    ))}
                </AutoGrid>
            </Container>
        </ServicosSecao>
    );
};
