// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TravelPlan } = initSchema(schema);

export {
  TravelPlan
};