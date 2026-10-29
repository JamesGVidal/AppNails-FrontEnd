import { useState } from "react";
import { Camera } from "lucide-react";
import { AutoGrid } from "../../componentes/Components/AutoGrid";
import { BottomNav } from "../../componentes/Components/BottomNav";
import { Button } from "../../componentes/Components/Button";
import { Chip } from "../../componentes/Components/Chip";
import { Cluster } from "../../componentes/Components/Cluster";
import { Container } from "../../componentes/Components/Container";
import { Heading } from "../../componentes/Components/Heading";
import { Sparkle } from "../../componentes/Components/Sparkle";
import { Stack } from "../../componentes/Components/Stack";
import { SwatchBottle } from "../../componentes/Components/SwatchBottle";
import { TopNav } from "../../componentes/Components/TopNav";
import { Bloco, ComponentesMain, FaixaEscura, Rotulo, Secao } from "./style";

const horarios = [
    { hora: "09:00", livre: true },
    { hora: "10:30", livre: true },
    { hora: "13:00", livre: false },
    { hora: "14:30", livre: true },
    { hora: "16:00", livre: false },
];

const cores = [
    { nome: "Azul noite", hex: "#24306E" },
    { nome: "Vermelho cereja", hex: "#8E1B33" },
    { nome: "Amarelo manteiga", hex: "#EEE2A0" },
    { nome: "Nude rosado", hex: "#E7C6BC" },
    { nome: "Celeste", hex: "#A9C7E3" },
    { nome: "Branco leite", hex: "#F3EEE6" },
];

// Vitrine dos componentes base e seus estados (rota /_componentes).
export const Componentes = () => {
    const [horarioSelecionado, setHorarioSelecionado] = useState("10:30");

    return (
        <>
            <TopNav />

            <ComponentesMain>
                <Container>
                    <Stack gap={48}>
                        <Stack gap={16}>
                            <Rotulo>
                                <Sparkle />
                                Componentes base
                            </Rotulo>
                            <Heading nivel={1} tamanho="hero">
                                Delicada, diferente e cheia de personalidade.
                            </Heading>
                            <Heading nivel={2} tamanho="secao">
                                Feitas pela Gaby
                            </Heading>
                        </Stack>

                        <Secao>
                            <Rotulo as="h2">Button</Rotulo>
                            <Cluster gap={12}>
                                <Button>Agendar horário</Button>
                                <Button variante="secundaria" icone={<Camera size={20} strokeWidth={1.75} aria-hidden="true" />}>
                                    Provar na minha mão
                                </Button>
                                <Button tamanho="medio" to="/_componentes">
                                    Link médio
                                </Button>
                                <Button tamanho="compacto" variante="secundaria">
                                    Compacto
                                </Button>
                                <Button disabled>Desativado</Button>
                            </Cluster>
                            <FaixaEscura>
                                <Button variante="clara">Agendar manutenção</Button>
                            </FaixaEscura>
                        </Secao>

                        <Secao>
                            <Rotulo as="h2">Chip</Rotulo>
                            <Cluster gap={8}>
                                {horarios.map(({ hora, livre }) => (
                                    <Chip
                                        key={hora}
                                        selecionado={hora === horarioSelecionado}
                                        disabled={!livre}
                                        aria-label={livre ? undefined : `${hora}, ocupado`}
                                        onClick={() => setHorarioSelecionado(hora)}
                                    >
                                        {hora}
                                    </Chip>
                                ))}
                            </Cluster>
                        </Secao>

                        <Secao>
                            <Rotulo as="h2">SwatchBottle e Sparkle</Rotulo>
                            <Cluster gap={12}>
                                {cores.map((cor) => (
                                    <SwatchBottle key={cor.hex} cor={cor.hex} nome={cor.nome} />
                                ))}
                                <SwatchBottle cor="#8E1B33" largura={46} nome="Vermelho cereja, tamanho maior" />
                            </Cluster>
                            <Cluster gap={16}>
                                <Sparkle tamanho={16} />
                                <Sparkle tamanho={32} />
                                <Sparkle tamanho={46} cor="var(--azul)" />
                            </Cluster>
                        </Secao>

                        <Secao>
                            <Rotulo as="h2">Cluster com base de 320px (empilha quando não cabe)</Rotulo>
                            <Cluster gap={16} base="320px" alinhar="stretch">
                                <Bloco>Coluna 1</Bloco>
                                <Bloco>Coluna 2</Bloco>
                                <Bloco>Coluna 3</Bloco>
                            </Cluster>
                        </Secao>

                        <Secao>
                            <Rotulo as="h2">AutoGrid com mínimo de 220px</Rotulo>
                            <AutoGrid min="220px" gap={16}>
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <Bloco key={n}>Item {n}</Bloco>
                                ))}
                            </AutoGrid>
                        </Secao>

                        <Secao>
                            <Rotulo as="h2">BottomNav e TopNav</Rotulo>
                            <p>O TopNav aparece a partir de 600px; o BottomNav, até 599px, fixo no rodapé.</p>
                        </Secao>
                    </Stack>
                </Container>
            </ComponentesMain>

            <BottomNav />
        </>
    );
};
