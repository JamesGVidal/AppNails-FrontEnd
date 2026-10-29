import { useState } from "react";
import { BottomNav } from "../../componentes/Components/BottomNav";
import { Button } from "../../componentes/Components/Button";
import { SidebarPainel } from "../../componentes/Components/SidebarPainel";
import { Sparkle } from "../../componentes/Components/Sparkle";
import { AgendaHoje } from "./components/AgendaHoje";
import { LembretesEnviar } from "./components/LembretesEnviar";
import { ResumoNumeros } from "./components/ResumoNumeros";
import { agenda as agendaInicial, agendadosNaSemana, hoje, lembretes as lembretesIniciais } from "./dados";
import { itensPainel } from "./navegacao";
import { Acoes, Cabecalho, Conteudo, Layout, PainelMain, Tela, estrelaCabecalho } from "./style";

// "2026-10-21" -> "quarta, 21 de outubro"
const formatarData = (dataIso: string) => {
    const [ano, mes, dia] = dataIso.split("-").map(Number);
    const data = new Date(ano, mes - 1, dia);
    const semana = data.toLocaleDateString("pt-BR", { weekday: "long" }).replace("-feira", "");
    const diaMes = data.toLocaleDateString("pt-BR", { day: "numeric", month: "long" });

    return `${semana}, ${diaMes}`;
};

const saudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return "Bom dia";
    if (hora < 18) return "Boa tarde";
    return "Boa noite";
};

// Uma rota só: até 599px segue o print do celular (cabeçalho azul, lembretes antes da agenda, BottomNav do painel);
// a partir de 600px, barra lateral + números, agenda e lembretes ao lado.
export const Painel = () => {
    const [agenda, setAgenda] = useState(agendaInicial);
    const [lembretes, setLembretes] = useState(lembretesIniciais);

    const ConcluirAtendimento = (id: number) => {
        // TODO: PATCH /admin/agendamentos/{id} com status CONCLUIDO (gera o lembrete de manutenção no backend).
        setAgenda((atual) => atual.map((horario) => (horario.id === id ? { ...horario, situacao: "CONCLUIDO" } : horario)));
    };

    const BloquearHorario = (id: number, bloquear: boolean) => {
        // TODO: POST /admin/bloqueios (ou DELETE para desbloquear) quando o backend existir.
        setAgenda((atual) =>
            atual.map((horario) => (horario.id === id ? { ...horario, situacao: bloquear ? "BLOQUEADO" : "LIVRE" } : horario))
        );
    };

    const MarcarEnviado = (id: number) => {
        setLembretes((atual) => atual.filter((lembrete) => lembrete.id !== id));
    };

    const atendimentos = agenda.filter((horario) => horario.cliente !== null).length;
    const horariosLivres = agenda.filter((horario) => horario.situacao === "LIVRE").length;

    const numeros = [
        { valor: atendimentos, rotulo: "atendimentos hoje", rotuloCurto: "atendimentos" },
        { valor: lembretes.length, rotulo: "lembretes para enviar", rotuloCurto: "lembretes" },
        { valor: horariosLivres, rotulo: horariosLivres === 1 ? "horário livre hoje" : "horários livres hoje", rotuloCurto: horariosLivres === 1 ? "horário livre" : "horários livres" },
        { valor: agendadosNaSemana, rotulo: "agendados na semana", rotuloCurto: "na semana", noCelular: false },
    ];

    return (
        <Tela>
            <SidebarPainel itens={itensPainel} />

            <Conteudo>
                <PainelMain>
                    <Cabecalho>
                        <Sparkle tamanho={74} cor="var(--azul)" className={estrelaCabecalho} />
                        <div>
                            <span>{formatarData(hoje)}</span>
                            <h1>{saudacao()}, Gaby</h1>
                        </div>
                        {/* TODO: telas de bloquear horário e de novo agendamento pela Gaby. */}
                        <Acoes>
                            <Button variante="secundaria" tamanho="compacto">
                                Bloquear horário
                            </Button>
                            <Button tamanho="compacto">Novo agendamento</Button>
                        </Acoes>
                        <ResumoNumeros numeros={numeros} />
                    </Cabecalho>

                    <Layout>
                        <AgendaHoje agenda={agenda} onConcluir={ConcluirAtendimento} onBloquear={BloquearHorario} />
                        <LembretesEnviar lembretes={lembretes} onEnviado={MarcarEnviado} />
                    </Layout>
                </PainelMain>
            </Conteudo>

            <BottomNav itens={itensPainel.slice(0, 4)} />
        </Tela>
    );
};
