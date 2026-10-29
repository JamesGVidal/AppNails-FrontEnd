import type { ComponentProps, CSSProperties, ElementType } from "react";
import type { Espaco } from "../../../Types/types";
import { StackContainer } from "./style";

type StackProps = ComponentProps<"div"> & {
    as?: ElementType;
    gap?: Espaco;
};

export const Stack = ({ gap = 16, style, ...props }: StackProps) => {
    return <StackContainer style={{ "--stack-gap": `var(--espaco-${gap})`, ...style } as CSSProperties} {...props} />;
};
