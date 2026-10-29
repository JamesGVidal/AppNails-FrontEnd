import type { Servico, SituacaoDia } from "./dados";

export const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

export const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

// "2026-10-28" -> Date local (sem deslocar o fuso)
export const lerData = (iso: string) => {
    const [ano, mes, dia] = iso.split("-").map(Number);
    return new Date(ano, mes - 1, dia);
};

// 60 -> "1h", 150 -> "2h30", 30 -> "30 min"; adicionais ganham "+"
export const formatarDuracao = (servico: Servico) => {
    const horas = Math.floor(servico.duracaoMin / 60);
    const resto = servico.duracaoMin % 60;
    const texto = horas === 0 ? `${resto} min` : resto === 0 ? `${horas}h` : `${horas}h${resto}`;

    return servico.adicional ? `+${texto}` : texto;
};

export const formatarPreco = (preco: number | null) =>
    preco === null ? "[PREÇO]" : preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const textoSituacao = (situacao: SituacaoDia, vagas: number | null) => {
    switch (situacao) {
        case "LIVRE":
            return "livre";
        case "POUCAS_VAGAS":
            return `${vagas} vagas`;
        case "LOTADO":
            return "lotado";
        case "FECHADO":
            return "fechado";
        case "FERIADO":
            return "feriado";
    }
};

export const diaIndisponivel = (situacao: SituacaoDia | undefined) =>
    situacao === undefined || situacao === "LOTADO" || situacao === "FECHADO" || situacao === "FERIADO";
