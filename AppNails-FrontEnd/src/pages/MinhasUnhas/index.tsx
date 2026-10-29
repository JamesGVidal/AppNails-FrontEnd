import { useState } from "react";
import { BottomNav } from "../../componentes/Components/BottomNav";
import { TopNav } from "../../componentes/Components/TopNav";
import { ContagemManutencao } from "./components/ContagemManutencao";
import { Lembretes } from "./components/Lembretes";
import { Visitas } from "./components/Visitas";
import { manutencao, nomeCliente, preferencias as preferenciasIniciais, visitas, type Preferencias } from "./dados";
import { Cabecalho, Coluna, Layout, MinhasUnhasConteudo } from "./style";

// Uma rota só: até 599px segue telas/MinhasUnhas.html (BottomNav);
// a partir de 600px, contagem e lembretes à esquerda e visitas em cards à direita (TopNav).
export const MinhasUnhas = () => {
    const [preferencias, setPreferencias] = useState<Preferencias>(preferenciasIniciais);

    const MudarPreferencias = (novas: Preferencias) => {
        setPreferencias(novas);
        // TODO: PUT /clientes/me/preferencias quando o backend existir.
    };

    return (
        <>
            <TopNav />

            <main>
                <MinhasUnhasConteudo>
                    <Cabecalho>
                        <span>Oi, {nomeCliente}</span>
                        <h1>Minhas unhas</h1>
                    </Cabecalho>

                    <Layout>
                        <Coluna>
                            <ContagemManutencao manutencao={manutencao} />
                            <Lembretes preferencias={preferencias} onMudar={MudarPreferencias} />
                        </Coluna>

                        <Visitas visitas={visitas} />
                    </Layout>
                </MinhasUnhasConteudo>
            </main>

            <BottomNav />
        </>
    );
};
