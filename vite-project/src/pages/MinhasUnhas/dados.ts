// Dados mockados da tela Minhas unhas, no formato que a API (nail-api) deve devolver.
// TODO: trocar por GET /clientes/me, /clientes/me/manutencao e /clientes/me/visitas quando o backend existir.
import amareloManteiga from "../../assets/imagens/amarelo-manteiga.jpg";
import azulFolhas2 from "../../assets/imagens/azul-folhas-2.jpg";
import vermelhoFlores from "../../assets/imagens/vermelho-flores.jpg";

export type Manutencao = {
    diasRestantes: number;
    intervaloDias: number; // dias_manutencao do serviço
    prazo: string; // ISO: data ideal para a manutenção
    ultimaVisita: string; // ISO
};

export type Preferencias = {
    notificacao: boolean; // Web Push
    whatsapp: boolean; // mensagem da Gaby pela fila de lembretes
};

export type Visita = {
    id: number;
    titulo: string;
    data: string; // ISO
    servico: string;
    imagemUrl: string;
};

export const nomeCliente = "Mariana";

export const manutencao: Manutencao = {
    diasRestantes: 6,
    intervaloDias: 21,
    prazo: "2026-10-27",
    ultimaVisita: "2026-10-03",
};

export const preferencias: Preferencias = {
    notificacao: true,
    whatsapp: true,
};

export const visitas: Visita[] = [
    { id: 1, titulo: "Azul noite com folhas douradas", data: "2026-10-03", servico: "Alongamento em gel", imagemUrl: azulFolhas2 },
    { id: 2, titulo: "Vermelho com flores", data: "2026-09-12", servico: "Manutenção + nail art", imagemUrl: vermelhoFlores },
    { id: 3, titulo: "Amarelo manteiga", data: "2026-08-22", servico: "Esmaltação em gel", imagemUrl: amareloManteiga },
];

// "2026-10-03" -> "03/10"
export const formatarDiaMes = (dataIso: string) => {
    const [, mes, dia] = dataIso.split("-");
    return `${dia}/${mes}`;
};
