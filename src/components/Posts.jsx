import { useState } from 'react';
import { useFetcher } from '../hooks/useFetcher';
import Paginator from '../shared/Paginator';
import SelectMenu from '../shared/SelectMenu';
import Post from './Post';
import Spinner from '../shared/Spinner';
import PostDetails from './PostDetails';
import PostSkeleton from '../shared/PostSkeleton';

const Posts = () => {
  const [postId, setPostId] = useState(-1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const { isLoading, isFetching, data } = useFetcher(
    ['posts', page, limit],
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );

  const onClickNextBtnHandler = () => {
    setPage((prev) => prev + 1);
  };
  const onClickPrevBtnHandler = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      {isFetching ? <Spinner /> : null}
      <SelectMenu
        label='Limit: '
        options={[20, 50, 100]}
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      />

      {postId > 0 ? (
        <PostDetails postId={postId} setPostId={setPostId} />
      ) : (
        <>
          <div className='mt-5 grid gap-4 grid-cols-grid-layout'>
            {isLoading ? (
              Array(12)
                .fill(1)
                .map((_, idx) => <PostSkeleton key={idx} />)
            ) : (
              <>
                {data?.map((post) => (
                  <Post key={post.id} {...post} setPostId={setPostId} />
                ))}
              </>
            )}
          </div>

          <Paginator
            currentPage={page}
            lastPage={(100 / limit).toFixed()}
            isNextBtnDisabled={limit * page >= 100}
            isPrevBtnDisabled={page === 1}
            onClickPrevBtn={onClickPrevBtnHandler}
            onClickNextBtn={onClickNextBtnHandler}
          />
        </>
      )}
    </>
  );
};

export default Posts;
