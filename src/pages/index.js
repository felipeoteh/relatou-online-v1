import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (    
    <styles>
      <div id="pgInicial">

        <Head>
          <title>Bem vindo!</title>          
        </Head>

        <div className="BoxCenterHome">
          
          <img src="/logo-relatou-branco.svg" />

          <ul className="LogosLoginHome">
            <li>
              <Link href="/benova">
                <a><img src="https://site-benova.vercel.app/logo-benova-svg.svg"/></a>
              </Link>              
            </li>

            <li>
              <Link href="/rotarysjpafonsopena">
                <a><img src="/logo-lema-2021-2022-horizontal.svg"/></a>
              </Link>              
            </li>
          </ul>

        </div>        

      </div>  
    </styles>  

  )
}
