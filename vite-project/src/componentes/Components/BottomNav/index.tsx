import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { BottomNavContainer, BottomNavLista, bottomNavItem } from "./style";

// Um item da navegação: o ícone é o conteúdo de um <svg viewBox="0 0 24 24"> de traço.
export type ItemNav = {
    to: string;
    rotulo: string;
    icone: ReactNode;
};

// Itens da cliente. Ícones copiados de telas/Main.html.
const itensCliente: ItemNav[] = [
    {
        to: "/",
        rotulo: "Início",
        icone: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />,
    },
    {
        to: "/agendar",
        rotulo: "Agendar",
        icone: (
            <>
                <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
                <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
            </>
        ),
    },
    {
        to: "/provar",
        rotulo: "Provar",
        icone: (
            <>
                <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                <circle cx="12" cy="13.5" r="3.5" />
            </>
        ),
    },
    {
        to: "/minhas-unhas",
        rotulo: "Minhas unhas",
        icone: (
            <>
                <path d="M8 21V10a4 4 0 0 1 8 0v11" />
                <path d="M8 14h8" />
            </>
        ),
    },
];

type BottomNavProps = {
    // Sem itens, usa a navegação da cliente; o painel da Gaby passa os dela.
    itens?: ItemNav[];
};

// Só aparece no mobile (até 599px); no tablet e desktop a navegação fica no TopNav (ou na barra lateral do painel).
export const BottomNav = ({ itens = itensCliente }: BottomNavProps) => {
    return (
        <BottomNavContainer aria-label="Navegação principal">
            <BottomNavLista>
                {itens.map(({ to, rotulo, icone }) => (
                    <li key={to}>
                        <NavLink to={to} end className={bottomNavItem}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinejoin="round" aria-hidden="true">
                                {icone}
                            </svg>
                            {rotulo}
                        </NavLink>
                    </li>
                ))}
            </BottomNavLista>
        </BottomNavContainer>
    );
};
