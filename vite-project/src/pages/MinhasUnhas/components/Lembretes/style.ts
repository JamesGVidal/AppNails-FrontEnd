import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const LembretesSecao = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);

  h2 {
    color: var(--rotulo);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  ${media.mobile} {
    gap: 10px;
  }
`;

export const LembretesCard = styled.div`
  border: 1.5px solid var(--borda);
  border-radius: var(--raio-card);
  background-color: var(--cartao);

  display: flex;
  flex-direction: column;
`;

export const Linha = styled.div`
  padding: var(--espaco-16) 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--espaco-12);

  & + & {
    border-top: 1px solid var(--borda);
  }

  & > span {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-size: 15px;
    font-weight: 700;
  }

  & > span > span {
    color: var(--texto-suave);
    font-size: 13px;
  }

  ${media.mobile} {
    padding: 14px var(--espaco-16);
  }
`;

export const SoMobile = styled.span`
  ${media.tabletOuMaior} {
    display: none;
  }
`;

export const SoTabletOuMaior = styled.span`
  ${media.mobile} {
    display: none;
  }
`;
