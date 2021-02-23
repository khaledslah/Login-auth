import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};


export type GetUsers = {
  __typename?: 'getUsers';
  /** Get users array for homepage grid */
  usersForHome: Array<User>;
  /** Get user info by username */
  userForHome: User;
};


export type GetUsersUserForHomeArgs = {
  username: Scalars['String'];
};

export type AddUsers = {
  __typename?: 'addUsers';
  /** Register new user */
  register?: Maybe<Array<User>>;
};


export type AddUsersRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

/** A track is a group of Modules that teaches about a specific topic */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  /** The user's username */
  username: Scalars['String'];
  /** The user's password */
  password: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'getUsers' }
  & { usersForHome: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password'>
  )> }
);

export type AddUsersMutationVariables = Exact<{
  registerUsername: Scalars['String'];
  registerPassword: Scalars['String'];
}>;


export type AddUsersMutation = (
  { __typename?: 'addUsers' }
  & { register?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'password'>
  )>> }
);


export const GetUsersDocument = gql`
    query GetUsers {
  usersForHome {
    id
    username
    password
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const AddUsersDocument = gql`
    mutation AddUsers($registerUsername: String!, $registerPassword: String!) {
  register(username: $registerUsername, password: $registerPassword) {
    username
    password
  }
}
    `;
export type AddUsersMutationFn = Apollo.MutationFunction<AddUsersMutation, AddUsersMutationVariables>;

/**
 * __useAddUsersMutation__
 *
 * To run a mutation, you first call `useAddUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUsersMutation, { data, loading, error }] = useAddUsersMutation({
 *   variables: {
 *      registerUsername: // value for 'registerUsername'
 *      registerPassword: // value for 'registerPassword'
 *   },
 * });
 */
export function useAddUsersMutation(baseOptions?: Apollo.MutationHookOptions<AddUsersMutation, AddUsersMutationVariables>) {
        return Apollo.useMutation<AddUsersMutation, AddUsersMutationVariables>(AddUsersDocument, baseOptions);
      }
export type AddUsersMutationHookResult = ReturnType<typeof useAddUsersMutation>;
export type AddUsersMutationResult = Apollo.MutationResult<AddUsersMutation>;
export type AddUsersMutationOptions = Apollo.BaseMutationOptions<AddUsersMutation, AddUsersMutationVariables>;