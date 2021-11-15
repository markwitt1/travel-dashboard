import Amplify from "@aws-amplify/core";
import { Resource } from "react-admin";
import { AmplifyAdmin } from "react-admin-amplify";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

import awsconfig from "./aws-exports";
import {
  TravelPlanCreate,
  TravelPlanEdit,
  TravelPlansList,
} from "./travelPlans";
import ResetPassword from "./ResetPassword";
import { Route, Switch } from "react-router-dom";
Amplify.configure(awsconfig);

const App = () => (
  <Switch>
    <Route path="/resetPassword" exact component={ResetPassword} />
    <AmplifyAdmin operations={{ queries, mutations }}>
      <Resource
        name="TravelPlans"
        list={TravelPlansList}
        create={TravelPlanCreate}
        edit={TravelPlanEdit}
      />
    </AmplifyAdmin>
  </Switch>
);

export default App;
