import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";

// Barra lateral fixa à esquerda e conteúdo à direita (tablet/desktop).
export const Tela = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: flex;
  align-items: flex-start;
`;

export const Conteudo = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

export const PainelMain = styled.main`
  max-width: 1200px;
  padding: clamp(24px, 3.5vw, 48px) clamp(20px, 3.5vw, 44px) 64px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  ${media.mobile} {
    /* 107px = 24px de respiro + 83px do BottomNav fixo */
    padding: 0 0 calc(107px + env(safe-area-inset-bottom));
    gap: var(--espaco-24);
  }
`;

// Tablet/desktop: data e saudação à esquerda, botões à direita, números embaixo.
// Celular: bloco azul com data, saudação e 3 números.
export const Cabecalho = styled.header`
  position: relative;

  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 28px var(--espaco-24);

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: var(--espaco-4);
  }

  & > div:nth-of-type(1) > span {
    color: var(--texto-suave);
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: clamp(34px, 4vw, 50px);
    line-height: 1.1;
  }

  /* Números ocupam a linha inteira */
  & > div:last-child {
    grid-column: 1 / -1;
  }

  /* Tablet: sem espaço ao lado da saudação, os botões descem para a linha de baixo */
  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--espaco-20);
  }

  ${media.mobile} {
    overflow: hidden;
    padding: 22px 22px var(--espaco-24);

    border-radius: 0 0 32px 32px;
    background-color: var(--azul-forte);

    grid-template-columns: minmax(0, 1fr);
    gap: var(--espaco-16);

    & > div:nth-of-type(1) > span {
      color: var(--fundo);
      font-size: 13px;
      font-weight: 700;
    }

    h1 {
      color: var(--creme);
      font-size: 30px;
    }
  }
`;

export const estrelaCabecalho = css`
  position: absolute;
  top: 12px;
  right: 18px;
  opacity: 0.55;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;

  ${media.tablet} {
    justify-content: flex-start;
  }

  ${media.mobile} {
    display: none;
  }
`;

// Agenda à esquerda e lembretes à direita; no celular, lembretes vêm primeiro.
export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--espaco-24);

  ${media.mobile} {
    padding-inline: var(--espaco-20);

    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 28px;

    & > section:last-child {
      order: -1;
    }
  }
`;
