import { RodapeConteudo, RodapeContainer, RodapeContatos, RodapeColuna, RodapeMarca, linkClaro, linkContorno } from "./style";

// Só no tablet/desktop (telas/InicioDesktop.html).
export const Rodape = () => {
    return (
        <RodapeContainer id="instagram">
            <RodapeConteudo>
                <RodapeColuna data-base="260">
                    <RodapeMarca>Gaby Nail</RodapeMarca>
                    <span>Sofisticação em cada detalhe.</span>
                </RodapeColuna>

                <RodapeColuna data-base="200">
                    <strong>Atendimento</strong>
                    <span>[DIAS E HORÁRIOS]</span>
                    <span>[ENDEREÇO]</span>
                </RodapeColuna>

                <RodapeContatos>
                    <a href="#whatsapp" className={linkClaro}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z" />
                        </svg>
                        WhatsApp
                    </a>
                    <a href="#instagram" className={linkContorno}>
                        @gabrielynaildesinger
                    </a>
                </RodapeContatos>
            </RodapeConteudo>
        </RodapeContainer>
    );
};
