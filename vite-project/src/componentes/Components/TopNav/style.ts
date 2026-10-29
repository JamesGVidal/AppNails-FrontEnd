import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { Link } from "react-router";
import { media } from "../../../styles/breakpoints";
import { Container } from "../Container";

export const TopNavHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  border-bottom: 1px solid var(--borda);
  background-color: color-mix(in srgb, var(--fundo) 94%, transparent);

  ${media.mobile} {
    display: none;
  }
`;

// Ordem da referência: logo, botão e menu; quando não cabem (tablet), o menu desce para a segunda linha.
export const TopNavConteudo = styled(Container)`
  padding-block: var(--espaco-12);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--espaco-12) 28px;

  & > :last-child {
    order: 2;
  }
`;

export const TopNavLogo = styled(Link)`
  display: flex;

  img {
    height: 56px;
    width: auto;
  }
`;

export const TopNavLinks = styled.nav`
  order: 3;
  flex: 1 1 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--espaco-4) 6px;
`;

// Classe compartilhada pelo <NavLink> e pelo <a> do menu.
export const topNavLink = css`
  min-height: 44px;
  padding: 0 14px;

  border-radius: var(--raio-pilula);

  display: flex;
  align-items: center;

  color: var(--azul-tinta);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  /* Página atual (o NavLink marca aria-current) */
  &[aria-current="page"] {
    background-color: var(--creme);
  }
`;
