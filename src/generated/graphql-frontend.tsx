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
  register?: Maybe<Errors>;
  /** Login user */
  login?: Maybe<Errors>;
};


export type AddUsersRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type AddUsersLoginArgs = {
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

export type Errors = {
  __typename?: 'Errors';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type LoginMutationVariables = Exact<{
  loginUsername: Scalars['String'];
  loginPassword: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'addUsers' }
  & { login?: Maybe<(
    { __typename?: 'Errors' }
    & Pick<Errors, 'field' | 'message'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  registerUsername: Scalars['String'];
  registerPassword: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'addUsers' }
  & { register?: Maybe<(
    { __typename?: 'Errors' }
    & Pick<Errors, 'field' | 'message'>
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'getUsers' }
  & { usersForHome: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($loginUsername: String!, $loginPassword: String!) {
  login(username: $loginUsername, password: $loginPassword) {
    field
    message
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginUsername: // value for 'loginUsername'
 *      loginPassword: // value for 'loginPassword'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerUsername: String!, $registerPassword: String!) {
  register(username: $registerUsername, password: $registerPassword) {
    field
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerUsername: // value for 'registerUsername'
 *      registerPassword: // value for 'registerPassword'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
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