// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
	ID: string;
	BigInt: any;
	Datetime: any;
	String: string;
	Cursor: any;
	Boolean: boolean;
	Int: number;
	BigFloat: any;
	Float: number;
	JSON: any;
};

/** The root query type which gives access points into the data universe. */
export interface Query {
	/**
	 * Exposes the root query type nested one level down. This is helpful for Relay 1
	 * which can only query top level fields if they are in a particular form.
	 */
	query: Query;
	/** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
	nodeId: Scalars['ID'];
	/** Fetches an object given its globally unique `ID`. */
	node: Node | null;
	/** Reads and enables pagination through a set of `VersionInfo`. */
	allVersionInfos: VersionInfosConnection | null;
	/** Reads and enables pagination through a set of `Favorite`. */
	allFavorites: FavoritesConnection | null;
	/** Reads and enables pagination through a set of `Level`. */
	allLevels: LevelsConnection | null;
	/** Reads and enables pagination through a set of `LevelItem`. */
	allLevelItems: LevelItemsConnection | null;
	/** Reads and enables pagination through a set of `LevelMetadatum`. */
	allLevelMetadata: LevelMetadataConnection | null;
	/** Reads and enables pagination through a set of `LevelPoint`. */
	allLevelPoints: LevelPointsConnection | null;
	/** Reads and enables pagination through a set of `LevelRequest`. */
	allLevelRequests: LevelRequestsConnection | null;
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	allPersonalBestGlobals: PersonalBestGlobalsConnection | null;
	/** Reads and enables pagination through a set of `Record`. */
	allRecords: RecordsConnection | null;
	/** Reads and enables pagination through a set of `RecordMedia`. */
	allRecordMedias: RecordMediasConnection | null;
	/** Reads and enables pagination through a set of `SampledFavorite`. */
	allSampledFavorites: SampledFavoritesConnection | null;
	/** Reads and enables pagination through a set of `SampledLevel`. */
	allSampledLevels: SampledLevelsConnection | null;
	/** Reads and enables pagination through a set of `SampledLevelItem`. */
	allSampledLevelItems: SampledLevelItemsConnection | null;
	/** Reads and enables pagination through a set of `SampledLevelMetadatum`. */
	allSampledLevelMetadata: SampledLevelMetadataConnection | null;
	/** Reads and enables pagination through a set of `SampledLevelPoint`. */
	allSampledLevelPoints: SampledLevelPointsConnection | null;
	/** Reads and enables pagination through a set of `SampledLevelRequest`. */
	allSampledLevelRequests: SampledLevelRequestsConnection | null;
	/** Reads and enables pagination through a set of `SampledPersonalBestGlobal`. */
	allSampledPersonalBestGlobals: SampledPersonalBestGlobalsConnection | null;
	/** Reads and enables pagination through a set of `SampledRecord`. */
	allSampledRecords: SampledRecordsConnection | null;
	/** Reads and enables pagination through a set of `SampledRecordMedia`. */
	allSampledRecordMedias: SampledRecordMediasConnection | null;
	/** Reads and enables pagination through a set of `SampledUpvote`. */
	allSampledUpvotes: SampledUpvotesConnection | null;
	/** Reads and enables pagination through a set of `SampledUser`. */
	allSampledUsers: SampledUsersConnection | null;
	/** Reads and enables pagination through a set of `SampledUserPoint`. */
	allSampledUserPoints: SampledUserPointsConnection | null;
	/** Reads and enables pagination through a set of `SampledVersion`. */
	allSampledVersions: SampledVersionsConnection | null;
	/** Reads and enables pagination through a set of `SampledWorldRecordGlobal`. */
	allSampledWorldRecordGlobals: SampledWorldRecordGlobalsConnection | null;
	/** Reads and enables pagination through a set of `Upvote`. */
	allUpvotes: UpvotesConnection | null;
	/** Reads and enables pagination through a set of `User`. */
	allUsers: UsersConnection | null;
	/** Reads and enables pagination through a set of `UserPoint`. */
	allUserPoints: UserPointsConnection | null;
	/** Reads and enables pagination through a set of `Version`. */
	allVersions: VersionsConnection | null;
	/** Reads and enables pagination through a set of `Vote`. */
	allVotes: VotesConnection | null;
	/** Reads and enables pagination through a set of `WorldRecordGlobal`. */
	allWorldRecordGlobals: WorldRecordGlobalsConnection | null;
	favoriteById: Favorite | null;
	levelById: Level | null;
	levelByHash: Level | null;
	levelItemById: LevelItem | null;
	levelMetadatumById: LevelMetadatum | null;
	levelPointById: LevelPoint | null;
	levelRequestById: LevelRequest | null;
	personalBestGlobalById: PersonalBestGlobal | null;
	recordById: Record | null;
	recordMediaById: RecordMedia | null;
	upvoteById: Upvote | null;
	userById: User | null;
	userPointById: UserPoint | null;
	versionById: Version | null;
	voteById: Vote | null;
	worldRecordGlobalById: WorldRecordGlobal | null;
	/** Retrieves filtered level items based on specified criteria. */
	zRtm: ZRtmConnection | null;
	/** Reads a single `Favorite` using its globally unique `ID`. */
	favorite: Favorite | null;
	/** Reads a single `Level` using its globally unique `ID`. */
	level: Level | null;
	/** Reads a single `LevelItem` using its globally unique `ID`. */
	levelItem: LevelItem | null;
	/** Reads a single `LevelMetadatum` using its globally unique `ID`. */
	levelMetadatum: LevelMetadatum | null;
	/** Reads a single `LevelPoint` using its globally unique `ID`. */
	levelPoint: LevelPoint | null;
	/** Reads a single `LevelRequest` using its globally unique `ID`. */
	levelRequest: LevelRequest | null;
	/** Reads a single `PersonalBestGlobal` using its globally unique `ID`. */
	personalBestGlobal: PersonalBestGlobal | null;
	/** Reads a single `Record` using its globally unique `ID`. */
	record: Record | null;
	/** Reads a single `RecordMedia` using its globally unique `ID`. */
	recordMedia: RecordMedia | null;
	/** Reads a single `Upvote` using its globally unique `ID`. */
	upvote: Upvote | null;
	/** Reads a single `User` using its globally unique `ID`. */
	user: User | null;
	/** Reads a single `UserPoint` using its globally unique `ID`. */
	userPoint: UserPoint | null;
	/** Reads a single `Version` using its globally unique `ID`. */
	version: Version | null;
	/** Reads a single `Vote` using its globally unique `ID`. */
	vote: Vote | null;
	/** Reads a single `WorldRecordGlobal` using its globally unique `ID`. */
	worldRecordGlobal: WorldRecordGlobal | null;
	__typename: 'Query';
}

/** An object with a globally unique `ID`. */
export type Node = (
	| Query
	| Favorite
	| User
	| PersonalBestGlobal
	| Record
	| Level
	| LevelItem
	| LevelMetadatum
	| LevelPoint
	| Upvote
	| WorldRecordGlobal
	| Vote
	| RecordMedia
	| UserPoint
	| LevelRequest
	| Version
) & { __isUnion?: true };

/** A connection to a list of `VersionInfo` values. */
export interface VersionInfosConnection {
	/** A list of `VersionInfo` objects. */
	nodes: VersionInfo[];
	/** A list of edges which contains the `VersionInfo` and cursor to aid in pagination. */
	edges: VersionInfosEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `VersionInfo` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'VersionInfosConnection';
}

export interface VersionInfo {
	version: Scalars['BigInt'];
	appliedOn: Scalars['Datetime'] | null;
	description: Scalars['String'] | null;
	__typename: 'VersionInfo';
}

/** A `VersionInfo` edge in the connection. */
export interface VersionInfosEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `VersionInfo` at the end of the edge. */
	node: VersionInfo;
	__typename: 'VersionInfosEdge';
}

/** Information about pagination in a connection. */
export interface PageInfo {
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean'];
	/** When paginating backwards, the cursor to continue. */
	startCursor: Scalars['Cursor'] | null;
	/** When paginating forwards, the cursor to continue. */
	endCursor: Scalars['Cursor'] | null;
	__typename: 'PageInfo';
}

/** Methods to use when ordering `VersionInfo`. */
export type VersionInfosOrderBy =
	| 'NATURAL'
	| 'VERSION_ASC'
	| 'VERSION_DESC'
	| 'APPLIED_ON_ASC'
	| 'APPLIED_ON_DESC'
	| 'DESCRIPTION_ASC'
	| 'DESCRIPTION_DESC';

/** A connection to a list of `Favorite` values. */
export interface FavoritesConnection {
	/** A list of `Favorite` objects. */
	nodes: Favorite[];
	/** A list of edges which contains the `Favorite` and cursor to aid in pagination. */
	edges: FavoritesEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Favorite` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'FavoritesConnection';
}

export interface Favorite {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idUser: Scalars['Int'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	idLevel: Scalars['Int'];
	/** Reads a single `User` that is related to this `Favorite`. */
	userByIdUser: User | null;
	/** Reads a single `Level` that is related to this `Favorite`. */
	levelByIdLevel: Level | null;
	__typename: 'Favorite';
}

export interface User {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	steamName: Scalars['String'] | null;
	banned: Scalars['Boolean'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	steamId: Scalars['BigFloat'] | null;
	discordId: Scalars['BigFloat'] | null;
	/** Reads and enables pagination through a set of `Favorite`. */
	favoritesByIdUser: FavoritesConnection;
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	personalBestGlobalsByIdUser: PersonalBestGlobalsConnection;
	/** Reads and enables pagination through a set of `UserPoint`. */
	userPointsByIdUser: UserPointsConnection;
	/** Reads and enables pagination through a set of `Record`. */
	recordsByIdUser: RecordsConnection;
	/** Reads and enables pagination through a set of `Upvote`. */
	upvotesByIdUser: UpvotesConnection;
	/** Reads and enables pagination through a set of `Vote`. */
	votesByIdUser: VotesConnection;
	__typename: 'User';
}

/** Methods to use when ordering `Favorite`. */
export type FavoritesOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `PersonalBestGlobal` values. */
export interface PersonalBestGlobalsConnection {
	/** A list of `PersonalBestGlobal` objects. */
	nodes: PersonalBestGlobal[];
	/** A list of edges which contains the `PersonalBestGlobal` and cursor to aid in pagination. */
	edges: PersonalBestGlobalsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `PersonalBestGlobal` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'PersonalBestGlobalsConnection';
}

export interface PersonalBestGlobal {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idRecord: Scalars['Int'];
	idUser: Scalars['Int'];
	idLevel: Scalars['Int'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `Record` that is related to this `PersonalBestGlobal`. */
	recordByIdRecord: Record | null;
	/** Reads a single `User` that is related to this `PersonalBestGlobal`. */
	userByIdUser: User | null;
	/** Reads a single `Level` that is related to this `PersonalBestGlobal`. */
	levelByIdLevel: Level | null;
	__typename: 'PersonalBestGlobal';
}

export interface Record {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idUser: Scalars['Int'];
	time: Scalars['Float'];
	gameVersion: Scalars['String'];
	idLevel: Scalars['Int'];
	modVersion: Scalars['String'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	splits: (Scalars['Float'] | null)[] | null;
	speeds: (Scalars['Float'] | null)[] | null;
	/** Reads a single `User` that is related to this `Record`. */
	userByIdUser: User | null;
	/** Reads a single `Level` that is related to this `Record`. */
	levelByIdLevel: Level | null;
	/** Reads and enables pagination through a set of `RecordMedia`. */
	recordMediasByIdRecord: RecordMediasConnection;
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	personalBestGlobalsByIdRecord: PersonalBestGlobalsConnection;
	/** Reads and enables pagination through a set of `WorldRecordGlobal`. */
	worldRecordGlobalsByIdRecord: WorldRecordGlobalsConnection;
	__typename: 'Record';
}

export interface Level {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	hash: Scalars['String'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads and enables pagination through a set of `Favorite`. */
	favoritesByIdLevel: FavoritesConnection;
	/** Reads and enables pagination through a set of `LevelItem`. */
	levelItemsByIdLevel: LevelItemsConnection;
	/** Reads and enables pagination through a set of `LevelMetadatum`. */
	levelMetadataByIdLevel: LevelMetadataConnection;
	/** Reads and enables pagination through a set of `LevelPoint`. */
	levelPointsByIdLevel: LevelPointsConnection;
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	personalBestGlobalsByIdLevel: PersonalBestGlobalsConnection;
	/** Reads and enables pagination through a set of `Record`. */
	recordsByIdLevel: RecordsConnection;
	/** Reads and enables pagination through a set of `Upvote`. */
	upvotesByIdLevel: UpvotesConnection;
	/** Reads and enables pagination through a set of `WorldRecordGlobal`. */
	worldRecordGlobalsByIdLevel: WorldRecordGlobalsConnection;
	/** Reads and enables pagination through a set of `Vote`. */
	votesByIdLevel: VotesConnection;
	__typename: 'Level';
}

/** A connection to a list of `LevelItem` values. */
export interface LevelItemsConnection {
	/** A list of `LevelItem` objects. */
	nodes: LevelItem[];
	/** A list of edges which contains the `LevelItem` and cursor to aid in pagination. */
	edges: LevelItemsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LevelItem` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'LevelItemsConnection';
}

export interface LevelItem {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idLevel: Scalars['Int'];
	workshopId: Scalars['BigFloat'];
	authorId: Scalars['BigFloat'];
	name: Scalars['String'];
	imageUrl: Scalars['String'];
	fileAuthor: Scalars['String'];
	fileUid: Scalars['String'];
	validationTimeAuthor: Scalars['Float'];
	validationTimeGold: Scalars['Float'];
	validationTimeSilver: Scalars['Float'];
	validationTimeBronze: Scalars['Float'];
	deleted: Scalars['Boolean'];
	createdAt: Scalars['Datetime'];
	updatedAt: Scalars['Datetime'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `Level` that is related to this `LevelItem`. */
	levelByIdLevel: Level | null;
	__typename: 'LevelItem';
}

/** A `LevelItem` edge in the connection. */
export interface LevelItemsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `LevelItem` at the end of the edge. */
	node: LevelItem;
	__typename: 'LevelItemsEdge';
}

/** Methods to use when ordering `LevelItem`. */
export type LevelItemsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'WORKSHOP_ID_ASC'
	| 'WORKSHOP_ID_DESC'
	| 'AUTHOR_ID_ASC'
	| 'AUTHOR_ID_DESC'
	| 'NAME_ASC'
	| 'NAME_DESC'
	| 'IMAGE_URL_ASC'
	| 'IMAGE_URL_DESC'
	| 'FILE_AUTHOR_ASC'
	| 'FILE_AUTHOR_DESC'
	| 'FILE_UID_ASC'
	| 'FILE_UID_DESC'
	| 'VALIDATION_TIME_AUTHOR_ASC'
	| 'VALIDATION_TIME_AUTHOR_DESC'
	| 'VALIDATION_TIME_GOLD_ASC'
	| 'VALIDATION_TIME_GOLD_DESC'
	| 'VALIDATION_TIME_SILVER_ASC'
	| 'VALIDATION_TIME_SILVER_DESC'
	| 'VALIDATION_TIME_BRONZE_ASC'
	| 'VALIDATION_TIME_BRONZE_DESC'
	| 'DELETED_ASC'
	| 'DELETED_DESC'
	| 'CREATED_AT_ASC'
	| 'CREATED_AT_DESC'
	| 'UPDATED_AT_ASC'
	| 'UPDATED_AT_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `LevelMetadatum` values. */
export interface LevelMetadataConnection {
	/** A list of `LevelMetadatum` objects. */
	nodes: LevelMetadatum[];
	/** A list of edges which contains the `LevelMetadatum` and cursor to aid in pagination. */
	edges: LevelMetadataEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LevelMetadatum` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'LevelMetadataConnection';
}

export interface LevelMetadatum {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idLevel: Scalars['Int'];
	amountCheckpoints: Scalars['Int'];
	amountFinishes: Scalars['Int'];
	amountBlocks: Scalars['Int'];
	typeGround: Scalars['Int'];
	typeSkybox: Scalars['Int'];
	blocks: Scalars['JSON'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `Level` that is related to this `LevelMetadatum`. */
	levelByIdLevel: Level | null;
	__typename: 'LevelMetadatum';
}

/** A `LevelMetadatum` edge in the connection. */
export interface LevelMetadataEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `LevelMetadatum` at the end of the edge. */
	node: LevelMetadatum;
	__typename: 'LevelMetadataEdge';
}

/** Methods to use when ordering `LevelMetadatum`. */
export type LevelMetadataOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'AMOUNT_CHECKPOINTS_ASC'
	| 'AMOUNT_CHECKPOINTS_DESC'
	| 'AMOUNT_FINISHES_ASC'
	| 'AMOUNT_FINISHES_DESC'
	| 'AMOUNT_BLOCKS_ASC'
	| 'AMOUNT_BLOCKS_DESC'
	| 'TYPE_GROUND_ASC'
	| 'TYPE_GROUND_DESC'
	| 'TYPE_SKYBOX_ASC'
	| 'TYPE_SKYBOX_DESC'
	| 'BLOCKS_ASC'
	| 'BLOCKS_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `LevelPoint` values. */
export interface LevelPointsConnection {
	/** A list of `LevelPoint` objects. */
	nodes: LevelPoint[];
	/** A list of edges which contains the `LevelPoint` and cursor to aid in pagination. */
	edges: LevelPointsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LevelPoint` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'LevelPointsConnection';
}

export interface LevelPoint {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	points: Scalars['Int'];
	idLevel: Scalars['Int'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `Level` that is related to this `LevelPoint`. */
	levelByIdLevel: Level | null;
	__typename: 'LevelPoint';
}

/** A `LevelPoint` edge in the connection. */
export interface LevelPointsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `LevelPoint` at the end of the edge. */
	node: LevelPoint;
	__typename: 'LevelPointsEdge';
}

/** Methods to use when ordering `LevelPoint`. */
export type LevelPointsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'POINTS_ASC'
	| 'POINTS_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** Methods to use when ordering `PersonalBestGlobal`. */
export type PersonalBestGlobalsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_RECORD_ASC'
	| 'ID_RECORD_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `Record` values. */
export interface RecordsConnection {
	/** A list of `Record` objects. */
	nodes: Record[];
	/** A list of edges which contains the `Record` and cursor to aid in pagination. */
	edges: RecordsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Record` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'RecordsConnection';
}

/** A `Record` edge in the connection. */
export interface RecordsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `Record` at the end of the edge. */
	node: Record;
	__typename: 'RecordsEdge';
}

/** Methods to use when ordering `Record`. */
export type RecordsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'TIME_ASC'
	| 'TIME_DESC'
	| 'GAME_VERSION_ASC'
	| 'GAME_VERSION_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'MOD_VERSION_ASC'
	| 'MOD_VERSION_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'SPLITS_ASC'
	| 'SPLITS_DESC'
	| 'SPEEDS_ASC'
	| 'SPEEDS_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `Upvote` values. */
export interface UpvotesConnection {
	/** A list of `Upvote` objects. */
	nodes: Upvote[];
	/** A list of edges which contains the `Upvote` and cursor to aid in pagination. */
	edges: UpvotesEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Upvote` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'UpvotesConnection';
}

export interface Upvote {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idUser: Scalars['Int'];
	idLevel: Scalars['Int'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `User` that is related to this `Upvote`. */
	userByIdUser: User | null;
	/** Reads a single `Level` that is related to this `Upvote`. */
	levelByIdLevel: Level | null;
	__typename: 'Upvote';
}

/** A `Upvote` edge in the connection. */
export interface UpvotesEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `Upvote` at the end of the edge. */
	node: Upvote;
	__typename: 'UpvotesEdge';
}

/** Methods to use when ordering `Upvote`. */
export type UpvotesOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `WorldRecordGlobal` values. */
export interface WorldRecordGlobalsConnection {
	/** A list of `WorldRecordGlobal` objects. */
	nodes: WorldRecordGlobal[];
	/** A list of edges which contains the `WorldRecordGlobal` and cursor to aid in pagination. */
	edges: WorldRecordGlobalsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `WorldRecordGlobal` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'WorldRecordGlobalsConnection';
}

export interface WorldRecordGlobal {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idRecord: Scalars['Int'];
	idLevel: Scalars['Int'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `Record` that is related to this `WorldRecordGlobal`. */
	recordByIdRecord: Record | null;
	/** Reads a single `Level` that is related to this `WorldRecordGlobal`. */
	levelByIdLevel: Level | null;
	__typename: 'WorldRecordGlobal';
}

/** A `WorldRecordGlobal` edge in the connection. */
export interface WorldRecordGlobalsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `WorldRecordGlobal` at the end of the edge. */
	node: WorldRecordGlobal;
	__typename: 'WorldRecordGlobalsEdge';
}

