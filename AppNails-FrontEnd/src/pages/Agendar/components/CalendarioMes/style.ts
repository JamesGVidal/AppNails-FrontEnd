import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const CalendarioSecao = styled.section`
  flex: 1 1 340px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);

  ${media.mobile} {
    display: none;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--espaco-8);
`;

export const NavegacaoMes = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espaco-4);

  button {
    width: 44px;
    height: 44px;

    border: 0;
    border-radius: var(--raio-pilula);
    background-color: transparent;
    color: var(--azul-tinta);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  button:disabled {
    color: var(--desativado);
    cursor: not-allowed;
  }

  span {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const CalendarioCard = styled.div`
  padding: 14px;

  border: 1.5px solid var(--borda);
  border-radius: 26px;
  background-color: var(--cartao);

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const GradeSemana = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--espaco-4);

  color: var(--rotulo);
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const GradeDias = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--espaco-4);
`;

export const DiaBotao = styled.button`
  aspect-ratio: 1 / 1;
  min-height: 44px;

  border: 1.5px solid var(--borda-dia);
  border-radius: 14px;
  background-color: var(--fundo);
  color: var(--texto);

  font-family: var(--fonte-texto);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

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

export const Legenda = styled.div`
  padding-top: 6px;

  display: flex;
  flex-wrap: wrap;
  gap: 6px var(--espaco-16);

  color: var(--texto-suave);
  font-size: 12px;

  & > span {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  [data-tipo] {
    width: 12px;
    height: 12px;
    border: 1.5px solid var(--borda-legenda);
    border-radius: 4px;
  }

  [data-tipo="livre"] {
    background-color: var(--fundo);
  }

  [data-tipo="indisponivel"] {
    border-style: dashed;
  }
`;
