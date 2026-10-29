import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const CaixasCodigo = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: var(--espaco-12);

  input {
    width: 100%;
    height: 70px;

    border: 1.5px solid var(--borda);
    border-radius: var(--raio-chip);
    background-color: var(--cartao);
    color: var(--azul-tinta);

    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 26px;
    text-align: center;
  }

  input[data-preenchido] {
    border-color: var(--azul-tinta);
  }

  /* Caixa em foco: borda mais grossa no lugar do contorno padrão */
  input:focus-visible,
  input:focus {
    outline: none;
    border-width: 2px;
    border-color: var(--azul-tinta);
  }

  ${media.mobile} {
    gap: var(--espaco-8);

    input {
      height: 64px;
    }
  }
`;
