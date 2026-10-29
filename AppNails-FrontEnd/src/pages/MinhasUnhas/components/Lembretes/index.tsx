import { Switch } from "../../../../componentes/Components/Switch";
import type { Preferencias } from "../../dados";
import { LembretesCard, LembretesSecao, Linha, SoMobile, SoTabletOuMaior } from "./style";

type LembretesProps = {
    preferencias: Preferencias;
    onMudar: (preferencias: Preferencias) => void;
};

export const Lembretes = ({ preferencias, onMudar }: LembretesProps) => {
    return (
        <LembretesSecao>
            <h2>Como lembrar você</h2>

            <LembretesCard>
                <Linha>
                    <span>
                        <strong id="lembrete-notificacao">
                            Notificação no <SoMobile>celular</SoMobile>
                            <SoTabletOuMaior>aparelho</SoTabletOuMaior>
                        </strong>
                        <span>Véspera e manutenção</span>
                    </span>
                    <Switch
                        ligado={preferencias.notificacao}
                        rotuloId="lembrete-notificacao"
                        onMudar={(ligado) => onMudar({ ...preferencias, notificacao: ligado })}
                    />
                </Linha>

                <Linha>
                    <span>
                        <strong id="lembrete-whatsapp">Mensagem da Gaby no WhatsApp</strong>
                        <span>Quando a notificação não chegar</span>
                    </span>
                    <Switch
                        ligado={preferencias.whatsapp}
                        rotuloId="lembrete-whatsapp"
                        onMudar={(ligado) => onMudar({ ...preferencias, whatsapp: ligado })}
                    />
                </Linha>
            </LembretesCard>
        </LembretesSecao>
    );
};
