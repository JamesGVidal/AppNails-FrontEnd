import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";
import { Container } from "../../../../componentes/Components/Container";

export const CabecalhoContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const CabecalhoLogo = styled.img`
  height: 58px;
  width: auto;
`;

export const CabecalhoAcoes = styled.div`
  display: flex;
  gap: var(--espaco-8);
`;

// Classe compartilhada pelo <a> de dúvidas e pelo <button> de notificações.
export const iconeBotao = css`
  position: relative;
  width: 44px;
  height: 44px;

  border: 0;
  border-radius: var(--raio-pilula);
  background-color: var(--creme);
  color: var(--azul-tinta);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const PontoAlerta = styled.span`
  position: absolute;
  top: 10px;
  right: 11px;

  width: 8px;
  height: 8px;

  border-radius: var(--raio-pilula);
  background-color: var(--alerta);
`;
