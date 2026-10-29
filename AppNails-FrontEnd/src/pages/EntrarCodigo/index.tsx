import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import amareloManteiga from "../../assets/imagens/amarelo-manteiga.jpg";
import azulFolhas1 from "../../assets/imagens/azul-folhas-1.jpg";
import vermelhoFlores from "../../assets/imagens/vermelho-flores.jpg";
import { Button } from "../../componentes/Components/Button";
import { LayoutEntrada } from "../../componentes/Components/LayoutEntrada";
import { CampoCodigo } from "./components/CampoCodigo";
import { FormCodigo, ManterConectada, Reenviar, SoMobile, SoTabletOuMaior, Textos, botaoEntrar, linkTrocar } from "./style";

const fotos = [
    { src: vermelhoFlores, alt: "Vermelho com flores em nail art" },
    { src: amareloManteiga, alt: "Almond em amarelo manteiga" },
    { src: azulFolhas1, alt: "Azul noite com folhas douradas" },
];

const TAMANHO_CODIGO = 6;
const SEGUNDOS_PARA_REENVIAR = 60;

// 42 -> "0:42"
const formatarTempo = (segundos: number) => `${Math.floor(segundos / 60)}:${String(segundos % 60).padStart(2, "0")}`;

export const EntrarCodigo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // Número vem da tela de login; o valor fixo só serve para abrir esta tela direto durante o desenvolvimento.
    const telefone: string = location.state?.telefone ?? "+55 (45) 99812-3456";

    const [digitos, setDigitos] = useState<string[]>(Array(TAMANHO_CODIGO).fill(""));
    const [manterConectada, setManterConectada] = useState(true);
    const [segundos, setSegundos] = useState(SEGUNDOS_PARA_REENVIAR);

    useEffect(() => {
        if (segundos === 0) return;

        const temporizador = setTimeout(() => setSegundos((atual) => atual - 1), 1000);
        return () => clearTimeout(temporizador);
    }, [segundos]);

    const codigoCompleto = digitos.every((digito) => digito !== "");

    const ReenviarCodigo = () => {
        // TODO: POST /auth/codigo com { telefone } quando o backend existir.
        setDigitos(Array(TAMANHO_CODIGO).fill(""));
        setSegundos(SEGUNDOS_PARA_REENVIAR);
    };

    const VerificarCodigo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Código incompleto: leva o foco para a primeira caixa vazia.
        if (!codigoCompleto) {
            const primeiraVazia = digitos.findIndex((digito) => digito === "");
            event.currentTarget.querySelectorAll<HTMLInputElement>("[data-codigo] input")[primeiraVazia]?.focus();
            return;
        }

        // TODO: POST /auth/verificar com { telefone, codigo, manterConectada } quando o backend existir.
        navigate("/");
    };

    return (
        <LayoutEntrada
            titulo="Quase lá."
            texto="Confira o WhatsApp no seu celular. O código vale por 10 minutos."
            fotos={fotos}
            cabecalhoMobile="voltar"
            voltarPara="/entrar"
        >
            <SoTabletOuMaior>
                <Link to="/entrar" className={linkTrocar}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m15 6-6 6 6 6" />
                    </svg>
                    Trocar número
                </Link>
            </SoTabletOuMaior>

            <FormCodigo onSubmit={VerificarCodigo}>
                <Textos>
                    <h1>Digite o código</h1>
                    <p>
                        Enviamos {TAMANHO_CODIGO} números para o WhatsApp{" "}
                        <span>
                            <strong>{telefone}</strong>.
                        </span>
                    </p>
                </Textos>

                <CampoCodigo digitos={digitos} onChange={setDigitos} />

                <Reenviar>
                    Não chegou?{" "}
                    <button type="button" disabled={segundos > 0} onClick={ReenviarCodigo}>
                        {segundos > 0 ? `Reenviar em ${formatarTempo(segundos)}` : "Reenviar código"}
                    </button>
                </Reenviar>

                <ManterConectada>
                    <input type="checkbox" checked={manterConectada} onChange={(evento) => setManterConectada(evento.target.checked)} />
                    Manter conectada neste aparelho
                </ManterConectada>

                <Button type="submit" className={botaoEntrar}>
                    Entrar
                </Button>
            </FormCodigo>

            <SoMobile>
                <Link to="/entrar">Trocar número</Link>
            </SoMobile>
        </LayoutEntrada>
    );
};
