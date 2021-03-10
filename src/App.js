import Header from './components/header'
import {FaCommentDots} from "react-icons/fa";
import Footer from './components/footer'
function App(){
  return(
    <div className='bodyContainer'>
        <div className='chatContainer'>
            <FaCommentDots size='2rem' className='chatIcon'/>
            <span>Chat</span>
       </div>
      <Header/>
      <Footer/>
    </div>
  )
}
export default App;