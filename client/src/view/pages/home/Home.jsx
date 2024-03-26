// import LogoutBtn from '@components/logoutBtn/logoutBtn'
// import Stories from '@components/stories/Stories'
// import Posts from '@components/posts/Posts'
// import classes from './styles.module.scss'
import { useAuth } from "@context/authContext"
import './styles.scss'


function Home() {

  const auth = useAuth()

    return (
      <>
      <div className='home'>
        home
        <button onClick={auth.logout}>Logout</button>
        {/* <Stories/>
        <Posts/>        
        <Posts/>
        <LogoutBtn/> */}
      </div>

      </>
    )
  }
  
  export default Home
  