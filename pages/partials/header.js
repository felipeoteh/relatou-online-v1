import { signIn, signOut, useSession } from 'next-auth/client'

export default function Header() {
    const [ session  ] = useSession() 
    return (
    <header>  
        <div className="header">            
            <a href="/" class="logo">
                <img src="/logo-relatou-branco.svg" alt="relatou.online"/>
            </a>
        </div>
        <div className="BoxAvatar">
            { !session ? (
                <div className="BtLogIn" onClick={ () => signIn('google') }>
                    <img src="/google-svg-roxo.svg"></img>
                    Login com <strong>Google</strong>
                </div>
            ) : (         
                <div className="Logado">
                    <img src={session?.user?.image}></img>
                    <p>
                        Olá, {session?.user?.name}
                        <div className="BtLogOut" onClick={ () => signOut() } ><strong>Sair</strong></div>
                    </p>
                </div>
            )
            }
        </div>
    </header>
    )
}
