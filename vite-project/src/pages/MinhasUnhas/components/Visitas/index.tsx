import { Link } from "react-router";
import { formatarDiaMes, type Visita } from "../../dados";
import { ListaVisitas, SoTabletOuMaior, VisitaCard, VisitasSecao } from "./style";

type VisitasProps = {
    visitas: Visita[];
};

// Celular: lista com foto pequena (telas/MinhasUnhas.html). Tablet/desktop: cards com foto grande.
export const Visitas = ({ visitas }: VisitasProps) => {
    return (
        <VisitasSecao>
            <h2>Suas visitas</h2>

            <ListaVisitas>
                {visitas.map((visita) => (
                    <VisitaCard key={visita.id}>
                        <img src={visita.imagemUrl} alt={visita.titulo} />
                        <div>
                            <h3>{visita.titulo}</h3>
                            <span>
                                {formatarDiaMes(visita.data)} · {visita.servico}
                            </span>
                        </div>
                        {/* TODO: levar o serviço e o desenho desta visita para o agendamento. */}
                        <Link to="/agendar" aria-label={`Repetir ${visita.titulo}`}>
                            Repetir<SoTabletOuMaior>este</SoTabletOuMaior>
                        </Link>
                    </VisitaCard>
                ))}
            </ListaVisitas>
        </VisitasSecao>
    );
};
