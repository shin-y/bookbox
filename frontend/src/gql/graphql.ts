/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String']['output'];
  coverImageUrl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isbn?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  reviews: Array<Review>;
  title: Scalars['String']['output'];
};

export type BookCreateInput = {
  author: Scalars['String']['input'];
  coverImageUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type BookUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  coverImageUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  createReview: Review;
  createReviewReaction: ReviewReaction;
  createUser: User;
  createUserBook: UserBook;
  deleteBook: Scalars['Boolean']['output'];
  deleteReview: Scalars['Boolean']['output'];
  deleteReviewReaction: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteUserBook: Scalars['Boolean']['output'];
  updateBook: Book;
  updateReview: Review;
  updateUser: User;
  updateUserBook: UserBook;
};


export type MutationCreateBookArgs = {
  input: BookCreateInput;
};


export type MutationCreateReviewArgs = {
  input: ReviewCreateInput;
};


export type MutationCreateReviewReactionArgs = {
  input: ReviewReactionCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationCreateUserBookArgs = {
  input: UserBookCreateInput;
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReviewReactionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserBookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBookArgs = {
  id: Scalars['ID']['input'];
  input: BookUpdateInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID']['input'];
  input: ReviewUpdateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UserUpdateInput;
};


export type MutationUpdateUserBookArgs = {
  id: Scalars['ID']['input'];
  input: UserBookUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  bookReviews: Array<Review>;
  books: Array<Book>;
  myBooks: Array<UserBook>;
  review?: Maybe<Review>;
  user?: Maybe<User>;
  userReviews: Array<Review>;
  users: Array<User>;
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookReviewsArgs = {
  bookId: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserReviewsArgs = {
  userId: Scalars['ID']['input'];
};

export enum ReadStatus {
  Read = 'READ',
  Reading = 'READING',
  ToRead = 'TO_READ'
}

export type Review = {
  __typename?: 'Review';
  book: Book;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  reactionCount: Scalars['Int']['output'];
  reactions: Array<ReviewReaction>;
  spoiler?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type ReviewCreateInput = {
  bookId: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  spoiler?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewReaction = {
  __typename?: 'ReviewReaction';
  id: Scalars['ID']['output'];
  review: Review;
  user: User;
};

export type ReviewReactionCreateInput = {
  reviewId: Scalars['ID']['input'];
};

export type ReviewUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  spoiler?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  biography?: Maybe<Scalars['String']['output']>;
  books: Array<UserBook>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserBook = {
  __typename?: 'UserBook';
  book: Book;
  createdAt: Scalars['String']['output'];
  finishedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLendable: Scalars['Boolean']['output'];
  startedAt?: Maybe<Scalars['String']['output']>;
  status: ReadStatus;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type UserBookCreateInput = {
  bookId: Scalars['ID']['input'];
  finishedAt?: InputMaybe<Scalars['String']['input']>;
  isLendable: Scalars['Boolean']['input'];
  startedAt?: InputMaybe<Scalars['String']['input']>;
  status: ReadStatus;
};

export type UserBookUpdateInput = {
  finishedAt?: InputMaybe<Scalars['String']['input']>;
  isLendable?: InputMaybe<Scalars['Boolean']['input']>;
  startedAt?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ReadStatus>;
};

export type UserCreateInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type UserUpdateInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, biography?: string | null, iconUrl?: string | null, createdAt: string, updatedAt: string }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"biography"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;