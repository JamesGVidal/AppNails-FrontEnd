// Dados mockados da tela Início, no formato que a API (nail-api) deve devolver.
// TODO: trocar pelas chamadas reais quando o backend existir.
import amareloManteiga from "../../assets/imagens/amarelo-manteiga.jpg";
import azulFolhas1 from "../../assets/imagens/azul-folhas-1.jpg";
import azulFolhas2 from "../../assets/imagens/azul-folhas-2.jpg";
import cereja from "../../assets/imagens/cereja.jpg";
import noiva from "../../assets/imagens/noiva.jpg";
import vermelhoFlores from "../../assets/imagens/vermelho-flores.jpg";

export type Cliente = {
    id: number;
    nome: string;
};

// Próxima manutenção da cliente logada.
export type Manutencao = {
    diasRestantes: number;
    // 0 a 100: quanto do intervalo entre manutenções já passou
    progresso: number;
    ultimaVisita: string; // ISO, ex.: "2026-10-03"
    descricaoUltimaVisita: string;
    fotoUrl: string;
};

export type Trabalho = {
    id: number;
    titulo: string;
    descricaoImagem: string;
    imagemUrl: string;
};

export type Servico = {
    id: number;
    nome: string;
    duracaoMin: number;
    // true para serviços que somam tempo a outro (ex.: nail art)
    adicional: boolean;
    observacao: string;
    preco: number | null; // null enquanto o preço não foi definido ([PREÇO])
};

export type Cor = {
    id: string;
    nome: string;
    hex: string;
};

export const cliente: Cliente = { id: 1, nome: "Mariana" };

export const manutencao: Manutencao = {
    diasRestantes: 6,
    progresso: 72,
    ultimaVisita: "2026-10-03",
    descricaoUltimaVisita: "azul com folhas douradas",
    fotoUrl: azulFolhas1,
};

export const trabalhos: Trabalho[] = [
    { id: 1, titulo: "Noiva", descricaoImagem: "Unha de noiva com francesinha e fio dourado", imagemUrl: noiva },
    { id: 2, titulo: "Amarelo manteiga", descricaoImagem: "Almond em amarelo manteiga", imagemUrl: amareloManteiga },
    { id: 3, titulo: "Cherry on the edge", descricaoImagem: "Vermelho com cerejinhas pintadas à mão", imagemUrl: cereja },
    { id: 4, titulo: "Vermelho com arte", descricaoImagem: "Vermelho com flores em nail art", imagemUrl: vermelhoFlores },
    { id: 5, titulo: "Azul noite com folhas", descricaoImagem: "Azul noite com folhas douradas", imagemUrl: azulFolhas2 },
];

// Ordem do carrossel no celular (telas/Main.html).
export const destaquesMobile = [1, 3, 2, 4];

// Fotos do topo no tablet/desktop: a primeira ocupa a coluna inteira.
export const fotosHero: Trabalho[] = [
    { id: 1, titulo: "Noiva", descricaoImagem: "Unha de noiva com francesinha e fio dourado", imagemUrl: noiva },
    { id: 6, titulo: "Azul noite com folhas", descricaoImagem: "Azul noite com folhas douradas", imagemUrl: azulFolhas1 },
    { id: 3, titulo: "Cherry on the edge", descricaoImagem: "Vermelho com cerejinhas", imagemUrl: cereja },
];

export const servicos: Servico[] = [
    { id: 1, nome: "Esmaltação em gel", duracaoMin: 60, adicional: false, observacao: "dura de 2 a 3 semanas", preco: null },
    { id: 2, nome: "Alongamento em gel", duracaoMin: 150, adicional: false, observacao: "formatos quadrada, almond e bailarina", preco: null },
    { id: 3, nome: "Manutenção", duracaoMin: 90, adicional: false, observacao: "a cada 3 semanas", preco: null },
    { id: 4, nome: "Nail art", duracaoMin: 30, adicional: true, observacao: "adicional a qualquer serviço", preco: null },
];

export const cores: Cor[] = [
    { id: "noite", nome: "Azul noite", hex: "#24306E" },
    { id: "cereja", nome: "Vermelho cereja", hex: "#8E1B33" },
    { id: "manteiga", nome: "Amarelo manteiga", hex: "#EEE2A0" },
    { id: "nude", nome: "Nude rosado", hex: "#E7C6BC" },
    { id: "celeste", nome: "Celeste", hex: "#A9C7E3" },
];
