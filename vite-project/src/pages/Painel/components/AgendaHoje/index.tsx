import type { HorarioAgenda } from "../../dados";
import { AgendaSecao, Linha, SoMobile, SoTabletOuMaior, botaoBloquear, botaoConcluir, concluido } from "./style";

type AgendaHojeProps = {
    agenda: HorarioAgenda[];
    onConcluir: (id: number) => void;
    onBloquear: (id: number, bloquear: boolean) => void;
};

// 90 -> "1h30", 150 -> "2h30"
const formatarDuracao = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    return resto === 0 ? `${horas}h` : `${horas}h${resto}`;
};

const iconeCheck = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
);

// Tablet/desktop: cartão com a lista. Celular: lista solta na página. O horário em andamento fica destacado.
export const AgendaHoje = ({ agenda, onConcluir, onBloquear }: AgendaHojeProps) => {
    return (
        <AgendaSecao aria-labelledby="titulo-agenda">
            <h2 id="titulo-agenda">Agenda de hoje</h2>

            <ol>
                {agenda.map((horario) => {
                    const semCliente = horario.situacao === "LIVRE" || horario.situacao === "BLOQUEADO";

                    return (
                        <Linha key={horario.id} data-situacao={horario.situacao}>
                            <time>{horario.hora}</time>

                            <div>
                                {semCliente ? (
                                    <span>{horario.situacao === "LIVRE" ? "Horário livre" : "Horário bloqueado"}</span>
                                ) : (
                                    <>
                                        <strong>{horario.cliente}</strong>
                                        <span>
                                            {horario.servico}
                                            <SoTabletOuMaior> · {formatarDuracao(horario.duracaoMin!)}</SoTabletOuMaior>
                                            {horario.situacao === "EM_ANDAMENTO" && " · agora"}
                                            {horario.situacao === "CONCLUIDO" && <SoMobile> · {formatarDuracao(horario.duracaoMin!)} · concluído</SoMobile>}
                                        </span>
                                    </>
                                )}
                            </div>

                            {horario.situacao === "CONCLUIDO" && (
                                <span className={concluido}>
                                    {iconeCheck}
                                    <SoTabletOuMaior>Concluído</SoTabletOuMaior>
                                </span>
                            )}

                            {horario.situacao === "EM_ANDAMENTO" && (
                                <button type="button" className={botaoConcluir} onClick={() => onConcluir(horario.id)}>
                                    Concluir<SoTabletOuMaior> atendimento</SoTabletOuMaior>
                                </button>
                            )}

                            {semCliente && (
                                <button type="button" className={botaoBloquear} onClick={() => onBloquear(horario.id, horario.situacao === "LIVRE")}>
                                    {horario.situacao === "LIVRE" ? "Bloquear" : "Desbloquear"}
                                </button>
                            )}
                        </Linha>
                    );
                })}
            </ol>
        </AgendaSecao>
    );
};
