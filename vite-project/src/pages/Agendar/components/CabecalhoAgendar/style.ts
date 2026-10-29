import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";
import { Container } from "../../../../componentes/Components/Container";

export const CabecalhoMobile = styled.header`
  padding: 18px var(--espaco-16) 6px;

  display: flex;
  align-items: center;
  gap: 10px;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const botaoVoltar = css`
  flex: 0 0 auto;
  width: 44px;
  height: 44px;

  border-radius: var(--raio-pilula);
  background-color: var(--creme);
  color: var(--azul-tinta);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TituloMobile = styled.h1`
  color: var(--azul-tinta);
  font-family: var(--fonte-titulo);
  font-variation-settings: 'SOFT' 100;
  font-weight: 650;
  font-size: 26px;
`;

export const CabecalhoDesktop = styled.header`
  border-bottom: 1px solid var(--borda);

  ${media.mobile} {
    display: none;
  }
`;

export const ConteudoDesktop = styled(Container)`
  padding-block: var(--espaco-12);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--espaco-12);

  img {
    height: 52px;
    width: auto;
  }
`;

export const linkVoltar = css`
  min-height: 44px;
  padding: 0 var(--espaco-16);

  border: 1.5px solid var(--borda-tracejada);
  border-radius: var(--raio-pilula);

  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  svg {
    width: 18px;
    height: 18px;
  }
`;
