import type { ItemNav } from "../../componentes/Components/BottomNav";

// Navegação do painel da Gaby. A barra inferior (celular) usa os 4 primeiros; a lateral usa todos.
// TODO: Agenda, Clientes, Catálogo e Horários ainda não têm tela.
export const itensPainel: ItemNav[] = [
    {
        to: "/painel",
        rotulo: "Hoje",
        icone: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" strokeLinecap="round" />
            </>
        ),
    },
    {
        to: "/painel/agenda",
        rotulo: "Agenda",
        icone: (
            <>
                <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
                <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
            </>
        ),
    },
    {
        to: "/painel/clientes",
        rotulo: "Clientes",
        icone: (
            <>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" strokeLinecap="round" />
            </>
        ),
    },
    {
        to: "/painel/catalogo",
        rotulo: "Catálogo",
        icone: (
            <>
                <path d="M10 3h4v5h-4z" />
                <path d="M7 12a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" />
            </>
        ),
    },
    {
        to: "/painel/horarios",
        rotulo: "Horários e folgas",
        icone: (
            <>
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" strokeLinecap="round" />
            </>
        ),
    },
];
