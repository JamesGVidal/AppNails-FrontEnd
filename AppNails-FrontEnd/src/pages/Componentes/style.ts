import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";

export const ComponentesMain = styled.main`
  padding-block: var(--espaco-48);

  /* espaço para o BottomNav fixo não cobrir o fim da página */
  ${media.mobile} {
    padding-bottom: 112px;
  }
`;

export const Secao = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--espaco-16);

  p {
    color: var(--texto-corpo);
    line-height: 1.55;
  }
`;

export const Rotulo = styled.span`
  margin: 0;

  display: inline-flex;
  align-items: center;
  gap: var(--espaco-8);

  color: var(--rotulo);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const Bloco = styled.div`
  min-height: 96px;
  padding: var(--espaco-16);

  border: 1.5px solid var(--borda);
  border-radius: var(--raio-card);
  background-color: var(--cartao);

  font-weight: 700;
`;

export const FaixaEscura = styled.div`
  padding: var(--espaco-24);

  border-radius: var(--raio-destaque);
  background-color: var(--azul-forte);
`;
