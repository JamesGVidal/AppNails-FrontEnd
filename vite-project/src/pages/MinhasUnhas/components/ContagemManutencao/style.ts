import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const ContagemCard = styled.section`
  position: relative;
  overflow: hidden;
  padding: var(--espaco-24);

  border-radius: var(--raio-destaque);
  background-color: var(--creme);

  display: flex;
  flex-direction: column;
  gap: var(--espaco-24);

  ${media.mobile} {
    padding: var(--espaco-20);

    flex-direction: row;
    align-items: center;
    gap: 18px;
  }
`;

export const estrela = css`
  position: absolute;
  top: 12px;
  right: 18px;
  opacity: 0.35;

  ${media.mobile} {
    display: none;
  }
`;

export const Anel = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 128px;
  height: 128px;

  svg {
    width: 100%;
    height: 100%;
  }

  [data-trilho] {
    stroke: var(--borda);
  }

  [data-arco] {
    stroke: var(--azul-forte);
  }

  & > div {
    position: absolute;
    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  strong {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: 38px;
    line-height: 1;
  }

  span {
    color: var(--texto-suave);
    font-size: 13px;
    font-weight: 700;
  }

  ${media.mobile} {
    width: 112px;
    height: 112px;

    strong {
      font-size: 34px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > span:first-child {
    color: var(--rotulo);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  & > strong {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 28px;
  }

  ${media.mobile} {
    & > strong {
      font-size: 22px;
    }
  }
`;

export const SoTabletOuMaior = styled.span`
  color: var(--texto-suave);
  font-size: 14px;

  ${media.mobile} {
    display: none;
  }
`;

// Celular: 44px e mais estreito (telas/MinhasUnhas.html).
export const botaoAgendar = css`
  margin-top: var(--espaco-8);
  align-self: flex-start;

  ${media.mobile} {
    margin-top: var(--espaco-4);

    &&[data-tamanho] {
      min-height: 44px;
      padding: 0 18px;
      font-size: 14px;
    }
  }
`;
