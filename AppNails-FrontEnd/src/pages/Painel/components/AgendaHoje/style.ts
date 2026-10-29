import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const AgendaSecao = styled.section`
  flex: 999 1 520px;
  min-width: 0;
  padding: var(--espaco-24);

  border: 1.5px solid var(--borda);
  border-radius: 30px;
  background-color: var(--cartao);

  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);

  h2 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 24px;
  }

  ol {
    list-style: none;

    display: flex;
    flex-direction: column;
  }

  ${media.mobile} {
    padding: 0;
    border: 0;
    border-radius: 0;
    background-color: transparent;

    h2 {
      font-size: 22px;
    }
  }
`;

export const Linha = styled.li`
  min-height: 84px;
  padding: var(--espaco-12) 0;

  display: flex;
  align-items: center;
  gap: var(--espaco-12) var(--espaco-24);

  & + & {
    border-top: 1px solid var(--borda);
  }

  time {
    flex: 0 0 48px;

    color: var(--texto-suave);
    font-size: 16px;
    font-weight: 700;
  }

  & > div {
    flex: 1 1 auto;
    min-width: 0;

    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-size: 16px;
    font-weight: 600;
  }

  & > div > span {
    color: var(--texto-suave);
    font-size: 14px;
  }

  /* Em andamento: faixa creme que passa um pouco das bordas da lista */
  &[data-situacao="EM_ANDAMENTO"] {
    margin-inline: calc(-1 * var(--espaco-16));
    padding-inline: var(--espaco-16);

    border-radius: 18px;
    background-color: var(--creme);
  }

  &[data-situacao="EM_ANDAMENTO"],
  &[data-situacao="EM_ANDAMENTO"] + & {
    border-top-color: transparent;
  }

  &[data-situacao="EM_ANDAMENTO"] time {
    color: var(--azul-tinta);
  }

  &[data-situacao="BLOQUEADO"] > div > span {
    font-style: italic;
  }

  ${media.mobile} {
    min-height: 72px;
    gap: var(--espaco-16);

    &[data-situacao="EM_ANDAMENTO"] {
      margin-inline: -14px;
      padding-inline: 14px;
    }

    & > div > span {
      font-size: 13px;
    }
  }
`;

export const concluido = css`
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--azul-forte);
  font-size: 14px;
  font-weight: 600;
`;

export const botaoConcluir = css`
  flex: 0 0 auto;
  min-height: 44px;
  padding: 0 18px;

  border: 0;
  border-radius: var(--raio-pilula);
  background-color: var(--azul-tinta);
  color: var(--creme);

  font-family: var(--fonte-texto);
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: var(--azul-hover);
  }
`;

export const botaoBloquear = css`
  flex: 0 0 auto;
  min-height: 44px;
  padding: 0 18px;

  border: 1.5px solid var(--borda-dia);
  border-radius: var(--raio-pilula);
  background-color: transparent;
  color: var(--azul-tinta);

  font-family: var(--fonte-texto);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    border-color: var(--azul-tinta);
  }
`;

export const SoMobile = styled.span`
  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const SoTabletOuMaior = styled.span`
  ${media.mobile} {
    display: none;
  }
`;
