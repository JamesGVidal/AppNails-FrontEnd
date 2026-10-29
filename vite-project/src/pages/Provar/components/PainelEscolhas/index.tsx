import { Button } from "../../../../componentes/Components/Button";
import { Chip } from "../../../../componentes/Components/Chip";
import { SwatchBottle } from "../../../../componentes/Components/SwatchBottle";
import type { Cor, Desenho, Formato } from "../../dados";
import { PreviaUnha } from "../PreviaUnha";
import { Alca, Escolha, ListaCores, ListaDesenhos, ListaFormatos, PainelContainer, Previa, botaoAgendar, corBotao } from "./style";

type PainelEscolhasProps = {
    cores: Cor[];
    desenhos: Desenho[];
    formatos: Formato[];
    corId: string;
    desenhoId: string;
    formatoId: Formato["id"];
    onCor: (id: string) => void;
    onDesenho: (id: string) => void;
    onFormato: (id: Formato["id"]) => void;
};

// Celular: folha que sobe sobre a foto (telas/Provar.html). Tablet/desktop: cartão ao lado da foto.
export const PainelEscolhas = ({ cores, desenhos, formatos, corId, desenhoId, formatoId, onCor, onDesenho, onFormato }: PainelEscolhasProps) => {
    const cor = cores.find((item) => item.id === corId)!;
    const desenho = desenhos.find((item) => item.id === desenhoId)!;
    const formato = formatos.find((item) => item.id === formatoId)!;

    return (
        <PainelContainer aria-label="Escolhas da prova virtual">
            <Alca aria-hidden="true" />

            <Previa>
                <PreviaUnha corHex={cor.hex} formato={formato.id} />
                <div>
                    <strong aria-live="polite">{cor.nome}</strong>
                    <span>
                        {formato.nome} · {desenho.nome}
                    </span>
                </div>
            </Previa>

            <Escolha>
                <h2>Cor</h2>
                <ListaCores>
                    {cores.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={corBotao}
                            aria-pressed={item.id === corId}
                            aria-label={item.nome}
                            onClick={() => onCor(item.id)}
                        >
                            <SwatchBottle cor={item.hex} />
                        </button>
                    ))}
                </ListaCores>
            </Escolha>

            <Escolha>
                <h2>Desenho</h2>
                <ListaDesenhos>
                    {desenhos.map((item) => (
                        <Chip key={item.id} selecionado={item.id === desenhoId} onClick={() => onDesenho(item.id)}>
                            {item.nome}
                        </Chip>
                    ))}
                </ListaDesenhos>
            </Escolha>

            <Escolha>
                <h2>Formato</h2>
                <ListaFormatos>
                    {formatos.map((item) => (
                        <Chip key={item.id} selecionado={item.id === formatoId} onClick={() => onFormato(item.id)}>
                            {item.nome}
                        </Chip>
                    ))}
                </ListaFormatos>
            </Escolha>

            {/* TODO: levar cor, desenho e formato para o agendamento quando a API existir. */}
            <Button to="/agendar" className={botaoAgendar}>
                Quero esse · agendar
            </Button>
        </PainelContainer>
    );
};
