import Head from 'next/head'
import styles from '../../styles/dash/dash.module.css'

import Header from '../partials/header.js'
import Footer from '../partials/footer.js'

import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Home() {

  const [ session, loading  ] = useSession() 
  const router = useRouter()
  const { tenant } = router.query
  const tenantUrl = tenant + "/talks/branco"
  
  const UserEmailAuth = session?.user.email.includes(tenant)  
  //console.log(UserEmailAuth)
  
    return (    
      
        <div id="pageDash">
          <Head>
              <title>Dashboard</title>
              <link rel="shortcut icon" href="/desenho-logo.svg" type="image/x-icon"/>
          </Head>
      
          <Header/>
       
          { !UserEmailAuth ? (
            <div className="bodyDash">
              <h1 className="Title">
                Seu e-mail precisa ser da empresa em questão para ter acesso a esse conteúdo...
              </h1>
            </div>
          ) : (  
          
          <div className="bodyDash">
                      
            <h1 className="Title">
                Todos os Clientes
            </h1>

            <ul className={styles.ClientsSquad}> 
              <a href={tenantUrl}>
                  <li className={styles.client}>
                      <p className={styles.titleClient}>
                          Branco
                      </p>
                      <button className={styles.button}>
                          Ver <strong>Cliente</strong>
                      </button>                                        
                  </li>
              </a>                  
            </ul>

        </div>
        )
        }

        <Footer/>
        </div>  
        

    )
  
}
