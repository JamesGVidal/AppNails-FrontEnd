import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { botao } from "./style";

type ButtonBaseProps = {
    variante?: "primaria" | "secundaria" | "clara";
    // grande 54px · medio 52px · compacto 48px
    tamanho?: "grande" | "medio" | "compacto";
    icone?: ReactNode;
    iconeFinal?: ReactNode;
    children: ReactNode;
};

// Com `to`, vira um link de navegação; sem `to`, um <button>.
type ButtonProps = ButtonBaseProps &
    (
        | ({ to: string } & { className?: string; "aria-label"?: string })
        | ({ to?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
    );

export const Button = ({ variante = "primaria", tamanho = "grande", icone, iconeFinal, children, className, ...props }: ButtonProps) => {
    const classes = className ? `${botao} ${className}` : botao;

    if (props.to !== undefined) {
        return (
            <Link className={classes} data-variante={variante} data-tamanho={tamanho} {...props}>
                {icone}
                {children}
                {iconeFinal}
            </Link>
        );
    }

    return (
        <button type="button" className={classes} data-variante={variante} data-tamanho={tamanho} {...props}>
            {icone}
            {children}
            {iconeFinal}
        </button>
    );
};
