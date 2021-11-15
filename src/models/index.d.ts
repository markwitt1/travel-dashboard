import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TravelPlanMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TravelPlan {
  readonly id: string;
  readonly destination?: string;
  readonly exampleField?: string;
  readonly maxPrice?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TravelPlan, TravelPlanMetaData>);
  static copyOf(source: TravelPlan, mutator: (draft: MutableModel<TravelPlan, TravelPlanMetaData>) => MutableModel<TravelPlan, TravelPlanMetaData> | void): TravelPlan;
}