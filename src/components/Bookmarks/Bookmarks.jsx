import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 rounded-lg mt-8">
          <h2 className="text-3xl font-bold text-center space-y-5 mb-5">Reading Time :{readingTime}</h2>
            <h3 className="font-black text-center">Bookmarked Blog:{bookmarks.length}</h3>
          {
            bookmarks.map((bookmark,idx)=><Bookmark bookmark={bookmark} key={idx}></Bookmark>)
          }
        </div>
    );
};
Bookmarks.propTypes= {
  readingTime:PropTypes.number.isRequired,
    bookmarks: PropTypes.shape({
        bookmarks:PropTypes.array.isRequired
      })}
export default Bookmarks;