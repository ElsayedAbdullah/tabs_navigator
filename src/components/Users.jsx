import User from './User';
import { useState } from 'react';
import Spinner from '../shared/Spinner';
import ImageSkeleton from '../shared/ImageSkeleton';
import UserDetails from './UserDetails';
import Checkbox from '../shared/Checkbox';
import SelectMenu from '../shared/SelectMenu';
import { useFetcher } from '../hooks/useFetcher';

const Users = () => {
  const [userId, setUserId] = useState(-1);
  const [queryParams, setQueryParams] = useState({
    ip: false,
    password: false,
    domain: false
  });
  const [limit, setLimit] = useState(30);

  const { isLoading, data, isFetching } = useFetcher(
    ['users', queryParams, limit],
    `https://dummyjson.com/users?limit=${limit}&select=image${queryParams.ip ? ',ip' : ''}${
      queryParams.password ? ',password' : ''
    }${queryParams.domain ? ',domain' : ''}`
  );
  // const getUsersList = async () => {
  //   const { data } = await axios.get(
  //     `https://dummyjson.com/users?limit=${limit}&select=image${queryParams.ip ? ',ip' : ''}${
  //       queryParams.password ? ',password' : ''
  //     }${queryParams.domain ? ',domain' : ''}`
  //   );
  //   return data;
  // };

  // const { isLoading, data, isFetching } = useQuery(['users', queryParams, limit], getUsersList);

  // Handler
  const onChangeHandler = (e) => {
    const { name, checked } = e.target;
    setQueryParams({ ...queryParams, [name]: checked });
  };

  return (
    <>
      {isFetching ? <Spinner /> : null}

      {userId > 0 ? (
        <UserDetails userId={userId} setUserId={setUserId} />
      ) : (
        <>
          <SelectMenu
            label='Limit: '
            options={[30, 50, 100, 150]}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
          />
          <div className='flex items-center justify-center mt-4 gap-3'>
            <h4 className='mr-3'>Filter by:</h4>
            <Checkbox value={queryParams.ip} name='ip' onChange={onChangeHandler} label='IP' />
            <Checkbox
              value={queryParams.password}
              name='password'
              onChange={onChangeHandler}
              label='Password'
            />
            <Checkbox
              value={queryParams.domain}
              name='domain'
              onChange={onChangeHandler}
              label='Domain'
            />
          </div>
          <div className='mt-5 grid gap-4 grid-cols-grid-layout'>
            {isLoading
              ? Array(12)
                  .fill(1)
                  .map((_, idx) => <ImageSkeleton key={idx}></ImageSkeleton>)
              : data.users.map((user) => <User key={user.id} {...user} setUserId={setUserId} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
