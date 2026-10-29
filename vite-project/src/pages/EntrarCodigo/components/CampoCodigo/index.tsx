import { useRef, type ClipboardEvent, type KeyboardEvent } from "react";
import { CaixasCodigo } from "./style";

type CampoCodigoProps = {
    digitos: string[];
    onChange: (digitos: string[]) => void;
};

// Uma caixa por dígito: avança sozinha ao digitar, volta no Backspace e aceita colar o código inteiro.
export const CampoCodigo = ({ digitos, onChange }: CampoCodigoProps) => {
    const caixas = useRef<(HTMLInputElement | null)[]>([]);

    const preencherAPartirDe = (inicio: number, texto: string) => {
        const novos = [...digitos];
        const numeros = texto.replace(/\D/g, "").slice(0, digitos.length - inicio).split("");

        numeros.forEach((numero, i) => {
            novos[inicio + i] = numero;
        });

        onChange(novos);
        caixas.current[Math.min(inicio + numeros.length, digitos.length - 1)]?.focus();
    };

    const AoDigitar = (indice: number, valor: string) => {
        if (valor === "") {
            const novos = [...digitos];
            novos[indice] = "";
            onChange(novos);
            return;
        }

        // Caixa já preenchida: fica só o número novo que a cliente digitou.
        if (digitos[indice] && valor.length === 2) {
            preencherAPartirDe(indice, valor.replace(digitos[indice], "") || valor.slice(-1));
            return;
        }

        // Autopreenchimento do celular (one-time-code) pode trazer vários dígitos de uma vez.
        preencherAPartirDe(indice, valor.slice(-digitos.length));
    };

    const AoApertarTecla = (indice: number, event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace" && digitos[indice] === "" && indice > 0) {
            caixas.current[indice - 1]?.focus();
        }
    };

    const AoColar = (indice: number, event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        preencherAPartirDe(indice, event.clipboardData.getData("text"));
    };

    return (
        <CaixasCodigo role="group" aria-label="Código de 6 números" data-codigo="">
            {digitos.map((digito, indice) => (
                <input
                    key={indice}
                    ref={(elemento) => {
                        caixas.current[indice] = elemento;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={indice === 0 ? "one-time-code" : "off"}
                    aria-label={`Número ${indice + 1} de ${digitos.length}`}
                    value={digito}
                    data-preenchido={digito ? "" : undefined}
                    autoFocus={indice === 0}
                    onChange={(evento) => AoDigitar(indice, evento.target.value.replace(/\D/g, ""))}
                    onKeyDown={(evento) => AoApertarTecla(indice, evento)}
                    onPaste={(evento) => AoColar(indice, evento)}
                />
            ))}
        </CaixasCodigo>
    );
};
