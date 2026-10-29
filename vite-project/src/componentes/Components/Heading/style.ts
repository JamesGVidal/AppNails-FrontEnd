import { styled } from "@linaria/react";

export const HeadingTexto = styled.h2`
  margin: 0;

  font-family: var(--fonte-titulo);
  font-variation-settings: 'SOFT' 100, 'WONK' 0;
  font-weight: 650;
  color: var(--azul-tinta);

  &[data-tamanho="hero"] {
    font-size: clamp(40px, 6vw, 76px);
    line-height: 1.02;
    letter-spacing: -0.015em;
  }

  &[data-tamanho="secao"] {
    font-size: clamp(30px, 4vw, 46px);
    line-height: 1.1;
  }
`;