/** Methods to use when ordering `WorldRecordGlobal`. */
export type WorldRecordGlobalsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_RECORD_ASC'
	| 'ID_RECORD_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `Vote` values. */
export interface VotesConnection {
	/** A list of `Vote` objects. */
	nodes: Vote[];
	/** A list of edges which contains the `Vote` and cursor to aid in pagination. */
	edges: VotesEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Vote` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'VotesConnection';
}

export interface Vote {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idUser: Scalars['Int'];
	idLevel: Scalars['Int'];
	value: Scalars['Int'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `User` that is related to this `Vote`. */
	userByIdUser: User | null;
	/** Reads a single `Level` that is related to this `Vote`. */
	levelByIdLevel: Level | null;
	__typename: 'Vote';
}

/** A `Vote` edge in the connection. */
export interface VotesEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `Vote` at the end of the edge. */
	node: Vote;
	__typename: 'VotesEdge';
}

/** Methods to use when ordering `Vote`. */
export type VotesOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'VALUE_ASC'
	| 'VALUE_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `RecordMedia` values. */
export interface RecordMediasConnection {
	/** A list of `RecordMedia` objects. */
	nodes: RecordMedia[];
	/** A list of edges which contains the `RecordMedia` and cursor to aid in pagination. */
	edges: RecordMediasEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `RecordMedia` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'RecordMediasConnection';
}

export interface RecordMedia {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idRecord: Scalars['Int'];
	ghostUrl: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	/** Reads a single `Record` that is related to this `RecordMedia`. */
	recordByIdRecord: Record | null;
	__typename: 'RecordMedia';
}

/** A `RecordMedia` edge in the connection. */
export interface RecordMediasEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `RecordMedia` at the end of the edge. */
	node: RecordMedia;
	__typename: 'RecordMediasEdge';
}

/** Methods to use when ordering `RecordMedia`. */
export type RecordMediasOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_RECORD_ASC'
	| 'ID_RECORD_DESC'
	| 'GHOST_URL_ASC'
	| 'GHOST_URL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A `PersonalBestGlobal` edge in the connection. */
export interface PersonalBestGlobalsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `PersonalBestGlobal` at the end of the edge. */
	node: PersonalBestGlobal;
	__typename: 'PersonalBestGlobalsEdge';
}

/** A connection to a list of `UserPoint` values. */
export interface UserPointsConnection {
	/** A list of `UserPoint` objects. */
	nodes: UserPoint[];
	/** A list of edges which contains the `UserPoint` and cursor to aid in pagination. */
	edges: UserPointsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `UserPoint` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'UserPointsConnection';
}

export interface UserPoint {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	idUser: Scalars['Int'];
	points: Scalars['Int'];
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	rank: Scalars['Int'];
	worldRecords: Scalars['Int'] | null;
	/** Reads a single `User` that is related to this `UserPoint`. */
	userByIdUser: User | null;
	__typename: 'UserPoint';
}

/** A `UserPoint` edge in the connection. */
export interface UserPointsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `UserPoint` at the end of the edge. */
	node: UserPoint;
	__typename: 'UserPointsEdge';
}

/** Methods to use when ordering `UserPoint`. */
export type UserPointsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'POINTS_ASC'
	| 'POINTS_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'RANK_ASC'
	| 'RANK_DESC'
	| 'WORLD_RECORDS_ASC'
	| 'WORLD_RECORDS_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A `Favorite` edge in the connection. */
export interface FavoritesEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `Favorite` at the end of the edge. */
	node: Favorite;
	__typename: 'FavoritesEdge';
}

/** A connection to a list of `Level` values. */
export interface LevelsConnection {
	/** A list of `Level` objects. */
	nodes: Level[];
	/** A list of edges which contains the `Level` and cursor to aid in pagination. */
	edges: LevelsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Level` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'LevelsConnection';
}

/** A `Level` edge in the connection. */
export interface LevelsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `Level` at the end of the edge. */
	node: Level;
	__typename: 'LevelsEdge';
}

/** Methods to use when ordering `Level`. */
export type LevelsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'HASH_ASC'
	| 'HASH_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `LevelRequest` values. */
export interface LevelRequestsConnection {
	/** A list of `LevelRequest` objects. */
	nodes: LevelRequest[];
	/** A list of edges which contains the `LevelRequest` and cursor to aid in pagination. */
	edges: LevelRequestsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LevelRequest` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'LevelRequestsConnection';
}

export interface LevelRequest {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	workshopId: Scalars['BigFloat'];
	uid: Scalars['String'] | null;
	hash: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'LevelRequest';
}

/** A `LevelRequest` edge in the connection. */
export interface LevelRequestsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `LevelRequest` at the end of the edge. */
	node: LevelRequest;
	__typename: 'LevelRequestsEdge';
}

/** Methods to use when ordering `LevelRequest`. */
export type LevelRequestsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'WORKSHOP_ID_ASC'
	| 'WORKSHOP_ID_DESC'
	| 'UID_ASC'
	| 'UID_DESC'
	| 'HASH_ASC'
	| 'HASH_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `SampledFavorite` values. */
export interface SampledFavoritesConnection {
	/** A list of `SampledFavorite` objects. */
	nodes: SampledFavorite[];
	/** A list of edges which contains the `SampledFavorite` and cursor to aid in pagination. */
	edges: SampledFavoritesEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledFavorite` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledFavoritesConnection';
}

export interface SampledFavorite {
	id: Scalars['Int'] | null;
	idUser: Scalars['Int'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	idLevel: Scalars['Int'] | null;
	__typename: 'SampledFavorite';
}

/** A `SampledFavorite` edge in the connection. */
export interface SampledFavoritesEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledFavorite` at the end of the edge. */
	node: SampledFavorite;
	__typename: 'SampledFavoritesEdge';
}

/** Methods to use when ordering `SampledFavorite`. */
export type SampledFavoritesOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC';

/** A connection to a list of `SampledLevel` values. */
export interface SampledLevelsConnection {
	/** A list of `SampledLevel` objects. */
	nodes: SampledLevel[];
	/** A list of edges which contains the `SampledLevel` and cursor to aid in pagination. */
	edges: SampledLevelsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledLevel` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledLevelsConnection';
}

export interface SampledLevel {
	id: Scalars['Int'] | null;
	hash: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledLevel';
}

/** A `SampledLevel` edge in the connection. */
export interface SampledLevelsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledLevel` at the end of the edge. */
	node: SampledLevel;
	__typename: 'SampledLevelsEdge';
}

/** Methods to use when ordering `SampledLevel`. */
export type SampledLevelsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'HASH_ASC'
	| 'HASH_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledLevelItem` values. */
export interface SampledLevelItemsConnection {
	/** A list of `SampledLevelItem` objects. */
	nodes: SampledLevelItem[];
	/** A list of edges which contains the `SampledLevelItem` and cursor to aid in pagination. */
	edges: SampledLevelItemsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledLevelItem` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledLevelItemsConnection';
}

export interface SampledLevelItem {
	id: Scalars['Int'] | null;
	idLevel: Scalars['Int'] | null;
	workshopId: Scalars['BigFloat'] | null;
	authorId: Scalars['BigFloat'] | null;
	name: Scalars['String'] | null;
	imageUrl: Scalars['String'] | null;
	fileAuthor: Scalars['String'] | null;
	fileUid: Scalars['String'] | null;
	validationTimeAuthor: Scalars['Float'] | null;
	validationTimeGold: Scalars['Float'] | null;
	validationTimeSilver: Scalars['Float'] | null;
	validationTimeBronze: Scalars['Float'] | null;
	deleted: Scalars['Boolean'] | null;
	createdAt: Scalars['Datetime'] | null;
	updatedAt: Scalars['Datetime'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledLevelItem';
}

/** A `SampledLevelItem` edge in the connection. */
export interface SampledLevelItemsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledLevelItem` at the end of the edge. */
	node: SampledLevelItem;
	__typename: 'SampledLevelItemsEdge';
}

/** Methods to use when ordering `SampledLevelItem`. */
export type SampledLevelItemsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'WORKSHOP_ID_ASC'
	| 'WORKSHOP_ID_DESC'
	| 'AUTHOR_ID_ASC'
	| 'AUTHOR_ID_DESC'
	| 'NAME_ASC'
	| 'NAME_DESC'
	| 'IMAGE_URL_ASC'
	| 'IMAGE_URL_DESC'
	| 'FILE_AUTHOR_ASC'
	| 'FILE_AUTHOR_DESC'
	| 'FILE_UID_ASC'
	| 'FILE_UID_DESC'
	| 'VALIDATION_TIME_AUTHOR_ASC'
	| 'VALIDATION_TIME_AUTHOR_DESC'
	| 'VALIDATION_TIME_GOLD_ASC'
	| 'VALIDATION_TIME_GOLD_DESC'
	| 'VALIDATION_TIME_SILVER_ASC'
	| 'VALIDATION_TIME_SILVER_DESC'
	| 'VALIDATION_TIME_BRONZE_ASC'
	| 'VALIDATION_TIME_BRONZE_DESC'
	| 'DELETED_ASC'
	| 'DELETED_DESC'
	| 'CREATED_AT_ASC'
	| 'CREATED_AT_DESC'
	| 'UPDATED_AT_ASC'
	| 'UPDATED_AT_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledLevelMetadatum` values. */
export interface SampledLevelMetadataConnection {
	/** A list of `SampledLevelMetadatum` objects. */
	nodes: SampledLevelMetadatum[];
	/** A list of edges which contains the `SampledLevelMetadatum` and cursor to aid in pagination. */
	edges: SampledLevelMetadataEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledLevelMetadatum` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledLevelMetadataConnection';
}

export interface SampledLevelMetadatum {
	id: Scalars['Int'] | null;
	idLevel: Scalars['Int'] | null;
	amountCheckpoints: Scalars['Int'] | null;
	amountFinishes: Scalars['Int'] | null;
	amountBlocks: Scalars['Int'] | null;
	typeGround: Scalars['Int'] | null;
	typeSkybox: Scalars['Int'] | null;
	blocks: Scalars['JSON'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledLevelMetadatum';
}

/** A `SampledLevelMetadatum` edge in the connection. */
export interface SampledLevelMetadataEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledLevelMetadatum` at the end of the edge. */
	node: SampledLevelMetadatum;
	__typename: 'SampledLevelMetadataEdge';
}

/** Methods to use when ordering `SampledLevelMetadatum`. */
export type SampledLevelMetadataOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'AMOUNT_CHECKPOINTS_ASC'
	| 'AMOUNT_CHECKPOINTS_DESC'
	| 'AMOUNT_FINISHES_ASC'
	| 'AMOUNT_FINISHES_DESC'
	| 'AMOUNT_BLOCKS_ASC'
	| 'AMOUNT_BLOCKS_DESC'
	| 'TYPE_GROUND_ASC'
	| 'TYPE_GROUND_DESC'
	| 'TYPE_SKYBOX_ASC'
	| 'TYPE_SKYBOX_DESC'
	| 'BLOCKS_ASC'
	| 'BLOCKS_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledLevelPoint` values. */
export interface SampledLevelPointsConnection {
	/** A list of `SampledLevelPoint` objects. */
	nodes: SampledLevelPoint[];
	/** A list of edges which contains the `SampledLevelPoint` and cursor to aid in pagination. */
	edges: SampledLevelPointsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledLevelPoint` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledLevelPointsConnection';
}

export interface SampledLevelPoint {
	id: Scalars['Int'] | null;
	points: Scalars['Int'] | null;
	idLevel: Scalars['Int'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledLevelPoint';
}

/** A `SampledLevelPoint` edge in the connection. */
export interface SampledLevelPointsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledLevelPoint` at the end of the edge. */
	node: SampledLevelPoint;
	__typename: 'SampledLevelPointsEdge';
}

/** Methods to use when ordering `SampledLevelPoint`. */
export type SampledLevelPointsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'POINTS_ASC'
	| 'POINTS_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledLevelRequest` values. */
export interface SampledLevelRequestsConnection {
	/** A list of `SampledLevelRequest` objects. */
	nodes: SampledLevelRequest[];
	/** A list of edges which contains the `SampledLevelRequest` and cursor to aid in pagination. */
	edges: SampledLevelRequestsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledLevelRequest` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledLevelRequestsConnection';
}

export interface SampledLevelRequest {
	id: Scalars['Int'] | null;
	workshopId: Scalars['BigFloat'] | null;
	uid: Scalars['String'] | null;
	hash: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledLevelRequest';
}

/** A `SampledLevelRequest` edge in the connection. */
export interface SampledLevelRequestsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledLevelRequest` at the end of the edge. */
	node: SampledLevelRequest;
	__typename: 'SampledLevelRequestsEdge';
}

/** Methods to use when ordering `SampledLevelRequest`. */
export type SampledLevelRequestsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'WORKSHOP_ID_ASC'
	| 'WORKSHOP_ID_DESC'
	| 'UID_ASC'
	| 'UID_DESC'
	| 'HASH_ASC'
	| 'HASH_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledPersonalBestGlobal` values. */
export interface SampledPersonalBestGlobalsConnection {
	/** A list of `SampledPersonalBestGlobal` objects. */
	nodes: SampledPersonalBestGlobal[];
	/** A list of edges which contains the `SampledPersonalBestGlobal` and cursor to aid in pagination. */
	edges: SampledPersonalBestGlobalsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledPersonalBestGlobal` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledPersonalBestGlobalsConnection';
}

export interface SampledPersonalBestGlobal {
	id: Scalars['Int'] | null;
	idRecord: Scalars['Int'] | null;
	idUser: Scalars['Int'] | null;
	idLevel: Scalars['Int'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledPersonalBestGlobal';
}

/** A `SampledPersonalBestGlobal` edge in the connection. */
export interface SampledPersonalBestGlobalsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledPersonalBestGlobal` at the end of the edge. */
	node: SampledPersonalBestGlobal;
	__typename: 'SampledPersonalBestGlobalsEdge';
}

/** Methods to use when ordering `SampledPersonalBestGlobal`. */
export type SampledPersonalBestGlobalsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_RECORD_ASC'
	| 'ID_RECORD_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledRecord` values. */
export interface SampledRecordsConnection {
	/** A list of `SampledRecord` objects. */
	nodes: SampledRecord[];
	/** A list of edges which contains the `SampledRecord` and cursor to aid in pagination. */
	edges: SampledRecordsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledRecord` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledRecordsConnection';
}

export interface SampledRecord {
	id: Scalars['Int'] | null;
	idUser: Scalars['Int'] | null;
	time: Scalars['Float'] | null;
	gameVersion: Scalars['String'] | null;
	idLevel: Scalars['Int'] | null;
	modVersion: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	splits: (Scalars['Float'] | null)[] | null;
	speeds: (Scalars['Float'] | null)[] | null;
	__typename: 'SampledRecord';
}

/** A `SampledRecord` edge in the connection. */
export interface SampledRecordsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledRecord` at the end of the edge. */
	node: SampledRecord;
	__typename: 'SampledRecordsEdge';
}

/** Methods to use when ordering `SampledRecord`. */
export type SampledRecordsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'TIME_ASC'
	| 'TIME_DESC'
	| 'GAME_VERSION_ASC'
	| 'GAME_VERSION_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'MOD_VERSION_ASC'
	| 'MOD_VERSION_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'SPLITS_ASC'
	| 'SPLITS_DESC'
	| 'SPEEDS_ASC'
	| 'SPEEDS_DESC';

/** A connection to a list of `SampledRecordMedia` values. */
export interface SampledRecordMediasConnection {
	/** A list of `SampledRecordMedia` objects. */
	nodes: SampledRecordMedia[];
	/** A list of edges which contains the `SampledRecordMedia` and cursor to aid in pagination. */
	edges: SampledRecordMediasEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledRecordMedia` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledRecordMediasConnection';
}

export interface SampledRecordMedia {
	id: Scalars['Int'] | null;
	idRecord: Scalars['Int'] | null;
	ghostUrl: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledRecordMedia';
}

/** A `SampledRecordMedia` edge in the connection. */
export interface SampledRecordMediasEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledRecordMedia` at the end of the edge. */
	node: SampledRecordMedia;
	__typename: 'SampledRecordMediasEdge';
}

/** Methods to use when ordering `SampledRecordMedia`. */
export type SampledRecordMediasOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_RECORD_ASC'
	| 'ID_RECORD_DESC'
	| 'GHOST_URL_ASC'
	| 'GHOST_URL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledUpvote` values. */
export interface SampledUpvotesConnection {
	/** A list of `SampledUpvote` objects. */
	nodes: SampledUpvote[];
	/** A list of edges which contains the `SampledUpvote` and cursor to aid in pagination. */
	edges: SampledUpvotesEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledUpvote` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledUpvotesConnection';
}

export interface SampledUpvote {
	id: Scalars['Int'] | null;
	idUser: Scalars['Int'] | null;
	idLevel: Scalars['Int'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledUpvote';
}

/** A `SampledUpvote` edge in the connection. */
export interface SampledUpvotesEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledUpvote` at the end of the edge. */
	node: SampledUpvote;
	__typename: 'SampledUpvotesEdge';
}

/** Methods to use when ordering `SampledUpvote`. */
export type SampledUpvotesOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledUser` values. */
export interface SampledUsersConnection {
	/** A list of `SampledUser` objects. */
	nodes: SampledUser[];
	/** A list of edges which contains the `SampledUser` and cursor to aid in pagination. */
	edges: SampledUsersEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledUser` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledUsersConnection';
}

export interface SampledUser {
	id: Scalars['Int'] | null;
	steamName: Scalars['String'] | null;
	banned: Scalars['Boolean'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	steamId: Scalars['BigFloat'] | null;
	discordId: Scalars['BigFloat'] | null;
	__typename: 'SampledUser';
}

/** A `SampledUser` edge in the connection. */
export interface SampledUsersEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledUser` at the end of the edge. */
	node: SampledUser;
	__typename: 'SampledUsersEdge';
}

/** Methods to use when ordering `SampledUser`. */
export type SampledUsersOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'STEAM_NAME_ASC'
	| 'STEAM_NAME_DESC'
	| 'BANNED_ASC'
	| 'BANNED_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'STEAM_ID_ASC'
	| 'STEAM_ID_DESC'
	| 'DISCORD_ID_ASC'
	| 'DISCORD_ID_DESC';

/** A connection to a list of `SampledUserPoint` values. */
export interface SampledUserPointsConnection {
	/** A list of `SampledUserPoint` objects. */
	nodes: SampledUserPoint[];
	/** A list of edges which contains the `SampledUserPoint` and cursor to aid in pagination. */
	edges: SampledUserPointsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledUserPoint` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledUserPointsConnection';
}

export interface SampledUserPoint {
	id: Scalars['Int'] | null;
	idUser: Scalars['Int'] | null;
	points: Scalars['Int'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	rank: Scalars['Int'] | null;
	worldRecords: Scalars['Int'] | null;
	__typename: 'SampledUserPoint';
}

/** A `SampledUserPoint` edge in the connection. */
export interface SampledUserPointsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledUserPoint` at the end of the edge. */
	node: SampledUserPoint;
	__typename: 'SampledUserPointsEdge';
}

/** Methods to use when ordering `SampledUserPoint`. */
export type SampledUserPointsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_USER_ASC'
	| 'ID_USER_DESC'
	| 'POINTS_ASC'
	| 'POINTS_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'RANK_ASC'
	| 'RANK_DESC'
	| 'WORLD_RECORDS_ASC'
	| 'WORLD_RECORDS_DESC';

/** A connection to a list of `SampledVersion` values. */
export interface SampledVersionsConnection {
	/** A list of `SampledVersion` objects. */
	nodes: SampledVersion[];
	/** A list of edges which contains the `SampledVersion` and cursor to aid in pagination. */
	edges: SampledVersionsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledVersion` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledVersionsConnection';
}

export interface SampledVersion {
	id: Scalars['Int'] | null;
	minimum: Scalars['String'] | null;
	latest: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledVersion';
}

/** A `SampledVersion` edge in the connection. */
export interface SampledVersionsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledVersion` at the end of the edge. */
	node: SampledVersion;
	__typename: 'SampledVersionsEdge';
}

/** Methods to use when ordering `SampledVersion`. */
export type SampledVersionsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'MINIMUM_ASC'
	| 'MINIMUM_DESC'
	| 'LATEST_ASC'
	| 'LATEST_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `SampledWorldRecordGlobal` values. */
export interface SampledWorldRecordGlobalsConnection {
	/** A list of `SampledWorldRecordGlobal` objects. */
	nodes: SampledWorldRecordGlobal[];
	/** A list of edges which contains the `SampledWorldRecordGlobal` and cursor to aid in pagination. */
	edges: SampledWorldRecordGlobalsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SampledWorldRecordGlobal` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'SampledWorldRecordGlobalsConnection';
}

