import type { DiaDisponivel } from "../../dados";
import { diaIndisponivel, diasSemana, lerData, meses, textoSituacao } from "../../formatacao";
import { TituloEtapa } from "../../style";
import { Cabecalho, DiaBotao, Faixa, FaixaSecao } from "./style";

type FaixaDiasProps = {
    // Os 7 próximos dias da agenda.
    dias: DiaDisponivel[];
    selecionada: string | null;
    onSelecionar: (data: string) => void;
};

// Só no celular: faixa horizontal de 7 dias (telas/Agendar.html). No tablet/desktop entra o CalendarioMes.
export const FaixaDias = ({ dias, selecionada, onSelecionar }: FaixaDiasProps) => {
    const mesesDaFaixa = [...new Set(dias.map((dia) => meses[lerData(dia.data).getMonth()]))];

    return (
        <FaixaSecao>
            <Cabecalho>
                <TituloEtapa>2 · Dia</TituloEtapa>
                <span>{mesesDaFaixa.join(" – ")}</span>
            </Cabecalho>

            <Faixa>
                {dias.map((dia) => {
                    const data = lerData(dia.data);
                    const semana = diasSemana[data.getDay()];
                    const numero = String(data.getDate()).padStart(2, "0");
                    const situacao = textoSituacao(dia.situacao, dia.vagas);

                    return (
                        <DiaBotao
                            key={dia.data}
                            type="button"
                            disabled={diaIndisponivel(dia.situacao)}
                            aria-pressed={dia.data === selecionada}
                            aria-label={`${semana} ${numero}, ${situacao}`}
                            onClick={() => onSelecionar(dia.data)}
                        >
                            <span>{semana}</span>
                            <strong>{numero}</strong>
                            <span>{situacao}</span>
                        </DiaBotao>
                    );
                })}
            </Faixa>
        </FaixaSecao>
    );
};
