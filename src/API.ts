/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTravelPlanInput = {
  id?: string | null,
  destination?: string | null,
  exampleField?: string | null,
  maxPrice?: number | null,
  _version?: number | null,
};

export type ModelTravelPlanConditionInput = {
  destination?: ModelStringInput | null,
  exampleField?: ModelStringInput | null,
  maxPrice?: ModelIntInput | null,
  and?: Array< ModelTravelPlanConditionInput | null > | null,
  or?: Array< ModelTravelPlanConditionInput | null > | null,
  not?: ModelTravelPlanConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TravelPlan = {
  __typename: "TravelPlan",
  id: string,
  destination?: string | null,
  exampleField?: string | null,
  maxPrice?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTravelPlanInput = {
  id: string,
  destination?: string | null,
  exampleField?: string | null,
  maxPrice?: number | null,
  _version?: number | null,
};

export type DeleteTravelPlanInput = {
  id: string,
  _version?: number | null,
};

export type ModelTravelPlanFilterInput = {
  id?: ModelIDInput | null,
  destination?: ModelStringInput | null,
  exampleField?: ModelStringInput | null,
  maxPrice?: ModelIntInput | null,
  and?: Array< ModelTravelPlanFilterInput | null > | null,
  or?: Array< ModelTravelPlanFilterInput | null > | null,
  not?: ModelTravelPlanFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTravelPlanConnection = {
  __typename: "ModelTravelPlanConnection",
  items:  Array<TravelPlan >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateTravelPlanMutationVariables = {
  input: CreateTravelPlanInput,
  condition?: ModelTravelPlanConditionInput | null,
};

export type CreateTravelPlanMutation = {
  createTravelPlan?:  {
    __typename: "TravelPlan",
    id: string,
    destination?: string | null,
    exampleField?: string | null,
    maxPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTravelPlanMutationVariables = {
  input: UpdateTravelPlanInput,
  condition?: ModelTravelPlanConditionInput | null,
};

export type UpdateTravelPlanMutation = {
  updateTravelPlan?:  {
    __typename: "TravelPlan",
    id: string,
    destination?: string | null,
    exampleField?: string | null,
    maxPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTravelPlanMutationVariables = {
  input: DeleteTravelPlanInput,
  condition?: ModelTravelPlanConditionInput | null,
};

export type DeleteTravelPlanMutation = {
  deleteTravelPlan?:  {
    __typename: "TravelPlan",
    id: string,
    destination?: string | null,
    exampleField?: string | null,
    maxPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTravelPlanQueryVariables = {
  id: string,
};

export type GetTravelPlanQuery = {
  getTravelPlan?:  {
    __typename: "TravelPlan",
    id: string,
    destination?: string | null,
    exampleField?: string | null,
    maxPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTravelPlansQueryVariables = {
  filter?: ModelTravelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTravelPlansQuery = {
  listTravelPlans?:  {
    __typename: "ModelTravelPlanConnection",
    items:  Array< {
      __typename: "TravelPlan",
      id: string,
      destination?: string | null,
      exampleField?: string | null,
      maxPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTravelPlansQueryVariables = {
  filter?: ModelTravelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTravelPlansQuery = {
  syncTravelPlans?:  {
    __typename: "ModelTravelPlanConnection",
    items:  Array< {
      __typename: "TravelPlan",
      id: string,
      destination?: string | null,
      exampleField?: string | null,
      maxPrice?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTravelPlanSubscription = {
  onCreateTravelPlan?:  {
    __typename: "TravelPlan",
    id: string,
    destination?: string | null,
    exampleField?: string | null,
    maxPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTravelPlanSubscription = {
  onUpdateTravelPlan?:  {
    __typename: "TravelPlan",
    id: string,
    destination?: string | null,
    exampleField?: string | null,
    maxPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTravelPlanSubscription = {
  onDeleteTravelPlan?:  {
    __typename: "TravelPlan",
    id: string,
    destination?: string | null,
    exampleField?: string | null,
    maxPrice?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
