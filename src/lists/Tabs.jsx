import Posts from '../components/Posts';
import Users from '../components/Users';

const TABS = [
  { id: 1, name: 'users', title: 'Users', component: <Users /> },
  { id: 2, name: 'posts', title: 'Posts', component: <Posts /> }
];

export default TABS;
