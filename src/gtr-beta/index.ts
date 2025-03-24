import {
	type ClientOptions,
	type FieldsSelection,
	GenqlError,
	type GraphqlOperation,
	createClient as createClientOriginal,
	generateGraphqlOperation,
	linkTypeMap,
} from '../runtime/index.js';
// @ts-nocheck
import type {
	Mutation,
	MutationGenqlSelection,
	Query,
	QueryGenqlSelection,
	Subscription,
	SubscriptionGenqlSelection,
} from './schema.js';
export type { FieldsSelection } from '../runtime/index.js';
export { GenqlError };

import types from './types.js';
export * from './schema.js';
const typeMap = linkTypeMap(types as any);

export interface Client {
	query<R extends QueryGenqlSelection>(
		request: R & { __name?: string },
	): Promise<FieldsSelection<Query, R>>;

	mutation<R extends MutationGenqlSelection>(
		request: R & { __name?: string },
	): Promise<FieldsSelection<Mutation, R>>;
}

export const createClient = (options?: ClientOptions): Client =>
	createClientOriginal({
		url: 'https://graphql-beta.zeepki.st',

		...options,
		queryRoot: typeMap.Query!,
		mutationRoot: typeMap.Mutation!,
		subscriptionRoot: typeMap.Subscription!,
	}) as any;

export const everything = {
	__scalar: true,
};

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<
	Query,
	fields
>;
export const generateQueryOp: (
	fields: QueryGenqlSelection & { __name?: string },
) => GraphqlOperation = (fields) =>
	generateGraphqlOperation('query', typeMap.Query!, fields as any);

export type MutationResult<fields extends MutationGenqlSelection> =
	FieldsSelection<Mutation, fields>;
export const generateMutationOp: (
	fields: MutationGenqlSelection & { __name?: string },
) => GraphqlOperation = (fields) =>
	generateGraphqlOperation('mutation', typeMap.Mutation!, fields as any);

export type SubscriptionResult<fields extends SubscriptionGenqlSelection> =
	FieldsSelection<Subscription, fields>;
export const generateSubscriptionOp: (
	fields: SubscriptionGenqlSelection & { __name?: string },
) => GraphqlOperation = (fields) =>
	generateGraphqlOperation(
		'subscription',
		typeMap.Subscription!,
		fields as any,
	);
