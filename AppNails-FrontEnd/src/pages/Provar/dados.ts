// Catálogo mockado da prova virtual, no formato que a API (nail-api) deve devolver.
// TODO: trocar por GET /catalogo/cores, /catalogo/desenhos e /catalogo/formatos quando o backend existir.

export type Cor = {
    id: string;
    nome: string;
    hex: string;
};

export type Desenho = {
    id: string;
    nome: string;
};

export type Formato = {
    id: "quadrada" | "almond" | "bailarina";
    nome: string;
};

export const cores: Cor[] = [
    { id: "noite", nome: "Azul noite", hex: "#24306E" },
    { id: "cereja", nome: "Vermelho cereja", hex: "#8E1B33" },
    { id: "manteiga", nome: "Amarelo manteiga", hex: "#EEE2A0" },
    { id: "nude", nome: "Nude rosado", hex: "#E7C6BC" },
    { id: "celeste", nome: "Celeste", hex: "#A9C7E3" },
    { id: "leite", nome: "Branco leite", hex: "#F3EEE6" },
];

export const desenhos: Desenho[] = [
    { id: "lisa", nome: "Lisa" },
    { id: "francesinha", nome: "Francesinha" },
    { id: "fio", nome: "Fio dourado" },
    { id: "folhas", nome: "Folhas douradas" },
    { id: "cerejas", nome: "Cerejinhas" },
];

export const formatos: Formato[] = [
    { id: "quadrada", nome: "Quadrada" },
    { id: "almond", nome: "Almond" },
    { id: "bailarina", nome: "Bailarina" },
];

// Resultado mockado da detecção de unhas na foto.
// TODO: virá do MediaPipe Hands, rodando no próprio aparelho.
export const unhasEncontradas = 5;
