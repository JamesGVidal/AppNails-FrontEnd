import { AutoGrid } from "../../../../componentes/Components/AutoGrid";
import { Container } from "../../../../componentes/Components/Container";
import type { Trabalho } from "../../dados";
import { Cabecalho, Carrossel, Figura, GradeDesktop, PortfolioSecao, SoMobile, SoTabletOuMaior, Titulo } from "./style";

type FeitasPelaGabyProps = {
    trabalhos: Trabalho[];
    // Fotos e ordem do carrossel do celular.
    destaquesMobile: Trabalho[];
};

// Celular: carrossel horizontal. Tablet/desktop: grade que se ajusta à largura.
export const FeitasPelaGaby = ({ trabalhos, destaquesMobile }: FeitasPelaGabyProps) => {
    return (
        <PortfolioSecao id="portfolio">
            <Container>
                <Cabecalho>
                    <Titulo nivel={2} tamanho="secao">
                        Feitas pela Gaby
                    </Titulo>
                    <SoMobile href="#portfolio">Ver todas</SoMobile>
                    <SoTabletOuMaior href="#instagram">Mais no Instagram</SoTabletOuMaior>
                </Cabecalho>

                <Carrossel>
                    {destaquesMobile.map((trabalho) => (
                        <Figura key={trabalho.id}>
                            <img src={trabalho.imagemUrl} alt={trabalho.descricaoImagem} />
                            <figcaption>{trabalho.titulo}</figcaption>
                        </Figura>
                    ))}
                </Carrossel>

                <GradeDesktop>
                    <AutoGrid min="220px" gap={16}>
                        {trabalhos.map((trabalho) => (
                            <Figura key={trabalho.id}>
                                <img src={trabalho.imagemUrl} alt={trabalho.descricaoImagem} />
                                <figcaption>{trabalho.titulo}</figcaption>
                            </Figura>
                        ))}
                    </AutoGrid>
                </GradeDesktop>
            </Container>
        </PortfolioSecao>
    );
};
