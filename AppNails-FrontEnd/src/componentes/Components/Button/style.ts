import { css } from "@linaria/core";

// Classe compartilhada pelo <button> e pelo <Link> do componente Button.
export const botao = css`
  border: 1.5px solid transparent;
  border-radius: var(--raio-pilula);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--espaco-8);

  font-family: var(--fonte-texto);
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;

  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &[data-tamanho="grande"] {
    min-height: 54px;
    padding: 0 28px;
    font-size: 16px;
  }

  &[data-tamanho="medio"] {
    min-height: 52px;
    padding: 0 24px;
    font-size: 15px;
  }

  &[data-tamanho="compacto"] {
    min-height: 48px;
    padding: 0 22px;
    font-size: 15px;
  }

  &[data-variante="primaria"] {
    background-color: var(--azul-tinta);
    color: var(--creme);
  }

  &[data-variante="primaria"]:hover {
    background-color: var(--azul-hover);
    color: var(--creme);
  }

  &[data-variante="secundaria"] {
    background-color: transparent;
    border-color: var(--azul-tinta);
    color: var(--azul-tinta);
  }

  &[data-variante="secundaria"]:hover {
    border-color: var(--azul-hover);
    color: var(--azul-hover);
  }

  &[data-variante="clara"] {
    background-color: var(--creme);
    color: var(--azul-tinta);
  }

  &[data-variante="clara"]:hover {
    color: var(--azul-hover);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
