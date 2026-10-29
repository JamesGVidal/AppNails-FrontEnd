import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const ServicoSecao = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);

  ${media.mobile} {
    gap: 10px;
  }
`;

export const ListaServicos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ServicoBotao = styled.button`
  min-height: 72px;
  padding: 14px 18px;

  border: 1.5px solid var(--borda);
  border-radius: 20px;
  background-color: var(--cartao);
  color: var(--texto);

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--espaco-12);

  font-family: var(--fonte-texto);
  text-align: left;
  cursor: pointer;

  & > span:first-child {
    display: flex;
    flex-direction: column;
    gap: var(--espaco-4);
  }

  strong {
    font-size: 16px;
    font-weight: 700;
  }

  & > span:first-child > span {
    font-size: 13px;
    opacity: 0.85;
  }

  &[aria-pressed="true"] {
    border-color: var(--azul-forte);
    background-color: var(--azul-forte);
    color: var(--fundo);
  }

  ${media.mobile} {
    min-height: 64px;
    padding: var(--espaco-12) 18px;
    align-items: center;

    & > span:first-child {
      gap: 2px;
    }
  }
`;

export const SoMobile = styled.span`
  flex: 0 0 auto;
  font-size: 15px;
  font-weight: 700;

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const SoTabletOuMaior = styled.span`
  ${media.mobile} {
    display: none;
  }
`;
