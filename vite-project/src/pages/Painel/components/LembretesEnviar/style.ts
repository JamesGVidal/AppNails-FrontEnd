import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const LembretesSecao = styled.section`
  flex: 1 1 300px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);
`;

export const Cabecalho = styled.div`
  margin-bottom: 2px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  h2 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 24px;
  }

  span {
    color: var(--texto-suave);
    font-size: 14px;
  }

  [data-texto="curto"] {
    display: none;
  }

  /* Celular: subtítulo curto ao lado do título */
  ${media.mobile} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 2px var(--espaco-8);

    h2 {
      font-size: 22px;
    }

    span {
      font-size: 13px;
    }

    [data-texto="longo"] {
      display: none;
    }

    [data-texto="curto"] {
      display: inline;
    }
  }
`;

export const LembreteCard = styled.article`
  padding: 14px var(--espaco-16) 14px 18px;

  border: 1.5px solid var(--borda);
  border-radius: var(--raio-card);
  background-color: var(--cartao);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--espaco-12);

  & > div {
    min-width: 0;

    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-size: 15px;
    font-weight: 700;
  }

  span {
    color: var(--texto-suave);
    font-size: 13px;
  }

  ${media.mobile} {
    padding-block: var(--espaco-16);

    strong {
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const botaoEnviar = css`
  flex: 0 0 auto;
  min-height: 44px;
  padding: 0 18px;

  border-radius: var(--raio-pilula);
  background-color: var(--azul-tinta);

  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &,
  &:hover {
    color: var(--creme);
  }

  &:hover {
    background-color: var(--azul-hover);
  }
`;

export const Vazio = styled.p`
  color: var(--texto-suave);
  font-size: 14px;
`;
