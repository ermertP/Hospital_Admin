import { List, Datagrid, TextField } from 'react-admin';

export const PatientList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="age" />
    </Datagrid>
  </List>
);
