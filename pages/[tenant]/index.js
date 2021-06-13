import Head from 'next/head'
import styles from '../../styles/dash/dash.module.css'

import Header from '../partials/header.js'
import Footer from '../partials/footer.js'

export default function Home() {
  return (    
    <styles>
      <div id="pageDash">

        <Head>
          <title>Dashboard</title>
          <link rel="shortcut icon" href="/desenho-logo.svg" type="image/x-icon"></link>
        </Head>

        <Header/>

        <div className="bodyDash">
          <h1 className="Title">
              Todos os Clientes
          </h1>

          <ul className={styles.ClientsSquad}> 
            <a href="/talks/branco">
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
        
        <Footer/>

      </div>  
    </styles>  

  )
}