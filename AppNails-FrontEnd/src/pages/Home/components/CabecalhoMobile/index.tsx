import logo from "../../../../assets/imagens/logo.png";
import { CabecalhoAcoes, CabecalhoContainer, CabecalhoLogo, PontoAlerta, iconeBotao } from "./style";

// Cabeçalho só do celular: logo, dúvidas e notificações (no tablet/desktop entra o TopNav).
export const CabecalhoMobile = () => {
    return (
        <CabecalhoContainer>
            <CabecalhoLogo src={logo} alt="Gaby Nail" />

            <CabecalhoAcoes>
                <a href="#ajuda" aria-label="Tirar dúvidas" className={iconeBotao}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 5h16v11H9l-5 4z" />
                    </svg>
                </a>

                <button type="button" aria-label="Notificações" className={iconeBotao}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
                        <path d="M10 20.5a2 2 0 0 0 4 0" />
                    </svg>
                    <PontoAlerta />
                </button>
            </CabecalhoAcoes>
        </CabecalhoContainer>
    );
};
