import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

// Fundo claro translúcido das etiquetas e botões sobre a foto.
const vidro = "color-mix(in srgb, var(--fundo) 92%, transparent)";

export const AreaFotoContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex: 999 1 560px;
  min-width: 0;
  aspect-ratio: 4 / 3;

  border-radius: var(--espaco-32);
  background-color: var(--fundo-escuro);

  ${media.mobile} {
    flex: 0 0 auto;
    aspect-ratio: auto;
    height: 400px;
    border-radius: 0;
  }
`;

export const FotoMao = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.2s ease;
`;

export const TopoMobile = styled.div`
  position: absolute;
  top: 18px;
  left: var(--espaco-16);
  right: var(--espaco-16);

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const botaoRedondo = css`
  width: 44px;
  height: 44px;

  border: 0;
  border-radius: var(--raio-pilula);
  background-color: ${vidro};
  color: var(--azul-tinta);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:disabled {
    color: var(--desativado);
    cursor: not-allowed;
  }
`;

// Celular: centralizada entre os botões do topo. Tablet/desktop: canto superior esquerdo.
export const Etiqueta = styled.span`
  position: absolute;
  top: 18px;
  left: 18px;

  padding: 10px 14px;

  border-radius: 20px;
  background-color: ${vidro};
  color: var(--azul-tinta);

  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 13px;
  font-weight: 700;

  ${media.mobile} {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

export const Dica = styled.div`
  position: absolute;
  left: 18px;
  bottom: 18px;

  padding: var(--espaco-8) var(--espaco-12);

  border-radius: 14px;
  background-color: color-mix(in srgb, var(--fundo-escuro) 72%, transparent);
  color: var(--fundo);

  font-size: 13px;
  font-weight: 600;

  ${media.mobile} {
    left: var(--espaco-16);
    /* 40px: fica acima da folha de escolhas, que sobe 24px sobre a foto */
    bottom: 40px;
  }
`;

export const SoTabletOuMaior = styled.span`
  ${media.mobile} {
    display: none;
  }
`;

export const Zoom = styled.div`
  position: absolute;
  right: 18px;
  bottom: 18px;

  display: flex;
  gap: var(--espaco-8);

  ${media.mobile} {
    display: none;
  }
`;
