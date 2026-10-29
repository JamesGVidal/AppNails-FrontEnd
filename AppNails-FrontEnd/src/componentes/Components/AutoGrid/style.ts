import { styled } from "@linaria/react";

export const AutoGridContainer = styled.div`
  display: grid;
  /* min(..., 100%) evita estouro horizontal quando a tela é mais estreita que a coluna mínima */
  grid-template-columns: repeat(auto-fit, minmax(min(var(--autogrid-min), 100%), 1fr));
  gap: var(--autogrid-gap);
`;
