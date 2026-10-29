import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const FaixaSecao = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  & > span {
    color: var(--azul-tinta);
    font-size: 14px;
    font-weight: 600;
  }
`;

// A margem negativa leva a faixa até a borda da tela; o padding devolve o recuo do primeiro dia.
export const Faixa = styled.div`
  margin-inline: calc(-1 * clamp(20px, 4vw, 48px));
  padding: 2px clamp(20px, 4vw, 48px) var(--espaco-4);
  overflow-x: auto;
  scrollbar-width: none;

  display: flex;
  gap: var(--espaco-8);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DiaBotao = styled.button`
  flex: 0 0 62px;
  height: 86px;

  border: 1.5px solid var(--borda);
  border-radius: 20px;
  background-color: var(--cartao);
  color: var(--texto);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--espaco-4);

  font-family: var(--fonte-texto);
  cursor: pointer;

  & > span:first-child {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  strong {
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
  }

  & > span:last-child {
    font-size: 11px;
    font-weight: 600;
  }

  &[aria-pressed="true"] {
    border-color: var(--azul-tinta);
    background-color: var(--azul-tinta);
    color: var(--creme);
  }

  &:disabled {
    border-style: dashed;
    border-color: var(--borda-tracejada);
    background-color: transparent;
    color: var(--desativado);
    cursor: not-allowed;
  }
`;
