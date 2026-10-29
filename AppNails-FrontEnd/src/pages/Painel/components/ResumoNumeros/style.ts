import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const NumerosGrade = styled.div`
  display: grid;
  /* 200px: 4 colunas no desktop e 2x2 no tablet */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--espaco-12);

  ${media.mobile} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--espaco-8);
  }
`;

export const NumeroCard = styled.div`
  padding: var(--espaco-16) 18px;

  border-radius: 24px;
  background-color: var(--creme);

  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: 34px;
    line-height: 1.1;
  }

  span {
    color: var(--texto-corpo);
    font-size: 14px;
  }

  [data-rotulo="curto"] {
    display: none;
  }

  /* Celular: sobre o cabeçalho azul, cartões translúcidos e texto claro */
  ${media.mobile} {
    padding: var(--espaco-12);
    border-radius: 18px;
    background-color: color-mix(in srgb, var(--fundo) 15%, transparent);

    strong {
      color: var(--fundo);
      font-size: 26px;
    }

    span {
      color: var(--fundo);
      font-size: 12px;
      font-weight: 700;
    }

    [data-rotulo="longo"] {
      display: none;
    }

    [data-rotulo="curto"] {
      display: inline;
    }

    &[data-so-tablet] {
      display: none;
    }
  }
`;