export interface SampledWorldRecordGlobal {
	id: Scalars['Int'] | null;
	idRecord: Scalars['Int'] | null;
	idLevel: Scalars['Int'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'SampledWorldRecordGlobal';
}

/** A `SampledWorldRecordGlobal` edge in the connection. */
export interface SampledWorldRecordGlobalsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `SampledWorldRecordGlobal` at the end of the edge. */
	node: SampledWorldRecordGlobal;
	__typename: 'SampledWorldRecordGlobalsEdge';
}

/** Methods to use when ordering `SampledWorldRecordGlobal`. */
export type SampledWorldRecordGlobalsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'ID_RECORD_ASC'
	| 'ID_RECORD_DESC'
	| 'ID_LEVEL_ASC'
	| 'ID_LEVEL_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC';

/** A connection to a list of `User` values. */
export interface UsersConnection {
	/** A list of `User` objects. */
	nodes: User[];
	/** A list of edges which contains the `User` and cursor to aid in pagination. */
	edges: UsersEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `User` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'UsersConnection';
}

/** A `User` edge in the connection. */
export interface UsersEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `User` at the end of the edge. */
	node: User;
	__typename: 'UsersEdge';
}

/** Methods to use when ordering `User`. */
export type UsersOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'STEAM_NAME_ASC'
	| 'STEAM_NAME_DESC'
	| 'BANNED_ASC'
	| 'BANNED_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'STEAM_ID_ASC'
	| 'STEAM_ID_DESC'
	| 'DISCORD_ID_ASC'
	| 'DISCORD_ID_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `Version` values. */
