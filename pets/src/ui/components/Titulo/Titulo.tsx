import { TituloStyled, Subtitulo } from "./Titulo.style";

interface TituloProps {
    titulo: string,
    subTitulo?: string | JSX.Element;
}

export default function Titulo(props: TituloProps){
    return(
        <>
            <TituloStyled>{props.titulo}</TituloStyled>
            <Subtitulo>{props.subTitulo}</Subtitulo>
        </>
    ) 
}