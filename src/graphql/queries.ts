/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTravelPlan = /* GraphQL */ `
  query GetTravelPlan($id: ID!) {
    getTravelPlan(id: $id) {
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
export const listTravelPlans = /* GraphQL */ `
  query ListTravelPlans(
    $filter: ModelTravelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTravelPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTravelPlans = /* GraphQL */ `
  query SyncTravelPlans(
    $filter: ModelTravelPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTravelPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
