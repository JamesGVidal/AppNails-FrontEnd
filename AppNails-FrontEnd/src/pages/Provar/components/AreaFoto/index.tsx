import { useState } from "react";
import { Link } from "react-router";
import { Sparkle } from "../../../../componentes/Components/Sparkle";
import { AreaFotoContainer, Dica, Etiqueta, FotoMao, SoTabletOuMaior, TopoMobile, Zoom, botaoRedondo } from "./style";

type AreaFotoProps = {
    fotoUrl: string;
    unhasEncontradas: number;
    onUsarCamera: () => void;
};

const ZOOM_MINIMO = 1;
const ZOOM_MAXIMO = 2;
const PASSO_ZOOM = 0.25;

// Foto da mão com as etiquetas por cima. As unhas em SVG sobre a foto entram junto com o canvas (próxima fase).
export const AreaFoto = ({ fotoUrl, unhasEncontradas, onUsarCamera }: AreaFotoProps) => {
    const [zoom, setZoom] = useState(ZOOM_MINIMO);

    return (
        <AreaFotoContainer>
            <FotoMao src={fotoUrl} alt="Foto da sua mão" style={{ transform: `scale(${zoom})` }} />

            {/* Celular: fechar, etiqueta e câmera numa linha (telas/Provar.html) */}
            <TopoMobile>
                <Link to="/" aria-label="Fechar" className={botaoRedondo}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                </Link>
                <button type="button" aria-label="Tirar outra foto" className={botaoRedondo} onClick={onUsarCamera}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                        <circle cx="12" cy="13.5" r="3.5" />
                    </svg>
                </button>
            </TopoMobile>

            <Etiqueta>
                <Sparkle tamanho={14} />
                {unhasEncontradas} unhas encontradas
            </Etiqueta>

            <Dica>
                Arraste uma unha para ajustar
                <SoTabletOuMaior> · role para girar</SoTabletOuMaior>
            </Dica>

            {/* Só no tablet/desktop */}
            <Zoom>
                <button
                    type="button"
                    aria-label="Diminuir zoom"
                    className={botaoRedondo}
                    disabled={zoom <= ZOOM_MINIMO}
                    onClick={() => setZoom((atual) => Math.max(ZOOM_MINIMO, atual - PASSO_ZOOM))}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M6 12h12" />
                    </svg>
                </button>
                <button
                    type="button"
                    aria-label="Aumentar zoom"
                    className={botaoRedondo}
                    disabled={zoom >= ZOOM_MAXIMO}
                    onClick={() => setZoom((atual) => Math.min(ZOOM_MAXIMO, atual + PASSO_ZOOM))}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 6v12M6 12h12" />
                    </svg>
                </button>
            </Zoom>
        </AreaFotoContainer>
    );
};
