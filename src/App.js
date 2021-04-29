import * as React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UsersCreate, UsersEdit} from './components/Users/index';
import { PostList, PostCreate, PostEdit } from './components/Posts/index';
import PeopleIcon from '@material-ui/icons/People';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import Dashboard from './components/Principal/Dashboard'
//import ButtonAppBar from './components/Menu/menu'






const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (

<Admin classes dashboard={Dashboard} dataProvider={dataProvider}>

  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={ClassRoundedIcon}/> 
  <Resource name="users" list={UserList} edit={UsersEdit} create={UsersCreate} icon={PeopleIcon}/>
  
</Admin>


);

export default App;