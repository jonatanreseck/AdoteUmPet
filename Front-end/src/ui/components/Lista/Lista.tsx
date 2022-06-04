import { Button } from '@mui/material';
import{
    ListaStyled,
    ItemLista,
    Foto,
    Nome,
    Descricao,
    Informacoes
} from './Lista.style'

import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'
import { getThemeProps } from '@mui/system';

interface ListaProps{
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}
export default function Lista(props: ListaProps){

    const tamanhoMaximoTexto = 200;

    return(
        <div>
            <ListaStyled>
                {props.pets.map(pet => (
                    <ItemLista key={pet.id}>
                        <Foto src={pet.foto} />
                        <Informacoes>
                            <Nome>{pet.nome}</Nome>
                            <Descricao>
                                {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
                            </Descricao>
                            <Button
                                variant={'contained'}
                                fullWidth
                                onClick={() => props.onSelect(pet)}
                            >Adotar {pet.nome}</Button>
                        </Informacoes>
                    </ItemLista>
                ))}
                
 
             </ListaStyled>
        </div>
    )
}