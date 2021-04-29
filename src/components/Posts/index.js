import * as React from "react";
import { Create, SimpleForm, ReferenceInput, SelectInput,TextInput,
Edit, Filter, List, EditButton, TextField, Datagrid,ReferenceField } from 'react-admin';




export const PostCreate = props => (

    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput source="name" />
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Create>



);


const PostTitle = ({ record}) => {

    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


export const PostEdit = props => (

    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>


);


const PostFilter = (props) => (

    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="user" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);



export const PostList = props => (


    <List filters={<PostFilter/>} {...props} title="Lista de Posts">

        <Datagrid >
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="title"/>
            <EditButton/>
        </Datagrid>
    </List>


);