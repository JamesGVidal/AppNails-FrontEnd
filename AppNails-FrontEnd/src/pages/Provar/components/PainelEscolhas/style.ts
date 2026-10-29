import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const PainelContainer = styled.section`
  position: relative;
  /* 390px como no print do desktop: cabem 5 cores e 3 desenhos por linha */
  flex: 1 1 390px;
  min-width: 0;
  padding: var(--espaco-24);

  border: 1.5px solid var(--borda);
  border-radius: 30px;
  background-color: var(--cartao);

  display: flex;
  flex-direction: column;
  gap: 22px;

  ${media.mobile} {
    flex: 1 1 auto;
    margin-top: -24px;
    padding: var(--espaco-12) 22px var(--espaco-24);

    border: 0;
    border-radius: var(--raio-destaque) var(--raio-destaque) 0 0;
    background-color: var(--fundo);

    gap: 18px;
  }
`;

// Alça da folha (só no celular).
export const Alca = styled.div`
  align-self: center;
  width: 40px;
  height: 4px;

  border-radius: 2px;
  background-color: var(--borda-tracejada);

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const Previa = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
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

  ${media.mobile} {
    strong {
      font-size: 22px;
    }

    span {
      font-size: 13px;
    }
  }
`;

export const Escolha = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);

  h2 {
    color: var(--rotulo);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  ${media.mobile} {
    gap: var(--espaco-8);
  }
`;

// A margem negativa leva a rolagem até a borda da tela; o padding devolve o recuo do primeiro item.
const rolagemMobile = `
  margin-inline: -22px;
  padding-inline: 22px;
  overflow-x: auto;
  scrollbar-width: none;

  display: flex;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// Tablet/desktop: quebra em linhas. Celular: rolagem horizontal.
export const ListaCores = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
  gap: 10px;

  ${media.mobile} {
    ${rolagemMobile}
    padding-block: 2px;
  }
`;

export const corBotao = css`
  height: 66px;

  border: 1.5px solid var(--borda);
  border-radius: 18px;
  background-color: var(--cartao);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &[aria-pressed="true"] {
    border: 2px solid var(--azul-tinta);
  }

  ${media.mobile} {
    flex: 0 0 56px;
  }
`;

export const ListaDesenhos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px var(--espaco-8);

  ${media.mobile} {
    ${rolagemMobile}
    gap: var(--espaco-8);
  }
`;

export const ListaFormatos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--espaco-8);

  button {
    padding: 0;
  }
`;

export const botaoAgendar = css`
  &&[data-tamanho] {
    width: 100%;
    min-height: 56px;
  }

  ${media.mobile} {
    margin-top: auto;

    &&[data-tamanho] {
      min-height: 54px;
    }
  }
`;
