import { EstrelaSvg } from "./style";

type SparkleProps = {
    tamanho?: number;
    // Qualquer cor CSS, inclusive tokens: "var(--creme)". Padrão: --taupe.
    cor?: string;
    className?: string;
};

export const Sparkle = ({ tamanho = 16, cor, className }: SparkleProps) => {
    return (
        <EstrelaSvg
            width={tamanho}
            height={tamanho}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            style={cor ? { color: cor } : undefined}
        >
            <path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" fill="currentColor" />
        </EstrelaSvg>
    );
};
