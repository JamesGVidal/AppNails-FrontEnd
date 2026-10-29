// Dados mockados do painel da Gaby, no formato que a API (nail-api) deve devolver.
// TODO: trocar por GET /admin/agenda?data=..., /admin/lembretes/pendentes e /admin/resumo quando o backend existir.

// Status do agendamento (do plano) + horários sem cliente: LIVRE e BLOQUEADO.
export type SituacaoHorario = "CONCLUIDO" | "EM_ANDAMENTO" | "CONFIRMADO" | "LIVRE" | "BLOQUEADO";

export type HorarioAgenda = {
    id: number;
    hora: string;
    situacao: SituacaoHorario;
    cliente: string | null;
    servico: string | null;
    duracaoMin: number | null;
};

// Lembrete da fila: clientes sem push ativo recebem pelo WhatsApp, com a mensagem pronta.
export type LembretePendente = {
    id: number;
    cliente: string;
    telefone: string; // só dígitos, com DDD
    motivo: string;
    mensagem: string;
};

export const hoje = "2026-10-21";

export const agendadosNaSemana = 14;

export const agenda: HorarioAgenda[] = [
    { id: 1, hora: "08:30", situacao: "CONCLUIDO", cliente: "Ana Paula", servico: "Manutenção", duracaoMin: 90 },
    { id: 2, hora: "10:00", situacao: "EM_ANDAMENTO", cliente: "Bruna", servico: "Alongamento em gel", duracaoMin: 150 },
    { id: 3, hora: "13:30", situacao: "LIVRE", cliente: null, servico: null, duracaoMin: null },
    { id: 4, hora: "15:00", situacao: "CONFIRMADO", cliente: "Carla", servico: "Esmaltação em gel + nail art", duracaoMin: 90 },
];

export const lembretes: LembretePendente[] = [
    {
        id: 1,
        cliente: "Mariana",
        telefone: "45998123456",
        motivo: "Manutenção em 3 dias",
        mensagem: "Oi, Mariana! Sua manutenção está chegando: faltam 3 dias. Quer agendar?",
    },
    {
        id: 2,
        cliente: "Juliana",
        telefone: "45999887766",
        motivo: "Atendimento amanhã, 08:30",
        mensagem: "Oi, Juliana! Passando para lembrar do seu horário amanhã às 08:30. Até lá!",
    },
    {
        id: 3,
        cliente: "Fernanda",
        telefone: "45991234567",
        motivo: "Manutenção em 2 dias",
        mensagem: "Oi, Fernanda! Sua manutenção está chegando: faltam 2 dias. Quer agendar?",
    },
];
