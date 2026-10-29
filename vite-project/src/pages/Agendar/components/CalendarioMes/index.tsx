import { useState } from "react";
import type { DiaDisponivel } from "../../dados";
import { diaIndisponivel, diasSemana, lerData, meses, textoSituacao } from "../../formatacao";
import { TituloEtapa } from "../../style";
import { Cabecalho, CalendarioCard, CalendarioSecao, DiaBotao, GradeDias, GradeSemana, Legenda, NavegacaoMes } from "./style";

type CalendarioMesProps = {
    disponibilidade: DiaDisponivel[];
    selecionada: string | null;
    onSelecionar: (data: string) => void;
    // Primeiro e último dia da agenda: limitam a navegação entre meses.
    inicio: string;
    fim: string;
};

const chevron = (caminho: string) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={caminho} />
    </svg>
);

// Só no tablet/desktop: calendário do mês (telas/AgendarDesktop.html). No celular entra a FaixaDias.
export const CalendarioMes = ({ disponibilidade, selecionada, onSelecionar, inicio, fim }: CalendarioMesProps) => {
    const dataInicial = lerData(selecionada ?? inicio);
    const [mesVisivel, setMesVisivel] = useState({ ano: dataInicial.getFullYear(), mes: dataInicial.getMonth() });

    // Meses contados desde o ano 0, para comparar ano e mês de uma vez.
    const indiceMes = (data: Date) => data.getFullYear() * 12 + data.getMonth();
    const indiceVisivel = mesVisivel.ano * 12 + mesVisivel.mes;
    const podeVoltar = indiceVisivel > indiceMes(lerData(inicio));
    const podeAvancar = indiceVisivel < indiceMes(lerData(fim));

    const mudarMes = (passo: number) => {
        const data = new Date(mesVisivel.ano, mesVisivel.mes + passo, 1);
        setMesVisivel({ ano: data.getFullYear(), mes: data.getMonth() });
    };

    const situacaoPorData = new Map(disponibilidade.map((dia) => [dia.data, dia]));
    const diasNoMes = new Date(mesVisivel.ano, mesVisivel.mes + 1, 0).getDate();
    const espacosAntes = new Date(mesVisivel.ano, mesVisivel.mes, 1).getDay();
    const nomeMes = meses[mesVisivel.mes];

    return (
        <CalendarioSecao>
            <Cabecalho>
                <TituloEtapa>2 · Dia</TituloEtapa>
                <NavegacaoMes>
                    <button type="button" aria-label="Mês anterior" disabled={!podeVoltar} onClick={() => mudarMes(-1)}>
                        {chevron("m15 6-6 6 6 6")}
                    </button>
                    <span aria-live="polite">
                        {nomeMes} {mesVisivel.ano}
                    </span>
                    <button type="button" aria-label="Próximo mês" disabled={!podeAvancar} onClick={() => mudarMes(1)}>
                        {chevron("m9 6 6 6-6 6")}
                    </button>
                </NavegacaoMes>
            </Cabecalho>

            <CalendarioCard>
                <GradeSemana aria-hidden="true">
                    {diasSemana.map((dia) => (
                        <span key={dia}>{dia}</span>
                    ))}
                </GradeSemana>

                <GradeDias>
                    {Array.from({ length: espacosAntes }, (_, i) => (
                        <span key={`vazio-${i}`} />
                    ))}

                    {Array.from({ length: diasNoMes }, (_, i) => {
                        const numero = i + 1;
                        const iso = `${mesVisivel.ano}-${String(mesVisivel.mes + 1).padStart(2, "0")}-${String(numero).padStart(2, "0")}`;
                        const dia = situacaoPorData.get(iso);
                        const semana = diasSemana[new Date(mesVisivel.ano, mesVisivel.mes, numero).getDay()];
                        // Dias fora da agenda (já passaram) não têm situação na API.
                        const situacao = dia ? textoSituacao(dia.situacao, dia.vagas) : "indisponível";

                        return (
                            <DiaBotao
                                key={iso}
                                type="button"
                                disabled={diaIndisponivel(dia?.situacao)}
                                aria-pressed={iso === selecionada}
                                aria-label={`${semana}, ${numero} de ${nomeMes}, ${situacao}`}
                                onClick={() => onSelecionar(iso)}
                            >
                                {String(numero).padStart(2, "0")}
                            </DiaBotao>
                        );
                    })}
                </GradeDias>

                <Legenda>
                    <span>
                        <span data-tipo="livre" />
                        livre
                    </span>
                    <span>
                        <span data-tipo="indisponivel" />
                        lotado ou fechado
                    </span>
                </Legenda>
            </CalendarioCard>
        </CalendarioSecao>
    );
};
