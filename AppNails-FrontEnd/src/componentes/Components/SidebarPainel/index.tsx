import { NavLink } from "react-router";
import logo from "../../../assets/imagens/logo.png";
import type { ItemNav } from "../BottomNav";
import { Sparkle } from "../Sparkle";
import { Marca, SidebarContainer, SidebarLista, estrela, sidebarItem } from "./style";

type SidebarPainelProps = {
    itens: ItemNav[];
};

// Barra lateral do painel da Gaby: só no tablet/desktop. No celular entra o BottomNav com os itens do painel.
export const SidebarPainel = ({ itens }: SidebarPainelProps) => {
    return (
        <SidebarContainer>
            <Marca>
                <span>
                    <img src={logo} alt="" />
                </span>
                <span>
                    <strong>Gaby Nail</strong>
                    <span>Painel</span>
                </span>
            </Marca>

            <nav aria-label="Menu do painel">
                <SidebarLista>
                    {itens.map(({ to, rotulo, icone }) => (
                        <li key={to}>
                            <NavLink to={to} end className={sidebarItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
                                    {icone}
                                </svg>
                                {rotulo}
                            </NavLink>
                        </li>
                    ))}
                </SidebarLista>
            </nav>

            <Sparkle tamanho={68} cor="var(--azul)" className={estrela} />
        </SidebarContainer>
    );
};
