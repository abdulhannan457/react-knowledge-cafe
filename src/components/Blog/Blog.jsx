import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
  const {id, title, cover, author, posted_date ,author_img, reading_time, hashtags} = blog

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover pivture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex justify-between'>
                <img className='w-14 rounded-full' src={author_img} alt="" />
                
                <div className='ml-6'>
                    <p className='text-2xl'>{author}</p>
                   <p > {posted_date}</p>
                </div>
              
                </div>

                <div>
               <span>{reading_time} min read</span>
               <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
           <p className='text-4xl'> {title}</p>
           <p>
            {hashtags.map((hash, idx)=> <span key={idx}> <a href="">{hash}</a> </span>)}
            </p>
           
           <button onClick={()=>handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
}

export default Blog;