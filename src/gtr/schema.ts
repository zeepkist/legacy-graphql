// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    Int: number,
    Datetime: any,
    String: string,
    Boolean: boolean,
    BigFloat: any,
    Cursor: any,
    Float: number,
    JSON: any,
    BigInt: any,
}


/** The root query type which gives access points into the data universe. */
export interface Query {
    /**
     * Exposes the root query type nested one level down. This is helpful for Relay 1
     * which can only query top level fields if they are in a particular form.
     */
    query: Query
    /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
    nodeId: Scalars['ID']
    /** Fetches an object given its globally unique `ID`. */
    node: (Node | null)
    /** Reads and enables pagination through a set of `Favorite`. */
    allFavorites: (FavoritesConnection | null)
    /** Reads and enables pagination through a set of `Level`. */
    allLevels: (LevelsConnection | null)
    /** Reads and enables pagination through a set of `LevelItem`. */
    allLevelItems: (LevelItemsConnection | null)
    /** Reads and enables pagination through a set of `LevelMetadatum`. */
    allLevelMetadata: (LevelMetadataConnection | null)
    /** Reads and enables pagination through a set of `LevelPoint`. */
    allLevelPoints: (LevelPointsConnection | null)
    /** Reads and enables pagination through a set of `LevelRequest`. */
    allLevelRequests: (LevelRequestsConnection | null)
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    allPersonalBestDailies: (PersonalBestDailiesConnection | null)
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    allPersonalBestGlobals: (PersonalBestGlobalsConnection | null)
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    allPersonalBestMonthlies: (PersonalBestMonthliesConnection | null)
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    allPersonalBestQuarterlies: (PersonalBestQuarterliesConnection | null)
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    allPersonalBestWeeklies: (PersonalBestWeekliesConnection | null)
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    allPersonalBestYearlies: (PersonalBestYearliesConnection | null)
    /** Reads and enables pagination through a set of `Record`. */
    allRecords: (RecordsConnection | null)
    /** Reads and enables pagination through a set of `RecordMedia`. */
    allRecordMedias: (RecordMediasConnection | null)
    /** Reads and enables pagination through a set of `SampledFavorite`. */
    allSampledFavorites: (SampledFavoritesConnection | null)
    /** Reads and enables pagination through a set of `SampledLevel`. */
    allSampledLevels: (SampledLevelsConnection | null)
    /** Reads and enables pagination through a set of `SampledLevelItem`. */
    allSampledLevelItems: (SampledLevelItemsConnection | null)
    /** Reads and enables pagination through a set of `SampledLevelMetadatum`. */
    allSampledLevelMetadata: (SampledLevelMetadataConnection | null)
    /** Reads and enables pagination through a set of `SampledLevelPoint`. */
    allSampledLevelPoints: (SampledLevelPointsConnection | null)
    /** Reads and enables pagination through a set of `SampledLevelRequest`. */
    allSampledLevelRequests: (SampledLevelRequestsConnection | null)
    /** Reads and enables pagination through a set of `SampledPersonalBestDaily`. */
    allSampledPersonalBestDailies: (SampledPersonalBestDailiesConnection | null)
    /** Reads and enables pagination through a set of `SampledPersonalBestGlobal`. */
    allSampledPersonalBestGlobals: (SampledPersonalBestGlobalsConnection | null)
    /** Reads and enables pagination through a set of `SampledPersonalBestMonthly`. */
    allSampledPersonalBestMonthlies: (SampledPersonalBestMonthliesConnection | null)
    /** Reads and enables pagination through a set of `SampledPersonalBestQuarterly`. */
    allSampledPersonalBestQuarterlies: (SampledPersonalBestQuarterliesConnection | null)
    /** Reads and enables pagination through a set of `SampledPersonalBestWeekly`. */
    allSampledPersonalBestWeeklies: (SampledPersonalBestWeekliesConnection | null)
    /** Reads and enables pagination through a set of `SampledPersonalBestYearly`. */
    allSampledPersonalBestYearlies: (SampledPersonalBestYearliesConnection | null)
    /** Reads and enables pagination through a set of `SampledRecord`. */
    allSampledRecords: (SampledRecordsConnection | null)
    /** Reads and enables pagination through a set of `SampledRecordMedia`. */
    allSampledRecordMedias: (SampledRecordMediasConnection | null)
    /** Reads and enables pagination through a set of `SampledStatsDaily`. */
    allSampledStatsDailies: (SampledStatsDailiesConnection | null)
    /** Reads and enables pagination through a set of `SampledStatsGlobal`. */
    allSampledStatsGlobals: (SampledStatsGlobalsConnection | null)
    /** Reads and enables pagination through a set of `SampledStatsMonthly`. */
    allSampledStatsMonthlies: (SampledStatsMonthliesConnection | null)
    /** Reads and enables pagination through a set of `SampledStatsQuarterly`. */
    allSampledStatsQuarterlies: (SampledStatsQuarterliesConnection | null)
    /** Reads and enables pagination through a set of `SampledStatsWeekly`. */
    allSampledStatsWeeklies: (SampledStatsWeekliesConnection | null)
    /** Reads and enables pagination through a set of `SampledStatsYearly`. */
    allSampledStatsYearlies: (SampledStatsYearliesConnection | null)
    /** Reads and enables pagination through a set of `SampledUpvote`. */
    allSampledUpvotes: (SampledUpvotesConnection | null)
    /** Reads and enables pagination through a set of `SampledUser`. */
    allSampledUsers: (SampledUsersConnection | null)
    /** Reads and enables pagination through a set of `SampledUserPoint`. */
    allSampledUserPoints: (SampledUserPointsConnection | null)
    /** Reads and enables pagination through a set of `SampledVersion`. */
    allSampledVersions: (SampledVersionsConnection | null)
    /** Reads and enables pagination through a set of `SampledWorldRecordDaily`. */
    allSampledWorldRecordDailies: (SampledWorldRecordDailiesConnection | null)
    /** Reads and enables pagination through a set of `SampledWorldRecordGlobal`. */
    allSampledWorldRecordGlobals: (SampledWorldRecordGlobalsConnection | null)
    /** Reads and enables pagination through a set of `SampledWorldRecordMonthly`. */
    allSampledWorldRecordMonthlies: (SampledWorldRecordMonthliesConnection | null)
    /** Reads and enables pagination through a set of `SampledWorldRecordQuarterly`. */
    allSampledWorldRecordQuarterlies: (SampledWorldRecordQuarterliesConnection | null)
    /** Reads and enables pagination through a set of `SampledWorldRecordWeekly`. */
    allSampledWorldRecordWeeklies: (SampledWorldRecordWeekliesConnection | null)
    /** Reads and enables pagination through a set of `SampledWorldRecordYearly`. */
    allSampledWorldRecordYearlies: (SampledWorldRecordYearliesConnection | null)
    /** Reads and enables pagination through a set of `StatsDaily`. */
    allStatsDailies: (StatsDailiesConnection | null)
    /** Reads and enables pagination through a set of `StatsGlobal`. */
    allStatsGlobals: (StatsGlobalsConnection | null)
    /** Reads and enables pagination through a set of `StatsMonthly`. */
    allStatsMonthlies: (StatsMonthliesConnection | null)
    /** Reads and enables pagination through a set of `StatsQuarterly`. */
    allStatsQuarterlies: (StatsQuarterliesConnection | null)
    /** Reads and enables pagination through a set of `StatsWeekly`. */
    allStatsWeeklies: (StatsWeekliesConnection | null)
    /** Reads and enables pagination through a set of `StatsYearly`. */
    allStatsYearlies: (StatsYearliesConnection | null)
    /** Reads and enables pagination through a set of `Upvote`. */
    allUpvotes: (UpvotesConnection | null)
    /** Reads and enables pagination through a set of `User`. */
    allUsers: (UsersConnection | null)
    /** Reads and enables pagination through a set of `UserPoint`. */
    allUserPoints: (UserPointsConnection | null)
    /** Reads and enables pagination through a set of `Version`. */
    allVersions: (VersionsConnection | null)
    /** Reads and enables pagination through a set of `Vote`. */
    allVotes: (VotesConnection | null)
    /** Reads and enables pagination through a set of `WorldRecordDaily`. */
    allWorldRecordDailies: (WorldRecordDailiesConnection | null)
    /** Reads and enables pagination through a set of `WorldRecordGlobal`. */
    allWorldRecordGlobals: (WorldRecordGlobalsConnection | null)
    /** Reads and enables pagination through a set of `WorldRecordMonthly`. */
    allWorldRecordMonthlies: (WorldRecordMonthliesConnection | null)
    /** Reads and enables pagination through a set of `WorldRecordQuarterly`. */
    allWorldRecordQuarterlies: (WorldRecordQuarterliesConnection | null)
    /** Reads and enables pagination through a set of `WorldRecordWeekly`. */
    allWorldRecordWeeklies: (WorldRecordWeekliesConnection | null)
    /** Reads and enables pagination through a set of `WorldRecordYearly`. */
    allWorldRecordYearlies: (WorldRecordYearliesConnection | null)
    favoriteById: (Favorite | null)
    levelById: (Level | null)
    levelByHash: (Level | null)
    levelItemById: (LevelItem | null)
    levelMetadatumById: (LevelMetadatum | null)
    levelPointById: (LevelPoint | null)
    levelRequestById: (LevelRequest | null)
    personalBestDailyById: (PersonalBestDaily | null)
    personalBestGlobalById: (PersonalBestGlobal | null)
    personalBestMonthlyById: (PersonalBestMonthly | null)
    personalBestQuarterlyById: (PersonalBestQuarterly | null)
    personalBestWeeklyById: (PersonalBestWeekly | null)
    personalBestYearlyById: (PersonalBestYearly | null)
    recordById: (Record | null)
    recordMediaById: (RecordMedia | null)
    statsDailyById: (StatsDaily | null)
    statsGlobalById: (StatsGlobal | null)
    statsMonthlyById: (StatsMonthly | null)
    statsQuarterlyById: (StatsQuarterly | null)
    statsWeeklyById: (StatsWeekly | null)
    statsYearlyById: (StatsYearly | null)
    upvoteById: (Upvote | null)
    userById: (User | null)
    userPointById: (UserPoint | null)
    versionById: (Version | null)
    voteById: (Vote | null)
    worldRecordDailyById: (WorldRecordDaily | null)
    worldRecordGlobalById: (WorldRecordGlobal | null)
    worldRecordMonthlyById: (WorldRecordMonthly | null)
    worldRecordQuarterlyById: (WorldRecordQuarterly | null)
    worldRecordWeeklyById: (WorldRecordWeekly | null)
    worldRecordYearlyById: (WorldRecordYearly | null)
    /** Retrieves filtered level items based on specified criteria. */
    zRtm: (ZRtmConnection | null)
    /** Reads a single `Favorite` using its globally unique `ID`. */
    favorite: (Favorite | null)
    /** Reads a single `Level` using its globally unique `ID`. */
    level: (Level | null)
    /** Reads a single `LevelItem` using its globally unique `ID`. */
    levelItem: (LevelItem | null)
    /** Reads a single `LevelMetadatum` using its globally unique `ID`. */
    levelMetadatum: (LevelMetadatum | null)
    /** Reads a single `LevelPoint` using its globally unique `ID`. */
    levelPoint: (LevelPoint | null)
    /** Reads a single `LevelRequest` using its globally unique `ID`. */
    levelRequest: (LevelRequest | null)
    /** Reads a single `PersonalBestDaily` using its globally unique `ID`. */
    personalBestDaily: (PersonalBestDaily | null)
    /** Reads a single `PersonalBestGlobal` using its globally unique `ID`. */
    personalBestGlobal: (PersonalBestGlobal | null)
    /** Reads a single `PersonalBestMonthly` using its globally unique `ID`. */
    personalBestMonthly: (PersonalBestMonthly | null)
    /** Reads a single `PersonalBestQuarterly` using its globally unique `ID`. */
    personalBestQuarterly: (PersonalBestQuarterly | null)
    /** Reads a single `PersonalBestWeekly` using its globally unique `ID`. */
    personalBestWeekly: (PersonalBestWeekly | null)
    /** Reads a single `PersonalBestYearly` using its globally unique `ID`. */
    personalBestYearly: (PersonalBestYearly | null)
    /** Reads a single `Record` using its globally unique `ID`. */
    record: (Record | null)
    /** Reads a single `RecordMedia` using its globally unique `ID`. */
    recordMedia: (RecordMedia | null)
    /** Reads a single `StatsDaily` using its globally unique `ID`. */
    statsDaily: (StatsDaily | null)
    /** Reads a single `StatsGlobal` using its globally unique `ID`. */
    statsGlobal: (StatsGlobal | null)
    /** Reads a single `StatsMonthly` using its globally unique `ID`. */
    statsMonthly: (StatsMonthly | null)
    /** Reads a single `StatsQuarterly` using its globally unique `ID`. */
    statsQuarterly: (StatsQuarterly | null)
    /** Reads a single `StatsWeekly` using its globally unique `ID`. */
    statsWeekly: (StatsWeekly | null)
    /** Reads a single `StatsYearly` using its globally unique `ID`. */
    statsYearly: (StatsYearly | null)
    /** Reads a single `Upvote` using its globally unique `ID`. */
    upvote: (Upvote | null)
    /** Reads a single `User` using its globally unique `ID`. */
    user: (User | null)
    /** Reads a single `UserPoint` using its globally unique `ID`. */
    userPoint: (UserPoint | null)
    /** Reads a single `Version` using its globally unique `ID`. */
    version: (Version | null)
    /** Reads a single `Vote` using its globally unique `ID`. */
    vote: (Vote | null)
    /** Reads a single `WorldRecordDaily` using its globally unique `ID`. */
    worldRecordDaily: (WorldRecordDaily | null)
    /** Reads a single `WorldRecordGlobal` using its globally unique `ID`. */
    worldRecordGlobal: (WorldRecordGlobal | null)
    /** Reads a single `WorldRecordMonthly` using its globally unique `ID`. */
    worldRecordMonthly: (WorldRecordMonthly | null)
    /** Reads a single `WorldRecordQuarterly` using its globally unique `ID`. */
    worldRecordQuarterly: (WorldRecordQuarterly | null)
    /** Reads a single `WorldRecordWeekly` using its globally unique `ID`. */
    worldRecordWeekly: (WorldRecordWeekly | null)
    /** Reads a single `WorldRecordYearly` using its globally unique `ID`. */
    worldRecordYearly: (WorldRecordYearly | null)
    __typename: 'Query'
}


/** An object with a globally unique `ID`. */
export type Node = (Query | Favorite | User | PersonalBestGlobal | Record | Level | LevelPoint | LevelItem | LevelMetadatum | StatsGlobal | Upvote | WorldRecordGlobal | PersonalBestYearly | PersonalBestMonthly | PersonalBestWeekly | PersonalBestDaily | WorldRecordMonthly | WorldRecordYearly | WorldRecordWeekly | WorldRecordDaily | StatsMonthly | StatsYearly | StatsWeekly | StatsDaily | PersonalBestQuarterly | StatsQuarterly | WorldRecordQuarterly | Vote | RecordMedia | UserPoint | LevelRequest | Version) & { __isUnion?: true }


/** A connection to a list of `Favorite` values. */
export interface FavoritesConnection {
    /** A list of `Favorite` objects. */
    nodes: (Favorite | null)[]
    /** A list of edges which contains the `Favorite` and cursor to aid in pagination. */
    edges: FavoritesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Favorite` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'FavoritesConnection'
}

export interface Favorite {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    idLevel: Scalars['Int']
    /** Reads a single `User` that is related to this `Favorite`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `Favorite`. */
    levelByIdLevel: (Level | null)
    __typename: 'Favorite'
}

export interface User {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    steamName: (Scalars['String'] | null)
    banned: Scalars['Boolean']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    steamId: (Scalars['BigFloat'] | null)
    discordId: (Scalars['BigFloat'] | null)
    /** Reads and enables pagination through a set of `Favorite`. */
    favoritesByIdUser: FavoritesConnection
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    personalBestGlobalsByIdUser: PersonalBestGlobalsConnection
    /** Reads and enables pagination through a set of `UserPoint`. */
    userPointsByIdUser: UserPointsConnection
    /** Reads and enables pagination through a set of `Record`. */
    recordsByIdUser: RecordsConnection
    /** Reads and enables pagination through a set of `StatsGlobal`. */
    statsGlobalsByIdUser: StatsGlobalsConnection
    /** Reads and enables pagination through a set of `Upvote`. */
    upvotesByIdUser: UpvotesConnection
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    personalBestYearliesByIdUser: PersonalBestYearliesConnection
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    personalBestMonthliesByIdUser: PersonalBestMonthliesConnection
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    personalBestWeekliesByIdUser: PersonalBestWeekliesConnection
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    personalBestDailiesByIdUser: PersonalBestDailiesConnection
    /** Reads and enables pagination through a set of `StatsMonthly`. */
    statsMonthliesByIdUser: StatsMonthliesConnection
    /** Reads and enables pagination through a set of `StatsYearly`. */
    statsYearliesByIdUser: StatsYearliesConnection
    /** Reads and enables pagination through a set of `StatsWeekly`. */
    statsWeekliesByIdUser: StatsWeekliesConnection
    /** Reads and enables pagination through a set of `StatsDaily`. */
    statsDailiesByIdUser: StatsDailiesConnection
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    personalBestQuarterliesByIdUser: PersonalBestQuarterliesConnection
    /** Reads and enables pagination through a set of `StatsQuarterly`. */
    statsQuarterliesByIdUser: StatsQuarterliesConnection
    /** Reads and enables pagination through a set of `Vote`. */
    votesByIdUser: VotesConnection
    __typename: 'User'
}


/** Methods to use when ordering `Favorite`. */
export type FavoritesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PersonalBestGlobal` values. */
export interface PersonalBestGlobalsConnection {
    /** A list of `PersonalBestGlobal` objects. */
    nodes: (PersonalBestGlobal | null)[]
    /** A list of edges which contains the `PersonalBestGlobal` and cursor to aid in pagination. */
    edges: PersonalBestGlobalsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PersonalBestGlobal` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PersonalBestGlobalsConnection'
}

export interface PersonalBestGlobal {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `Record` that is related to this `PersonalBestGlobal`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `User` that is related to this `PersonalBestGlobal`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `PersonalBestGlobal`. */
    levelByIdLevel: (Level | null)
    __typename: 'PersonalBestGlobal'
}

export interface Record {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    time: Scalars['Float']
    gameVersion: Scalars['String']
    isValid: Scalars['Boolean']
    idLevel: Scalars['Int']
    modVersion: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    splits: ((Scalars['Float'] | null)[] | null)
    speeds: ((Scalars['Float'] | null)[] | null)
    /** Reads a single `User` that is related to this `Record`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `Record`. */
    levelByIdLevel: (Level | null)
    /** Reads and enables pagination through a set of `RecordMedia`. */
    recordMediasByIdRecord: RecordMediasConnection
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    personalBestGlobalsByIdRecord: PersonalBestGlobalsConnection
    /** Reads and enables pagination through a set of `WorldRecordGlobal`. */
    worldRecordGlobalsByIdRecord: WorldRecordGlobalsConnection
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    personalBestYearliesByIdRecord: PersonalBestYearliesConnection
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    personalBestMonthliesByIdRecord: PersonalBestMonthliesConnection
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    personalBestWeekliesByIdRecord: PersonalBestWeekliesConnection
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    personalBestDailiesByIdRecord: PersonalBestDailiesConnection
    /** Reads and enables pagination through a set of `WorldRecordMonthly`. */
    worldRecordMonthliesByIdRecord: WorldRecordMonthliesConnection
    /** Reads and enables pagination through a set of `WorldRecordYearly`. */
    worldRecordYearliesByIdRecord: WorldRecordYearliesConnection
    /** Reads and enables pagination through a set of `WorldRecordWeekly`. */
    worldRecordWeekliesByIdRecord: WorldRecordWeekliesConnection
    /** Reads and enables pagination through a set of `WorldRecordDaily`. */
    worldRecordDailiesByIdRecord: WorldRecordDailiesConnection
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    personalBestQuarterliesByIdRecord: PersonalBestQuarterliesConnection
    /** Reads and enables pagination through a set of `WorldRecordQuarterly`. */
    worldRecordQuarterliesByIdRecord: WorldRecordQuarterliesConnection
    __typename: 'Record'
}

export interface Level {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    hash: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads and enables pagination through a set of `Favorite`. */
    favoritesByIdLevel: FavoritesConnection
    /** Reads and enables pagination through a set of `LevelPoint`. */
    levelPointsByIdLevel: LevelPointsConnection
    /** Reads and enables pagination through a set of `LevelItem`. */
    levelItemsByIdLevel: LevelItemsConnection
    /** Reads and enables pagination through a set of `LevelMetadatum`. */
    levelMetadataByIdLevel: LevelMetadataConnection
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    personalBestGlobalsByIdLevel: PersonalBestGlobalsConnection
    /** Reads and enables pagination through a set of `Record`. */
    recordsByIdLevel: RecordsConnection
    /** Reads and enables pagination through a set of `StatsGlobal`. */
    statsGlobalsByIdLevel: StatsGlobalsConnection
    /** Reads and enables pagination through a set of `Upvote`. */
    upvotesByIdLevel: UpvotesConnection
    /** Reads and enables pagination through a set of `WorldRecordGlobal`. */
    worldRecordGlobalsByIdLevel: WorldRecordGlobalsConnection
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    personalBestYearliesByIdLevel: PersonalBestYearliesConnection
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    personalBestMonthliesByIdLevel: PersonalBestMonthliesConnection
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    personalBestWeekliesByIdLevel: PersonalBestWeekliesConnection
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    personalBestDailiesByIdLevel: PersonalBestDailiesConnection
    /** Reads and enables pagination through a set of `WorldRecordMonthly`. */
    worldRecordMonthliesByIdLevel: WorldRecordMonthliesConnection
    /** Reads and enables pagination through a set of `WorldRecordYearly`. */
    worldRecordYearliesByIdLevel: WorldRecordYearliesConnection
    /** Reads and enables pagination through a set of `WorldRecordWeekly`. */
    worldRecordWeekliesByIdLevel: WorldRecordWeekliesConnection
    /** Reads and enables pagination through a set of `WorldRecordDaily`. */
    worldRecordDailiesByIdLevel: WorldRecordDailiesConnection
    /** Reads and enables pagination through a set of `StatsMonthly`. */
    statsMonthliesByIdLevel: StatsMonthliesConnection
    /** Reads and enables pagination through a set of `StatsYearly`. */
    statsYearliesByIdLevel: StatsYearliesConnection
    /** Reads and enables pagination through a set of `StatsWeekly`. */
    statsWeekliesByIdLevel: StatsWeekliesConnection
    /** Reads and enables pagination through a set of `StatsDaily`. */
    statsDailiesByIdLevel: StatsDailiesConnection
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    personalBestQuarterliesByIdLevel: PersonalBestQuarterliesConnection
    /** Reads and enables pagination through a set of `StatsQuarterly`. */
    statsQuarterliesByIdLevel: StatsQuarterliesConnection
    /** Reads and enables pagination through a set of `WorldRecordQuarterly`. */
    worldRecordQuarterliesByIdLevel: WorldRecordQuarterliesConnection
    /** Reads and enables pagination through a set of `Vote`. */
    votesByIdLevel: VotesConnection
    __typename: 'Level'
}


/** A connection to a list of `LevelPoint` values. */
export interface LevelPointsConnection {
    /** A list of `LevelPoint` objects. */
    nodes: (LevelPoint | null)[]
    /** A list of edges which contains the `LevelPoint` and cursor to aid in pagination. */
    edges: LevelPointsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `LevelPoint` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelPointsConnection'
}

export interface LevelPoint {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    points: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `Level` that is related to this `LevelPoint`. */
    levelByIdLevel: (Level | null)
    __typename: 'LevelPoint'
}


/** A `LevelPoint` edge in the connection. */
export interface LevelPointsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `LevelPoint` at the end of the edge. */
    node: (LevelPoint | null)
    __typename: 'LevelPointsEdge'
}


/** Information about pagination in a connection. */
export interface PageInfo {
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['Cursor'] | null)
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['Cursor'] | null)
    __typename: 'PageInfo'
}


/** Methods to use when ordering `LevelPoint`. */
export type LevelPointsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'POINTS_ASC' | 'POINTS_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `LevelItem` values. */
export interface LevelItemsConnection {
    /** A list of `LevelItem` objects. */
    nodes: (LevelItem | null)[]
    /** A list of edges which contains the `LevelItem` and cursor to aid in pagination. */
    edges: LevelItemsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `LevelItem` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelItemsConnection'
}

export interface LevelItem {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idLevel: Scalars['Int']
    workshopId: Scalars['BigFloat']
    authorId: Scalars['BigFloat']
    name: Scalars['String']
    imageUrl: Scalars['String']
    fileAuthor: Scalars['String']
    fileUid: Scalars['String']
    validationTimeAuthor: Scalars['Float']
    validationTimeGold: Scalars['Float']
    validationTimeSilver: Scalars['Float']
    validationTimeBronze: Scalars['Float']
    deleted: Scalars['Boolean']
    createdAt: Scalars['Datetime']
    updatedAt: Scalars['Datetime']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `Level` that is related to this `LevelItem`. */
    levelByIdLevel: (Level | null)
    __typename: 'LevelItem'
}


/** A `LevelItem` edge in the connection. */
export interface LevelItemsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `LevelItem` at the end of the edge. */
    node: (LevelItem | null)
    __typename: 'LevelItemsEdge'
}


/** Methods to use when ordering `LevelItem`. */
export type LevelItemsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'AUTHOR_ID_ASC' | 'AUTHOR_ID_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'IMAGE_URL_ASC' | 'IMAGE_URL_DESC' | 'FILE_AUTHOR_ASC' | 'FILE_AUTHOR_DESC' | 'FILE_UID_ASC' | 'FILE_UID_DESC' | 'VALIDATION_TIME_AUTHOR_ASC' | 'VALIDATION_TIME_AUTHOR_DESC' | 'VALIDATION_TIME_GOLD_ASC' | 'VALIDATION_TIME_GOLD_DESC' | 'VALIDATION_TIME_SILVER_ASC' | 'VALIDATION_TIME_SILVER_DESC' | 'VALIDATION_TIME_BRONZE_ASC' | 'VALIDATION_TIME_BRONZE_DESC' | 'DELETED_ASC' | 'DELETED_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `LevelMetadatum` values. */
export interface LevelMetadataConnection {
    /** A list of `LevelMetadatum` objects. */
    nodes: (LevelMetadatum | null)[]
    /** A list of edges which contains the `LevelMetadatum` and cursor to aid in pagination. */
    edges: LevelMetadataEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `LevelMetadatum` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelMetadataConnection'
}

export interface LevelMetadatum {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idLevel: Scalars['Int']
    amountCheckpoints: Scalars['Int']
    amountFinishes: Scalars['Int']
    amountBlocks: Scalars['Int']
    typeGround: Scalars['Int']
    typeSkybox: Scalars['Int']
    blocks: Scalars['JSON']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `Level` that is related to this `LevelMetadatum`. */
    levelByIdLevel: (Level | null)
    __typename: 'LevelMetadatum'
}


/** A `LevelMetadatum` edge in the connection. */
export interface LevelMetadataEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `LevelMetadatum` at the end of the edge. */
    node: (LevelMetadatum | null)
    __typename: 'LevelMetadataEdge'
}


/** Methods to use when ordering `LevelMetadatum`. */
export type LevelMetadataOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'AMOUNT_CHECKPOINTS_ASC' | 'AMOUNT_CHECKPOINTS_DESC' | 'AMOUNT_FINISHES_ASC' | 'AMOUNT_FINISHES_DESC' | 'AMOUNT_BLOCKS_ASC' | 'AMOUNT_BLOCKS_DESC' | 'TYPE_GROUND_ASC' | 'TYPE_GROUND_DESC' | 'TYPE_SKYBOX_ASC' | 'TYPE_SKYBOX_DESC' | 'BLOCKS_ASC' | 'BLOCKS_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** Methods to use when ordering `PersonalBestGlobal`. */
export type PersonalBestGlobalsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Record` values. */
export interface RecordsConnection {
    /** A list of `Record` objects. */
    nodes: (Record | null)[]
    /** A list of edges which contains the `Record` and cursor to aid in pagination. */
    edges: RecordsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Record` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'RecordsConnection'
}


/** A `Record` edge in the connection. */
export interface RecordsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Record` at the end of the edge. */
    node: (Record | null)
    __typename: 'RecordsEdge'
}


/** Methods to use when ordering `Record`. */
export type RecordsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'TIME_ASC' | 'TIME_DESC' | 'GAME_VERSION_ASC' | 'GAME_VERSION_DESC' | 'IS_VALID_ASC' | 'IS_VALID_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'MOD_VERSION_ASC' | 'MOD_VERSION_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'SPLITS_ASC' | 'SPLITS_DESC' | 'SPEEDS_ASC' | 'SPEEDS_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `StatsGlobal` values. */
export interface StatsGlobalsConnection {
    /** A list of `StatsGlobal` objects. */
    nodes: (StatsGlobal | null)[]
    /** A list of edges which contains the `StatsGlobal` and cursor to aid in pagination. */
    edges: StatsGlobalsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `StatsGlobal` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'StatsGlobalsConnection'
}

export interface StatsGlobal {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: (Scalars['Int'] | null)
    key: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    value: Scalars['BigFloat']
    /** Reads a single `User` that is related to this `StatsGlobal`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `StatsGlobal`. */
    levelByIdLevel: (Level | null)
    __typename: 'StatsGlobal'
}


/** A `StatsGlobal` edge in the connection. */
export interface StatsGlobalsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `StatsGlobal` at the end of the edge. */
    node: (StatsGlobal | null)
    __typename: 'StatsGlobalsEdge'
}


/** Methods to use when ordering `StatsGlobal`. */
export type StatsGlobalsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'VALUE_ASC' | 'VALUE_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Upvote` values. */
export interface UpvotesConnection {
    /** A list of `Upvote` objects. */
    nodes: (Upvote | null)[]
    /** A list of edges which contains the `Upvote` and cursor to aid in pagination. */
    edges: UpvotesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Upvote` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'UpvotesConnection'
}

export interface Upvote {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `User` that is related to this `Upvote`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `Upvote`. */
    levelByIdLevel: (Level | null)
    __typename: 'Upvote'
}


/** A `Upvote` edge in the connection. */
export interface UpvotesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Upvote` at the end of the edge. */
    node: (Upvote | null)
    __typename: 'UpvotesEdge'
}


/** Methods to use when ordering `Upvote`. */
export type UpvotesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `WorldRecordGlobal` values. */
export interface WorldRecordGlobalsConnection {
    /** A list of `WorldRecordGlobal` objects. */
    nodes: (WorldRecordGlobal | null)[]
    /** A list of edges which contains the `WorldRecordGlobal` and cursor to aid in pagination. */
    edges: WorldRecordGlobalsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `WorldRecordGlobal` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'WorldRecordGlobalsConnection'
}

export interface WorldRecordGlobal {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `Record` that is related to this `WorldRecordGlobal`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `Level` that is related to this `WorldRecordGlobal`. */
    levelByIdLevel: (Level | null)
    __typename: 'WorldRecordGlobal'
}


/** A `WorldRecordGlobal` edge in the connection. */
export interface WorldRecordGlobalsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `WorldRecordGlobal` at the end of the edge. */
    node: (WorldRecordGlobal | null)
    __typename: 'WorldRecordGlobalsEdge'
}


/** Methods to use when ordering `WorldRecordGlobal`. */
export type WorldRecordGlobalsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PersonalBestYearly` values. */
export interface PersonalBestYearliesConnection {
    /** A list of `PersonalBestYearly` objects. */
    nodes: (PersonalBestYearly | null)[]
    /** A list of edges which contains the `PersonalBestYearly` and cursor to aid in pagination. */
    edges: PersonalBestYearliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PersonalBestYearly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PersonalBestYearliesConnection'
}

export interface PersonalBestYearly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    /** Reads a single `Record` that is related to this `PersonalBestYearly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `User` that is related to this `PersonalBestYearly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `PersonalBestYearly`. */
    levelByIdLevel: (Level | null)
    __typename: 'PersonalBestYearly'
}


/** A `PersonalBestYearly` edge in the connection. */
export interface PersonalBestYearliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PersonalBestYearly` at the end of the edge. */
    node: (PersonalBestYearly | null)
    __typename: 'PersonalBestYearliesEdge'
}


/** Methods to use when ordering `PersonalBestYearly`. */
export type PersonalBestYearliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PersonalBestMonthly` values. */
export interface PersonalBestMonthliesConnection {
    /** A list of `PersonalBestMonthly` objects. */
    nodes: (PersonalBestMonthly | null)[]
    /** A list of edges which contains the `PersonalBestMonthly` and cursor to aid in pagination. */
    edges: PersonalBestMonthliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PersonalBestMonthly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PersonalBestMonthliesConnection'
}

export interface PersonalBestMonthly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    month: Scalars['Int']
    /** Reads a single `Record` that is related to this `PersonalBestMonthly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `User` that is related to this `PersonalBestMonthly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `PersonalBestMonthly`. */
    levelByIdLevel: (Level | null)
    __typename: 'PersonalBestMonthly'
}


/** A `PersonalBestMonthly` edge in the connection. */
export interface PersonalBestMonthliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PersonalBestMonthly` at the end of the edge. */
    node: (PersonalBestMonthly | null)
    __typename: 'PersonalBestMonthliesEdge'
}


/** Methods to use when ordering `PersonalBestMonthly`. */
export type PersonalBestMonthliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'MONTH_ASC' | 'MONTH_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PersonalBestWeekly` values. */
export interface PersonalBestWeekliesConnection {
    /** A list of `PersonalBestWeekly` objects. */
    nodes: (PersonalBestWeekly | null)[]
    /** A list of edges which contains the `PersonalBestWeekly` and cursor to aid in pagination. */
    edges: PersonalBestWeekliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PersonalBestWeekly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PersonalBestWeekliesConnection'
}

export interface PersonalBestWeekly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    week: Scalars['Int']
    /** Reads a single `Record` that is related to this `PersonalBestWeekly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `User` that is related to this `PersonalBestWeekly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `PersonalBestWeekly`. */
    levelByIdLevel: (Level | null)
    __typename: 'PersonalBestWeekly'
}


/** A `PersonalBestWeekly` edge in the connection. */
export interface PersonalBestWeekliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PersonalBestWeekly` at the end of the edge. */
    node: (PersonalBestWeekly | null)
    __typename: 'PersonalBestWeekliesEdge'
}


/** Methods to use when ordering `PersonalBestWeekly`. */
export type PersonalBestWeekliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'WEEK_ASC' | 'WEEK_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PersonalBestDaily` values. */
export interface PersonalBestDailiesConnection {
    /** A list of `PersonalBestDaily` objects. */
    nodes: (PersonalBestDaily | null)[]
    /** A list of edges which contains the `PersonalBestDaily` and cursor to aid in pagination. */
    edges: PersonalBestDailiesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PersonalBestDaily` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PersonalBestDailiesConnection'
}

export interface PersonalBestDaily {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    day: Scalars['Int']
    /** Reads a single `Record` that is related to this `PersonalBestDaily`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `User` that is related to this `PersonalBestDaily`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `PersonalBestDaily`. */
    levelByIdLevel: (Level | null)
    __typename: 'PersonalBestDaily'
}


/** A `PersonalBestDaily` edge in the connection. */
export interface PersonalBestDailiesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PersonalBestDaily` at the end of the edge. */
    node: (PersonalBestDaily | null)
    __typename: 'PersonalBestDailiesEdge'
}


