import { NavLink } from "react-router";
import logo from "../../../assets/imagens/logo.png";
import { Button } from "../Button";
import { TopNavConteudo, TopNavHeader, TopNavLinks, TopNavLogo, topNavLink } from "./style";

// Links com # são âncoras da tela Início: <a> comum, para o navegador rolar até a seção.
const links = [
    { href: "/#servicos", rotulo: "Serviços" },
    { href: "/#portfolio", rotulo: "Portfólio" },
    { to: "/provar", rotulo: "Prova virtual" },
    { to: "/minhas-unhas", rotulo: "Minhas unhas" },
];

// Aparece a partir do tablet (600px); no mobile a navegação fica no BottomNav.
export const TopNav = () => {
    return (
        <TopNavHeader>
            <TopNavConteudo>
                <TopNavLogo to="/" aria-label="Gaby Nail, início">
                    <img src={logo} alt="Gaby Nail" />
                </TopNavLogo>

                <TopNavLinks aria-label="Menu">
                    {links.map(({ href, to, rotulo }) =>
                        to ? (
                            <NavLink key={rotulo} to={to} className={topNavLink}>
                                {rotulo}
                            </NavLink>
                        ) : (
                            <a key={rotulo} href={href} className={topNavLink}>
                                {rotulo}
                            </a>
                        )
                    )}
                </TopNavLinks>

                <Button to="/agendar" tamanho="compacto">
                    Agendar horário
                </Button>
            </TopNavConteudo>
        </TopNavHeader>
    );
};
