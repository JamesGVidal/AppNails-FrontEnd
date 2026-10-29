import type { ComponentProps } from "react";
import { HeadingTexto } from "./style";

type HeadingProps = ComponentProps<"h2"> & {
    nivel?: 1 | 2 | 3;
    tamanho?: "hero" | "secao";
};

export const Heading = ({ nivel = 2, tamanho = "secao", ...props }: HeadingProps) => {
    const tags = { 1: "h1", 2: "h2", 3: "h3" } as const;

    return <HeadingTexto as={tags[nivel]} data-tamanho={tamanho} {...props} />;
};
