import type { Servico } from "../../dados";
import { formatarDuracao, formatarPreco } from "../../formatacao";
import { TituloEtapa } from "../../style";
import { ListaServicos, ServicoBotao, ServicoSecao, SoMobile, SoTabletOuMaior } from "./style";

type EscolhaServicoProps = {
    servicos: Servico[];
    selecionadoId: number;
    onSelecionar: (id: number) => void;
};

// Celular: lista com preço à direita. Tablet/desktop: grade com "duração · preço" embaixo do nome.
export const EscolhaServico = ({ servicos, selecionadoId, onSelecionar }: EscolhaServicoProps) => {
    return (
        <ServicoSecao>
            <TituloEtapa>1 · Serviço</TituloEtapa>
            <ListaServicos>
                {servicos.map((servico) => (
                    <ServicoBotao
                        key={servico.id}
                        type="button"
                        aria-pressed={servico.id === selecionadoId}
                        onClick={() => onSelecionar(servico.id)}
                    >
                        <span>
                            <strong>{servico.nome}</strong>
                            <span>
                                {formatarDuracao(servico)}
                                <SoTabletOuMaior> · {formatarPreco(servico.preco)}</SoTabletOuMaior>
                            </span>
                        </span>
                        <SoMobile>{formatarPreco(servico.preco)}</SoMobile>
                    </ServicoBotao>
                ))}
            </ListaServicos>
        </ServicoSecao>
    );
};
