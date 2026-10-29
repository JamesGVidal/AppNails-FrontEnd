import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";

export const Textos = styled.div`
  margin-bottom: 22px;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-8);

  h1 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: clamp(32px, 3.2vw, 44px);
    line-height: 1.08;
  }

  p {
    color: var(--texto-corpo);
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Rotulo = styled.label`
  display: block;
  margin-bottom: 10px;

  color: var(--rotulo);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const CampoTelefone = styled.div`
  min-height: 58px;
  overflow: hidden;

  border: 1.5px solid var(--borda);
  border-radius: 20px;
  background-color: var(--cartao);

  display: flex;
  align-items: stretch;

  &:focus-within {
    border-color: var(--azul-tinta);
  }

  &[data-erro] {
    border-color: var(--alerta);
  }

  span {
    padding: 0 14px;
    border-right: 1.5px solid var(--borda);

    display: flex;
    align-items: center;

    color: var(--azul-tinta);
    font-size: 16px;
    font-weight: 700;
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    padding: 0 14px;

    border: 0;
    background-color: transparent;

    font-size: 18px;
    font-weight: 500;
  }

  /* A borda do campo já mostra o foco */
  input:focus-visible {
    outline: none;
  }

  input::placeholder {
    color: var(--desativado);
  }
`;

export const Erro = styled.p`
  margin-top: var(--espaco-8);

  color: var(--alerta);
  font-size: 13px;
  font-weight: 600;
`;

export const botaoLargo = css`
  margin-top: 22px;

  &&[data-tamanho] {
    width: 100%;
    min-height: 56px;
  }
`;

export const Divisor = styled.div`
  margin-block: 22px;

  display: flex;
  align-items: center;
  gap: var(--espaco-16);

  color: var(--texto-suave);
  font-size: 13px;

  &::before,
  &::after {
    content: "";
    flex: 1 1 auto;
    height: 1px;
    background-color: var(--borda);
  }
`;

export const botaoGoogle = css`
  width: 100%;
  min-height: 54px;

  border: 1.5px solid var(--borda);
  border-radius: var(--raio-pilula);
  background-color: var(--cartao);
  color: var(--texto);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-family: var(--fonte-texto);
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    border-color: var(--borda-legenda);
  }
`;

export const Termos = styled.p`
  margin-top: var(--espaco-32);

  color: var(--texto-suave);
  font-size: 13px;
  line-height: 1.5;
  text-align: center;

  ${media.mobile} {
    margin-top: auto;
    padding-top: var(--espaco-32);
  }
`;
