import { styled } from "@linaria/react";
import { media } from "../../../../styles/breakpoints";

export const HorarioSecao = styled.section`
  flex: 1 1 260px;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: var(--espaco-12);

  p {
    color: var(--texto-suave);
    font-size: 13px;
  }

  ${media.mobile} {
    gap: 10px;

    p {
      margin-top: 2px;
    }
  }
`;

// Celular: 3 colunas fixas (telas/Agendar.html). Tablet/desktop: quantas colunas de 96px couberem.
export const GradeHorarios = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: var(--espaco-8);

  ${media.mobile} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
