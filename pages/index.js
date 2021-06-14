import Head from 'next/head'
import styles from '../styles/dash/dash.module.css'

import Header from './partials/header.js'
import Footer from './partials/footer.js'

export default function Home() {
  return (    
    <styles>
      <div id="pageDash">

        <Head>
          <title>Bem vindo!</title>
          <link rel="shortcut icon" href="/desenho-logo.svg" type="image/x-icon"></link>
        </Head>

        <Header/>

        <div className="bodyDash">
          <h1 className="Title">
              Bem Vindo
          </h1>   

          Acesse o painel da: <a href="/benova">Benova</a>     

        </div>
        
        <Footer/>

      </div>  
    </styles>  

  )
}