export interface VersionsConnection {
	/** A list of `Version` objects. */
	nodes: Version[];
	/** A list of edges which contains the `Version` and cursor to aid in pagination. */
	edges: VersionsEdge[];
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Version` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'VersionsConnection';
}

export interface Version {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars['ID'];
	id: Scalars['Int'];
	minimum: Scalars['String'] | null;
	latest: Scalars['String'] | null;
	dateCreated: Scalars['Datetime'];
	dateUpdated: Scalars['Datetime'] | null;
	__typename: 'Version';
}

/** A `Version` edge in the connection. */
export interface VersionsEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `Version` at the end of the edge. */
	node: Version;
	__typename: 'VersionsEdge';
}

/** Methods to use when ordering `Version`. */
export type VersionsOrderBy =
	| 'NATURAL'
	| 'ID_ASC'
	| 'ID_DESC'
	| 'MINIMUM_ASC'
	| 'MINIMUM_DESC'
	| 'LATEST_ASC'
	| 'LATEST_DESC'
	| 'DATE_CREATED_ASC'
	| 'DATE_CREATED_DESC'
	| 'DATE_UPDATED_ASC'
	| 'DATE_UPDATED_DESC'
	| 'PRIMARY_KEY_ASC'
	| 'PRIMARY_KEY_DESC';

/** A connection to a list of `ZRtmRecord` values. */
export interface ZRtmConnection {
	/** A list of `ZRtmRecord` objects. */
	nodes: ZRtmRecord[];
	/** A list of edges which contains the `ZRtmRecord` and cursor to aid in pagination. */
	edges: ZRtmEdge[];
	/** The count of *all* `ZRtmRecord` you could get from the connection. */
	totalCount: Scalars['Int'];
	__typename: 'ZRtmConnection';
}

/** The return type of our `zRtm` query. */
export interface ZRtmRecord {
	id: Scalars['Int'] | null;
	idLevel: Scalars['Int'] | null;
	workshopId: Scalars['BigFloat'] | null;
	authorId: Scalars['BigFloat'] | null;
	name: Scalars['String'] | null;
	imageUrl: Scalars['String'] | null;
	fileAuthor: Scalars['String'] | null;
	fileUid: Scalars['String'] | null;
	validationTimeAuthor: Scalars['Float'] | null;
	validationTimeGold: Scalars['Float'] | null;
	validationTimeSilver: Scalars['Float'] | null;
	validationTimeBronze: Scalars['Float'] | null;
	deleted: Scalars['Boolean'] | null;
	createdAt: Scalars['Datetime'] | null;
	updatedAt: Scalars['Datetime'] | null;
	dateCreated: Scalars['Datetime'] | null;
	dateUpdated: Scalars['Datetime'] | null;
	amountCheckpoints: Scalars['Int'] | null;
	amountFinishes: Scalars['Int'] | null;
	amountBlocks: Scalars['Int'] | null;
	numRecords: Scalars['BigInt'] | null;
	__typename: 'ZRtmRecord';
}

/** A `ZRtmRecord` edge in the connection. */
export interface ZRtmEdge {
	/** A cursor for use in pagination. */
	cursor: Scalars['Cursor'] | null;
	/** The `ZRtmRecord` at the end of the edge. */
	node: ZRtmRecord;
	__typename: 'ZRtmEdge';
}

/** The root mutation type which contains root level fields which mutate data. */
export interface Mutation {
	updateWorldRecordGlobal: UpdateWorldRecordGlobalPayload | null;
	__typename: 'Mutation';
}

/** The output of our `updateWorldRecordGlobal` mutation. */
export interface UpdateWorldRecordGlobalPayload {
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId: Scalars['String'] | null;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query: Query | null;
	__typename: 'UpdateWorldRecordGlobalPayload';
}

/** The root query type which gives access points into the data universe. */
export interface QueryGenqlSelection {
	/**
	 * Exposes the root query type nested one level down. This is helpful for Relay 1
	 * which can only query top level fields if they are in a particular form.
	 */
	query?: QueryGenqlSelection;
	/** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
	nodeId?: boolean | number;
	/** Fetches an object given its globally unique `ID`. */
	node?: NodeGenqlSelection & {
		__args: {
			/** The globally unique `ID`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads and enables pagination through a set of `VersionInfo`. */
	allVersionInfos?: VersionInfosConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `VersionInfo`. */
			orderBy?: VersionInfosOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: VersionInfoCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: VersionInfoFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Favorite`. */
	allFavorites?: FavoritesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Favorite`. */
			orderBy?: FavoritesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: FavoriteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: FavoriteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Level`. */
	allLevels?: LevelsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Level`. */
			orderBy?: LevelsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `LevelItem`. */
	allLevelItems?: LevelItemsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `LevelItem`. */
			orderBy?: LevelItemsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelItemCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelItemFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `LevelMetadatum`. */
	allLevelMetadata?: LevelMetadataConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `LevelMetadatum`. */
			orderBy?: LevelMetadataOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelMetadatumCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelMetadatumFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `LevelPoint`. */
	allLevelPoints?: LevelPointsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `LevelPoint`. */
			orderBy?: LevelPointsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelPointCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelPointFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `LevelRequest`. */
	allLevelRequests?: LevelRequestsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `LevelRequest`. */
			orderBy?: LevelRequestsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelRequestCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelRequestFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	allPersonalBestGlobals?: PersonalBestGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `PersonalBestGlobal`. */
			orderBy?: PersonalBestGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: PersonalBestGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: PersonalBestGlobalFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Record`. */
	allRecords?: RecordsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Record`. */
			orderBy?: RecordsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: RecordCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: RecordFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `RecordMedia`. */
	allRecordMedias?: RecordMediasConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `RecordMedia`. */
			orderBy?: RecordMediasOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: RecordMediaCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: RecordMediaFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledFavorite`. */
	allSampledFavorites?: SampledFavoritesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledFavorite`. */
			orderBy?: SampledFavoritesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledFavoriteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledFavoriteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledLevel`. */
	allSampledLevels?: SampledLevelsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledLevel`. */
			orderBy?: SampledLevelsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledLevelCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledLevelFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledLevelItem`. */
	allSampledLevelItems?: SampledLevelItemsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledLevelItem`. */
			orderBy?: SampledLevelItemsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledLevelItemCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledLevelItemFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledLevelMetadatum`. */
	allSampledLevelMetadata?: SampledLevelMetadataConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledLevelMetadatum`. */
			orderBy?: SampledLevelMetadataOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledLevelMetadatumCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledLevelMetadatumFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledLevelPoint`. */
	allSampledLevelPoints?: SampledLevelPointsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledLevelPoint`. */
			orderBy?: SampledLevelPointsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledLevelPointCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledLevelPointFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledLevelRequest`. */
	allSampledLevelRequests?: SampledLevelRequestsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledLevelRequest`. */
			orderBy?: SampledLevelRequestsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledLevelRequestCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledLevelRequestFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledPersonalBestGlobal`. */
	allSampledPersonalBestGlobals?: SampledPersonalBestGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledPersonalBestGlobal`. */
			orderBy?: SampledPersonalBestGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledPersonalBestGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledPersonalBestGlobalFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledRecord`. */
	allSampledRecords?: SampledRecordsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledRecord`. */
			orderBy?: SampledRecordsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledRecordCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledRecordFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledRecordMedia`. */
	allSampledRecordMedias?: SampledRecordMediasConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledRecordMedia`. */
			orderBy?: SampledRecordMediasOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledRecordMediaCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledRecordMediaFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledUpvote`. */
	allSampledUpvotes?: SampledUpvotesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledUpvote`. */
			orderBy?: SampledUpvotesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledUpvoteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledUpvoteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledUser`. */
	allSampledUsers?: SampledUsersConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledUser`. */
			orderBy?: SampledUsersOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledUserCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledUserFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledUserPoint`. */
	allSampledUserPoints?: SampledUserPointsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledUserPoint`. */
			orderBy?: SampledUserPointsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledUserPointCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledUserPointFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledVersion`. */
	allSampledVersions?: SampledVersionsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledVersion`. */
			orderBy?: SampledVersionsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledVersionCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledVersionFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `SampledWorldRecordGlobal`. */
	allSampledWorldRecordGlobals?: SampledWorldRecordGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `SampledWorldRecordGlobal`. */
			orderBy?: SampledWorldRecordGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: SampledWorldRecordGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: SampledWorldRecordGlobalFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Upvote`. */
	allUpvotes?: UpvotesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Upvote`. */
			orderBy?: UpvotesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: UpvoteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: UpvoteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `User`. */
	allUsers?: UsersConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `User`. */
			orderBy?: UsersOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: UserCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: UserFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `UserPoint`. */
	allUserPoints?: UserPointsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `UserPoint`. */
			orderBy?: UserPointsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: UserPointCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: UserPointFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Version`. */
	allVersions?: VersionsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Version`. */
			orderBy?: VersionsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: VersionCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: VersionFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Vote`. */
	allVotes?: VotesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Vote`. */
			orderBy?: VotesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: VoteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: VoteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `WorldRecordGlobal`. */
	allWorldRecordGlobals?: WorldRecordGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `WorldRecordGlobal`. */
			orderBy?: WorldRecordGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: WorldRecordGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: WorldRecordGlobalFilter | null;
		};
	};
	favoriteById?: FavoriteGenqlSelection & { __args: { id: Scalars['Int'] } };
	levelById?: LevelGenqlSelection & { __args: { id: Scalars['Int'] } };
	levelByHash?: LevelGenqlSelection & { __args: { hash: Scalars['String'] } };
	levelItemById?: LevelItemGenqlSelection & { __args: { id: Scalars['Int'] } };
	levelMetadatumById?: LevelMetadatumGenqlSelection & {
		__args: { id: Scalars['Int'] };
	};
	levelPointById?: LevelPointGenqlSelection & {
		__args: { id: Scalars['Int'] };
	};
	levelRequestById?: LevelRequestGenqlSelection & {
		__args: { id: Scalars['Int'] };
	};
	personalBestGlobalById?: PersonalBestGlobalGenqlSelection & {
		__args: { id: Scalars['Int'] };
	};
	recordById?: RecordGenqlSelection & { __args: { id: Scalars['Int'] } };
	recordMediaById?: RecordMediaGenqlSelection & {
		__args: { id: Scalars['Int'] };
	};
	upvoteById?: UpvoteGenqlSelection & { __args: { id: Scalars['Int'] } };
	userById?: UserGenqlSelection & { __args: { id: Scalars['Int'] } };
	userPointById?: UserPointGenqlSelection & { __args: { id: Scalars['Int'] } };
	versionById?: VersionGenqlSelection & { __args: { id: Scalars['Int'] } };
	voteById?: VoteGenqlSelection & { __args: { id: Scalars['Int'] } };
	worldRecordGlobalById?: WorldRecordGlobalGenqlSelection & {
		__args: { id: Scalars['Int'] };
	};
	/** Retrieves filtered level items based on specified criteria. */
	zRtm?: ZRtmConnectionGenqlSelection & {
		__args?: {
			pMinAuthorTime?: Scalars['Float'] | null;
			pMaxAuthorTime?: Scalars['Float'] | null;
			pMinRecords?: Scalars['Int'] | null;
			pMaxRecords?: Scalars['Int'] | null;
			pExcludedAuthorIds?: (Scalars['Int'] | null)[] | null;
			pExcludedHashes?: (Scalars['String'] | null)[] | null;
			pMinCheckpoints?: Scalars['Int'] | null;
			pMaxCheckpoints?: Scalars['Int'] | null;
			pMinFinishes?: Scalars['Int'] | null;
			pMaxFinishes?: Scalars['Int'] | null;
			pMinBlocks?: Scalars['Int'] | null;
			pMaxBlocks?: Scalars['Int'] | null;
			pSampleSize?: Scalars['Int'] | null;
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: ZRtmRecordFilter | null;
		};
	};
	/** Reads a single `Favorite` using its globally unique `ID`. */
	favorite?: FavoriteGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `Favorite`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `Level` using its globally unique `ID`. */
	level?: LevelGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `Level`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `LevelItem` using its globally unique `ID`. */
	levelItem?: LevelItemGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `LevelItem`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `LevelMetadatum` using its globally unique `ID`. */
	levelMetadatum?: LevelMetadatumGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `LevelMetadatum`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `LevelPoint` using its globally unique `ID`. */
	levelPoint?: LevelPointGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `LevelPoint`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `LevelRequest` using its globally unique `ID`. */
	levelRequest?: LevelRequestGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `LevelRequest`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `PersonalBestGlobal` using its globally unique `ID`. */
	personalBestGlobal?: PersonalBestGlobalGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `PersonalBestGlobal`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `Record` using its globally unique `ID`. */
	record?: RecordGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `Record`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `RecordMedia` using its globally unique `ID`. */
	recordMedia?: RecordMediaGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `RecordMedia`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `Upvote` using its globally unique `ID`. */
	upvote?: UpvoteGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `Upvote`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `User` using its globally unique `ID`. */
	user?: UserGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `User`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `UserPoint` using its globally unique `ID`. */
	userPoint?: UserPointGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `UserPoint`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `Version` using its globally unique `ID`. */
	version?: VersionGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `Version`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `Vote` using its globally unique `ID`. */
	vote?: VoteGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `Vote`. */
			nodeId: Scalars['ID'];
		};
	};
	/** Reads a single `WorldRecordGlobal` using its globally unique `ID`. */
	worldRecordGlobal?: WorldRecordGlobalGenqlSelection & {
		__args: {
			/** The globally unique `ID` to be used in selecting a single `WorldRecordGlobal`. */
			nodeId: Scalars['ID'];
		};
	};
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** An object with a globally unique `ID`. */
export interface NodeGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	on_Query?: QueryGenqlSelection;
	on_Favorite?: FavoriteGenqlSelection;
	on_User?: UserGenqlSelection;
	on_PersonalBestGlobal?: PersonalBestGlobalGenqlSelection;
	on_Record?: RecordGenqlSelection;
	on_Level?: LevelGenqlSelection;
	on_LevelItem?: LevelItemGenqlSelection;
	on_LevelMetadatum?: LevelMetadatumGenqlSelection;
	on_LevelPoint?: LevelPointGenqlSelection;
	on_Upvote?: UpvoteGenqlSelection;
	on_WorldRecordGlobal?: WorldRecordGlobalGenqlSelection;
	on_Vote?: VoteGenqlSelection;
	on_RecordMedia?: RecordMediaGenqlSelection;
	on_UserPoint?: UserPointGenqlSelection;
	on_LevelRequest?: LevelRequestGenqlSelection;
	on_Version?: VersionGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A connection to a list of `VersionInfo` values. */
export interface VersionInfosConnectionGenqlSelection {
	/** A list of `VersionInfo` objects. */
	nodes?: VersionInfoGenqlSelection;
	/** A list of edges which contains the `VersionInfo` and cursor to aid in pagination. */
	edges?: VersionInfosEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `VersionInfo` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface VersionInfoGenqlSelection {
	version?: boolean | number;
	appliedOn?: boolean | number;
	description?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `VersionInfo` edge in the connection. */
export interface VersionInfosEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `VersionInfo` at the end of the edge. */
	node?: VersionInfoGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** Information about pagination in a connection. */
export interface PageInfoGenqlSelection {
	/** When paginating forwards, are there more items? */
	hasNextPage?: boolean | number;
	/** When paginating backwards, are there more items? */
	hasPreviousPage?: boolean | number;
	/** When paginating backwards, the cursor to continue. */
	startCursor?: boolean | number;
	/** When paginating forwards, the cursor to continue. */
	endCursor?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `VersionInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface VersionInfoCondition {
	/** Checks for equality with the object’s `version` field. */
	version?: Scalars['BigInt'] | null;
	/** Checks for equality with the object’s `appliedOn` field. */
	appliedOn?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `description` field. */
	description?: Scalars['String'] | null;
}

/** A filter to be used against `VersionInfo` object types. All fields are combined with a logical ‘and.’ */
export interface VersionInfoFilter {
	/** Filter by the object’s `version` field. */
	version?: BigIntFilter | null;
	/** Filter by the object’s `appliedOn` field. */
	appliedOn?: DatetimeFilter | null;
	/** Filter by the object’s `description` field. */
	description?: StringFilter | null;
	/** Checks for all expressions in this list. */
	and?: VersionInfoFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: VersionInfoFilter[] | null;
	/** Negates the expression. */
	not?: VersionInfoFilter | null;
}

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export interface BigIntFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['BigInt'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['BigInt'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['BigInt'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['BigInt'] | null;
	/** Included in the specified list. */
	in?: Scalars['BigInt'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['BigInt'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['BigInt'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['BigInt'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['BigInt'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['BigInt'] | null;
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export interface DatetimeFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['Datetime'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['Datetime'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['Datetime'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['Datetime'] | null;
	/** Included in the specified list. */
	in?: Scalars['Datetime'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['Datetime'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['Datetime'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['Datetime'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['Datetime'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['Datetime'] | null;
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export interface StringFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['String'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['String'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['String'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['String'] | null;
	/** Included in the specified list. */
	in?: Scalars['String'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['String'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['String'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['String'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['String'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['String'] | null;
	/** Contains the specified string (case-sensitive). */
	includes?: Scalars['String'] | null;
	/** Does not contain the specified string (case-sensitive). */
	notIncludes?: Scalars['String'] | null;
	/** Contains the specified string (case-insensitive). */
	includesInsensitive?: Scalars['String'] | null;
	/** Does not contain the specified string (case-insensitive). */
	notIncludesInsensitive?: Scalars['String'] | null;
	/** Starts with the specified string (case-sensitive). */
	startsWith?: Scalars['String'] | null;
	/** Does not start with the specified string (case-sensitive). */
	notStartsWith?: Scalars['String'] | null;
	/** Starts with the specified string (case-insensitive). */
	startsWithInsensitive?: Scalars['String'] | null;
	/** Does not start with the specified string (case-insensitive). */
	notStartsWithInsensitive?: Scalars['String'] | null;
	/** Ends with the specified string (case-sensitive). */
	endsWith?: Scalars['String'] | null;
	/** Does not end with the specified string (case-sensitive). */
	notEndsWith?: Scalars['String'] | null;
	/** Ends with the specified string (case-insensitive). */
	endsWithInsensitive?: Scalars['String'] | null;
	/** Does not end with the specified string (case-insensitive). */
	notEndsWithInsensitive?: Scalars['String'] | null;
	/** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	like?: Scalars['String'] | null;
	/** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	notLike?: Scalars['String'] | null;
	/** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	likeInsensitive?: Scalars['String'] | null;
	/** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	notLikeInsensitive?: Scalars['String'] | null;
	/** Equal to the specified value (case-insensitive). */
	equalToInsensitive?: Scalars['String'] | null;
	/** Not equal to the specified value (case-insensitive). */
	notEqualToInsensitive?: Scalars['String'] | null;
	/** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
	distinctFromInsensitive?: Scalars['String'] | null;
	/** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
	notDistinctFromInsensitive?: Scalars['String'] | null;
	/** Included in the specified list (case-insensitive). */
	inInsensitive?: Scalars['String'][] | null;
	/** Not included in the specified list (case-insensitive). */
	notInInsensitive?: Scalars['String'][] | null;
	/** Less than the specified value (case-insensitive). */
	lessThanInsensitive?: Scalars['String'] | null;
	/** Less than or equal to the specified value (case-insensitive). */
	lessThanOrEqualToInsensitive?: Scalars['String'] | null;
	/** Greater than the specified value (case-insensitive). */
	greaterThanInsensitive?: Scalars['String'] | null;
	/** Greater than or equal to the specified value (case-insensitive). */
	greaterThanOrEqualToInsensitive?: Scalars['String'] | null;
}

/** A connection to a list of `Favorite` values. */
export interface FavoritesConnectionGenqlSelection {
	/** A list of `Favorite` objects. */
	nodes?: FavoriteGenqlSelection;
	/** A list of edges which contains the `Favorite` and cursor to aid in pagination. */
	edges?: FavoritesEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `Favorite` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface FavoriteGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idUser?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	idLevel?: boolean | number;
	/** Reads a single `User` that is related to this `Favorite`. */
	userByIdUser?: UserGenqlSelection;
	/** Reads a single `Level` that is related to this `Favorite`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface UserGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	steamName?: boolean | number;
	banned?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	steamId?: boolean | number;
	discordId?: boolean | number;
	/** Reads and enables pagination through a set of `Favorite`. */
	favoritesByIdUser?: FavoritesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Favorite`. */
			orderBy?: FavoritesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: FavoriteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: FavoriteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	personalBestGlobalsByIdUser?: PersonalBestGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `PersonalBestGlobal`. */
			orderBy?: PersonalBestGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: PersonalBestGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: PersonalBestGlobalFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `UserPoint`. */
	userPointsByIdUser?: UserPointsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `UserPoint`. */
			orderBy?: UserPointsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: UserPointCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: UserPointFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Record`. */
	recordsByIdUser?: RecordsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Record`. */
			orderBy?: RecordsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: RecordCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: RecordFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Upvote`. */
	upvotesByIdUser?: UpvotesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Upvote`. */
			orderBy?: UpvotesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: UpvoteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: UpvoteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Vote`. */
	votesByIdUser?: VotesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Vote`. */
			orderBy?: VotesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: VoteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: VoteFilter | null;
		};
	};
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `Favorite` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface FavoriteCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
}

/** A filter to be used against `Favorite` object types. All fields are combined with a logical ‘and.’ */
export interface FavoriteFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `userByIdUser` relation. */
	userByIdUser?: UserFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: FavoriteFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: FavoriteFilter[] | null;
	/** Negates the expression. */
	not?: FavoriteFilter | null;
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export interface IntFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['Int'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['Int'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['Int'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['Int'] | null;
	/** Included in the specified list. */
	in?: Scalars['Int'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['Int'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['Int'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['Int'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['Int'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['Int'] | null;
}

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export interface UserFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `steamName` field. */
	steamName?: StringFilter | null;
	/** Filter by the object’s `banned` field. */
	banned?: BooleanFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `steamId` field. */
	steamId?: BigFloatFilter | null;
	/** Filter by the object’s `discordId` field. */
	discordId?: BigFloatFilter | null;
	/** Filter by the object’s `favoritesByIdUserList` relation. */
	favoritesByIdUserList?: UserToManyFavoriteFilter | null;
	/** Some related `favoritesByIdUserList` exist. */
	favoritesByIdUserListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `personalBestGlobalsByIdUserList` relation. */
	personalBestGlobalsByIdUserList?: UserToManyPersonalBestGlobalFilter | null;
	/** Some related `personalBestGlobalsByIdUserList` exist. */
	personalBestGlobalsByIdUserListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `userPointsByIdUserList` relation. */
	userPointsByIdUserList?: UserToManyUserPointFilter | null;
	/** Some related `userPointsByIdUserList` exist. */
	userPointsByIdUserListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `recordsByIdUserList` relation. */
	recordsByIdUserList?: UserToManyRecordFilter | null;
	/** Some related `recordsByIdUserList` exist. */
	recordsByIdUserListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `upvotesByIdUserList` relation. */
	upvotesByIdUserList?: UserToManyUpvoteFilter | null;
	/** Some related `upvotesByIdUserList` exist. */
	upvotesByIdUserListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `votesByIdUserList` relation. */
	votesByIdUserList?: UserToManyVoteFilter | null;
	/** Some related `votesByIdUserList` exist. */
	votesByIdUserListExist?: Scalars['Boolean'] | null;
	/** Checks for all expressions in this list. */
	and?: UserFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: UserFilter[] | null;
	/** Negates the expression. */
	not?: UserFilter | null;
}

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export interface BooleanFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['Boolean'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['Boolean'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['Boolean'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['Boolean'] | null;
	/** Included in the specified list. */
	in?: Scalars['Boolean'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['Boolean'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['Boolean'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['Boolean'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['Boolean'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['Boolean'] | null;
}

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export interface BigFloatFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['BigFloat'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['BigFloat'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['BigFloat'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['BigFloat'] | null;
	/** Included in the specified list. */
	in?: Scalars['BigFloat'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['BigFloat'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['BigFloat'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['BigFloat'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['BigFloat'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['BigFloat'] | null;
}

/** A filter to be used against many `Favorite` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyFavoriteFilter {
	/** Every related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: FavoriteFilter | null;
	/** Some related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: FavoriteFilter | null;
	/** No related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: FavoriteFilter | null;
}

/** A filter to be used against many `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyPersonalBestGlobalFilter {
	/** Every related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: PersonalBestGlobalFilter | null;
	/** Some related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: PersonalBestGlobalFilter | null;
	/** No related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: PersonalBestGlobalFilter | null;
}

/** A filter to be used against `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface PersonalBestGlobalFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idRecord` field. */
	idRecord?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `recordByIdRecord` relation. */
	recordByIdRecord?: RecordFilter | null;
	/** Filter by the object’s `userByIdUser` relation. */
	userByIdUser?: UserFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: PersonalBestGlobalFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: PersonalBestGlobalFilter[] | null;
	/** Negates the expression. */
	not?: PersonalBestGlobalFilter | null;
}

/** A filter to be used against `Record` object types. All fields are combined with a logical ‘and.’ */
export interface RecordFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `time` field. */
	time?: FloatFilter | null;
	/** Filter by the object’s `gameVersion` field. */
	gameVersion?: StringFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `modVersion` field. */
	modVersion?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `splits` field. */
	splits?: FloatListFilter | null;
	/** Filter by the object’s `speeds` field. */
	speeds?: FloatListFilter | null;
	/** Filter by the object’s `recordMediasByIdRecordList` relation. */
	recordMediasByIdRecordList?: RecordToManyRecordMediaFilter | null;
	/** Some related `recordMediasByIdRecordList` exist. */
	recordMediasByIdRecordListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `personalBestGlobalsByIdRecordList` relation. */
	personalBestGlobalsByIdRecordList?: RecordToManyPersonalBestGlobalFilter | null;
	/** Some related `personalBestGlobalsByIdRecordList` exist. */
	personalBestGlobalsByIdRecordListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `worldRecordGlobalsByIdRecordList` relation. */
	worldRecordGlobalsByIdRecordList?: RecordToManyWorldRecordGlobalFilter | null;
	/** Some related `worldRecordGlobalsByIdRecordList` exist. */
	worldRecordGlobalsByIdRecordListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `userByIdUser` relation. */
	userByIdUser?: UserFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: RecordFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: RecordFilter[] | null;
	/** Negates the expression. */
	not?: RecordFilter | null;
}

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export interface FloatFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['Float'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['Float'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['Float'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['Float'] | null;
	/** Included in the specified list. */
	in?: Scalars['Float'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['Float'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['Float'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['Float'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['Float'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['Float'] | null;
}

/** A filter to be used against Float List fields. All fields are combined with a logical ‘and.’ */
export interface FloatListFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: (Scalars['Float'] | null)[] | null;
	/** Not equal to the specified value. */
	notEqualTo?: (Scalars['Float'] | null)[] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: (Scalars['Float'] | null)[] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: (Scalars['Float'] | null)[] | null;
	/** Less than the specified value. */
	lessThan?: (Scalars['Float'] | null)[] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: (Scalars['Float'] | null)[] | null;
	/** Greater than the specified value. */
	greaterThan?: (Scalars['Float'] | null)[] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: (Scalars['Float'] | null)[] | null;
	/** Contains the specified list of values. */
	contains?: (Scalars['Float'] | null)[] | null;
	/** Contained by the specified list of values. */
	containedBy?: (Scalars['Float'] | null)[] | null;
	/** Overlaps the specified list of values. */
	overlaps?: (Scalars['Float'] | null)[] | null;
	/** Any array item is equal to the specified value. */
	anyEqualTo?: Scalars['Float'] | null;
	/** Any array item is not equal to the specified value. */
	anyNotEqualTo?: Scalars['Float'] | null;
	/** Any array item is less than the specified value. */
	anyLessThan?: Scalars['Float'] | null;
	/** Any array item is less than or equal to the specified value. */
	anyLessThanOrEqualTo?: Scalars['Float'] | null;
	/** Any array item is greater than the specified value. */
	anyGreaterThan?: Scalars['Float'] | null;
	/** Any array item is greater than or equal to the specified value. */
	anyGreaterThanOrEqualTo?: Scalars['Float'] | null;
}

/** A filter to be used against many `RecordMedia` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyRecordMediaFilter {
	/** Every related `RecordMedia` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: RecordMediaFilter | null;
	/** Some related `RecordMedia` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: RecordMediaFilter | null;
	/** No related `RecordMedia` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: RecordMediaFilter | null;
}

/** A filter to be used against `RecordMedia` object types. All fields are combined with a logical ‘and.’ */
export interface RecordMediaFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idRecord` field. */
	idRecord?: IntFilter | null;
	/** Filter by the object’s `ghostUrl` field. */
	ghostUrl?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `recordByIdRecord` relation. */
	recordByIdRecord?: RecordFilter | null;
	/** Checks for all expressions in this list. */
	and?: RecordMediaFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: RecordMediaFilter[] | null;
	/** Negates the expression. */
	not?: RecordMediaFilter | null;
}

/** A filter to be used against many `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyPersonalBestGlobalFilter {
	/** Every related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: PersonalBestGlobalFilter | null;
	/** Some related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: PersonalBestGlobalFilter | null;
	/** No related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: PersonalBestGlobalFilter | null;
}

/** A filter to be used against many `WorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyWorldRecordGlobalFilter {
	/** Every related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: WorldRecordGlobalFilter | null;
	/** Some related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: WorldRecordGlobalFilter | null;
	/** No related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: WorldRecordGlobalFilter | null;
}

/** A filter to be used against `WorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface WorldRecordGlobalFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idRecord` field. */
	idRecord?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `recordByIdRecord` relation. */
	recordByIdRecord?: RecordFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: WorldRecordGlobalFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: WorldRecordGlobalFilter[] | null;
	/** Negates the expression. */
	not?: WorldRecordGlobalFilter | null;
}

/** A filter to be used against `Level` object types. All fields are combined with a logical ‘and.’ */
export interface LevelFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `hash` field. */
	hash?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `favoritesByIdLevelList` relation. */
	favoritesByIdLevelList?: LevelToManyFavoriteFilter | null;
	/** Some related `favoritesByIdLevelList` exist. */
	favoritesByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `levelItemsByIdLevelList` relation. */
	levelItemsByIdLevelList?: LevelToManyLevelItemFilter | null;
	/** Some related `levelItemsByIdLevelList` exist. */
	levelItemsByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `levelMetadataByIdLevelList` relation. */
	levelMetadataByIdLevelList?: LevelToManyLevelMetadatumFilter | null;
	/** Some related `levelMetadataByIdLevelList` exist. */
	levelMetadataByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `levelPointsByIdLevelList` relation. */
	levelPointsByIdLevelList?: LevelToManyLevelPointFilter | null;
	/** Some related `levelPointsByIdLevelList` exist. */
	levelPointsByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `personalBestGlobalsByIdLevelList` relation. */
	personalBestGlobalsByIdLevelList?: LevelToManyPersonalBestGlobalFilter | null;
	/** Some related `personalBestGlobalsByIdLevelList` exist. */
	personalBestGlobalsByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `recordsByIdLevelList` relation. */
	recordsByIdLevelList?: LevelToManyRecordFilter | null;
	/** Some related `recordsByIdLevelList` exist. */
	recordsByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `upvotesByIdLevelList` relation. */
	upvotesByIdLevelList?: LevelToManyUpvoteFilter | null;
	/** Some related `upvotesByIdLevelList` exist. */
	upvotesByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `worldRecordGlobalsByIdLevelList` relation. */
	worldRecordGlobalsByIdLevelList?: LevelToManyWorldRecordGlobalFilter | null;
	/** Some related `worldRecordGlobalsByIdLevelList` exist. */
	worldRecordGlobalsByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Filter by the object’s `votesByIdLevelList` relation. */
	votesByIdLevelList?: LevelToManyVoteFilter | null;
	/** Some related `votesByIdLevelList` exist. */
	votesByIdLevelListExist?: Scalars['Boolean'] | null;
	/** Checks for all expressions in this list. */
	and?: LevelFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: LevelFilter[] | null;
	/** Negates the expression. */
	not?: LevelFilter | null;
}

/** A filter to be used against many `Favorite` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyFavoriteFilter {
	/** Every related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: FavoriteFilter | null;
	/** Some related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: FavoriteFilter | null;
	/** No related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: FavoriteFilter | null;
}

/** A filter to be used against many `LevelItem` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyLevelItemFilter {
	/** Every related `LevelItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: LevelItemFilter | null;
	/** Some related `LevelItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: LevelItemFilter | null;
	/** No related `LevelItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: LevelItemFilter | null;
}

/** A filter to be used against `LevelItem` object types. All fields are combined with a logical ‘and.’ */
export interface LevelItemFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `workshopId` field. */
	workshopId?: BigFloatFilter | null;
	/** Filter by the object’s `authorId` field. */
	authorId?: BigFloatFilter | null;
	/** Filter by the object’s `name` field. */
	name?: StringFilter | null;
	/** Filter by the object’s `imageUrl` field. */
	imageUrl?: StringFilter | null;
	/** Filter by the object’s `fileAuthor` field. */
	fileAuthor?: StringFilter | null;
	/** Filter by the object’s `fileUid` field. */
	fileUid?: StringFilter | null;
	/** Filter by the object’s `validationTimeAuthor` field. */
	validationTimeAuthor?: FloatFilter | null;
	/** Filter by the object’s `validationTimeGold` field. */
	validationTimeGold?: FloatFilter | null;
	/** Filter by the object’s `validationTimeSilver` field. */
	validationTimeSilver?: FloatFilter | null;
	/** Filter by the object’s `validationTimeBronze` field. */
	validationTimeBronze?: FloatFilter | null;
	/** Filter by the object’s `deleted` field. */
	deleted?: BooleanFilter | null;
	/** Filter by the object’s `createdAt` field. */
	createdAt?: DatetimeFilter | null;
	/** Filter by the object’s `updatedAt` field. */
	updatedAt?: DatetimeFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: LevelItemFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: LevelItemFilter[] | null;
	/** Negates the expression. */
	not?: LevelItemFilter | null;
}

/** A filter to be used against many `LevelMetadatum` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyLevelMetadatumFilter {
	/** Every related `LevelMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: LevelMetadatumFilter | null;
	/** Some related `LevelMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: LevelMetadatumFilter | null;
	/** No related `LevelMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: LevelMetadatumFilter | null;
}

/** A filter to be used against `LevelMetadatum` object types. All fields are combined with a logical ‘and.’ */
export interface LevelMetadatumFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `amountCheckpoints` field. */
	amountCheckpoints?: IntFilter | null;
	/** Filter by the object’s `amountFinishes` field. */
	amountFinishes?: IntFilter | null;
	/** Filter by the object’s `amountBlocks` field. */
	amountBlocks?: IntFilter | null;
	/** Filter by the object’s `typeGround` field. */
	typeGround?: IntFilter | null;
	/** Filter by the object’s `typeSkybox` field. */
	typeSkybox?: IntFilter | null;
	/** Filter by the object’s `blocks` field. */
	blocks?: JSONFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: LevelMetadatumFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: LevelMetadatumFilter[] | null;
	/** Negates the expression. */
	not?: LevelMetadatumFilter | null;
}

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export interface JSONFilter {
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: Scalars['Boolean'] | null;
	/** Equal to the specified value. */
	equalTo?: Scalars['JSON'] | null;
	/** Not equal to the specified value. */
	notEqualTo?: Scalars['JSON'] | null;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: Scalars['JSON'] | null;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: Scalars['JSON'] | null;
	/** Included in the specified list. */
	in?: Scalars['JSON'][] | null;
	/** Not included in the specified list. */
	notIn?: Scalars['JSON'][] | null;
	/** Less than the specified value. */
	lessThan?: Scalars['JSON'] | null;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: Scalars['JSON'] | null;
	/** Greater than the specified value. */
	greaterThan?: Scalars['JSON'] | null;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: Scalars['JSON'] | null;
	/** Contains the specified JSON. */
	contains?: Scalars['JSON'] | null;
	/** Contains the specified key. */
	containsKey?: Scalars['String'] | null;
	/** Contains all of the specified keys. */
	containsAllKeys?: Scalars['String'][] | null;
	/** Contains any of the specified keys. */
	containsAnyKeys?: Scalars['String'][] | null;
	/** Contained by the specified JSON. */
	containedBy?: Scalars['JSON'] | null;
}

/** A filter to be used against many `LevelPoint` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyLevelPointFilter {
	/** Every related `LevelPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: LevelPointFilter | null;
	/** Some related `LevelPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: LevelPointFilter | null;
	/** No related `LevelPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: LevelPointFilter | null;
}

/** A filter to be used against `LevelPoint` object types. All fields are combined with a logical ‘and.’ */
export interface LevelPointFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `points` field. */
	points?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: LevelPointFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: LevelPointFilter[] | null;
	/** Negates the expression. */
	not?: LevelPointFilter | null;
}

/** A filter to be used against many `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyPersonalBestGlobalFilter {
	/** Every related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: PersonalBestGlobalFilter | null;
	/** Some related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: PersonalBestGlobalFilter | null;
	/** No related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: PersonalBestGlobalFilter | null;
}

/** A filter to be used against many `Record` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyRecordFilter {
	/** Every related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: RecordFilter | null;
	/** Some related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: RecordFilter | null;
	/** No related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: RecordFilter | null;
}

/** A filter to be used against many `Upvote` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyUpvoteFilter {
	/** Every related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: UpvoteFilter | null;
	/** Some related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: UpvoteFilter | null;
	/** No related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: UpvoteFilter | null;
}

/** A filter to be used against `Upvote` object types. All fields are combined with a logical ‘and.’ */
export interface UpvoteFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `userByIdUser` relation. */
	userByIdUser?: UserFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: UpvoteFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: UpvoteFilter[] | null;
	/** Negates the expression. */
	not?: UpvoteFilter | null;
}

/** A filter to be used against many `WorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyWorldRecordGlobalFilter {
	/** Every related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: WorldRecordGlobalFilter | null;
	/** Some related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: WorldRecordGlobalFilter | null;
	/** No related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: WorldRecordGlobalFilter | null;
}

/** A filter to be used against many `Vote` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyVoteFilter {
	/** Every related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: VoteFilter | null;
	/** Some related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: VoteFilter | null;
	/** No related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: VoteFilter | null;
}

/** A filter to be used against `Vote` object types. All fields are combined with a logical ‘and.’ */
export interface VoteFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `value` field. */
	value?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `userByIdUser` relation. */
	userByIdUser?: UserFilter | null;
	/** Filter by the object’s `levelByIdLevel` relation. */
	levelByIdLevel?: LevelFilter | null;
	/** Checks for all expressions in this list. */
	and?: VoteFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: VoteFilter[] | null;
	/** Negates the expression. */
	not?: VoteFilter | null;
}

/** A filter to be used against many `UserPoint` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyUserPointFilter {
	/** Every related `UserPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: UserPointFilter | null;
	/** Some related `UserPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: UserPointFilter | null;
	/** No related `UserPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: UserPointFilter | null;
}

/** A filter to be used against `UserPoint` object types. All fields are combined with a logical ‘and.’ */
export interface UserPointFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `points` field. */
	points?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `rank` field. */
	rank?: IntFilter | null;
	/** Filter by the object’s `worldRecords` field. */
	worldRecords?: IntFilter | null;
	/** Filter by the object’s `userByIdUser` relation. */
	userByIdUser?: UserFilter | null;
	/** Checks for all expressions in this list. */
	and?: UserPointFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: UserPointFilter[] | null;
	/** Negates the expression. */
	not?: UserPointFilter | null;
}

/** A filter to be used against many `Record` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyRecordFilter {
	/** Every related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: RecordFilter | null;
	/** Some related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: RecordFilter | null;
	/** No related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: RecordFilter | null;
}

/** A filter to be used against many `Upvote` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyUpvoteFilter {
	/** Every related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: UpvoteFilter | null;
	/** Some related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: UpvoteFilter | null;
	/** No related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: UpvoteFilter | null;
}

/** A filter to be used against many `Vote` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyVoteFilter {
	/** Every related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	every?: VoteFilter | null;
	/** Some related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	some?: VoteFilter | null;
	/** No related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
	none?: VoteFilter | null;
}

/** A connection to a list of `PersonalBestGlobal` values. */
export interface PersonalBestGlobalsConnectionGenqlSelection {
	/** A list of `PersonalBestGlobal` objects. */
	nodes?: PersonalBestGlobalGenqlSelection;
	/** A list of edges which contains the `PersonalBestGlobal` and cursor to aid in pagination. */
	edges?: PersonalBestGlobalsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `PersonalBestGlobal` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface PersonalBestGlobalGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idRecord?: boolean | number;
	idUser?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `Record` that is related to this `PersonalBestGlobal`. */
	recordByIdRecord?: RecordGenqlSelection;
	/** Reads a single `User` that is related to this `PersonalBestGlobal`. */
	userByIdUser?: UserGenqlSelection;
	/** Reads a single `Level` that is related to this `PersonalBestGlobal`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface RecordGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idUser?: boolean | number;
	time?: boolean | number;
	gameVersion?: boolean | number;
	idLevel?: boolean | number;
	modVersion?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	splits?: boolean | number;
	speeds?: boolean | number;
	/** Reads a single `User` that is related to this `Record`. */
	userByIdUser?: UserGenqlSelection;
	/** Reads a single `Level` that is related to this `Record`. */
	levelByIdLevel?: LevelGenqlSelection;
	/** Reads and enables pagination through a set of `RecordMedia`. */
	recordMediasByIdRecord?: RecordMediasConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `RecordMedia`. */
			orderBy?: RecordMediasOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: RecordMediaCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: RecordMediaFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	personalBestGlobalsByIdRecord?: PersonalBestGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `PersonalBestGlobal`. */
			orderBy?: PersonalBestGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: PersonalBestGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: PersonalBestGlobalFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `WorldRecordGlobal`. */
	worldRecordGlobalsByIdRecord?: WorldRecordGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `WorldRecordGlobal`. */
			orderBy?: WorldRecordGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: WorldRecordGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: WorldRecordGlobalFilter | null;
		};
	};
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface LevelGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	hash?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads and enables pagination through a set of `Favorite`. */
	favoritesByIdLevel?: FavoritesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Favorite`. */
			orderBy?: FavoritesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: FavoriteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: FavoriteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `LevelItem`. */
	levelItemsByIdLevel?: LevelItemsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `LevelItem`. */
			orderBy?: LevelItemsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelItemCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelItemFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `LevelMetadatum`. */
	levelMetadataByIdLevel?: LevelMetadataConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `LevelMetadatum`. */
			orderBy?: LevelMetadataOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelMetadatumCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelMetadatumFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `LevelPoint`. */
	levelPointsByIdLevel?: LevelPointsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `LevelPoint`. */
			orderBy?: LevelPointsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: LevelPointCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: LevelPointFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `PersonalBestGlobal`. */
	personalBestGlobalsByIdLevel?: PersonalBestGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `PersonalBestGlobal`. */
			orderBy?: PersonalBestGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: PersonalBestGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: PersonalBestGlobalFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Record`. */
	recordsByIdLevel?: RecordsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Record`. */
			orderBy?: RecordsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: RecordCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: RecordFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Upvote`. */
	upvotesByIdLevel?: UpvotesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Upvote`. */
			orderBy?: UpvotesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: UpvoteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: UpvoteFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `WorldRecordGlobal`. */
	worldRecordGlobalsByIdLevel?: WorldRecordGlobalsConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `WorldRecordGlobal`. */
			orderBy?: WorldRecordGlobalsOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: WorldRecordGlobalCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: WorldRecordGlobalFilter | null;
		};
	};
	/** Reads and enables pagination through a set of `Vote`. */
	votesByIdLevel?: VotesConnectionGenqlSelection & {
		__args?: {
			/** Only read the first `n` values of the set. */
			first?: Scalars['Int'] | null;
			/** Only read the last `n` values of the set. */
			last?: Scalars['Int'] | null;
			/**
			 * Skip the first `n` values from our `after` cursor, an alternative to cursor
			 * based pagination. May not be used with `last`.
			 */
			offset?: Scalars['Int'] | null;
			/** Read all values in the set before (above) this cursor. */
			before?: Scalars['Cursor'] | null;
			/** Read all values in the set after (below) this cursor. */
			after?: Scalars['Cursor'] | null;
			/** The method to use when ordering `Vote`. */
			orderBy?: VotesOrderBy[] | null;
			/** A condition to be used in determining which values should be returned by the collection. */
			condition?: VoteCondition | null;
			/** A filter to be used in determining which values should be returned by the collection. */
			filter?: VoteFilter | null;
		};
	};
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A connection to a list of `LevelItem` values. */
export interface LevelItemsConnectionGenqlSelection {
	/** A list of `LevelItem` objects. */
	nodes?: LevelItemGenqlSelection;
	/** A list of edges which contains the `LevelItem` and cursor to aid in pagination. */
	edges?: LevelItemsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `LevelItem` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface LevelItemGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idLevel?: boolean | number;
	workshopId?: boolean | number;
	authorId?: boolean | number;
	name?: boolean | number;
	imageUrl?: boolean | number;
	fileAuthor?: boolean | number;
	fileUid?: boolean | number;
	validationTimeAuthor?: boolean | number;
	validationTimeGold?: boolean | number;
	validationTimeSilver?: boolean | number;
	validationTimeBronze?: boolean | number;
	deleted?: boolean | number;
	createdAt?: boolean | number;
	updatedAt?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `Level` that is related to this `LevelItem`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `LevelItem` edge in the connection. */
export interface LevelItemsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `LevelItem` at the end of the edge. */
	node?: LevelItemGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `LevelItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface LevelItemCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `workshopId` field. */
	workshopId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `authorId` field. */
	authorId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `name` field. */
	name?: Scalars['String'] | null;
	/** Checks for equality with the object’s `imageUrl` field. */
	imageUrl?: Scalars['String'] | null;
	/** Checks for equality with the object’s `fileAuthor` field. */
	fileAuthor?: Scalars['String'] | null;
	/** Checks for equality with the object’s `fileUid` field. */
	fileUid?: Scalars['String'] | null;
	/** Checks for equality with the object’s `validationTimeAuthor` field. */
	validationTimeAuthor?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `validationTimeGold` field. */
	validationTimeGold?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `validationTimeSilver` field. */
	validationTimeSilver?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `validationTimeBronze` field. */
	validationTimeBronze?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `deleted` field. */
	deleted?: Scalars['Boolean'] | null;
	/** Checks for equality with the object’s `createdAt` field. */
	createdAt?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `updatedAt` field. */
	updatedAt?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A connection to a list of `LevelMetadatum` values. */
export interface LevelMetadataConnectionGenqlSelection {
	/** A list of `LevelMetadatum` objects. */
	nodes?: LevelMetadatumGenqlSelection;
	/** A list of edges which contains the `LevelMetadatum` and cursor to aid in pagination. */
	edges?: LevelMetadataEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `LevelMetadatum` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface LevelMetadatumGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idLevel?: boolean | number;
	amountCheckpoints?: boolean | number;
	amountFinishes?: boolean | number;
	amountBlocks?: boolean | number;
	typeGround?: boolean | number;
	typeSkybox?: boolean | number;
	blocks?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `Level` that is related to this `LevelMetadatum`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `LevelMetadatum` edge in the connection. */
export interface LevelMetadataEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `LevelMetadatum` at the end of the edge. */
	node?: LevelMetadatumGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `LevelMetadatum` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface LevelMetadatumCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `amountCheckpoints` field. */
	amountCheckpoints?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `amountFinishes` field. */
	amountFinishes?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `amountBlocks` field. */
	amountBlocks?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `typeGround` field. */
	typeGround?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `typeSkybox` field. */
	typeSkybox?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `blocks` field. */
	blocks?: Scalars['JSON'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A connection to a list of `LevelPoint` values. */
export interface LevelPointsConnectionGenqlSelection {
	/** A list of `LevelPoint` objects. */
	nodes?: LevelPointGenqlSelection;
	/** A list of edges which contains the `LevelPoint` and cursor to aid in pagination. */
	edges?: LevelPointsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `LevelPoint` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface LevelPointGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	points?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `Level` that is related to this `LevelPoint`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `LevelPoint` edge in the connection. */
export interface LevelPointsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `LevelPoint` at the end of the edge. */
	node?: LevelPointGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `LevelPoint` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface LevelPointCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `points` field. */
	points?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/**
 * A condition to be used against `PersonalBestGlobal` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestGlobalCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idRecord` field. */
	idRecord?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A connection to a list of `Record` values. */
export interface RecordsConnectionGenqlSelection {
	/** A list of `Record` objects. */
	nodes?: RecordGenqlSelection;
	/** A list of edges which contains the `Record` and cursor to aid in pagination. */
	edges?: RecordsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `Record` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `Record` edge in the connection. */
export interface RecordsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `Record` at the end of the edge. */
	node?: RecordGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A condition to be used against `Record` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface RecordCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `time` field. */
	time?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `gameVersion` field. */
	gameVersion?: Scalars['String'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `modVersion` field. */
	modVersion?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `splits` field. */
	splits?: (Scalars['Float'] | null)[] | null;
	/** Checks for equality with the object’s `speeds` field. */
	speeds?: (Scalars['Float'] | null)[] | null;
}

/** A connection to a list of `Upvote` values. */
export interface UpvotesConnectionGenqlSelection {
	/** A list of `Upvote` objects. */
	nodes?: UpvoteGenqlSelection;
	/** A list of edges which contains the `Upvote` and cursor to aid in pagination. */
	edges?: UpvotesEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `Upvote` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface UpvoteGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idUser?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `User` that is related to this `Upvote`. */
	userByIdUser?: UserGenqlSelection;
	/** Reads a single `Level` that is related to this `Upvote`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `Upvote` edge in the connection. */
export interface UpvotesEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `Upvote` at the end of the edge. */
	node?: UpvoteGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A condition to be used against `Upvote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface UpvoteCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A connection to a list of `WorldRecordGlobal` values. */
export interface WorldRecordGlobalsConnectionGenqlSelection {
	/** A list of `WorldRecordGlobal` objects. */
	nodes?: WorldRecordGlobalGenqlSelection;
	/** A list of edges which contains the `WorldRecordGlobal` and cursor to aid in pagination. */
	edges?: WorldRecordGlobalsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `WorldRecordGlobal` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface WorldRecordGlobalGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idRecord?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `Record` that is related to this `WorldRecordGlobal`. */
	recordByIdRecord?: RecordGenqlSelection;
	/** Reads a single `Level` that is related to this `WorldRecordGlobal`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `WorldRecordGlobal` edge in the connection. */
export interface WorldRecordGlobalsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `WorldRecordGlobal` at the end of the edge. */
	node?: WorldRecordGlobalGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `WorldRecordGlobal` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface WorldRecordGlobalCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idRecord` field. */
	idRecord?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A connection to a list of `Vote` values. */
export interface VotesConnectionGenqlSelection {
	/** A list of `Vote` objects. */
	nodes?: VoteGenqlSelection;
	/** A list of edges which contains the `Vote` and cursor to aid in pagination. */
	edges?: VotesEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `Vote` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface VoteGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idUser?: boolean | number;
	idLevel?: boolean | number;
	value?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `User` that is related to this `Vote`. */
	userByIdUser?: UserGenqlSelection;
	/** Reads a single `Level` that is related to this `Vote`. */
	levelByIdLevel?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `Vote` edge in the connection. */
export interface VotesEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `Vote` at the end of the edge. */
	node?: VoteGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A condition to be used against `Vote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface VoteCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `value` field. */
	value?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A connection to a list of `RecordMedia` values. */
export interface RecordMediasConnectionGenqlSelection {
	/** A list of `RecordMedia` objects. */
	nodes?: RecordMediaGenqlSelection;
	/** A list of edges which contains the `RecordMedia` and cursor to aid in pagination. */
	edges?: RecordMediasEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `RecordMedia` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface RecordMediaGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idRecord?: boolean | number;
	ghostUrl?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	/** Reads a single `Record` that is related to this `RecordMedia`. */
	recordByIdRecord?: RecordGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `RecordMedia` edge in the connection. */
export interface RecordMediasEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `RecordMedia` at the end of the edge. */
	node?: RecordMediaGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `RecordMedia` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface RecordMediaCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idRecord` field. */
	idRecord?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `ghostUrl` field. */
	ghostUrl?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A `PersonalBestGlobal` edge in the connection. */
export interface PersonalBestGlobalsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `PersonalBestGlobal` at the end of the edge. */
	node?: PersonalBestGlobalGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A connection to a list of `UserPoint` values. */
export interface UserPointsConnectionGenqlSelection {
	/** A list of `UserPoint` objects. */
	nodes?: UserPointGenqlSelection;
	/** A list of edges which contains the `UserPoint` and cursor to aid in pagination. */
	edges?: UserPointsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `UserPoint` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface UserPointGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	idUser?: boolean | number;
	points?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	rank?: boolean | number;
	worldRecords?: boolean | number;
	/** Reads a single `User` that is related to this `UserPoint`. */
	userByIdUser?: UserGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `UserPoint` edge in the connection. */
export interface UserPointsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `UserPoint` at the end of the edge. */
	node?: UserPointGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `UserPoint` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface UserPointCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `points` field. */
	points?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `rank` field. */
	rank?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `worldRecords` field. */
	worldRecords?: Scalars['Int'] | null;
}

/** A `Favorite` edge in the connection. */
export interface FavoritesEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `Favorite` at the end of the edge. */
	node?: FavoriteGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A connection to a list of `Level` values. */
export interface LevelsConnectionGenqlSelection {
	/** A list of `Level` objects. */
	nodes?: LevelGenqlSelection;
	/** A list of edges which contains the `Level` and cursor to aid in pagination. */
	edges?: LevelsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `Level` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `Level` edge in the connection. */
export interface LevelsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `Level` at the end of the edge. */
	node?: LevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A condition to be used against `Level` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface LevelCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `hash` field. */
	hash?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A connection to a list of `LevelRequest` values. */
export interface LevelRequestsConnectionGenqlSelection {
	/** A list of `LevelRequest` objects. */
	nodes?: LevelRequestGenqlSelection;
	/** A list of edges which contains the `LevelRequest` and cursor to aid in pagination. */
	edges?: LevelRequestsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `LevelRequest` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface LevelRequestGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	workshopId?: boolean | number;
	uid?: boolean | number;
	hash?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `LevelRequest` edge in the connection. */
export interface LevelRequestsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `LevelRequest` at the end of the edge. */
	node?: LevelRequestGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `LevelRequest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface LevelRequestCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `workshopId` field. */
	workshopId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `uid` field. */
	uid?: Scalars['String'] | null;
	/** Checks for equality with the object’s `hash` field. */
	hash?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `LevelRequest` object types. All fields are combined with a logical ‘and.’ */
export interface LevelRequestFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `workshopId` field. */
	workshopId?: BigFloatFilter | null;
	/** Filter by the object’s `uid` field. */
	uid?: StringFilter | null;
	/** Filter by the object’s `hash` field. */
	hash?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: LevelRequestFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: LevelRequestFilter[] | null;
	/** Negates the expression. */
	not?: LevelRequestFilter | null;
}

/** A connection to a list of `SampledFavorite` values. */
export interface SampledFavoritesConnectionGenqlSelection {
	/** A list of `SampledFavorite` objects. */
	nodes?: SampledFavoriteGenqlSelection;
	/** A list of edges which contains the `SampledFavorite` and cursor to aid in pagination. */
	edges?: SampledFavoritesEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledFavorite` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledFavoriteGenqlSelection {
	id?: boolean | number;
	idUser?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	idLevel?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledFavorite` edge in the connection. */
export interface SampledFavoritesEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledFavorite` at the end of the edge. */
	node?: SampledFavoriteGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledFavorite` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledFavoriteCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
}

/** A filter to be used against `SampledFavorite` object types. All fields are combined with a logical ‘and.’ */
export interface SampledFavoriteFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledFavoriteFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledFavoriteFilter[] | null;
	/** Negates the expression. */
	not?: SampledFavoriteFilter | null;
}

/** A connection to a list of `SampledLevel` values. */
export interface SampledLevelsConnectionGenqlSelection {
	/** A list of `SampledLevel` objects. */
	nodes?: SampledLevelGenqlSelection;
	/** A list of edges which contains the `SampledLevel` and cursor to aid in pagination. */
	edges?: SampledLevelsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledLevel` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledLevelGenqlSelection {
	id?: boolean | number;
	hash?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledLevel` edge in the connection. */
export interface SampledLevelsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledLevel` at the end of the edge. */
	node?: SampledLevelGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledLevel` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `hash` field. */
	hash?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledLevel` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `hash` field. */
	hash?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledLevelFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledLevelFilter[] | null;
	/** Negates the expression. */
	not?: SampledLevelFilter | null;
}

/** A connection to a list of `SampledLevelItem` values. */
export interface SampledLevelItemsConnectionGenqlSelection {
	/** A list of `SampledLevelItem` objects. */
	nodes?: SampledLevelItemGenqlSelection;
	/** A list of edges which contains the `SampledLevelItem` and cursor to aid in pagination. */
	edges?: SampledLevelItemsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledLevelItem` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledLevelItemGenqlSelection {
	id?: boolean | number;
	idLevel?: boolean | number;
	workshopId?: boolean | number;
	authorId?: boolean | number;
	name?: boolean | number;
	imageUrl?: boolean | number;
	fileAuthor?: boolean | number;
	fileUid?: boolean | number;
	validationTimeAuthor?: boolean | number;
	validationTimeGold?: boolean | number;
	validationTimeSilver?: boolean | number;
	validationTimeBronze?: boolean | number;
	deleted?: boolean | number;
	createdAt?: boolean | number;
	updatedAt?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledLevelItem` edge in the connection. */
export interface SampledLevelItemsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledLevelItem` at the end of the edge. */
	node?: SampledLevelItemGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledLevelItem` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelItemCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `workshopId` field. */
	workshopId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `authorId` field. */
	authorId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `name` field. */
	name?: Scalars['String'] | null;
	/** Checks for equality with the object’s `imageUrl` field. */
	imageUrl?: Scalars['String'] | null;
	/** Checks for equality with the object’s `fileAuthor` field. */
	fileAuthor?: Scalars['String'] | null;
	/** Checks for equality with the object’s `fileUid` field. */
	fileUid?: Scalars['String'] | null;
	/** Checks for equality with the object’s `validationTimeAuthor` field. */
	validationTimeAuthor?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `validationTimeGold` field. */
	validationTimeGold?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `validationTimeSilver` field. */
	validationTimeSilver?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `validationTimeBronze` field. */
	validationTimeBronze?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `deleted` field. */
	deleted?: Scalars['Boolean'] | null;
	/** Checks for equality with the object’s `createdAt` field. */
	createdAt?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `updatedAt` field. */
	updatedAt?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledLevelItem` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelItemFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `workshopId` field. */
	workshopId?: BigFloatFilter | null;
	/** Filter by the object’s `authorId` field. */
	authorId?: BigFloatFilter | null;
	/** Filter by the object’s `name` field. */
	name?: StringFilter | null;
	/** Filter by the object’s `imageUrl` field. */
	imageUrl?: StringFilter | null;
	/** Filter by the object’s `fileAuthor` field. */
	fileAuthor?: StringFilter | null;
	/** Filter by the object’s `fileUid` field. */
	fileUid?: StringFilter | null;
	/** Filter by the object’s `validationTimeAuthor` field. */
	validationTimeAuthor?: FloatFilter | null;
	/** Filter by the object’s `validationTimeGold` field. */
	validationTimeGold?: FloatFilter | null;
	/** Filter by the object’s `validationTimeSilver` field. */
	validationTimeSilver?: FloatFilter | null;
	/** Filter by the object’s `validationTimeBronze` field. */
	validationTimeBronze?: FloatFilter | null;
	/** Filter by the object’s `deleted` field. */
	deleted?: BooleanFilter | null;
	/** Filter by the object’s `createdAt` field. */
	createdAt?: DatetimeFilter | null;
	/** Filter by the object’s `updatedAt` field. */
	updatedAt?: DatetimeFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledLevelItemFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledLevelItemFilter[] | null;
	/** Negates the expression. */
	not?: SampledLevelItemFilter | null;
}

/** A connection to a list of `SampledLevelMetadatum` values. */
export interface SampledLevelMetadataConnectionGenqlSelection {
	/** A list of `SampledLevelMetadatum` objects. */
	nodes?: SampledLevelMetadatumGenqlSelection;
	/** A list of edges which contains the `SampledLevelMetadatum` and cursor to aid in pagination. */
	edges?: SampledLevelMetadataEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledLevelMetadatum` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledLevelMetadatumGenqlSelection {
	id?: boolean | number;
	idLevel?: boolean | number;
	amountCheckpoints?: boolean | number;
	amountFinishes?: boolean | number;
	amountBlocks?: boolean | number;
	typeGround?: boolean | number;
	typeSkybox?: boolean | number;
	blocks?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledLevelMetadatum` edge in the connection. */
export interface SampledLevelMetadataEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledLevelMetadatum` at the end of the edge. */
	node?: SampledLevelMetadatumGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledLevelMetadatum` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelMetadatumCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `amountCheckpoints` field. */
	amountCheckpoints?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `amountFinishes` field. */
	amountFinishes?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `amountBlocks` field. */
	amountBlocks?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `typeGround` field. */
	typeGround?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `typeSkybox` field. */
	typeSkybox?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `blocks` field. */
	blocks?: Scalars['JSON'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledLevelMetadatum` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelMetadatumFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `amountCheckpoints` field. */
	amountCheckpoints?: IntFilter | null;
	/** Filter by the object’s `amountFinishes` field. */
	amountFinishes?: IntFilter | null;
	/** Filter by the object’s `amountBlocks` field. */
	amountBlocks?: IntFilter | null;
	/** Filter by the object’s `typeGround` field. */
	typeGround?: IntFilter | null;
	/** Filter by the object’s `typeSkybox` field. */
	typeSkybox?: IntFilter | null;
	/** Filter by the object’s `blocks` field. */
	blocks?: JSONFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledLevelMetadatumFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledLevelMetadatumFilter[] | null;
	/** Negates the expression. */
	not?: SampledLevelMetadatumFilter | null;
}

/** A connection to a list of `SampledLevelPoint` values. */
export interface SampledLevelPointsConnectionGenqlSelection {
	/** A list of `SampledLevelPoint` objects. */
	nodes?: SampledLevelPointGenqlSelection;
	/** A list of edges which contains the `SampledLevelPoint` and cursor to aid in pagination. */
	edges?: SampledLevelPointsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledLevelPoint` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledLevelPointGenqlSelection {
	id?: boolean | number;
	points?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledLevelPoint` edge in the connection. */
export interface SampledLevelPointsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledLevelPoint` at the end of the edge. */
	node?: SampledLevelPointGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledLevelPoint` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelPointCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `points` field. */
	points?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledLevelPoint` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelPointFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `points` field. */
	points?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledLevelPointFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledLevelPointFilter[] | null;
	/** Negates the expression. */
	not?: SampledLevelPointFilter | null;
}

/** A connection to a list of `SampledLevelRequest` values. */
export interface SampledLevelRequestsConnectionGenqlSelection {
	/** A list of `SampledLevelRequest` objects. */
	nodes?: SampledLevelRequestGenqlSelection;
	/** A list of edges which contains the `SampledLevelRequest` and cursor to aid in pagination. */
	edges?: SampledLevelRequestsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledLevelRequest` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledLevelRequestGenqlSelection {
	id?: boolean | number;
	workshopId?: boolean | number;
	uid?: boolean | number;
	hash?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledLevelRequest` edge in the connection. */
export interface SampledLevelRequestsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledLevelRequest` at the end of the edge. */
	node?: SampledLevelRequestGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledLevelRequest` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelRequestCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `workshopId` field. */
	workshopId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `uid` field. */
	uid?: Scalars['String'] | null;
	/** Checks for equality with the object’s `hash` field. */
	hash?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledLevelRequest` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelRequestFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `workshopId` field. */
	workshopId?: BigFloatFilter | null;
	/** Filter by the object’s `uid` field. */
	uid?: StringFilter | null;
	/** Filter by the object’s `hash` field. */
	hash?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledLevelRequestFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledLevelRequestFilter[] | null;
	/** Negates the expression. */
	not?: SampledLevelRequestFilter | null;
}

/** A connection to a list of `SampledPersonalBestGlobal` values. */
export interface SampledPersonalBestGlobalsConnectionGenqlSelection {
	/** A list of `SampledPersonalBestGlobal` objects. */
	nodes?: SampledPersonalBestGlobalGenqlSelection;
	/** A list of edges which contains the `SampledPersonalBestGlobal` and cursor to aid in pagination. */
	edges?: SampledPersonalBestGlobalsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledPersonalBestGlobal` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledPersonalBestGlobalGenqlSelection {
	id?: boolean | number;
	idRecord?: boolean | number;
	idUser?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledPersonalBestGlobal` edge in the connection. */
export interface SampledPersonalBestGlobalsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledPersonalBestGlobal` at the end of the edge. */
	node?: SampledPersonalBestGlobalGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledPersonalBestGlobal` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledPersonalBestGlobalCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idRecord` field. */
	idRecord?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledPersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface SampledPersonalBestGlobalFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idRecord` field. */
	idRecord?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledPersonalBestGlobalFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledPersonalBestGlobalFilter[] | null;
	/** Negates the expression. */
	not?: SampledPersonalBestGlobalFilter | null;
}

/** A connection to a list of `SampledRecord` values. */
export interface SampledRecordsConnectionGenqlSelection {
	/** A list of `SampledRecord` objects. */
	nodes?: SampledRecordGenqlSelection;
	/** A list of edges which contains the `SampledRecord` and cursor to aid in pagination. */
	edges?: SampledRecordsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledRecord` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledRecordGenqlSelection {
	id?: boolean | number;
	idUser?: boolean | number;
	time?: boolean | number;
	gameVersion?: boolean | number;
	idLevel?: boolean | number;
	modVersion?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	splits?: boolean | number;
	speeds?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledRecord` edge in the connection. */
export interface SampledRecordsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledRecord` at the end of the edge. */
	node?: SampledRecordGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledRecord` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledRecordCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `time` field. */
	time?: Scalars['Float'] | null;
	/** Checks for equality with the object’s `gameVersion` field. */
	gameVersion?: Scalars['String'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `modVersion` field. */
	modVersion?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `splits` field. */
	splits?: (Scalars['Float'] | null)[] | null;
	/** Checks for equality with the object’s `speeds` field. */
	speeds?: (Scalars['Float'] | null)[] | null;
}

/** A filter to be used against `SampledRecord` object types. All fields are combined with a logical ‘and.’ */
export interface SampledRecordFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `time` field. */
	time?: FloatFilter | null;
	/** Filter by the object’s `gameVersion` field. */
	gameVersion?: StringFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `modVersion` field. */
	modVersion?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `splits` field. */
	splits?: FloatListFilter | null;
	/** Filter by the object’s `speeds` field. */
	speeds?: FloatListFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledRecordFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledRecordFilter[] | null;
	/** Negates the expression. */
	not?: SampledRecordFilter | null;
}

/** A connection to a list of `SampledRecordMedia` values. */
export interface SampledRecordMediasConnectionGenqlSelection {
	/** A list of `SampledRecordMedia` objects. */
	nodes?: SampledRecordMediaGenqlSelection;
	/** A list of edges which contains the `SampledRecordMedia` and cursor to aid in pagination. */
	edges?: SampledRecordMediasEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledRecordMedia` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledRecordMediaGenqlSelection {
	id?: boolean | number;
	idRecord?: boolean | number;
	ghostUrl?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledRecordMedia` edge in the connection. */
export interface SampledRecordMediasEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledRecordMedia` at the end of the edge. */
	node?: SampledRecordMediaGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledRecordMedia` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledRecordMediaCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idRecord` field. */
	idRecord?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `ghostUrl` field. */
	ghostUrl?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledRecordMedia` object types. All fields are combined with a logical ‘and.’ */
export interface SampledRecordMediaFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idRecord` field. */
	idRecord?: IntFilter | null;
	/** Filter by the object’s `ghostUrl` field. */
	ghostUrl?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledRecordMediaFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledRecordMediaFilter[] | null;
	/** Negates the expression. */
	not?: SampledRecordMediaFilter | null;
}

/** A connection to a list of `SampledUpvote` values. */
export interface SampledUpvotesConnectionGenqlSelection {
	/** A list of `SampledUpvote` objects. */
	nodes?: SampledUpvoteGenqlSelection;
	/** A list of edges which contains the `SampledUpvote` and cursor to aid in pagination. */
	edges?: SampledUpvotesEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledUpvote` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledUpvoteGenqlSelection {
	id?: boolean | number;
	idUser?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledUpvote` edge in the connection. */
export interface SampledUpvotesEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledUpvote` at the end of the edge. */
	node?: SampledUpvoteGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledUpvote` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledUpvoteCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledUpvote` object types. All fields are combined with a logical ‘and.’ */
export interface SampledUpvoteFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledUpvoteFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledUpvoteFilter[] | null;
	/** Negates the expression. */
	not?: SampledUpvoteFilter | null;
}

/** A connection to a list of `SampledUser` values. */
export interface SampledUsersConnectionGenqlSelection {
	/** A list of `SampledUser` objects. */
	nodes?: SampledUserGenqlSelection;
	/** A list of edges which contains the `SampledUser` and cursor to aid in pagination. */
	edges?: SampledUsersEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledUser` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledUserGenqlSelection {
	id?: boolean | number;
	steamName?: boolean | number;
	banned?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	steamId?: boolean | number;
	discordId?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledUser` edge in the connection. */
export interface SampledUsersEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledUser` at the end of the edge. */
	node?: SampledUserGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledUser` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface SampledUserCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `steamName` field. */
	steamName?: Scalars['String'] | null;
	/** Checks for equality with the object’s `banned` field. */
	banned?: Scalars['Boolean'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `steamId` field. */
	steamId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `discordId` field. */
	discordId?: Scalars['BigFloat'] | null;
}

/** A filter to be used against `SampledUser` object types. All fields are combined with a logical ‘and.’ */
export interface SampledUserFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `steamName` field. */
	steamName?: StringFilter | null;
	/** Filter by the object’s `banned` field. */
	banned?: BooleanFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `steamId` field. */
	steamId?: BigFloatFilter | null;
	/** Filter by the object’s `discordId` field. */
	discordId?: BigFloatFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledUserFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledUserFilter[] | null;
	/** Negates the expression. */
	not?: SampledUserFilter | null;
}

/** A connection to a list of `SampledUserPoint` values. */
export interface SampledUserPointsConnectionGenqlSelection {
	/** A list of `SampledUserPoint` objects. */
	nodes?: SampledUserPointGenqlSelection;
	/** A list of edges which contains the `SampledUserPoint` and cursor to aid in pagination. */
	edges?: SampledUserPointsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledUserPoint` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledUserPointGenqlSelection {
	id?: boolean | number;
	idUser?: boolean | number;
	points?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	rank?: boolean | number;
	worldRecords?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledUserPoint` edge in the connection. */
export interface SampledUserPointsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledUserPoint` at the end of the edge. */
	node?: SampledUserPointGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledUserPoint` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledUserPointCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idUser` field. */
	idUser?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `points` field. */
	points?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `rank` field. */
	rank?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `worldRecords` field. */
	worldRecords?: Scalars['Int'] | null;
}

/** A filter to be used against `SampledUserPoint` object types. All fields are combined with a logical ‘and.’ */
export interface SampledUserPointFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idUser` field. */
	idUser?: IntFilter | null;
	/** Filter by the object’s `points` field. */
	points?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `rank` field. */
	rank?: IntFilter | null;
	/** Filter by the object’s `worldRecords` field. */
	worldRecords?: IntFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledUserPointFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledUserPointFilter[] | null;
	/** Negates the expression. */
	not?: SampledUserPointFilter | null;
}

/** A connection to a list of `SampledVersion` values. */
export interface SampledVersionsConnectionGenqlSelection {
	/** A list of `SampledVersion` objects. */
	nodes?: SampledVersionGenqlSelection;
	/** A list of edges which contains the `SampledVersion` and cursor to aid in pagination. */
	edges?: SampledVersionsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledVersion` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledVersionGenqlSelection {
	id?: boolean | number;
	minimum?: boolean | number;
	latest?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledVersion` edge in the connection. */
export interface SampledVersionsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledVersion` at the end of the edge. */
	node?: SampledVersionGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledVersion` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledVersionCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `minimum` field. */
	minimum?: Scalars['String'] | null;
	/** Checks for equality with the object’s `latest` field. */
	latest?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledVersion` object types. All fields are combined with a logical ‘and.’ */
export interface SampledVersionFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `minimum` field. */
	minimum?: StringFilter | null;
	/** Filter by the object’s `latest` field. */
	latest?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledVersionFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledVersionFilter[] | null;
	/** Negates the expression. */
	not?: SampledVersionFilter | null;
}

/** A connection to a list of `SampledWorldRecordGlobal` values. */
export interface SampledWorldRecordGlobalsConnectionGenqlSelection {
	/** A list of `SampledWorldRecordGlobal` objects. */
	nodes?: SampledWorldRecordGlobalGenqlSelection;
	/** A list of edges which contains the `SampledWorldRecordGlobal` and cursor to aid in pagination. */
	edges?: SampledWorldRecordGlobalsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `SampledWorldRecordGlobal` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface SampledWorldRecordGlobalGenqlSelection {
	id?: boolean | number;
	idRecord?: boolean | number;
	idLevel?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `SampledWorldRecordGlobal` edge in the connection. */
export interface SampledWorldRecordGlobalsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `SampledWorldRecordGlobal` at the end of the edge. */
	node?: SampledWorldRecordGlobalGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/**
 * A condition to be used against `SampledWorldRecordGlobal` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledWorldRecordGlobalCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idRecord` field. */
	idRecord?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `idLevel` field. */
	idLevel?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `SampledWorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface SampledWorldRecordGlobalFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idRecord` field. */
	idRecord?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: SampledWorldRecordGlobalFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: SampledWorldRecordGlobalFilter[] | null;
	/** Negates the expression. */
	not?: SampledWorldRecordGlobalFilter | null;
}

/** A connection to a list of `User` values. */
export interface UsersConnectionGenqlSelection {
	/** A list of `User` objects. */
	nodes?: UserGenqlSelection;
	/** A list of edges which contains the `User` and cursor to aid in pagination. */
	edges?: UsersEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `User` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `User` edge in the connection. */
export interface UsersEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `User` at the end of the edge. */
	node?: UserGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface UserCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `steamName` field. */
	steamName?: Scalars['String'] | null;
	/** Checks for equality with the object’s `banned` field. */
	banned?: Scalars['Boolean'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `steamId` field. */
	steamId?: Scalars['BigFloat'] | null;
	/** Checks for equality with the object’s `discordId` field. */
	discordId?: Scalars['BigFloat'] | null;
}

/** A connection to a list of `Version` values. */
export interface VersionsConnectionGenqlSelection {
	/** A list of `Version` objects. */
	nodes?: VersionGenqlSelection;
	/** A list of edges which contains the `Version` and cursor to aid in pagination. */
	edges?: VersionsEdgeGenqlSelection;
	/** Information to aid in pagination. */
	pageInfo?: PageInfoGenqlSelection;
	/** The count of *all* `Version` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

export interface VersionGenqlSelection {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId?: boolean | number;
	id?: boolean | number;
	minimum?: boolean | number;
	latest?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `Version` edge in the connection. */
export interface VersionsEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `Version` at the end of the edge. */
	node?: VersionGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A condition to be used against `Version` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface VersionCondition {
	/** Checks for equality with the object’s `id` field. */
	id?: Scalars['Int'] | null;
	/** Checks for equality with the object’s `minimum` field. */
	minimum?: Scalars['String'] | null;
	/** Checks for equality with the object’s `latest` field. */
	latest?: Scalars['String'] | null;
	/** Checks for equality with the object’s `dateCreated` field. */
	dateCreated?: Scalars['Datetime'] | null;
	/** Checks for equality with the object’s `dateUpdated` field. */
	dateUpdated?: Scalars['Datetime'] | null;
}

/** A filter to be used against `Version` object types. All fields are combined with a logical ‘and.’ */
export interface VersionFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `minimum` field. */
	minimum?: StringFilter | null;
	/** Filter by the object’s `latest` field. */
	latest?: StringFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Checks for all expressions in this list. */
	and?: VersionFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: VersionFilter[] | null;
	/** Negates the expression. */
	not?: VersionFilter | null;
}

/** A connection to a list of `ZRtmRecord` values. */
export interface ZRtmConnectionGenqlSelection {
	/** A list of `ZRtmRecord` objects. */
	nodes?: ZRtmRecordGenqlSelection;
	/** A list of edges which contains the `ZRtmRecord` and cursor to aid in pagination. */
	edges?: ZRtmEdgeGenqlSelection;
	/** The count of *all* `ZRtmRecord` you could get from the connection. */
	totalCount?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** The return type of our `zRtm` query. */
export interface ZRtmRecordGenqlSelection {
	id?: boolean | number;
	idLevel?: boolean | number;
	workshopId?: boolean | number;
	authorId?: boolean | number;
	name?: boolean | number;
	imageUrl?: boolean | number;
	fileAuthor?: boolean | number;
	fileUid?: boolean | number;
	validationTimeAuthor?: boolean | number;
	validationTimeGold?: boolean | number;
	validationTimeSilver?: boolean | number;
	validationTimeBronze?: boolean | number;
	deleted?: boolean | number;
	createdAt?: boolean | number;
	updatedAt?: boolean | number;
	dateCreated?: boolean | number;
	dateUpdated?: boolean | number;
	amountCheckpoints?: boolean | number;
	amountFinishes?: boolean | number;
	amountBlocks?: boolean | number;
	numRecords?: boolean | number;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A `ZRtmRecord` edge in the connection. */
export interface ZRtmEdgeGenqlSelection {
	/** A cursor for use in pagination. */
	cursor?: boolean | number;
	/** The `ZRtmRecord` at the end of the edge. */
	node?: ZRtmRecordGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** A filter to be used against `ZRtmRecord` object types. All fields are combined with a logical ‘and.’ */
export interface ZRtmRecordFilter {
	/** Filter by the object’s `id` field. */
	id?: IntFilter | null;
	/** Filter by the object’s `idLevel` field. */
	idLevel?: IntFilter | null;
	/** Filter by the object’s `workshopId` field. */
	workshopId?: BigFloatFilter | null;
	/** Filter by the object’s `authorId` field. */
	authorId?: BigFloatFilter | null;
	/** Filter by the object’s `name` field. */
	name?: StringFilter | null;
	/** Filter by the object’s `imageUrl` field. */
	imageUrl?: StringFilter | null;
	/** Filter by the object’s `fileAuthor` field. */
	fileAuthor?: StringFilter | null;
	/** Filter by the object’s `fileUid` field. */
	fileUid?: StringFilter | null;
	/** Filter by the object’s `validationTimeAuthor` field. */
	validationTimeAuthor?: FloatFilter | null;
	/** Filter by the object’s `validationTimeGold` field. */
	validationTimeGold?: FloatFilter | null;
	/** Filter by the object’s `validationTimeSilver` field. */
	validationTimeSilver?: FloatFilter | null;
	/** Filter by the object’s `validationTimeBronze` field. */
	validationTimeBronze?: FloatFilter | null;
	/** Filter by the object’s `deleted` field. */
	deleted?: BooleanFilter | null;
	/** Filter by the object’s `createdAt` field. */
	createdAt?: DatetimeFilter | null;
	/** Filter by the object’s `updatedAt` field. */
	updatedAt?: DatetimeFilter | null;
	/** Filter by the object’s `dateCreated` field. */
	dateCreated?: DatetimeFilter | null;
	/** Filter by the object’s `dateUpdated` field. */
	dateUpdated?: DatetimeFilter | null;
	/** Filter by the object’s `amountCheckpoints` field. */
	amountCheckpoints?: IntFilter | null;
	/** Filter by the object’s `amountFinishes` field. */
	amountFinishes?: IntFilter | null;
	/** Filter by the object’s `amountBlocks` field. */
	amountBlocks?: IntFilter | null;
	/** Filter by the object’s `numRecords` field. */
	numRecords?: BigIntFilter | null;
	/** Checks for all expressions in this list. */
	and?: ZRtmRecordFilter[] | null;
	/** Checks for any expressions in this list. */
	or?: ZRtmRecordFilter[] | null;
	/** Negates the expression. */
	not?: ZRtmRecordFilter | null;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface MutationGenqlSelection {
	updateWorldRecordGlobal?: UpdateWorldRecordGlobalPayloadGenqlSelection & {
		__args: {
			/** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
			input: UpdateWorldRecordGlobalInput;
		};
	};
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** The output of our `updateWorldRecordGlobal` mutation. */
export interface UpdateWorldRecordGlobalPayloadGenqlSelection {
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: boolean | number;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: QueryGenqlSelection;
	__typename?: boolean | number;
	__scalar?: boolean | number;
}

/** All input for the `updateWorldRecordGlobal` mutation. */
export interface UpdateWorldRecordGlobalInput {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: Scalars['String'] | null;
}

const Query_possibleTypes: string[] = ['Query'];
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"');
	return Query_possibleTypes.includes(obj.__typename);
};

const Node_possibleTypes: string[] = [
	'Query',
	'Favorite',
	'User',
	'PersonalBestGlobal',
	'Record',
	'Level',
	'LevelItem',
	'LevelMetadatum',
	'LevelPoint',
	'Upvote',
	'WorldRecordGlobal',
	'Vote',
	'RecordMedia',
	'UserPoint',
	'LevelRequest',
	'Version',
];
export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isNode"');
	return Node_possibleTypes.includes(obj.__typename);
};

const VersionInfosConnection_possibleTypes: string[] = [
	'VersionInfosConnection',
];
export const isVersionInfosConnection = (
	obj?: { __typename?: any } | null,
): obj is VersionInfosConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isVersionInfosConnection"');
	return VersionInfosConnection_possibleTypes.includes(obj.__typename);
};

const VersionInfo_possibleTypes: string[] = ['VersionInfo'];
export const isVersionInfo = (
	obj?: { __typename?: any } | null,
): obj is VersionInfo => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isVersionInfo"');
	return VersionInfo_possibleTypes.includes(obj.__typename);
};

const VersionInfosEdge_possibleTypes: string[] = ['VersionInfosEdge'];
export const isVersionInfosEdge = (
	obj?: { __typename?: any } | null,
): obj is VersionInfosEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isVersionInfosEdge"');
	return VersionInfosEdge_possibleTypes.includes(obj.__typename);
};

const PageInfo_possibleTypes: string[] = ['PageInfo'];
export const isPageInfo = (
	obj?: { __typename?: any } | null,
): obj is PageInfo => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isPageInfo"');
	return PageInfo_possibleTypes.includes(obj.__typename);
};

const FavoritesConnection_possibleTypes: string[] = ['FavoritesConnection'];
export const isFavoritesConnection = (
	obj?: { __typename?: any } | null,
): obj is FavoritesConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isFavoritesConnection"');
	return FavoritesConnection_possibleTypes.includes(obj.__typename);
};

const Favorite_possibleTypes: string[] = ['Favorite'];
export const isFavorite = (
	obj?: { __typename?: any } | null,
): obj is Favorite => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isFavorite"');
	return Favorite_possibleTypes.includes(obj.__typename);
};

const User_possibleTypes: string[] = ['User'];
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isUser"');
	return User_possibleTypes.includes(obj.__typename);
};

const PersonalBestGlobalsConnection_possibleTypes: string[] = [
	'PersonalBestGlobalsConnection',
];
export const isPersonalBestGlobalsConnection = (
	obj?: { __typename?: any } | null,
): obj is PersonalBestGlobalsConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isPersonalBestGlobalsConnection"',
		);
	return PersonalBestGlobalsConnection_possibleTypes.includes(obj.__typename);
};

const PersonalBestGlobal_possibleTypes: string[] = ['PersonalBestGlobal'];
export const isPersonalBestGlobal = (
	obj?: { __typename?: any } | null,
): obj is PersonalBestGlobal => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isPersonalBestGlobal"');
	return PersonalBestGlobal_possibleTypes.includes(obj.__typename);
};

const Record_possibleTypes: string[] = ['Record'];
export const isRecord = (obj?: { __typename?: any } | null): obj is Record => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isRecord"');
	return Record_possibleTypes.includes(obj.__typename);
};

const Level_possibleTypes: string[] = ['Level'];
export const isLevel = (obj?: { __typename?: any } | null): obj is Level => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isLevel"');
	return Level_possibleTypes.includes(obj.__typename);
};

const LevelItemsConnection_possibleTypes: string[] = ['LevelItemsConnection'];
export const isLevelItemsConnection = (
	obj?: { __typename?: any } | null,
): obj is LevelItemsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelItemsConnection"');
	return LevelItemsConnection_possibleTypes.includes(obj.__typename);
};

const LevelItem_possibleTypes: string[] = ['LevelItem'];
export const isLevelItem = (
	obj?: { __typename?: any } | null,
): obj is LevelItem => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelItem"');
	return LevelItem_possibleTypes.includes(obj.__typename);
};

const LevelItemsEdge_possibleTypes: string[] = ['LevelItemsEdge'];
export const isLevelItemsEdge = (
	obj?: { __typename?: any } | null,
): obj is LevelItemsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelItemsEdge"');
	return LevelItemsEdge_possibleTypes.includes(obj.__typename);
};

const LevelMetadataConnection_possibleTypes: string[] = [
	'LevelMetadataConnection',
];
export const isLevelMetadataConnection = (
	obj?: { __typename?: any } | null,
): obj is LevelMetadataConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelMetadataConnection"');
	return LevelMetadataConnection_possibleTypes.includes(obj.__typename);
};

const LevelMetadatum_possibleTypes: string[] = ['LevelMetadatum'];
export const isLevelMetadatum = (
	obj?: { __typename?: any } | null,
): obj is LevelMetadatum => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelMetadatum"');
	return LevelMetadatum_possibleTypes.includes(obj.__typename);
};

const LevelMetadataEdge_possibleTypes: string[] = ['LevelMetadataEdge'];
export const isLevelMetadataEdge = (
	obj?: { __typename?: any } | null,
): obj is LevelMetadataEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelMetadataEdge"');
	return LevelMetadataEdge_possibleTypes.includes(obj.__typename);
};

const LevelPointsConnection_possibleTypes: string[] = ['LevelPointsConnection'];
export const isLevelPointsConnection = (
	obj?: { __typename?: any } | null,
): obj is LevelPointsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelPointsConnection"');
	return LevelPointsConnection_possibleTypes.includes(obj.__typename);
};

const LevelPoint_possibleTypes: string[] = ['LevelPoint'];
export const isLevelPoint = (
	obj?: { __typename?: any } | null,
): obj is LevelPoint => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelPoint"');
	return LevelPoint_possibleTypes.includes(obj.__typename);
};

const LevelPointsEdge_possibleTypes: string[] = ['LevelPointsEdge'];
export const isLevelPointsEdge = (
	obj?: { __typename?: any } | null,
): obj is LevelPointsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelPointsEdge"');
	return LevelPointsEdge_possibleTypes.includes(obj.__typename);
};

const RecordsConnection_possibleTypes: string[] = ['RecordsConnection'];
export const isRecordsConnection = (
	obj?: { __typename?: any } | null,
): obj is RecordsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isRecordsConnection"');
	return RecordsConnection_possibleTypes.includes(obj.__typename);
};

const RecordsEdge_possibleTypes: string[] = ['RecordsEdge'];
export const isRecordsEdge = (
	obj?: { __typename?: any } | null,
): obj is RecordsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isRecordsEdge"');
	return RecordsEdge_possibleTypes.includes(obj.__typename);
};

const UpvotesConnection_possibleTypes: string[] = ['UpvotesConnection'];
export const isUpvotesConnection = (
	obj?: { __typename?: any } | null,
): obj is UpvotesConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isUpvotesConnection"');
	return UpvotesConnection_possibleTypes.includes(obj.__typename);
};

const Upvote_possibleTypes: string[] = ['Upvote'];
export const isUpvote = (obj?: { __typename?: any } | null): obj is Upvote => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isUpvote"');
	return Upvote_possibleTypes.includes(obj.__typename);
};

const UpvotesEdge_possibleTypes: string[] = ['UpvotesEdge'];
export const isUpvotesEdge = (
	obj?: { __typename?: any } | null,
): obj is UpvotesEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isUpvotesEdge"');
	return UpvotesEdge_possibleTypes.includes(obj.__typename);
};

const WorldRecordGlobalsConnection_possibleTypes: string[] = [
	'WorldRecordGlobalsConnection',
];
export const isWorldRecordGlobalsConnection = (
	obj?: { __typename?: any } | null,
): obj is WorldRecordGlobalsConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isWorldRecordGlobalsConnection"',
		);
	return WorldRecordGlobalsConnection_possibleTypes.includes(obj.__typename);
};

const WorldRecordGlobal_possibleTypes: string[] = ['WorldRecordGlobal'];
export const isWorldRecordGlobal = (
	obj?: { __typename?: any } | null,
): obj is WorldRecordGlobal => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isWorldRecordGlobal"');
	return WorldRecordGlobal_possibleTypes.includes(obj.__typename);
};

const WorldRecordGlobalsEdge_possibleTypes: string[] = [
	'WorldRecordGlobalsEdge',
];
export const isWorldRecordGlobalsEdge = (
	obj?: { __typename?: any } | null,
): obj is WorldRecordGlobalsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isWorldRecordGlobalsEdge"');
	return WorldRecordGlobalsEdge_possibleTypes.includes(obj.__typename);
};

const VotesConnection_possibleTypes: string[] = ['VotesConnection'];
export const isVotesConnection = (
	obj?: { __typename?: any } | null,
): obj is VotesConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isVotesConnection"');
	return VotesConnection_possibleTypes.includes(obj.__typename);
};

const Vote_possibleTypes: string[] = ['Vote'];
export const isVote = (obj?: { __typename?: any } | null): obj is Vote => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isVote"');
	return Vote_possibleTypes.includes(obj.__typename);
};

const VotesEdge_possibleTypes: string[] = ['VotesEdge'];
export const isVotesEdge = (
	obj?: { __typename?: any } | null,
): obj is VotesEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isVotesEdge"');
	return VotesEdge_possibleTypes.includes(obj.__typename);
};

const RecordMediasConnection_possibleTypes: string[] = [
	'RecordMediasConnection',
];
export const isRecordMediasConnection = (
	obj?: { __typename?: any } | null,
): obj is RecordMediasConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isRecordMediasConnection"');
	return RecordMediasConnection_possibleTypes.includes(obj.__typename);
};

const RecordMedia_possibleTypes: string[] = ['RecordMedia'];
export const isRecordMedia = (
	obj?: { __typename?: any } | null,
): obj is RecordMedia => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isRecordMedia"');
	return RecordMedia_possibleTypes.includes(obj.__typename);
};

const RecordMediasEdge_possibleTypes: string[] = ['RecordMediasEdge'];
export const isRecordMediasEdge = (
	obj?: { __typename?: any } | null,
): obj is RecordMediasEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isRecordMediasEdge"');
	return RecordMediasEdge_possibleTypes.includes(obj.__typename);
};

const PersonalBestGlobalsEdge_possibleTypes: string[] = [
	'PersonalBestGlobalsEdge',
];
export const isPersonalBestGlobalsEdge = (
	obj?: { __typename?: any } | null,
): obj is PersonalBestGlobalsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isPersonalBestGlobalsEdge"');
	return PersonalBestGlobalsEdge_possibleTypes.includes(obj.__typename);
};

const UserPointsConnection_possibleTypes: string[] = ['UserPointsConnection'];
export const isUserPointsConnection = (
	obj?: { __typename?: any } | null,
): obj is UserPointsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isUserPointsConnection"');
	return UserPointsConnection_possibleTypes.includes(obj.__typename);
};

const UserPoint_possibleTypes: string[] = ['UserPoint'];
export const isUserPoint = (
	obj?: { __typename?: any } | null,
): obj is UserPoint => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isUserPoint"');
	return UserPoint_possibleTypes.includes(obj.__typename);
};

const UserPointsEdge_possibleTypes: string[] = ['UserPointsEdge'];
export const isUserPointsEdge = (
	obj?: { __typename?: any } | null,
): obj is UserPointsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isUserPointsEdge"');
	return UserPointsEdge_possibleTypes.includes(obj.__typename);
};

