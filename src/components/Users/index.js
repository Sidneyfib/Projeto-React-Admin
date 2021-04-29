import * as React from "react";
import { Create, SimpleForm, SelectInput,TextInput,
    Edit, Filter, List, EditButton, TextField, Datagrid } from 'react-admin';
import MyUrlField from '../../MyUrlField';

export const UsersCreate = props => (

    <Create {...props}>
        <SimpleForm>
            <TextInput source="Name"/>
            <TextInput source="website"/>
            <TextInput source="comapny.name"/>
        </SimpleForm>
    </Create>

);


const UsersFilter = (props) => (

    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
       
            <SelectInput optionText="name" />
        
    </Filter>
);

const CompanyFilter = (props) => (

    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
       
            <SelectInput optionText="company.name" />
        
    </Filter>
);



export const UserList = props =>(

    <List filters={<UsersFilter/>} filters={<CompanyFilter/>} {...props} title="Lista de usuários">
       
        <Datagrid>
        
        
            <TextField source="id"/>
            <TextField source="name"/> 
            <MyUrlField
             source="website"/>
            <TextField source="company.name"/>
            <EditButton/>

        

        </Datagrid>
       

    </List>
);



export const UsersEdit = props => (

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <TextInput source="website"/>
            <TextInput source="company.name"/>
            
        </SimpleForm>
    </Edit>



);
