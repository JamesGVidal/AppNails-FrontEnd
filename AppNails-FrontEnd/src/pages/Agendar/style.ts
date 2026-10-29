import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";
import { Container } from "../../componentes/Components/Container";

export const AgendarMain = styled(Container)`
  padding-block: clamp(24px, 4vw, 48px) 64px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  ${media.mobile} {
    /* 170px: espaço para o resumo fixo no rodapé */
    padding-block: 12px calc(170px + env(safe-area-inset-bottom));
    gap: var(--espaco-24);
  }
`;

// Só no tablet/desktop; no celular o título fica no cabeçalho.
export const TituloPagina = styled.h1`
  color: var(--azul-tinta);
  font-family: var(--fonte-titulo);
  font-variation-settings: 'SOFT' 100;
  font-weight: 650;
  font-size: clamp(32px, 4.5vw, 52px);
  line-height: 1.1;

  ${media.mobile} {
    display: none;
  }
`;

// Escolhas à esquerda e resumo à direita; o resumo desce para baixo quando não cabe (tablet).
export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 28px;
`;

export const Escolhas = styled.div`
  flex: 999 1 560px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-32);

  ${media.mobile} {
    gap: var(--espaco-24);
  }
`;

export const DiaEHorario = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 28px;

  ${media.mobile} {
    /* nowrap: com wrap, a largura da coluna seguiria a faixa de dias (mais larga que a tela) */
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: var(--espaco-24);
  }
`;

// Rótulo das etapas: "1 · Serviço", "2 · Dia", "3 · Horário".
export const TituloEtapa = styled.h2`
  color: var(--rotulo);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
