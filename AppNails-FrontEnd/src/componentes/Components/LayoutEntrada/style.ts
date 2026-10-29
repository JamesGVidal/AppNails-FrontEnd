import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../styles/breakpoints";

// Tablet/desktop: duas colunas iguais na altura da tela. Celular: cabeçalho azul em cima e formulário embaixo.
export const Tela = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Painel = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100dvh;
  padding: clamp(32px, 4vw, 56px);
  overflow: hidden;

  background-color: var(--azul-forte);
  color: var(--creme);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--espaco-32);

  ${media.mobile} {
    position: relative;
    height: auto;
    padding: 0;
    overflow: visible;

    border-radius: 0 0 40px 40px;

    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    &[data-cabecalho="logo"] {
      min-height: 280px;
    }

    &[data-cabecalho="voltar"] {
      min-height: 216px;
    }
  }
`;

export const LogoCirculo = styled.div`
  flex: 0 0 auto;
  width: 120px;
  height: 120px;

  border-radius: var(--raio-pilula);
  background-color: var(--creme);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 78%;
    height: auto;
  }

  ${media.mobile} {
    width: 150px;
    height: 150px;

    [data-cabecalho="voltar"] > & {
      display: none;
    }
  }
`;

export const botaoVoltar = css`
  position: absolute;
  top: 18px;
  left: var(--espaco-16);

  width: 44px;
  height: 44px;

  border-radius: var(--raio-pilula);
  background-color: color-mix(in srgb, var(--fundo) 92%, transparent);
  color: var(--azul-tinta);

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const estrelaGrande = css`
  position: absolute;
  top: 40px;
  right: 8%;
  opacity: 0.35;

  ${media.mobile} {
    width: 64px;
    height: 64px;
    top: 40px;
    right: 40px;
  }
`;

export const estrelaPequena = css`
  position: absolute;
  top: 150px;
  right: 24%;
  opacity: 0.35;

  ${media.mobile} {
    top: auto;
    bottom: 44px;
    right: auto;
    left: 36px;

    [data-cabecalho="voltar"] > & {
      width: 24px;
      height: 24px;
      top: 126px;
      bottom: auto;
      left: auto;
      right: 114px;
    }
  }
`;

export const PainelTextos = styled.div`
  max-width: 30em;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-16);

  p {
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: clamp(34px, 3.4vw, 48px);
    line-height: 1.08;
  }

  span {
    /* --fundo em vez de --creme: 5:1 de contraste sobre --azul-forte */
    color: var(--fundo);
    font-size: 16px;
    line-height: 1.55;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const PainelFotos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--espaco-12);

  img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 24px;
  }

  ${media.mobile} {
    display: none;
  }
`;

// Aba em meia-lua na base do cabeçalho do celular (tela do código).
export const Aba = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  width: 104px;
  height: 58px;
  padding-top: 14px;

  border: 5px solid var(--fundo);
  border-bottom: 0;
  border-radius: 58px 58px 0 0;
  background-color: var(--creme);
  color: var(--azul-tinta);

  display: flex;
  justify-content: center;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const Conteudo = styled.main`
  padding: var(--espaco-48) clamp(32px, 5vw, 80px);

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    flex: 1 1 auto;
    padding: 26px 26px var(--espaco-24);

    align-items: stretch;
  }
`;

export const Formulario = styled.div`
  width: 100%;
  max-width: 440px;

  display: flex;
  flex-direction: column;

  ${media.mobile} {
    max-width: none;
  }
`;
