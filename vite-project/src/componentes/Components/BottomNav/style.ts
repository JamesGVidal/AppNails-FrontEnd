import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../styles/breakpoints";

export const BottomNavContainer = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  border-top: 1px solid var(--borda);
  background-color: var(--fundo);

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const BottomNavLista = styled.ul`
  list-style: none;
  padding: var(--espaco-8) 10px max(22px, env(safe-area-inset-bottom));

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

// Classe (e não styled) porque o className do NavLink aceita função e o styled do Linaria não o tipa.
export const bottomNavItem = css`
  min-height: 52px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--espaco-4);

  color: var(--rotulo);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  svg {
    stroke-width: 1.75;
  }

  &:hover {
    color: var(--azul-tinta);
  }

  &[aria-current="page"] {
    color: var(--azul-tinta);
    font-weight: 700;
  }

  &[aria-current="page"] svg {
    stroke-width: 1.9;
  }
`;
