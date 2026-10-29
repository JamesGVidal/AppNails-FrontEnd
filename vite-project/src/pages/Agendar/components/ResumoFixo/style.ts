import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const ResumoFixoContainer = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  padding: var(--espaco-16) 22px max(26px, env(safe-area-inset-bottom));

  border-top: 1px solid var(--borda);
  border-radius: 26px 26px 0 0;
  background-color: var(--cartao);
  box-shadow: 0 -8px 24px color-mix(in srgb, var(--azul-forte) 8%, transparent);

  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const ResumoLinha = styled.div`
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
    color: var(--azul-tinta);
    font-size: 15px;
    font-weight: 700;
  }

  & > div > span {
    color: var(--texto-suave);
    font-size: 13px;
  }

  & > span {
    flex: 0 0 auto;

    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const botaoConfirmar = css`
  &&[data-tamanho] {
    width: 100%;
  }
`;
