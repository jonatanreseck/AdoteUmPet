import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo="" 
        subTitulo={
          <span>
            Como um pequeno valor mensal, você <br />
            pode <strong> adotar um pet virtualmente</strong>
          </span>
        } />    
        <Lista 
          pets={[
            {
              id:1,
              nome: 'Bidu',
              historia: 'asdasdasdasd asaf asdfsdf dfsdf adfsdf ',
              foto: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453'
            }
          ]}
        /> 
    </div>
  )
}

export default Home
