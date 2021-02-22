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


export type GetTracks = {
  __typename?: 'getTracks';
  /** Get tracks array for homepage grid */
  tracksForHome: Array<Track>;
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  id: Scalars['ID'];
  /** The track's title */
  title: Scalars['String'];
  /** The track's main illustration to display in track card or track page detail */
  thumbnail?: Maybe<Scalars['String']>;
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars['Int']>;
  /** The number of modules this track contains */
  modulesCount?: Maybe<Scalars['Int']>;
  /** The track's main author */
  author: Author;
};

/** Author of a complete Track */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  /** Author's first and last name */
  name: Scalars['String'];
  /** Author's profile picture url */
  photo?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTracksQuery = (
  { __typename?: 'getTracks' }
  & { tracksForHome: Array<(
    { __typename?: 'Track' }
    & Pick<Track, 'id' | 'title' | 'thumbnail' | 'length' | 'modulesCount'>
    & { author: (
      { __typename?: 'Author' }
      & Pick<Author, 'name' | 'photo'>
    ) }
  )> }
);


export const GetTracksDocument = gql`
    query getTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      name
      photo
    }
  }
}
    `;

/**
 * __useGetTracksQuery__
 *
 * To run a query within a React component, call `useGetTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTracksQuery(baseOptions?: Apollo.QueryHookOptions<GetTracksQuery, GetTracksQueryVariables>) {
        return Apollo.useQuery<GetTracksQuery, GetTracksQueryVariables>(GetTracksDocument, baseOptions);
      }
export function useGetTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTracksQuery, GetTracksQueryVariables>) {
          return Apollo.useLazyQuery<GetTracksQuery, GetTracksQueryVariables>(GetTracksDocument, baseOptions);
        }
export type GetTracksQueryHookResult = ReturnType<typeof useGetTracksQuery>;
export type GetTracksLazyQueryHookResult = ReturnType<typeof useGetTracksLazyQuery>;
export type GetTracksQueryResult = Apollo.QueryResult<GetTracksQuery, GetTracksQueryVariables>;