import type { ComponentProps, CSSProperties, ElementType } from "react";
import type { Espaco } from "../../../Types/types";
import { ClusterContainer } from "./style";

type ClusterProps = ComponentProps<"div"> & {
    as?: ElementType;
    gap?: Espaco;
    gapVertical?: Espaco;
    // Largura base dos filhos (ex.: "380px"). Com ela, os filhos crescem e se empilham quando não cabem.
    base?: string;
    alinhar?: "start" | "center" | "end" | "baseline" | "stretch";
    justificar?: "start" | "center" | "end" | "between";
};

export const Cluster = ({ gap = 16, gapVertical, base, alinhar = "center", justificar = "start", style, ...props }: ClusterProps) => {
    const variaveis = {
        "--cluster-gap": `var(--espaco-${gapVertical ?? gap}) var(--espaco-${gap})`,
        "--cluster-base": base,
    } as CSSProperties;

    return (
        <ClusterContainer
            data-distribuir={base ? "" : undefined}
            data-alinhar={alinhar}
            data-justificar={justificar}
            style={{ ...variaveis, ...style }}
            {...props}
        />
    );
};
