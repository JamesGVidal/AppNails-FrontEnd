// Dados mockados do agendamento, no formato que a API (nail-api) deve devolver.
// TODO: trocar pelas chamadas reais quando o backend existir.

export type Servico = {
    id: number;
    nome: string;
    duracaoMin: number;
    // true para serviços que somam tempo a outro (ex.: nail art)
    adicional: boolean;
    preco: number | null; // null enquanto o preço não foi definido ([PREÇO])
};

export type SituacaoDia = "LIVRE" | "POUCAS_VAGAS" | "LOTADO" | "FECHADO" | "FERIADO";

// Resposta de GET /disponibilidade?inicio=...&fim=...
export type DiaDisponivel = {
    data: string; // ISO, ex.: "2026-10-28"
    situacao: SituacaoDia;
    vagas: number | null; // preenchido quando situacao = POUCAS_VAGAS
};

// Resposta de GET /disponibilidade/{data}/horarios?servicoId=...
export type Horario = {
    hora: string; // "13:30"
    livre: boolean;
};

export const servicos: Servico[] = [
    { id: 1, nome: "Esmaltação em gel", duracaoMin: 60, adicional: false, preco: null },
    { id: 2, nome: "Alongamento em gel", duracaoMin: 150, adicional: false, preco: null },
    { id: 3, nome: "Manutenção", duracaoMin: 90, adicional: false, preco: null },
    { id: 4, nome: "Nail art (adicional)", duracaoMin: 30, adicional: true, preco: null },
];

// "Hoje" fixo para o mock bater com as telas de referência.
export const hoje = "2026-10-27";

// Último dia com agenda aberta no mock.
export const ultimoDiaAgenda = "2026-12-31";

const feriados = ["2026-11-02", "2026-11-20", "2026-12-25"];
const lotados = ["2026-10-29", "2026-11-05", "2026-11-12", "2026-11-26"];
const poucasVagas: Record<string, number> = { "2026-10-31": 2 };

// Domingo e segunda: estúdio fechado.
const diasFechados = [0, 1];

const paraIso = (data: Date) =>
    `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}-${String(data.getDate()).padStart(2, "0")}`;

// Simula a resposta da API: um item por dia, de hoje até o último dia da agenda.
const gerarDisponibilidade = (): DiaDisponivel[] => {
    const dias: DiaDisponivel[] = [];
    const [ano, mes, dia] = hoje.split("-").map(Number);
    const data = new Date(ano, mes - 1, dia);

    while (paraIso(data) <= ultimoDiaAgenda) {
        const iso = paraIso(data);
        let situacao: SituacaoDia = "LIVRE";

        if (feriados.includes(iso)) situacao = "FERIADO";
        else if (diasFechados.includes(data.getDay())) situacao = "FECHADO";
        else if (lotados.includes(iso)) situacao = "LOTADO";
        else if (poucasVagas[iso]) situacao = "POUCAS_VAGAS";

        dias.push({ data: iso, situacao, vagas: poucasVagas[iso] ?? null });
        data.setDate(data.getDate() + 1);
    }

    return dias;
};

export const disponibilidade = gerarDisponibilidade();

// O mock devolve os mesmos horários para qualquer dia aberto.
// TODO: a API vai calcular os horários livres a partir da duração do serviço.
export const horariosDoDia = (): Horario[] => [
    { hora: "08:30", livre: true },
    { hora: "10:00", livre: false },
    { hora: "11:30", livre: true },
    { hora: "13:30", livre: true },
    { hora: "15:00", livre: true },
    { hora: "16:30", livre: false },
    { hora: "18:00", livre: true },
    { hora: "19:30", livre: false },
];
