/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTravelPlan = /* GraphQL */ `
  mutation CreateTravelPlan(
    $input: CreateTravelPlanInput!
    $condition: ModelTravelPlanConditionInput
  ) {
    createTravelPlan(input: $input, condition: $condition) {
      id
      destination
      exampleField
      maxPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTravelPlan = /* GraphQL */ `
  mutation UpdateTravelPlan(
    $input: UpdateTravelPlanInput!
    $condition: ModelTravelPlanConditionInput
  ) {
    updateTravelPlan(input: $input, condition: $condition) {
      id
      destination
      exampleField
      maxPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTravelPlan = /* GraphQL */ `
  mutation DeleteTravelPlan(
    $input: DeleteTravelPlanInput!
    $condition: ModelTravelPlanConditionInput
  ) {
    deleteTravelPlan(input: $input, condition: $condition) {
      id
      destination
      exampleField
      maxPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
