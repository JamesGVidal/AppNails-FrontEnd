import { Chip } from "../../../../componentes/Components/Chip";
import type { Horario } from "../../dados";
import { TituloEtapa } from "../../style";
import { GradeHorarios, HorarioSecao } from "./style";

type EscolhaHorarioProps = {
    horarios: Horario[];
    selecionado: string | null;
    onSelecionar: (hora: string) => void;
};

export const EscolhaHorario = ({ horarios, selecionado, onSelecionar }: EscolhaHorarioProps) => {
    return (
        <HorarioSecao>
            <TituloEtapa>3 · Horário</TituloEtapa>

            <GradeHorarios>
                {horarios.map((horario) => (
                    <Chip
                        key={horario.hora}
                        formato="bloco"
                        selecionado={horario.hora === selecionado}
                        disabled={!horario.livre}
                        aria-label={horario.livre ? undefined : `${horario.hora}, ocupado`}
                        onClick={() => onSelecionar(horario.hora)}
                    >
                        {horario.hora}
                    </Chip>
                ))}
            </GradeHorarios>

            <p>Horários já consideram a duração do serviço escolhido.</p>
        </HorarioSecao>
    );
};
