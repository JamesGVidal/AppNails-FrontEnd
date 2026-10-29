import type { ComponentProps, ElementType } from "react";
import { ContainerBox } from "./style";

type ContainerProps = ComponentProps<"div"> & {
    as?: ElementType;
};

export const Container = (props: ContainerProps) => {
    return <ContainerBox {...props} />;
};
