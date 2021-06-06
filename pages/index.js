import Head from 'next/head'
import styles from '../styles/dash/dash.module.css'

import Header from './partials/header.js'
import Footer from './partials/footer.js'

export default function Home() {
  return (    
    <styles>
      <div id="pageDash">

        <Head>
          <title>DashBoard</title>
          <link rel="shortcut icon" href="/desenho-logo.svg" type="image/x-icon"></link>
        </Head>

        <Header/>

        <div className="bodyDash">
          <h1 className="Title">
              Todos os Clientes
          </h1>

          <ul class={styles.ClientsSquad}> 
            <a href="/talks/branco">
                <li class={styles.client}>
                    <p class={styles.titleClient}>
                        Branco
                    </p>
                    <button class={styles.button}>
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
