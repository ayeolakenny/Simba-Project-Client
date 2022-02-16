import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Balance = {
  __typename?: 'Balance';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type BalanceCreateManyUserInput = {
  amount: Scalars['Float'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BalanceCreateManyUserInputEnvelope = {
  data: Array<BalanceCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BalanceCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BalanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BalanceCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BalanceCreateWithoutUserInput>>;
  createMany?: InputMaybe<BalanceCreateManyUserInputEnvelope>;
};

export type BalanceCreateOrConnectWithoutUserInput = {
  create: BalanceCreateWithoutUserInput;
  where: BalanceWhereUniqueInput;
};

export type BalanceCreateWithoutUserInput = {
  amount: Scalars['Float'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BalanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: User;
  logout: Scalars['Boolean'];
  removeFromBalance: Scalars['Boolean'];
  sendMoney: Scalars['Boolean'];
  signup: User;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveFromBalanceArgs = {
  currency: Scalars['String'];
  userId: Scalars['Float'];
  value: Scalars['Float'];
};


export type MutationSendMoneyArgs = {
  input: SendMoneyInput;
};


export type MutationSignupArgs = {
  input: UserCreateInput;
};

export type Query = {
  __typename?: 'Query';
  findAllUsers: Array<User>;
  findUserByEmail: User;
  findUserById: User;
  getUserBalances: UserBalances;
  getUserTransactions: Array<Transaction>;
  me?: Maybe<User>;
};


export type QueryFindUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryFindUserByIdArgs = {
  userId: Scalars['Float'];
};

export type SendMoneyInput = {
  amount: Scalars['Int'];
  exchangeRate: Scalars['Float'];
  recieverEmail: Scalars['String'];
  senderId: Scalars['Int'];
  sourceCurrency: Scalars['String'];
  targetCurrency: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  exchangeRate: Scalars['Float'];
  id: Scalars['ID'];
  reciever: User;
  recieverId: Scalars['Int'];
  sender: User;
  senderId: Scalars['Int'];
  sourceCurrency: Scalars['String'];
  status: Scalars['Int'];
  targetCurrency: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionCreateManyRecieverInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  exchangeRate: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  senderId: Scalars['Int'];
  sourceCurrency: Scalars['String'];
  status: Scalars['Int'];
  targetCurrency: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionCreateManyRecieverInputEnvelope = {
  data: Array<TransactionCreateManyRecieverInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionCreateManySenderInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  exchangeRate: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  recieverId: Scalars['Int'];
  sourceCurrency: Scalars['String'];
  status: Scalars['Int'];
  targetCurrency: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionCreateManySenderInputEnvelope = {
  data: Array<TransactionCreateManySenderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionCreateNestedManyWithoutRecieverInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutRecieverInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutRecieverInput>>;
  createMany?: InputMaybe<TransactionCreateManyRecieverInputEnvelope>;
};

export type TransactionCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutSenderInput>>;
  createMany?: InputMaybe<TransactionCreateManySenderInputEnvelope>;
};

export type TransactionCreateOrConnectWithoutRecieverInput = {
  create: TransactionCreateWithoutRecieverInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutSenderInput = {
  create: TransactionCreateWithoutSenderInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutRecieverInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  exchangeRate: Scalars['Float'];
  sender: UserCreateNestedOneWithoutTransactionsFromInput;
  sourceCurrency: Scalars['String'];
  status: Scalars['Int'];
  targetCurrency: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionCreateWithoutSenderInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  exchangeRate: Scalars['Float'];
  reciever: UserCreateNestedOneWithoutTransactionsToInput;
  sourceCurrency: Scalars['String'];
  status: Scalars['Int'];
  targetCurrency: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  Balance?: Maybe<Array<Balance>>;
  _count: UserCount;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  transactionsFrom?: Maybe<Array<Transaction>>;
  transactionsTo?: Maybe<Array<Transaction>>;
  updatedAt: Scalars['DateTime'];
};

export type UserBalances = {
  __typename?: 'UserBalances';
  EUR: Scalars['Int'];
  GBP: Scalars['Int'];
  USD: Scalars['Int'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Balance: Scalars['Int'];
  transactionsFrom: Scalars['Int'];
  transactionsTo: Scalars['Int'];
};

export type UserCreateInput = {
  Balance?: InputMaybe<BalanceCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  transactionsFrom?: InputMaybe<TransactionCreateNestedManyWithoutSenderInput>;
  transactionsTo?: InputMaybe<TransactionCreateNestedManyWithoutRecieverInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutTransactionsFromInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransactionsFromInput>;
  create?: InputMaybe<UserCreateWithoutTransactionsFromInput>;
};

export type UserCreateNestedOneWithoutTransactionsToInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransactionsToInput>;
  create?: InputMaybe<UserCreateWithoutTransactionsToInput>;
};

export type UserCreateOrConnectWithoutTransactionsFromInput = {
  create: UserCreateWithoutTransactionsFromInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTransactionsToInput = {
  create: UserCreateWithoutTransactionsToInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutTransactionsFromInput = {
  Balance?: InputMaybe<BalanceCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  transactionsTo?: InputMaybe<TransactionCreateNestedManyWithoutRecieverInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTransactionsToInput = {
  Balance?: InputMaybe<BalanceCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  transactionsFrom?: InputMaybe<TransactionCreateNestedManyWithoutSenderInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UserFragment = { __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any };

export type SendMoneyMutationVariables = Exact<{
  senderId: Scalars['Int'];
  recieverEmail: Scalars['String'];
  amount: Scalars['Int'];
  sourceCurrency: Scalars['String'];
  targetCurrency: Scalars['String'];
  exchangeRate: Scalars['Float'];
}>;


export type SendMoneyMutation = { __typename?: 'Mutation', sendMoney: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any } };

export type GetUserBalancesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBalancesQuery = { __typename?: 'Query', getUserBalances: { __typename?: 'UserBalances', USD: number, EUR: number, GBP: number } };

export type GetUserTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserTransactionsQuery = { __typename?: 'Query', getUserTransactions: Array<{ __typename?: 'Transaction', id: string, senderId: number, recieverId: number, amount: number, sourceCurrency: string, targetCurrency: string, status: number, createdAt: any, updatedAt: any, reciever: { __typename?: 'User', name: string, email: string }, sender: { __typename?: 'User', name: string, email: string } }> };

export type FindAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any }> };

export type FindUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type FindUserByEmailQuery = { __typename?: 'Query', findUserByEmail: { __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any } | null };

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  email
  createdAt
  updatedAt
}
    `;
export const SendMoneyDocument = gql`
    mutation SendMoney($senderId: Int!, $recieverEmail: String!, $amount: Int!, $sourceCurrency: String!, $targetCurrency: String!, $exchangeRate: Float!) {
  sendMoney(
    input: {senderId: $senderId, recieverEmail: $recieverEmail, amount: $amount, sourceCurrency: $sourceCurrency, targetCurrency: $targetCurrency, exchangeRate: $exchangeRate}
  )
}
    `;
export type SendMoneyMutationFn = Apollo.MutationFunction<SendMoneyMutation, SendMoneyMutationVariables>;

/**
 * __useSendMoneyMutation__
 *
 * To run a mutation, you first call `useSendMoneyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMoneyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMoneyMutation, { data, loading, error }] = useSendMoneyMutation({
 *   variables: {
 *      senderId: // value for 'senderId'
 *      recieverEmail: // value for 'recieverEmail'
 *      amount: // value for 'amount'
 *      sourceCurrency: // value for 'sourceCurrency'
 *      targetCurrency: // value for 'targetCurrency'
 *      exchangeRate: // value for 'exchangeRate'
 *   },
 * });
 */
export function useSendMoneyMutation(baseOptions?: Apollo.MutationHookOptions<SendMoneyMutation, SendMoneyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMoneyMutation, SendMoneyMutationVariables>(SendMoneyDocument, options);
      }
export type SendMoneyMutationHookResult = ReturnType<typeof useSendMoneyMutation>;
export type SendMoneyMutationResult = Apollo.MutationResult<SendMoneyMutation>;
export type SendMoneyMutationOptions = Apollo.BaseMutationOptions<SendMoneyMutation, SendMoneyMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    ...User
  }
}
    ${UserFragmentDoc}`;
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
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $name: String!, $password: String!) {
  signup(input: {email: $email, name: $name, password: $password}) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const GetUserBalancesDocument = gql`
    query GetUserBalances {
  getUserBalances {
    USD
    EUR
    GBP
  }
}
    `;

/**
 * __useGetUserBalancesQuery__
 *
 * To run a query within a React component, call `useGetUserBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBalancesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBalancesQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBalancesQuery, GetUserBalancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBalancesQuery, GetUserBalancesQueryVariables>(GetUserBalancesDocument, options);
      }
export function useGetUserBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBalancesQuery, GetUserBalancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBalancesQuery, GetUserBalancesQueryVariables>(GetUserBalancesDocument, options);
        }
export type GetUserBalancesQueryHookResult = ReturnType<typeof useGetUserBalancesQuery>;
export type GetUserBalancesLazyQueryHookResult = ReturnType<typeof useGetUserBalancesLazyQuery>;
export type GetUserBalancesQueryResult = Apollo.QueryResult<GetUserBalancesQuery, GetUserBalancesQueryVariables>;
export const GetUserTransactionsDocument = gql`
    query GetUserTransactions {
  getUserTransactions {
    id
    senderId
    recieverId
    reciever {
      name
      email
    }
    sender {
      name
      email
    }
    amount
    sourceCurrency
    targetCurrency
    status
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUserTransactionsQuery__
 *
 * To run a query within a React component, call `useGetUserTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>(GetUserTransactionsDocument, options);
      }
export function useGetUserTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>(GetUserTransactionsDocument, options);
        }
