import { NextPage } from "next";
import Titulo from "../../ui/components/Titulo/Titulo";
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material'
import { useRelatorio } from "../../data/hooks/pages/pets/useRelatorio";
import { readlink } from "fs";

const Relatorio: NextPage = () => {
    const { listaRelatorio } = useRelatorio();
    return(
        <>
            <Titulo
                titulo={'Relatório de Adoção'}
                subTitulo={'Veja a lista de pets adotadoss'}
            />  
            <TableContainer
                component={Paper}
                sx={{maxWidth: 830, mx: 'auto', p:{xs:3, md:5}}}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'}>Valor Mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaRelatorio.map((relatorio) => (
                            <TableRow key={relatorio.id}>
                                <TableCell>{relatorio.pet.nome}</TableCell>
                                <TableCell>{relatorio.email}</TableCell>
                                <TableCell align={'right'}>{relatorio.valor}</TableCell>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                    
                </Table>
            </TableContainer>
        </>
    )
}

export default Relatorio;