const FavoritesEdge_possibleTypes: string[] = ['FavoritesEdge'];
export const isFavoritesEdge = (
	obj?: { __typename?: any } | null,
): obj is FavoritesEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isFavoritesEdge"');
	return FavoritesEdge_possibleTypes.includes(obj.__typename);
};

const LevelsConnection_possibleTypes: string[] = ['LevelsConnection'];
export const isLevelsConnection = (
	obj?: { __typename?: any } | null,
): obj is LevelsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelsConnection"');
	return LevelsConnection_possibleTypes.includes(obj.__typename);
};

const LevelsEdge_possibleTypes: string[] = ['LevelsEdge'];
export const isLevelsEdge = (
	obj?: { __typename?: any } | null,
): obj is LevelsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelsEdge"');
	return LevelsEdge_possibleTypes.includes(obj.__typename);
};

const LevelRequestsConnection_possibleTypes: string[] = [
	'LevelRequestsConnection',
];
export const isLevelRequestsConnection = (
	obj?: { __typename?: any } | null,
): obj is LevelRequestsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelRequestsConnection"');
	return LevelRequestsConnection_possibleTypes.includes(obj.__typename);
};

const LevelRequest_possibleTypes: string[] = ['LevelRequest'];
export const isLevelRequest = (
	obj?: { __typename?: any } | null,
): obj is LevelRequest => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelRequest"');
	return LevelRequest_possibleTypes.includes(obj.__typename);
};

