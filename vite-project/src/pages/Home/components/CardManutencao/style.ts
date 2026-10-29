import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";
// Celular: coluna (telas/Main.html). Tablet/desktop: linha que quebra (telas/InicioDesktop.html).
export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: clamp(20px, 3vw, 32px);

  border-radius: 32px;
  background-color: var(--azul-forte);
  /* --fundo em vez de --creme no texto: 5:1 de contraste (o creme fica em 4,3:1) */
  color: var(--fundo);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px var(--espaco-32);

  ${media.mobile} {
    padding: 22px 22px 20px;
    border-radius: var(--raio-destaque);

    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: var(--espaco-16);
  }
`;

export const estrelaGrande = css`
  position: absolute;
  right: 24px;
  top: -18px;
  opacity: 0.2;

  ${media.mobile} {
    width: 54px;
    height: 54px;
    right: 18px;
    top: -6px;
    opacity: 0.35;
  }
`;

export const estrelaPequena = css`
  position: absolute;
  right: 80px;
  top: 46px;
  opacity: 0.35;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const CardIdentificacao = styled.div`
  flex: 1 1 320px;

  display: flex;
  align-items: center;
  gap: 18px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--espaco-4);
  }

  ${media.mobile} {
    flex: 0 0 auto;
    gap: 14px;

    & > div {
      gap: 2px;
    }
  }
`;

export const CardFoto = styled.img`
  flex: 0 0 auto;
  width: 76px;
  height: 76px;

  border: 2px solid var(--creme);
  border-radius: var(--raio-pilula);
  object-fit: cover;

  ${media.mobile} {
    width: 64px;
    height: 64px;
  }
`;

export const CardRotulo = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  ${media.mobile} {
    font-weight: 600;
    letter-spacing: 0.04em;
  }
`;

export const CardValor = styled.span`
  font-family: var(--fonte-titulo);
  font-variation-settings: 'SOFT' 100;
  font-weight: 600;
  font-size: clamp(26px, 3vw, 34px);
  line-height: 1.1;

  ${media.mobile} {
    font-size: 30px;
  }
`;

export const SoTabletOuMaior = styled.span`
  ${media.mobile} {
    display: none;
  }
`;

export const CardProgresso = styled.div`
  flex: 1 1 240px;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-8);

  p {
    font-size: 14px;
  }

  ${media.mobile} {
    flex: 0 0 auto;
    gap: var(--espaco-16);

    p {
      line-height: 1.4;
    }
  }
`;

export const barra = css`
  height: 8px;
  overflow: hidden;

  border-radius: 4px;
  background-color: color-mix(in srgb, var(--creme) 25%, transparent);

  & > div {
    height: 100%;
    border-radius: 4px;
    background-color: var(--creme);
  }

  ${media.mobile} {
    height: 6px;
    border-radius: 3px;
  }
`;

// Celular: 48px, alinhado à esquerda e com seta (Main.html). Tablet/desktop: 52px, sem seta.
export const botaoManutencao = css`
  flex: 0 0 auto;

  ${media.mobile} {
    &&[data-tamanho] {
      align-self: flex-start;
      min-height: 48px;
      padding: 0 22px;
    }
  }
`;

export const chevronMobile = css`
  ${media.tabletOuMaior} {
    display: none;
  }
`;
