import './App.css'
import Blogs from './companents/Blogs/Blogs'
import Bookmarks from './companents/Bookmarks/Bookmarks'
import Header from './companents/header/Header'

function App() {
  
  

  return (
    <>
   <Header></Header>
  <div className='md:flex'>
  <Blogs></Blogs>
  <Bookmarks></Bookmarks>
  </div>
      
    </>
  )
}

export default App
