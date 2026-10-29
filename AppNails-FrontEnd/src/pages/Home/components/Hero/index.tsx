import { Button } from "../../../../componentes/Components/Button";
import { Sparkle } from "../../../../componentes/Components/Sparkle";
import type { Trabalho } from "../../dados";
import { HeroBotoes, HeroFotos, HeroRotulo, HeroSecao, HeroSaudacao, HeroTexto, HeroTextos, HeroTitulo } from "./style";

type HeroProps = {
    nomeCliente: string;
    // Três fotos: a primeira ocupa a coluna inteira, as outras duas se empilham ao lado.
    fotos: Trabalho[];
};

// Celular: saudação + título. Tablet/desktop: rótulo, título, texto, botões e fotos.
export const Hero = ({ nomeCliente, fotos }: HeroProps) => {
    return (
        <HeroSecao>
            <HeroTextos>
                <HeroSaudacao>Oi, {nomeCliente}</HeroSaudacao>

                <HeroRotulo>
                    <Sparkle tamanho={16} />
                    Nail designer · [CIDADE]
                </HeroRotulo>

                <HeroTitulo nivel={1} tamanho="hero">
                    Delicada, diferente e cheia de personalidade.
                </HeroTitulo>

                <HeroTexto>
                    Agende seu horário em poucos toques, veja os dias livres na hora e teste cores e desenhos na foto da sua própria mão
                    antes de decidir.
                </HeroTexto>

                <HeroBotoes>
                    <Button to="/agendar">Agendar horário</Button>
                    <Button
                        to="/provar"
                        variante="secundaria"
                        icone={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
                                <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                <circle cx="12" cy="13.5" r="3.5" />
                            </svg>
                        }
                    >
                        Provar na minha mão
                    </Button>
                </HeroBotoes>
            </HeroTextos>

            <HeroFotos>
                {fotos.map((foto) => (
                    <img key={foto.id} src={foto.imagemUrl} alt={foto.descricaoImagem} />
                ))}
                <Sparkle tamanho={46} />
            </HeroFotos>
        </HeroSecao>
    );
};
