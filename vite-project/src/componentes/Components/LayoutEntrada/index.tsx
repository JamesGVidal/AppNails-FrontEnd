import type { ReactNode } from "react";
import { Link } from "react-router";
import logo from "../../../assets/imagens/logo.png";
import { Sparkle } from "../Sparkle";
import {
    Aba,
    Conteudo,
    Formulario,
    LogoCirculo,
    Painel,
    PainelFotos,
    PainelTextos,
    Tela,
    botaoVoltar,
    estrelaGrande,
    estrelaPequena,
} from "./style";

type Foto = {
    src: string;
    alt: string;
};

type LayoutEntradaProps = {
    // Textos e fotos do painel azul (só no tablet/desktop).
    titulo: string;
    texto: string;
    fotos: Foto[];
    // Cabeçalho do celular: logo grande (login) ou voltar + aba com ícone (código).
    cabecalhoMobile: "logo" | "voltar";
    voltarPara?: string;
    children: ReactNode;
};

// Telas de entrada (login e código): painel azul à esquerda no tablet/desktop, cabeçalho azul no celular.
export const LayoutEntrada = ({ titulo, texto, fotos, cabecalhoMobile, voltarPara = "/", children }: LayoutEntradaProps) => {
    return (
        <Tela>
            <Painel data-cabecalho={cabecalhoMobile}>
                <LogoCirculo>
                    <img src={logo} alt="Gaby Nail" />
                </LogoCirculo>

                {cabecalhoMobile === "voltar" && (
                    <Link to={voltarPara} aria-label="Voltar" className={botaoVoltar}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m15 6-6 6 6 6" />
                        </svg>
                    </Link>
                )}

                <Sparkle tamanho={88} cor="var(--creme)" className={estrelaGrande} />
                <Sparkle tamanho={30} cor="var(--creme)" className={estrelaPequena} />

                <PainelTextos>
                    <p>{titulo}</p>
                    <span>{texto}</span>
                </PainelTextos>

                <PainelFotos>
                    {fotos.map((foto) => (
                        <img key={foto.src} src={foto.src} alt={foto.alt} />
                    ))}
                </PainelFotos>

                {cabecalhoMobile === "voltar" && (
                    <Aba aria-hidden="true">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
                            <path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z" />
                            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="2.6" strokeLinecap="round" />
                        </svg>
                    </Aba>
                )}
            </Painel>

            <Conteudo>
                <Formulario>{children}</Formulario>
            </Conteudo>
        </Tela>
    );
};
