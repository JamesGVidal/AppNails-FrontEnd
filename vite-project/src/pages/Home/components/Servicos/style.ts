import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const ServicosSecao = styled.div`
  padding-top: clamp(48px, 7vw, 96px);

  & > section {
    display: flex;
    flex-direction: column;
    gap: var(--espaco-24);
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ServicoCard = styled.article`
  padding: 22px;

  border: 1.5px solid var(--borda);
  border-radius: 26px;
  background-color: var(--cartao);

  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    color: var(--texto-suave);
    font-size: 14px;
  }

  strong {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: 24px;
  }

  a {
    margin-top: auto;
    min-height: 44px;

    display: flex;
    align-items: center;

    font-size: 15px;
    font-weight: 700;
  }
`;
