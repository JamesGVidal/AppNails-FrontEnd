import { NumeroCard, NumerosGrade } from "./style";

type Numero = {
    valor: number;
    // Rótulo longo (tablet/desktop) e curto (celular).
    rotulo: string;
    rotuloCurto: string;
    // false: só aparece no tablet/desktop.
    noCelular?: boolean;
};

type ResumoNumerosProps = {
    numeros: Numero[];
};

// Celular: 3 cartões translúcidos dentro do cabeçalho azul. Tablet/desktop: cartões creme.
export const ResumoNumeros = ({ numeros }: ResumoNumerosProps) => {
    return (
        <NumerosGrade>
            {numeros.map((numero) => (
                <NumeroCard key={numero.rotulo} data-so-tablet={numero.noCelular === false ? "" : undefined}>
                    <strong>{numero.valor}</strong>
                    <span data-rotulo="longo">{numero.rotulo}</span>
                    <span data-rotulo="curto">{numero.rotuloCurto}</span>
                </NumeroCard>
            ))}
        </NumerosGrade>
    );
};