const LevelRequestsEdge_possibleTypes: string[] = ['LevelRequestsEdge'];
export const isLevelRequestsEdge = (
	obj?: { __typename?: any } | null,
): obj is LevelRequestsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isLevelRequestsEdge"');
	return LevelRequestsEdge_possibleTypes.includes(obj.__typename);
};

const SampledFavoritesConnection_possibleTypes: string[] = [
	'SampledFavoritesConnection',
];
export const isSampledFavoritesConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledFavoritesConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledFavoritesConnection"');
	return SampledFavoritesConnection_possibleTypes.includes(obj.__typename);
};

const SampledFavorite_possibleTypes: string[] = ['SampledFavorite'];
export const isSampledFavorite = (
	obj?: { __typename?: any } | null,
): obj is SampledFavorite => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledFavorite"');
	return SampledFavorite_possibleTypes.includes(obj.__typename);
};

const SampledFavoritesEdge_possibleTypes: string[] = ['SampledFavoritesEdge'];
export const isSampledFavoritesEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledFavoritesEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledFavoritesEdge"');
	return SampledFavoritesEdge_possibleTypes.includes(obj.__typename);
};

const SampledLevelsConnection_possibleTypes: string[] = [
	'SampledLevelsConnection',
];
export const isSampledLevelsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelsConnection"');
	return SampledLevelsConnection_possibleTypes.includes(obj.__typename);
};

