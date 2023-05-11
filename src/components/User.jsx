import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useQueryClient } from 'react-query';
import CachedEmoji from '../shared/CachedEmoji';

const User = ({
  id,
  image,
  firstName,
  lastName,
  setUserId,
  ip = '',
  password = '',
  domain = ''
}) => {
  const queryClient = useQueryClient();
  const cachedEl = queryClient.getQueryData(['user', id]);

  return (
    <div
      className='border-2 border-indigo-500 rounded-md hover:bg-indigo-600 duration-300 cursor-pointer text-center pt-5 h-fit'
      onClick={() => setUserId(id)}
    >
      {ip ? <p className='text-sm mb-1'>IP: {ip}</p> : null}
      {domain ? <p className='text-sm mb-1'>Domain: {domain}</p> : null}
      {password ? <p className='text-sm mb-1'>Password: {password}</p> : null}
      <CachedEmoji isCached={cachedEl} />
      <LazyLoadImage src={image} alt={`${firstName} ${lastName}`} effect='blur' />
    </div>
  );
};

export default User;
