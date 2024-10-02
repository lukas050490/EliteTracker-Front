import { GithubLogo} from '@phosphor-icons/react'
import styles from './styles.module.css'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'


 function Login(){
  const navigate = useNavigate()


    return (
        <div className={styles.container}>
          <div className={styles.content}>
          <h1>Entre com</h1>
          <Button onClick={()=> navigate('/')}>
            <GithubLogo/>
            GitHub
            </Button>
          <p>
            Ao entrar, eu concordo com os termos de serviço
             e a politica de privacidade.
          </p>
          </div>
        </div>
    )
}

export default Login