

import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='bg-gray-300'>
            <div className="md:w-1/3  ml-5 mt-2">
                <div>
                    <h2 className='text-2xl text-violet-600 bg-violet-100 w-36 ml-5 rounded-xl p-4'>Reading Time: {readingTime}</h2>
                
                </div>
           <h2 className="text-3xl text-center  w-52 ">BookMarked Bloogs : {bookmarks.length}</h2> 
         {
            bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
         }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
};

export default Bookmarks;