const SampledLevel_possibleTypes: string[] = ['SampledLevel'];
export const isSampledLevel = (
	obj?: { __typename?: any } | null,
): obj is SampledLevel => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevel"');
	return SampledLevel_possibleTypes.includes(obj.__typename);
};

const SampledLevelsEdge_possibleTypes: string[] = ['SampledLevelsEdge'];
export const isSampledLevelsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelsEdge"');
	return SampledLevelsEdge_possibleTypes.includes(obj.__typename);
};

const SampledLevelItemsConnection_possibleTypes: string[] = [
	'SampledLevelItemsConnection',
];
export const isSampledLevelItemsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelItemsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelItemsConnection"');
	return SampledLevelItemsConnection_possibleTypes.includes(obj.__typename);
};

const SampledLevelItem_possibleTypes: string[] = ['SampledLevelItem'];
export const isSampledLevelItem = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelItem => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelItem"');
	return SampledLevelItem_possibleTypes.includes(obj.__typename);
};

const SampledLevelItemsEdge_possibleTypes: string[] = ['SampledLevelItemsEdge'];
export const isSampledLevelItemsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelItemsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelItemsEdge"');
	return SampledLevelItemsEdge_possibleTypes.includes(obj.__typename);
};

const SampledLevelMetadataConnection_possibleTypes: string[] = [
	'SampledLevelMetadataConnection',
];
export const isSampledLevelMetadataConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelMetadataConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledLevelMetadataConnection"',
		);
	return SampledLevelMetadataConnection_possibleTypes.includes(obj.__typename);
};

const SampledLevelMetadatum_possibleTypes: string[] = ['SampledLevelMetadatum'];
export const isSampledLevelMetadatum = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelMetadatum => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelMetadatum"');
	return SampledLevelMetadatum_possibleTypes.includes(obj.__typename);
};

const SampledLevelMetadataEdge_possibleTypes: string[] = [
	'SampledLevelMetadataEdge',
];
export const isSampledLevelMetadataEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelMetadataEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelMetadataEdge"');
	return SampledLevelMetadataEdge_possibleTypes.includes(obj.__typename);
};

const SampledLevelPointsConnection_possibleTypes: string[] = [
	'SampledLevelPointsConnection',
];
export const isSampledLevelPointsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelPointsConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledLevelPointsConnection"',
		);
	return SampledLevelPointsConnection_possibleTypes.includes(obj.__typename);
};

const SampledLevelPoint_possibleTypes: string[] = ['SampledLevelPoint'];
export const isSampledLevelPoint = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelPoint => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelPoint"');
	return SampledLevelPoint_possibleTypes.includes(obj.__typename);
};

const SampledLevelPointsEdge_possibleTypes: string[] = [
	'SampledLevelPointsEdge',
];
export const isSampledLevelPointsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelPointsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelPointsEdge"');
	return SampledLevelPointsEdge_possibleTypes.includes(obj.__typename);
};

const SampledLevelRequestsConnection_possibleTypes: string[] = [
	'SampledLevelRequestsConnection',
];
export const isSampledLevelRequestsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelRequestsConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledLevelRequestsConnection"',
		);
	return SampledLevelRequestsConnection_possibleTypes.includes(obj.__typename);
};

const SampledLevelRequest_possibleTypes: string[] = ['SampledLevelRequest'];
export const isSampledLevelRequest = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelRequest => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelRequest"');
	return SampledLevelRequest_possibleTypes.includes(obj.__typename);
};

const SampledLevelRequestsEdge_possibleTypes: string[] = [
	'SampledLevelRequestsEdge',
];
export const isSampledLevelRequestsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledLevelRequestsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledLevelRequestsEdge"');
	return SampledLevelRequestsEdge_possibleTypes.includes(obj.__typename);
};

const SampledPersonalBestGlobalsConnection_possibleTypes: string[] = [
	'SampledPersonalBestGlobalsConnection',
];
export const isSampledPersonalBestGlobalsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledPersonalBestGlobalsConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledPersonalBestGlobalsConnection"',
		);
	return SampledPersonalBestGlobalsConnection_possibleTypes.includes(
		obj.__typename,
	);
};

const SampledPersonalBestGlobal_possibleTypes: string[] = [
	'SampledPersonalBestGlobal',
];
export const isSampledPersonalBestGlobal = (
	obj?: { __typename?: any } | null,
): obj is SampledPersonalBestGlobal => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledPersonalBestGlobal"');
	return SampledPersonalBestGlobal_possibleTypes.includes(obj.__typename);
};

const SampledPersonalBestGlobalsEdge_possibleTypes: string[] = [
	'SampledPersonalBestGlobalsEdge',
];
export const isSampledPersonalBestGlobalsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledPersonalBestGlobalsEdge => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledPersonalBestGlobalsEdge"',
		);
	return SampledPersonalBestGlobalsEdge_possibleTypes.includes(obj.__typename);
};

const SampledRecordsConnection_possibleTypes: string[] = [
	'SampledRecordsConnection',
];
export const isSampledRecordsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledRecordsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledRecordsConnection"');
	return SampledRecordsConnection_possibleTypes.includes(obj.__typename);
};

const SampledRecord_possibleTypes: string[] = ['SampledRecord'];
export const isSampledRecord = (
	obj?: { __typename?: any } | null,
): obj is SampledRecord => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledRecord"');
	return SampledRecord_possibleTypes.includes(obj.__typename);
};

const SampledRecordsEdge_possibleTypes: string[] = ['SampledRecordsEdge'];
export const isSampledRecordsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledRecordsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledRecordsEdge"');
	return SampledRecordsEdge_possibleTypes.includes(obj.__typename);
};

const SampledRecordMediasConnection_possibleTypes: string[] = [
	'SampledRecordMediasConnection',
];
export const isSampledRecordMediasConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledRecordMediasConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledRecordMediasConnection"',
		);
	return SampledRecordMediasConnection_possibleTypes.includes(obj.__typename);
};

const SampledRecordMedia_possibleTypes: string[] = ['SampledRecordMedia'];
export const isSampledRecordMedia = (
	obj?: { __typename?: any } | null,
): obj is SampledRecordMedia => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledRecordMedia"');
	return SampledRecordMedia_possibleTypes.includes(obj.__typename);
};

const SampledRecordMediasEdge_possibleTypes: string[] = [
	'SampledRecordMediasEdge',
];
export const isSampledRecordMediasEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledRecordMediasEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledRecordMediasEdge"');
	return SampledRecordMediasEdge_possibleTypes.includes(obj.__typename);
};

