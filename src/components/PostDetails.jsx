import { useQueryClient } from 'react-query';
import CachedEmoji from '../shared/CachedEmoji';
import { useFetcher } from '../hooks/useFetcher';
import PostSkeleton from '../shared/PostSkeleton';

const PostDetails = ({ postId, setPostId }) => {
  const { data, isLoading } = useFetcher(
    ['post', postId],
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const queryClient = useQueryClient();
  const cachedEl = queryClient.getQueryData(['post', postId]);

  return (
    <div className='text-center mt-8 w-1/2 m-auto'>
      {isLoading ? (
        <PostSkeleton />
      ) : (
        <>
          <p onClick={() => setPostId(-1)} className='cursor-pointer mb-4'>
            🔙 Back
          </p>
          <CachedEmoji isCached={cachedEl} />
          <h3 className='font-bold text-xl my-4'>{data.title}</h3>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
};

export default PostDetails;
