import { styled } from "@linaria/react";

export const ChipBotao = styled.button`
  min-height: 44px;
  padding: 0 var(--espaco-16);

  border: 1.5px solid var(--borda);
  border-radius: var(--raio-pilula);
  background-color: var(--cartao);
  color: var(--texto);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: var(--fonte-texto);
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;

  &[aria-pressed="true"] {
    border-color: var(--azul-forte);
    background-color: var(--azul-forte);
    /* --fundo em vez de --creme: dá 5:1 sobre --azul-forte (o creme fica em 4,3:1) */
    color: var(--fundo);
  }

  &:disabled {
    border-style: dashed;
    border-color: var(--borda-tracejada);
    background-color: transparent;
    color: var(--desativado);
    cursor: not-allowed;
  }

  /* Horários (telas/Agendar.html): bloco de 48px, seleção em --azul-tinta e ocupado riscado */
  &[data-formato="bloco"] {
    min-height: 48px;
    border-radius: var(--raio-chip);
    font-size: 15px;
  }

  &[data-formato="bloco"][aria-pressed="true"] {
    border-color: var(--azul-tinta);
    background-color: var(--azul-tinta);
    color: var(--creme);
  }

  &[data-formato="bloco"]:disabled {
    text-decoration: line-through;
  }
`;