/** Methods to use when ordering `PersonalBestDaily`. */
export type PersonalBestDailiesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'DAY_ASC' | 'DAY_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `WorldRecordMonthly` values. */
export interface WorldRecordMonthliesConnection {
    /** A list of `WorldRecordMonthly` objects. */
    nodes: (WorldRecordMonthly | null)[]
    /** A list of edges which contains the `WorldRecordMonthly` and cursor to aid in pagination. */
    edges: WorldRecordMonthliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `WorldRecordMonthly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'WorldRecordMonthliesConnection'
}

export interface WorldRecordMonthly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    month: Scalars['Int']
    /** Reads a single `Record` that is related to this `WorldRecordMonthly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `Level` that is related to this `WorldRecordMonthly`. */
    levelByIdLevel: (Level | null)
    __typename: 'WorldRecordMonthly'
}


/** A `WorldRecordMonthly` edge in the connection. */
export interface WorldRecordMonthliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `WorldRecordMonthly` at the end of the edge. */
    node: (WorldRecordMonthly | null)
    __typename: 'WorldRecordMonthliesEdge'
}


/** Methods to use when ordering `WorldRecordMonthly`. */
export type WorldRecordMonthliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'MONTH_ASC' | 'MONTH_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `WorldRecordYearly` values. */
export interface WorldRecordYearliesConnection {
    /** A list of `WorldRecordYearly` objects. */
    nodes: (WorldRecordYearly | null)[]
    /** A list of edges which contains the `WorldRecordYearly` and cursor to aid in pagination. */
    edges: WorldRecordYearliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `WorldRecordYearly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'WorldRecordYearliesConnection'
}

export interface WorldRecordYearly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    /** Reads a single `Record` that is related to this `WorldRecordYearly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `Level` that is related to this `WorldRecordYearly`. */
    levelByIdLevel: (Level | null)
    __typename: 'WorldRecordYearly'
}


/** A `WorldRecordYearly` edge in the connection. */
export interface WorldRecordYearliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `WorldRecordYearly` at the end of the edge. */
    node: (WorldRecordYearly | null)
    __typename: 'WorldRecordYearliesEdge'
}


/** Methods to use when ordering `WorldRecordYearly`. */
export type WorldRecordYearliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `WorldRecordWeekly` values. */
export interface WorldRecordWeekliesConnection {
    /** A list of `WorldRecordWeekly` objects. */
    nodes: (WorldRecordWeekly | null)[]
    /** A list of edges which contains the `WorldRecordWeekly` and cursor to aid in pagination. */
    edges: WorldRecordWeekliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `WorldRecordWeekly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'WorldRecordWeekliesConnection'
}

export interface WorldRecordWeekly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idLevel: (Scalars['Int'] | null)
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    week: Scalars['Int']
    /** Reads a single `Record` that is related to this `WorldRecordWeekly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `Level` that is related to this `WorldRecordWeekly`. */
    levelByIdLevel: (Level | null)
    __typename: 'WorldRecordWeekly'
}


/** A `WorldRecordWeekly` edge in the connection. */
export interface WorldRecordWeekliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `WorldRecordWeekly` at the end of the edge. */
    node: (WorldRecordWeekly | null)
    __typename: 'WorldRecordWeekliesEdge'
}


/** Methods to use when ordering `WorldRecordWeekly`. */
export type WorldRecordWeekliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'WEEK_ASC' | 'WEEK_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `WorldRecordDaily` values. */
export interface WorldRecordDailiesConnection {
    /** A list of `WorldRecordDaily` objects. */
    nodes: (WorldRecordDaily | null)[]
    /** A list of edges which contains the `WorldRecordDaily` and cursor to aid in pagination. */
    edges: WorldRecordDailiesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `WorldRecordDaily` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'WorldRecordDailiesConnection'
}

export interface WorldRecordDaily {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    day: Scalars['Int']
    /** Reads a single `Record` that is related to this `WorldRecordDaily`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `Level` that is related to this `WorldRecordDaily`. */
    levelByIdLevel: (Level | null)
    __typename: 'WorldRecordDaily'
}


/** A `WorldRecordDaily` edge in the connection. */
export interface WorldRecordDailiesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `WorldRecordDaily` at the end of the edge. */
    node: (WorldRecordDaily | null)
    __typename: 'WorldRecordDailiesEdge'
}


/** Methods to use when ordering `WorldRecordDaily`. */
export type WorldRecordDailiesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'DAY_ASC' | 'DAY_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `StatsMonthly` values. */
export interface StatsMonthliesConnection {
    /** A list of `StatsMonthly` objects. */
    nodes: (StatsMonthly | null)[]
    /** A list of edges which contains the `StatsMonthly` and cursor to aid in pagination. */
    edges: StatsMonthliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `StatsMonthly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'StatsMonthliesConnection'
}

export interface StatsMonthly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: (Scalars['Int'] | null)
    key: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    month: Scalars['Int']
    value: Scalars['BigFloat']
    /** Reads a single `User` that is related to this `StatsMonthly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `StatsMonthly`. */
    levelByIdLevel: (Level | null)
    __typename: 'StatsMonthly'
}


/** A `StatsMonthly` edge in the connection. */
export interface StatsMonthliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `StatsMonthly` at the end of the edge. */
    node: (StatsMonthly | null)
    __typename: 'StatsMonthliesEdge'
}


/** Methods to use when ordering `StatsMonthly`. */
export type StatsMonthliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'MONTH_ASC' | 'MONTH_DESC' | 'VALUE_ASC' | 'VALUE_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `StatsYearly` values. */
export interface StatsYearliesConnection {
    /** A list of `StatsYearly` objects. */
    nodes: (StatsYearly | null)[]
    /** A list of edges which contains the `StatsYearly` and cursor to aid in pagination. */
    edges: StatsYearliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `StatsYearly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'StatsYearliesConnection'
}

export interface StatsYearly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: (Scalars['Int'] | null)
    key: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    value: Scalars['BigFloat']
    /** Reads a single `User` that is related to this `StatsYearly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `StatsYearly`. */
    levelByIdLevel: (Level | null)
    __typename: 'StatsYearly'
}


/** A `StatsYearly` edge in the connection. */
export interface StatsYearliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `StatsYearly` at the end of the edge. */
    node: (StatsYearly | null)
    __typename: 'StatsYearliesEdge'
}


/** Methods to use when ordering `StatsYearly`. */
export type StatsYearliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'VALUE_ASC' | 'VALUE_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `StatsWeekly` values. */
export interface StatsWeekliesConnection {
    /** A list of `StatsWeekly` objects. */
    nodes: (StatsWeekly | null)[]
    /** A list of edges which contains the `StatsWeekly` and cursor to aid in pagination. */
    edges: StatsWeekliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `StatsWeekly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'StatsWeekliesConnection'
}

export interface StatsWeekly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: (Scalars['Int'] | null)
    key: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    week: Scalars['Int']
    value: Scalars['BigFloat']
    /** Reads a single `User` that is related to this `StatsWeekly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `StatsWeekly`. */
    levelByIdLevel: (Level | null)
    __typename: 'StatsWeekly'
}


/** A `StatsWeekly` edge in the connection. */
export interface StatsWeekliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `StatsWeekly` at the end of the edge. */
    node: (StatsWeekly | null)
    __typename: 'StatsWeekliesEdge'
}


/** Methods to use when ordering `StatsWeekly`. */
export type StatsWeekliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'WEEK_ASC' | 'WEEK_DESC' | 'VALUE_ASC' | 'VALUE_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `StatsDaily` values. */
export interface StatsDailiesConnection {
    /** A list of `StatsDaily` objects. */
    nodes: (StatsDaily | null)[]
    /** A list of edges which contains the `StatsDaily` and cursor to aid in pagination. */
    edges: StatsDailiesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `StatsDaily` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'StatsDailiesConnection'
}

export interface StatsDaily {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: (Scalars['Int'] | null)
    key: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    day: Scalars['Int']
    value: Scalars['BigFloat']
    /** Reads a single `User` that is related to this `StatsDaily`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `StatsDaily`. */
    levelByIdLevel: (Level | null)
    __typename: 'StatsDaily'
}


/** A `StatsDaily` edge in the connection. */
export interface StatsDailiesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `StatsDaily` at the end of the edge. */
    node: (StatsDaily | null)
    __typename: 'StatsDailiesEdge'
}


/** Methods to use when ordering `StatsDaily`. */
export type StatsDailiesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'DAY_ASC' | 'DAY_DESC' | 'VALUE_ASC' | 'VALUE_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `PersonalBestQuarterly` values. */
export interface PersonalBestQuarterliesConnection {
    /** A list of `PersonalBestQuarterly` objects. */
    nodes: (PersonalBestQuarterly | null)[]
    /** A list of edges which contains the `PersonalBestQuarterly` and cursor to aid in pagination. */
    edges: PersonalBestQuarterliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `PersonalBestQuarterly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'PersonalBestQuarterliesConnection'
}

export interface PersonalBestQuarterly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    quarter: Scalars['Int']
    /** Reads a single `Record` that is related to this `PersonalBestQuarterly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `User` that is related to this `PersonalBestQuarterly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `PersonalBestQuarterly`. */
    levelByIdLevel: (Level | null)
    __typename: 'PersonalBestQuarterly'
}


/** A `PersonalBestQuarterly` edge in the connection. */
export interface PersonalBestQuarterliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PersonalBestQuarterly` at the end of the edge. */
    node: (PersonalBestQuarterly | null)
    __typename: 'PersonalBestQuarterliesEdge'
}


/** Methods to use when ordering `PersonalBestQuarterly`. */
export type PersonalBestQuarterliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'QUARTER_ASC' | 'QUARTER_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `StatsQuarterly` values. */
export interface StatsQuarterliesConnection {
    /** A list of `StatsQuarterly` objects. */
    nodes: (StatsQuarterly | null)[]
    /** A list of edges which contains the `StatsQuarterly` and cursor to aid in pagination. */
    edges: StatsQuarterliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `StatsQuarterly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'StatsQuarterliesConnection'
}

export interface StatsQuarterly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: (Scalars['Int'] | null)
    key: Scalars['String']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    quarter: Scalars['Int']
    value: Scalars['BigFloat']
    /** Reads a single `User` that is related to this `StatsQuarterly`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `StatsQuarterly`. */
    levelByIdLevel: (Level | null)
    __typename: 'StatsQuarterly'
}


/** A `StatsQuarterly` edge in the connection. */
export interface StatsQuarterliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `StatsQuarterly` at the end of the edge. */
    node: (StatsQuarterly | null)
    __typename: 'StatsQuarterliesEdge'
}


/** Methods to use when ordering `StatsQuarterly`. */
export type StatsQuarterliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'QUARTER_ASC' | 'QUARTER_DESC' | 'VALUE_ASC' | 'VALUE_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `WorldRecordQuarterly` values. */
export interface WorldRecordQuarterliesConnection {
    /** A list of `WorldRecordQuarterly` objects. */
    nodes: (WorldRecordQuarterly | null)[]
    /** A list of edges which contains the `WorldRecordQuarterly` and cursor to aid in pagination. */
    edges: WorldRecordQuarterliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `WorldRecordQuarterly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'WorldRecordQuarterliesConnection'
}

export interface WorldRecordQuarterly {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    idLevel: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    year: Scalars['Int']
    quarter: Scalars['Int']
    /** Reads a single `Record` that is related to this `WorldRecordQuarterly`. */
    recordByIdRecord: (Record | null)
    /** Reads a single `Level` that is related to this `WorldRecordQuarterly`. */
    levelByIdLevel: (Level | null)
    __typename: 'WorldRecordQuarterly'
}


/** A `WorldRecordQuarterly` edge in the connection. */
export interface WorldRecordQuarterliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `WorldRecordQuarterly` at the end of the edge. */
    node: (WorldRecordQuarterly | null)
    __typename: 'WorldRecordQuarterliesEdge'
}


/** Methods to use when ordering `WorldRecordQuarterly`. */
export type WorldRecordQuarterliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'QUARTER_ASC' | 'QUARTER_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Vote` values. */
export interface VotesConnection {
    /** A list of `Vote` objects. */
    nodes: (Vote | null)[]
    /** A list of edges which contains the `Vote` and cursor to aid in pagination. */
    edges: VotesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Vote` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'VotesConnection'
}

export interface Vote {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    idLevel: Scalars['Int']
    value: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `User` that is related to this `Vote`. */
    userByIdUser: (User | null)
    /** Reads a single `Level` that is related to this `Vote`. */
    levelByIdLevel: (Level | null)
    __typename: 'Vote'
}


/** A `Vote` edge in the connection. */
export interface VotesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Vote` at the end of the edge. */
    node: (Vote | null)
    __typename: 'VotesEdge'
}


/** Methods to use when ordering `Vote`. */
export type VotesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'VALUE_ASC' | 'VALUE_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `RecordMedia` values. */
export interface RecordMediasConnection {
    /** A list of `RecordMedia` objects. */
    nodes: (RecordMedia | null)[]
    /** A list of edges which contains the `RecordMedia` and cursor to aid in pagination. */
    edges: RecordMediasEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `RecordMedia` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'RecordMediasConnection'
}

export interface RecordMedia {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idRecord: Scalars['Int']
    ghostUrl: (Scalars['String'] | null)
    screenshotUrl: (Scalars['String'] | null)
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    /** Reads a single `Record` that is related to this `RecordMedia`. */
    recordByIdRecord: (Record | null)
    __typename: 'RecordMedia'
}


/** A `RecordMedia` edge in the connection. */
export interface RecordMediasEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `RecordMedia` at the end of the edge. */
    node: (RecordMedia | null)
    __typename: 'RecordMediasEdge'
}


/** Methods to use when ordering `RecordMedia`. */
export type RecordMediasOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'GHOST_URL_ASC' | 'GHOST_URL_DESC' | 'SCREENSHOT_URL_ASC' | 'SCREENSHOT_URL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A `PersonalBestGlobal` edge in the connection. */
export interface PersonalBestGlobalsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `PersonalBestGlobal` at the end of the edge. */
    node: (PersonalBestGlobal | null)
    __typename: 'PersonalBestGlobalsEdge'
}


/** A connection to a list of `UserPoint` values. */
export interface UserPointsConnection {
    /** A list of `UserPoint` objects. */
    nodes: (UserPoint | null)[]
    /** A list of edges which contains the `UserPoint` and cursor to aid in pagination. */
    edges: UserPointsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `UserPoint` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'UserPointsConnection'
}

export interface UserPoint {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    idUser: Scalars['Int']
    points: Scalars['Int']
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    rank: Scalars['Int']
    worldRecords: (Scalars['Int'] | null)
    /** Reads a single `User` that is related to this `UserPoint`. */
    userByIdUser: (User | null)
    __typename: 'UserPoint'
}


/** A `UserPoint` edge in the connection. */
export interface UserPointsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `UserPoint` at the end of the edge. */
    node: (UserPoint | null)
    __typename: 'UserPointsEdge'
}


/** Methods to use when ordering `UserPoint`. */
export type UserPointsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'POINTS_ASC' | 'POINTS_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'RANK_ASC' | 'RANK_DESC' | 'WORLD_RECORDS_ASC' | 'WORLD_RECORDS_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A `Favorite` edge in the connection. */
export interface FavoritesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Favorite` at the end of the edge. */
    node: (Favorite | null)
    __typename: 'FavoritesEdge'
}


/** A connection to a list of `Level` values. */
export interface LevelsConnection {
    /** A list of `Level` objects. */
    nodes: (Level | null)[]
    /** A list of edges which contains the `Level` and cursor to aid in pagination. */
    edges: LevelsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Level` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelsConnection'
}


/** A `Level` edge in the connection. */
export interface LevelsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Level` at the end of the edge. */
    node: (Level | null)
    __typename: 'LevelsEdge'
}


/** Methods to use when ordering `Level`. */
export type LevelsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'HASH_ASC' | 'HASH_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `LevelRequest` values. */
export interface LevelRequestsConnection {
    /** A list of `LevelRequest` objects. */
    nodes: (LevelRequest | null)[]
    /** A list of edges which contains the `LevelRequest` and cursor to aid in pagination. */
    edges: LevelRequestsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `LevelRequest` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'LevelRequestsConnection'
}

export interface LevelRequest {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    workshopId: Scalars['BigFloat']
    uid: (Scalars['String'] | null)
    hash: (Scalars['String'] | null)
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'LevelRequest'
}


/** A `LevelRequest` edge in the connection. */
export interface LevelRequestsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `LevelRequest` at the end of the edge. */
    node: (LevelRequest | null)
    __typename: 'LevelRequestsEdge'
}


/** Methods to use when ordering `LevelRequest`. */
export type LevelRequestsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'UID_ASC' | 'UID_DESC' | 'HASH_ASC' | 'HASH_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `SampledFavorite` values. */
export interface SampledFavoritesConnection {
    /** A list of `SampledFavorite` objects. */
    nodes: (SampledFavorite | null)[]
    /** A list of edges which contains the `SampledFavorite` and cursor to aid in pagination. */
    edges: SampledFavoritesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledFavorite` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledFavoritesConnection'
}

export interface SampledFavorite {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    idLevel: (Scalars['Int'] | null)
    __typename: 'SampledFavorite'
}


/** A `SampledFavorite` edge in the connection. */
export interface SampledFavoritesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledFavorite` at the end of the edge. */
    node: (SampledFavorite | null)
    __typename: 'SampledFavoritesEdge'
}


/** Methods to use when ordering `SampledFavorite`. */
export type SampledFavoritesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC'


/** A connection to a list of `SampledLevel` values. */
export interface SampledLevelsConnection {
    /** A list of `SampledLevel` objects. */
    nodes: (SampledLevel | null)[]
    /** A list of edges which contains the `SampledLevel` and cursor to aid in pagination. */
    edges: SampledLevelsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledLevel` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledLevelsConnection'
}

export interface SampledLevel {
    id: (Scalars['Int'] | null)
    hash: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledLevel'
}


/** A `SampledLevel` edge in the connection. */
export interface SampledLevelsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledLevel` at the end of the edge. */
    node: (SampledLevel | null)
    __typename: 'SampledLevelsEdge'
}


/** Methods to use when ordering `SampledLevel`. */
export type SampledLevelsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'HASH_ASC' | 'HASH_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledLevelItem` values. */
export interface SampledLevelItemsConnection {
    /** A list of `SampledLevelItem` objects. */
    nodes: (SampledLevelItem | null)[]
    /** A list of edges which contains the `SampledLevelItem` and cursor to aid in pagination. */
    edges: SampledLevelItemsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledLevelItem` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledLevelItemsConnection'
}

export interface SampledLevelItem {
    id: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    workshopId: (Scalars['BigFloat'] | null)
    authorId: (Scalars['BigFloat'] | null)
    name: (Scalars['String'] | null)
    imageUrl: (Scalars['String'] | null)
    fileAuthor: (Scalars['String'] | null)
    fileUid: (Scalars['String'] | null)
    validationTimeAuthor: (Scalars['Float'] | null)
    validationTimeGold: (Scalars['Float'] | null)
    validationTimeSilver: (Scalars['Float'] | null)
    validationTimeBronze: (Scalars['Float'] | null)
    deleted: (Scalars['Boolean'] | null)
    createdAt: (Scalars['Datetime'] | null)
    updatedAt: (Scalars['Datetime'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledLevelItem'
}


/** A `SampledLevelItem` edge in the connection. */
export interface SampledLevelItemsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledLevelItem` at the end of the edge. */
    node: (SampledLevelItem | null)
    __typename: 'SampledLevelItemsEdge'
}


/** Methods to use when ordering `SampledLevelItem`. */
export type SampledLevelItemsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'AUTHOR_ID_ASC' | 'AUTHOR_ID_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'IMAGE_URL_ASC' | 'IMAGE_URL_DESC' | 'FILE_AUTHOR_ASC' | 'FILE_AUTHOR_DESC' | 'FILE_UID_ASC' | 'FILE_UID_DESC' | 'VALIDATION_TIME_AUTHOR_ASC' | 'VALIDATION_TIME_AUTHOR_DESC' | 'VALIDATION_TIME_GOLD_ASC' | 'VALIDATION_TIME_GOLD_DESC' | 'VALIDATION_TIME_SILVER_ASC' | 'VALIDATION_TIME_SILVER_DESC' | 'VALIDATION_TIME_BRONZE_ASC' | 'VALIDATION_TIME_BRONZE_DESC' | 'DELETED_ASC' | 'DELETED_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledLevelMetadatum` values. */
export interface SampledLevelMetadataConnection {
    /** A list of `SampledLevelMetadatum` objects. */
    nodes: (SampledLevelMetadatum | null)[]
    /** A list of edges which contains the `SampledLevelMetadatum` and cursor to aid in pagination. */
    edges: SampledLevelMetadataEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledLevelMetadatum` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledLevelMetadataConnection'
}

export interface SampledLevelMetadatum {
    id: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    amountCheckpoints: (Scalars['Int'] | null)
    amountFinishes: (Scalars['Int'] | null)
    amountBlocks: (Scalars['Int'] | null)
    typeGround: (Scalars['Int'] | null)
    typeSkybox: (Scalars['Int'] | null)
    blocks: (Scalars['JSON'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledLevelMetadatum'
}


/** A `SampledLevelMetadatum` edge in the connection. */
export interface SampledLevelMetadataEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledLevelMetadatum` at the end of the edge. */
    node: (SampledLevelMetadatum | null)
    __typename: 'SampledLevelMetadataEdge'
}


/** Methods to use when ordering `SampledLevelMetadatum`. */
export type SampledLevelMetadataOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'AMOUNT_CHECKPOINTS_ASC' | 'AMOUNT_CHECKPOINTS_DESC' | 'AMOUNT_FINISHES_ASC' | 'AMOUNT_FINISHES_DESC' | 'AMOUNT_BLOCKS_ASC' | 'AMOUNT_BLOCKS_DESC' | 'TYPE_GROUND_ASC' | 'TYPE_GROUND_DESC' | 'TYPE_SKYBOX_ASC' | 'TYPE_SKYBOX_DESC' | 'BLOCKS_ASC' | 'BLOCKS_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledLevelPoint` values. */
export interface SampledLevelPointsConnection {
    /** A list of `SampledLevelPoint` objects. */
    nodes: (SampledLevelPoint | null)[]
    /** A list of edges which contains the `SampledLevelPoint` and cursor to aid in pagination. */
    edges: SampledLevelPointsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledLevelPoint` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledLevelPointsConnection'
}

export interface SampledLevelPoint {
    id: (Scalars['Int'] | null)
    points: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledLevelPoint'
}


/** A `SampledLevelPoint` edge in the connection. */
export interface SampledLevelPointsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledLevelPoint` at the end of the edge. */
    node: (SampledLevelPoint | null)
    __typename: 'SampledLevelPointsEdge'
}


/** Methods to use when ordering `SampledLevelPoint`. */
export type SampledLevelPointsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'POINTS_ASC' | 'POINTS_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledLevelRequest` values. */
export interface SampledLevelRequestsConnection {
    /** A list of `SampledLevelRequest` objects. */
    nodes: (SampledLevelRequest | null)[]
    /** A list of edges which contains the `SampledLevelRequest` and cursor to aid in pagination. */
    edges: SampledLevelRequestsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledLevelRequest` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledLevelRequestsConnection'
}

export interface SampledLevelRequest {
    id: (Scalars['Int'] | null)
    workshopId: (Scalars['BigFloat'] | null)
    uid: (Scalars['String'] | null)
    hash: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledLevelRequest'
}


/** A `SampledLevelRequest` edge in the connection. */
export interface SampledLevelRequestsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledLevelRequest` at the end of the edge. */
    node: (SampledLevelRequest | null)
    __typename: 'SampledLevelRequestsEdge'
}


/** Methods to use when ordering `SampledLevelRequest`. */
export type SampledLevelRequestsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'WORKSHOP_ID_ASC' | 'WORKSHOP_ID_DESC' | 'UID_ASC' | 'UID_DESC' | 'HASH_ASC' | 'HASH_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledPersonalBestDaily` values. */
export interface SampledPersonalBestDailiesConnection {
    /** A list of `SampledPersonalBestDaily` objects. */
    nodes: (SampledPersonalBestDaily | null)[]
    /** A list of edges which contains the `SampledPersonalBestDaily` and cursor to aid in pagination. */
    edges: SampledPersonalBestDailiesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledPersonalBestDaily` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledPersonalBestDailiesConnection'
}

export interface SampledPersonalBestDaily {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    day: (Scalars['Int'] | null)
    __typename: 'SampledPersonalBestDaily'
}


/** A `SampledPersonalBestDaily` edge in the connection. */
export interface SampledPersonalBestDailiesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledPersonalBestDaily` at the end of the edge. */
    node: (SampledPersonalBestDaily | null)
    __typename: 'SampledPersonalBestDailiesEdge'
}


/** Methods to use when ordering `SampledPersonalBestDaily`. */
export type SampledPersonalBestDailiesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'DAY_ASC' | 'DAY_DESC'


/** A connection to a list of `SampledPersonalBestGlobal` values. */
export interface SampledPersonalBestGlobalsConnection {
    /** A list of `SampledPersonalBestGlobal` objects. */
    nodes: (SampledPersonalBestGlobal | null)[]
    /** A list of edges which contains the `SampledPersonalBestGlobal` and cursor to aid in pagination. */
    edges: SampledPersonalBestGlobalsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledPersonalBestGlobal` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledPersonalBestGlobalsConnection'
}

export interface SampledPersonalBestGlobal {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledPersonalBestGlobal'
}


/** A `SampledPersonalBestGlobal` edge in the connection. */
export interface SampledPersonalBestGlobalsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledPersonalBestGlobal` at the end of the edge. */
    node: (SampledPersonalBestGlobal | null)
    __typename: 'SampledPersonalBestGlobalsEdge'
}


/** Methods to use when ordering `SampledPersonalBestGlobal`. */
export type SampledPersonalBestGlobalsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledPersonalBestMonthly` values. */
export interface SampledPersonalBestMonthliesConnection {
    /** A list of `SampledPersonalBestMonthly` objects. */
    nodes: (SampledPersonalBestMonthly | null)[]
    /** A list of edges which contains the `SampledPersonalBestMonthly` and cursor to aid in pagination. */
    edges: SampledPersonalBestMonthliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledPersonalBestMonthly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledPersonalBestMonthliesConnection'
}

export interface SampledPersonalBestMonthly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    month: (Scalars['Int'] | null)
    __typename: 'SampledPersonalBestMonthly'
}


/** A `SampledPersonalBestMonthly` edge in the connection. */
export interface SampledPersonalBestMonthliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledPersonalBestMonthly` at the end of the edge. */
    node: (SampledPersonalBestMonthly | null)
    __typename: 'SampledPersonalBestMonthliesEdge'
}


/** Methods to use when ordering `SampledPersonalBestMonthly`. */
export type SampledPersonalBestMonthliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'MONTH_ASC' | 'MONTH_DESC'


/** A connection to a list of `SampledPersonalBestQuarterly` values. */
export interface SampledPersonalBestQuarterliesConnection {
    /** A list of `SampledPersonalBestQuarterly` objects. */
    nodes: (SampledPersonalBestQuarterly | null)[]
    /** A list of edges which contains the `SampledPersonalBestQuarterly` and cursor to aid in pagination. */
    edges: SampledPersonalBestQuarterliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledPersonalBestQuarterly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledPersonalBestQuarterliesConnection'
}

export interface SampledPersonalBestQuarterly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    quarter: (Scalars['Int'] | null)
    __typename: 'SampledPersonalBestQuarterly'
}


/** A `SampledPersonalBestQuarterly` edge in the connection. */
export interface SampledPersonalBestQuarterliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledPersonalBestQuarterly` at the end of the edge. */
    node: (SampledPersonalBestQuarterly | null)
    __typename: 'SampledPersonalBestQuarterliesEdge'
}


/** Methods to use when ordering `SampledPersonalBestQuarterly`. */
export type SampledPersonalBestQuarterliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'QUARTER_ASC' | 'QUARTER_DESC'


/** A connection to a list of `SampledPersonalBestWeekly` values. */
export interface SampledPersonalBestWeekliesConnection {
    /** A list of `SampledPersonalBestWeekly` objects. */
    nodes: (SampledPersonalBestWeekly | null)[]
    /** A list of edges which contains the `SampledPersonalBestWeekly` and cursor to aid in pagination. */
    edges: SampledPersonalBestWeekliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledPersonalBestWeekly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledPersonalBestWeekliesConnection'
}

export interface SampledPersonalBestWeekly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    week: (Scalars['Int'] | null)
    __typename: 'SampledPersonalBestWeekly'
}


/** A `SampledPersonalBestWeekly` edge in the connection. */
export interface SampledPersonalBestWeekliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledPersonalBestWeekly` at the end of the edge. */
    node: (SampledPersonalBestWeekly | null)
    __typename: 'SampledPersonalBestWeekliesEdge'
}


/** Methods to use when ordering `SampledPersonalBestWeekly`. */
export type SampledPersonalBestWeekliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'WEEK_ASC' | 'WEEK_DESC'


/** A connection to a list of `SampledPersonalBestYearly` values. */
export interface SampledPersonalBestYearliesConnection {
    /** A list of `SampledPersonalBestYearly` objects. */
    nodes: (SampledPersonalBestYearly | null)[]
    /** A list of edges which contains the `SampledPersonalBestYearly` and cursor to aid in pagination. */
    edges: SampledPersonalBestYearliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledPersonalBestYearly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledPersonalBestYearliesConnection'
}

export interface SampledPersonalBestYearly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    __typename: 'SampledPersonalBestYearly'
}


/** A `SampledPersonalBestYearly` edge in the connection. */
export interface SampledPersonalBestYearliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledPersonalBestYearly` at the end of the edge. */
    node: (SampledPersonalBestYearly | null)
    __typename: 'SampledPersonalBestYearliesEdge'
}


/** Methods to use when ordering `SampledPersonalBestYearly`. */
export type SampledPersonalBestYearliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC'


/** A connection to a list of `SampledRecord` values. */
export interface SampledRecordsConnection {
    /** A list of `SampledRecord` objects. */
    nodes: (SampledRecord | null)[]
    /** A list of edges which contains the `SampledRecord` and cursor to aid in pagination. */
    edges: SampledRecordsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledRecord` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledRecordsConnection'
}

export interface SampledRecord {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    time: (Scalars['Float'] | null)
    gameVersion: (Scalars['String'] | null)
    isValid: (Scalars['Boolean'] | null)
    idLevel: (Scalars['Int'] | null)
    modVersion: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    splits: ((Scalars['Float'] | null)[] | null)
    speeds: ((Scalars['Float'] | null)[] | null)
    __typename: 'SampledRecord'
}


/** A `SampledRecord` edge in the connection. */
export interface SampledRecordsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledRecord` at the end of the edge. */
    node: (SampledRecord | null)
    __typename: 'SampledRecordsEdge'
}


/** Methods to use when ordering `SampledRecord`. */
export type SampledRecordsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'TIME_ASC' | 'TIME_DESC' | 'GAME_VERSION_ASC' | 'GAME_VERSION_DESC' | 'IS_VALID_ASC' | 'IS_VALID_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'MOD_VERSION_ASC' | 'MOD_VERSION_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'SPLITS_ASC' | 'SPLITS_DESC' | 'SPEEDS_ASC' | 'SPEEDS_DESC'


/** A connection to a list of `SampledRecordMedia` values. */
export interface SampledRecordMediasConnection {
    /** A list of `SampledRecordMedia` objects. */
    nodes: (SampledRecordMedia | null)[]
    /** A list of edges which contains the `SampledRecordMedia` and cursor to aid in pagination. */
    edges: SampledRecordMediasEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledRecordMedia` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledRecordMediasConnection'
}

export interface SampledRecordMedia {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    ghostUrl: (Scalars['String'] | null)
    screenshotUrl: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledRecordMedia'
}


/** A `SampledRecordMedia` edge in the connection. */
export interface SampledRecordMediasEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledRecordMedia` at the end of the edge. */
    node: (SampledRecordMedia | null)
    __typename: 'SampledRecordMediasEdge'
}


/** Methods to use when ordering `SampledRecordMedia`. */
export type SampledRecordMediasOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'GHOST_URL_ASC' | 'GHOST_URL_DESC' | 'SCREENSHOT_URL_ASC' | 'SCREENSHOT_URL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledStatsDaily` values. */
export interface SampledStatsDailiesConnection {
    /** A list of `SampledStatsDaily` objects. */
    nodes: (SampledStatsDaily | null)[]
    /** A list of edges which contains the `SampledStatsDaily` and cursor to aid in pagination. */
    edges: SampledStatsDailiesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledStatsDaily` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledStatsDailiesConnection'
}

export interface SampledStatsDaily {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    key: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    day: (Scalars['Int'] | null)
    value: (Scalars['BigFloat'] | null)
    __typename: 'SampledStatsDaily'
}


/** A `SampledStatsDaily` edge in the connection. */
export interface SampledStatsDailiesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledStatsDaily` at the end of the edge. */
    node: (SampledStatsDaily | null)
    __typename: 'SampledStatsDailiesEdge'
}


/** Methods to use when ordering `SampledStatsDaily`. */
export type SampledStatsDailiesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'DAY_ASC' | 'DAY_DESC' | 'VALUE_ASC' | 'VALUE_DESC'


/** A connection to a list of `SampledStatsGlobal` values. */
export interface SampledStatsGlobalsConnection {
    /** A list of `SampledStatsGlobal` objects. */
    nodes: (SampledStatsGlobal | null)[]
    /** A list of edges which contains the `SampledStatsGlobal` and cursor to aid in pagination. */
    edges: SampledStatsGlobalsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledStatsGlobal` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledStatsGlobalsConnection'
}

export interface SampledStatsGlobal {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    key: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    value: (Scalars['BigFloat'] | null)
    __typename: 'SampledStatsGlobal'
}


/** A `SampledStatsGlobal` edge in the connection. */
export interface SampledStatsGlobalsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledStatsGlobal` at the end of the edge. */
    node: (SampledStatsGlobal | null)
    __typename: 'SampledStatsGlobalsEdge'
}


/** Methods to use when ordering `SampledStatsGlobal`. */
export type SampledStatsGlobalsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'VALUE_ASC' | 'VALUE_DESC'


/** A connection to a list of `SampledStatsMonthly` values. */
export interface SampledStatsMonthliesConnection {
    /** A list of `SampledStatsMonthly` objects. */
    nodes: (SampledStatsMonthly | null)[]
    /** A list of edges which contains the `SampledStatsMonthly` and cursor to aid in pagination. */
    edges: SampledStatsMonthliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledStatsMonthly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledStatsMonthliesConnection'
}

export interface SampledStatsMonthly {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    key: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    month: (Scalars['Int'] | null)
    value: (Scalars['BigFloat'] | null)
    __typename: 'SampledStatsMonthly'
}


/** A `SampledStatsMonthly` edge in the connection. */
export interface SampledStatsMonthliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledStatsMonthly` at the end of the edge. */
    node: (SampledStatsMonthly | null)
    __typename: 'SampledStatsMonthliesEdge'
}


/** Methods to use when ordering `SampledStatsMonthly`. */
export type SampledStatsMonthliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'MONTH_ASC' | 'MONTH_DESC' | 'VALUE_ASC' | 'VALUE_DESC'


/** A connection to a list of `SampledStatsQuarterly` values. */
export interface SampledStatsQuarterliesConnection {
    /** A list of `SampledStatsQuarterly` objects. */
    nodes: (SampledStatsQuarterly | null)[]
    /** A list of edges which contains the `SampledStatsQuarterly` and cursor to aid in pagination. */
    edges: SampledStatsQuarterliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledStatsQuarterly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledStatsQuarterliesConnection'
}

export interface SampledStatsQuarterly {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    key: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    quarter: (Scalars['Int'] | null)
    value: (Scalars['BigFloat'] | null)
    __typename: 'SampledStatsQuarterly'
}


/** A `SampledStatsQuarterly` edge in the connection. */
export interface SampledStatsQuarterliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledStatsQuarterly` at the end of the edge. */
    node: (SampledStatsQuarterly | null)
    __typename: 'SampledStatsQuarterliesEdge'
}