const SampledUpvotesConnection_possibleTypes: string[] = [
	'SampledUpvotesConnection',
];
export const isSampledUpvotesConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledUpvotesConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUpvotesConnection"');
	return SampledUpvotesConnection_possibleTypes.includes(obj.__typename);
};

const SampledUpvote_possibleTypes: string[] = ['SampledUpvote'];
export const isSampledUpvote = (
	obj?: { __typename?: any } | null,
): obj is SampledUpvote => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUpvote"');
	return SampledUpvote_possibleTypes.includes(obj.__typename);
};

const SampledUpvotesEdge_possibleTypes: string[] = ['SampledUpvotesEdge'];
export const isSampledUpvotesEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledUpvotesEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUpvotesEdge"');
	return SampledUpvotesEdge_possibleTypes.includes(obj.__typename);
};

const SampledUsersConnection_possibleTypes: string[] = [
	'SampledUsersConnection',
];
export const isSampledUsersConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledUsersConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUsersConnection"');
	return SampledUsersConnection_possibleTypes.includes(obj.__typename);
};

const SampledUser_possibleTypes: string[] = ['SampledUser'];
export const isSampledUser = (
	obj?: { __typename?: any } | null,
): obj is SampledUser => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUser"');
	return SampledUser_possibleTypes.includes(obj.__typename);
};

const SampledUsersEdge_possibleTypes: string[] = ['SampledUsersEdge'];
export const isSampledUsersEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledUsersEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUsersEdge"');
	return SampledUsersEdge_possibleTypes.includes(obj.__typename);
};

const SampledUserPointsConnection_possibleTypes: string[] = [
	'SampledUserPointsConnection',
];
export const isSampledUserPointsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledUserPointsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUserPointsConnection"');
	return SampledUserPointsConnection_possibleTypes.includes(obj.__typename);
};

const SampledUserPoint_possibleTypes: string[] = ['SampledUserPoint'];
export const isSampledUserPoint = (
	obj?: { __typename?: any } | null,
): obj is SampledUserPoint => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUserPoint"');
	return SampledUserPoint_possibleTypes.includes(obj.__typename);
};

const SampledUserPointsEdge_possibleTypes: string[] = ['SampledUserPointsEdge'];
export const isSampledUserPointsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledUserPointsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledUserPointsEdge"');
	return SampledUserPointsEdge_possibleTypes.includes(obj.__typename);
};

const SampledVersionsConnection_possibleTypes: string[] = [
	'SampledVersionsConnection',
];
export const isSampledVersionsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledVersionsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledVersionsConnection"');
	return SampledVersionsConnection_possibleTypes.includes(obj.__typename);
};

const SampledVersion_possibleTypes: string[] = ['SampledVersion'];
export const isSampledVersion = (
	obj?: { __typename?: any } | null,
): obj is SampledVersion => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledVersion"');
	return SampledVersion_possibleTypes.includes(obj.__typename);
};

const SampledVersionsEdge_possibleTypes: string[] = ['SampledVersionsEdge'];
export const isSampledVersionsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledVersionsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledVersionsEdge"');
	return SampledVersionsEdge_possibleTypes.includes(obj.__typename);
};

const SampledWorldRecordGlobalsConnection_possibleTypes: string[] = [
	'SampledWorldRecordGlobalsConnection',
];
export const isSampledWorldRecordGlobalsConnection = (
	obj?: { __typename?: any } | null,
): obj is SampledWorldRecordGlobalsConnection => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledWorldRecordGlobalsConnection"',
		);
	return SampledWorldRecordGlobalsConnection_possibleTypes.includes(
		obj.__typename,
	);
};

const SampledWorldRecordGlobal_possibleTypes: string[] = [
	'SampledWorldRecordGlobal',
];
export const isSampledWorldRecordGlobal = (
	obj?: { __typename?: any } | null,
): obj is SampledWorldRecordGlobal => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isSampledWorldRecordGlobal"');
	return SampledWorldRecordGlobal_possibleTypes.includes(obj.__typename);
};

const SampledWorldRecordGlobalsEdge_possibleTypes: string[] = [
	'SampledWorldRecordGlobalsEdge',
];
export const isSampledWorldRecordGlobalsEdge = (
	obj?: { __typename?: any } | null,
): obj is SampledWorldRecordGlobalsEdge => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isSampledWorldRecordGlobalsEdge"',
		);
	return SampledWorldRecordGlobalsEdge_possibleTypes.includes(obj.__typename);
};

const UsersConnection_possibleTypes: string[] = ['UsersConnection'];
export const isUsersConnection = (
	obj?: { __typename?: any } | null,
): obj is UsersConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isUsersConnection"');
	return UsersConnection_possibleTypes.includes(obj.__typename);
};

const UsersEdge_possibleTypes: string[] = ['UsersEdge'];
export const isUsersEdge = (
	obj?: { __typename?: any } | null,
): obj is UsersEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isUsersEdge"');
	return UsersEdge_possibleTypes.includes(obj.__typename);
};

const VersionsConnection_possibleTypes: string[] = ['VersionsConnection'];
export const isVersionsConnection = (
	obj?: { __typename?: any } | null,
): obj is VersionsConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isVersionsConnection"');
	return VersionsConnection_possibleTypes.includes(obj.__typename);
};

const Version_possibleTypes: string[] = ['Version'];
export const isVersion = (
	obj?: { __typename?: any } | null,
): obj is Version => {
	if (!obj?.__typename) throw new Error('__typename is missing in "isVersion"');
	return Version_possibleTypes.includes(obj.__typename);
};

const VersionsEdge_possibleTypes: string[] = ['VersionsEdge'];
export const isVersionsEdge = (
	obj?: { __typename?: any } | null,
): obj is VersionsEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isVersionsEdge"');
	return VersionsEdge_possibleTypes.includes(obj.__typename);
};

const ZRtmConnection_possibleTypes: string[] = ['ZRtmConnection'];
export const isZRtmConnection = (
	obj?: { __typename?: any } | null,
): obj is ZRtmConnection => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isZRtmConnection"');
	return ZRtmConnection_possibleTypes.includes(obj.__typename);
};

const ZRtmRecord_possibleTypes: string[] = ['ZRtmRecord'];
export const isZRtmRecord = (
	obj?: { __typename?: any } | null,
): obj is ZRtmRecord => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isZRtmRecord"');
	return ZRtmRecord_possibleTypes.includes(obj.__typename);
};

const ZRtmEdge_possibleTypes: string[] = ['ZRtmEdge'];
export const isZRtmEdge = (
	obj?: { __typename?: any } | null,
): obj is ZRtmEdge => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isZRtmEdge"');
	return ZRtmEdge_possibleTypes.includes(obj.__typename);
};

const Mutation_possibleTypes: string[] = ['Mutation'];
export const isMutation = (
	obj?: { __typename?: any } | null,
): obj is Mutation => {
	if (!obj?.__typename)
		throw new Error('__typename is missing in "isMutation"');
	return Mutation_possibleTypes.includes(obj.__typename);
};

const UpdateWorldRecordGlobalPayload_possibleTypes: string[] = [
	'UpdateWorldRecordGlobalPayload',
];
export const isUpdateWorldRecordGlobalPayload = (
	obj?: { __typename?: any } | null,
): obj is UpdateWorldRecordGlobalPayload => {
	if (!obj?.__typename)
		throw new Error(
			'__typename is missing in "isUpdateWorldRecordGlobalPayload"',
		);
	return UpdateWorldRecordGlobalPayload_possibleTypes.includes(obj.__typename);
};

export const enumVersionInfosOrderBy = {
	NATURAL: 'NATURAL' as const,
	VERSION_ASC: 'VERSION_ASC' as const,
	VERSION_DESC: 'VERSION_DESC' as const,
	APPLIED_ON_ASC: 'APPLIED_ON_ASC' as const,
	APPLIED_ON_DESC: 'APPLIED_ON_DESC' as const,
	DESCRIPTION_ASC: 'DESCRIPTION_ASC' as const,
	DESCRIPTION_DESC: 'DESCRIPTION_DESC' as const,
};

export const enumFavoritesOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumLevelItemsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	WORKSHOP_ID_ASC: 'WORKSHOP_ID_ASC' as const,
	WORKSHOP_ID_DESC: 'WORKSHOP_ID_DESC' as const,
	AUTHOR_ID_ASC: 'AUTHOR_ID_ASC' as const,
	AUTHOR_ID_DESC: 'AUTHOR_ID_DESC' as const,
	NAME_ASC: 'NAME_ASC' as const,
	NAME_DESC: 'NAME_DESC' as const,
	IMAGE_URL_ASC: 'IMAGE_URL_ASC' as const,
	IMAGE_URL_DESC: 'IMAGE_URL_DESC' as const,
	FILE_AUTHOR_ASC: 'FILE_AUTHOR_ASC' as const,
	FILE_AUTHOR_DESC: 'FILE_AUTHOR_DESC' as const,
	FILE_UID_ASC: 'FILE_UID_ASC' as const,
	FILE_UID_DESC: 'FILE_UID_DESC' as const,
	VALIDATION_TIME_AUTHOR_ASC: 'VALIDATION_TIME_AUTHOR_ASC' as const,
	VALIDATION_TIME_AUTHOR_DESC: 'VALIDATION_TIME_AUTHOR_DESC' as const,
	VALIDATION_TIME_GOLD_ASC: 'VALIDATION_TIME_GOLD_ASC' as const,
	VALIDATION_TIME_GOLD_DESC: 'VALIDATION_TIME_GOLD_DESC' as const,
	VALIDATION_TIME_SILVER_ASC: 'VALIDATION_TIME_SILVER_ASC' as const,
	VALIDATION_TIME_SILVER_DESC: 'VALIDATION_TIME_SILVER_DESC' as const,
	VALIDATION_TIME_BRONZE_ASC: 'VALIDATION_TIME_BRONZE_ASC' as const,
	VALIDATION_TIME_BRONZE_DESC: 'VALIDATION_TIME_BRONZE_DESC' as const,
	DELETED_ASC: 'DELETED_ASC' as const,
	DELETED_DESC: 'DELETED_DESC' as const,
	CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
	CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
	UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
	UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumLevelMetadataOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	AMOUNT_CHECKPOINTS_ASC: 'AMOUNT_CHECKPOINTS_ASC' as const,
	AMOUNT_CHECKPOINTS_DESC: 'AMOUNT_CHECKPOINTS_DESC' as const,
	AMOUNT_FINISHES_ASC: 'AMOUNT_FINISHES_ASC' as const,
	AMOUNT_FINISHES_DESC: 'AMOUNT_FINISHES_DESC' as const,
	AMOUNT_BLOCKS_ASC: 'AMOUNT_BLOCKS_ASC' as const,
	AMOUNT_BLOCKS_DESC: 'AMOUNT_BLOCKS_DESC' as const,
	TYPE_GROUND_ASC: 'TYPE_GROUND_ASC' as const,
	TYPE_GROUND_DESC: 'TYPE_GROUND_DESC' as const,
	TYPE_SKYBOX_ASC: 'TYPE_SKYBOX_ASC' as const,
	TYPE_SKYBOX_DESC: 'TYPE_SKYBOX_DESC' as const,
	BLOCKS_ASC: 'BLOCKS_ASC' as const,
	BLOCKS_DESC: 'BLOCKS_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumLevelPointsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	POINTS_ASC: 'POINTS_ASC' as const,
	POINTS_DESC: 'POINTS_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumPersonalBestGlobalsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
	ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumRecordsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	TIME_ASC: 'TIME_ASC' as const,
	TIME_DESC: 'TIME_DESC' as const,
	GAME_VERSION_ASC: 'GAME_VERSION_ASC' as const,
	GAME_VERSION_DESC: 'GAME_VERSION_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	MOD_VERSION_ASC: 'MOD_VERSION_ASC' as const,
	MOD_VERSION_DESC: 'MOD_VERSION_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	SPLITS_ASC: 'SPLITS_ASC' as const,
	SPLITS_DESC: 'SPLITS_DESC' as const,
	SPEEDS_ASC: 'SPEEDS_ASC' as const,
	SPEEDS_DESC: 'SPEEDS_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumUpvotesOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumWorldRecordGlobalsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
	ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumVotesOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	VALUE_ASC: 'VALUE_ASC' as const,
	VALUE_DESC: 'VALUE_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumRecordMediasOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
	ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
	GHOST_URL_ASC: 'GHOST_URL_ASC' as const,
	GHOST_URL_DESC: 'GHOST_URL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumUserPointsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	POINTS_ASC: 'POINTS_ASC' as const,
	POINTS_DESC: 'POINTS_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	RANK_ASC: 'RANK_ASC' as const,
	RANK_DESC: 'RANK_DESC' as const,
	WORLD_RECORDS_ASC: 'WORLD_RECORDS_ASC' as const,
	WORLD_RECORDS_DESC: 'WORLD_RECORDS_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumLevelsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	HASH_ASC: 'HASH_ASC' as const,
	HASH_DESC: 'HASH_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumLevelRequestsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	WORKSHOP_ID_ASC: 'WORKSHOP_ID_ASC' as const,
	WORKSHOP_ID_DESC: 'WORKSHOP_ID_DESC' as const,
	UID_ASC: 'UID_ASC' as const,
	UID_DESC: 'UID_DESC' as const,
	HASH_ASC: 'HASH_ASC' as const,
	HASH_DESC: 'HASH_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumSampledFavoritesOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
};

export const enumSampledLevelsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	HASH_ASC: 'HASH_ASC' as const,
	HASH_DESC: 'HASH_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledLevelItemsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	WORKSHOP_ID_ASC: 'WORKSHOP_ID_ASC' as const,
	WORKSHOP_ID_DESC: 'WORKSHOP_ID_DESC' as const,
	AUTHOR_ID_ASC: 'AUTHOR_ID_ASC' as const,
	AUTHOR_ID_DESC: 'AUTHOR_ID_DESC' as const,
	NAME_ASC: 'NAME_ASC' as const,
	NAME_DESC: 'NAME_DESC' as const,
	IMAGE_URL_ASC: 'IMAGE_URL_ASC' as const,
	IMAGE_URL_DESC: 'IMAGE_URL_DESC' as const,
	FILE_AUTHOR_ASC: 'FILE_AUTHOR_ASC' as const,
	FILE_AUTHOR_DESC: 'FILE_AUTHOR_DESC' as const,
	FILE_UID_ASC: 'FILE_UID_ASC' as const,
	FILE_UID_DESC: 'FILE_UID_DESC' as const,
	VALIDATION_TIME_AUTHOR_ASC: 'VALIDATION_TIME_AUTHOR_ASC' as const,
	VALIDATION_TIME_AUTHOR_DESC: 'VALIDATION_TIME_AUTHOR_DESC' as const,
	VALIDATION_TIME_GOLD_ASC: 'VALIDATION_TIME_GOLD_ASC' as const,
	VALIDATION_TIME_GOLD_DESC: 'VALIDATION_TIME_GOLD_DESC' as const,
	VALIDATION_TIME_SILVER_ASC: 'VALIDATION_TIME_SILVER_ASC' as const,
	VALIDATION_TIME_SILVER_DESC: 'VALIDATION_TIME_SILVER_DESC' as const,
	VALIDATION_TIME_BRONZE_ASC: 'VALIDATION_TIME_BRONZE_ASC' as const,
	VALIDATION_TIME_BRONZE_DESC: 'VALIDATION_TIME_BRONZE_DESC' as const,
	DELETED_ASC: 'DELETED_ASC' as const,
	DELETED_DESC: 'DELETED_DESC' as const,
	CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
	CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
	UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
	UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledLevelMetadataOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	AMOUNT_CHECKPOINTS_ASC: 'AMOUNT_CHECKPOINTS_ASC' as const,
	AMOUNT_CHECKPOINTS_DESC: 'AMOUNT_CHECKPOINTS_DESC' as const,
	AMOUNT_FINISHES_ASC: 'AMOUNT_FINISHES_ASC' as const,
	AMOUNT_FINISHES_DESC: 'AMOUNT_FINISHES_DESC' as const,
	AMOUNT_BLOCKS_ASC: 'AMOUNT_BLOCKS_ASC' as const,
	AMOUNT_BLOCKS_DESC: 'AMOUNT_BLOCKS_DESC' as const,
	TYPE_GROUND_ASC: 'TYPE_GROUND_ASC' as const,
	TYPE_GROUND_DESC: 'TYPE_GROUND_DESC' as const,
	TYPE_SKYBOX_ASC: 'TYPE_SKYBOX_ASC' as const,
	TYPE_SKYBOX_DESC: 'TYPE_SKYBOX_DESC' as const,
	BLOCKS_ASC: 'BLOCKS_ASC' as const,
	BLOCKS_DESC: 'BLOCKS_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledLevelPointsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	POINTS_ASC: 'POINTS_ASC' as const,
	POINTS_DESC: 'POINTS_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledLevelRequestsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	WORKSHOP_ID_ASC: 'WORKSHOP_ID_ASC' as const,
	WORKSHOP_ID_DESC: 'WORKSHOP_ID_DESC' as const,
	UID_ASC: 'UID_ASC' as const,
	UID_DESC: 'UID_DESC' as const,
	HASH_ASC: 'HASH_ASC' as const,
	HASH_DESC: 'HASH_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledPersonalBestGlobalsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
	ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledRecordsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	TIME_ASC: 'TIME_ASC' as const,
	TIME_DESC: 'TIME_DESC' as const,
	GAME_VERSION_ASC: 'GAME_VERSION_ASC' as const,
	GAME_VERSION_DESC: 'GAME_VERSION_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	MOD_VERSION_ASC: 'MOD_VERSION_ASC' as const,
	MOD_VERSION_DESC: 'MOD_VERSION_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	SPLITS_ASC: 'SPLITS_ASC' as const,
	SPLITS_DESC: 'SPLITS_DESC' as const,
	SPEEDS_ASC: 'SPEEDS_ASC' as const,
	SPEEDS_DESC: 'SPEEDS_DESC' as const,
};

export const enumSampledRecordMediasOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
	ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
	GHOST_URL_ASC: 'GHOST_URL_ASC' as const,
	GHOST_URL_DESC: 'GHOST_URL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledUpvotesOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledUsersOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	STEAM_NAME_ASC: 'STEAM_NAME_ASC' as const,
	STEAM_NAME_DESC: 'STEAM_NAME_DESC' as const,
	BANNED_ASC: 'BANNED_ASC' as const,
	BANNED_DESC: 'BANNED_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	STEAM_ID_ASC: 'STEAM_ID_ASC' as const,
	STEAM_ID_DESC: 'STEAM_ID_DESC' as const,
	DISCORD_ID_ASC: 'DISCORD_ID_ASC' as const,
	DISCORD_ID_DESC: 'DISCORD_ID_DESC' as const,
};

export const enumSampledUserPointsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_USER_ASC: 'ID_USER_ASC' as const,
	ID_USER_DESC: 'ID_USER_DESC' as const,
	POINTS_ASC: 'POINTS_ASC' as const,
	POINTS_DESC: 'POINTS_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	RANK_ASC: 'RANK_ASC' as const,
	RANK_DESC: 'RANK_DESC' as const,
	WORLD_RECORDS_ASC: 'WORLD_RECORDS_ASC' as const,
	WORLD_RECORDS_DESC: 'WORLD_RECORDS_DESC' as const,
};

export const enumSampledVersionsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	MINIMUM_ASC: 'MINIMUM_ASC' as const,
	MINIMUM_DESC: 'MINIMUM_DESC' as const,
	LATEST_ASC: 'LATEST_ASC' as const,
	LATEST_DESC: 'LATEST_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumSampledWorldRecordGlobalsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
	ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
	ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
	ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
};

export const enumUsersOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	STEAM_NAME_ASC: 'STEAM_NAME_ASC' as const,
	STEAM_NAME_DESC: 'STEAM_NAME_DESC' as const,
	BANNED_ASC: 'BANNED_ASC' as const,
	BANNED_DESC: 'BANNED_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	STEAM_ID_ASC: 'STEAM_ID_ASC' as const,
	STEAM_ID_DESC: 'STEAM_ID_DESC' as const,
	DISCORD_ID_ASC: 'DISCORD_ID_ASC' as const,
	DISCORD_ID_DESC: 'DISCORD_ID_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};

export const enumVersionsOrderBy = {
	NATURAL: 'NATURAL' as const,
	ID_ASC: 'ID_ASC' as const,
	ID_DESC: 'ID_DESC' as const,
	MINIMUM_ASC: 'MINIMUM_ASC' as const,
	MINIMUM_DESC: 'MINIMUM_DESC' as const,
	LATEST_ASC: 'LATEST_ASC' as const,
	LATEST_DESC: 'LATEST_DESC' as const,
	DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
	DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
	DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
	DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
	PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
	PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const,
};
