import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import {
  TravelPlanCreate,
  TravelPlanEdit,
  TravelPlansList,
} from "./travelPlans";
import ResetPassword from "./ResetPassword";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <Switch>
    <Route path="/resetPassword" exact component={ResetPassword} />
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="TravelPlans"
        list={TravelPlansList}
        create={TravelPlanCreate}
        edit={TravelPlanEdit}
      />
    </Admin>
  </Switch>
);

export default App;
