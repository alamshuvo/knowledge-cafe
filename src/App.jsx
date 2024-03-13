import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"



function App() {
   const [bookmarks,setBookmark]=useState([]);
   const [readingTime,setReadingTime]=useState(0)
   const handleBookmark=(blog)=>{
     console.log(blog);
     const newBookmark=[...bookmarks,blog];
     setBookmark(newBookmark);
   };
   const handleMarkAsRead=(time,id)=>{
       setReadingTime(readingTime+time);
      //  remove the blog form bookmark
      const remainingBookmark=bookmarks.filter(bookmark=>bookmark.id!==id);
      setBookmark(remainingBookmark);
   }

  return (
    <>
      <Header></Header>
     <div className="md:flex container mx-auto">
     <Blogs handleBookmark={handleBookmark}
      handleMarkAsRead= {handleMarkAsRead}></Blogs>
     <Bookmarks 
     bookmarks={bookmarks}
     readingTime={readingTime}
    
            ></Bookmarks>
     </div>
    
     
    </>
  )
}

export default App
