import { styled } from "@linaria/react";
import { media } from "../../styles/breakpoints";

export const HomeMain = styled.main`
  ${media.mobile} {
    /* 107px = 24px de respiro + 83px do BottomNav fixo */
    padding: 20px 0 calc(107px + env(safe-area-inset-bottom));

    /* Fluxo em bloco (e não flex) para os Containers ocuparem a largura toda */
    display: flow-root;

    & > * + * {
      margin-top: 26px;
    }
  }
`;
