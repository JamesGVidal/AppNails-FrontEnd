import type { ComponentProps, CSSProperties, ElementType } from "react";
import type { Espaco } from "../../../Types/types";
import { AutoGridContainer } from "./style";

type AutoGridProps = ComponentProps<"div"> & {
    as?: ElementType;
    // Largura mínima de cada coluna (ex.: "220px").
    min?: string;
    gap?: Espaco;
};

export const AutoGrid = ({ min = "220px", gap = 16, style, ...props }: AutoGridProps) => {
    const variaveis = {
        "--autogrid-min": min,
        "--autogrid-gap": `var(--espaco-${gap})`,
    } as CSSProperties;

    return <AutoGridContainer style={{ ...variaveis, ...style }} {...props} />;
};
