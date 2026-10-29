import { Link } from "react-router";
import logo from "../../../../assets/imagens/logo.png";
import { CabecalhoDesktop, CabecalhoMobile, ConteudoDesktop, TituloMobile, botaoVoltar, linkVoltar } from "./style";

const chevronEsquerda = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m15 6-6 6 6 6" />
    </svg>
);

// Celular: voltar + título (telas/Agendar.html). Tablet/desktop: logo + "Voltar ao início" (telas/AgendarDesktop.html).
export const CabecalhoAgendar = () => {
    return (
        <>
            <CabecalhoMobile>
                <Link to="/" aria-label="Voltar" className={botaoVoltar}>
                    {chevronEsquerda}
                </Link>
                <TituloMobile>Agendar</TituloMobile>
            </CabecalhoMobile>

            <CabecalhoDesktop>
                <ConteudoDesktop>
                    <Link to="/" aria-label="Gaby Nail, início">
                        <img src={logo} alt="Gaby Nail" />
                    </Link>
                    <Link to="/" className={linkVoltar}>
                        {chevronEsquerda}
                        Voltar ao início
                    </Link>
                </ConteudoDesktop>
            </CabecalhoDesktop>
        </>
    );
};
