import Styles from './projetos.module.css'
import Head from 'next/head'

import Header from '../../../components/header'
import Footer from '../../../components/footer'

import { signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { ProjetosData } from '../../../utils/projetos'

export default function Projetos() {

  const [ session, loading  ] = useSession() 
  const router = useRouter()
  const { tenant } = router.query
  const tenantUrl = tenant + "/talks/branco"
  
  const UserEmailAuth = session?.user.email.includes(tenant)  
  //console.log(UserEmailAuth)
  
    return (    
      
        <div id="pageDash">
          <Head>
              <title>Projetos</title>
          </Head>

          <div className="SideBar">
            <Header/>
            <Footer/>
          </div>
       
          { !UserEmailAuth ? (
            <div className="bodyDash"> 
                         
              <div className="ContendDash">
                <h1 className="Title">
                  Seu e-mail precisa ser da empresa em questão para ter acesso a esse conteúdo...
                </h1>
              </div> 

            </div>
          ) : (  
          <div className="bodyDash">

            <div className="ContendDash PerfilPage">
              <h1 className={Styles.Title}>Projetos!</h1>
              
              <ul> 

                <li className={Styles.TituloListaProjetos}>
                  <div>Nome do Projeto</div>
                  <div>Squad Master</div>
                  <div>Cliente</div>
                  <div>Prazo do Projeto</div>
                  <div>Data do Kickoff</div>                    
                </li>               

                { ProjetosData.map( (projetos) => (

                  <li className={Styles.ProjetoList} key={projetos.id}>
                    <div>{projetos.nomeProjeto}</div>
                    <div>{projetos.squadMasterProjeto}</div>
                    <div>{projetos.cliente}<br/></div>
                    <div>{projetos.PrazoProjeto}</div>
                    <div>{projetos.kickoff}</div>                    
                  </li>

                ))}
                
                
              </ul>
              

              

            </div>            

          </div>
        )
        }

        
        </div>  
        

    )
  
}
