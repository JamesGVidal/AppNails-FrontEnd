import { BottomNav } from "../../componentes/Components/BottomNav";
import { TopNav } from "../../componentes/Components/TopNav";
import { CabecalhoMobile } from "./components/CabecalhoMobile";
import { CardManutencao } from "./components/CardManutencao";
import { FeitasPelaGaby } from "./components/FeitasPelaGaby";
import { Hero } from "./components/Hero";
import { ProveAntes } from "./components/ProveAntes";
import { Rodape } from "./components/Rodape";
import { Servicos } from "./components/Servicos";
import { cliente, cores, destaquesMobile, fotosHero, manutencao, servicos, trabalhos } from "./dados";
import { HomeMain } from "./style";

// Uma rota só: até 599px segue telas/Main.html (BottomNav); a partir de 600px, telas/InicioDesktop.html (TopNav).
export const Home = () => {
    const buscarTrabalho = (id: number) => trabalhos.find((trabalho) => trabalho.id === id)!;

    return (
        <>
            <TopNav />

            <HomeMain>
                <CabecalhoMobile />
                <Hero nomeCliente={cliente.nome} fotos={fotosHero} />
                <CardManutencao nomeCliente={cliente.nome} manutencao={manutencao} />
                <FeitasPelaGaby trabalhos={trabalhos} destaquesMobile={destaquesMobile.map(buscarTrabalho)} />
                <Servicos servicos={servicos} />
                <ProveAntes cores={cores} />
            </HomeMain>

            <Rodape />
            <BottomNav />
        </>
    );
};
