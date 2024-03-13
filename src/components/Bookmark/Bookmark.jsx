import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title}=bookmark;
    return (
        <div className=' p-2 rounded-lg '>
            
            <div className=' p-5'>
                <h1 className='text-3xl'>{title}</h1>
            </div>
        </div>
    );
};
Bookmark.propTypes= {
    bookmark: PropTypes.shape({
      title: PropTypes.string.isRequired,

    })}
export default Bookmark;