/** Methods to use when ordering `SampledStatsQuarterly`. */
export type SampledStatsQuarterliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'QUARTER_ASC' | 'QUARTER_DESC' | 'VALUE_ASC' | 'VALUE_DESC'


/** A connection to a list of `SampledStatsWeekly` values. */
export interface SampledStatsWeekliesConnection {
    /** A list of `SampledStatsWeekly` objects. */
    nodes: (SampledStatsWeekly | null)[]
    /** A list of edges which contains the `SampledStatsWeekly` and cursor to aid in pagination. */
    edges: SampledStatsWeekliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledStatsWeekly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledStatsWeekliesConnection'
}

export interface SampledStatsWeekly {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    key: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    week: (Scalars['Int'] | null)
    value: (Scalars['BigFloat'] | null)
    __typename: 'SampledStatsWeekly'
}


/** A `SampledStatsWeekly` edge in the connection. */
export interface SampledStatsWeekliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledStatsWeekly` at the end of the edge. */
    node: (SampledStatsWeekly | null)
    __typename: 'SampledStatsWeekliesEdge'
}


/** Methods to use when ordering `SampledStatsWeekly`. */
export type SampledStatsWeekliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'WEEK_ASC' | 'WEEK_DESC' | 'VALUE_ASC' | 'VALUE_DESC'


/** A connection to a list of `SampledStatsYearly` values. */
export interface SampledStatsYearliesConnection {
    /** A list of `SampledStatsYearly` objects. */
    nodes: (SampledStatsYearly | null)[]
    /** A list of edges which contains the `SampledStatsYearly` and cursor to aid in pagination. */
    edges: SampledStatsYearliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledStatsYearly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledStatsYearliesConnection'
}

export interface SampledStatsYearly {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    key: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    value: (Scalars['BigFloat'] | null)
    __typename: 'SampledStatsYearly'
}


/** A `SampledStatsYearly` edge in the connection. */
export interface SampledStatsYearliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledStatsYearly` at the end of the edge. */
    node: (SampledStatsYearly | null)
    __typename: 'SampledStatsYearliesEdge'
}


/** Methods to use when ordering `SampledStatsYearly`. */
export type SampledStatsYearliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'KEY_ASC' | 'KEY_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'VALUE_ASC' | 'VALUE_DESC'


/** A connection to a list of `SampledUpvote` values. */
export interface SampledUpvotesConnection {
    /** A list of `SampledUpvote` objects. */
    nodes: (SampledUpvote | null)[]
    /** A list of edges which contains the `SampledUpvote` and cursor to aid in pagination. */
    edges: SampledUpvotesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledUpvote` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledUpvotesConnection'
}

export interface SampledUpvote {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledUpvote'
}


/** A `SampledUpvote` edge in the connection. */
export interface SampledUpvotesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledUpvote` at the end of the edge. */
    node: (SampledUpvote | null)
    __typename: 'SampledUpvotesEdge'
}


/** Methods to use when ordering `SampledUpvote`. */
export type SampledUpvotesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledUser` values. */
export interface SampledUsersConnection {
    /** A list of `SampledUser` objects. */
    nodes: (SampledUser | null)[]
    /** A list of edges which contains the `SampledUser` and cursor to aid in pagination. */
    edges: SampledUsersEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledUser` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledUsersConnection'
}

export interface SampledUser {
    id: (Scalars['Int'] | null)
    steamName: (Scalars['String'] | null)
    banned: (Scalars['Boolean'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    steamId: (Scalars['BigFloat'] | null)
    discordId: (Scalars['BigFloat'] | null)
    __typename: 'SampledUser'
}


/** A `SampledUser` edge in the connection. */
export interface SampledUsersEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledUser` at the end of the edge. */
    node: (SampledUser | null)
    __typename: 'SampledUsersEdge'
}


/** Methods to use when ordering `SampledUser`. */
export type SampledUsersOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'STEAM_NAME_ASC' | 'STEAM_NAME_DESC' | 'BANNED_ASC' | 'BANNED_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'STEAM_ID_ASC' | 'STEAM_ID_DESC' | 'DISCORD_ID_ASC' | 'DISCORD_ID_DESC'


/** A connection to a list of `SampledUserPoint` values. */
export interface SampledUserPointsConnection {
    /** A list of `SampledUserPoint` objects. */
    nodes: (SampledUserPoint | null)[]
    /** A list of edges which contains the `SampledUserPoint` and cursor to aid in pagination. */
    edges: SampledUserPointsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledUserPoint` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledUserPointsConnection'
}

export interface SampledUserPoint {
    id: (Scalars['Int'] | null)
    idUser: (Scalars['Int'] | null)
    points: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    rank: (Scalars['Int'] | null)
    worldRecords: (Scalars['Int'] | null)
    __typename: 'SampledUserPoint'
}


/** A `SampledUserPoint` edge in the connection. */
export interface SampledUserPointsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledUserPoint` at the end of the edge. */
    node: (SampledUserPoint | null)
    __typename: 'SampledUserPointsEdge'
}


/** Methods to use when ordering `SampledUserPoint`. */
export type SampledUserPointsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_USER_ASC' | 'ID_USER_DESC' | 'POINTS_ASC' | 'POINTS_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'RANK_ASC' | 'RANK_DESC' | 'WORLD_RECORDS_ASC' | 'WORLD_RECORDS_DESC'


/** A connection to a list of `SampledVersion` values. */
export interface SampledVersionsConnection {
    /** A list of `SampledVersion` objects. */
    nodes: (SampledVersion | null)[]
    /** A list of edges which contains the `SampledVersion` and cursor to aid in pagination. */
    edges: SampledVersionsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledVersion` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledVersionsConnection'
}

export interface SampledVersion {
    id: (Scalars['Int'] | null)
    minimum: (Scalars['String'] | null)
    latest: (Scalars['String'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledVersion'
}


/** A `SampledVersion` edge in the connection. */
export interface SampledVersionsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledVersion` at the end of the edge. */
    node: (SampledVersion | null)
    __typename: 'SampledVersionsEdge'
}


/** Methods to use when ordering `SampledVersion`. */
export type SampledVersionsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'MINIMUM_ASC' | 'MINIMUM_DESC' | 'LATEST_ASC' | 'LATEST_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledWorldRecordDaily` values. */
export interface SampledWorldRecordDailiesConnection {
    /** A list of `SampledWorldRecordDaily` objects. */
    nodes: (SampledWorldRecordDaily | null)[]
    /** A list of edges which contains the `SampledWorldRecordDaily` and cursor to aid in pagination. */
    edges: SampledWorldRecordDailiesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledWorldRecordDaily` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledWorldRecordDailiesConnection'
}

export interface SampledWorldRecordDaily {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    day: (Scalars['Int'] | null)
    __typename: 'SampledWorldRecordDaily'
}


/** A `SampledWorldRecordDaily` edge in the connection. */
export interface SampledWorldRecordDailiesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledWorldRecordDaily` at the end of the edge. */
    node: (SampledWorldRecordDaily | null)
    __typename: 'SampledWorldRecordDailiesEdge'
}


/** Methods to use when ordering `SampledWorldRecordDaily`. */
export type SampledWorldRecordDailiesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'DAY_ASC' | 'DAY_DESC'


/** A connection to a list of `SampledWorldRecordGlobal` values. */
export interface SampledWorldRecordGlobalsConnection {
    /** A list of `SampledWorldRecordGlobal` objects. */
    nodes: (SampledWorldRecordGlobal | null)[]
    /** A list of edges which contains the `SampledWorldRecordGlobal` and cursor to aid in pagination. */
    edges: SampledWorldRecordGlobalsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledWorldRecordGlobal` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledWorldRecordGlobalsConnection'
}

export interface SampledWorldRecordGlobal {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'SampledWorldRecordGlobal'
}


/** A `SampledWorldRecordGlobal` edge in the connection. */
export interface SampledWorldRecordGlobalsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledWorldRecordGlobal` at the end of the edge. */
    node: (SampledWorldRecordGlobal | null)
    __typename: 'SampledWorldRecordGlobalsEdge'
}


/** Methods to use when ordering `SampledWorldRecordGlobal`. */
export type SampledWorldRecordGlobalsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC'


/** A connection to a list of `SampledWorldRecordMonthly` values. */
export interface SampledWorldRecordMonthliesConnection {
    /** A list of `SampledWorldRecordMonthly` objects. */
    nodes: (SampledWorldRecordMonthly | null)[]
    /** A list of edges which contains the `SampledWorldRecordMonthly` and cursor to aid in pagination. */
    edges: SampledWorldRecordMonthliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledWorldRecordMonthly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledWorldRecordMonthliesConnection'
}

export interface SampledWorldRecordMonthly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    month: (Scalars['Int'] | null)
    __typename: 'SampledWorldRecordMonthly'
}


/** A `SampledWorldRecordMonthly` edge in the connection. */
export interface SampledWorldRecordMonthliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledWorldRecordMonthly` at the end of the edge. */
    node: (SampledWorldRecordMonthly | null)
    __typename: 'SampledWorldRecordMonthliesEdge'
}


/** Methods to use when ordering `SampledWorldRecordMonthly`. */
export type SampledWorldRecordMonthliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'MONTH_ASC' | 'MONTH_DESC'


/** A connection to a list of `SampledWorldRecordQuarterly` values. */
export interface SampledWorldRecordQuarterliesConnection {
    /** A list of `SampledWorldRecordQuarterly` objects. */
    nodes: (SampledWorldRecordQuarterly | null)[]
    /** A list of edges which contains the `SampledWorldRecordQuarterly` and cursor to aid in pagination. */
    edges: SampledWorldRecordQuarterliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledWorldRecordQuarterly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledWorldRecordQuarterliesConnection'
}

export interface SampledWorldRecordQuarterly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    quarter: (Scalars['Int'] | null)
    __typename: 'SampledWorldRecordQuarterly'
}


/** A `SampledWorldRecordQuarterly` edge in the connection. */
export interface SampledWorldRecordQuarterliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledWorldRecordQuarterly` at the end of the edge. */
    node: (SampledWorldRecordQuarterly | null)
    __typename: 'SampledWorldRecordQuarterliesEdge'
}


/** Methods to use when ordering `SampledWorldRecordQuarterly`. */
export type SampledWorldRecordQuarterliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'QUARTER_ASC' | 'QUARTER_DESC'


/** A connection to a list of `SampledWorldRecordWeekly` values. */
export interface SampledWorldRecordWeekliesConnection {
    /** A list of `SampledWorldRecordWeekly` objects. */
    nodes: (SampledWorldRecordWeekly | null)[]
    /** A list of edges which contains the `SampledWorldRecordWeekly` and cursor to aid in pagination. */
    edges: SampledWorldRecordWeekliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledWorldRecordWeekly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledWorldRecordWeekliesConnection'
}

export interface SampledWorldRecordWeekly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    week: (Scalars['Int'] | null)
    __typename: 'SampledWorldRecordWeekly'
}


