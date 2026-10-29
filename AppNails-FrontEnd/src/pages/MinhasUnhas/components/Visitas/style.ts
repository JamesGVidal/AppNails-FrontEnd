import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const VisitasSecao = styled.section`
  flex: 999 1 560px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-16);

  h2 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 600;
    font-size: clamp(28px, 3vw, 36px);
    line-height: 1.1;
  }

  /* Celular: título pequeno em caixa alta, como as outras seções */
  ${media.mobile} {
    gap: 10px;

    h2 {
      color: var(--rotulo);
      font-family: var(--fonte-texto);
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
  }
`;

export const ListaVisitas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--espaco-16);

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const VisitaCard = styled.article`
  overflow: hidden;

  border: 1.5px solid var(--borda);
  border-radius: 26px;
  background-color: var(--cartao);

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  & > div {
    padding: 18px 18px var(--espaco-8);

    display: flex;
    flex-direction: column;
    gap: var(--espaco-4);
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  & > div > span {
    color: var(--texto-suave);
    font-size: 13px;
  }

  a {
    margin-top: auto;
    min-height: 44px;
    padding: 0 18px var(--espaco-12);

    display: flex;
    align-items: center;

    font-size: 15px;
    font-weight: 700;
    white-space: nowrap;
  }

  ${media.mobile} {
    border: 0;
    border-radius: 0;
    background-color: transparent;

    flex-direction: row;
    align-items: center;
    gap: 14px;

    img {
      flex: 0 0 auto;
      width: 76px;
      height: 76px;
      aspect-ratio: auto;
      border-radius: 20px;
    }

    & > div {
      flex: 1 1 auto;
      min-width: 0;
      padding: 0;
      gap: 2px;
    }

    h3 {
      font-size: 15px;
    }

    a {
      margin-top: 0;
      padding: 0;
      font-size: 13px;
    }
  }
`;

export const SoTabletOuMaior = styled.span`
  /* O link é flex e descarta espaços entre os trechos; a margem faz o papel do espaço */
  margin-left: 0.25em;

  ${media.mobile} {
    display: none;
  }
`;
