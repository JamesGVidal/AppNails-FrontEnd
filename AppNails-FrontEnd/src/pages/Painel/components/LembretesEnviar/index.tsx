import type { LembretePendente } from "../../dados";
import { Cabecalho, LembreteCard, LembretesSecao, Vazio, botaoEnviar } from "./style";

type LembretesEnviarProps = {
    lembretes: LembretePendente[];
    onEnviado: (id: number) => void;
};

// Fila de lembretes: o botão abre o WhatsApp com a mensagem pronta; a Gaby só toca em enviar.
export const LembretesEnviar = ({ lembretes, onEnviado }: LembretesEnviarProps) => {
    return (
        <LembretesSecao aria-labelledby="titulo-lembretes">
            <Cabecalho>
                <h2 id="titulo-lembretes">Lembretes para enviar</h2>
                <span data-texto="longo">Clientes sem o app instalado</span>
                <span data-texto="curto">sem app instalado</span>
            </Cabecalho>

            {lembretes.length === 0 && <Vazio>Nenhum lembrete pendente hoje.</Vazio>}

            {lembretes.map((lembrete) => (
                <LembreteCard key={lembrete.id}>
                    <div>
                        <strong>{lembrete.cliente}</strong>
                        <span>{lembrete.motivo}</span>
                    </div>
                    <a
                        href={`https://wa.me/55${lembrete.telefone}?text=${encodeURIComponent(lembrete.mensagem)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={botaoEnviar}
                        aria-label={`Enviar lembrete para ${lembrete.cliente} no WhatsApp`}
                        // TODO: PATCH /admin/lembretes/{id} marcando como enviado quando o backend existir.
                        onClick={() => onEnviado(lembrete.id)}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z" />
                        </svg>
                        Enviar
                    </a>
                </LembreteCard>
            ))}
        </LembretesSecao>
    );
};
