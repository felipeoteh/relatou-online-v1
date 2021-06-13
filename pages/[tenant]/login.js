import Head from 'next/head'
import stylesLogin from '../../styles/login/login.module.css'

export default function Login() {
  return (    

    <div id={stylesLogin.pageLogin}>

    <Head>
      <title>Faça Login para Continuar - relatou.online</title>
      <link rel="shortcut icon" href="/desenho-logo.svg" type="image/x-icon"></link>
    </Head>

      <div className={stylesLogin.BoxLogin}>        
          <img src="/logo-relatou-branco.svg" alt="Faça seu Login!" />
          <form action="/dash" method="">
            <input type="text" name="nome" id="nome" placeholder="Login" />
            <input type="password" name="senha" id="senha" placeholder="Senha" />
            <button>Fazer <strong>Login</strong></button>
          </form>
      </div>

    </div>    

  )
}
