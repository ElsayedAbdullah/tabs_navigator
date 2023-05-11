import { useQueryClient } from 'react-query';
import CachedEmoji from '../shared/CachedEmoji';
import { txtSlicer } from '../utils/func';

const Post = ({ id, title, body, setPostId }) => {
  const queryClient = useQueryClient();
  const cachedKey = queryClient.getQueryData(['post', id]);
  console.log(cachedKey);
  return (
    <div
      className='border-2 border-indigo-500 rounded-md hover:bg-indigo-600 hover:text-white duration-300 cursor-pointer p-3 h-fit'
      onClick={() => setPostId(id)}
    >
      <div className='text-center mb-3'>
        <CachedEmoji isCached={cachedKey} />
      </div>
      <h2 className='font-bold text-lg'>id: {id}</h2>
      <h3 className='font-bold text-lg mb-2'>{txtSlicer(title, 10)}</h3>
      <p>{txtSlicer(body, 25)}</p>
    </div>
  );
};

export default Post;
