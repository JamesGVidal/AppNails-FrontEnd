import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";
import { Heading } from "../../../../componentes/Components/Heading";

export const ProveSecao = styled.section`
  padding-block: clamp(48px, 7vw, 96px);

  ${media.mobile} {
    padding-block: 0;
  }
`;

export const CartaoMobile = styled.div`
  a {
    padding: var(--espaco-16);

    border-radius: 24px;
    background-color: var(--creme);
    color: var(--azul-tinta);

    display: flex;
    align-items: center;
    gap: 14px;

    text-decoration: none;
  }

  a > span {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-size: 16px;
    font-weight: 700;
  }

  a > span > span {
    color: var(--texto-suave);
    font-size: 13px;
  }

  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const IconeCamera = styled.span`
  flex: 0 0 auto;
  width: 52px;
  height: 52px;

  border-radius: var(--raio-pilula);
  background-color: var(--fundo);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bloco = styled.div`
  overflow: hidden;

  border-radius: 36px;
  background-color: var(--creme);

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  img {
    flex: 1 1 340px;
    min-width: 0;
    width: 100%;
    min-height: 320px;
    max-height: 460px;
    object-fit: cover;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const BlocoTextos = styled.div`
  flex: 1 1 380px;
  min-width: 0;
  padding: clamp(24px, 4vw, 48px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  p {
    color: var(--texto-corpo);
    font-size: 16px;
    line-height: 1.55;
  }

  & > a {
    align-self: flex-start;
  }
`;

// Tamanho próprio deste bloco na referência: clamp(28px, 3.6vw, 42px).
export const Titulo = styled(Heading)`
  &&[data-tamanho] {
    font-size: clamp(28px, 3.6vw, 42px);
    line-height: 1.08;
  }
`;

export const Frascos = styled.div`
  display: flex;
  gap: 10px;
`;
