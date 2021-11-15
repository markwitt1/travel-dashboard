import {
  Datagrid,
  NumberInput,
  List,
  TextField,
  ListProps,
  CreateProps,
  Create,
  SimpleForm,
  TextInput,
  NumberField,
  EditProps,
  Edit,
} from "react-admin";

export const TravelPlansList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="destination" />
      <TextField source="exampleField" />
      <NumberField source="maxPrice" />
    </Datagrid>
  </List>
);

export const TravelPlanCreate = (props: CreateProps) => {
  return (
    <Create title="Create a TravelPlan" {...props}>
      <SimpleForm>
        <TextInput source="destination" />
        <TextInput source="exampleField" />
        <NumberInput source="maxPrice" />
      </SimpleForm>
    </Create>
  );
};

export const TravelPlanEdit = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="destination" />
        <TextInput source="exampleField" />
        <NumberInput source="maxPrice" />
      </SimpleForm>
    </Edit>
  );
};
