import { Link } from "react-router";
import fotoProva from "../../../../assets/imagens/azul-folhas-3.jpg";
import { Button } from "../../../../componentes/Components/Button";
import { Container } from "../../../../componentes/Components/Container";
import { SwatchBottle } from "../../../../componentes/Components/SwatchBottle";
import type { Cor } from "../../dados";
import { Bloco, BlocoTextos, CartaoMobile, Frascos, IconeCamera, ProveSecao, Titulo } from "./style";

type ProveAntesProps = {
    cores: Cor[];
};

const iconeCamera = (tamanho: number) => (
    <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="13.5" r="3.5" />
    </svg>
);

// Celular: cartão-atalho (telas/Main.html). Tablet/desktop: bloco com foto e amostras (telas/InicioDesktop.html).
export const ProveAntes = ({ cores }: ProveAntesProps) => {
    return (
        <ProveSecao>
            <Container>
                <CartaoMobile>
                    <Link to="/provar">
                        <IconeCamera>{iconeCamera(24)}</IconeCamera>
                        <span>
                            <strong>Prove antes de agendar</strong>
                            <span>Fotografe sua mão e teste cores e desenhos</span>
                        </span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 6 6 6-6 6" />
                        </svg>
                    </Link>
                </CartaoMobile>

                <Bloco>
                    <img src={fotoProva} alt="Mão fotografada para a prova virtual" />
                    <BlocoTextos>
                        <Titulo nivel={2} tamanho="secao">
                            Prove antes de agendar
                        </Titulo>
                        <p>
                            Tire uma foto da sua mão e teste as cores e os desenhos do catálogo da Gaby. A foto fica só no seu celular.
                        </p>
                        <Frascos>
                            {cores.map((cor) => (
                                <SwatchBottle key={cor.id} cor={cor.hex} />
                            ))}
                        </Frascos>
                        <Button to="/provar" tamanho="medio">
                            Abrir prova virtual
                        </Button>
                    </BlocoTextos>
                </Bloco>
            </Container>
        </ProveSecao>
    );
};
