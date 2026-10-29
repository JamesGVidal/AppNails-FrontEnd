import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const ResumoAside = styled.aside`
  flex: 1 1 300px;
  min-width: 0;
  padding: var(--espaco-24);

  border: 1.5px solid var(--borda);
  border-radius: 30px;
  background-color: var(--cartao);

  display: flex;
  flex-direction: column;
  gap: 18px;

  h2 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 22px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ResumoLista = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > div {
    display: flex;
    justify-content: space-between;
    gap: var(--espaco-12);
  }

  dt {
    color: var(--texto-suave);
    font-size: 14px;
  }

  dd {
    font-size: 15px;
    font-weight: 700;
    text-align: right;
  }

  & > div[data-total] {
    padding-top: 14px;
    border-top: 1px solid var(--borda);
  }

  & > div[data-total] dd {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 22px;
  }
`;

export const Lembrete = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  color: var(--texto-corpo);
  font-size: 14px;
  line-height: 1.4;
  cursor: pointer;

  input {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    accent-color: var(--azul-tinta);
  }
`;

// 56px de altura e largura total (a referência é maior que o tamanho "grande" do Button).
export const botaoConfirmar = css`
  &&[data-tamanho] {
    width: 100%;
    min-height: 56px;
  }
`;

export const linkDuvida = css`
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--espaco-8);

  font-size: 14px;
  font-weight: 700;
`;
