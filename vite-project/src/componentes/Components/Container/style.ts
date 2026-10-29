import { styled } from "@linaria/react";

// content-box: os 1200px são de largura útil, com o padding por fora (como nas telas de referência).
export const ContainerBox = styled.div`
  box-sizing: content-box;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(20px, 4vw, 48px);
`;
