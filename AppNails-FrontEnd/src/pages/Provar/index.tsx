import { useEffect, useRef, useState, type ChangeEvent } from "react";
import fotoExemplo from "../../assets/imagens/azul-folhas-3.jpg";
import { Button } from "../../componentes/Components/Button";
import { TopNav } from "../../componentes/Components/TopNav";
import { AreaFoto } from "./components/AreaFoto";
import { PainelEscolhas } from "./components/PainelEscolhas";
import { cores, desenhos, formatos, unhasEncontradas, type Formato } from "./dados";
import { Cabecalho, CampoArquivo, Layout, ProvarConteudo } from "./style";

const iconeEnviar = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" />
    </svg>
);

const iconeCamera = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="13.5" r="3.5" />
    </svg>
);

// Uma rota só: até 599px segue telas/Provar.html (foto + folha de escolhas);
// a partir de 600px, foto à esquerda e painel ao lado (ou abaixo, no tablet).
export const Provar = () => {
    // Seleção inicial igual à da referência.
    const [corId, setCorId] = useState("noite");
    const [desenhoId, setDesenhoId] = useState("folhas");
    const [formatoId, setFormatoId] = useState<Formato["id"]>("quadrada");

    // A foto escolhida nunca sai do aparelho: vira uma URL local (blob:) só para exibir.
    const [fotoUrl, setFotoUrl] = useState(fotoExemplo);
    const campoGaleria = useRef<HTMLInputElement>(null);
    const campoCamera = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!fotoUrl.startsWith("blob:")) return;
        return () => URL.revokeObjectURL(fotoUrl);
    }, [fotoUrl]);

    const TrocarFoto = (event: ChangeEvent<HTMLInputElement>) => {
        const arquivo = event.target.files?.[0];
        if (arquivo) setFotoUrl(URL.createObjectURL(arquivo));
        // Permite escolher o mesmo arquivo de novo.
        event.target.value = "";
    };

    return (
        <>
            <TopNav />

            <main>
                <ProvarConteudo>
                    <Cabecalho>
                        <div>
                            <h1>Prova virtual</h1>
                            <p>Teste cores, desenhos e formatos na foto da sua mão. A foto fica só no seu aparelho.</p>
                        </div>
                        <div>
                            <Button variante="secundaria" tamanho="compacto" icone={iconeEnviar} onClick={() => campoGaleria.current?.click()}>
                                Enviar outra foto
                            </Button>
                            <Button variante="secundaria" tamanho="compacto" icone={iconeCamera} onClick={() => campoCamera.current?.click()}>
                                Usar câmera
                            </Button>
                        </div>
                    </Cabecalho>

                    <Layout>
                        <AreaFoto fotoUrl={fotoUrl} unhasEncontradas={unhasEncontradas} onUsarCamera={() => campoCamera.current?.click()} />
                        <PainelEscolhas
                            cores={cores}
                            desenhos={desenhos}
                            formatos={formatos}
                            corId={corId}
                            desenhoId={desenhoId}
                            formatoId={formatoId}
                            onCor={setCorId}
                            onDesenho={setDesenhoId}
                            onFormato={setFormatoId}
                        />
                    </Layout>
                </ProvarConteudo>
            </main>

            {/* TODO: detectar as unhas na foto nova (MediaPipe) e posicionar os adesivos em SVG. */}
            <CampoArquivo ref={campoGaleria} type="file" accept="image/*" tabIndex={-1} aria-hidden="true" onChange={TrocarFoto} />
            <CampoArquivo ref={campoCamera} type="file" accept="image/*" capture="environment" tabIndex={-1} aria-hidden="true" onChange={TrocarFoto} />
        </>
    );
};
