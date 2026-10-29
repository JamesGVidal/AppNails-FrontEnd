import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";
import { Container } from "../../componentes/Components/Container";

export const ProvarConteudo = styled(Container)`
  padding-block: clamp(24px, 4vw, 48px) 64px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  /* Celular: a foto vai de borda a borda e a folha de escolhas ocupa o resto da tela */
  ${media.mobile} {
    min-height: 100vh;
    min-height: 100dvh;
    padding: 0;
    gap: 0;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--espaco-16) var(--espaco-24);

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: var(--espaco-8);
  }

  & > div:last-child {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  h1 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: clamp(32px, 4.5vw, 52px);
    line-height: 1.1;
  }

  p {
    color: var(--texto-corpo);
    font-size: 16px;
    line-height: 1.5;
  }

  /* Celular: o título fica só para leitores de tela; os botões de foto estão sobre a foto */
  ${media.mobile} {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);

    p,
    & > div:last-child {
      display: none;
    }
  }
`;

// Foto à esquerda e painel à direita; o painel desce para baixo quando não cabe (tablet).
export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 28px;

  ${media.mobile} {
    flex: 1 1 auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 0;
  }
`;

export const CampoArquivo = styled.input`
  display: none;
`;