/** A `SampledWorldRecordWeekly` edge in the connection. */
export interface SampledWorldRecordWeekliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledWorldRecordWeekly` at the end of the edge. */
    node: (SampledWorldRecordWeekly | null)
    __typename: 'SampledWorldRecordWeekliesEdge'
}


/** Methods to use when ordering `SampledWorldRecordWeekly`. */
export type SampledWorldRecordWeekliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC' | 'WEEK_ASC' | 'WEEK_DESC'


/** A connection to a list of `SampledWorldRecordYearly` values. */
export interface SampledWorldRecordYearliesConnection {
    /** A list of `SampledWorldRecordYearly` objects. */
    nodes: (SampledWorldRecordYearly | null)[]
    /** A list of edges which contains the `SampledWorldRecordYearly` and cursor to aid in pagination. */
    edges: SampledWorldRecordYearliesEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `SampledWorldRecordYearly` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'SampledWorldRecordYearliesConnection'
}

export interface SampledWorldRecordYearly {
    id: (Scalars['Int'] | null)
    idRecord: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    year: (Scalars['Int'] | null)
    __typename: 'SampledWorldRecordYearly'
}


/** A `SampledWorldRecordYearly` edge in the connection. */
export interface SampledWorldRecordYearliesEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `SampledWorldRecordYearly` at the end of the edge. */
    node: (SampledWorldRecordYearly | null)
    __typename: 'SampledWorldRecordYearliesEdge'
}


/** Methods to use when ordering `SampledWorldRecordYearly`. */
export type SampledWorldRecordYearliesOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'ID_RECORD_ASC' | 'ID_RECORD_DESC' | 'ID_LEVEL_ASC' | 'ID_LEVEL_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'YEAR_ASC' | 'YEAR_DESC'


/** A connection to a list of `User` values. */
export interface UsersConnection {
    /** A list of `User` objects. */
    nodes: (User | null)[]
    /** A list of edges which contains the `User` and cursor to aid in pagination. */
    edges: UsersEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `User` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'UsersConnection'
}


/** A `User` edge in the connection. */
export interface UsersEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `User` at the end of the edge. */
    node: (User | null)
    __typename: 'UsersEdge'
}


/** Methods to use when ordering `User`. */
export type UsersOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'STEAM_NAME_ASC' | 'STEAM_NAME_DESC' | 'BANNED_ASC' | 'BANNED_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'STEAM_ID_ASC' | 'STEAM_ID_DESC' | 'DISCORD_ID_ASC' | 'DISCORD_ID_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `Version` values. */
export interface VersionsConnection {
    /** A list of `Version` objects. */
    nodes: (Version | null)[]
    /** A list of edges which contains the `Version` and cursor to aid in pagination. */
    edges: VersionsEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The count of *all* `Version` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'VersionsConnection'
}

export interface Version {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID']
    id: Scalars['Int']
    minimum: (Scalars['String'] | null)
    latest: (Scalars['String'] | null)
    dateCreated: Scalars['Datetime']
    dateUpdated: (Scalars['Datetime'] | null)
    __typename: 'Version'
}


/** A `Version` edge in the connection. */
export interface VersionsEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `Version` at the end of the edge. */
    node: (Version | null)
    __typename: 'VersionsEdge'
}


/** Methods to use when ordering `Version`. */
export type VersionsOrderBy = 'NATURAL' | 'ID_ASC' | 'ID_DESC' | 'MINIMUM_ASC' | 'MINIMUM_DESC' | 'LATEST_ASC' | 'LATEST_DESC' | 'DATE_CREATED_ASC' | 'DATE_CREATED_DESC' | 'DATE_UPDATED_ASC' | 'DATE_UPDATED_DESC' | 'PRIMARY_KEY_ASC' | 'PRIMARY_KEY_DESC'


/** A connection to a list of `ZRtmRecord` values. */
export interface ZRtmConnection {
    /** A list of `ZRtmRecord` objects. */
    nodes: (ZRtmRecord | null)[]
    /** A list of edges which contains the `ZRtmRecord` and cursor to aid in pagination. */
    edges: ZRtmEdge[]
    /** The count of *all* `ZRtmRecord` you could get from the connection. */
    totalCount: Scalars['Int']
    __typename: 'ZRtmConnection'
}


/** The return type of our `zRtm` query. */
export interface ZRtmRecord {
    id: (Scalars['Int'] | null)
    idLevel: (Scalars['Int'] | null)
    workshopId: (Scalars['BigFloat'] | null)
    authorId: (Scalars['BigFloat'] | null)
    name: (Scalars['String'] | null)
    imageUrl: (Scalars['String'] | null)
    fileAuthor: (Scalars['String'] | null)
    fileUid: (Scalars['String'] | null)
    validationTimeAuthor: (Scalars['Float'] | null)
    validationTimeGold: (Scalars['Float'] | null)
    validationTimeSilver: (Scalars['Float'] | null)
    validationTimeBronze: (Scalars['Float'] | null)
    deleted: (Scalars['Boolean'] | null)
    createdAt: (Scalars['Datetime'] | null)
    updatedAt: (Scalars['Datetime'] | null)
    dateCreated: (Scalars['Datetime'] | null)
    dateUpdated: (Scalars['Datetime'] | null)
    amountCheckpoints: (Scalars['Int'] | null)
    amountFinishes: (Scalars['Int'] | null)
    amountBlocks: (Scalars['Int'] | null)
    numRecords: (Scalars['BigInt'] | null)
    __typename: 'ZRtmRecord'
}


/** A `ZRtmRecord` edge in the connection. */
export interface ZRtmEdge {
    /** A cursor for use in pagination. */
    cursor: (Scalars['Cursor'] | null)
    /** The `ZRtmRecord` at the end of the edge. */
    node: (ZRtmRecord | null)
    __typename: 'ZRtmEdge'
}


/** The root mutation type which contains root level fields which mutate data. */
export interface Mutation {
    updateWorldRecordGlobal: (UpdateWorldRecordGlobalPayload | null)
    __typename: 'Mutation'
}


/** The output of our `updateWorldRecordGlobal` mutation. */
export interface UpdateWorldRecordGlobalPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: (Scalars['String'] | null)
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query: (Query | null)
    __typename: 'UpdateWorldRecordGlobalPayload'
}


/** The root query type which gives access points into the data universe. */
export interface QueryGenqlSelection{
    /**
     * Exposes the root query type nested one level down. This is helpful for Relay 1
     * which can only query top level fields if they are in a particular form.
     */
    query?: QueryGenqlSelection
    /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
    nodeId?: boolean | number
    /** Fetches an object given its globally unique `ID`. */
    node?: (NodeGenqlSelection & { __args: {
    /** The globally unique `ID`. */
    nodeId: Scalars['ID']} })
    /** Reads and enables pagination through a set of `Favorite`. */
    allFavorites?: (FavoritesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Favorite`. */
    orderBy?: (FavoritesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (FavoriteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (FavoriteFilter | null)} })
    /** Reads and enables pagination through a set of `Level`. */
    allLevels?: (LevelsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Level`. */
    orderBy?: (LevelsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelFilter | null)} })
    /** Reads and enables pagination through a set of `LevelItem`. */
    allLevelItems?: (LevelItemsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelItem`. */
    orderBy?: (LevelItemsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelItemCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelItemFilter | null)} })
    /** Reads and enables pagination through a set of `LevelMetadatum`. */
    allLevelMetadata?: (LevelMetadataConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelMetadatum`. */
    orderBy?: (LevelMetadataOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelMetadatumCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelMetadatumFilter | null)} })
    /** Reads and enables pagination through a set of `LevelPoint`. */
    allLevelPoints?: (LevelPointsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelPoint`. */
    orderBy?: (LevelPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelPointCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelPointFilter | null)} })
    /** Reads and enables pagination through a set of `LevelRequest`. */
    allLevelRequests?: (LevelRequestsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelRequest`. */
    orderBy?: (LevelRequestsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelRequestCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelRequestFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    allPersonalBestDailies?: (PersonalBestDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestDaily`. */
    orderBy?: (PersonalBestDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestDailyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    allPersonalBestGlobals?: (PersonalBestGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestGlobal`. */
    orderBy?: (PersonalBestGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    allPersonalBestMonthlies?: (PersonalBestMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestMonthly`. */
    orderBy?: (PersonalBestMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    allPersonalBestQuarterlies?: (PersonalBestQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestQuarterly`. */
    orderBy?: (PersonalBestQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    allPersonalBestWeeklies?: (PersonalBestWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestWeekly`. */
    orderBy?: (PersonalBestWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    allPersonalBestYearlies?: (PersonalBestYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestYearly`. */
    orderBy?: (PersonalBestYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `Record`. */
    allRecords?: (RecordsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Record`. */
    orderBy?: (RecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RecordCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (RecordFilter | null)} })
    /** Reads and enables pagination through a set of `RecordMedia`. */
    allRecordMedias?: (RecordMediasConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `RecordMedia`. */
    orderBy?: (RecordMediasOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RecordMediaCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (RecordMediaFilter | null)} })
    /** Reads and enables pagination through a set of `SampledFavorite`. */
    allSampledFavorites?: (SampledFavoritesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledFavorite`. */
    orderBy?: (SampledFavoritesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledFavoriteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledFavoriteFilter | null)} })
    /** Reads and enables pagination through a set of `SampledLevel`. */
    allSampledLevels?: (SampledLevelsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledLevel`. */
    orderBy?: (SampledLevelsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledLevelCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledLevelFilter | null)} })
    /** Reads and enables pagination through a set of `SampledLevelItem`. */
    allSampledLevelItems?: (SampledLevelItemsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledLevelItem`. */
    orderBy?: (SampledLevelItemsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledLevelItemCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledLevelItemFilter | null)} })
    /** Reads and enables pagination through a set of `SampledLevelMetadatum`. */
    allSampledLevelMetadata?: (SampledLevelMetadataConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledLevelMetadatum`. */
    orderBy?: (SampledLevelMetadataOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledLevelMetadatumCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledLevelMetadatumFilter | null)} })
    /** Reads and enables pagination through a set of `SampledLevelPoint`. */
    allSampledLevelPoints?: (SampledLevelPointsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledLevelPoint`. */
    orderBy?: (SampledLevelPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledLevelPointCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledLevelPointFilter | null)} })
    /** Reads and enables pagination through a set of `SampledLevelRequest`. */
    allSampledLevelRequests?: (SampledLevelRequestsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledLevelRequest`. */
    orderBy?: (SampledLevelRequestsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledLevelRequestCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledLevelRequestFilter | null)} })
    /** Reads and enables pagination through a set of `SampledPersonalBestDaily`. */
    allSampledPersonalBestDailies?: (SampledPersonalBestDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledPersonalBestDaily`. */
    orderBy?: (SampledPersonalBestDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledPersonalBestDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledPersonalBestDailyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledPersonalBestGlobal`. */
    allSampledPersonalBestGlobals?: (SampledPersonalBestGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledPersonalBestGlobal`. */
    orderBy?: (SampledPersonalBestGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledPersonalBestGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledPersonalBestGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `SampledPersonalBestMonthly`. */
    allSampledPersonalBestMonthlies?: (SampledPersonalBestMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledPersonalBestMonthly`. */
    orderBy?: (SampledPersonalBestMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledPersonalBestMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledPersonalBestMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledPersonalBestQuarterly`. */
    allSampledPersonalBestQuarterlies?: (SampledPersonalBestQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledPersonalBestQuarterly`. */
    orderBy?: (SampledPersonalBestQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledPersonalBestQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledPersonalBestQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledPersonalBestWeekly`. */
    allSampledPersonalBestWeeklies?: (SampledPersonalBestWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledPersonalBestWeekly`. */
    orderBy?: (SampledPersonalBestWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledPersonalBestWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledPersonalBestWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledPersonalBestYearly`. */
    allSampledPersonalBestYearlies?: (SampledPersonalBestYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledPersonalBestYearly`. */
    orderBy?: (SampledPersonalBestYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledPersonalBestYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledPersonalBestYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledRecord`. */
    allSampledRecords?: (SampledRecordsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledRecord`. */
    orderBy?: (SampledRecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledRecordCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledRecordFilter | null)} })
    /** Reads and enables pagination through a set of `SampledRecordMedia`. */
    allSampledRecordMedias?: (SampledRecordMediasConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledRecordMedia`. */
    orderBy?: (SampledRecordMediasOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledRecordMediaCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledRecordMediaFilter | null)} })
    /** Reads and enables pagination through a set of `SampledStatsDaily`. */
    allSampledStatsDailies?: (SampledStatsDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledStatsDaily`. */
    orderBy?: (SampledStatsDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledStatsDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledStatsDailyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledStatsGlobal`. */
    allSampledStatsGlobals?: (SampledStatsGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledStatsGlobal`. */
    orderBy?: (SampledStatsGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledStatsGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledStatsGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `SampledStatsMonthly`. */
    allSampledStatsMonthlies?: (SampledStatsMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledStatsMonthly`. */
    orderBy?: (SampledStatsMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledStatsMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledStatsMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledStatsQuarterly`. */
    allSampledStatsQuarterlies?: (SampledStatsQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledStatsQuarterly`. */
    orderBy?: (SampledStatsQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledStatsQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledStatsQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledStatsWeekly`. */
    allSampledStatsWeeklies?: (SampledStatsWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledStatsWeekly`. */
    orderBy?: (SampledStatsWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledStatsWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledStatsWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledStatsYearly`. */
    allSampledStatsYearlies?: (SampledStatsYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledStatsYearly`. */
    orderBy?: (SampledStatsYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledStatsYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledStatsYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledUpvote`. */
    allSampledUpvotes?: (SampledUpvotesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledUpvote`. */
    orderBy?: (SampledUpvotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledUpvoteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledUpvoteFilter | null)} })
    /** Reads and enables pagination through a set of `SampledUser`. */
    allSampledUsers?: (SampledUsersConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledUser`. */
    orderBy?: (SampledUsersOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledUserCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledUserFilter | null)} })
    /** Reads and enables pagination through a set of `SampledUserPoint`. */
    allSampledUserPoints?: (SampledUserPointsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledUserPoint`. */
    orderBy?: (SampledUserPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledUserPointCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledUserPointFilter | null)} })
    /** Reads and enables pagination through a set of `SampledVersion`. */
    allSampledVersions?: (SampledVersionsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledVersion`. */
    orderBy?: (SampledVersionsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledVersionCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledVersionFilter | null)} })
    /** Reads and enables pagination through a set of `SampledWorldRecordDaily`. */
    allSampledWorldRecordDailies?: (SampledWorldRecordDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledWorldRecordDaily`. */
    orderBy?: (SampledWorldRecordDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledWorldRecordDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledWorldRecordDailyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledWorldRecordGlobal`. */
    allSampledWorldRecordGlobals?: (SampledWorldRecordGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledWorldRecordGlobal`. */
    orderBy?: (SampledWorldRecordGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledWorldRecordGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledWorldRecordGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `SampledWorldRecordMonthly`. */
    allSampledWorldRecordMonthlies?: (SampledWorldRecordMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledWorldRecordMonthly`. */
    orderBy?: (SampledWorldRecordMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledWorldRecordMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledWorldRecordMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledWorldRecordQuarterly`. */
    allSampledWorldRecordQuarterlies?: (SampledWorldRecordQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledWorldRecordQuarterly`. */
    orderBy?: (SampledWorldRecordQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledWorldRecordQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledWorldRecordQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledWorldRecordWeekly`. */
    allSampledWorldRecordWeeklies?: (SampledWorldRecordWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledWorldRecordWeekly`. */
    orderBy?: (SampledWorldRecordWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledWorldRecordWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledWorldRecordWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `SampledWorldRecordYearly`. */
    allSampledWorldRecordYearlies?: (SampledWorldRecordYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `SampledWorldRecordYearly`. */
    orderBy?: (SampledWorldRecordYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (SampledWorldRecordYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (SampledWorldRecordYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsDaily`. */
    allStatsDailies?: (StatsDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsDaily`. */
    orderBy?: (StatsDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsDailyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsGlobal`. */
    allStatsGlobals?: (StatsGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsGlobal`. */
    orderBy?: (StatsGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `StatsMonthly`. */
    allStatsMonthlies?: (StatsMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsMonthly`. */
    orderBy?: (StatsMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsQuarterly`. */
    allStatsQuarterlies?: (StatsQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsQuarterly`. */
    orderBy?: (StatsQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsWeekly`. */
    allStatsWeeklies?: (StatsWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsWeekly`. */
    orderBy?: (StatsWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsYearly`. */
    allStatsYearlies?: (StatsYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsYearly`. */
    orderBy?: (StatsYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `Upvote`. */
    allUpvotes?: (UpvotesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Upvote`. */
    orderBy?: (UpvotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UpvoteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (UpvoteFilter | null)} })
    /** Reads and enables pagination through a set of `User`. */
    allUsers?: (UsersConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `User`. */
    orderBy?: (UsersOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UserCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (UserFilter | null)} })
    /** Reads and enables pagination through a set of `UserPoint`. */
    allUserPoints?: (UserPointsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `UserPoint`. */
    orderBy?: (UserPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UserPointCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (UserPointFilter | null)} })
    /** Reads and enables pagination through a set of `Version`. */
    allVersions?: (VersionsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Version`. */
    orderBy?: (VersionsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (VersionCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (VersionFilter | null)} })
    /** Reads and enables pagination through a set of `Vote`. */
    allVotes?: (VotesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Vote`. */
    orderBy?: (VotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (VoteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (VoteFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordDaily`. */
    allWorldRecordDailies?: (WorldRecordDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordDaily`. */
    orderBy?: (WorldRecordDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordDailyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordGlobal`. */
    allWorldRecordGlobals?: (WorldRecordGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordGlobal`. */
    orderBy?: (WorldRecordGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordMonthly`. */
    allWorldRecordMonthlies?: (WorldRecordMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordMonthly`. */
    orderBy?: (WorldRecordMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordQuarterly`. */
    allWorldRecordQuarterlies?: (WorldRecordQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordQuarterly`. */
    orderBy?: (WorldRecordQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordWeekly`. */
    allWorldRecordWeeklies?: (WorldRecordWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordWeekly`. */
    orderBy?: (WorldRecordWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordYearly`. */
    allWorldRecordYearlies?: (WorldRecordYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordYearly`. */
    orderBy?: (WorldRecordYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordYearlyFilter | null)} })
    favoriteById?: (FavoriteGenqlSelection & { __args: {id: Scalars['Int']} })
    levelById?: (LevelGenqlSelection & { __args: {id: Scalars['Int']} })
    levelByHash?: (LevelGenqlSelection & { __args: {hash: Scalars['String']} })
    levelItemById?: (LevelItemGenqlSelection & { __args: {id: Scalars['Int']} })
    levelMetadatumById?: (LevelMetadatumGenqlSelection & { __args: {id: Scalars['Int']} })
    levelPointById?: (LevelPointGenqlSelection & { __args: {id: Scalars['Int']} })
    levelRequestById?: (LevelRequestGenqlSelection & { __args: {id: Scalars['Int']} })
    personalBestDailyById?: (PersonalBestDailyGenqlSelection & { __args: {id: Scalars['Int']} })
    personalBestGlobalById?: (PersonalBestGlobalGenqlSelection & { __args: {id: Scalars['Int']} })
    personalBestMonthlyById?: (PersonalBestMonthlyGenqlSelection & { __args: {id: Scalars['Int']} })
    personalBestQuarterlyById?: (PersonalBestQuarterlyGenqlSelection & { __args: {id: Scalars['Int']} })
    personalBestWeeklyById?: (PersonalBestWeeklyGenqlSelection & { __args: {id: Scalars['Int']} })
    personalBestYearlyById?: (PersonalBestYearlyGenqlSelection & { __args: {id: Scalars['Int']} })
    recordById?: (RecordGenqlSelection & { __args: {id: Scalars['Int']} })
    recordMediaById?: (RecordMediaGenqlSelection & { __args: {id: Scalars['Int']} })
    statsDailyById?: (StatsDailyGenqlSelection & { __args: {id: Scalars['Int']} })
    statsGlobalById?: (StatsGlobalGenqlSelection & { __args: {id: Scalars['Int']} })
    statsMonthlyById?: (StatsMonthlyGenqlSelection & { __args: {id: Scalars['Int']} })
    statsQuarterlyById?: (StatsQuarterlyGenqlSelection & { __args: {id: Scalars['Int']} })
    statsWeeklyById?: (StatsWeeklyGenqlSelection & { __args: {id: Scalars['Int']} })
    statsYearlyById?: (StatsYearlyGenqlSelection & { __args: {id: Scalars['Int']} })
    upvoteById?: (UpvoteGenqlSelection & { __args: {id: Scalars['Int']} })
    userById?: (UserGenqlSelection & { __args: {id: Scalars['Int']} })
    userPointById?: (UserPointGenqlSelection & { __args: {id: Scalars['Int']} })
    versionById?: (VersionGenqlSelection & { __args: {id: Scalars['Int']} })
    voteById?: (VoteGenqlSelection & { __args: {id: Scalars['Int']} })
    worldRecordDailyById?: (WorldRecordDailyGenqlSelection & { __args: {id: Scalars['Int']} })
    worldRecordGlobalById?: (WorldRecordGlobalGenqlSelection & { __args: {id: Scalars['Int']} })
    worldRecordMonthlyById?: (WorldRecordMonthlyGenqlSelection & { __args: {id: Scalars['Int']} })
    worldRecordQuarterlyById?: (WorldRecordQuarterlyGenqlSelection & { __args: {id: Scalars['Int']} })
    worldRecordWeeklyById?: (WorldRecordWeeklyGenqlSelection & { __args: {id: Scalars['Int']} })
    worldRecordYearlyById?: (WorldRecordYearlyGenqlSelection & { __args: {id: Scalars['Int']} })
    /** Retrieves filtered level items based on specified criteria. */
    zRtm?: (ZRtmConnectionGenqlSelection & { __args?: {pMinAuthorTime?: (Scalars['Float'] | null), pMaxAuthorTime?: (Scalars['Float'] | null), pMinRecords?: (Scalars['Int'] | null), pMaxRecords?: (Scalars['Int'] | null), pExcludedAuthorIds?: ((Scalars['Int'] | null)[] | null), pExcludedHashes?: ((Scalars['String'] | null)[] | null), pMinCheckpoints?: (Scalars['Int'] | null), pMaxCheckpoints?: (Scalars['Int'] | null), pMinFinishes?: (Scalars['Int'] | null), pMaxFinishes?: (Scalars['Int'] | null), pMinBlocks?: (Scalars['Int'] | null), pMaxBlocks?: (Scalars['Int'] | null), pSampleSize?: (Scalars['Int'] | null), 
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (ZRtmRecordFilter | null)} })
    /** Reads a single `Favorite` using its globally unique `ID`. */
    favorite?: (FavoriteGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Favorite`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Level` using its globally unique `ID`. */
    level?: (LevelGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Level`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `LevelItem` using its globally unique `ID`. */
    levelItem?: (LevelItemGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `LevelItem`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `LevelMetadatum` using its globally unique `ID`. */
    levelMetadatum?: (LevelMetadatumGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `LevelMetadatum`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `LevelPoint` using its globally unique `ID`. */
    levelPoint?: (LevelPointGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `LevelPoint`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `LevelRequest` using its globally unique `ID`. */
    levelRequest?: (LevelRequestGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `LevelRequest`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PersonalBestDaily` using its globally unique `ID`. */
    personalBestDaily?: (PersonalBestDailyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PersonalBestDaily`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PersonalBestGlobal` using its globally unique `ID`. */
    personalBestGlobal?: (PersonalBestGlobalGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PersonalBestGlobal`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PersonalBestMonthly` using its globally unique `ID`. */
    personalBestMonthly?: (PersonalBestMonthlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PersonalBestMonthly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PersonalBestQuarterly` using its globally unique `ID`. */
    personalBestQuarterly?: (PersonalBestQuarterlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PersonalBestQuarterly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PersonalBestWeekly` using its globally unique `ID`. */
    personalBestWeekly?: (PersonalBestWeeklyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PersonalBestWeekly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `PersonalBestYearly` using its globally unique `ID`. */
    personalBestYearly?: (PersonalBestYearlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `PersonalBestYearly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Record` using its globally unique `ID`. */
    record?: (RecordGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Record`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `RecordMedia` using its globally unique `ID`. */
    recordMedia?: (RecordMediaGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `RecordMedia`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `StatsDaily` using its globally unique `ID`. */
    statsDaily?: (StatsDailyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `StatsDaily`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `StatsGlobal` using its globally unique `ID`. */
    statsGlobal?: (StatsGlobalGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `StatsGlobal`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `StatsMonthly` using its globally unique `ID`. */
    statsMonthly?: (StatsMonthlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `StatsMonthly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `StatsQuarterly` using its globally unique `ID`. */
    statsQuarterly?: (StatsQuarterlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `StatsQuarterly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `StatsWeekly` using its globally unique `ID`. */
    statsWeekly?: (StatsWeeklyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `StatsWeekly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `StatsYearly` using its globally unique `ID`. */
    statsYearly?: (StatsYearlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `StatsYearly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Upvote` using its globally unique `ID`. */
    upvote?: (UpvoteGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Upvote`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `User` using its globally unique `ID`. */
    user?: (UserGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `User`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `UserPoint` using its globally unique `ID`. */
    userPoint?: (UserPointGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `UserPoint`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Version` using its globally unique `ID`. */
    version?: (VersionGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Version`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `Vote` using its globally unique `ID`. */
    vote?: (VoteGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `Vote`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `WorldRecordDaily` using its globally unique `ID`. */
    worldRecordDaily?: (WorldRecordDailyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `WorldRecordDaily`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `WorldRecordGlobal` using its globally unique `ID`. */
    worldRecordGlobal?: (WorldRecordGlobalGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `WorldRecordGlobal`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `WorldRecordMonthly` using its globally unique `ID`. */
    worldRecordMonthly?: (WorldRecordMonthlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `WorldRecordMonthly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `WorldRecordQuarterly` using its globally unique `ID`. */
    worldRecordQuarterly?: (WorldRecordQuarterlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `WorldRecordQuarterly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `WorldRecordWeekly` using its globally unique `ID`. */
    worldRecordWeekly?: (WorldRecordWeeklyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `WorldRecordWeekly`. */
    nodeId: Scalars['ID']} })
    /** Reads a single `WorldRecordYearly` using its globally unique `ID`. */
    worldRecordYearly?: (WorldRecordYearlyGenqlSelection & { __args: {
    /** The globally unique `ID` to be used in selecting a single `WorldRecordYearly`. */
    nodeId: Scalars['ID']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An object with a globally unique `ID`. */
export interface NodeGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    on_Query?: QueryGenqlSelection
    on_Favorite?: FavoriteGenqlSelection
    on_User?: UserGenqlSelection
    on_PersonalBestGlobal?: PersonalBestGlobalGenqlSelection
    on_Record?: RecordGenqlSelection
    on_Level?: LevelGenqlSelection
    on_LevelPoint?: LevelPointGenqlSelection
    on_LevelItem?: LevelItemGenqlSelection
    on_LevelMetadatum?: LevelMetadatumGenqlSelection
    on_StatsGlobal?: StatsGlobalGenqlSelection
    on_Upvote?: UpvoteGenqlSelection
    on_WorldRecordGlobal?: WorldRecordGlobalGenqlSelection
    on_PersonalBestYearly?: PersonalBestYearlyGenqlSelection
    on_PersonalBestMonthly?: PersonalBestMonthlyGenqlSelection
    on_PersonalBestWeekly?: PersonalBestWeeklyGenqlSelection
    on_PersonalBestDaily?: PersonalBestDailyGenqlSelection
    on_WorldRecordMonthly?: WorldRecordMonthlyGenqlSelection
    on_WorldRecordYearly?: WorldRecordYearlyGenqlSelection
    on_WorldRecordWeekly?: WorldRecordWeeklyGenqlSelection
    on_WorldRecordDaily?: WorldRecordDailyGenqlSelection
    on_StatsMonthly?: StatsMonthlyGenqlSelection
    on_StatsYearly?: StatsYearlyGenqlSelection
    on_StatsWeekly?: StatsWeeklyGenqlSelection
    on_StatsDaily?: StatsDailyGenqlSelection
    on_PersonalBestQuarterly?: PersonalBestQuarterlyGenqlSelection
    on_StatsQuarterly?: StatsQuarterlyGenqlSelection
    on_WorldRecordQuarterly?: WorldRecordQuarterlyGenqlSelection
    on_Vote?: VoteGenqlSelection
    on_RecordMedia?: RecordMediaGenqlSelection
    on_UserPoint?: UserPointGenqlSelection
    on_LevelRequest?: LevelRequestGenqlSelection
    on_Version?: VersionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `Favorite` values. */
export interface FavoritesConnectionGenqlSelection{
    /** A list of `Favorite` objects. */
    nodes?: FavoriteGenqlSelection
    /** A list of edges which contains the `Favorite` and cursor to aid in pagination. */
    edges?: FavoritesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Favorite` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FavoriteGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    idLevel?: boolean | number
    /** Reads a single `User` that is related to this `Favorite`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `Favorite`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    steamName?: boolean | number
    banned?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    steamId?: boolean | number
    discordId?: boolean | number
    /** Reads and enables pagination through a set of `Favorite`. */
    favoritesByIdUser?: (FavoritesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Favorite`. */
    orderBy?: (FavoritesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (FavoriteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (FavoriteFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    personalBestGlobalsByIdUser?: (PersonalBestGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestGlobal`. */
    orderBy?: (PersonalBestGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `UserPoint`. */
    userPointsByIdUser?: (UserPointsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `UserPoint`. */
    orderBy?: (UserPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UserPointCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (UserPointFilter | null)} })
    /** Reads and enables pagination through a set of `Record`. */
    recordsByIdUser?: (RecordsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Record`. */
    orderBy?: (RecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RecordCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (RecordFilter | null)} })
    /** Reads and enables pagination through a set of `StatsGlobal`. */
    statsGlobalsByIdUser?: (StatsGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsGlobal`. */
    orderBy?: (StatsGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `Upvote`. */
    upvotesByIdUser?: (UpvotesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Upvote`. */
    orderBy?: (UpvotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UpvoteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (UpvoteFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    personalBestYearliesByIdUser?: (PersonalBestYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestYearly`. */
    orderBy?: (PersonalBestYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    personalBestMonthliesByIdUser?: (PersonalBestMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestMonthly`. */
    orderBy?: (PersonalBestMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    personalBestWeekliesByIdUser?: (PersonalBestWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestWeekly`. */
    orderBy?: (PersonalBestWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    personalBestDailiesByIdUser?: (PersonalBestDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestDaily`. */
    orderBy?: (PersonalBestDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestDailyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsMonthly`. */
    statsMonthliesByIdUser?: (StatsMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsMonthly`. */
    orderBy?: (StatsMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsYearly`. */
    statsYearliesByIdUser?: (StatsYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsYearly`. */
    orderBy?: (StatsYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsWeekly`. */
    statsWeekliesByIdUser?: (StatsWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsWeekly`. */
    orderBy?: (StatsWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsDaily`. */
    statsDailiesByIdUser?: (StatsDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsDaily`. */
    orderBy?: (StatsDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsDailyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    personalBestQuarterliesByIdUser?: (PersonalBestQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestQuarterly`. */
    orderBy?: (PersonalBestQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsQuarterly`. */
    statsQuarterliesByIdUser?: (StatsQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsQuarterly`. */
    orderBy?: (StatsQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `Vote`. */
    votesByIdUser?: (VotesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Vote`. */
    orderBy?: (VotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (VoteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (VoteFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `Favorite` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface FavoriteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null)}


/** A filter to be used against `Favorite` object types. All fields are combined with a logical ‘and.’ */
export interface FavoriteFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (FavoriteFilter[] | null),
/** Checks for any expressions in this list. */
or?: (FavoriteFilter[] | null),
/** Negates the expression. */
not?: (FavoriteFilter | null)}


/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export interface IntFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['Int'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['Int'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['Int'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['Int'] | null),
/** Included in the specified list. */
in?: (Scalars['Int'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['Int'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['Int'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['Int'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['Int'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['Int'] | null)}


/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export interface DatetimeFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['Datetime'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['Datetime'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['Datetime'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['Datetime'] | null),
/** Included in the specified list. */
in?: (Scalars['Datetime'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['Datetime'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['Datetime'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['Datetime'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['Datetime'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['Datetime'] | null)}


/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export interface UserFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `steamName` field. */
steamName?: (StringFilter | null),
/** Filter by the object’s `banned` field. */
banned?: (BooleanFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `steamId` field. */
steamId?: (BigFloatFilter | null),
/** Filter by the object’s `discordId` field. */
discordId?: (BigFloatFilter | null),
/** Filter by the object’s `favoritesByIdUser` relation. */
favoritesByIdUser?: (UserToManyFavoriteFilter | null),
/** Some related `favoritesByIdUser` exist. */
favoritesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestGlobalsByIdUser` relation. */
personalBestGlobalsByIdUser?: (UserToManyPersonalBestGlobalFilter | null),
/** Some related `personalBestGlobalsByIdUser` exist. */
personalBestGlobalsByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `userPointsByIdUser` relation. */
userPointsByIdUser?: (UserToManyUserPointFilter | null),
/** Some related `userPointsByIdUser` exist. */
userPointsByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `recordsByIdUser` relation. */
recordsByIdUser?: (UserToManyRecordFilter | null),
/** Some related `recordsByIdUser` exist. */
recordsByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsGlobalsByIdUser` relation. */
statsGlobalsByIdUser?: (UserToManyStatsGlobalFilter | null),
/** Some related `statsGlobalsByIdUser` exist. */
statsGlobalsByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `upvotesByIdUser` relation. */
upvotesByIdUser?: (UserToManyUpvoteFilter | null),
/** Some related `upvotesByIdUser` exist. */
upvotesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestYearliesByIdUser` relation. */
personalBestYearliesByIdUser?: (UserToManyPersonalBestYearlyFilter | null),
/** Some related `personalBestYearliesByIdUser` exist. */
personalBestYearliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestMonthliesByIdUser` relation. */
personalBestMonthliesByIdUser?: (UserToManyPersonalBestMonthlyFilter | null),
/** Some related `personalBestMonthliesByIdUser` exist. */
personalBestMonthliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestWeekliesByIdUser` relation. */
personalBestWeekliesByIdUser?: (UserToManyPersonalBestWeeklyFilter | null),
/** Some related `personalBestWeekliesByIdUser` exist. */
personalBestWeekliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestDailiesByIdUser` relation. */
personalBestDailiesByIdUser?: (UserToManyPersonalBestDailyFilter | null),
/** Some related `personalBestDailiesByIdUser` exist. */
personalBestDailiesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsMonthliesByIdUser` relation. */
statsMonthliesByIdUser?: (UserToManyStatsMonthlyFilter | null),
/** Some related `statsMonthliesByIdUser` exist. */
statsMonthliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsYearliesByIdUser` relation. */
statsYearliesByIdUser?: (UserToManyStatsYearlyFilter | null),
/** Some related `statsYearliesByIdUser` exist. */
statsYearliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsWeekliesByIdUser` relation. */
statsWeekliesByIdUser?: (UserToManyStatsWeeklyFilter | null),
/** Some related `statsWeekliesByIdUser` exist. */
statsWeekliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsDailiesByIdUser` relation. */
statsDailiesByIdUser?: (UserToManyStatsDailyFilter | null),
/** Some related `statsDailiesByIdUser` exist. */
statsDailiesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestQuarterliesByIdUser` relation. */
personalBestQuarterliesByIdUser?: (UserToManyPersonalBestQuarterlyFilter | null),
/** Some related `personalBestQuarterliesByIdUser` exist. */
personalBestQuarterliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsQuarterliesByIdUser` relation. */
statsQuarterliesByIdUser?: (UserToManyStatsQuarterlyFilter | null),
/** Some related `statsQuarterliesByIdUser` exist. */
statsQuarterliesByIdUserExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `votesByIdUser` relation. */
votesByIdUser?: (UserToManyVoteFilter | null),
/** Some related `votesByIdUser` exist. */
votesByIdUserExist?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (UserFilter[] | null),
/** Checks for any expressions in this list. */
or?: (UserFilter[] | null),
/** Negates the expression. */
not?: (UserFilter | null)}


/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export interface StringFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['String'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['String'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['String'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['String'] | null),
/** Included in the specified list. */
in?: (Scalars['String'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['String'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['String'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['String'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['String'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['String'] | null),
/** Contains the specified string (case-sensitive). */
includes?: (Scalars['String'] | null),
/** Does not contain the specified string (case-sensitive). */
notIncludes?: (Scalars['String'] | null),
/** Contains the specified string (case-insensitive). */
includesInsensitive?: (Scalars['String'] | null),
/** Does not contain the specified string (case-insensitive). */
notIncludesInsensitive?: (Scalars['String'] | null),
/** Starts with the specified string (case-sensitive). */
startsWith?: (Scalars['String'] | null),
/** Does not start with the specified string (case-sensitive). */
notStartsWith?: (Scalars['String'] | null),
/** Starts with the specified string (case-insensitive). */
startsWithInsensitive?: (Scalars['String'] | null),
/** Does not start with the specified string (case-insensitive). */
notStartsWithInsensitive?: (Scalars['String'] | null),
/** Ends with the specified string (case-sensitive). */
endsWith?: (Scalars['String'] | null),
/** Does not end with the specified string (case-sensitive). */
notEndsWith?: (Scalars['String'] | null),
/** Ends with the specified string (case-insensitive). */
endsWithInsensitive?: (Scalars['String'] | null),
/** Does not end with the specified string (case-insensitive). */
notEndsWithInsensitive?: (Scalars['String'] | null),
/** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
like?: (Scalars['String'] | null),
/** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
notLike?: (Scalars['String'] | null),
/** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
likeInsensitive?: (Scalars['String'] | null),
/** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
notLikeInsensitive?: (Scalars['String'] | null),
/** Equal to the specified value (case-insensitive). */
equalToInsensitive?: (Scalars['String'] | null),
/** Not equal to the specified value (case-insensitive). */
notEqualToInsensitive?: (Scalars['String'] | null),
/** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
distinctFromInsensitive?: (Scalars['String'] | null),
/** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
notDistinctFromInsensitive?: (Scalars['String'] | null),
/** Included in the specified list (case-insensitive). */
inInsensitive?: (Scalars['String'][] | null),
/** Not included in the specified list (case-insensitive). */
notInInsensitive?: (Scalars['String'][] | null),
/** Less than the specified value (case-insensitive). */
lessThanInsensitive?: (Scalars['String'] | null),
/** Less than or equal to the specified value (case-insensitive). */
lessThanOrEqualToInsensitive?: (Scalars['String'] | null),
/** Greater than the specified value (case-insensitive). */
greaterThanInsensitive?: (Scalars['String'] | null),
/** Greater than or equal to the specified value (case-insensitive). */
greaterThanOrEqualToInsensitive?: (Scalars['String'] | null)}


/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export interface BooleanFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['Boolean'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['Boolean'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['Boolean'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['Boolean'] | null),
/** Included in the specified list. */
in?: (Scalars['Boolean'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['Boolean'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['Boolean'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['Boolean'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['Boolean'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['Boolean'] | null)}


/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export interface BigFloatFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['BigFloat'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['BigFloat'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['BigFloat'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['BigFloat'] | null),
/** Included in the specified list. */
in?: (Scalars['BigFloat'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['BigFloat'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['BigFloat'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['BigFloat'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['BigFloat'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['BigFloat'] | null)}


/** A filter to be used against many `Favorite` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyFavoriteFilter {
/** Every related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (FavoriteFilter | null),
/** Some related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (FavoriteFilter | null),
/** No related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (FavoriteFilter | null)}


/** A filter to be used against many `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyPersonalBestGlobalFilter {
/** Every related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestGlobalFilter | null),
/** Some related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestGlobalFilter | null),
/** No related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestGlobalFilter | null)}


/** A filter to be used against `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface PersonalBestGlobalFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (PersonalBestGlobalFilter[] | null),
/** Checks for any expressions in this list. */
or?: (PersonalBestGlobalFilter[] | null),
/** Negates the expression. */
not?: (PersonalBestGlobalFilter | null)}


/** A filter to be used against `Record` object types. All fields are combined with a logical ‘and.’ */
export interface RecordFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `time` field. */
time?: (FloatFilter | null),
/** Filter by the object’s `gameVersion` field. */
gameVersion?: (StringFilter | null),
/** Filter by the object’s `isValid` field. */
isValid?: (BooleanFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `modVersion` field. */
modVersion?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `splits` field. */
splits?: (FloatListFilter | null),
/** Filter by the object’s `speeds` field. */
speeds?: (FloatListFilter | null),
/** Filter by the object’s `recordMediasByIdRecord` relation. */
recordMediasByIdRecord?: (RecordToManyRecordMediaFilter | null),
/** Some related `recordMediasByIdRecord` exist. */
recordMediasByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestGlobalsByIdRecord` relation. */
personalBestGlobalsByIdRecord?: (RecordToManyPersonalBestGlobalFilter | null),
/** Some related `personalBestGlobalsByIdRecord` exist. */
personalBestGlobalsByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordGlobalsByIdRecord` relation. */
worldRecordGlobalsByIdRecord?: (RecordToManyWorldRecordGlobalFilter | null),
/** Some related `worldRecordGlobalsByIdRecord` exist. */
worldRecordGlobalsByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestYearliesByIdRecord` relation. */
personalBestYearliesByIdRecord?: (RecordToManyPersonalBestYearlyFilter | null),
/** Some related `personalBestYearliesByIdRecord` exist. */
personalBestYearliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestMonthliesByIdRecord` relation. */
personalBestMonthliesByIdRecord?: (RecordToManyPersonalBestMonthlyFilter | null),
/** Some related `personalBestMonthliesByIdRecord` exist. */
personalBestMonthliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestWeekliesByIdRecord` relation. */
personalBestWeekliesByIdRecord?: (RecordToManyPersonalBestWeeklyFilter | null),
/** Some related `personalBestWeekliesByIdRecord` exist. */
personalBestWeekliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestDailiesByIdRecord` relation. */
personalBestDailiesByIdRecord?: (RecordToManyPersonalBestDailyFilter | null),
/** Some related `personalBestDailiesByIdRecord` exist. */
personalBestDailiesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordMonthliesByIdRecord` relation. */
worldRecordMonthliesByIdRecord?: (RecordToManyWorldRecordMonthlyFilter | null),
/** Some related `worldRecordMonthliesByIdRecord` exist. */
worldRecordMonthliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordYearliesByIdRecord` relation. */
worldRecordYearliesByIdRecord?: (RecordToManyWorldRecordYearlyFilter | null),
/** Some related `worldRecordYearliesByIdRecord` exist. */
worldRecordYearliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordWeekliesByIdRecord` relation. */
worldRecordWeekliesByIdRecord?: (RecordToManyWorldRecordWeeklyFilter | null),
/** Some related `worldRecordWeekliesByIdRecord` exist. */
worldRecordWeekliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordDailiesByIdRecord` relation. */
worldRecordDailiesByIdRecord?: (RecordToManyWorldRecordDailyFilter | null),
/** Some related `worldRecordDailiesByIdRecord` exist. */
worldRecordDailiesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestQuarterliesByIdRecord` relation. */
personalBestQuarterliesByIdRecord?: (RecordToManyPersonalBestQuarterlyFilter | null),
/** Some related `personalBestQuarterliesByIdRecord` exist. */
personalBestQuarterliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordQuarterliesByIdRecord` relation. */
worldRecordQuarterliesByIdRecord?: (RecordToManyWorldRecordQuarterlyFilter | null),
/** Some related `worldRecordQuarterliesByIdRecord` exist. */
worldRecordQuarterliesByIdRecordExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (RecordFilter[] | null),
/** Checks for any expressions in this list. */
or?: (RecordFilter[] | null),
/** Negates the expression. */
not?: (RecordFilter | null)}


/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export interface FloatFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['Float'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['Float'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['Float'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['Float'] | null),
/** Included in the specified list. */
in?: (Scalars['Float'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['Float'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['Float'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['Float'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['Float'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['Float'] | null)}


/** A filter to be used against Float List fields. All fields are combined with a logical ‘and.’ */
export interface FloatListFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: ((Scalars['Float'] | null)[] | null),
/** Not equal to the specified value. */
notEqualTo?: ((Scalars['Float'] | null)[] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: ((Scalars['Float'] | null)[] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: ((Scalars['Float'] | null)[] | null),
/** Less than the specified value. */
lessThan?: ((Scalars['Float'] | null)[] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: ((Scalars['Float'] | null)[] | null),
/** Greater than the specified value. */
greaterThan?: ((Scalars['Float'] | null)[] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: ((Scalars['Float'] | null)[] | null),
/** Contains the specified list of values. */
contains?: ((Scalars['Float'] | null)[] | null),
/** Contained by the specified list of values. */
containedBy?: ((Scalars['Float'] | null)[] | null),
/** Overlaps the specified list of values. */
overlaps?: ((Scalars['Float'] | null)[] | null),
/** Any array item is equal to the specified value. */
anyEqualTo?: (Scalars['Float'] | null),
/** Any array item is not equal to the specified value. */
anyNotEqualTo?: (Scalars['Float'] | null),
/** Any array item is less than the specified value. */
anyLessThan?: (Scalars['Float'] | null),
/** Any array item is less than or equal to the specified value. */
anyLessThanOrEqualTo?: (Scalars['Float'] | null),
/** Any array item is greater than the specified value. */
anyGreaterThan?: (Scalars['Float'] | null),
/** Any array item is greater than or equal to the specified value. */
anyGreaterThanOrEqualTo?: (Scalars['Float'] | null)}


/** A filter to be used against many `RecordMedia` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyRecordMediaFilter {
/** Every related `RecordMedia` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (RecordMediaFilter | null),
/** Some related `RecordMedia` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (RecordMediaFilter | null),
/** No related `RecordMedia` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (RecordMediaFilter | null)}


/** A filter to be used against `RecordMedia` object types. All fields are combined with a logical ‘and.’ */
export interface RecordMediaFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `ghostUrl` field. */
ghostUrl?: (StringFilter | null),
/** Filter by the object’s `screenshotUrl` field. */
screenshotUrl?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Checks for all expressions in this list. */
and?: (RecordMediaFilter[] | null),
/** Checks for any expressions in this list. */
or?: (RecordMediaFilter[] | null),
/** Negates the expression. */
not?: (RecordMediaFilter | null)}


/** A filter to be used against many `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyPersonalBestGlobalFilter {
/** Every related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestGlobalFilter | null),
/** Some related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestGlobalFilter | null),
/** No related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestGlobalFilter | null)}


/** A filter to be used against many `WorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyWorldRecordGlobalFilter {
/** Every related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordGlobalFilter | null),
/** Some related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordGlobalFilter | null),
/** No related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordGlobalFilter | null)}


/** A filter to be used against `WorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface WorldRecordGlobalFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (WorldRecordGlobalFilter[] | null),
/** Checks for any expressions in this list. */
or?: (WorldRecordGlobalFilter[] | null),
/** Negates the expression. */
not?: (WorldRecordGlobalFilter | null)}


/** A filter to be used against `Level` object types. All fields are combined with a logical ‘and.’ */
export interface LevelFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `hash` field. */
hash?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `favoritesByIdLevel` relation. */
favoritesByIdLevel?: (LevelToManyFavoriteFilter | null),
/** Some related `favoritesByIdLevel` exist. */
favoritesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `levelPointsByIdLevel` relation. */
levelPointsByIdLevel?: (LevelToManyLevelPointFilter | null),
/** Some related `levelPointsByIdLevel` exist. */
levelPointsByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `levelItemsByIdLevel` relation. */
levelItemsByIdLevel?: (LevelToManyLevelItemFilter | null),
/** Some related `levelItemsByIdLevel` exist. */
levelItemsByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `levelMetadataByIdLevel` relation. */
levelMetadataByIdLevel?: (LevelToManyLevelMetadatumFilter | null),
/** Some related `levelMetadataByIdLevel` exist. */
levelMetadataByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestGlobalsByIdLevel` relation. */
personalBestGlobalsByIdLevel?: (LevelToManyPersonalBestGlobalFilter | null),
/** Some related `personalBestGlobalsByIdLevel` exist. */
personalBestGlobalsByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `recordsByIdLevel` relation. */
recordsByIdLevel?: (LevelToManyRecordFilter | null),
/** Some related `recordsByIdLevel` exist. */
recordsByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsGlobalsByIdLevel` relation. */
statsGlobalsByIdLevel?: (LevelToManyStatsGlobalFilter | null),
/** Some related `statsGlobalsByIdLevel` exist. */
statsGlobalsByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `upvotesByIdLevel` relation. */
upvotesByIdLevel?: (LevelToManyUpvoteFilter | null),
/** Some related `upvotesByIdLevel` exist. */
upvotesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordGlobalsByIdLevel` relation. */
worldRecordGlobalsByIdLevel?: (LevelToManyWorldRecordGlobalFilter | null),
/** Some related `worldRecordGlobalsByIdLevel` exist. */
worldRecordGlobalsByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestYearliesByIdLevel` relation. */
personalBestYearliesByIdLevel?: (LevelToManyPersonalBestYearlyFilter | null),
/** Some related `personalBestYearliesByIdLevel` exist. */
personalBestYearliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestMonthliesByIdLevel` relation. */
personalBestMonthliesByIdLevel?: (LevelToManyPersonalBestMonthlyFilter | null),
/** Some related `personalBestMonthliesByIdLevel` exist. */
personalBestMonthliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestWeekliesByIdLevel` relation. */
personalBestWeekliesByIdLevel?: (LevelToManyPersonalBestWeeklyFilter | null),
/** Some related `personalBestWeekliesByIdLevel` exist. */
personalBestWeekliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestDailiesByIdLevel` relation. */
personalBestDailiesByIdLevel?: (LevelToManyPersonalBestDailyFilter | null),
/** Some related `personalBestDailiesByIdLevel` exist. */
personalBestDailiesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordMonthliesByIdLevel` relation. */
worldRecordMonthliesByIdLevel?: (LevelToManyWorldRecordMonthlyFilter | null),
/** Some related `worldRecordMonthliesByIdLevel` exist. */
worldRecordMonthliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordYearliesByIdLevel` relation. */
worldRecordYearliesByIdLevel?: (LevelToManyWorldRecordYearlyFilter | null),
/** Some related `worldRecordYearliesByIdLevel` exist. */
worldRecordYearliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordWeekliesByIdLevel` relation. */
worldRecordWeekliesByIdLevel?: (LevelToManyWorldRecordWeeklyFilter | null),
/** Some related `worldRecordWeekliesByIdLevel` exist. */
worldRecordWeekliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordDailiesByIdLevel` relation. */
worldRecordDailiesByIdLevel?: (LevelToManyWorldRecordDailyFilter | null),
/** Some related `worldRecordDailiesByIdLevel` exist. */
worldRecordDailiesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsMonthliesByIdLevel` relation. */
statsMonthliesByIdLevel?: (LevelToManyStatsMonthlyFilter | null),
/** Some related `statsMonthliesByIdLevel` exist. */
statsMonthliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsYearliesByIdLevel` relation. */
statsYearliesByIdLevel?: (LevelToManyStatsYearlyFilter | null),
/** Some related `statsYearliesByIdLevel` exist. */
statsYearliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsWeekliesByIdLevel` relation. */
statsWeekliesByIdLevel?: (LevelToManyStatsWeeklyFilter | null),
/** Some related `statsWeekliesByIdLevel` exist. */
statsWeekliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsDailiesByIdLevel` relation. */
statsDailiesByIdLevel?: (LevelToManyStatsDailyFilter | null),
/** Some related `statsDailiesByIdLevel` exist. */
statsDailiesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `personalBestQuarterliesByIdLevel` relation. */
personalBestQuarterliesByIdLevel?: (LevelToManyPersonalBestQuarterlyFilter | null),
/** Some related `personalBestQuarterliesByIdLevel` exist. */
personalBestQuarterliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `statsQuarterliesByIdLevel` relation. */
statsQuarterliesByIdLevel?: (LevelToManyStatsQuarterlyFilter | null),
/** Some related `statsQuarterliesByIdLevel` exist. */
statsQuarterliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `worldRecordQuarterliesByIdLevel` relation. */
worldRecordQuarterliesByIdLevel?: (LevelToManyWorldRecordQuarterlyFilter | null),
/** Some related `worldRecordQuarterliesByIdLevel` exist. */
worldRecordQuarterliesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Filter by the object’s `votesByIdLevel` relation. */
votesByIdLevel?: (LevelToManyVoteFilter | null),
/** Some related `votesByIdLevel` exist. */
votesByIdLevelExist?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (LevelFilter[] | null),
/** Checks for any expressions in this list. */
or?: (LevelFilter[] | null),
/** Negates the expression. */
not?: (LevelFilter | null)}


/** A filter to be used against many `Favorite` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyFavoriteFilter {
/** Every related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (FavoriteFilter | null),
/** Some related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (FavoriteFilter | null),
/** No related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (FavoriteFilter | null)}


/** A filter to be used against many `LevelPoint` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyLevelPointFilter {
/** Every related `LevelPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (LevelPointFilter | null),
/** Some related `LevelPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (LevelPointFilter | null),
/** No related `LevelPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (LevelPointFilter | null)}


/** A filter to be used against `LevelPoint` object types. All fields are combined with a logical ‘and.’ */
export interface LevelPointFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `points` field. */
points?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (LevelPointFilter[] | null),
/** Checks for any expressions in this list. */
or?: (LevelPointFilter[] | null),
/** Negates the expression. */
not?: (LevelPointFilter | null)}


/** A filter to be used against many `LevelItem` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyLevelItemFilter {
/** Every related `LevelItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (LevelItemFilter | null),
/** Some related `LevelItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (LevelItemFilter | null),
/** No related `LevelItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (LevelItemFilter | null)}


/** A filter to be used against `LevelItem` object types. All fields are combined with a logical ‘and.’ */
export interface LevelItemFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `workshopId` field. */
workshopId?: (BigFloatFilter | null),
/** Filter by the object’s `authorId` field. */
authorId?: (BigFloatFilter | null),
/** Filter by the object’s `name` field. */
name?: (StringFilter | null),
/** Filter by the object’s `imageUrl` field. */
imageUrl?: (StringFilter | null),
/** Filter by the object’s `fileAuthor` field. */
fileAuthor?: (StringFilter | null),
/** Filter by the object’s `fileUid` field. */
fileUid?: (StringFilter | null),
/** Filter by the object’s `validationTimeAuthor` field. */
validationTimeAuthor?: (FloatFilter | null),
/** Filter by the object’s `validationTimeGold` field. */
validationTimeGold?: (FloatFilter | null),
/** Filter by the object’s `validationTimeSilver` field. */
validationTimeSilver?: (FloatFilter | null),
/** Filter by the object’s `validationTimeBronze` field. */
validationTimeBronze?: (FloatFilter | null),
/** Filter by the object’s `deleted` field. */
deleted?: (BooleanFilter | null),
/** Filter by the object’s `createdAt` field. */
createdAt?: (DatetimeFilter | null),
/** Filter by the object’s `updatedAt` field. */
updatedAt?: (DatetimeFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (LevelItemFilter[] | null),
/** Checks for any expressions in this list. */
or?: (LevelItemFilter[] | null),
/** Negates the expression. */
not?: (LevelItemFilter | null)}


/** A filter to be used against many `LevelMetadatum` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyLevelMetadatumFilter {
/** Every related `LevelMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (LevelMetadatumFilter | null),
/** Some related `LevelMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (LevelMetadatumFilter | null),
/** No related `LevelMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (LevelMetadatumFilter | null)}


/** A filter to be used against `LevelMetadatum` object types. All fields are combined with a logical ‘and.’ */
export interface LevelMetadatumFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `amountCheckpoints` field. */
amountCheckpoints?: (IntFilter | null),
/** Filter by the object’s `amountFinishes` field. */
amountFinishes?: (IntFilter | null),
/** Filter by the object’s `amountBlocks` field. */
amountBlocks?: (IntFilter | null),
/** Filter by the object’s `typeGround` field. */
typeGround?: (IntFilter | null),
/** Filter by the object’s `typeSkybox` field. */
typeSkybox?: (IntFilter | null),
/** Filter by the object’s `blocks` field. */
blocks?: (JSONFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (LevelMetadatumFilter[] | null),
/** Checks for any expressions in this list. */
or?: (LevelMetadatumFilter[] | null),
/** Negates the expression. */
not?: (LevelMetadatumFilter | null)}


/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export interface JSONFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['JSON'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['JSON'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['JSON'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['JSON'] | null),
/** Included in the specified list. */
in?: (Scalars['JSON'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['JSON'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['JSON'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['JSON'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['JSON'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['JSON'] | null),
/** Contains the specified JSON. */
contains?: (Scalars['JSON'] | null),
/** Contains the specified key. */
containsKey?: (Scalars['String'] | null),
/** Contains all of the specified keys. */
containsAllKeys?: (Scalars['String'][] | null),
/** Contains any of the specified keys. */
containsAnyKeys?: (Scalars['String'][] | null),
/** Contained by the specified JSON. */
containedBy?: (Scalars['JSON'] | null)}


/** A filter to be used against many `PersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyPersonalBestGlobalFilter {
/** Every related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestGlobalFilter | null),
/** Some related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestGlobalFilter | null),
/** No related `PersonalBestGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestGlobalFilter | null)}


/** A filter to be used against many `Record` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyRecordFilter {
/** Every related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (RecordFilter | null),
/** Some related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (RecordFilter | null),
/** No related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (RecordFilter | null)}


/** A filter to be used against many `StatsGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyStatsGlobalFilter {
/** Every related `StatsGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsGlobalFilter | null),
/** Some related `StatsGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsGlobalFilter | null),
/** No related `StatsGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsGlobalFilter | null)}


/** A filter to be used against `StatsGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface StatsGlobalFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** A related `levelByIdLevel` exists. */
levelByIdLevelExists?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (StatsGlobalFilter[] | null),
/** Checks for any expressions in this list. */
or?: (StatsGlobalFilter[] | null),
/** Negates the expression. */
not?: (StatsGlobalFilter | null)}


/** A filter to be used against many `Upvote` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyUpvoteFilter {
/** Every related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (UpvoteFilter | null),
/** Some related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (UpvoteFilter | null),
/** No related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (UpvoteFilter | null)}


/** A filter to be used against `Upvote` object types. All fields are combined with a logical ‘and.’ */
export interface UpvoteFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (UpvoteFilter[] | null),
/** Checks for any expressions in this list. */
or?: (UpvoteFilter[] | null),
/** Negates the expression. */
not?: (UpvoteFilter | null)}


/** A filter to be used against many `WorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyWorldRecordGlobalFilter {
/** Every related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordGlobalFilter | null),
/** Some related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordGlobalFilter | null),
/** No related `WorldRecordGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordGlobalFilter | null)}


/** A filter to be used against many `PersonalBestYearly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyPersonalBestYearlyFilter {
/** Every related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestYearlyFilter | null),
/** Some related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestYearlyFilter | null),
/** No related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestYearlyFilter | null)}


/** A filter to be used against `PersonalBestYearly` object types. All fields are combined with a logical ‘and.’ */
export interface PersonalBestYearlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (PersonalBestYearlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (PersonalBestYearlyFilter[] | null),
/** Negates the expression. */
not?: (PersonalBestYearlyFilter | null)}


/** A filter to be used against many `PersonalBestMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyPersonalBestMonthlyFilter {
/** Every related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestMonthlyFilter | null),
/** Some related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestMonthlyFilter | null),
/** No related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestMonthlyFilter | null)}


/** A filter to be used against `PersonalBestMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface PersonalBestMonthlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `month` field. */
month?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (PersonalBestMonthlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (PersonalBestMonthlyFilter[] | null),
/** Negates the expression. */
not?: (PersonalBestMonthlyFilter | null)}


/** A filter to be used against many `PersonalBestWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyPersonalBestWeeklyFilter {
/** Every related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestWeeklyFilter | null),
/** Some related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestWeeklyFilter | null),
/** No related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestWeeklyFilter | null)}


/** A filter to be used against `PersonalBestWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface PersonalBestWeeklyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `week` field. */
week?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (PersonalBestWeeklyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (PersonalBestWeeklyFilter[] | null),
/** Negates the expression. */
not?: (PersonalBestWeeklyFilter | null)}


/** A filter to be used against many `PersonalBestDaily` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyPersonalBestDailyFilter {
/** Every related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestDailyFilter | null),
/** Some related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestDailyFilter | null),
/** No related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestDailyFilter | null)}


/** A filter to be used against `PersonalBestDaily` object types. All fields are combined with a logical ‘and.’ */
export interface PersonalBestDailyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `day` field. */
day?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (PersonalBestDailyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (PersonalBestDailyFilter[] | null),
/** Negates the expression. */
not?: (PersonalBestDailyFilter | null)}


/** A filter to be used against many `WorldRecordMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyWorldRecordMonthlyFilter {
/** Every related `WorldRecordMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordMonthlyFilter | null),
/** Some related `WorldRecordMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordMonthlyFilter | null),
/** No related `WorldRecordMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordMonthlyFilter | null)}


/** A filter to be used against `WorldRecordMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface WorldRecordMonthlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `month` field. */
month?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (WorldRecordMonthlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (WorldRecordMonthlyFilter[] | null),
/** Negates the expression. */
not?: (WorldRecordMonthlyFilter | null)}


/** A filter to be used against many `WorldRecordYearly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyWorldRecordYearlyFilter {
/** Every related `WorldRecordYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordYearlyFilter | null),
/** Some related `WorldRecordYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordYearlyFilter | null),
/** No related `WorldRecordYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordYearlyFilter | null)}


/** A filter to be used against `WorldRecordYearly` object types. All fields are combined with a logical ‘and.’ */
export interface WorldRecordYearlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (WorldRecordYearlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (WorldRecordYearlyFilter[] | null),
/** Negates the expression. */
not?: (WorldRecordYearlyFilter | null)}


/** A filter to be used against many `WorldRecordWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyWorldRecordWeeklyFilter {
/** Every related `WorldRecordWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordWeeklyFilter | null),
/** Some related `WorldRecordWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordWeeklyFilter | null),
/** No related `WorldRecordWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordWeeklyFilter | null)}


/** A filter to be used against `WorldRecordWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface WorldRecordWeeklyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `week` field. */
week?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** A related `levelByIdLevel` exists. */
levelByIdLevelExists?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (WorldRecordWeeklyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (WorldRecordWeeklyFilter[] | null),
/** Negates the expression. */
not?: (WorldRecordWeeklyFilter | null)}


/** A filter to be used against many `WorldRecordDaily` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyWorldRecordDailyFilter {
/** Every related `WorldRecordDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordDailyFilter | null),
/** Some related `WorldRecordDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordDailyFilter | null),
/** No related `WorldRecordDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordDailyFilter | null)}


/** A filter to be used against `WorldRecordDaily` object types. All fields are combined with a logical ‘and.’ */
export interface WorldRecordDailyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `day` field. */
day?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (WorldRecordDailyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (WorldRecordDailyFilter[] | null),
/** Negates the expression. */
not?: (WorldRecordDailyFilter | null)}


/** A filter to be used against many `StatsMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyStatsMonthlyFilter {
/** Every related `StatsMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsMonthlyFilter | null),
/** Some related `StatsMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsMonthlyFilter | null),
/** No related `StatsMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsMonthlyFilter | null)}


/** A filter to be used against `StatsMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface StatsMonthlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `month` field. */
month?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** A related `levelByIdLevel` exists. */
levelByIdLevelExists?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (StatsMonthlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (StatsMonthlyFilter[] | null),
/** Negates the expression. */
not?: (StatsMonthlyFilter | null)}


/** A filter to be used against many `StatsYearly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyStatsYearlyFilter {
/** Every related `StatsYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsYearlyFilter | null),
/** Some related `StatsYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsYearlyFilter | null),
/** No related `StatsYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsYearlyFilter | null)}


/** A filter to be used against `StatsYearly` object types. All fields are combined with a logical ‘and.’ */
export interface StatsYearlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** A related `levelByIdLevel` exists. */
levelByIdLevelExists?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (StatsYearlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (StatsYearlyFilter[] | null),
/** Negates the expression. */
not?: (StatsYearlyFilter | null)}


/** A filter to be used against many `StatsWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyStatsWeeklyFilter {
/** Every related `StatsWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsWeeklyFilter | null),
/** Some related `StatsWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsWeeklyFilter | null),
/** No related `StatsWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsWeeklyFilter | null)}


/** A filter to be used against `StatsWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface StatsWeeklyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `week` field. */
week?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** A related `levelByIdLevel` exists. */
levelByIdLevelExists?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (StatsWeeklyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (StatsWeeklyFilter[] | null),
/** Negates the expression. */
not?: (StatsWeeklyFilter | null)}


/** A filter to be used against many `StatsDaily` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyStatsDailyFilter {
/** Every related `StatsDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsDailyFilter | null),
/** Some related `StatsDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsDailyFilter | null),
/** No related `StatsDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsDailyFilter | null)}


/** A filter to be used against `StatsDaily` object types. All fields are combined with a logical ‘and.’ */
export interface StatsDailyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `day` field. */
day?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** A related `levelByIdLevel` exists. */
levelByIdLevelExists?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (StatsDailyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (StatsDailyFilter[] | null),
/** Negates the expression. */
not?: (StatsDailyFilter | null)}


/** A filter to be used against many `PersonalBestQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyPersonalBestQuarterlyFilter {
/** Every related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestQuarterlyFilter | null),
/** Some related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestQuarterlyFilter | null),
/** No related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestQuarterlyFilter | null)}


/** A filter to be used against `PersonalBestQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface PersonalBestQuarterlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `quarter` field. */
quarter?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (PersonalBestQuarterlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (PersonalBestQuarterlyFilter[] | null),
/** Negates the expression. */
not?: (PersonalBestQuarterlyFilter | null)}


/** A filter to be used against many `StatsQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyStatsQuarterlyFilter {
/** Every related `StatsQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsQuarterlyFilter | null),
/** Some related `StatsQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsQuarterlyFilter | null),
/** No related `StatsQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsQuarterlyFilter | null)}


/** A filter to be used against `StatsQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface StatsQuarterlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `quarter` field. */
quarter?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** A related `levelByIdLevel` exists. */
levelByIdLevelExists?: (Scalars['Boolean'] | null),
/** Checks for all expressions in this list. */
and?: (StatsQuarterlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (StatsQuarterlyFilter[] | null),
/** Negates the expression. */
not?: (StatsQuarterlyFilter | null)}


/** A filter to be used against many `WorldRecordQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyWorldRecordQuarterlyFilter {
/** Every related `WorldRecordQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordQuarterlyFilter | null),
/** Some related `WorldRecordQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordQuarterlyFilter | null),
/** No related `WorldRecordQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordQuarterlyFilter | null)}


/** A filter to be used against `WorldRecordQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface WorldRecordQuarterlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `quarter` field. */
quarter?: (IntFilter | null),
/** Filter by the object’s `recordByIdRecord` relation. */
recordByIdRecord?: (RecordFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (WorldRecordQuarterlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (WorldRecordQuarterlyFilter[] | null),
/** Negates the expression. */
not?: (WorldRecordQuarterlyFilter | null)}


/** A filter to be used against many `Vote` object types. All fields are combined with a logical ‘and.’ */
export interface LevelToManyVoteFilter {
/** Every related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (VoteFilter | null),
/** Some related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (VoteFilter | null),
/** No related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (VoteFilter | null)}


/** A filter to be used against `Vote` object types. All fields are combined with a logical ‘and.’ */
export interface VoteFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Filter by the object’s `levelByIdLevel` relation. */
levelByIdLevel?: (LevelFilter | null),
/** Checks for all expressions in this list. */
and?: (VoteFilter[] | null),
/** Checks for any expressions in this list. */
or?: (VoteFilter[] | null),
/** Negates the expression. */
not?: (VoteFilter | null)}


/** A filter to be used against many `PersonalBestYearly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyPersonalBestYearlyFilter {
/** Every related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestYearlyFilter | null),
/** Some related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestYearlyFilter | null),
/** No related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestYearlyFilter | null)}


/** A filter to be used against many `PersonalBestMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyPersonalBestMonthlyFilter {
/** Every related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestMonthlyFilter | null),
/** Some related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestMonthlyFilter | null),
/** No related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestMonthlyFilter | null)}


/** A filter to be used against many `PersonalBestWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyPersonalBestWeeklyFilter {
/** Every related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestWeeklyFilter | null),
/** Some related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestWeeklyFilter | null),
/** No related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestWeeklyFilter | null)}


/** A filter to be used against many `PersonalBestDaily` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyPersonalBestDailyFilter {
/** Every related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestDailyFilter | null),
/** Some related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestDailyFilter | null),
/** No related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestDailyFilter | null)}


/** A filter to be used against many `WorldRecordMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyWorldRecordMonthlyFilter {
/** Every related `WorldRecordMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordMonthlyFilter | null),
/** Some related `WorldRecordMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordMonthlyFilter | null),
/** No related `WorldRecordMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordMonthlyFilter | null)}


/** A filter to be used against many `WorldRecordYearly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyWorldRecordYearlyFilter {
/** Every related `WorldRecordYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordYearlyFilter | null),
/** Some related `WorldRecordYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordYearlyFilter | null),
/** No related `WorldRecordYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordYearlyFilter | null)}


/** A filter to be used against many `WorldRecordWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyWorldRecordWeeklyFilter {
/** Every related `WorldRecordWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordWeeklyFilter | null),
/** Some related `WorldRecordWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordWeeklyFilter | null),
/** No related `WorldRecordWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordWeeklyFilter | null)}


/** A filter to be used against many `WorldRecordDaily` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyWorldRecordDailyFilter {
/** Every related `WorldRecordDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordDailyFilter | null),
/** Some related `WorldRecordDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordDailyFilter | null),
/** No related `WorldRecordDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordDailyFilter | null)}


/** A filter to be used against many `PersonalBestQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyPersonalBestQuarterlyFilter {
/** Every related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestQuarterlyFilter | null),
/** Some related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestQuarterlyFilter | null),
/** No related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestQuarterlyFilter | null)}


/** A filter to be used against many `WorldRecordQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface RecordToManyWorldRecordQuarterlyFilter {
/** Every related `WorldRecordQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (WorldRecordQuarterlyFilter | null),
/** Some related `WorldRecordQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (WorldRecordQuarterlyFilter | null),
/** No related `WorldRecordQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (WorldRecordQuarterlyFilter | null)}


/** A filter to be used against many `UserPoint` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyUserPointFilter {
/** Every related `UserPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (UserPointFilter | null),
/** Some related `UserPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (UserPointFilter | null),
/** No related `UserPoint` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (UserPointFilter | null)}


/** A filter to be used against `UserPoint` object types. All fields are combined with a logical ‘and.’ */
export interface UserPointFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `points` field. */
points?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `rank` field. */
rank?: (IntFilter | null),
/** Filter by the object’s `worldRecords` field. */
worldRecords?: (IntFilter | null),
/** Filter by the object’s `userByIdUser` relation. */
userByIdUser?: (UserFilter | null),
/** Checks for all expressions in this list. */
and?: (UserPointFilter[] | null),
/** Checks for any expressions in this list. */
or?: (UserPointFilter[] | null),
/** Negates the expression. */
not?: (UserPointFilter | null)}


/** A filter to be used against many `Record` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyRecordFilter {
/** Every related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (RecordFilter | null),
/** Some related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (RecordFilter | null),
/** No related `Record` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (RecordFilter | null)}


/** A filter to be used against many `StatsGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyStatsGlobalFilter {
/** Every related `StatsGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsGlobalFilter | null),
/** Some related `StatsGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsGlobalFilter | null),
/** No related `StatsGlobal` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsGlobalFilter | null)}


/** A filter to be used against many `Upvote` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyUpvoteFilter {
/** Every related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (UpvoteFilter | null),
/** Some related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (UpvoteFilter | null),
/** No related `Upvote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (UpvoteFilter | null)}


/** A filter to be used against many `PersonalBestYearly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyPersonalBestYearlyFilter {
/** Every related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestYearlyFilter | null),
/** Some related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestYearlyFilter | null),
/** No related `PersonalBestYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestYearlyFilter | null)}


/** A filter to be used against many `PersonalBestMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyPersonalBestMonthlyFilter {
/** Every related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestMonthlyFilter | null),
/** Some related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestMonthlyFilter | null),
/** No related `PersonalBestMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestMonthlyFilter | null)}


/** A filter to be used against many `PersonalBestWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyPersonalBestWeeklyFilter {
/** Every related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestWeeklyFilter | null),
/** Some related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestWeeklyFilter | null),
/** No related `PersonalBestWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestWeeklyFilter | null)}


/** A filter to be used against many `PersonalBestDaily` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyPersonalBestDailyFilter {
/** Every related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestDailyFilter | null),
/** Some related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestDailyFilter | null),
/** No related `PersonalBestDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestDailyFilter | null)}


/** A filter to be used against many `StatsMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyStatsMonthlyFilter {
/** Every related `StatsMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsMonthlyFilter | null),
/** Some related `StatsMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsMonthlyFilter | null),
/** No related `StatsMonthly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsMonthlyFilter | null)}


/** A filter to be used against many `StatsYearly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyStatsYearlyFilter {
/** Every related `StatsYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsYearlyFilter | null),
/** Some related `StatsYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsYearlyFilter | null),
/** No related `StatsYearly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsYearlyFilter | null)}


/** A filter to be used against many `StatsWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyStatsWeeklyFilter {
/** Every related `StatsWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsWeeklyFilter | null),
/** Some related `StatsWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsWeeklyFilter | null),
/** No related `StatsWeekly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsWeeklyFilter | null)}


/** A filter to be used against many `StatsDaily` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyStatsDailyFilter {
/** Every related `StatsDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsDailyFilter | null),
/** Some related `StatsDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsDailyFilter | null),
/** No related `StatsDaily` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsDailyFilter | null)}


/** A filter to be used against many `PersonalBestQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyPersonalBestQuarterlyFilter {
/** Every related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (PersonalBestQuarterlyFilter | null),
/** Some related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (PersonalBestQuarterlyFilter | null),
/** No related `PersonalBestQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (PersonalBestQuarterlyFilter | null)}


/** A filter to be used against many `StatsQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyStatsQuarterlyFilter {
/** Every related `StatsQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (StatsQuarterlyFilter | null),
/** Some related `StatsQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (StatsQuarterlyFilter | null),
/** No related `StatsQuarterly` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (StatsQuarterlyFilter | null)}


/** A filter to be used against many `Vote` object types. All fields are combined with a logical ‘and.’ */
export interface UserToManyVoteFilter {
/** Every related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
every?: (VoteFilter | null),
/** Some related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
some?: (VoteFilter | null),
/** No related `Vote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
none?: (VoteFilter | null)}


/** A connection to a list of `PersonalBestGlobal` values. */
export interface PersonalBestGlobalsConnectionGenqlSelection{
    /** A list of `PersonalBestGlobal` objects. */
    nodes?: PersonalBestGlobalGenqlSelection
    /** A list of edges which contains the `PersonalBestGlobal` and cursor to aid in pagination. */
    edges?: PersonalBestGlobalsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PersonalBestGlobal` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonalBestGlobalGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Record` that is related to this `PersonalBestGlobal`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `PersonalBestGlobal`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `PersonalBestGlobal`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecordGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    time?: boolean | number
    gameVersion?: boolean | number
    isValid?: boolean | number
    idLevel?: boolean | number
    modVersion?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    splits?: boolean | number
    speeds?: boolean | number
    /** Reads a single `User` that is related to this `Record`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `Record`. */
    levelByIdLevel?: LevelGenqlSelection
    /** Reads and enables pagination through a set of `RecordMedia`. */
    recordMediasByIdRecord?: (RecordMediasConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `RecordMedia`. */
    orderBy?: (RecordMediasOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RecordMediaCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (RecordMediaFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    personalBestGlobalsByIdRecord?: (PersonalBestGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestGlobal`. */
    orderBy?: (PersonalBestGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordGlobal`. */
    worldRecordGlobalsByIdRecord?: (WorldRecordGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordGlobal`. */
    orderBy?: (WorldRecordGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    personalBestYearliesByIdRecord?: (PersonalBestYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestYearly`. */
    orderBy?: (PersonalBestYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    personalBestMonthliesByIdRecord?: (PersonalBestMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestMonthly`. */
    orderBy?: (PersonalBestMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    personalBestWeekliesByIdRecord?: (PersonalBestWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestWeekly`. */
    orderBy?: (PersonalBestWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    personalBestDailiesByIdRecord?: (PersonalBestDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestDaily`. */
    orderBy?: (PersonalBestDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestDailyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordMonthly`. */
    worldRecordMonthliesByIdRecord?: (WorldRecordMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordMonthly`. */
    orderBy?: (WorldRecordMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordYearly`. */
    worldRecordYearliesByIdRecord?: (WorldRecordYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordYearly`. */
    orderBy?: (WorldRecordYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordWeekly`. */
    worldRecordWeekliesByIdRecord?: (WorldRecordWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordWeekly`. */
    orderBy?: (WorldRecordWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordDaily`. */
    worldRecordDailiesByIdRecord?: (WorldRecordDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordDaily`. */
    orderBy?: (WorldRecordDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordDailyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    personalBestQuarterliesByIdRecord?: (PersonalBestQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestQuarterly`. */
    orderBy?: (PersonalBestQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordQuarterly`. */
    worldRecordQuarterliesByIdRecord?: (WorldRecordQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordQuarterly`. */
    orderBy?: (WorldRecordQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordQuarterlyFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    hash?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads and enables pagination through a set of `Favorite`. */
    favoritesByIdLevel?: (FavoritesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Favorite`. */
    orderBy?: (FavoritesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (FavoriteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (FavoriteFilter | null)} })
    /** Reads and enables pagination through a set of `LevelPoint`. */
    levelPointsByIdLevel?: (LevelPointsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelPoint`. */
    orderBy?: (LevelPointsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelPointCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelPointFilter | null)} })
    /** Reads and enables pagination through a set of `LevelItem`. */
    levelItemsByIdLevel?: (LevelItemsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelItem`. */
    orderBy?: (LevelItemsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelItemCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelItemFilter | null)} })
    /** Reads and enables pagination through a set of `LevelMetadatum`. */
    levelMetadataByIdLevel?: (LevelMetadataConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `LevelMetadatum`. */
    orderBy?: (LevelMetadataOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (LevelMetadatumCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (LevelMetadatumFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestGlobal`. */
    personalBestGlobalsByIdLevel?: (PersonalBestGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestGlobal`. */
    orderBy?: (PersonalBestGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `Record`. */
    recordsByIdLevel?: (RecordsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Record`. */
    orderBy?: (RecordsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (RecordCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (RecordFilter | null)} })
    /** Reads and enables pagination through a set of `StatsGlobal`. */
    statsGlobalsByIdLevel?: (StatsGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsGlobal`. */
    orderBy?: (StatsGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `Upvote`. */
    upvotesByIdLevel?: (UpvotesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Upvote`. */
    orderBy?: (UpvotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (UpvoteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (UpvoteFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordGlobal`. */
    worldRecordGlobalsByIdLevel?: (WorldRecordGlobalsConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordGlobal`. */
    orderBy?: (WorldRecordGlobalsOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordGlobalCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordGlobalFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestYearly`. */
    personalBestYearliesByIdLevel?: (PersonalBestYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestYearly`. */
    orderBy?: (PersonalBestYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestMonthly`. */
    personalBestMonthliesByIdLevel?: (PersonalBestMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestMonthly`. */
    orderBy?: (PersonalBestMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestWeekly`. */
    personalBestWeekliesByIdLevel?: (PersonalBestWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestWeekly`. */
    orderBy?: (PersonalBestWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestDaily`. */
    personalBestDailiesByIdLevel?: (PersonalBestDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestDaily`. */
    orderBy?: (PersonalBestDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestDailyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordMonthly`. */
    worldRecordMonthliesByIdLevel?: (WorldRecordMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordMonthly`. */
    orderBy?: (WorldRecordMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordYearly`. */
    worldRecordYearliesByIdLevel?: (WorldRecordYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordYearly`. */
    orderBy?: (WorldRecordYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordWeekly`. */
    worldRecordWeekliesByIdLevel?: (WorldRecordWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordWeekly`. */
    orderBy?: (WorldRecordWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordDaily`. */
    worldRecordDailiesByIdLevel?: (WorldRecordDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordDaily`. */
    orderBy?: (WorldRecordDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordDailyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsMonthly`. */
    statsMonthliesByIdLevel?: (StatsMonthliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsMonthly`. */
    orderBy?: (StatsMonthliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsMonthlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsMonthlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsYearly`. */
    statsYearliesByIdLevel?: (StatsYearliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsYearly`. */
    orderBy?: (StatsYearliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsYearlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsYearlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsWeekly`. */
    statsWeekliesByIdLevel?: (StatsWeekliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsWeekly`. */
    orderBy?: (StatsWeekliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsWeeklyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsWeeklyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsDaily`. */
    statsDailiesByIdLevel?: (StatsDailiesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsDaily`. */
    orderBy?: (StatsDailiesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsDailyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsDailyFilter | null)} })
    /** Reads and enables pagination through a set of `PersonalBestQuarterly`. */
    personalBestQuarterliesByIdLevel?: (PersonalBestQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `PersonalBestQuarterly`. */
    orderBy?: (PersonalBestQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (PersonalBestQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (PersonalBestQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `StatsQuarterly`. */
    statsQuarterliesByIdLevel?: (StatsQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `StatsQuarterly`. */
    orderBy?: (StatsQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (StatsQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (StatsQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `WorldRecordQuarterly`. */
    worldRecordQuarterliesByIdLevel?: (WorldRecordQuarterliesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `WorldRecordQuarterly`. */
    orderBy?: (WorldRecordQuarterliesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (WorldRecordQuarterlyCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (WorldRecordQuarterlyFilter | null)} })
    /** Reads and enables pagination through a set of `Vote`. */
    votesByIdLevel?: (VotesConnectionGenqlSelection & { __args?: {
    /** Only read the first `n` values of the set. */
    first?: (Scalars['Int'] | null), 
    /** Only read the last `n` values of the set. */
    last?: (Scalars['Int'] | null), 
    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor
     * based pagination. May not be used with `last`.
     */
    offset?: (Scalars['Int'] | null), 
    /** Read all values in the set before (above) this cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Read all values in the set after (below) this cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** The method to use when ordering `Vote`. */
    orderBy?: (VotesOrderBy[] | null), 
    /** A condition to be used in determining which values should be returned by the collection. */
    condition?: (VoteCondition | null), 
    /** A filter to be used in determining which values should be returned by the collection. */
    filter?: (VoteFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `LevelPoint` values. */
export interface LevelPointsConnectionGenqlSelection{
    /** A list of `LevelPoint` objects. */
    nodes?: LevelPointGenqlSelection
    /** A list of edges which contains the `LevelPoint` and cursor to aid in pagination. */
    edges?: LevelPointsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `LevelPoint` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelPointGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    points?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Level` that is related to this `LevelPoint`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `LevelPoint` edge in the connection. */
export interface LevelPointsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `LevelPoint` at the end of the edge. */
    node?: LevelPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about pagination in a connection. */
export interface PageInfoGenqlSelection{
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `LevelPoint` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface LevelPointCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `points` field. */
points?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `LevelItem` values. */
export interface LevelItemsConnectionGenqlSelection{
    /** A list of `LevelItem` objects. */
    nodes?: LevelItemGenqlSelection
    /** A list of edges which contains the `LevelItem` and cursor to aid in pagination. */
    edges?: LevelItemsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `LevelItem` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelItemGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idLevel?: boolean | number
    workshopId?: boolean | number
    authorId?: boolean | number
    name?: boolean | number
    imageUrl?: boolean | number
    fileAuthor?: boolean | number
    fileUid?: boolean | number
    validationTimeAuthor?: boolean | number
    validationTimeGold?: boolean | number
    validationTimeSilver?: boolean | number
    validationTimeBronze?: boolean | number
    deleted?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Level` that is related to this `LevelItem`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `LevelItem` edge in the connection. */
export interface LevelItemsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `LevelItem` at the end of the edge. */
    node?: LevelItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `LevelItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface LevelItemCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `workshopId` field. */
workshopId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `authorId` field. */
authorId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `name` field. */
name?: (Scalars['String'] | null),
/** Checks for equality with the object’s `imageUrl` field. */
imageUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileAuthor` field. */
fileAuthor?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileUid` field. */
fileUid?: (Scalars['String'] | null),
/** Checks for equality with the object’s `validationTimeAuthor` field. */
validationTimeAuthor?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `validationTimeGold` field. */
validationTimeGold?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `validationTimeSilver` field. */
validationTimeSilver?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `validationTimeBronze` field. */
validationTimeBronze?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `deleted` field. */
deleted?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `createdAt` field. */
createdAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `updatedAt` field. */
updatedAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `LevelMetadatum` values. */
export interface LevelMetadataConnectionGenqlSelection{
    /** A list of `LevelMetadatum` objects. */
    nodes?: LevelMetadatumGenqlSelection
    /** A list of edges which contains the `LevelMetadatum` and cursor to aid in pagination. */
    edges?: LevelMetadataEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `LevelMetadatum` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelMetadatumGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idLevel?: boolean | number
    amountCheckpoints?: boolean | number
    amountFinishes?: boolean | number
    amountBlocks?: boolean | number
    typeGround?: boolean | number
    typeSkybox?: boolean | number
    blocks?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Level` that is related to this `LevelMetadatum`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `LevelMetadatum` edge in the connection. */
export interface LevelMetadataEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `LevelMetadatum` at the end of the edge. */
    node?: LevelMetadatumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `LevelMetadatum` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface LevelMetadatumCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `amountCheckpoints` field. */
amountCheckpoints?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `amountFinishes` field. */
amountFinishes?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `amountBlocks` field. */
amountBlocks?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `typeGround` field. */
typeGround?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `typeSkybox` field. */
typeSkybox?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `blocks` field. */
blocks?: (Scalars['JSON'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/**
 * A condition to be used against `PersonalBestGlobal` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestGlobalCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `Record` values. */
export interface RecordsConnectionGenqlSelection{
    /** A list of `Record` objects. */
    nodes?: RecordGenqlSelection
    /** A list of edges which contains the `Record` and cursor to aid in pagination. */
    edges?: RecordsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Record` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Record` edge in the connection. */
export interface RecordsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Record` at the end of the edge. */
    node?: RecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Record` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface RecordCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `time` field. */
time?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `gameVersion` field. */
gameVersion?: (Scalars['String'] | null),
/** Checks for equality with the object’s `isValid` field. */
isValid?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `modVersion` field. */
modVersion?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `splits` field. */
splits?: ((Scalars['Float'] | null)[] | null),
/** Checks for equality with the object’s `speeds` field. */
speeds?: ((Scalars['Float'] | null)[] | null)}


/** A connection to a list of `StatsGlobal` values. */
export interface StatsGlobalsConnectionGenqlSelection{
    /** A list of `StatsGlobal` objects. */
    nodes?: StatsGlobalGenqlSelection
    /** A list of edges which contains the `StatsGlobal` and cursor to aid in pagination. */
    edges?: StatsGlobalsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `StatsGlobal` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsGlobalGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    value?: boolean | number
    /** Reads a single `User` that is related to this `StatsGlobal`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `StatsGlobal`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `StatsGlobal` edge in the connection. */
export interface StatsGlobalsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `StatsGlobal` at the end of the edge. */
    node?: StatsGlobalGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `StatsGlobal` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface StatsGlobalCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A connection to a list of `Upvote` values. */
export interface UpvotesConnectionGenqlSelection{
    /** A list of `Upvote` objects. */
    nodes?: UpvoteGenqlSelection
    /** A list of edges which contains the `Upvote` and cursor to aid in pagination. */
    edges?: UpvotesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Upvote` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpvoteGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `User` that is related to this `Upvote`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `Upvote`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Upvote` edge in the connection. */
export interface UpvotesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Upvote` at the end of the edge. */
    node?: UpvoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Upvote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface UpvoteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `WorldRecordGlobal` values. */
export interface WorldRecordGlobalsConnectionGenqlSelection{
    /** A list of `WorldRecordGlobal` objects. */
    nodes?: WorldRecordGlobalGenqlSelection
    /** A list of edges which contains the `WorldRecordGlobal` and cursor to aid in pagination. */
    edges?: WorldRecordGlobalsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `WorldRecordGlobal` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorldRecordGlobalGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Record` that is related to this `WorldRecordGlobal`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `Level` that is related to this `WorldRecordGlobal`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `WorldRecordGlobal` edge in the connection. */
export interface WorldRecordGlobalsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `WorldRecordGlobal` at the end of the edge. */
    node?: WorldRecordGlobalGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `WorldRecordGlobal` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface WorldRecordGlobalCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `PersonalBestYearly` values. */
export interface PersonalBestYearliesConnectionGenqlSelection{
    /** A list of `PersonalBestYearly` objects. */
    nodes?: PersonalBestYearlyGenqlSelection
    /** A list of edges which contains the `PersonalBestYearly` and cursor to aid in pagination. */
    edges?: PersonalBestYearliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PersonalBestYearly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonalBestYearlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    /** Reads a single `Record` that is related to this `PersonalBestYearly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `PersonalBestYearly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `PersonalBestYearly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `PersonalBestYearly` edge in the connection. */
export interface PersonalBestYearliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PersonalBestYearly` at the end of the edge. */
    node?: PersonalBestYearlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `PersonalBestYearly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestYearlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null)}


/** A connection to a list of `PersonalBestMonthly` values. */
export interface PersonalBestMonthliesConnectionGenqlSelection{
    /** A list of `PersonalBestMonthly` objects. */
    nodes?: PersonalBestMonthlyGenqlSelection
    /** A list of edges which contains the `PersonalBestMonthly` and cursor to aid in pagination. */
    edges?: PersonalBestMonthliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PersonalBestMonthly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonalBestMonthlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    month?: boolean | number
    /** Reads a single `Record` that is related to this `PersonalBestMonthly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `PersonalBestMonthly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `PersonalBestMonthly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `PersonalBestMonthly` edge in the connection. */
export interface PersonalBestMonthliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PersonalBestMonthly` at the end of the edge. */
    node?: PersonalBestMonthlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `PersonalBestMonthly` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestMonthlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `month` field. */
month?: (Scalars['Int'] | null)}


/** A connection to a list of `PersonalBestWeekly` values. */
export interface PersonalBestWeekliesConnectionGenqlSelection{
    /** A list of `PersonalBestWeekly` objects. */
    nodes?: PersonalBestWeeklyGenqlSelection
    /** A list of edges which contains the `PersonalBestWeekly` and cursor to aid in pagination. */
    edges?: PersonalBestWeekliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PersonalBestWeekly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonalBestWeeklyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    week?: boolean | number
    /** Reads a single `Record` that is related to this `PersonalBestWeekly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `PersonalBestWeekly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `PersonalBestWeekly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `PersonalBestWeekly` edge in the connection. */
export interface PersonalBestWeekliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PersonalBestWeekly` at the end of the edge. */
    node?: PersonalBestWeeklyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `PersonalBestWeekly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestWeeklyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `week` field. */
week?: (Scalars['Int'] | null)}


/** A connection to a list of `PersonalBestDaily` values. */
export interface PersonalBestDailiesConnectionGenqlSelection{
    /** A list of `PersonalBestDaily` objects. */
    nodes?: PersonalBestDailyGenqlSelection
    /** A list of edges which contains the `PersonalBestDaily` and cursor to aid in pagination. */
    edges?: PersonalBestDailiesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PersonalBestDaily` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonalBestDailyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    day?: boolean | number
    /** Reads a single `Record` that is related to this `PersonalBestDaily`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `PersonalBestDaily`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `PersonalBestDaily`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `PersonalBestDaily` edge in the connection. */
export interface PersonalBestDailiesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PersonalBestDaily` at the end of the edge. */
    node?: PersonalBestDailyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `PersonalBestDaily` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestDailyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `day` field. */
day?: (Scalars['Int'] | null)}


/** A connection to a list of `WorldRecordMonthly` values. */
export interface WorldRecordMonthliesConnectionGenqlSelection{
    /** A list of `WorldRecordMonthly` objects. */
    nodes?: WorldRecordMonthlyGenqlSelection
    /** A list of edges which contains the `WorldRecordMonthly` and cursor to aid in pagination. */
    edges?: WorldRecordMonthliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `WorldRecordMonthly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorldRecordMonthlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    month?: boolean | number
    /** Reads a single `Record` that is related to this `WorldRecordMonthly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `Level` that is related to this `WorldRecordMonthly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `WorldRecordMonthly` edge in the connection. */
export interface WorldRecordMonthliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `WorldRecordMonthly` at the end of the edge. */
    node?: WorldRecordMonthlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `WorldRecordMonthly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface WorldRecordMonthlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `month` field. */
month?: (Scalars['Int'] | null)}


/** A connection to a list of `WorldRecordYearly` values. */
export interface WorldRecordYearliesConnectionGenqlSelection{
    /** A list of `WorldRecordYearly` objects. */
    nodes?: WorldRecordYearlyGenqlSelection
    /** A list of edges which contains the `WorldRecordYearly` and cursor to aid in pagination. */
    edges?: WorldRecordYearliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `WorldRecordYearly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorldRecordYearlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    /** Reads a single `Record` that is related to this `WorldRecordYearly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `Level` that is related to this `WorldRecordYearly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `WorldRecordYearly` edge in the connection. */
export interface WorldRecordYearliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `WorldRecordYearly` at the end of the edge. */
    node?: WorldRecordYearlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `WorldRecordYearly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface WorldRecordYearlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null)}


/** A connection to a list of `WorldRecordWeekly` values. */
export interface WorldRecordWeekliesConnectionGenqlSelection{
    /** A list of `WorldRecordWeekly` objects. */
    nodes?: WorldRecordWeeklyGenqlSelection
    /** A list of edges which contains the `WorldRecordWeekly` and cursor to aid in pagination. */
    edges?: WorldRecordWeekliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `WorldRecordWeekly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorldRecordWeeklyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    week?: boolean | number
    /** Reads a single `Record` that is related to this `WorldRecordWeekly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `Level` that is related to this `WorldRecordWeekly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `WorldRecordWeekly` edge in the connection. */
export interface WorldRecordWeekliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `WorldRecordWeekly` at the end of the edge. */
    node?: WorldRecordWeeklyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `WorldRecordWeekly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface WorldRecordWeeklyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `week` field. */
week?: (Scalars['Int'] | null)}


/** A connection to a list of `WorldRecordDaily` values. */
export interface WorldRecordDailiesConnectionGenqlSelection{
    /** A list of `WorldRecordDaily` objects. */
    nodes?: WorldRecordDailyGenqlSelection
    /** A list of edges which contains the `WorldRecordDaily` and cursor to aid in pagination. */
    edges?: WorldRecordDailiesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `WorldRecordDaily` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorldRecordDailyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    day?: boolean | number
    /** Reads a single `Record` that is related to this `WorldRecordDaily`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `Level` that is related to this `WorldRecordDaily`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `WorldRecordDaily` edge in the connection. */
export interface WorldRecordDailiesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `WorldRecordDaily` at the end of the edge. */
    node?: WorldRecordDailyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `WorldRecordDaily` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface WorldRecordDailyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `day` field. */
day?: (Scalars['Int'] | null)}


/** A connection to a list of `StatsMonthly` values. */
export interface StatsMonthliesConnectionGenqlSelection{
    /** A list of `StatsMonthly` objects. */
    nodes?: StatsMonthlyGenqlSelection
    /** A list of edges which contains the `StatsMonthly` and cursor to aid in pagination. */
    edges?: StatsMonthliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `StatsMonthly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsMonthlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    month?: boolean | number
    value?: boolean | number
    /** Reads a single `User` that is related to this `StatsMonthly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `StatsMonthly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `StatsMonthly` edge in the connection. */
export interface StatsMonthliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `StatsMonthly` at the end of the edge. */
    node?: StatsMonthlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `StatsMonthly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface StatsMonthlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `month` field. */
month?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A connection to a list of `StatsYearly` values. */
export interface StatsYearliesConnectionGenqlSelection{
    /** A list of `StatsYearly` objects. */
    nodes?: StatsYearlyGenqlSelection
    /** A list of edges which contains the `StatsYearly` and cursor to aid in pagination. */
    edges?: StatsYearliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `StatsYearly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsYearlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    value?: boolean | number
    /** Reads a single `User` that is related to this `StatsYearly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `StatsYearly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `StatsYearly` edge in the connection. */
export interface StatsYearliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `StatsYearly` at the end of the edge. */
    node?: StatsYearlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `StatsYearly` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface StatsYearlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A connection to a list of `StatsWeekly` values. */
export interface StatsWeekliesConnectionGenqlSelection{
    /** A list of `StatsWeekly` objects. */
    nodes?: StatsWeeklyGenqlSelection
    /** A list of edges which contains the `StatsWeekly` and cursor to aid in pagination. */
    edges?: StatsWeekliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `StatsWeekly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsWeeklyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    week?: boolean | number
    value?: boolean | number
    /** Reads a single `User` that is related to this `StatsWeekly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `StatsWeekly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `StatsWeekly` edge in the connection. */
export interface StatsWeekliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `StatsWeekly` at the end of the edge. */
    node?: StatsWeeklyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `StatsWeekly` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface StatsWeeklyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `week` field. */
week?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A connection to a list of `StatsDaily` values. */
export interface StatsDailiesConnectionGenqlSelection{
    /** A list of `StatsDaily` objects. */
    nodes?: StatsDailyGenqlSelection
    /** A list of edges which contains the `StatsDaily` and cursor to aid in pagination. */
    edges?: StatsDailiesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `StatsDaily` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsDailyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    day?: boolean | number
    value?: boolean | number
    /** Reads a single `User` that is related to this `StatsDaily`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `StatsDaily`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `StatsDaily` edge in the connection. */
export interface StatsDailiesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `StatsDaily` at the end of the edge. */
    node?: StatsDailyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `StatsDaily` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface StatsDailyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `day` field. */
day?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A connection to a list of `PersonalBestQuarterly` values. */
export interface PersonalBestQuarterliesConnectionGenqlSelection{
    /** A list of `PersonalBestQuarterly` objects. */
    nodes?: PersonalBestQuarterlyGenqlSelection
    /** A list of edges which contains the `PersonalBestQuarterly` and cursor to aid in pagination. */
    edges?: PersonalBestQuarterliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `PersonalBestQuarterly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonalBestQuarterlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    quarter?: boolean | number
    /** Reads a single `Record` that is related to this `PersonalBestQuarterly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `User` that is related to this `PersonalBestQuarterly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `PersonalBestQuarterly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `PersonalBestQuarterly` edge in the connection. */
export interface PersonalBestQuarterliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PersonalBestQuarterly` at the end of the edge. */
    node?: PersonalBestQuarterlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `PersonalBestQuarterly` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface PersonalBestQuarterlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `quarter` field. */
quarter?: (Scalars['Int'] | null)}


/** A connection to a list of `StatsQuarterly` values. */
export interface StatsQuarterliesConnectionGenqlSelection{
    /** A list of `StatsQuarterly` objects. */
    nodes?: StatsQuarterlyGenqlSelection
    /** A list of edges which contains the `StatsQuarterly` and cursor to aid in pagination. */
    edges?: StatsQuarterliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `StatsQuarterly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsQuarterlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    quarter?: boolean | number
    value?: boolean | number
    /** Reads a single `User` that is related to this `StatsQuarterly`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `StatsQuarterly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `StatsQuarterly` edge in the connection. */
export interface StatsQuarterliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `StatsQuarterly` at the end of the edge. */
    node?: StatsQuarterlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `StatsQuarterly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface StatsQuarterlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `quarter` field. */
quarter?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A connection to a list of `WorldRecordQuarterly` values. */
export interface WorldRecordQuarterliesConnectionGenqlSelection{
    /** A list of `WorldRecordQuarterly` objects. */
    nodes?: WorldRecordQuarterlyGenqlSelection
    /** A list of edges which contains the `WorldRecordQuarterly` and cursor to aid in pagination. */
    edges?: WorldRecordQuarterliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `WorldRecordQuarterly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorldRecordQuarterlyGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    quarter?: boolean | number
    /** Reads a single `Record` that is related to this `WorldRecordQuarterly`. */
    recordByIdRecord?: RecordGenqlSelection
    /** Reads a single `Level` that is related to this `WorldRecordQuarterly`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `WorldRecordQuarterly` edge in the connection. */
export interface WorldRecordQuarterliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `WorldRecordQuarterly` at the end of the edge. */
    node?: WorldRecordQuarterlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `WorldRecordQuarterly` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface WorldRecordQuarterlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `quarter` field. */
quarter?: (Scalars['Int'] | null)}


/** A connection to a list of `Vote` values. */
export interface VotesConnectionGenqlSelection{
    /** A list of `Vote` objects. */
    nodes?: VoteGenqlSelection
    /** A list of edges which contains the `Vote` and cursor to aid in pagination. */
    edges?: VotesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Vote` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VoteGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    value?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `User` that is related to this `Vote`. */
    userByIdUser?: UserGenqlSelection
    /** Reads a single `Level` that is related to this `Vote`. */
    levelByIdLevel?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Vote` edge in the connection. */
export interface VotesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Vote` at the end of the edge. */
    node?: VoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Vote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface VoteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `RecordMedia` values. */
export interface RecordMediasConnectionGenqlSelection{
    /** A list of `RecordMedia` objects. */
    nodes?: RecordMediaGenqlSelection
    /** A list of edges which contains the `RecordMedia` and cursor to aid in pagination. */
    edges?: RecordMediasEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `RecordMedia` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecordMediaGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idRecord?: boolean | number
    ghostUrl?: boolean | number
    screenshotUrl?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    /** Reads a single `Record` that is related to this `RecordMedia`. */
    recordByIdRecord?: RecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `RecordMedia` edge in the connection. */
export interface RecordMediasEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `RecordMedia` at the end of the edge. */
    node?: RecordMediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `RecordMedia` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface RecordMediaCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `ghostUrl` field. */
ghostUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `screenshotUrl` field. */
screenshotUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A `PersonalBestGlobal` edge in the connection. */
export interface PersonalBestGlobalsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `PersonalBestGlobal` at the end of the edge. */
    node?: PersonalBestGlobalGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `UserPoint` values. */
export interface UserPointsConnectionGenqlSelection{
    /** A list of `UserPoint` objects. */
    nodes?: UserPointGenqlSelection
    /** A list of edges which contains the `UserPoint` and cursor to aid in pagination. */
    edges?: UserPointsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `UserPoint` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserPointGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    idUser?: boolean | number
    points?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    rank?: boolean | number
    worldRecords?: boolean | number
    /** Reads a single `User` that is related to this `UserPoint`. */
    userByIdUser?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `UserPoint` edge in the connection. */
export interface UserPointsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `UserPoint` at the end of the edge. */
    node?: UserPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `UserPoint` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface UserPointCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `points` field. */
points?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `rank` field. */
rank?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `worldRecords` field. */
worldRecords?: (Scalars['Int'] | null)}


/** A `Favorite` edge in the connection. */
export interface FavoritesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Favorite` at the end of the edge. */
    node?: FavoriteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of `Level` values. */
export interface LevelsConnectionGenqlSelection{
    /** A list of `Level` objects. */
    nodes?: LevelGenqlSelection
    /** A list of edges which contains the `Level` and cursor to aid in pagination. */
    edges?: LevelsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Level` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Level` edge in the connection. */
export interface LevelsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Level` at the end of the edge. */
    node?: LevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Level` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface LevelCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `hash` field. */
hash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A connection to a list of `LevelRequest` values. */
export interface LevelRequestsConnectionGenqlSelection{
    /** A list of `LevelRequest` objects. */
    nodes?: LevelRequestGenqlSelection
    /** A list of edges which contains the `LevelRequest` and cursor to aid in pagination. */
    edges?: LevelRequestsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `LevelRequest` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelRequestGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    workshopId?: boolean | number
    uid?: boolean | number
    hash?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `LevelRequest` edge in the connection. */
export interface LevelRequestsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `LevelRequest` at the end of the edge. */
    node?: LevelRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `LevelRequest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface LevelRequestCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `workshopId` field. */
workshopId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `uid` field. */
uid?: (Scalars['String'] | null),
/** Checks for equality with the object’s `hash` field. */
hash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `LevelRequest` object types. All fields are combined with a logical ‘and.’ */
export interface LevelRequestFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `workshopId` field. */
workshopId?: (BigFloatFilter | null),
/** Filter by the object’s `uid` field. */
uid?: (StringFilter | null),
/** Filter by the object’s `hash` field. */
hash?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (LevelRequestFilter[] | null),
/** Checks for any expressions in this list. */
or?: (LevelRequestFilter[] | null),
/** Negates the expression. */
not?: (LevelRequestFilter | null)}


/** A connection to a list of `SampledFavorite` values. */
export interface SampledFavoritesConnectionGenqlSelection{
    /** A list of `SampledFavorite` objects. */
    nodes?: SampledFavoriteGenqlSelection
    /** A list of edges which contains the `SampledFavorite` and cursor to aid in pagination. */
    edges?: SampledFavoritesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledFavorite` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledFavoriteGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    idLevel?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledFavorite` edge in the connection. */
export interface SampledFavoritesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledFavorite` at the end of the edge. */
    node?: SampledFavoriteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledFavorite` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledFavoriteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledFavorite` object types. All fields are combined with a logical ‘and.’ */
export interface SampledFavoriteFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledFavoriteFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledFavoriteFilter[] | null),
/** Negates the expression. */
not?: (SampledFavoriteFilter | null)}


/** A connection to a list of `SampledLevel` values. */
export interface SampledLevelsConnectionGenqlSelection{
    /** A list of `SampledLevel` objects. */
    nodes?: SampledLevelGenqlSelection
    /** A list of edges which contains the `SampledLevel` and cursor to aid in pagination. */
    edges?: SampledLevelsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledLevel` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledLevelGenqlSelection{
    id?: boolean | number
    hash?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledLevel` edge in the connection. */
export interface SampledLevelsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledLevel` at the end of the edge. */
    node?: SampledLevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledLevel` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `hash` field. */
hash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledLevel` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `hash` field. */
hash?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledLevelFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledLevelFilter[] | null),
/** Negates the expression. */
not?: (SampledLevelFilter | null)}


/** A connection to a list of `SampledLevelItem` values. */
export interface SampledLevelItemsConnectionGenqlSelection{
    /** A list of `SampledLevelItem` objects. */
    nodes?: SampledLevelItemGenqlSelection
    /** A list of edges which contains the `SampledLevelItem` and cursor to aid in pagination. */
    edges?: SampledLevelItemsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledLevelItem` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledLevelItemGenqlSelection{
    id?: boolean | number
    idLevel?: boolean | number
    workshopId?: boolean | number
    authorId?: boolean | number
    name?: boolean | number
    imageUrl?: boolean | number
    fileAuthor?: boolean | number
    fileUid?: boolean | number
    validationTimeAuthor?: boolean | number
    validationTimeGold?: boolean | number
    validationTimeSilver?: boolean | number
    validationTimeBronze?: boolean | number
    deleted?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledLevelItem` edge in the connection. */
export interface SampledLevelItemsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledLevelItem` at the end of the edge. */
    node?: SampledLevelItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledLevelItem` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelItemCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `workshopId` field. */
workshopId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `authorId` field. */
authorId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `name` field. */
name?: (Scalars['String'] | null),
/** Checks for equality with the object’s `imageUrl` field. */
imageUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileAuthor` field. */
fileAuthor?: (Scalars['String'] | null),
/** Checks for equality with the object’s `fileUid` field. */
fileUid?: (Scalars['String'] | null),
/** Checks for equality with the object’s `validationTimeAuthor` field. */
validationTimeAuthor?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `validationTimeGold` field. */
validationTimeGold?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `validationTimeSilver` field. */
validationTimeSilver?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `validationTimeBronze` field. */
validationTimeBronze?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `deleted` field. */
deleted?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `createdAt` field. */
createdAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `updatedAt` field. */
updatedAt?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledLevelItem` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelItemFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `workshopId` field. */
workshopId?: (BigFloatFilter | null),
/** Filter by the object’s `authorId` field. */
authorId?: (BigFloatFilter | null),
/** Filter by the object’s `name` field. */
name?: (StringFilter | null),
/** Filter by the object’s `imageUrl` field. */
imageUrl?: (StringFilter | null),
/** Filter by the object’s `fileAuthor` field. */
fileAuthor?: (StringFilter | null),
/** Filter by the object’s `fileUid` field. */
fileUid?: (StringFilter | null),
/** Filter by the object’s `validationTimeAuthor` field. */
validationTimeAuthor?: (FloatFilter | null),
/** Filter by the object’s `validationTimeGold` field. */
validationTimeGold?: (FloatFilter | null),
/** Filter by the object’s `validationTimeSilver` field. */
validationTimeSilver?: (FloatFilter | null),
/** Filter by the object’s `validationTimeBronze` field. */
validationTimeBronze?: (FloatFilter | null),
/** Filter by the object’s `deleted` field. */
deleted?: (BooleanFilter | null),
/** Filter by the object’s `createdAt` field. */
createdAt?: (DatetimeFilter | null),
/** Filter by the object’s `updatedAt` field. */
updatedAt?: (DatetimeFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledLevelItemFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledLevelItemFilter[] | null),
/** Negates the expression. */
not?: (SampledLevelItemFilter | null)}


/** A connection to a list of `SampledLevelMetadatum` values. */
export interface SampledLevelMetadataConnectionGenqlSelection{
    /** A list of `SampledLevelMetadatum` objects. */
    nodes?: SampledLevelMetadatumGenqlSelection
    /** A list of edges which contains the `SampledLevelMetadatum` and cursor to aid in pagination. */
    edges?: SampledLevelMetadataEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledLevelMetadatum` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledLevelMetadatumGenqlSelection{
    id?: boolean | number
    idLevel?: boolean | number
    amountCheckpoints?: boolean | number
    amountFinishes?: boolean | number
    amountBlocks?: boolean | number
    typeGround?: boolean | number
    typeSkybox?: boolean | number
    blocks?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledLevelMetadatum` edge in the connection. */
export interface SampledLevelMetadataEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledLevelMetadatum` at the end of the edge. */
    node?: SampledLevelMetadatumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledLevelMetadatum` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelMetadatumCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `amountCheckpoints` field. */
amountCheckpoints?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `amountFinishes` field. */
amountFinishes?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `amountBlocks` field. */
amountBlocks?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `typeGround` field. */
typeGround?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `typeSkybox` field. */
typeSkybox?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `blocks` field. */
blocks?: (Scalars['JSON'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledLevelMetadatum` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelMetadatumFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `amountCheckpoints` field. */
amountCheckpoints?: (IntFilter | null),
/** Filter by the object’s `amountFinishes` field. */
amountFinishes?: (IntFilter | null),
/** Filter by the object’s `amountBlocks` field. */
amountBlocks?: (IntFilter | null),
/** Filter by the object’s `typeGround` field. */
typeGround?: (IntFilter | null),
/** Filter by the object’s `typeSkybox` field. */
typeSkybox?: (IntFilter | null),
/** Filter by the object’s `blocks` field. */
blocks?: (JSONFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledLevelMetadatumFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledLevelMetadatumFilter[] | null),
/** Negates the expression. */
not?: (SampledLevelMetadatumFilter | null)}


/** A connection to a list of `SampledLevelPoint` values. */
export interface SampledLevelPointsConnectionGenqlSelection{
    /** A list of `SampledLevelPoint` objects. */
    nodes?: SampledLevelPointGenqlSelection
    /** A list of edges which contains the `SampledLevelPoint` and cursor to aid in pagination. */
    edges?: SampledLevelPointsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledLevelPoint` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledLevelPointGenqlSelection{
    id?: boolean | number
    points?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledLevelPoint` edge in the connection. */
export interface SampledLevelPointsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledLevelPoint` at the end of the edge. */
    node?: SampledLevelPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledLevelPoint` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelPointCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `points` field. */
points?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledLevelPoint` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelPointFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `points` field. */
points?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledLevelPointFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledLevelPointFilter[] | null),
/** Negates the expression. */
not?: (SampledLevelPointFilter | null)}


/** A connection to a list of `SampledLevelRequest` values. */
export interface SampledLevelRequestsConnectionGenqlSelection{
    /** A list of `SampledLevelRequest` objects. */
    nodes?: SampledLevelRequestGenqlSelection
    /** A list of edges which contains the `SampledLevelRequest` and cursor to aid in pagination. */
    edges?: SampledLevelRequestsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledLevelRequest` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledLevelRequestGenqlSelection{
    id?: boolean | number
    workshopId?: boolean | number
    uid?: boolean | number
    hash?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledLevelRequest` edge in the connection. */
export interface SampledLevelRequestsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledLevelRequest` at the end of the edge. */
    node?: SampledLevelRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledLevelRequest` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface SampledLevelRequestCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `workshopId` field. */
workshopId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `uid` field. */
uid?: (Scalars['String'] | null),
/** Checks for equality with the object’s `hash` field. */
hash?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledLevelRequest` object types. All fields are combined with a logical ‘and.’ */
export interface SampledLevelRequestFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `workshopId` field. */
workshopId?: (BigFloatFilter | null),
/** Filter by the object’s `uid` field. */
uid?: (StringFilter | null),
/** Filter by the object’s `hash` field. */
hash?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledLevelRequestFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledLevelRequestFilter[] | null),
/** Negates the expression. */
not?: (SampledLevelRequestFilter | null)}


/** A connection to a list of `SampledPersonalBestDaily` values. */
export interface SampledPersonalBestDailiesConnectionGenqlSelection{
    /** A list of `SampledPersonalBestDaily` objects. */
    nodes?: SampledPersonalBestDailyGenqlSelection
    /** A list of edges which contains the `SampledPersonalBestDaily` and cursor to aid in pagination. */
    edges?: SampledPersonalBestDailiesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledPersonalBestDaily` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledPersonalBestDailyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledPersonalBestDaily` edge in the connection. */
export interface SampledPersonalBestDailiesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledPersonalBestDaily` at the end of the edge. */
    node?: SampledPersonalBestDailyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledPersonalBestDaily` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledPersonalBestDailyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `day` field. */
day?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledPersonalBestDaily` object types. All fields are combined with a logical ‘and.’ */
export interface SampledPersonalBestDailyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `day` field. */
day?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledPersonalBestDailyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledPersonalBestDailyFilter[] | null),
/** Negates the expression. */
not?: (SampledPersonalBestDailyFilter | null)}


/** A connection to a list of `SampledPersonalBestGlobal` values. */
export interface SampledPersonalBestGlobalsConnectionGenqlSelection{
    /** A list of `SampledPersonalBestGlobal` objects. */
    nodes?: SampledPersonalBestGlobalGenqlSelection
    /** A list of edges which contains the `SampledPersonalBestGlobal` and cursor to aid in pagination. */
    edges?: SampledPersonalBestGlobalsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledPersonalBestGlobal` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledPersonalBestGlobalGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledPersonalBestGlobal` edge in the connection. */
export interface SampledPersonalBestGlobalsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledPersonalBestGlobal` at the end of the edge. */
    node?: SampledPersonalBestGlobalGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledPersonalBestGlobal` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledPersonalBestGlobalCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledPersonalBestGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface SampledPersonalBestGlobalFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledPersonalBestGlobalFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledPersonalBestGlobalFilter[] | null),
/** Negates the expression. */
not?: (SampledPersonalBestGlobalFilter | null)}


/** A connection to a list of `SampledPersonalBestMonthly` values. */
export interface SampledPersonalBestMonthliesConnectionGenqlSelection{
    /** A list of `SampledPersonalBestMonthly` objects. */
    nodes?: SampledPersonalBestMonthlyGenqlSelection
    /** A list of edges which contains the `SampledPersonalBestMonthly` and cursor to aid in pagination. */
    edges?: SampledPersonalBestMonthliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledPersonalBestMonthly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledPersonalBestMonthlyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    month?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledPersonalBestMonthly` edge in the connection. */
export interface SampledPersonalBestMonthliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledPersonalBestMonthly` at the end of the edge. */
    node?: SampledPersonalBestMonthlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledPersonalBestMonthly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledPersonalBestMonthlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `month` field. */
month?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledPersonalBestMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledPersonalBestMonthlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `month` field. */
month?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledPersonalBestMonthlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledPersonalBestMonthlyFilter[] | null),
/** Negates the expression. */
not?: (SampledPersonalBestMonthlyFilter | null)}


/** A connection to a list of `SampledPersonalBestQuarterly` values. */
export interface SampledPersonalBestQuarterliesConnectionGenqlSelection{
    /** A list of `SampledPersonalBestQuarterly` objects. */
    nodes?: SampledPersonalBestQuarterlyGenqlSelection
    /** A list of edges which contains the `SampledPersonalBestQuarterly` and cursor to aid in pagination. */
    edges?: SampledPersonalBestQuarterliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledPersonalBestQuarterly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledPersonalBestQuarterlyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    quarter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledPersonalBestQuarterly` edge in the connection. */
export interface SampledPersonalBestQuarterliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledPersonalBestQuarterly` at the end of the edge. */
    node?: SampledPersonalBestQuarterlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledPersonalBestQuarterly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledPersonalBestQuarterlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `quarter` field. */
quarter?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledPersonalBestQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledPersonalBestQuarterlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `quarter` field. */
quarter?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledPersonalBestQuarterlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledPersonalBestQuarterlyFilter[] | null),
/** Negates the expression. */
not?: (SampledPersonalBestQuarterlyFilter | null)}


/** A connection to a list of `SampledPersonalBestWeekly` values. */
export interface SampledPersonalBestWeekliesConnectionGenqlSelection{
    /** A list of `SampledPersonalBestWeekly` objects. */
    nodes?: SampledPersonalBestWeeklyGenqlSelection
    /** A list of edges which contains the `SampledPersonalBestWeekly` and cursor to aid in pagination. */
    edges?: SampledPersonalBestWeekliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledPersonalBestWeekly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledPersonalBestWeeklyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    week?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledPersonalBestWeekly` edge in the connection. */
export interface SampledPersonalBestWeekliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledPersonalBestWeekly` at the end of the edge. */
    node?: SampledPersonalBestWeeklyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledPersonalBestWeekly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledPersonalBestWeeklyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `week` field. */
week?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledPersonalBestWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledPersonalBestWeeklyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `week` field. */
week?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledPersonalBestWeeklyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledPersonalBestWeeklyFilter[] | null),
/** Negates the expression. */
not?: (SampledPersonalBestWeeklyFilter | null)}


/** A connection to a list of `SampledPersonalBestYearly` values. */
export interface SampledPersonalBestYearliesConnectionGenqlSelection{
    /** A list of `SampledPersonalBestYearly` objects. */
    nodes?: SampledPersonalBestYearlyGenqlSelection
    /** A list of edges which contains the `SampledPersonalBestYearly` and cursor to aid in pagination. */
    edges?: SampledPersonalBestYearliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledPersonalBestYearly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledPersonalBestYearlyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledPersonalBestYearly` edge in the connection. */
export interface SampledPersonalBestYearliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledPersonalBestYearly` at the end of the edge. */
    node?: SampledPersonalBestYearlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledPersonalBestYearly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledPersonalBestYearlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledPersonalBestYearly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledPersonalBestYearlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledPersonalBestYearlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledPersonalBestYearlyFilter[] | null),
/** Negates the expression. */
not?: (SampledPersonalBestYearlyFilter | null)}


/** A connection to a list of `SampledRecord` values. */
export interface SampledRecordsConnectionGenqlSelection{
    /** A list of `SampledRecord` objects. */
    nodes?: SampledRecordGenqlSelection
    /** A list of edges which contains the `SampledRecord` and cursor to aid in pagination. */
    edges?: SampledRecordsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledRecord` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledRecordGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    time?: boolean | number
    gameVersion?: boolean | number
    isValid?: boolean | number
    idLevel?: boolean | number
    modVersion?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    splits?: boolean | number
    speeds?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledRecord` edge in the connection. */
export interface SampledRecordsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledRecord` at the end of the edge. */
    node?: SampledRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledRecord` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledRecordCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `time` field. */
time?: (Scalars['Float'] | null),
/** Checks for equality with the object’s `gameVersion` field. */
gameVersion?: (Scalars['String'] | null),
/** Checks for equality with the object’s `isValid` field. */
isValid?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `modVersion` field. */
modVersion?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `splits` field. */
splits?: ((Scalars['Float'] | null)[] | null),
/** Checks for equality with the object’s `speeds` field. */
speeds?: ((Scalars['Float'] | null)[] | null)}


/** A filter to be used against `SampledRecord` object types. All fields are combined with a logical ‘and.’ */
export interface SampledRecordFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `time` field. */
time?: (FloatFilter | null),
/** Filter by the object’s `gameVersion` field. */
gameVersion?: (StringFilter | null),
/** Filter by the object’s `isValid` field. */
isValid?: (BooleanFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `modVersion` field. */
modVersion?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `splits` field. */
splits?: (FloatListFilter | null),
/** Filter by the object’s `speeds` field. */
speeds?: (FloatListFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledRecordFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledRecordFilter[] | null),
/** Negates the expression. */
not?: (SampledRecordFilter | null)}


/** A connection to a list of `SampledRecordMedia` values. */
export interface SampledRecordMediasConnectionGenqlSelection{
    /** A list of `SampledRecordMedia` objects. */
    nodes?: SampledRecordMediaGenqlSelection
    /** A list of edges which contains the `SampledRecordMedia` and cursor to aid in pagination. */
    edges?: SampledRecordMediasEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledRecordMedia` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledRecordMediaGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    ghostUrl?: boolean | number
    screenshotUrl?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledRecordMedia` edge in the connection. */
export interface SampledRecordMediasEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledRecordMedia` at the end of the edge. */
    node?: SampledRecordMediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledRecordMedia` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledRecordMediaCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `ghostUrl` field. */
ghostUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `screenshotUrl` field. */
screenshotUrl?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledRecordMedia` object types. All fields are combined with a logical ‘and.’ */
export interface SampledRecordMediaFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `ghostUrl` field. */
ghostUrl?: (StringFilter | null),
/** Filter by the object’s `screenshotUrl` field. */
screenshotUrl?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledRecordMediaFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledRecordMediaFilter[] | null),
/** Negates the expression. */
not?: (SampledRecordMediaFilter | null)}


/** A connection to a list of `SampledStatsDaily` values. */
export interface SampledStatsDailiesConnectionGenqlSelection{
    /** A list of `SampledStatsDaily` objects. */
    nodes?: SampledStatsDailyGenqlSelection
    /** A list of edges which contains the `SampledStatsDaily` and cursor to aid in pagination. */
    edges?: SampledStatsDailiesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledStatsDaily` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledStatsDailyGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    day?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledStatsDaily` edge in the connection. */
export interface SampledStatsDailiesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledStatsDaily` at the end of the edge. */
    node?: SampledStatsDailyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledStatsDaily` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledStatsDailyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `day` field. */
day?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A filter to be used against `SampledStatsDaily` object types. All fields are combined with a logical ‘and.’ */
export interface SampledStatsDailyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `day` field. */
day?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledStatsDailyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledStatsDailyFilter[] | null),
/** Negates the expression. */
not?: (SampledStatsDailyFilter | null)}


/** A connection to a list of `SampledStatsGlobal` values. */
export interface SampledStatsGlobalsConnectionGenqlSelection{
    /** A list of `SampledStatsGlobal` objects. */
    nodes?: SampledStatsGlobalGenqlSelection
    /** A list of edges which contains the `SampledStatsGlobal` and cursor to aid in pagination. */
    edges?: SampledStatsGlobalsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledStatsGlobal` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledStatsGlobalGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledStatsGlobal` edge in the connection. */
export interface SampledStatsGlobalsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledStatsGlobal` at the end of the edge. */
    node?: SampledStatsGlobalGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledStatsGlobal` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledStatsGlobalCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A filter to be used against `SampledStatsGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface SampledStatsGlobalFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledStatsGlobalFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledStatsGlobalFilter[] | null),
/** Negates the expression. */
not?: (SampledStatsGlobalFilter | null)}


/** A connection to a list of `SampledStatsMonthly` values. */
export interface SampledStatsMonthliesConnectionGenqlSelection{
    /** A list of `SampledStatsMonthly` objects. */
    nodes?: SampledStatsMonthlyGenqlSelection
    /** A list of edges which contains the `SampledStatsMonthly` and cursor to aid in pagination. */
    edges?: SampledStatsMonthliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledStatsMonthly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledStatsMonthlyGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    month?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledStatsMonthly` edge in the connection. */
export interface SampledStatsMonthliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledStatsMonthly` at the end of the edge. */
    node?: SampledStatsMonthlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledStatsMonthly` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface SampledStatsMonthlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `month` field. */
month?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A filter to be used against `SampledStatsMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledStatsMonthlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `month` field. */
month?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledStatsMonthlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledStatsMonthlyFilter[] | null),
/** Negates the expression. */
not?: (SampledStatsMonthlyFilter | null)}


/** A connection to a list of `SampledStatsQuarterly` values. */
export interface SampledStatsQuarterliesConnectionGenqlSelection{
    /** A list of `SampledStatsQuarterly` objects. */
    nodes?: SampledStatsQuarterlyGenqlSelection
    /** A list of edges which contains the `SampledStatsQuarterly` and cursor to aid in pagination. */
    edges?: SampledStatsQuarterliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledStatsQuarterly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledStatsQuarterlyGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    quarter?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledStatsQuarterly` edge in the connection. */
export interface SampledStatsQuarterliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledStatsQuarterly` at the end of the edge. */
    node?: SampledStatsQuarterlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledStatsQuarterly` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export interface SampledStatsQuarterlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `quarter` field. */
quarter?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A filter to be used against `SampledStatsQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledStatsQuarterlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `quarter` field. */
quarter?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledStatsQuarterlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledStatsQuarterlyFilter[] | null),
/** Negates the expression. */
not?: (SampledStatsQuarterlyFilter | null)}


/** A connection to a list of `SampledStatsWeekly` values. */
export interface SampledStatsWeekliesConnectionGenqlSelection{
    /** A list of `SampledStatsWeekly` objects. */
    nodes?: SampledStatsWeeklyGenqlSelection
    /** A list of edges which contains the `SampledStatsWeekly` and cursor to aid in pagination. */
    edges?: SampledStatsWeekliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledStatsWeekly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledStatsWeeklyGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    week?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledStatsWeekly` edge in the connection. */
export interface SampledStatsWeekliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledStatsWeekly` at the end of the edge. */
    node?: SampledStatsWeeklyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledStatsWeekly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledStatsWeeklyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `week` field. */
week?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A filter to be used against `SampledStatsWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledStatsWeeklyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `week` field. */
week?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledStatsWeeklyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledStatsWeeklyFilter[] | null),
/** Negates the expression. */
not?: (SampledStatsWeeklyFilter | null)}


/** A connection to a list of `SampledStatsYearly` values. */
export interface SampledStatsYearliesConnectionGenqlSelection{
    /** A list of `SampledStatsYearly` objects. */
    nodes?: SampledStatsYearlyGenqlSelection
    /** A list of edges which contains the `SampledStatsYearly` and cursor to aid in pagination. */
    edges?: SampledStatsYearliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledStatsYearly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledStatsYearlyGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    key?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledStatsYearly` edge in the connection. */
export interface SampledStatsYearliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledStatsYearly` at the end of the edge. */
    node?: SampledStatsYearlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledStatsYearly` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledStatsYearlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `key` field. */
key?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `value` field. */
value?: (Scalars['BigFloat'] | null)}


/** A filter to be used against `SampledStatsYearly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledStatsYearlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `key` field. */
key?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `value` field. */
value?: (BigFloatFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledStatsYearlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledStatsYearlyFilter[] | null),
/** Negates the expression. */
not?: (SampledStatsYearlyFilter | null)}


/** A connection to a list of `SampledUpvote` values. */
export interface SampledUpvotesConnectionGenqlSelection{
    /** A list of `SampledUpvote` objects. */
    nodes?: SampledUpvoteGenqlSelection
    /** A list of edges which contains the `SampledUpvote` and cursor to aid in pagination. */
    edges?: SampledUpvotesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledUpvote` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledUpvoteGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledUpvote` edge in the connection. */
export interface SampledUpvotesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledUpvote` at the end of the edge. */
    node?: SampledUpvoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledUpvote` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledUpvoteCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledUpvote` object types. All fields are combined with a logical ‘and.’ */
export interface SampledUpvoteFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledUpvoteFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledUpvoteFilter[] | null),
/** Negates the expression. */
not?: (SampledUpvoteFilter | null)}


/** A connection to a list of `SampledUser` values. */
export interface SampledUsersConnectionGenqlSelection{
    /** A list of `SampledUser` objects. */
    nodes?: SampledUserGenqlSelection
    /** A list of edges which contains the `SampledUser` and cursor to aid in pagination. */
    edges?: SampledUsersEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledUser` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledUserGenqlSelection{
    id?: boolean | number
    steamName?: boolean | number
    banned?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    steamId?: boolean | number
    discordId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledUser` edge in the connection. */
export interface SampledUsersEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledUser` at the end of the edge. */
    node?: SampledUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledUser` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface SampledUserCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `steamName` field. */
steamName?: (Scalars['String'] | null),
/** Checks for equality with the object’s `banned` field. */
banned?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `steamId` field. */
steamId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `discordId` field. */
discordId?: (Scalars['BigFloat'] | null)}


/** A filter to be used against `SampledUser` object types. All fields are combined with a logical ‘and.’ */
export interface SampledUserFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `steamName` field. */
steamName?: (StringFilter | null),
/** Filter by the object’s `banned` field. */
banned?: (BooleanFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `steamId` field. */
steamId?: (BigFloatFilter | null),
/** Filter by the object’s `discordId` field. */
discordId?: (BigFloatFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledUserFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledUserFilter[] | null),
/** Negates the expression. */
not?: (SampledUserFilter | null)}


/** A connection to a list of `SampledUserPoint` values. */
export interface SampledUserPointsConnectionGenqlSelection{
    /** A list of `SampledUserPoint` objects. */
    nodes?: SampledUserPointGenqlSelection
    /** A list of edges which contains the `SampledUserPoint` and cursor to aid in pagination. */
    edges?: SampledUserPointsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledUserPoint` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledUserPointGenqlSelection{
    id?: boolean | number
    idUser?: boolean | number
    points?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    rank?: boolean | number
    worldRecords?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledUserPoint` edge in the connection. */
export interface SampledUserPointsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledUserPoint` at the end of the edge. */
    node?: SampledUserPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledUserPoint` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledUserPointCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idUser` field. */
idUser?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `points` field. */
points?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `rank` field. */
rank?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `worldRecords` field. */
worldRecords?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledUserPoint` object types. All fields are combined with a logical ‘and.’ */
export interface SampledUserPointFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idUser` field. */
idUser?: (IntFilter | null),
/** Filter by the object’s `points` field. */
points?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `rank` field. */
rank?: (IntFilter | null),
/** Filter by the object’s `worldRecords` field. */
worldRecords?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledUserPointFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledUserPointFilter[] | null),
/** Negates the expression. */
not?: (SampledUserPointFilter | null)}


/** A connection to a list of `SampledVersion` values. */
export interface SampledVersionsConnectionGenqlSelection{
    /** A list of `SampledVersion` objects. */
    nodes?: SampledVersionGenqlSelection
    /** A list of edges which contains the `SampledVersion` and cursor to aid in pagination. */
    edges?: SampledVersionsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledVersion` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledVersionGenqlSelection{
    id?: boolean | number
    minimum?: boolean | number
    latest?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledVersion` edge in the connection. */
export interface SampledVersionsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledVersion` at the end of the edge. */
    node?: SampledVersionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledVersion` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export interface SampledVersionCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `minimum` field. */
minimum?: (Scalars['String'] | null),
/** Checks for equality with the object’s `latest` field. */
latest?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledVersion` object types. All fields are combined with a logical ‘and.’ */
export interface SampledVersionFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `minimum` field. */
minimum?: (StringFilter | null),
/** Filter by the object’s `latest` field. */
latest?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledVersionFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledVersionFilter[] | null),
/** Negates the expression. */
not?: (SampledVersionFilter | null)}


/** A connection to a list of `SampledWorldRecordDaily` values. */
export interface SampledWorldRecordDailiesConnectionGenqlSelection{
    /** A list of `SampledWorldRecordDaily` objects. */
    nodes?: SampledWorldRecordDailyGenqlSelection
    /** A list of edges which contains the `SampledWorldRecordDaily` and cursor to aid in pagination. */
    edges?: SampledWorldRecordDailiesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledWorldRecordDaily` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledWorldRecordDailyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledWorldRecordDaily` edge in the connection. */
export interface SampledWorldRecordDailiesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledWorldRecordDaily` at the end of the edge. */
    node?: SampledWorldRecordDailyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledWorldRecordDaily` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledWorldRecordDailyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `day` field. */
day?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledWorldRecordDaily` object types. All fields are combined with a logical ‘and.’ */
export interface SampledWorldRecordDailyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `day` field. */
day?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledWorldRecordDailyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledWorldRecordDailyFilter[] | null),
/** Negates the expression. */
not?: (SampledWorldRecordDailyFilter | null)}


/** A connection to a list of `SampledWorldRecordGlobal` values. */
export interface SampledWorldRecordGlobalsConnectionGenqlSelection{
    /** A list of `SampledWorldRecordGlobal` objects. */
    nodes?: SampledWorldRecordGlobalGenqlSelection
    /** A list of edges which contains the `SampledWorldRecordGlobal` and cursor to aid in pagination. */
    edges?: SampledWorldRecordGlobalsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledWorldRecordGlobal` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledWorldRecordGlobalGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledWorldRecordGlobal` edge in the connection. */
export interface SampledWorldRecordGlobalsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledWorldRecordGlobal` at the end of the edge. */
    node?: SampledWorldRecordGlobalGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledWorldRecordGlobal` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledWorldRecordGlobalCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `SampledWorldRecordGlobal` object types. All fields are combined with a logical ‘and.’ */
export interface SampledWorldRecordGlobalFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledWorldRecordGlobalFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledWorldRecordGlobalFilter[] | null),
/** Negates the expression. */
not?: (SampledWorldRecordGlobalFilter | null)}


/** A connection to a list of `SampledWorldRecordMonthly` values. */
export interface SampledWorldRecordMonthliesConnectionGenqlSelection{
    /** A list of `SampledWorldRecordMonthly` objects. */
    nodes?: SampledWorldRecordMonthlyGenqlSelection
    /** A list of edges which contains the `SampledWorldRecordMonthly` and cursor to aid in pagination. */
    edges?: SampledWorldRecordMonthliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledWorldRecordMonthly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledWorldRecordMonthlyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    month?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledWorldRecordMonthly` edge in the connection. */
export interface SampledWorldRecordMonthliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledWorldRecordMonthly` at the end of the edge. */
    node?: SampledWorldRecordMonthlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledWorldRecordMonthly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledWorldRecordMonthlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `month` field. */
month?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledWorldRecordMonthly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledWorldRecordMonthlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `month` field. */
month?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledWorldRecordMonthlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledWorldRecordMonthlyFilter[] | null),
/** Negates the expression. */
not?: (SampledWorldRecordMonthlyFilter | null)}


/** A connection to a list of `SampledWorldRecordQuarterly` values. */
export interface SampledWorldRecordQuarterliesConnectionGenqlSelection{
    /** A list of `SampledWorldRecordQuarterly` objects. */
    nodes?: SampledWorldRecordQuarterlyGenqlSelection
    /** A list of edges which contains the `SampledWorldRecordQuarterly` and cursor to aid in pagination. */
    edges?: SampledWorldRecordQuarterliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledWorldRecordQuarterly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledWorldRecordQuarterlyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    quarter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledWorldRecordQuarterly` edge in the connection. */
export interface SampledWorldRecordQuarterliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledWorldRecordQuarterly` at the end of the edge. */
    node?: SampledWorldRecordQuarterlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledWorldRecordQuarterly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledWorldRecordQuarterlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `quarter` field. */
quarter?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledWorldRecordQuarterly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledWorldRecordQuarterlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `quarter` field. */
quarter?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledWorldRecordQuarterlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledWorldRecordQuarterlyFilter[] | null),
/** Negates the expression. */
not?: (SampledWorldRecordQuarterlyFilter | null)}


/** A connection to a list of `SampledWorldRecordWeekly` values. */
export interface SampledWorldRecordWeekliesConnectionGenqlSelection{
    /** A list of `SampledWorldRecordWeekly` objects. */
    nodes?: SampledWorldRecordWeeklyGenqlSelection
    /** A list of edges which contains the `SampledWorldRecordWeekly` and cursor to aid in pagination. */
    edges?: SampledWorldRecordWeekliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledWorldRecordWeekly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledWorldRecordWeeklyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    week?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledWorldRecordWeekly` edge in the connection. */
export interface SampledWorldRecordWeekliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledWorldRecordWeekly` at the end of the edge. */
    node?: SampledWorldRecordWeeklyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledWorldRecordWeekly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledWorldRecordWeeklyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `week` field. */
week?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledWorldRecordWeekly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledWorldRecordWeeklyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Filter by the object’s `week` field. */
week?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledWorldRecordWeeklyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledWorldRecordWeeklyFilter[] | null),
/** Negates the expression. */
not?: (SampledWorldRecordWeeklyFilter | null)}


/** A connection to a list of `SampledWorldRecordYearly` values. */
export interface SampledWorldRecordYearliesConnectionGenqlSelection{
    /** A list of `SampledWorldRecordYearly` objects. */
    nodes?: SampledWorldRecordYearlyGenqlSelection
    /** A list of edges which contains the `SampledWorldRecordYearly` and cursor to aid in pagination. */
    edges?: SampledWorldRecordYearliesEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `SampledWorldRecordYearly` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SampledWorldRecordYearlyGenqlSelection{
    id?: boolean | number
    idRecord?: boolean | number
    idLevel?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    year?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `SampledWorldRecordYearly` edge in the connection. */
export interface SampledWorldRecordYearliesEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `SampledWorldRecordYearly` at the end of the edge. */
    node?: SampledWorldRecordYearlyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A condition to be used against `SampledWorldRecordYearly` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export interface SampledWorldRecordYearlyCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idRecord` field. */
idRecord?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `idLevel` field. */
idLevel?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `year` field. */
year?: (Scalars['Int'] | null)}


/** A filter to be used against `SampledWorldRecordYearly` object types. All fields are combined with a logical ‘and.’ */
export interface SampledWorldRecordYearlyFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idRecord` field. */
idRecord?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `year` field. */
year?: (IntFilter | null),
/** Checks for all expressions in this list. */
and?: (SampledWorldRecordYearlyFilter[] | null),
/** Checks for any expressions in this list. */
or?: (SampledWorldRecordYearlyFilter[] | null),
/** Negates the expression. */
not?: (SampledWorldRecordYearlyFilter | null)}


/** A connection to a list of `User` values. */
export interface UsersConnectionGenqlSelection{
    /** A list of `User` objects. */
    nodes?: UserGenqlSelection
    /** A list of edges which contains the `User` and cursor to aid in pagination. */
    edges?: UsersEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `User` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `User` edge in the connection. */
export interface UsersEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `User` at the end of the edge. */
    node?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface UserCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `steamName` field. */
steamName?: (Scalars['String'] | null),
/** Checks for equality with the object’s `banned` field. */
banned?: (Scalars['Boolean'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `steamId` field. */
steamId?: (Scalars['BigFloat'] | null),
/** Checks for equality with the object’s `discordId` field. */
discordId?: (Scalars['BigFloat'] | null)}


/** A connection to a list of `Version` values. */
export interface VersionsConnectionGenqlSelection{
    /** A list of `Version` objects. */
    nodes?: VersionGenqlSelection
    /** A list of edges which contains the `Version` and cursor to aid in pagination. */
    edges?: VersionsEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The count of *all* `Version` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VersionGenqlSelection{
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId?: boolean | number
    id?: boolean | number
    minimum?: boolean | number
    latest?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `Version` edge in the connection. */
export interface VersionsEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `Version` at the end of the edge. */
    node?: VersionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition to be used against `Version` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface VersionCondition {
/** Checks for equality with the object’s `id` field. */
id?: (Scalars['Int'] | null),
/** Checks for equality with the object’s `minimum` field. */
minimum?: (Scalars['String'] | null),
/** Checks for equality with the object’s `latest` field. */
latest?: (Scalars['String'] | null),
/** Checks for equality with the object’s `dateCreated` field. */
dateCreated?: (Scalars['Datetime'] | null),
/** Checks for equality with the object’s `dateUpdated` field. */
dateUpdated?: (Scalars['Datetime'] | null)}


/** A filter to be used against `Version` object types. All fields are combined with a logical ‘and.’ */
export interface VersionFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `minimum` field. */
minimum?: (StringFilter | null),
/** Filter by the object’s `latest` field. */
latest?: (StringFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Checks for all expressions in this list. */
and?: (VersionFilter[] | null),
/** Checks for any expressions in this list. */
or?: (VersionFilter[] | null),
/** Negates the expression. */
not?: (VersionFilter | null)}


/** A connection to a list of `ZRtmRecord` values. */
export interface ZRtmConnectionGenqlSelection{
    /** A list of `ZRtmRecord` objects. */
    nodes?: ZRtmRecordGenqlSelection
    /** A list of edges which contains the `ZRtmRecord` and cursor to aid in pagination. */
    edges?: ZRtmEdgeGenqlSelection
    /** The count of *all* `ZRtmRecord` you could get from the connection. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The return type of our `zRtm` query. */
export interface ZRtmRecordGenqlSelection{
    id?: boolean | number
    idLevel?: boolean | number
    workshopId?: boolean | number
    authorId?: boolean | number
    name?: boolean | number
    imageUrl?: boolean | number
    fileAuthor?: boolean | number
    fileUid?: boolean | number
    validationTimeAuthor?: boolean | number
    validationTimeGold?: boolean | number
    validationTimeSilver?: boolean | number
    validationTimeBronze?: boolean | number
    deleted?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    dateCreated?: boolean | number
    dateUpdated?: boolean | number
    amountCheckpoints?: boolean | number
    amountFinishes?: boolean | number
    amountBlocks?: boolean | number
    numRecords?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A `ZRtmRecord` edge in the connection. */
export interface ZRtmEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The `ZRtmRecord` at the end of the edge. */
    node?: ZRtmRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A filter to be used against `ZRtmRecord` object types. All fields are combined with a logical ‘and.’ */
export interface ZRtmRecordFilter {
/** Filter by the object’s `id` field. */
id?: (IntFilter | null),
/** Filter by the object’s `idLevel` field. */
idLevel?: (IntFilter | null),
/** Filter by the object’s `workshopId` field. */
workshopId?: (BigFloatFilter | null),
/** Filter by the object’s `authorId` field. */
authorId?: (BigFloatFilter | null),
/** Filter by the object’s `name` field. */
name?: (StringFilter | null),
/** Filter by the object’s `imageUrl` field. */
imageUrl?: (StringFilter | null),
/** Filter by the object’s `fileAuthor` field. */
fileAuthor?: (StringFilter | null),
/** Filter by the object’s `fileUid` field. */
fileUid?: (StringFilter | null),
/** Filter by the object’s `validationTimeAuthor` field. */
validationTimeAuthor?: (FloatFilter | null),
/** Filter by the object’s `validationTimeGold` field. */
validationTimeGold?: (FloatFilter | null),
/** Filter by the object’s `validationTimeSilver` field. */
validationTimeSilver?: (FloatFilter | null),
/** Filter by the object’s `validationTimeBronze` field. */
validationTimeBronze?: (FloatFilter | null),
/** Filter by the object’s `deleted` field. */
deleted?: (BooleanFilter | null),
/** Filter by the object’s `createdAt` field. */
createdAt?: (DatetimeFilter | null),
/** Filter by the object’s `updatedAt` field. */
updatedAt?: (DatetimeFilter | null),
/** Filter by the object’s `dateCreated` field. */
dateCreated?: (DatetimeFilter | null),
/** Filter by the object’s `dateUpdated` field. */
dateUpdated?: (DatetimeFilter | null),
/** Filter by the object’s `amountCheckpoints` field. */
amountCheckpoints?: (IntFilter | null),
/** Filter by the object’s `amountFinishes` field. */
amountFinishes?: (IntFilter | null),
/** Filter by the object’s `amountBlocks` field. */
amountBlocks?: (IntFilter | null),
/** Filter by the object’s `numRecords` field. */
numRecords?: (BigIntFilter | null),
/** Checks for all expressions in this list. */
and?: (ZRtmRecordFilter[] | null),
/** Checks for any expressions in this list. */
or?: (ZRtmRecordFilter[] | null),
/** Negates the expression. */
not?: (ZRtmRecordFilter | null)}


/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export interface BigIntFilter {
/** Is null (if `true` is specified) or is not null (if `false` is specified). */
isNull?: (Scalars['Boolean'] | null),
/** Equal to the specified value. */
equalTo?: (Scalars['BigInt'] | null),
/** Not equal to the specified value. */
notEqualTo?: (Scalars['BigInt'] | null),
/** Not equal to the specified value, treating null like an ordinary value. */
distinctFrom?: (Scalars['BigInt'] | null),
/** Equal to the specified value, treating null like an ordinary value. */
notDistinctFrom?: (Scalars['BigInt'] | null),
/** Included in the specified list. */
in?: (Scalars['BigInt'][] | null),
/** Not included in the specified list. */
notIn?: (Scalars['BigInt'][] | null),
/** Less than the specified value. */
lessThan?: (Scalars['BigInt'] | null),
/** Less than or equal to the specified value. */
lessThanOrEqualTo?: (Scalars['BigInt'] | null),
/** Greater than the specified value. */
greaterThan?: (Scalars['BigInt'] | null),
/** Greater than or equal to the specified value. */
greaterThanOrEqualTo?: (Scalars['BigInt'] | null)}


/** The root mutation type which contains root level fields which mutate data. */
export interface MutationGenqlSelection{
    updateWorldRecordGlobal?: (UpdateWorldRecordGlobalPayloadGenqlSelection & { __args: {
    /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
    input: UpdateWorldRecordGlobalInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The output of our `updateWorldRecordGlobal` mutation. */
export interface UpdateWorldRecordGlobalPayloadGenqlSelection{
    /**
     * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId?: boolean | number
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: QueryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** All input for the `updateWorldRecordGlobal` mutation. */
export interface UpdateWorldRecordGlobalInput {
/**
 * An arbitrary string value with no semantic meaning. Will be included in the
 * payload verbatim. May be used to track mutations by the client.
 */
clientMutationId?: (Scalars['String'] | null)}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Query','Favorite','User','PersonalBestGlobal','Record','Level','LevelPoint','LevelItem','LevelMetadatum','StatsGlobal','Upvote','WorldRecordGlobal','PersonalBestYearly','PersonalBestMonthly','PersonalBestWeekly','PersonalBestDaily','WorldRecordMonthly','WorldRecordYearly','WorldRecordWeekly','WorldRecordDaily','StatsMonthly','StatsYearly','StatsWeekly','StatsDaily','PersonalBestQuarterly','StatsQuarterly','WorldRecordQuarterly','Vote','RecordMedia','UserPoint','LevelRequest','Version']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const FavoritesConnection_possibleTypes: string[] = ['FavoritesConnection']
    export const isFavoritesConnection = (obj?: { __typename?: any } | null): obj is FavoritesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFavoritesConnection"')
      return FavoritesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Favorite_possibleTypes: string[] = ['Favorite']
    export const isFavorite = (obj?: { __typename?: any } | null): obj is Favorite => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFavorite"')
      return Favorite_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestGlobalsConnection_possibleTypes: string[] = ['PersonalBestGlobalsConnection']
    export const isPersonalBestGlobalsConnection = (obj?: { __typename?: any } | null): obj is PersonalBestGlobalsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestGlobalsConnection"')
      return PersonalBestGlobalsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestGlobal_possibleTypes: string[] = ['PersonalBestGlobal']
    export const isPersonalBestGlobal = (obj?: { __typename?: any } | null): obj is PersonalBestGlobal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestGlobal"')
      return PersonalBestGlobal_possibleTypes.includes(obj.__typename)
    }
    


    const Record_possibleTypes: string[] = ['Record']
    export const isRecord = (obj?: { __typename?: any } | null): obj is Record => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecord"')
      return Record_possibleTypes.includes(obj.__typename)
    }
    


    const Level_possibleTypes: string[] = ['Level']
    export const isLevel = (obj?: { __typename?: any } | null): obj is Level => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevel"')
      return Level_possibleTypes.includes(obj.__typename)
    }
    


    const LevelPointsConnection_possibleTypes: string[] = ['LevelPointsConnection']
    export const isLevelPointsConnection = (obj?: { __typename?: any } | null): obj is LevelPointsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelPointsConnection"')
      return LevelPointsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LevelPoint_possibleTypes: string[] = ['LevelPoint']
    export const isLevelPoint = (obj?: { __typename?: any } | null): obj is LevelPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelPoint"')
      return LevelPoint_possibleTypes.includes(obj.__typename)
    }
    


    const LevelPointsEdge_possibleTypes: string[] = ['LevelPointsEdge']
    export const isLevelPointsEdge = (obj?: { __typename?: any } | null): obj is LevelPointsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelPointsEdge"')
      return LevelPointsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const LevelItemsConnection_possibleTypes: string[] = ['LevelItemsConnection']
    export const isLevelItemsConnection = (obj?: { __typename?: any } | null): obj is LevelItemsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelItemsConnection"')
      return LevelItemsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LevelItem_possibleTypes: string[] = ['LevelItem']
    export const isLevelItem = (obj?: { __typename?: any } | null): obj is LevelItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelItem"')
      return LevelItem_possibleTypes.includes(obj.__typename)
    }
    


    const LevelItemsEdge_possibleTypes: string[] = ['LevelItemsEdge']
    export const isLevelItemsEdge = (obj?: { __typename?: any } | null): obj is LevelItemsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelItemsEdge"')
      return LevelItemsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LevelMetadataConnection_possibleTypes: string[] = ['LevelMetadataConnection']
    export const isLevelMetadataConnection = (obj?: { __typename?: any } | null): obj is LevelMetadataConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelMetadataConnection"')
      return LevelMetadataConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LevelMetadatum_possibleTypes: string[] = ['LevelMetadatum']
    export const isLevelMetadatum = (obj?: { __typename?: any } | null): obj is LevelMetadatum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelMetadatum"')
      return LevelMetadatum_possibleTypes.includes(obj.__typename)
    }
    


    const LevelMetadataEdge_possibleTypes: string[] = ['LevelMetadataEdge']
    export const isLevelMetadataEdge = (obj?: { __typename?: any } | null): obj is LevelMetadataEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelMetadataEdge"')
      return LevelMetadataEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RecordsConnection_possibleTypes: string[] = ['RecordsConnection']
    export const isRecordsConnection = (obj?: { __typename?: any } | null): obj is RecordsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordsConnection"')
      return RecordsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RecordsEdge_possibleTypes: string[] = ['RecordsEdge']
    export const isRecordsEdge = (obj?: { __typename?: any } | null): obj is RecordsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordsEdge"')
      return RecordsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StatsGlobalsConnection_possibleTypes: string[] = ['StatsGlobalsConnection']
    export const isStatsGlobalsConnection = (obj?: { __typename?: any } | null): obj is StatsGlobalsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsGlobalsConnection"')
      return StatsGlobalsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StatsGlobal_possibleTypes: string[] = ['StatsGlobal']
    export const isStatsGlobal = (obj?: { __typename?: any } | null): obj is StatsGlobal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsGlobal"')
      return StatsGlobal_possibleTypes.includes(obj.__typename)
    }
    


    const StatsGlobalsEdge_possibleTypes: string[] = ['StatsGlobalsEdge']
    export const isStatsGlobalsEdge = (obj?: { __typename?: any } | null): obj is StatsGlobalsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsGlobalsEdge"')
      return StatsGlobalsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UpvotesConnection_possibleTypes: string[] = ['UpvotesConnection']
    export const isUpvotesConnection = (obj?: { __typename?: any } | null): obj is UpvotesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpvotesConnection"')
      return UpvotesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Upvote_possibleTypes: string[] = ['Upvote']
    export const isUpvote = (obj?: { __typename?: any } | null): obj is Upvote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpvote"')
      return Upvote_possibleTypes.includes(obj.__typename)
    }
    


    const UpvotesEdge_possibleTypes: string[] = ['UpvotesEdge']
    export const isUpvotesEdge = (obj?: { __typename?: any } | null): obj is UpvotesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpvotesEdge"')
      return UpvotesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordGlobalsConnection_possibleTypes: string[] = ['WorldRecordGlobalsConnection']
    export const isWorldRecordGlobalsConnection = (obj?: { __typename?: any } | null): obj is WorldRecordGlobalsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordGlobalsConnection"')
      return WorldRecordGlobalsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordGlobal_possibleTypes: string[] = ['WorldRecordGlobal']
    export const isWorldRecordGlobal = (obj?: { __typename?: any } | null): obj is WorldRecordGlobal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordGlobal"')
      return WorldRecordGlobal_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordGlobalsEdge_possibleTypes: string[] = ['WorldRecordGlobalsEdge']
    export const isWorldRecordGlobalsEdge = (obj?: { __typename?: any } | null): obj is WorldRecordGlobalsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordGlobalsEdge"')
      return WorldRecordGlobalsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestYearliesConnection_possibleTypes: string[] = ['PersonalBestYearliesConnection']
    export const isPersonalBestYearliesConnection = (obj?: { __typename?: any } | null): obj is PersonalBestYearliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestYearliesConnection"')
      return PersonalBestYearliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestYearly_possibleTypes: string[] = ['PersonalBestYearly']
    export const isPersonalBestYearly = (obj?: { __typename?: any } | null): obj is PersonalBestYearly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestYearly"')
      return PersonalBestYearly_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestYearliesEdge_possibleTypes: string[] = ['PersonalBestYearliesEdge']
    export const isPersonalBestYearliesEdge = (obj?: { __typename?: any } | null): obj is PersonalBestYearliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestYearliesEdge"')
      return PersonalBestYearliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestMonthliesConnection_possibleTypes: string[] = ['PersonalBestMonthliesConnection']
    export const isPersonalBestMonthliesConnection = (obj?: { __typename?: any } | null): obj is PersonalBestMonthliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestMonthliesConnection"')
      return PersonalBestMonthliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestMonthly_possibleTypes: string[] = ['PersonalBestMonthly']
    export const isPersonalBestMonthly = (obj?: { __typename?: any } | null): obj is PersonalBestMonthly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestMonthly"')
      return PersonalBestMonthly_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestMonthliesEdge_possibleTypes: string[] = ['PersonalBestMonthliesEdge']
    export const isPersonalBestMonthliesEdge = (obj?: { __typename?: any } | null): obj is PersonalBestMonthliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestMonthliesEdge"')
      return PersonalBestMonthliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestWeekliesConnection_possibleTypes: string[] = ['PersonalBestWeekliesConnection']
    export const isPersonalBestWeekliesConnection = (obj?: { __typename?: any } | null): obj is PersonalBestWeekliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestWeekliesConnection"')
      return PersonalBestWeekliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestWeekly_possibleTypes: string[] = ['PersonalBestWeekly']
    export const isPersonalBestWeekly = (obj?: { __typename?: any } | null): obj is PersonalBestWeekly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestWeekly"')
      return PersonalBestWeekly_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestWeekliesEdge_possibleTypes: string[] = ['PersonalBestWeekliesEdge']
    export const isPersonalBestWeekliesEdge = (obj?: { __typename?: any } | null): obj is PersonalBestWeekliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestWeekliesEdge"')
      return PersonalBestWeekliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestDailiesConnection_possibleTypes: string[] = ['PersonalBestDailiesConnection']
    export const isPersonalBestDailiesConnection = (obj?: { __typename?: any } | null): obj is PersonalBestDailiesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestDailiesConnection"')
      return PersonalBestDailiesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestDaily_possibleTypes: string[] = ['PersonalBestDaily']
    export const isPersonalBestDaily = (obj?: { __typename?: any } | null): obj is PersonalBestDaily => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestDaily"')
      return PersonalBestDaily_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestDailiesEdge_possibleTypes: string[] = ['PersonalBestDailiesEdge']
    export const isPersonalBestDailiesEdge = (obj?: { __typename?: any } | null): obj is PersonalBestDailiesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestDailiesEdge"')
      return PersonalBestDailiesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordMonthliesConnection_possibleTypes: string[] = ['WorldRecordMonthliesConnection']
    export const isWorldRecordMonthliesConnection = (obj?: { __typename?: any } | null): obj is WorldRecordMonthliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordMonthliesConnection"')
      return WorldRecordMonthliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordMonthly_possibleTypes: string[] = ['WorldRecordMonthly']
    export const isWorldRecordMonthly = (obj?: { __typename?: any } | null): obj is WorldRecordMonthly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordMonthly"')
      return WorldRecordMonthly_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordMonthliesEdge_possibleTypes: string[] = ['WorldRecordMonthliesEdge']
    export const isWorldRecordMonthliesEdge = (obj?: { __typename?: any } | null): obj is WorldRecordMonthliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordMonthliesEdge"')
      return WorldRecordMonthliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordYearliesConnection_possibleTypes: string[] = ['WorldRecordYearliesConnection']
    export const isWorldRecordYearliesConnection = (obj?: { __typename?: any } | null): obj is WorldRecordYearliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordYearliesConnection"')
      return WorldRecordYearliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordYearly_possibleTypes: string[] = ['WorldRecordYearly']
    export const isWorldRecordYearly = (obj?: { __typename?: any } | null): obj is WorldRecordYearly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordYearly"')
      return WorldRecordYearly_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordYearliesEdge_possibleTypes: string[] = ['WorldRecordYearliesEdge']
    export const isWorldRecordYearliesEdge = (obj?: { __typename?: any } | null): obj is WorldRecordYearliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordYearliesEdge"')
      return WorldRecordYearliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordWeekliesConnection_possibleTypes: string[] = ['WorldRecordWeekliesConnection']
    export const isWorldRecordWeekliesConnection = (obj?: { __typename?: any } | null): obj is WorldRecordWeekliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordWeekliesConnection"')
      return WorldRecordWeekliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordWeekly_possibleTypes: string[] = ['WorldRecordWeekly']
    export const isWorldRecordWeekly = (obj?: { __typename?: any } | null): obj is WorldRecordWeekly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordWeekly"')
      return WorldRecordWeekly_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordWeekliesEdge_possibleTypes: string[] = ['WorldRecordWeekliesEdge']
    export const isWorldRecordWeekliesEdge = (obj?: { __typename?: any } | null): obj is WorldRecordWeekliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordWeekliesEdge"')
      return WorldRecordWeekliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordDailiesConnection_possibleTypes: string[] = ['WorldRecordDailiesConnection']
    export const isWorldRecordDailiesConnection = (obj?: { __typename?: any } | null): obj is WorldRecordDailiesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordDailiesConnection"')
      return WorldRecordDailiesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordDaily_possibleTypes: string[] = ['WorldRecordDaily']
    export const isWorldRecordDaily = (obj?: { __typename?: any } | null): obj is WorldRecordDaily => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordDaily"')
      return WorldRecordDaily_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordDailiesEdge_possibleTypes: string[] = ['WorldRecordDailiesEdge']
    export const isWorldRecordDailiesEdge = (obj?: { __typename?: any } | null): obj is WorldRecordDailiesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordDailiesEdge"')
      return WorldRecordDailiesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StatsMonthliesConnection_possibleTypes: string[] = ['StatsMonthliesConnection']
    export const isStatsMonthliesConnection = (obj?: { __typename?: any } | null): obj is StatsMonthliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsMonthliesConnection"')
      return StatsMonthliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StatsMonthly_possibleTypes: string[] = ['StatsMonthly']
    export const isStatsMonthly = (obj?: { __typename?: any } | null): obj is StatsMonthly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsMonthly"')
      return StatsMonthly_possibleTypes.includes(obj.__typename)
    }
    


    const StatsMonthliesEdge_possibleTypes: string[] = ['StatsMonthliesEdge']
    export const isStatsMonthliesEdge = (obj?: { __typename?: any } | null): obj is StatsMonthliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsMonthliesEdge"')
      return StatsMonthliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StatsYearliesConnection_possibleTypes: string[] = ['StatsYearliesConnection']
    export const isStatsYearliesConnection = (obj?: { __typename?: any } | null): obj is StatsYearliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsYearliesConnection"')
      return StatsYearliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StatsYearly_possibleTypes: string[] = ['StatsYearly']
    export const isStatsYearly = (obj?: { __typename?: any } | null): obj is StatsYearly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsYearly"')
      return StatsYearly_possibleTypes.includes(obj.__typename)
    }
    


    const StatsYearliesEdge_possibleTypes: string[] = ['StatsYearliesEdge']
    export const isStatsYearliesEdge = (obj?: { __typename?: any } | null): obj is StatsYearliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsYearliesEdge"')
      return StatsYearliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StatsWeekliesConnection_possibleTypes: string[] = ['StatsWeekliesConnection']
    export const isStatsWeekliesConnection = (obj?: { __typename?: any } | null): obj is StatsWeekliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsWeekliesConnection"')
      return StatsWeekliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StatsWeekly_possibleTypes: string[] = ['StatsWeekly']
    export const isStatsWeekly = (obj?: { __typename?: any } | null): obj is StatsWeekly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsWeekly"')
      return StatsWeekly_possibleTypes.includes(obj.__typename)
    }
    


    const StatsWeekliesEdge_possibleTypes: string[] = ['StatsWeekliesEdge']
    export const isStatsWeekliesEdge = (obj?: { __typename?: any } | null): obj is StatsWeekliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsWeekliesEdge"')
      return StatsWeekliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StatsDailiesConnection_possibleTypes: string[] = ['StatsDailiesConnection']
    export const isStatsDailiesConnection = (obj?: { __typename?: any } | null): obj is StatsDailiesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsDailiesConnection"')
      return StatsDailiesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StatsDaily_possibleTypes: string[] = ['StatsDaily']
    export const isStatsDaily = (obj?: { __typename?: any } | null): obj is StatsDaily => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsDaily"')
      return StatsDaily_possibleTypes.includes(obj.__typename)
    }
    


    const StatsDailiesEdge_possibleTypes: string[] = ['StatsDailiesEdge']
    export const isStatsDailiesEdge = (obj?: { __typename?: any } | null): obj is StatsDailiesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsDailiesEdge"')
      return StatsDailiesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestQuarterliesConnection_possibleTypes: string[] = ['PersonalBestQuarterliesConnection']
    export const isPersonalBestQuarterliesConnection = (obj?: { __typename?: any } | null): obj is PersonalBestQuarterliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestQuarterliesConnection"')
      return PersonalBestQuarterliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestQuarterly_possibleTypes: string[] = ['PersonalBestQuarterly']
    export const isPersonalBestQuarterly = (obj?: { __typename?: any } | null): obj is PersonalBestQuarterly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestQuarterly"')
      return PersonalBestQuarterly_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestQuarterliesEdge_possibleTypes: string[] = ['PersonalBestQuarterliesEdge']
    export const isPersonalBestQuarterliesEdge = (obj?: { __typename?: any } | null): obj is PersonalBestQuarterliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestQuarterliesEdge"')
      return PersonalBestQuarterliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StatsQuarterliesConnection_possibleTypes: string[] = ['StatsQuarterliesConnection']
    export const isStatsQuarterliesConnection = (obj?: { __typename?: any } | null): obj is StatsQuarterliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsQuarterliesConnection"')
      return StatsQuarterliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StatsQuarterly_possibleTypes: string[] = ['StatsQuarterly']
    export const isStatsQuarterly = (obj?: { __typename?: any } | null): obj is StatsQuarterly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsQuarterly"')
      return StatsQuarterly_possibleTypes.includes(obj.__typename)
    }
    


    const StatsQuarterliesEdge_possibleTypes: string[] = ['StatsQuarterliesEdge']
    export const isStatsQuarterliesEdge = (obj?: { __typename?: any } | null): obj is StatsQuarterliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsQuarterliesEdge"')
      return StatsQuarterliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordQuarterliesConnection_possibleTypes: string[] = ['WorldRecordQuarterliesConnection']
    export const isWorldRecordQuarterliesConnection = (obj?: { __typename?: any } | null): obj is WorldRecordQuarterliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordQuarterliesConnection"')
      return WorldRecordQuarterliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordQuarterly_possibleTypes: string[] = ['WorldRecordQuarterly']
    export const isWorldRecordQuarterly = (obj?: { __typename?: any } | null): obj is WorldRecordQuarterly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordQuarterly"')
      return WorldRecordQuarterly_possibleTypes.includes(obj.__typename)
    }
    


    const WorldRecordQuarterliesEdge_possibleTypes: string[] = ['WorldRecordQuarterliesEdge']
    export const isWorldRecordQuarterliesEdge = (obj?: { __typename?: any } | null): obj is WorldRecordQuarterliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorldRecordQuarterliesEdge"')
      return WorldRecordQuarterliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const VotesConnection_possibleTypes: string[] = ['VotesConnection']
    export const isVotesConnection = (obj?: { __typename?: any } | null): obj is VotesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVotesConnection"')
      return VotesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Vote_possibleTypes: string[] = ['Vote']
    export const isVote = (obj?: { __typename?: any } | null): obj is Vote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVote"')
      return Vote_possibleTypes.includes(obj.__typename)
    }
    


    const VotesEdge_possibleTypes: string[] = ['VotesEdge']
    export const isVotesEdge = (obj?: { __typename?: any } | null): obj is VotesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVotesEdge"')
      return VotesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RecordMediasConnection_possibleTypes: string[] = ['RecordMediasConnection']
    export const isRecordMediasConnection = (obj?: { __typename?: any } | null): obj is RecordMediasConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordMediasConnection"')
      return RecordMediasConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RecordMedia_possibleTypes: string[] = ['RecordMedia']
    export const isRecordMedia = (obj?: { __typename?: any } | null): obj is RecordMedia => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordMedia"')
      return RecordMedia_possibleTypes.includes(obj.__typename)
    }
    


    const RecordMediasEdge_possibleTypes: string[] = ['RecordMediasEdge']
    export const isRecordMediasEdge = (obj?: { __typename?: any } | null): obj is RecordMediasEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecordMediasEdge"')
      return RecordMediasEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PersonalBestGlobalsEdge_possibleTypes: string[] = ['PersonalBestGlobalsEdge']
    export const isPersonalBestGlobalsEdge = (obj?: { __typename?: any } | null): obj is PersonalBestGlobalsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonalBestGlobalsEdge"')
      return PersonalBestGlobalsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserPointsConnection_possibleTypes: string[] = ['UserPointsConnection']
    export const isUserPointsConnection = (obj?: { __typename?: any } | null): obj is UserPointsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPointsConnection"')
      return UserPointsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserPoint_possibleTypes: string[] = ['UserPoint']
    export const isUserPoint = (obj?: { __typename?: any } | null): obj is UserPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPoint"')
      return UserPoint_possibleTypes.includes(obj.__typename)
    }
    


    const UserPointsEdge_possibleTypes: string[] = ['UserPointsEdge']
    export const isUserPointsEdge = (obj?: { __typename?: any } | null): obj is UserPointsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPointsEdge"')
      return UserPointsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const FavoritesEdge_possibleTypes: string[] = ['FavoritesEdge']
    export const isFavoritesEdge = (obj?: { __typename?: any } | null): obj is FavoritesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFavoritesEdge"')
      return FavoritesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsConnection_possibleTypes: string[] = ['LevelsConnection']
    export const isLevelsConnection = (obj?: { __typename?: any } | null): obj is LevelsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsConnection"')
      return LevelsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LevelsEdge_possibleTypes: string[] = ['LevelsEdge']
    export const isLevelsEdge = (obj?: { __typename?: any } | null): obj is LevelsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelsEdge"')
      return LevelsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LevelRequestsConnection_possibleTypes: string[] = ['LevelRequestsConnection']
    export const isLevelRequestsConnection = (obj?: { __typename?: any } | null): obj is LevelRequestsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelRequestsConnection"')
      return LevelRequestsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LevelRequest_possibleTypes: string[] = ['LevelRequest']
    export const isLevelRequest = (obj?: { __typename?: any } | null): obj is LevelRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelRequest"')
      return LevelRequest_possibleTypes.includes(obj.__typename)
    }
    


    const LevelRequestsEdge_possibleTypes: string[] = ['LevelRequestsEdge']
    export const isLevelRequestsEdge = (obj?: { __typename?: any } | null): obj is LevelRequestsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelRequestsEdge"')
      return LevelRequestsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledFavoritesConnection_possibleTypes: string[] = ['SampledFavoritesConnection']
    export const isSampledFavoritesConnection = (obj?: { __typename?: any } | null): obj is SampledFavoritesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledFavoritesConnection"')
      return SampledFavoritesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledFavorite_possibleTypes: string[] = ['SampledFavorite']
    export const isSampledFavorite = (obj?: { __typename?: any } | null): obj is SampledFavorite => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledFavorite"')
      return SampledFavorite_possibleTypes.includes(obj.__typename)
    }
    


    const SampledFavoritesEdge_possibleTypes: string[] = ['SampledFavoritesEdge']
    export const isSampledFavoritesEdge = (obj?: { __typename?: any } | null): obj is SampledFavoritesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledFavoritesEdge"')
      return SampledFavoritesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelsConnection_possibleTypes: string[] = ['SampledLevelsConnection']
    export const isSampledLevelsConnection = (obj?: { __typename?: any } | null): obj is SampledLevelsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelsConnection"')
      return SampledLevelsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevel_possibleTypes: string[] = ['SampledLevel']
    export const isSampledLevel = (obj?: { __typename?: any } | null): obj is SampledLevel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevel"')
      return SampledLevel_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelsEdge_possibleTypes: string[] = ['SampledLevelsEdge']
    export const isSampledLevelsEdge = (obj?: { __typename?: any } | null): obj is SampledLevelsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelsEdge"')
      return SampledLevelsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelItemsConnection_possibleTypes: string[] = ['SampledLevelItemsConnection']
    export const isSampledLevelItemsConnection = (obj?: { __typename?: any } | null): obj is SampledLevelItemsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelItemsConnection"')
      return SampledLevelItemsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelItem_possibleTypes: string[] = ['SampledLevelItem']
    export const isSampledLevelItem = (obj?: { __typename?: any } | null): obj is SampledLevelItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelItem"')
      return SampledLevelItem_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelItemsEdge_possibleTypes: string[] = ['SampledLevelItemsEdge']
    export const isSampledLevelItemsEdge = (obj?: { __typename?: any } | null): obj is SampledLevelItemsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelItemsEdge"')
      return SampledLevelItemsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelMetadataConnection_possibleTypes: string[] = ['SampledLevelMetadataConnection']
    export const isSampledLevelMetadataConnection = (obj?: { __typename?: any } | null): obj is SampledLevelMetadataConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelMetadataConnection"')
      return SampledLevelMetadataConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelMetadatum_possibleTypes: string[] = ['SampledLevelMetadatum']
    export const isSampledLevelMetadatum = (obj?: { __typename?: any } | null): obj is SampledLevelMetadatum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelMetadatum"')
      return SampledLevelMetadatum_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelMetadataEdge_possibleTypes: string[] = ['SampledLevelMetadataEdge']
    export const isSampledLevelMetadataEdge = (obj?: { __typename?: any } | null): obj is SampledLevelMetadataEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelMetadataEdge"')
      return SampledLevelMetadataEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelPointsConnection_possibleTypes: string[] = ['SampledLevelPointsConnection']
    export const isSampledLevelPointsConnection = (obj?: { __typename?: any } | null): obj is SampledLevelPointsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelPointsConnection"')
      return SampledLevelPointsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelPoint_possibleTypes: string[] = ['SampledLevelPoint']
    export const isSampledLevelPoint = (obj?: { __typename?: any } | null): obj is SampledLevelPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelPoint"')
      return SampledLevelPoint_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelPointsEdge_possibleTypes: string[] = ['SampledLevelPointsEdge']
    export const isSampledLevelPointsEdge = (obj?: { __typename?: any } | null): obj is SampledLevelPointsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelPointsEdge"')
      return SampledLevelPointsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelRequestsConnection_possibleTypes: string[] = ['SampledLevelRequestsConnection']
    export const isSampledLevelRequestsConnection = (obj?: { __typename?: any } | null): obj is SampledLevelRequestsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelRequestsConnection"')
      return SampledLevelRequestsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelRequest_possibleTypes: string[] = ['SampledLevelRequest']
    export const isSampledLevelRequest = (obj?: { __typename?: any } | null): obj is SampledLevelRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelRequest"')
      return SampledLevelRequest_possibleTypes.includes(obj.__typename)
    }
    


    const SampledLevelRequestsEdge_possibleTypes: string[] = ['SampledLevelRequestsEdge']
    export const isSampledLevelRequestsEdge = (obj?: { __typename?: any } | null): obj is SampledLevelRequestsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledLevelRequestsEdge"')
      return SampledLevelRequestsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestDailiesConnection_possibleTypes: string[] = ['SampledPersonalBestDailiesConnection']
    export const isSampledPersonalBestDailiesConnection = (obj?: { __typename?: any } | null): obj is SampledPersonalBestDailiesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestDailiesConnection"')
      return SampledPersonalBestDailiesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestDaily_possibleTypes: string[] = ['SampledPersonalBestDaily']
    export const isSampledPersonalBestDaily = (obj?: { __typename?: any } | null): obj is SampledPersonalBestDaily => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestDaily"')
      return SampledPersonalBestDaily_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestDailiesEdge_possibleTypes: string[] = ['SampledPersonalBestDailiesEdge']
    export const isSampledPersonalBestDailiesEdge = (obj?: { __typename?: any } | null): obj is SampledPersonalBestDailiesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestDailiesEdge"')
      return SampledPersonalBestDailiesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestGlobalsConnection_possibleTypes: string[] = ['SampledPersonalBestGlobalsConnection']
    export const isSampledPersonalBestGlobalsConnection = (obj?: { __typename?: any } | null): obj is SampledPersonalBestGlobalsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestGlobalsConnection"')
      return SampledPersonalBestGlobalsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestGlobal_possibleTypes: string[] = ['SampledPersonalBestGlobal']
    export const isSampledPersonalBestGlobal = (obj?: { __typename?: any } | null): obj is SampledPersonalBestGlobal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestGlobal"')
      return SampledPersonalBestGlobal_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestGlobalsEdge_possibleTypes: string[] = ['SampledPersonalBestGlobalsEdge']
    export const isSampledPersonalBestGlobalsEdge = (obj?: { __typename?: any } | null): obj is SampledPersonalBestGlobalsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestGlobalsEdge"')
      return SampledPersonalBestGlobalsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestMonthliesConnection_possibleTypes: string[] = ['SampledPersonalBestMonthliesConnection']
    export const isSampledPersonalBestMonthliesConnection = (obj?: { __typename?: any } | null): obj is SampledPersonalBestMonthliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestMonthliesConnection"')
      return SampledPersonalBestMonthliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestMonthly_possibleTypes: string[] = ['SampledPersonalBestMonthly']
    export const isSampledPersonalBestMonthly = (obj?: { __typename?: any } | null): obj is SampledPersonalBestMonthly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestMonthly"')
      return SampledPersonalBestMonthly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestMonthliesEdge_possibleTypes: string[] = ['SampledPersonalBestMonthliesEdge']
    export const isSampledPersonalBestMonthliesEdge = (obj?: { __typename?: any } | null): obj is SampledPersonalBestMonthliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestMonthliesEdge"')
      return SampledPersonalBestMonthliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestQuarterliesConnection_possibleTypes: string[] = ['SampledPersonalBestQuarterliesConnection']
    export const isSampledPersonalBestQuarterliesConnection = (obj?: { __typename?: any } | null): obj is SampledPersonalBestQuarterliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestQuarterliesConnection"')
      return SampledPersonalBestQuarterliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestQuarterly_possibleTypes: string[] = ['SampledPersonalBestQuarterly']
    export const isSampledPersonalBestQuarterly = (obj?: { __typename?: any } | null): obj is SampledPersonalBestQuarterly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestQuarterly"')
      return SampledPersonalBestQuarterly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestQuarterliesEdge_possibleTypes: string[] = ['SampledPersonalBestQuarterliesEdge']
    export const isSampledPersonalBestQuarterliesEdge = (obj?: { __typename?: any } | null): obj is SampledPersonalBestQuarterliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestQuarterliesEdge"')
      return SampledPersonalBestQuarterliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestWeekliesConnection_possibleTypes: string[] = ['SampledPersonalBestWeekliesConnection']
    export const isSampledPersonalBestWeekliesConnection = (obj?: { __typename?: any } | null): obj is SampledPersonalBestWeekliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestWeekliesConnection"')
      return SampledPersonalBestWeekliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestWeekly_possibleTypes: string[] = ['SampledPersonalBestWeekly']
    export const isSampledPersonalBestWeekly = (obj?: { __typename?: any } | null): obj is SampledPersonalBestWeekly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestWeekly"')
      return SampledPersonalBestWeekly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestWeekliesEdge_possibleTypes: string[] = ['SampledPersonalBestWeekliesEdge']
    export const isSampledPersonalBestWeekliesEdge = (obj?: { __typename?: any } | null): obj is SampledPersonalBestWeekliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestWeekliesEdge"')
      return SampledPersonalBestWeekliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestYearliesConnection_possibleTypes: string[] = ['SampledPersonalBestYearliesConnection']
    export const isSampledPersonalBestYearliesConnection = (obj?: { __typename?: any } | null): obj is SampledPersonalBestYearliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestYearliesConnection"')
      return SampledPersonalBestYearliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestYearly_possibleTypes: string[] = ['SampledPersonalBestYearly']
    export const isSampledPersonalBestYearly = (obj?: { __typename?: any } | null): obj is SampledPersonalBestYearly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestYearly"')
      return SampledPersonalBestYearly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledPersonalBestYearliesEdge_possibleTypes: string[] = ['SampledPersonalBestYearliesEdge']
    export const isSampledPersonalBestYearliesEdge = (obj?: { __typename?: any } | null): obj is SampledPersonalBestYearliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledPersonalBestYearliesEdge"')
      return SampledPersonalBestYearliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledRecordsConnection_possibleTypes: string[] = ['SampledRecordsConnection']
    export const isSampledRecordsConnection = (obj?: { __typename?: any } | null): obj is SampledRecordsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledRecordsConnection"')
      return SampledRecordsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledRecord_possibleTypes: string[] = ['SampledRecord']
    export const isSampledRecord = (obj?: { __typename?: any } | null): obj is SampledRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledRecord"')
      return SampledRecord_possibleTypes.includes(obj.__typename)
    }
    


    const SampledRecordsEdge_possibleTypes: string[] = ['SampledRecordsEdge']
    export const isSampledRecordsEdge = (obj?: { __typename?: any } | null): obj is SampledRecordsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledRecordsEdge"')
      return SampledRecordsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledRecordMediasConnection_possibleTypes: string[] = ['SampledRecordMediasConnection']
    export const isSampledRecordMediasConnection = (obj?: { __typename?: any } | null): obj is SampledRecordMediasConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledRecordMediasConnection"')
      return SampledRecordMediasConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledRecordMedia_possibleTypes: string[] = ['SampledRecordMedia']
    export const isSampledRecordMedia = (obj?: { __typename?: any } | null): obj is SampledRecordMedia => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledRecordMedia"')
      return SampledRecordMedia_possibleTypes.includes(obj.__typename)
    }
    


    const SampledRecordMediasEdge_possibleTypes: string[] = ['SampledRecordMediasEdge']
    export const isSampledRecordMediasEdge = (obj?: { __typename?: any } | null): obj is SampledRecordMediasEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledRecordMediasEdge"')
      return SampledRecordMediasEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsDailiesConnection_possibleTypes: string[] = ['SampledStatsDailiesConnection']
    export const isSampledStatsDailiesConnection = (obj?: { __typename?: any } | null): obj is SampledStatsDailiesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsDailiesConnection"')
      return SampledStatsDailiesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsDaily_possibleTypes: string[] = ['SampledStatsDaily']
    export const isSampledStatsDaily = (obj?: { __typename?: any } | null): obj is SampledStatsDaily => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsDaily"')
      return SampledStatsDaily_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsDailiesEdge_possibleTypes: string[] = ['SampledStatsDailiesEdge']
    export const isSampledStatsDailiesEdge = (obj?: { __typename?: any } | null): obj is SampledStatsDailiesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsDailiesEdge"')
      return SampledStatsDailiesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsGlobalsConnection_possibleTypes: string[] = ['SampledStatsGlobalsConnection']
    export const isSampledStatsGlobalsConnection = (obj?: { __typename?: any } | null): obj is SampledStatsGlobalsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsGlobalsConnection"')
      return SampledStatsGlobalsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsGlobal_possibleTypes: string[] = ['SampledStatsGlobal']
    export const isSampledStatsGlobal = (obj?: { __typename?: any } | null): obj is SampledStatsGlobal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsGlobal"')
      return SampledStatsGlobal_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsGlobalsEdge_possibleTypes: string[] = ['SampledStatsGlobalsEdge']
    export const isSampledStatsGlobalsEdge = (obj?: { __typename?: any } | null): obj is SampledStatsGlobalsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsGlobalsEdge"')
      return SampledStatsGlobalsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsMonthliesConnection_possibleTypes: string[] = ['SampledStatsMonthliesConnection']
    export const isSampledStatsMonthliesConnection = (obj?: { __typename?: any } | null): obj is SampledStatsMonthliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsMonthliesConnection"')
      return SampledStatsMonthliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsMonthly_possibleTypes: string[] = ['SampledStatsMonthly']
    export const isSampledStatsMonthly = (obj?: { __typename?: any } | null): obj is SampledStatsMonthly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsMonthly"')
      return SampledStatsMonthly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsMonthliesEdge_possibleTypes: string[] = ['SampledStatsMonthliesEdge']
    export const isSampledStatsMonthliesEdge = (obj?: { __typename?: any } | null): obj is SampledStatsMonthliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsMonthliesEdge"')
      return SampledStatsMonthliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsQuarterliesConnection_possibleTypes: string[] = ['SampledStatsQuarterliesConnection']
    export const isSampledStatsQuarterliesConnection = (obj?: { __typename?: any } | null): obj is SampledStatsQuarterliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsQuarterliesConnection"')
      return SampledStatsQuarterliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsQuarterly_possibleTypes: string[] = ['SampledStatsQuarterly']
    export const isSampledStatsQuarterly = (obj?: { __typename?: any } | null): obj is SampledStatsQuarterly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsQuarterly"')
      return SampledStatsQuarterly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsQuarterliesEdge_possibleTypes: string[] = ['SampledStatsQuarterliesEdge']
    export const isSampledStatsQuarterliesEdge = (obj?: { __typename?: any } | null): obj is SampledStatsQuarterliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsQuarterliesEdge"')
      return SampledStatsQuarterliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsWeekliesConnection_possibleTypes: string[] = ['SampledStatsWeekliesConnection']
    export const isSampledStatsWeekliesConnection = (obj?: { __typename?: any } | null): obj is SampledStatsWeekliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsWeekliesConnection"')
      return SampledStatsWeekliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsWeekly_possibleTypes: string[] = ['SampledStatsWeekly']
    export const isSampledStatsWeekly = (obj?: { __typename?: any } | null): obj is SampledStatsWeekly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsWeekly"')
      return SampledStatsWeekly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsWeekliesEdge_possibleTypes: string[] = ['SampledStatsWeekliesEdge']
    export const isSampledStatsWeekliesEdge = (obj?: { __typename?: any } | null): obj is SampledStatsWeekliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsWeekliesEdge"')
      return SampledStatsWeekliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsYearliesConnection_possibleTypes: string[] = ['SampledStatsYearliesConnection']
    export const isSampledStatsYearliesConnection = (obj?: { __typename?: any } | null): obj is SampledStatsYearliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsYearliesConnection"')
      return SampledStatsYearliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsYearly_possibleTypes: string[] = ['SampledStatsYearly']
    export const isSampledStatsYearly = (obj?: { __typename?: any } | null): obj is SampledStatsYearly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsYearly"')
      return SampledStatsYearly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledStatsYearliesEdge_possibleTypes: string[] = ['SampledStatsYearliesEdge']
    export const isSampledStatsYearliesEdge = (obj?: { __typename?: any } | null): obj is SampledStatsYearliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledStatsYearliesEdge"')
      return SampledStatsYearliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUpvotesConnection_possibleTypes: string[] = ['SampledUpvotesConnection']
    export const isSampledUpvotesConnection = (obj?: { __typename?: any } | null): obj is SampledUpvotesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUpvotesConnection"')
      return SampledUpvotesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUpvote_possibleTypes: string[] = ['SampledUpvote']
    export const isSampledUpvote = (obj?: { __typename?: any } | null): obj is SampledUpvote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUpvote"')
      return SampledUpvote_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUpvotesEdge_possibleTypes: string[] = ['SampledUpvotesEdge']
    export const isSampledUpvotesEdge = (obj?: { __typename?: any } | null): obj is SampledUpvotesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUpvotesEdge"')
      return SampledUpvotesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUsersConnection_possibleTypes: string[] = ['SampledUsersConnection']
    export const isSampledUsersConnection = (obj?: { __typename?: any } | null): obj is SampledUsersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUsersConnection"')
      return SampledUsersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUser_possibleTypes: string[] = ['SampledUser']
    export const isSampledUser = (obj?: { __typename?: any } | null): obj is SampledUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUser"')
      return SampledUser_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUsersEdge_possibleTypes: string[] = ['SampledUsersEdge']
    export const isSampledUsersEdge = (obj?: { __typename?: any } | null): obj is SampledUsersEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUsersEdge"')
      return SampledUsersEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUserPointsConnection_possibleTypes: string[] = ['SampledUserPointsConnection']
    export const isSampledUserPointsConnection = (obj?: { __typename?: any } | null): obj is SampledUserPointsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUserPointsConnection"')
      return SampledUserPointsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUserPoint_possibleTypes: string[] = ['SampledUserPoint']
    export const isSampledUserPoint = (obj?: { __typename?: any } | null): obj is SampledUserPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUserPoint"')
      return SampledUserPoint_possibleTypes.includes(obj.__typename)
    }
    


    const SampledUserPointsEdge_possibleTypes: string[] = ['SampledUserPointsEdge']
    export const isSampledUserPointsEdge = (obj?: { __typename?: any } | null): obj is SampledUserPointsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledUserPointsEdge"')
      return SampledUserPointsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledVersionsConnection_possibleTypes: string[] = ['SampledVersionsConnection']
    export const isSampledVersionsConnection = (obj?: { __typename?: any } | null): obj is SampledVersionsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledVersionsConnection"')
      return SampledVersionsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledVersion_possibleTypes: string[] = ['SampledVersion']
    export const isSampledVersion = (obj?: { __typename?: any } | null): obj is SampledVersion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledVersion"')
      return SampledVersion_possibleTypes.includes(obj.__typename)
    }
    


    const SampledVersionsEdge_possibleTypes: string[] = ['SampledVersionsEdge']
    export const isSampledVersionsEdge = (obj?: { __typename?: any } | null): obj is SampledVersionsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledVersionsEdge"')
      return SampledVersionsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordDailiesConnection_possibleTypes: string[] = ['SampledWorldRecordDailiesConnection']
    export const isSampledWorldRecordDailiesConnection = (obj?: { __typename?: any } | null): obj is SampledWorldRecordDailiesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordDailiesConnection"')
      return SampledWorldRecordDailiesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordDaily_possibleTypes: string[] = ['SampledWorldRecordDaily']
    export const isSampledWorldRecordDaily = (obj?: { __typename?: any } | null): obj is SampledWorldRecordDaily => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordDaily"')
      return SampledWorldRecordDaily_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordDailiesEdge_possibleTypes: string[] = ['SampledWorldRecordDailiesEdge']
    export const isSampledWorldRecordDailiesEdge = (obj?: { __typename?: any } | null): obj is SampledWorldRecordDailiesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordDailiesEdge"')
      return SampledWorldRecordDailiesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordGlobalsConnection_possibleTypes: string[] = ['SampledWorldRecordGlobalsConnection']
    export const isSampledWorldRecordGlobalsConnection = (obj?: { __typename?: any } | null): obj is SampledWorldRecordGlobalsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordGlobalsConnection"')
      return SampledWorldRecordGlobalsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordGlobal_possibleTypes: string[] = ['SampledWorldRecordGlobal']
    export const isSampledWorldRecordGlobal = (obj?: { __typename?: any } | null): obj is SampledWorldRecordGlobal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordGlobal"')
      return SampledWorldRecordGlobal_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordGlobalsEdge_possibleTypes: string[] = ['SampledWorldRecordGlobalsEdge']
    export const isSampledWorldRecordGlobalsEdge = (obj?: { __typename?: any } | null): obj is SampledWorldRecordGlobalsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordGlobalsEdge"')
      return SampledWorldRecordGlobalsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordMonthliesConnection_possibleTypes: string[] = ['SampledWorldRecordMonthliesConnection']
    export const isSampledWorldRecordMonthliesConnection = (obj?: { __typename?: any } | null): obj is SampledWorldRecordMonthliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordMonthliesConnection"')
      return SampledWorldRecordMonthliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordMonthly_possibleTypes: string[] = ['SampledWorldRecordMonthly']
    export const isSampledWorldRecordMonthly = (obj?: { __typename?: any } | null): obj is SampledWorldRecordMonthly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordMonthly"')
      return SampledWorldRecordMonthly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordMonthliesEdge_possibleTypes: string[] = ['SampledWorldRecordMonthliesEdge']
    export const isSampledWorldRecordMonthliesEdge = (obj?: { __typename?: any } | null): obj is SampledWorldRecordMonthliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordMonthliesEdge"')
      return SampledWorldRecordMonthliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordQuarterliesConnection_possibleTypes: string[] = ['SampledWorldRecordQuarterliesConnection']
    export const isSampledWorldRecordQuarterliesConnection = (obj?: { __typename?: any } | null): obj is SampledWorldRecordQuarterliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordQuarterliesConnection"')
      return SampledWorldRecordQuarterliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordQuarterly_possibleTypes: string[] = ['SampledWorldRecordQuarterly']
    export const isSampledWorldRecordQuarterly = (obj?: { __typename?: any } | null): obj is SampledWorldRecordQuarterly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordQuarterly"')
      return SampledWorldRecordQuarterly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordQuarterliesEdge_possibleTypes: string[] = ['SampledWorldRecordQuarterliesEdge']
    export const isSampledWorldRecordQuarterliesEdge = (obj?: { __typename?: any } | null): obj is SampledWorldRecordQuarterliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordQuarterliesEdge"')
      return SampledWorldRecordQuarterliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordWeekliesConnection_possibleTypes: string[] = ['SampledWorldRecordWeekliesConnection']
    export const isSampledWorldRecordWeekliesConnection = (obj?: { __typename?: any } | null): obj is SampledWorldRecordWeekliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordWeekliesConnection"')
      return SampledWorldRecordWeekliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordWeekly_possibleTypes: string[] = ['SampledWorldRecordWeekly']
    export const isSampledWorldRecordWeekly = (obj?: { __typename?: any } | null): obj is SampledWorldRecordWeekly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordWeekly"')
      return SampledWorldRecordWeekly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordWeekliesEdge_possibleTypes: string[] = ['SampledWorldRecordWeekliesEdge']
    export const isSampledWorldRecordWeekliesEdge = (obj?: { __typename?: any } | null): obj is SampledWorldRecordWeekliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordWeekliesEdge"')
      return SampledWorldRecordWeekliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordYearliesConnection_possibleTypes: string[] = ['SampledWorldRecordYearliesConnection']
    export const isSampledWorldRecordYearliesConnection = (obj?: { __typename?: any } | null): obj is SampledWorldRecordYearliesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordYearliesConnection"')
      return SampledWorldRecordYearliesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordYearly_possibleTypes: string[] = ['SampledWorldRecordYearly']
    export const isSampledWorldRecordYearly = (obj?: { __typename?: any } | null): obj is SampledWorldRecordYearly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordYearly"')
      return SampledWorldRecordYearly_possibleTypes.includes(obj.__typename)
    }
    


    const SampledWorldRecordYearliesEdge_possibleTypes: string[] = ['SampledWorldRecordYearliesEdge']
    export const isSampledWorldRecordYearliesEdge = (obj?: { __typename?: any } | null): obj is SampledWorldRecordYearliesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSampledWorldRecordYearliesEdge"')
      return SampledWorldRecordYearliesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UsersConnection_possibleTypes: string[] = ['UsersConnection']
    export const isUsersConnection = (obj?: { __typename?: any } | null): obj is UsersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersConnection"')
      return UsersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UsersEdge_possibleTypes: string[] = ['UsersEdge']
    export const isUsersEdge = (obj?: { __typename?: any } | null): obj is UsersEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersEdge"')
      return UsersEdge_possibleTypes.includes(obj.__typename)
    }
    


    const VersionsConnection_possibleTypes: string[] = ['VersionsConnection']
    export const isVersionsConnection = (obj?: { __typename?: any } | null): obj is VersionsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionsConnection"')
      return VersionsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Version_possibleTypes: string[] = ['Version']
    export const isVersion = (obj?: { __typename?: any } | null): obj is Version => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersion"')
      return Version_possibleTypes.includes(obj.__typename)
    }
    


    const VersionsEdge_possibleTypes: string[] = ['VersionsEdge']
    export const isVersionsEdge = (obj?: { __typename?: any } | null): obj is VersionsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionsEdge"')
      return VersionsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ZRtmConnection_possibleTypes: string[] = ['ZRtmConnection']
    export const isZRtmConnection = (obj?: { __typename?: any } | null): obj is ZRtmConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isZRtmConnection"')
      return ZRtmConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ZRtmRecord_possibleTypes: string[] = ['ZRtmRecord']
    export const isZRtmRecord = (obj?: { __typename?: any } | null): obj is ZRtmRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isZRtmRecord"')
      return ZRtmRecord_possibleTypes.includes(obj.__typename)
    }
    


    const ZRtmEdge_possibleTypes: string[] = ['ZRtmEdge']
    export const isZRtmEdge = (obj?: { __typename?: any } | null): obj is ZRtmEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isZRtmEdge"')
      return ZRtmEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateWorldRecordGlobalPayload_possibleTypes: string[] = ['UpdateWorldRecordGlobalPayload']
    export const isUpdateWorldRecordGlobalPayload = (obj?: { __typename?: any } | null): obj is UpdateWorldRecordGlobalPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateWorldRecordGlobalPayload"')
      return UpdateWorldRecordGlobalPayload_possibleTypes.includes(obj.__typename)
    }
    

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   IS_VALID_ASC: 'IS_VALID_ASC' as const,
   IS_VALID_DESC: 'IS_VALID_DESC' as const,
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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumStatsGlobalsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumPersonalBestYearliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumPersonalBestMonthliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   MONTH_ASC: 'MONTH_ASC' as const,
   MONTH_DESC: 'MONTH_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumPersonalBestWeekliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   WEEK_ASC: 'WEEK_ASC' as const,
   WEEK_DESC: 'WEEK_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumPersonalBestDailiesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   DAY_ASC: 'DAY_ASC' as const,
   DAY_DESC: 'DAY_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumWorldRecordMonthliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   MONTH_ASC: 'MONTH_ASC' as const,
   MONTH_DESC: 'MONTH_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumWorldRecordYearliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumWorldRecordWeekliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   WEEK_ASC: 'WEEK_ASC' as const,
   WEEK_DESC: 'WEEK_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumWorldRecordDailiesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   DAY_ASC: 'DAY_ASC' as const,
   DAY_DESC: 'DAY_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumStatsMonthliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   MONTH_ASC: 'MONTH_ASC' as const,
   MONTH_DESC: 'MONTH_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumStatsYearliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumStatsWeekliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   WEEK_ASC: 'WEEK_ASC' as const,
   WEEK_DESC: 'WEEK_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumStatsDailiesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   DAY_ASC: 'DAY_ASC' as const,
   DAY_DESC: 'DAY_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumPersonalBestQuarterliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   QUARTER_ASC: 'QUARTER_ASC' as const,
   QUARTER_DESC: 'QUARTER_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumStatsQuarterliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   QUARTER_ASC: 'QUARTER_ASC' as const,
   QUARTER_DESC: 'QUARTER_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumWorldRecordQuarterliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   QUARTER_ASC: 'QUARTER_ASC' as const,
   QUARTER_DESC: 'QUARTER_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

export const enumRecordMediasOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
   ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
   GHOST_URL_ASC: 'GHOST_URL_ASC' as const,
   GHOST_URL_DESC: 'GHOST_URL_DESC' as const,
   SCREENSHOT_URL_ASC: 'SCREENSHOT_URL_ASC' as const,
   SCREENSHOT_URL_DESC: 'SCREENSHOT_URL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   PRIMARY_KEY_ASC: 'PRIMARY_KEY_ASC' as const,
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const
}

export const enumSampledLevelsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   HASH_ASC: 'HASH_ASC' as const,
   HASH_DESC: 'HASH_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

export const enumSampledPersonalBestDailiesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   DAY_ASC: 'DAY_ASC' as const,
   DAY_DESC: 'DAY_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

export const enumSampledPersonalBestMonthliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   MONTH_ASC: 'MONTH_ASC' as const,
   MONTH_DESC: 'MONTH_DESC' as const
}

export const enumSampledPersonalBestQuarterliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   QUARTER_ASC: 'QUARTER_ASC' as const,
   QUARTER_DESC: 'QUARTER_DESC' as const
}

export const enumSampledPersonalBestWeekliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   WEEK_ASC: 'WEEK_ASC' as const,
   WEEK_DESC: 'WEEK_DESC' as const
}

export const enumSampledPersonalBestYearliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const
}

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
   IS_VALID_ASC: 'IS_VALID_ASC' as const,
   IS_VALID_DESC: 'IS_VALID_DESC' as const,
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
   SPEEDS_DESC: 'SPEEDS_DESC' as const
}

export const enumSampledRecordMediasOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_RECORD_ASC: 'ID_RECORD_ASC' as const,
   ID_RECORD_DESC: 'ID_RECORD_DESC' as const,
   GHOST_URL_ASC: 'GHOST_URL_ASC' as const,
   GHOST_URL_DESC: 'GHOST_URL_DESC' as const,
   SCREENSHOT_URL_ASC: 'SCREENSHOT_URL_ASC' as const,
   SCREENSHOT_URL_DESC: 'SCREENSHOT_URL_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

export const enumSampledStatsDailiesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   DAY_ASC: 'DAY_ASC' as const,
   DAY_DESC: 'DAY_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const
}

export const enumSampledStatsGlobalsOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const
}

export const enumSampledStatsMonthliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   MONTH_ASC: 'MONTH_ASC' as const,
   MONTH_DESC: 'MONTH_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const
}

export const enumSampledStatsQuarterliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   QUARTER_ASC: 'QUARTER_ASC' as const,
   QUARTER_DESC: 'QUARTER_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const
}

export const enumSampledStatsWeekliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   WEEK_ASC: 'WEEK_ASC' as const,
   WEEK_DESC: 'WEEK_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const
}

export const enumSampledStatsYearliesOrderBy = {
   NATURAL: 'NATURAL' as const,
   ID_ASC: 'ID_ASC' as const,
   ID_DESC: 'ID_DESC' as const,
   ID_USER_ASC: 'ID_USER_ASC' as const,
   ID_USER_DESC: 'ID_USER_DESC' as const,
   ID_LEVEL_ASC: 'ID_LEVEL_ASC' as const,
   ID_LEVEL_DESC: 'ID_LEVEL_DESC' as const,
   KEY_ASC: 'KEY_ASC' as const,
   KEY_DESC: 'KEY_DESC' as const,
   DATE_CREATED_ASC: 'DATE_CREATED_ASC' as const,
   DATE_CREATED_DESC: 'DATE_CREATED_DESC' as const,
   DATE_UPDATED_ASC: 'DATE_UPDATED_ASC' as const,
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const,
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   VALUE_ASC: 'VALUE_ASC' as const,
   VALUE_DESC: 'VALUE_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

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
   DISCORD_ID_DESC: 'DISCORD_ID_DESC' as const
}

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
   WORLD_RECORDS_DESC: 'WORLD_RECORDS_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

export const enumSampledWorldRecordDailiesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   DAY_ASC: 'DAY_ASC' as const,
   DAY_DESC: 'DAY_DESC' as const
}

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
   DATE_UPDATED_DESC: 'DATE_UPDATED_DESC' as const
}

export const enumSampledWorldRecordMonthliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   MONTH_ASC: 'MONTH_ASC' as const,
   MONTH_DESC: 'MONTH_DESC' as const
}

export const enumSampledWorldRecordQuarterliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   QUARTER_ASC: 'QUARTER_ASC' as const,
   QUARTER_DESC: 'QUARTER_DESC' as const
}

export const enumSampledWorldRecordWeekliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const,
   WEEK_ASC: 'WEEK_ASC' as const,
   WEEK_DESC: 'WEEK_DESC' as const
}

export const enumSampledWorldRecordYearliesOrderBy = {
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
   YEAR_ASC: 'YEAR_ASC' as const,
   YEAR_DESC: 'YEAR_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}

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
   PRIMARY_KEY_DESC: 'PRIMARY_KEY_DESC' as const
}
