import { styled } from "@linaria/react";

export const ClusterContainer = styled.div`
  min-width: 0;

  display: flex;
  flex-wrap: wrap;
  gap: var(--cluster-gap);

  &[data-alinhar="start"] { align-items: flex-start; }
  &[data-alinhar="center"] { align-items: center; }
  &[data-alinhar="end"] { align-items: flex-end; }
  &[data-alinhar="baseline"] { align-items: baseline; }
  &[data-alinhar="stretch"] { align-items: stretch; }

  &[data-justificar="start"] { justify-content: flex-start; }
  &[data-justificar="center"] { justify-content: center; }
  &[data-justificar="end"] { justify-content: flex-end; }
  &[data-justificar="between"] { justify-content: space-between; }

  &[data-distribuir] > * {
    flex: 1 1 var(--cluster-base);
    min-width: 0;
  }
`;
