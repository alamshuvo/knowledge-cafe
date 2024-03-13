import PropTypes from 'prop-types';
import { IoBookmarksSharp } from "react-icons/io5";
const Blog = ({blog, handleBookmark,handleMarkAsRead}) => {
    // console.log(handleMarkAsRead);
    const {title,cover_img,author_img,author,posted_date,reading_time,hashtags,id}=blog
    return (
        <div className=' mt-5 space-y-5 p-5'>
            <img className='w-full rounded-lg' src={cover_img}   />
            
            <div className='flex justify-between items-center'>
                <div>
                    <div className='mt-5 flex items-center gap-4 '>
                        <img className='w-[100px] h-[100px] rounded-[100%]' src={author_img} alt="" />
                       <div className='mt-5 font-black'>
                       <h2>{author}</h2>
                        <p>{posted_date}</p>
                       </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <h2 className='text-xl font-bold'>{reading_time} Min read</h2>
                    <button onClick={()=> handleBookmark(blog)} className='text-blue-500'><IoBookmarksSharp /></button>
                </div>
            </div>
            <h2 className='text-4xl mt-5 '>{title}</h2>
            <p>
              {
                hashtags.map((hash,idx)=><span key={idx}><a>{hash}</a></span>)

              }    
             </p>
            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-blue-400' >Mark as Read</button>
            
        </div>
    );
};

Blog.propTypes= {
    handleBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,
    blog: PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover_img: PropTypes,
      author_img:PropTypes,
      author:PropTypes.string.isRequired,
      posted_date:PropTypes.string.isRequired,
      reading_time:PropTypes.number.isRequired,
      hashtags:PropTypes.array.isRequired,
      id:PropTypes.number.isRequired,
     


    })
}
export default Blog;