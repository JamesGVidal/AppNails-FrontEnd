import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";
import { Container } from "../../componentes/Components/Container";

export const MinhasUnhasConteudo = styled(Container)`
  padding-block: clamp(24px, 4vw, 56px) 64px;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-32);

  ${media.mobile} {
    /* 107px = 24px de respiro + 83px do BottomNav fixo */
    padding-block: 22px calc(107px + env(safe-area-inset-bottom));
    gap: 22px;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--espaco-8);

  span {
    color: var(--texto-suave);
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    color: var(--azul-tinta);
    font-family: var(--fonte-titulo);
    font-variation-settings: 'SOFT' 100;
    font-weight: 650;
    font-size: clamp(32px, 4.5vw, 52px);
    line-height: 1.1;
  }

  /* Celular: só o título, menor (telas/MinhasUnhas.html) */
  ${media.mobile} {
    span {
      display: none;
    }

    h1 {
      font-size: 30px;
    }
  }
`;

// Contagem e lembretes à esquerda, visitas à direita; as visitas descem para baixo quando não cabem (tablet).
export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 28px;

  ${media.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 22px;
  }
`;

export const Coluna = styled.div`
  flex: 1 1 340px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-24);

  ${media.mobile} {
    flex: 0 0 auto;
    gap: 22px;
  }
`;
