import { useQueryClient } from 'react-query';
import ImageSkeleton from '../shared/ImageSkeleton';
import CachedEmoji from '../shared/CachedEmoji';
import { useFetcher } from '../hooks/useFetcher';

const UserDetails = ({ userId, setUserId }) => {
  // const getUserDetails = async () => {
  //   const { data } = await axios.get(`https://dummyjson.com/users/${userId}`);
  //   return data;
  // };

  const { data, isLoading } = useFetcher(['user', userId], `https://dummyjson.com/users/${userId}`);

  const queryClient = useQueryClient();
  const cachedEl = queryClient.getQueryData(['user', userId]);

  return (
    <div className='mt-8 flex flex-col gap-4 items-center justify-center w-1/3 m-auto'>
      {isLoading ? (
        <ImageSkeleton isCenter />
      ) : (
        <>
          <p onClick={() => setUserId(-1)} className='cursor-pointer'>
            🔙 Back
          </p>
          <CachedEmoji isCached={cachedEl} />
          <img
            src={data.image}
            alt={`${data?.firstName} ${data?.lastName}`}
            className='mx-auto mb-2'
          />
          <h3>
            Full Name: {data?.firstName} {data?.lastName}
          </h3>
          <h3>Domain: {data.domain}</h3>
          <h3>Weight: {data?.weight}</h3>
          <h3>Height: {data?.height}</h3>
        </>
      )}
    </div>
  );
};

export default UserDetails;