export type GetUserTransactionsQueryHookResult = ReturnType<typeof useGetUserTransactionsQuery>;
export type GetUserTransactionsLazyQueryHookResult = ReturnType<typeof useGetUserTransactionsLazyQuery>;
export type GetUserTransactionsQueryResult = Apollo.QueryResult<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>;
export const FindAllUsersDocument = gql`
    query FindAllUsers {
  findAllUsers {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
      }
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;
export const FindUserByEmailDocument = gql`
    query FindUserByEmail($email: String!) {
  findUserByEmail(email: $email) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindUserByEmailQuery__
 *
 * To run a query within a React component, call `useFindUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useFindUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<FindUserByEmailQuery, FindUserByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserByEmailQuery, FindUserByEmailQueryVariables>(FindUserByEmailDocument, options);
      }
export function useFindUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserByEmailQuery, FindUserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserByEmailQuery, FindUserByEmailQueryVariables>(FindUserByEmailDocument, options);
        }
export type FindUserByEmailQueryHookResult = ReturnType<typeof useFindUserByEmailQuery>;
export type FindUserByEmailLazyQueryHookResult = ReturnType<typeof useFindUserByEmailLazyQuery>;
export type FindUserByEmailQueryResult = Apollo.QueryResult<FindUserByEmailQuery, FindUserByEmailQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;