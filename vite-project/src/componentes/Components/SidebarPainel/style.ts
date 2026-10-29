import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../styles/breakpoints";

export const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  flex: 0 0 clamp(200px, 17vw, 240px);
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  padding: var(--espaco-20);

  background-color: var(--azul-forte);
  color: var(--fundo);

  display: flex;
  flex-direction: column;
  gap: var(--espaco-20);

  ${media.mobile} {
    display: none;
  }
`;

export const Marca = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espaco-12);

  & > span:first-child {
    flex: 0 0 auto;
    width: 52px;
    height: 52px;

    border-radius: var(--raio-pilula);
    background-color: var(--creme);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 78%;
    height: auto;
  }

  & > span:last-child {
    display: flex;
    flex-direction: column;
  }

  strong {
    color: var(--creme);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.1;
  }

  & > span:last-child > span {
    font-size: 13px;
  }
`;

export const SidebarLista = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

// Classe (e não styled) porque o className do NavLink aceita função e o styled do Linaria não o tipa.
export const sidebarItem = css`
  min-height: 48px;
  padding: 0 var(--espaco-16);

  border-radius: var(--raio-chip);
  color: var(--fundo);

  display: flex;
  align-items: center;
  gap: var(--espaco-12);

  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: var(--fundo);
    background-color: color-mix(in srgb, var(--fundo) 12%, transparent);
  }

  &[aria-current="page"] {
    background-color: var(--creme);
    color: var(--azul-tinta);
  }
`;

export const estrela = css`
  position: absolute;
  right: 20px;
  bottom: 20px;
  opacity: 0.6;
`;
