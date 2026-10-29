import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";
import { Container } from "../../../../componentes/Components/Container";
import { Heading } from "../../../../componentes/Components/Heading";

export const HeroSecao = styled(Container)`
  padding-block: clamp(32px, 6vw, 80px) clamp(32px, 5vw, 64px);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(28px, 5vw, 64px);

  ${media.mobile} {
    padding-block: 0;
  }
`;

export const HeroTextos = styled.div`
  flex: 1 1 420px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 22px;

  ${media.mobile} {
    gap: var(--espaco-8);
  }
`;

// Só no celular; no tablet/desktop a saudação fica no card de manutenção.
export const HeroSaudacao = styled.p`
  color: var(--rotulo);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const HeroRotulo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--espaco-8);

  color: var(--rotulo);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  ${media.mobile} {
    display: none;
  }
`;

// No celular o título é fixo em 34px (telas/Main.html); a partir do tablet vale o clamp do Heading.
export const HeroTitulo = styled(Heading)`
  ${media.mobile} {
    &&[data-tamanho] {
      font-size: 34px;
      line-height: 1.05;
      letter-spacing: -0.01em;
    }
  }
`;

export const HeroTexto = styled.p`
  max-width: 34em;

  color: var(--texto-corpo);
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.55;

  ${media.mobile} {
    display: none;
  }
`;

export const HeroBotoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--espaco-12);

  ${media.mobile} {
    display: none;
  }
`;

export const HeroFotos = styled.div`
  position: relative;
  flex: 1 1 380px;
  min-width: 0;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 32px;
  }

  img:first-child {
    grid-row: span 2;
    height: 100%;
    min-height: 360px;
  }

  svg {
    position: absolute;
    left: -14px;
    top: -14px;
  }

  ${media.mobile} {
    display: none;
  }
`;
