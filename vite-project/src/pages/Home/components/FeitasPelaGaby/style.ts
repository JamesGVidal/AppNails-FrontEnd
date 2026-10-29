import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";
import { Heading } from "../../../../componentes/Components/Heading";

export const PortfolioSecao = styled.section`
  padding-top: clamp(48px, 7vw, 96px);

  ${media.mobile} {
    padding-top: 0;
  }
`;

export const Cabecalho = styled.div`
  margin-bottom: var(--espaco-24);

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--espaco-8) var(--espaco-24);

  ${media.mobile} {
    margin-bottom: 14px;
    flex-wrap: nowrap;
  }
`;

// No celular o título da seção é menor (22px, telas/Main.html).
export const Titulo = styled(Heading)`
  ${media.mobile} {
    &&[data-tamanho] {
      font-size: 22px;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

export const SoMobile = styled.a`
  font-size: 14px;
  font-weight: 600;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const SoTabletOuMaior = styled.a`
  min-height: 44px;

  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 700;

  ${media.mobile} {
    display: none;
  }
`;

export const Figura = styled.figure`
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 26px;
  }

  figcaption {
    color: var(--texto-corpo);
    font-size: 15px;
    font-weight: 700;
  }
`;

// A margem negativa leva o carrossel até a borda da tela; o padding devolve o recuo da primeira foto.
export const Carrossel = styled.div`
  margin-inline: calc(-1 * clamp(20px, 4vw, 48px));
  padding-inline: clamp(20px, 4vw, 48px);
  overflow-x: auto;
  scrollbar-width: none;

  display: flex;
  gap: var(--espaco-12);

  &::-webkit-scrollbar {
    display: none;
  }

  & > figure {
    flex: 0 0 150px;
    gap: var(--espaco-8);
  }

  img {
    width: 150px;
    height: 190px;
    aspect-ratio: auto;
    border-radius: var(--raio-card);
  }

  figcaption {
    font-size: 13px;
    font-weight: 600;
  }

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const GradeDesktop = styled.div`
  ${media.mobile} {
    display: none;
  }
`;
