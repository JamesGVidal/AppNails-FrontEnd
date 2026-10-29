import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";
import { Container } from "../../../../componentes/Components/Container";

export const RodapeContainer = styled.footer`
  background-color: var(--azul-tinta);
  color: var(--creme);

  ${media.mobile} {
    display: none;
  }
`;

export const RodapeConteudo = styled(Container)`
  padding-block: clamp(32px, 5vw, 56px);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 28px var(--espaco-48);
`;

export const RodapeColuna = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 15px;

  &[data-base="260"] {
    flex: 1 1 260px;
    gap: var(--espaco-8);
  }

  &[data-base="200"] {
    flex: 1 1 200px;
  }

  strong {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

export const RodapeMarca = styled.span`
  font-family: var(--fonte-titulo);
  font-variation-settings: 'SOFT' 100;
  font-weight: 650;
  font-size: 30px;
`;

export const RodapeContatos = styled.div`
  flex: 1 1 260px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const linkBase = `
  min-height: 48px;
  padding: 0 20px;

  border-radius: var(--raio-pilula);

  display: flex;
  align-items: center;
  gap: var(--espaco-8);

  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
`;

export const linkClaro = css`
  ${linkBase}
  background-color: var(--creme);

  &,
  &:hover {
    color: var(--azul-tinta);
  }
`;

export const linkContorno = css`
  ${linkBase}
  border: 1.5px solid var(--creme);

  &,
  &:hover {
    color: var(--creme);
  }
`;
