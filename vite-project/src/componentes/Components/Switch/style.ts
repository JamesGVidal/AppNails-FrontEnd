import { styled } from "@linaria/react";

// 52x32 com bolinha de 24px (telas/MinhasUnhas.html). Ligado: --azul-forte. Desligado: --desativado.
export const SwitchBotao = styled.button`
  position: relative;
  flex: 0 0 auto;
  width: 52px;
  height: 32px;

  border: 0;
  border-radius: var(--raio-pilula);
  background-color: var(--desativado);

  cursor: pointer;
  transition: background-color 0.2s ease;

  /* Área de toque de 44px de altura sem mudar o desenho */
  &::before {
    content: "";
    position: absolute;
    inset: -6px 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;

    width: 24px;
    height: 24px;

    border-radius: var(--raio-pilula);
    background-color: var(--fundo);

    transition: transform 0.2s ease;
  }

  &[aria-checked="true"] {
    background-color: var(--azul-forte);
  }

  &[aria-checked="true"]::after {
    transform: translateX(20px);
  }
`;
