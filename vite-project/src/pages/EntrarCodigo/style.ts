import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";

export const SoTabletOuMaior = styled.div`
  margin-bottom: var(--espaco-32);

  ${media.mobile} {
    display: none;
  }
`;

export const linkTrocar = css`
  min-height: 44px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`;

// No celular o form ocupa a altura toda, para o botão Entrar ir para o pé da tela.
export const FormCodigo = styled.form`
  ${media.mobile} {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
  }
`;

// No celular, os textos ficam centralizados.
export const Textos = styled.div`
  margin-bottom: var(--espaco-24);

  display: flex;
  flex-direction: column;
  gap: var(--espaco-8);

  h1 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: clamp(30px, 3.2vw, 44px);
    line-height: 1.1;
  }

  p {
    color: var(--texto-corpo);
    font-size: 16px;
    line-height: 1.5;
  }

  strong {
    color: var(--texto);
    font-weight: 700;
  }

  ${media.mobile} {
    margin-top: var(--espaco-24);
    text-align: center;

    /* número de telefone (com o ponto final) na linha de baixo */
    p > span {
      display: block;
    }
  }
`;

export const Reenviar = styled.p`
  margin-top: var(--espaco-24);

  color: var(--texto-suave);
  font-size: 14px;

  button {
    min-height: 44px;
    padding: 0 var(--espaco-4);

    border: 0;
    background: none;
    color: var(--azul-tinta);

    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }

  button:disabled {
    color: var(--rotulo);
    text-decoration: none;
    cursor: default;
  }

  ${media.mobile} {
    margin-top: var(--espaco-12);
    text-align: center;
  }
`;

export const ManterConectada = styled.label`
  margin-top: var(--espaco-32);

  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--texto-corpo);
  font-size: 14px;
  cursor: pointer;

  input {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    accent-color: var(--azul-tinta);
  }

  ${media.mobile} {
    margin-top: var(--espaco-24);
  }
`;

export const botaoEntrar = css`
  margin-top: var(--espaco-32);

  &&[data-tamanho] {
    width: 100%;
    min-height: 56px;
  }

  ${media.mobile} {
    margin-top: auto;
  }
`;

export const SoMobile = styled.div`
  padding-top: var(--espaco-12);
  text-align: center;

  a {
    min-height: 44px;

    display: inline-flex;
    align-items: center;

    font-size: 15px;
    font-weight: 700;
  }

  ${media.tabletOuMaior} {
    display: none;
  }
`;
