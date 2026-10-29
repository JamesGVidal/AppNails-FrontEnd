import { useState } from "react";
import { CabecalhoAgendar } from "./components/CabecalhoAgendar";
import { CalendarioMes } from "./components/CalendarioMes";
import { EscolhaHorario } from "./components/EscolhaHorario";
import { EscolhaServico } from "./components/EscolhaServico";
import { FaixaDias } from "./components/FaixaDias";
import { ResumoFixo } from "./components/ResumoFixo";
import { ResumoLateral } from "./components/ResumoLateral";
import { disponibilidade, hoje, horariosDoDia, servicos, ultimoDiaAgenda } from "./dados";
import { AgendarMain, DiaEHorario, Escolhas, Layout, TituloPagina } from "./style";

// Uma rota só: até 599px segue telas/Agendar.html (faixa de 7 dias e resumo fixo);
// a partir de 600px, telas/AgendarDesktop.html (calendário do mês e resumo ao lado ou abaixo).
export const Agendar = () => {
    // Seleção inicial igual à da referência do celular.
    const [servicoId, setServicoId] = useState(3);
    const [data, setData] = useState<string | null>("2026-10-28");
    const [hora, setHora] = useState<string | null>("13:30");
    const [lembrete, setLembrete] = useState(true);

    const servico = servicos.find((item) => item.id === servicoId)!;
    const horarios = data ? horariosDoDia() : [];

    const selecionarData = (novaData: string) => {
        setData(novaData);
        // Os horários livres mudam de um dia para o outro.
        setHora(null);
    };

    const confirmar = () => {
        // TODO: POST /agendamentos com { servicoId, data, hora, lembrete } quando o backend existir.
    };

    return (
        <>
            <CabecalhoAgendar />

            <main>
                <AgendarMain>
                    <TituloPagina>Agendar horário</TituloPagina>

                    <Layout>
                        <Escolhas>
                            <EscolhaServico servicos={servicos} selecionadoId={servicoId} onSelecionar={setServicoId} />

                            <DiaEHorario>
                                <FaixaDias dias={disponibilidade.slice(0, 7)} selecionada={data} onSelecionar={selecionarData} />
                                <CalendarioMes
                                    disponibilidade={disponibilidade}
                                    selecionada={data}
                                    onSelecionar={selecionarData}
                                    inicio={hoje}
                                    fim={ultimoDiaAgenda}
                                />
                                <EscolhaHorario horarios={horarios} selecionado={hora} onSelecionar={setHora} />
                            </DiaEHorario>
                        </Escolhas>

                        <ResumoLateral
                            servico={servico}
                            data={data}
                            hora={hora}
                            lembrete={lembrete}
                            onMudarLembrete={setLembrete}
                            onConfirmar={confirmar}
                        />
                    </Layout>
                </AgendarMain>
            </main>

            <ResumoFixo servico={servico} data={data} hora={hora} onConfirmar={confirmar} />
        </>
    );
};
