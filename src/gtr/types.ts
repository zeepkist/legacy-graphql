export default {
    scalars: [
        2, 5, 6, 8, 9, 10, 11, 12, 26, 42, 116, 121, 126, 128, 132, 137, 142,
        147, 152, 157, 162, 167, 172, 177, 182, 187, 192, 197, 202, 207, 212,
        217, 222, 227, 232, 238, 243, 248, 254, 260, 266, 272, 278, 284, 290,
        296, 302, 308, 314, 320, 326, 332, 338, 344, 350, 356, 362, 368, 374,
        380, 386, 392, 398, 404, 410, 416, 422, 428, 433, 438, 443
    ],
    types: {
        Query: {
            query: [0],
            nodeId: [2],
            node: [
                1,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            allFavorites: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [12, '[FavoritesOrderBy!]'],
                    condition: [13],
                    filter: [14]
                }
            ],
            allLevels: [
                241,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [243, '[LevelsOrderBy!]'],
                    condition: [244],
                    filter: [33]
                }
            ],
            allLevelItems: [
                118,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [121, '[LevelItemsOrderBy!]'],
                    condition: [122],
                    filter: [38]
                }
            ],
            allLevelMetadata: [
                123,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [126, '[LevelMetadataOrderBy!]'],
                    condition: [127],
                    filter: [40]
                }
            ],
            allLevelPoints: [
                112,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [116, '[LevelPointsOrderBy!]'],
                    condition: [117],
                    filter: [36]
                }
            ],
            allLevelRequests: [
                245,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [248, '[LevelRequestsOrderBy!]'],
                    condition: [249],
                    filter: [250]
                }
            ],
            allPersonalBestDailies: [
                164,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [167, '[PersonalBestDailiesOrderBy!]'],
                    condition: [168],
                    filter: [57]
                }
            ],
            allPersonalBestGlobals: [
                108,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [128, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [129],
                    filter: [23]
                }
            ],
            allPersonalBestMonthlies: [
                154,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [157, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [158],
                    filter: [53]
                }
            ],
            allPersonalBestQuarterlies: [
                209,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [212, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [213],
                    filter: [75]
                }
            ],
            allPersonalBestWeeklies: [
                159,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [162, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [163],
                    filter: [55]
                }
            ],
            allPersonalBestYearlies: [
                149,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [152, '[PersonalBestYearliesOrderBy!]'],
                    condition: [153],
                    filter: [51]
                }
            ],
            allRecords: [
                130,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [132, '[RecordsOrderBy!]'],
                    condition: [133],
                    filter: [24]
                }
            ],
            allRecordMedias: [
                229,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [232, '[RecordMediasOrderBy!]'],
                    condition: [233],
                    filter: [29]
                }
            ],
            allSampledFavorites: [
                251,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [254, '[SampledFavoritesOrderBy!]'],
                    condition: [255],
                    filter: [256]
                }
            ],
            allSampledLevels: [
                257,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [260, '[SampledLevelsOrderBy!]'],
                    condition: [261],
                    filter: [262]
                }
            ],
            allSampledLevelItems: [
                263,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [266, '[SampledLevelItemsOrderBy!]'],
                    condition: [267],
                    filter: [268]
                }
            ],
            allSampledLevelMetadata: [
                269,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [272, '[SampledLevelMetadataOrderBy!]'],
                    condition: [273],
                    filter: [274]
                }
            ],
            allSampledLevelPoints: [
                275,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [278, '[SampledLevelPointsOrderBy!]'],
                    condition: [279],
                    filter: [280]
                }
            ],
            allSampledLevelRequests: [
                281,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [284, '[SampledLevelRequestsOrderBy!]'],
                    condition: [285],
                    filter: [286]
                }
            ],
            allSampledPersonalBestDailies: [
                287,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [290, '[SampledPersonalBestDailiesOrderBy!]'],
                    condition: [291],
                    filter: [292]
                }
            ],
            allSampledPersonalBestGlobals: [
                293,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [296, '[SampledPersonalBestGlobalsOrderBy!]'],
                    condition: [297],
                    filter: [298]
                }
            ],
            allSampledPersonalBestMonthlies: [
                299,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [302, '[SampledPersonalBestMonthliesOrderBy!]'],
                    condition: [303],
                    filter: [304]
                }
            ],
            allSampledPersonalBestQuarterlies: [
                305,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [308, '[SampledPersonalBestQuarterliesOrderBy!]'],
                    condition: [309],
                    filter: [310]
                }
            ],
            allSampledPersonalBestWeeklies: [
                311,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [314, '[SampledPersonalBestWeekliesOrderBy!]'],
                    condition: [315],
                    filter: [316]
                }
            ],
            allSampledPersonalBestYearlies: [
                317,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [320, '[SampledPersonalBestYearliesOrderBy!]'],
                    condition: [321],
                    filter: [322]
                }
            ],
            allSampledRecords: [
                323,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [326, '[SampledRecordsOrderBy!]'],
                    condition: [327],
                    filter: [328]
                }
            ],
            allSampledRecordMedias: [
                329,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [332, '[SampledRecordMediasOrderBy!]'],
                    condition: [333],
                    filter: [334]
                }
            ],
            allSampledStatsDailies: [
                335,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [338, '[SampledStatsDailiesOrderBy!]'],
                    condition: [339],
                    filter: [340]
                }
            ],
            allSampledStatsGlobals: [
                341,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [344, '[SampledStatsGlobalsOrderBy!]'],
                    condition: [345],
                    filter: [346]
                }
            ],
            allSampledStatsMonthlies: [
                347,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [350, '[SampledStatsMonthliesOrderBy!]'],
                    condition: [351],
                    filter: [352]
                }
            ],
            allSampledStatsQuarterlies: [
                353,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [356, '[SampledStatsQuarterliesOrderBy!]'],
                    condition: [357],
                    filter: [358]
                }
            ],
            allSampledStatsWeeklies: [
                359,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [362, '[SampledStatsWeekliesOrderBy!]'],
                    condition: [363],
                    filter: [364]
                }
            ],
            allSampledStatsYearlies: [
                365,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [368, '[SampledStatsYearliesOrderBy!]'],
                    condition: [369],
                    filter: [370]
                }
            ],
            allSampledUpvotes: [
                371,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [374, '[SampledUpvotesOrderBy!]'],
                    condition: [375],
                    filter: [376]
                }
            ],
            allSampledUsers: [
                377,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [380, '[SampledUsersOrderBy!]'],
                    condition: [381],
                    filter: [382]
                }
            ],
            allSampledUserPoints: [
                383,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [386, '[SampledUserPointsOrderBy!]'],
                    condition: [387],
                    filter: [388]
                }
            ],
            allSampledVersions: [
                389,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [392, '[SampledVersionsOrderBy!]'],
                    condition: [393],
                    filter: [394]
                }
            ],
            allSampledWorldRecordDailies: [
                395,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [398, '[SampledWorldRecordDailiesOrderBy!]'],
                    condition: [399],
                    filter: [400]
                }
            ],
            allSampledWorldRecordGlobals: [
                401,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [404, '[SampledWorldRecordGlobalsOrderBy!]'],
                    condition: [405],
                    filter: [406]
                }
            ],
            allSampledWorldRecordMonthlies: [
                407,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [410, '[SampledWorldRecordMonthliesOrderBy!]'],
                    condition: [411],
                    filter: [412]
                }
            ],
            allSampledWorldRecordQuarterlies: [
                413,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [416, '[SampledWorldRecordQuarterliesOrderBy!]'],
                    condition: [417],
                    filter: [418]
                }
            ],
            allSampledWorldRecordWeeklies: [
                419,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [422, '[SampledWorldRecordWeekliesOrderBy!]'],
                    condition: [423],
                    filter: [424]
                }
            ],
            allSampledWorldRecordYearlies: [
                425,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [428, '[SampledWorldRecordYearliesOrderBy!]'],
                    condition: [429],
                    filter: [430]
                }
            ],
            allStatsDailies: [
                204,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [207, '[StatsDailiesOrderBy!]'],
                    condition: [208],
                    filter: [73]
                }
            ],
            allStatsGlobals: [
                134,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [137, '[StatsGlobalsOrderBy!]'],
                    condition: [138],
                    filter: [46]
                }
            ],
            allStatsMonthlies: [
                189,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [192, '[StatsMonthliesOrderBy!]'],
                    condition: [193],
                    filter: [67]
                }
            ],
            allStatsQuarterlies: [
                214,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [217, '[StatsQuarterliesOrderBy!]'],
                    condition: [218],
                    filter: [77]
                }
            ],
            allStatsWeeklies: [
                199,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [202, '[StatsWeekliesOrderBy!]'],
                    condition: [203],
                    filter: [71]
                }
            ],
            allStatsYearlies: [
                194,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [197, '[StatsYearliesOrderBy!]'],
                    condition: [198],
                    filter: [69]
                }
            ],
            allUpvotes: [
                139,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [142, '[UpvotesOrderBy!]'],
                    condition: [143],
                    filter: [48]
                }
            ],
            allUsers: [
                431,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [433, '[UsersOrderBy!]'],
                    condition: [434],
                    filter: [17]
                }
            ],
            allUserPoints: [
                235,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [238, '[UserPointsOrderBy!]'],
                    condition: [239],
                    filter: [93]
                }
            ],
            allVersions: [
                435,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [438, '[VersionsOrderBy!]'],
                    condition: [439],
                    filter: [440]
                }
            ],
            allVotes: [
                224,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [227, '[VotesOrderBy!]'],
                    condition: [228],
                    filter: [81]
                }
            ],
            allWorldRecordDailies: [
                184,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [187, '[WorldRecordDailiesOrderBy!]'],
                    condition: [188],
                    filter: [65]
                }
            ],
            allWorldRecordGlobals: [
                144,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [147, '[WorldRecordGlobalsOrderBy!]'],
                    condition: [148],
                    filter: [32]
                }
            ],
            allWorldRecordMonthlies: [
                169,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [172, '[WorldRecordMonthliesOrderBy!]'],
                    condition: [173],
                    filter: [59]
                }
            ],
            allWorldRecordQuarterlies: [
                219,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [222, '[WorldRecordQuarterliesOrderBy!]'],
                    condition: [223],
                    filter: [79]
                }
            ],
            allWorldRecordWeeklies: [
                179,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [182, '[WorldRecordWeekliesOrderBy!]'],
                    condition: [183],
                    filter: [63]
                }
            ],
            allWorldRecordYearlies: [
                174,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [177, '[WorldRecordYearliesOrderBy!]'],
                    condition: [178],
                    filter: [61]
                }
            ],
            favoriteById: [
                4,
                {
                    id: [5, 'Int!']
                }
            ],
            levelById: [
                111,
                {
                    id: [5, 'Int!']
                }
            ],
            levelByHash: [
                111,
                {
                    hash: [8, 'String!']
                }
            ],
            levelItemById: [
                119,
                {
                    id: [5, 'Int!']
                }
            ],
            levelMetadatumById: [
                124,
                {
                    id: [5, 'Int!']
                }
            ],
            levelPointById: [
                113,
                {
                    id: [5, 'Int!']
                }
            ],
            levelRequestById: [
                246,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestDailyById: [
                165,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestGlobalById: [
                109,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestMonthlyById: [
                155,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestQuarterlyById: [
                210,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestWeeklyById: [
                160,
                {
                    id: [5, 'Int!']
                }
            ],
            personalBestYearlyById: [
                150,
                {
                    id: [5, 'Int!']
                }
            ],
            recordById: [
                110,
                {
                    id: [5, 'Int!']
                }
            ],
            recordMediaById: [
                230,
                {
                    id: [5, 'Int!']
                }
            ],
            statsDailyById: [
                205,
                {
                    id: [5, 'Int!']
                }
            ],
            statsGlobalById: [
                135,
                {
                    id: [5, 'Int!']
                }
            ],
            statsMonthlyById: [
                190,
                {
                    id: [5, 'Int!']
                }
            ],
            statsQuarterlyById: [
                215,
                {
                    id: [5, 'Int!']
                }
            ],
            statsWeeklyById: [
                200,
                {
                    id: [5, 'Int!']
                }
            ],
            statsYearlyById: [
                195,
                {
                    id: [5, 'Int!']
                }
            ],
            upvoteById: [
                140,
                {
                    id: [5, 'Int!']
                }
            ],
            userById: [
                7,
                {
                    id: [5, 'Int!']
                }
            ],
            userPointById: [
                236,
                {
                    id: [5, 'Int!']
                }
            ],
            versionById: [
                436,
                {
                    id: [5, 'Int!']
                }
            ],
            voteById: [
                225,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordDailyById: [
                185,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordGlobalById: [
                145,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordMonthlyById: [
                170,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordQuarterlyById: [
                220,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordWeeklyById: [
                180,
                {
                    id: [5, 'Int!']
                }
            ],
            worldRecordYearlyById: [
                175,
                {
                    id: [5, 'Int!']
                }
            ],
            zRtm: [
                441,
                {
                    pMinAuthorTime: [26],
                    pMaxAuthorTime: [26],
                    pMinRecords: [5],
                    pMaxRecords: [5],
                    pExcludedAuthorIds: [5, '[Int]'],
                    pExcludedHashes: [8, '[String]'],
                    pMinCheckpoints: [5],
                    pMaxCheckpoints: [5],
                    pMinFinishes: [5],
                    pMaxFinishes: [5],
                    pMinBlocks: [5],
                    pMaxBlocks: [5],
                    pSampleSize: [5],
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    filter: [445]
                }
            ],
            favorite: [
                4,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            level: [
                111,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelItem: [
                119,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelMetadatum: [
                124,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelPoint: [
                113,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            levelRequest: [
                246,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestDaily: [
                165,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestGlobal: [
                109,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestMonthly: [
                155,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestQuarterly: [
                210,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestWeekly: [
                160,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            personalBestYearly: [
                150,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            record: [
                110,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            recordMedia: [
                230,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsDaily: [
                205,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsGlobal: [
                135,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsMonthly: [
                190,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsQuarterly: [
                215,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsWeekly: [
                200,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            statsYearly: [
                195,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            upvote: [
                140,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            user: [
                7,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            userPoint: [
                236,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            version: [
                436,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            vote: [
                225,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordDaily: [
                185,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordGlobal: [
                145,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordMonthly: [
                170,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordQuarterly: [
                220,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordWeekly: [
                180,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            worldRecordYearly: [
                175,
                {
                    nodeId: [2, 'ID!']
                }
            ],
            __typename: [8]
        },
        Node: {
            nodeId: [2],
            on_Query: [0],
            on_Favorite: [4],
            on_User: [7],
            on_PersonalBestGlobal: [109],
            on_Record: [110],
            on_Level: [111],
            on_LevelPoint: [113],
            on_LevelItem: [119],
            on_LevelMetadatum: [124],
            on_StatsGlobal: [135],
            on_Upvote: [140],
            on_WorldRecordGlobal: [145],
            on_PersonalBestYearly: [150],
            on_PersonalBestMonthly: [155],
            on_PersonalBestWeekly: [160],
            on_PersonalBestDaily: [165],
            on_WorldRecordMonthly: [170],
            on_WorldRecordYearly: [175],
            on_WorldRecordWeekly: [180],
            on_WorldRecordDaily: [185],
            on_StatsMonthly: [190],
            on_StatsYearly: [195],
            on_StatsWeekly: [200],
            on_StatsDaily: [205],
            on_PersonalBestQuarterly: [210],
            on_StatsQuarterly: [215],
            on_WorldRecordQuarterly: [220],
            on_Vote: [225],
            on_RecordMedia: [230],
            on_UserPoint: [236],
            on_LevelRequest: [246],
            on_Version: [436],
            __typename: [8]
        },
        ID: {},
        FavoritesConnection: {
            nodes: [4],
            edges: [240],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        Favorite: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            dateCreated: [6],
            dateUpdated: [6],
            idLevel: [5],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        Int: {},
        Datetime: {},
        User: {
            nodeId: [2],
            id: [5],
            steamName: [8],
            banned: [9],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [10],
            discordId: [10],
            favoritesByIdUser: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [12, '[FavoritesOrderBy!]'],
                    condition: [13],
                    filter: [14]
                }
            ],
            personalBestGlobalsByIdUser: [
                108,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [128, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [129],
                    filter: [23]
                }
            ],
            userPointsByIdUser: [
                235,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [238, '[UserPointsOrderBy!]'],
                    condition: [239],
                    filter: [93]
                }
            ],
            recordsByIdUser: [
                130,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [132, '[RecordsOrderBy!]'],
                    condition: [133],
                    filter: [24]
                }
            ],
            statsGlobalsByIdUser: [
                134,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [137, '[StatsGlobalsOrderBy!]'],
                    condition: [138],
                    filter: [46]
                }
            ],
            upvotesByIdUser: [
                139,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [142, '[UpvotesOrderBy!]'],
                    condition: [143],
                    filter: [48]
                }
            ],
            personalBestYearliesByIdUser: [
                149,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [152, '[PersonalBestYearliesOrderBy!]'],
                    condition: [153],
                    filter: [51]
                }
            ],
            personalBestMonthliesByIdUser: [
                154,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [157, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [158],
                    filter: [53]
                }
            ],
            personalBestWeekliesByIdUser: [
                159,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [162, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [163],
                    filter: [55]
                }
            ],
            personalBestDailiesByIdUser: [
                164,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [167, '[PersonalBestDailiesOrderBy!]'],
                    condition: [168],
                    filter: [57]
                }
            ],
            statsMonthliesByIdUser: [
                189,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [192, '[StatsMonthliesOrderBy!]'],
                    condition: [193],
                    filter: [67]
                }
            ],
            statsYearliesByIdUser: [
                194,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [197, '[StatsYearliesOrderBy!]'],
                    condition: [198],
                    filter: [69]
                }
            ],
            statsWeekliesByIdUser: [
                199,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [202, '[StatsWeekliesOrderBy!]'],
                    condition: [203],
                    filter: [71]
                }
            ],
            statsDailiesByIdUser: [
                204,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [207, '[StatsDailiesOrderBy!]'],
                    condition: [208],
                    filter: [73]
                }
            ],
            personalBestQuarterliesByIdUser: [
                209,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [212, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [213],
                    filter: [75]
                }
            ],
            statsQuarterliesByIdUser: [
                214,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [217, '[StatsQuarterliesOrderBy!]'],
                    condition: [218],
                    filter: [77]
                }
            ],
            votesByIdUser: [
                224,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [227, '[VotesOrderBy!]'],
                    condition: [228],
                    filter: [81]
                }
            ],
            __typename: [8]
        },
        String: {},
        Boolean: {},
        BigFloat: {},
        Cursor: {},
        FavoritesOrderBy: {},
        FavoriteCondition: {
            id: [5],
            idUser: [5],
            dateCreated: [6],
            dateUpdated: [6],
            idLevel: [5],
            __typename: [8]
        },
        FavoriteFilter: {
            id: [15],
            idUser: [15],
            dateCreated: [16],
            dateUpdated: [16],
            idLevel: [15],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [14],
            or: [14],
            not: [14],
            __typename: [8]
        },
        IntFilter: {
            isNull: [9],
            equalTo: [5],
            notEqualTo: [5],
            distinctFrom: [5],
            notDistinctFrom: [5],
            in: [5],
            notIn: [5],
            lessThan: [5],
            lessThanOrEqualTo: [5],
            greaterThan: [5],
            greaterThanOrEqualTo: [5],
            __typename: [8]
        },
        DatetimeFilter: {
            isNull: [9],
            equalTo: [6],
            notEqualTo: [6],
            distinctFrom: [6],
            notDistinctFrom: [6],
            in: [6],
            notIn: [6],
            lessThan: [6],
            lessThanOrEqualTo: [6],
            greaterThan: [6],
            greaterThanOrEqualTo: [6],
            __typename: [8]
        },
        UserFilter: {
            id: [15],
            steamName: [18],
            banned: [19],
            dateCreated: [16],
            dateUpdated: [16],
            steamId: [20],
            discordId: [20],
            favoritesByIdUser: [21],
            favoritesByIdUserExist: [9],
            personalBestGlobalsByIdUser: [22],
            personalBestGlobalsByIdUserExist: [9],
            userPointsByIdUser: [92],
            userPointsByIdUserExist: [9],
            recordsByIdUser: [94],
            recordsByIdUserExist: [9],
            statsGlobalsByIdUser: [95],
            statsGlobalsByIdUserExist: [9],
            upvotesByIdUser: [96],
            upvotesByIdUserExist: [9],
            personalBestYearliesByIdUser: [97],
            personalBestYearliesByIdUserExist: [9],
            personalBestMonthliesByIdUser: [98],
            personalBestMonthliesByIdUserExist: [9],
            personalBestWeekliesByIdUser: [99],
            personalBestWeekliesByIdUserExist: [9],
            personalBestDailiesByIdUser: [100],
            personalBestDailiesByIdUserExist: [9],
            statsMonthliesByIdUser: [101],
            statsMonthliesByIdUserExist: [9],
            statsYearliesByIdUser: [102],
            statsYearliesByIdUserExist: [9],
            statsWeekliesByIdUser: [103],
            statsWeekliesByIdUserExist: [9],
            statsDailiesByIdUser: [104],
            statsDailiesByIdUserExist: [9],
            personalBestQuarterliesByIdUser: [105],
            personalBestQuarterliesByIdUserExist: [9],
            statsQuarterliesByIdUser: [106],
            statsQuarterliesByIdUserExist: [9],
            votesByIdUser: [107],
            votesByIdUserExist: [9],
            and: [17],
            or: [17],
            not: [17],
            __typename: [8]
        },
        StringFilter: {
            isNull: [9],
            equalTo: [8],
            notEqualTo: [8],
            distinctFrom: [8],
            notDistinctFrom: [8],
            in: [8],
            notIn: [8],
            lessThan: [8],
            lessThanOrEqualTo: [8],
            greaterThan: [8],
            greaterThanOrEqualTo: [8],
            includes: [8],
            notIncludes: [8],
            includesInsensitive: [8],
            notIncludesInsensitive: [8],
            startsWith: [8],
            notStartsWith: [8],
            startsWithInsensitive: [8],
            notStartsWithInsensitive: [8],
            endsWith: [8],
            notEndsWith: [8],
            endsWithInsensitive: [8],
            notEndsWithInsensitive: [8],
            like: [8],
            notLike: [8],
            likeInsensitive: [8],
            notLikeInsensitive: [8],
            equalToInsensitive: [8],
            notEqualToInsensitive: [8],
            distinctFromInsensitive: [8],
            notDistinctFromInsensitive: [8],
            inInsensitive: [8],
            notInInsensitive: [8],
            lessThanInsensitive: [8],
            lessThanOrEqualToInsensitive: [8],
            greaterThanInsensitive: [8],
            greaterThanOrEqualToInsensitive: [8],
            __typename: [8]
        },
        BooleanFilter: {
            isNull: [9],
            equalTo: [9],
            notEqualTo: [9],
            distinctFrom: [9],
            notDistinctFrom: [9],
            in: [9],
            notIn: [9],
            lessThan: [9],
            lessThanOrEqualTo: [9],
            greaterThan: [9],
            greaterThanOrEqualTo: [9],
            __typename: [8]
        },
        BigFloatFilter: {
            isNull: [9],
            equalTo: [10],
            notEqualTo: [10],
            distinctFrom: [10],
            notDistinctFrom: [10],
            in: [10],
            notIn: [10],
            lessThan: [10],
            lessThanOrEqualTo: [10],
            greaterThan: [10],
            greaterThanOrEqualTo: [10],
            __typename: [8]
        },
        UserToManyFavoriteFilter: {
            every: [14],
            some: [14],
            none: [14],
            __typename: [8]
        },
        UserToManyPersonalBestGlobalFilter: {
            every: [23],
            some: [23],
            none: [23],
            __typename: [8]
        },
        PersonalBestGlobalFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [23],
            or: [23],
            not: [23],
            __typename: [8]
        },
        RecordFilter: {
            id: [15],
            idUser: [15],
            time: [25],
            gameVersion: [18],
            isValid: [19],
            idLevel: [15],
            modVersion: [18],
            dateCreated: [16],
            dateUpdated: [16],
            splits: [27],
            speeds: [27],
            recordMediasByIdRecord: [28],
            recordMediasByIdRecordExist: [9],
            personalBestGlobalsByIdRecord: [30],
            personalBestGlobalsByIdRecordExist: [9],
            worldRecordGlobalsByIdRecord: [31],
            worldRecordGlobalsByIdRecordExist: [9],
            personalBestYearliesByIdRecord: [82],
            personalBestYearliesByIdRecordExist: [9],
            personalBestMonthliesByIdRecord: [83],
            personalBestMonthliesByIdRecordExist: [9],
            personalBestWeekliesByIdRecord: [84],
            personalBestWeekliesByIdRecordExist: [9],
            personalBestDailiesByIdRecord: [85],
            personalBestDailiesByIdRecordExist: [9],
            worldRecordMonthliesByIdRecord: [86],
            worldRecordMonthliesByIdRecordExist: [9],
            worldRecordYearliesByIdRecord: [87],
            worldRecordYearliesByIdRecordExist: [9],
            worldRecordWeekliesByIdRecord: [88],
            worldRecordWeekliesByIdRecordExist: [9],
            worldRecordDailiesByIdRecord: [89],
            worldRecordDailiesByIdRecordExist: [9],
            personalBestQuarterliesByIdRecord: [90],
            personalBestQuarterliesByIdRecordExist: [9],
            worldRecordQuarterliesByIdRecord: [91],
            worldRecordQuarterliesByIdRecordExist: [9],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [24],
            or: [24],
            not: [24],
            __typename: [8]
        },
        FloatFilter: {
            isNull: [9],
            equalTo: [26],
            notEqualTo: [26],
            distinctFrom: [26],
            notDistinctFrom: [26],
            in: [26],
            notIn: [26],
            lessThan: [26],
            lessThanOrEqualTo: [26],
            greaterThan: [26],
            greaterThanOrEqualTo: [26],
            __typename: [8]
        },
        Float: {},
        FloatListFilter: {
            isNull: [9],
            equalTo: [26],
            notEqualTo: [26],
            distinctFrom: [26],
            notDistinctFrom: [26],
            lessThan: [26],
            lessThanOrEqualTo: [26],
            greaterThan: [26],
            greaterThanOrEqualTo: [26],
            contains: [26],
            containedBy: [26],
            overlaps: [26],
            anyEqualTo: [26],
            anyNotEqualTo: [26],
            anyLessThan: [26],
            anyLessThanOrEqualTo: [26],
            anyGreaterThan: [26],
            anyGreaterThanOrEqualTo: [26],
            __typename: [8]
        },
        RecordToManyRecordMediaFilter: {
            every: [29],
            some: [29],
            none: [29],
            __typename: [8]
        },
        RecordMediaFilter: {
            id: [15],
            idRecord: [15],
            ghostUrl: [18],
            screenshotUrl: [18],
            dateCreated: [16],
            dateUpdated: [16],
            recordByIdRecord: [24],
            and: [29],
            or: [29],
            not: [29],
            __typename: [8]
        },
        RecordToManyPersonalBestGlobalFilter: {
            every: [23],
            some: [23],
            none: [23],
            __typename: [8]
        },
        RecordToManyWorldRecordGlobalFilter: {
            every: [32],
            some: [32],
            none: [32],
            __typename: [8]
        },
        WorldRecordGlobalFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [32],
            or: [32],
            not: [32],
            __typename: [8]
        },
        LevelFilter: {
            id: [15],
            hash: [18],
            dateCreated: [16],
            dateUpdated: [16],
            favoritesByIdLevel: [34],
            favoritesByIdLevelExist: [9],
            levelPointsByIdLevel: [35],
            levelPointsByIdLevelExist: [9],
            levelItemsByIdLevel: [37],
            levelItemsByIdLevelExist: [9],
            levelMetadataByIdLevel: [39],
            levelMetadataByIdLevelExist: [9],
            personalBestGlobalsByIdLevel: [43],
            personalBestGlobalsByIdLevelExist: [9],
            recordsByIdLevel: [44],
            recordsByIdLevelExist: [9],
            statsGlobalsByIdLevel: [45],
            statsGlobalsByIdLevelExist: [9],
            upvotesByIdLevel: [47],
            upvotesByIdLevelExist: [9],
            worldRecordGlobalsByIdLevel: [49],
            worldRecordGlobalsByIdLevelExist: [9],
            personalBestYearliesByIdLevel: [50],
            personalBestYearliesByIdLevelExist: [9],
            personalBestMonthliesByIdLevel: [52],
            personalBestMonthliesByIdLevelExist: [9],
            personalBestWeekliesByIdLevel: [54],
            personalBestWeekliesByIdLevelExist: [9],
            personalBestDailiesByIdLevel: [56],
            personalBestDailiesByIdLevelExist: [9],
            worldRecordMonthliesByIdLevel: [58],
            worldRecordMonthliesByIdLevelExist: [9],
            worldRecordYearliesByIdLevel: [60],
            worldRecordYearliesByIdLevelExist: [9],
            worldRecordWeekliesByIdLevel: [62],
            worldRecordWeekliesByIdLevelExist: [9],
            worldRecordDailiesByIdLevel: [64],
            worldRecordDailiesByIdLevelExist: [9],
            statsMonthliesByIdLevel: [66],
            statsMonthliesByIdLevelExist: [9],
            statsYearliesByIdLevel: [68],
            statsYearliesByIdLevelExist: [9],
            statsWeekliesByIdLevel: [70],
            statsWeekliesByIdLevelExist: [9],
            statsDailiesByIdLevel: [72],
            statsDailiesByIdLevelExist: [9],
            personalBestQuarterliesByIdLevel: [74],
            personalBestQuarterliesByIdLevelExist: [9],
            statsQuarterliesByIdLevel: [76],
            statsQuarterliesByIdLevelExist: [9],
            worldRecordQuarterliesByIdLevel: [78],
            worldRecordQuarterliesByIdLevelExist: [9],
            votesByIdLevel: [80],
            votesByIdLevelExist: [9],
            and: [33],
            or: [33],
            not: [33],
            __typename: [8]
        },
        LevelToManyFavoriteFilter: {
            every: [14],
            some: [14],
            none: [14],
            __typename: [8]
        },
        LevelToManyLevelPointFilter: {
            every: [36],
            some: [36],
            none: [36],
            __typename: [8]
        },
        LevelPointFilter: {
            id: [15],
            points: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            levelByIdLevel: [33],
            and: [36],
            or: [36],
            not: [36],
            __typename: [8]
        },
        LevelToManyLevelItemFilter: {
            every: [38],
            some: [38],
            none: [38],
            __typename: [8]
        },
        LevelItemFilter: {
            id: [15],
            idLevel: [15],
            workshopId: [20],
            authorId: [20],
            name: [18],
            imageUrl: [18],
            fileAuthor: [18],
            fileUid: [18],
            validationTimeAuthor: [25],
            validationTimeGold: [25],
            validationTimeSilver: [25],
            validationTimeBronze: [25],
            deleted: [19],
            createdAt: [16],
            updatedAt: [16],
            dateCreated: [16],
            dateUpdated: [16],
            levelByIdLevel: [33],
            and: [38],
            or: [38],
            not: [38],
            __typename: [8]
        },
        LevelToManyLevelMetadatumFilter: {
            every: [40],
            some: [40],
            none: [40],
            __typename: [8]
        },
        LevelMetadatumFilter: {
            id: [15],
            idLevel: [15],
            amountCheckpoints: [15],
            amountFinishes: [15],
            amountBlocks: [15],
            typeGround: [15],
            typeSkybox: [15],
            blocks: [41],
            dateCreated: [16],
            dateUpdated: [16],
            levelByIdLevel: [33],
            and: [40],
            or: [40],
            not: [40],
            __typename: [8]
        },
        JSONFilter: {
            isNull: [9],
            equalTo: [42],
            notEqualTo: [42],
            distinctFrom: [42],
            notDistinctFrom: [42],
            in: [42],
            notIn: [42],
            lessThan: [42],
            lessThanOrEqualTo: [42],
            greaterThan: [42],
            greaterThanOrEqualTo: [42],
            contains: [42],
            containsKey: [8],
            containsAllKeys: [8],
            containsAnyKeys: [8],
            containedBy: [42],
            __typename: [8]
        },
        JSON: {},
        LevelToManyPersonalBestGlobalFilter: {
            every: [23],
            some: [23],
            none: [23],
            __typename: [8]
        },
        LevelToManyRecordFilter: {
            every: [24],
            some: [24],
            none: [24],
            __typename: [8]
        },
        LevelToManyStatsGlobalFilter: {
            every: [46],
            some: [46],
            none: [46],
            __typename: [8]
        },
        StatsGlobalFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [46],
            or: [46],
            not: [46],
            __typename: [8]
        },
        LevelToManyUpvoteFilter: {
            every: [48],
            some: [48],
            none: [48],
            __typename: [8]
        },
        UpvoteFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [48],
            or: [48],
            not: [48],
            __typename: [8]
        },
        LevelToManyWorldRecordGlobalFilter: {
            every: [32],
            some: [32],
            none: [32],
            __typename: [8]
        },
        LevelToManyPersonalBestYearlyFilter: {
            every: [51],
            some: [51],
            none: [51],
            __typename: [8]
        },
        PersonalBestYearlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [51],
            or: [51],
            not: [51],
            __typename: [8]
        },
        LevelToManyPersonalBestMonthlyFilter: {
            every: [53],
            some: [53],
            none: [53],
            __typename: [8]
        },
        PersonalBestMonthlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [53],
            or: [53],
            not: [53],
            __typename: [8]
        },
        LevelToManyPersonalBestWeeklyFilter: {
            every: [55],
            some: [55],
            none: [55],
            __typename: [8]
        },
        PersonalBestWeeklyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [55],
            or: [55],
            not: [55],
            __typename: [8]
        },
        LevelToManyPersonalBestDailyFilter: {
            every: [57],
            some: [57],
            none: [57],
            __typename: [8]
        },
        PersonalBestDailyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [57],
            or: [57],
            not: [57],
            __typename: [8]
        },
        LevelToManyWorldRecordMonthlyFilter: {
            every: [59],
            some: [59],
            none: [59],
            __typename: [8]
        },
        WorldRecordMonthlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [59],
            or: [59],
            not: [59],
            __typename: [8]
        },
        LevelToManyWorldRecordYearlyFilter: {
            every: [61],
            some: [61],
            none: [61],
            __typename: [8]
        },
        WorldRecordYearlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [61],
            or: [61],
            not: [61],
            __typename: [8]
        },
        LevelToManyWorldRecordWeeklyFilter: {
            every: [63],
            some: [63],
            none: [63],
            __typename: [8]
        },
        WorldRecordWeeklyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [63],
            or: [63],
            not: [63],
            __typename: [8]
        },
        LevelToManyWorldRecordDailyFilter: {
            every: [65],
            some: [65],
            none: [65],
            __typename: [8]
        },
        WorldRecordDailyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [65],
            or: [65],
            not: [65],
            __typename: [8]
        },
        LevelToManyStatsMonthlyFilter: {
            every: [67],
            some: [67],
            none: [67],
            __typename: [8]
        },
        StatsMonthlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [67],
            or: [67],
            not: [67],
            __typename: [8]
        },
        LevelToManyStatsYearlyFilter: {
            every: [69],
            some: [69],
            none: [69],
            __typename: [8]
        },
        StatsYearlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [69],
            or: [69],
            not: [69],
            __typename: [8]
        },
        LevelToManyStatsWeeklyFilter: {
            every: [71],
            some: [71],
            none: [71],
            __typename: [8]
        },
        StatsWeeklyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [71],
            or: [71],
            not: [71],
            __typename: [8]
        },
        LevelToManyStatsDailyFilter: {
            every: [73],
            some: [73],
            none: [73],
            __typename: [8]
        },
        StatsDailyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [73],
            or: [73],
            not: [73],
            __typename: [8]
        },
        LevelToManyPersonalBestQuarterlyFilter: {
            every: [75],
            some: [75],
            none: [75],
            __typename: [8]
        },
        PersonalBestQuarterlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            recordByIdRecord: [24],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [75],
            or: [75],
            not: [75],
            __typename: [8]
        },
        LevelToManyStatsQuarterlyFilter: {
            every: [77],
            some: [77],
            none: [77],
            __typename: [8]
        },
        StatsQuarterlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            value: [20],
            userByIdUser: [17],
            levelByIdLevel: [33],
            levelByIdLevelExists: [9],
            and: [77],
            or: [77],
            not: [77],
            __typename: [8]
        },
        LevelToManyWorldRecordQuarterlyFilter: {
            every: [79],
            some: [79],
            none: [79],
            __typename: [8]
        },
        WorldRecordQuarterlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            recordByIdRecord: [24],
            levelByIdLevel: [33],
            and: [79],
            or: [79],
            not: [79],
            __typename: [8]
        },
        LevelToManyVoteFilter: {
            every: [81],
            some: [81],
            none: [81],
            __typename: [8]
        },
        VoteFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            value: [15],
            dateCreated: [16],
            dateUpdated: [16],
            userByIdUser: [17],
            levelByIdLevel: [33],
            and: [81],
            or: [81],
            not: [81],
            __typename: [8]
        },
        RecordToManyPersonalBestYearlyFilter: {
            every: [51],
            some: [51],
            none: [51],
            __typename: [8]
        },
        RecordToManyPersonalBestMonthlyFilter: {
            every: [53],
            some: [53],
            none: [53],
            __typename: [8]
        },
        RecordToManyPersonalBestWeeklyFilter: {
            every: [55],
            some: [55],
            none: [55],
            __typename: [8]
        },
        RecordToManyPersonalBestDailyFilter: {
            every: [57],
            some: [57],
            none: [57],
            __typename: [8]
        },
        RecordToManyWorldRecordMonthlyFilter: {
            every: [59],
            some: [59],
            none: [59],
            __typename: [8]
        },
        RecordToManyWorldRecordYearlyFilter: {
            every: [61],
            some: [61],
            none: [61],
            __typename: [8]
        },
        RecordToManyWorldRecordWeeklyFilter: {
            every: [63],
            some: [63],
            none: [63],
            __typename: [8]
        },
        RecordToManyWorldRecordDailyFilter: {
            every: [65],
            some: [65],
            none: [65],
            __typename: [8]
        },
        RecordToManyPersonalBestQuarterlyFilter: {
            every: [75],
            some: [75],
            none: [75],
            __typename: [8]
        },
        RecordToManyWorldRecordQuarterlyFilter: {
            every: [79],
            some: [79],
            none: [79],
            __typename: [8]
        },
        UserToManyUserPointFilter: {
            every: [93],
            some: [93],
            none: [93],
            __typename: [8]
        },
        UserPointFilter: {
            id: [15],
            idUser: [15],
            points: [15],
            dateCreated: [16],
            dateUpdated: [16],
            rank: [15],
            worldRecords: [15],
            userByIdUser: [17],
            and: [93],
            or: [93],
            not: [93],
            __typename: [8]
        },
        UserToManyRecordFilter: {
            every: [24],
            some: [24],
            none: [24],
            __typename: [8]
        },
        UserToManyStatsGlobalFilter: {
            every: [46],
            some: [46],
            none: [46],
            __typename: [8]
        },
        UserToManyUpvoteFilter: {
            every: [48],
            some: [48],
            none: [48],
            __typename: [8]
        },
        UserToManyPersonalBestYearlyFilter: {
            every: [51],
            some: [51],
            none: [51],
            __typename: [8]
        },
        UserToManyPersonalBestMonthlyFilter: {
            every: [53],
            some: [53],
            none: [53],
            __typename: [8]
        },
        UserToManyPersonalBestWeeklyFilter: {
            every: [55],
            some: [55],
            none: [55],
            __typename: [8]
        },
        UserToManyPersonalBestDailyFilter: {
            every: [57],
            some: [57],
            none: [57],
            __typename: [8]
        },
        UserToManyStatsMonthlyFilter: {
            every: [67],
            some: [67],
            none: [67],
            __typename: [8]
        },
        UserToManyStatsYearlyFilter: {
            every: [69],
            some: [69],
            none: [69],
            __typename: [8]
        },
        UserToManyStatsWeeklyFilter: {
            every: [71],
            some: [71],
            none: [71],
            __typename: [8]
        },
        UserToManyStatsDailyFilter: {
            every: [73],
            some: [73],
            none: [73],
            __typename: [8]
        },
        UserToManyPersonalBestQuarterlyFilter: {
            every: [75],
            some: [75],
            none: [75],
            __typename: [8]
        },
        UserToManyStatsQuarterlyFilter: {
            every: [77],
            some: [77],
            none: [77],
            __typename: [8]
        },
        UserToManyVoteFilter: {
            every: [81],
            some: [81],
            none: [81],
            __typename: [8]
        },
        PersonalBestGlobalsConnection: {
            nodes: [109],
            edges: [234],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestGlobal: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            recordByIdRecord: [110],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        Record: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            time: [26],
            gameVersion: [8],
            isValid: [9],
            idLevel: [5],
            modVersion: [8],
            dateCreated: [6],
            dateUpdated: [6],
            splits: [26],
            speeds: [26],
            userByIdUser: [7],
            levelByIdLevel: [111],
            recordMediasByIdRecord: [
                229,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [232, '[RecordMediasOrderBy!]'],
                    condition: [233],
                    filter: [29]
                }
            ],
            personalBestGlobalsByIdRecord: [
                108,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [128, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [129],
                    filter: [23]
                }
            ],
            worldRecordGlobalsByIdRecord: [
                144,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [147, '[WorldRecordGlobalsOrderBy!]'],
                    condition: [148],
                    filter: [32]
                }
            ],
            personalBestYearliesByIdRecord: [
                149,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [152, '[PersonalBestYearliesOrderBy!]'],
                    condition: [153],
                    filter: [51]
                }
            ],
            personalBestMonthliesByIdRecord: [
                154,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [157, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [158],
                    filter: [53]
                }
            ],
            personalBestWeekliesByIdRecord: [
                159,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [162, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [163],
                    filter: [55]
                }
            ],
            personalBestDailiesByIdRecord: [
                164,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [167, '[PersonalBestDailiesOrderBy!]'],
                    condition: [168],
                    filter: [57]
                }
            ],
            worldRecordMonthliesByIdRecord: [
                169,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [172, '[WorldRecordMonthliesOrderBy!]'],
                    condition: [173],
                    filter: [59]
                }
            ],
            worldRecordYearliesByIdRecord: [
                174,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [177, '[WorldRecordYearliesOrderBy!]'],
                    condition: [178],
                    filter: [61]
                }
            ],
            worldRecordWeekliesByIdRecord: [
                179,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [182, '[WorldRecordWeekliesOrderBy!]'],
                    condition: [183],
                    filter: [63]
                }
            ],
            worldRecordDailiesByIdRecord: [
                184,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [187, '[WorldRecordDailiesOrderBy!]'],
                    condition: [188],
                    filter: [65]
                }
            ],
            personalBestQuarterliesByIdRecord: [
                209,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [212, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [213],
                    filter: [75]
                }
            ],
            worldRecordQuarterliesByIdRecord: [
                219,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [222, '[WorldRecordQuarterliesOrderBy!]'],
                    condition: [223],
                    filter: [79]
                }
            ],
            __typename: [8]
        },
        Level: {
            nodeId: [2],
            id: [5],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            favoritesByIdLevel: [
                3,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [12, '[FavoritesOrderBy!]'],
                    condition: [13],
                    filter: [14]
                }
            ],
            levelPointsByIdLevel: [
                112,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [116, '[LevelPointsOrderBy!]'],
                    condition: [117],
                    filter: [36]
                }
            ],
            levelItemsByIdLevel: [
                118,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [121, '[LevelItemsOrderBy!]'],
                    condition: [122],
                    filter: [38]
                }
            ],
            levelMetadataByIdLevel: [
                123,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [126, '[LevelMetadataOrderBy!]'],
                    condition: [127],
                    filter: [40]
                }
            ],
            personalBestGlobalsByIdLevel: [
                108,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [128, '[PersonalBestGlobalsOrderBy!]'],
                    condition: [129],
                    filter: [23]
                }
            ],
            recordsByIdLevel: [
                130,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [132, '[RecordsOrderBy!]'],
                    condition: [133],
                    filter: [24]
                }
            ],
            statsGlobalsByIdLevel: [
                134,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [137, '[StatsGlobalsOrderBy!]'],
                    condition: [138],
                    filter: [46]
                }
            ],
            upvotesByIdLevel: [
                139,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [142, '[UpvotesOrderBy!]'],
                    condition: [143],
                    filter: [48]
                }
            ],
            worldRecordGlobalsByIdLevel: [
                144,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [147, '[WorldRecordGlobalsOrderBy!]'],
                    condition: [148],
                    filter: [32]
                }
            ],
            personalBestYearliesByIdLevel: [
                149,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [152, '[PersonalBestYearliesOrderBy!]'],
                    condition: [153],
                    filter: [51]
                }
            ],
            personalBestMonthliesByIdLevel: [
                154,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [157, '[PersonalBestMonthliesOrderBy!]'],
                    condition: [158],
                    filter: [53]
                }
            ],
            personalBestWeekliesByIdLevel: [
                159,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [162, '[PersonalBestWeekliesOrderBy!]'],
                    condition: [163],
                    filter: [55]
                }
            ],
            personalBestDailiesByIdLevel: [
                164,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [167, '[PersonalBestDailiesOrderBy!]'],
                    condition: [168],
                    filter: [57]
                }
            ],
            worldRecordMonthliesByIdLevel: [
                169,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [172, '[WorldRecordMonthliesOrderBy!]'],
                    condition: [173],
                    filter: [59]
                }
            ],
            worldRecordYearliesByIdLevel: [
                174,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [177, '[WorldRecordYearliesOrderBy!]'],
                    condition: [178],
                    filter: [61]
                }
            ],
            worldRecordWeekliesByIdLevel: [
                179,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [182, '[WorldRecordWeekliesOrderBy!]'],
                    condition: [183],
                    filter: [63]
                }
            ],
            worldRecordDailiesByIdLevel: [
                184,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [187, '[WorldRecordDailiesOrderBy!]'],
                    condition: [188],
                    filter: [65]
                }
            ],
            statsMonthliesByIdLevel: [
                189,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [192, '[StatsMonthliesOrderBy!]'],
                    condition: [193],
                    filter: [67]
                }
            ],
            statsYearliesByIdLevel: [
                194,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [197, '[StatsYearliesOrderBy!]'],
                    condition: [198],
                    filter: [69]
                }
            ],
            statsWeekliesByIdLevel: [
                199,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [202, '[StatsWeekliesOrderBy!]'],
                    condition: [203],
                    filter: [71]
                }
            ],
            statsDailiesByIdLevel: [
                204,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [207, '[StatsDailiesOrderBy!]'],
                    condition: [208],
                    filter: [73]
                }
            ],
            personalBestQuarterliesByIdLevel: [
                209,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [212, '[PersonalBestQuarterliesOrderBy!]'],
                    condition: [213],
                    filter: [75]
                }
            ],
            statsQuarterliesByIdLevel: [
                214,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [217, '[StatsQuarterliesOrderBy!]'],
                    condition: [218],
                    filter: [77]
                }
            ],
            worldRecordQuarterliesByIdLevel: [
                219,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [222, '[WorldRecordQuarterliesOrderBy!]'],
                    condition: [223],
                    filter: [79]
                }
            ],
            votesByIdLevel: [
                224,
                {
                    first: [5],
                    last: [5],
                    offset: [5],
                    before: [11],
                    after: [11],
                    orderBy: [227, '[VotesOrderBy!]'],
                    condition: [228],
                    filter: [81]
                }
            ],
            __typename: [8]
        },
        LevelPointsConnection: {
            nodes: [113],
            edges: [114],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        LevelPoint: {
            nodeId: [2],
            id: [5],
            points: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            levelByIdLevel: [111],
            __typename: [8]
        },
        LevelPointsEdge: {
            cursor: [11],
            node: [113],
            __typename: [8]
        },
        PageInfo: {
            hasNextPage: [9],
            hasPreviousPage: [9],
            startCursor: [11],
            endCursor: [11],
            __typename: [8]
        },
        LevelPointsOrderBy: {},
        LevelPointCondition: {
            id: [5],
            points: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelItemsConnection: {
            nodes: [119],
            edges: [120],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        LevelItem: {
            nodeId: [2],
            id: [5],
            idLevel: [5],
            workshopId: [10],
            authorId: [10],
            name: [8],
            imageUrl: [8],
            fileAuthor: [8],
            fileUid: [8],
            validationTimeAuthor: [26],
            validationTimeGold: [26],
            validationTimeSilver: [26],
            validationTimeBronze: [26],
            deleted: [9],
            createdAt: [6],
            updatedAt: [6],
            dateCreated: [6],
            dateUpdated: [6],
            levelByIdLevel: [111],
            __typename: [8]
        },
        LevelItemsEdge: {
            cursor: [11],
            node: [119],
            __typename: [8]
        },
        LevelItemsOrderBy: {},
        LevelItemCondition: {
            id: [5],
            idLevel: [5],
            workshopId: [10],
            authorId: [10],
            name: [8],
            imageUrl: [8],
            fileAuthor: [8],
            fileUid: [8],
            validationTimeAuthor: [26],
            validationTimeGold: [26],
            validationTimeSilver: [26],
            validationTimeBronze: [26],
            deleted: [9],
            createdAt: [6],
            updatedAt: [6],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelMetadataConnection: {
            nodes: [124],
            edges: [125],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        LevelMetadatum: {
            nodeId: [2],
            id: [5],
            idLevel: [5],
            amountCheckpoints: [5],
            amountFinishes: [5],
            amountBlocks: [5],
            typeGround: [5],
            typeSkybox: [5],
            blocks: [42],
            dateCreated: [6],
            dateUpdated: [6],
            levelByIdLevel: [111],
            __typename: [8]
        },
        LevelMetadataEdge: {
            cursor: [11],
            node: [124],
            __typename: [8]
        },
        LevelMetadataOrderBy: {},
        LevelMetadatumCondition: {
            id: [5],
            idLevel: [5],
            amountCheckpoints: [5],
            amountFinishes: [5],
            amountBlocks: [5],
            typeGround: [5],
            typeSkybox: [5],
            blocks: [42],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        PersonalBestGlobalsOrderBy: {},
        PersonalBestGlobalCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        RecordsConnection: {
            nodes: [110],
            edges: [131],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        RecordsEdge: {
            cursor: [11],
            node: [110],
            __typename: [8]
        },
        RecordsOrderBy: {},
        RecordCondition: {
            id: [5],
            idUser: [5],
            time: [26],
            gameVersion: [8],
            isValid: [9],
            idLevel: [5],
            modVersion: [8],
            dateCreated: [6],
            dateUpdated: [6],
            splits: [26],
            speeds: [26],
            __typename: [8]
        },
        StatsGlobalsConnection: {
            nodes: [135],
            edges: [136],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        StatsGlobal: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        StatsGlobalsEdge: {
            cursor: [11],
            node: [135],
            __typename: [8]
        },
        StatsGlobalsOrderBy: {},
        StatsGlobalCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            value: [10],
            __typename: [8]
        },
        UpvotesConnection: {
            nodes: [140],
            edges: [141],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        Upvote: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        UpvotesEdge: {
            cursor: [11],
            node: [140],
            __typename: [8]
        },
        UpvotesOrderBy: {},
        UpvoteCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        WorldRecordGlobalsConnection: {
            nodes: [145],
            edges: [146],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordGlobal: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            recordByIdRecord: [110],
            levelByIdLevel: [111],
            __typename: [8]
        },
        WorldRecordGlobalsEdge: {
            cursor: [11],
            node: [145],
            __typename: [8]
        },
        WorldRecordGlobalsOrderBy: {},
        WorldRecordGlobalCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        PersonalBestYearliesConnection: {
            nodes: [150],
            edges: [151],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestYearly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            recordByIdRecord: [110],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        PersonalBestYearliesEdge: {
            cursor: [11],
            node: [150],
            __typename: [8]
        },
        PersonalBestYearliesOrderBy: {},
        PersonalBestYearlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        PersonalBestMonthliesConnection: {
            nodes: [155],
            edges: [156],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestMonthly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            recordByIdRecord: [110],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        PersonalBestMonthliesEdge: {
            cursor: [11],
            node: [155],
            __typename: [8]
        },
        PersonalBestMonthliesOrderBy: {},
        PersonalBestMonthlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        PersonalBestWeekliesConnection: {
            nodes: [160],
            edges: [161],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestWeekly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            recordByIdRecord: [110],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        PersonalBestWeekliesEdge: {
            cursor: [11],
            node: [160],
            __typename: [8]
        },
        PersonalBestWeekliesOrderBy: {},
        PersonalBestWeeklyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        PersonalBestDailiesConnection: {
            nodes: [165],
            edges: [166],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestDaily: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            recordByIdRecord: [110],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        PersonalBestDailiesEdge: {
            cursor: [11],
            node: [165],
            __typename: [8]
        },
        PersonalBestDailiesOrderBy: {},
        PersonalBestDailyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        WorldRecordMonthliesConnection: {
            nodes: [170],
            edges: [171],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordMonthly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            recordByIdRecord: [110],
            levelByIdLevel: [111],
            __typename: [8]
        },
        WorldRecordMonthliesEdge: {
            cursor: [11],
            node: [170],
            __typename: [8]
        },
        WorldRecordMonthliesOrderBy: {},
        WorldRecordMonthlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        WorldRecordYearliesConnection: {
            nodes: [175],
            edges: [176],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordYearly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            recordByIdRecord: [110],
            levelByIdLevel: [111],
            __typename: [8]
        },
        WorldRecordYearliesEdge: {
            cursor: [11],
            node: [175],
            __typename: [8]
        },
        WorldRecordYearliesOrderBy: {},
        WorldRecordYearlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        WorldRecordWeekliesConnection: {
            nodes: [180],
            edges: [181],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordWeekly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            recordByIdRecord: [110],
            levelByIdLevel: [111],
            __typename: [8]
        },
        WorldRecordWeekliesEdge: {
            cursor: [11],
            node: [180],
            __typename: [8]
        },
        WorldRecordWeekliesOrderBy: {},
        WorldRecordWeeklyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        WorldRecordDailiesConnection: {
            nodes: [185],
            edges: [186],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordDaily: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            recordByIdRecord: [110],
            levelByIdLevel: [111],
            __typename: [8]
        },
        WorldRecordDailiesEdge: {
            cursor: [11],
            node: [185],
            __typename: [8]
        },
        WorldRecordDailiesOrderBy: {},
        WorldRecordDailyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        StatsMonthliesConnection: {
            nodes: [190],
            edges: [191],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        StatsMonthly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        StatsMonthliesEdge: {
            cursor: [11],
            node: [190],
            __typename: [8]
        },
        StatsMonthliesOrderBy: {},
        StatsMonthlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            value: [10],
            __typename: [8]
        },
        StatsYearliesConnection: {
            nodes: [195],
            edges: [196],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        StatsYearly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        StatsYearliesEdge: {
            cursor: [11],
            node: [195],
            __typename: [8]
        },
        StatsYearliesOrderBy: {},
        StatsYearlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            value: [10],
            __typename: [8]
        },
        StatsWeekliesConnection: {
            nodes: [200],
            edges: [201],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        StatsWeekly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        StatsWeekliesEdge: {
            cursor: [11],
            node: [200],
            __typename: [8]
        },
        StatsWeekliesOrderBy: {},
        StatsWeeklyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            value: [10],
            __typename: [8]
        },
        StatsDailiesConnection: {
            nodes: [205],
            edges: [206],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        StatsDaily: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        StatsDailiesEdge: {
            cursor: [11],
            node: [205],
            __typename: [8]
        },
        StatsDailiesOrderBy: {},
        StatsDailyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            value: [10],
            __typename: [8]
        },
        PersonalBestQuarterliesConnection: {
            nodes: [210],
            edges: [211],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        PersonalBestQuarterly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            recordByIdRecord: [110],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        PersonalBestQuarterliesEdge: {
            cursor: [11],
            node: [210],
            __typename: [8]
        },
        PersonalBestQuarterliesOrderBy: {},
        PersonalBestQuarterlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        StatsQuarterliesConnection: {
            nodes: [215],
            edges: [216],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        StatsQuarterly: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            value: [10],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        StatsQuarterliesEdge: {
            cursor: [11],
            node: [215],
            __typename: [8]
        },
        StatsQuarterliesOrderBy: {},
        StatsQuarterlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            value: [10],
            __typename: [8]
        },
        WorldRecordQuarterliesConnection: {
            nodes: [220],
            edges: [221],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        WorldRecordQuarterly: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            recordByIdRecord: [110],
            levelByIdLevel: [111],
            __typename: [8]
        },
        WorldRecordQuarterliesEdge: {
            cursor: [11],
            node: [220],
            __typename: [8]
        },
        WorldRecordQuarterliesOrderBy: {},
        WorldRecordQuarterlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        VotesConnection: {
            nodes: [225],
            edges: [226],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        Vote: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            idLevel: [5],
            value: [5],
            dateCreated: [6],
            dateUpdated: [6],
            userByIdUser: [7],
            levelByIdLevel: [111],
            __typename: [8]
        },
        VotesEdge: {
            cursor: [11],
            node: [225],
            __typename: [8]
        },
        VotesOrderBy: {},
        VoteCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            value: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        RecordMediasConnection: {
            nodes: [230],
            edges: [231],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        RecordMedia: {
            nodeId: [2],
            id: [5],
            idRecord: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            recordByIdRecord: [110],
            __typename: [8]
        },
        RecordMediasEdge: {
            cursor: [11],
            node: [230],
            __typename: [8]
        },
        RecordMediasOrderBy: {},
        RecordMediaCondition: {
            id: [5],
            idRecord: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        PersonalBestGlobalsEdge: {
            cursor: [11],
            node: [109],
            __typename: [8]
        },
        UserPointsConnection: {
            nodes: [236],
            edges: [237],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        UserPoint: {
            nodeId: [2],
            id: [5],
            idUser: [5],
            points: [5],
            dateCreated: [6],
            dateUpdated: [6],
            rank: [5],
            worldRecords: [5],
            userByIdUser: [7],
            __typename: [8]
        },
        UserPointsEdge: {
            cursor: [11],
            node: [236],
            __typename: [8]
        },
        UserPointsOrderBy: {},
        UserPointCondition: {
            id: [5],
            idUser: [5],
            points: [5],
            dateCreated: [6],
            dateUpdated: [6],
            rank: [5],
            worldRecords: [5],
            __typename: [8]
        },
        FavoritesEdge: {
            cursor: [11],
            node: [4],
            __typename: [8]
        },
        LevelsConnection: {
            nodes: [111],
            edges: [242],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        LevelsEdge: {
            cursor: [11],
            node: [111],
            __typename: [8]
        },
        LevelsOrderBy: {},
        LevelCondition: {
            id: [5],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelRequestsConnection: {
            nodes: [246],
            edges: [247],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        LevelRequest: {
            nodeId: [2],
            id: [5],
            workshopId: [10],
            uid: [8],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelRequestsEdge: {
            cursor: [11],
            node: [246],
            __typename: [8]
        },
        LevelRequestsOrderBy: {},
        LevelRequestCondition: {
            id: [5],
            workshopId: [10],
            uid: [8],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        LevelRequestFilter: {
            id: [15],
            workshopId: [20],
            uid: [18],
            hash: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [250],
            or: [250],
            not: [250],
            __typename: [8]
        },
        SampledFavoritesConnection: {
            nodes: [252],
            edges: [253],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledFavorite: {
            id: [5],
            idUser: [5],
            dateCreated: [6],
            dateUpdated: [6],
            idLevel: [5],
            __typename: [8]
        },
        SampledFavoritesEdge: {
            cursor: [11],
            node: [252],
            __typename: [8]
        },
        SampledFavoritesOrderBy: {},
        SampledFavoriteCondition: {
            id: [5],
            idUser: [5],
            dateCreated: [6],
            dateUpdated: [6],
            idLevel: [5],
            __typename: [8]
        },
        SampledFavoriteFilter: {
            id: [15],
            idUser: [15],
            dateCreated: [16],
            dateUpdated: [16],
            idLevel: [15],
            and: [256],
            or: [256],
            not: [256],
            __typename: [8]
        },
        SampledLevelsConnection: {
            nodes: [258],
            edges: [259],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledLevel: {
            id: [5],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelsEdge: {
            cursor: [11],
            node: [258],
            __typename: [8]
        },
        SampledLevelsOrderBy: {},
        SampledLevelCondition: {
            id: [5],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelFilter: {
            id: [15],
            hash: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [262],
            or: [262],
            not: [262],
            __typename: [8]
        },
        SampledLevelItemsConnection: {
            nodes: [264],
            edges: [265],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledLevelItem: {
            id: [5],
            idLevel: [5],
            workshopId: [10],
            authorId: [10],
            name: [8],
            imageUrl: [8],
            fileAuthor: [8],
            fileUid: [8],
            validationTimeAuthor: [26],
            validationTimeGold: [26],
            validationTimeSilver: [26],
            validationTimeBronze: [26],
            deleted: [9],
            createdAt: [6],
            updatedAt: [6],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelItemsEdge: {
            cursor: [11],
            node: [264],
            __typename: [8]
        },
        SampledLevelItemsOrderBy: {},
        SampledLevelItemCondition: {
            id: [5],
            idLevel: [5],
            workshopId: [10],
            authorId: [10],
            name: [8],
            imageUrl: [8],
            fileAuthor: [8],
            fileUid: [8],
            validationTimeAuthor: [26],
            validationTimeGold: [26],
            validationTimeSilver: [26],
            validationTimeBronze: [26],
            deleted: [9],
            createdAt: [6],
            updatedAt: [6],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelItemFilter: {
            id: [15],
            idLevel: [15],
            workshopId: [20],
            authorId: [20],
            name: [18],
            imageUrl: [18],
            fileAuthor: [18],
            fileUid: [18],
            validationTimeAuthor: [25],
            validationTimeGold: [25],
            validationTimeSilver: [25],
            validationTimeBronze: [25],
            deleted: [19],
            createdAt: [16],
            updatedAt: [16],
            dateCreated: [16],
            dateUpdated: [16],
            and: [268],
            or: [268],
            not: [268],
            __typename: [8]
        },
        SampledLevelMetadataConnection: {
            nodes: [270],
            edges: [271],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledLevelMetadatum: {
            id: [5],
            idLevel: [5],
            amountCheckpoints: [5],
            amountFinishes: [5],
            amountBlocks: [5],
            typeGround: [5],
            typeSkybox: [5],
            blocks: [42],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelMetadataEdge: {
            cursor: [11],
            node: [270],
            __typename: [8]
        },
        SampledLevelMetadataOrderBy: {},
        SampledLevelMetadatumCondition: {
            id: [5],
            idLevel: [5],
            amountCheckpoints: [5],
            amountFinishes: [5],
            amountBlocks: [5],
            typeGround: [5],
            typeSkybox: [5],
            blocks: [42],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelMetadatumFilter: {
            id: [15],
            idLevel: [15],
            amountCheckpoints: [15],
            amountFinishes: [15],
            amountBlocks: [15],
            typeGround: [15],
            typeSkybox: [15],
            blocks: [41],
            dateCreated: [16],
            dateUpdated: [16],
            and: [274],
            or: [274],
            not: [274],
            __typename: [8]
        },
        SampledLevelPointsConnection: {
            nodes: [276],
            edges: [277],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledLevelPoint: {
            id: [5],
            points: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelPointsEdge: {
            cursor: [11],
            node: [276],
            __typename: [8]
        },
        SampledLevelPointsOrderBy: {},
        SampledLevelPointCondition: {
            id: [5],
            points: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelPointFilter: {
            id: [15],
            points: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            and: [280],
            or: [280],
            not: [280],
            __typename: [8]
        },
        SampledLevelRequestsConnection: {
            nodes: [282],
            edges: [283],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledLevelRequest: {
            id: [5],
            workshopId: [10],
            uid: [8],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelRequestsEdge: {
            cursor: [11],
            node: [282],
            __typename: [8]
        },
        SampledLevelRequestsOrderBy: {},
        SampledLevelRequestCondition: {
            id: [5],
            workshopId: [10],
            uid: [8],
            hash: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledLevelRequestFilter: {
            id: [15],
            workshopId: [20],
            uid: [18],
            hash: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [286],
            or: [286],
            not: [286],
            __typename: [8]
        },
        SampledPersonalBestDailiesConnection: {
            nodes: [288],
            edges: [289],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledPersonalBestDaily: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        SampledPersonalBestDailiesEdge: {
            cursor: [11],
            node: [288],
            __typename: [8]
        },
        SampledPersonalBestDailiesOrderBy: {},
        SampledPersonalBestDailyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        SampledPersonalBestDailyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            and: [292],
            or: [292],
            not: [292],
            __typename: [8]
        },
        SampledPersonalBestGlobalsConnection: {
            nodes: [294],
            edges: [295],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledPersonalBestGlobal: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledPersonalBestGlobalsEdge: {
            cursor: [11],
            node: [294],
            __typename: [8]
        },
        SampledPersonalBestGlobalsOrderBy: {},
        SampledPersonalBestGlobalCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledPersonalBestGlobalFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            and: [298],
            or: [298],
            not: [298],
            __typename: [8]
        },
        SampledPersonalBestMonthliesConnection: {
            nodes: [300],
            edges: [301],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledPersonalBestMonthly: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        SampledPersonalBestMonthliesEdge: {
            cursor: [11],
            node: [300],
            __typename: [8]
        },
        SampledPersonalBestMonthliesOrderBy: {},
        SampledPersonalBestMonthlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        SampledPersonalBestMonthlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            and: [304],
            or: [304],
            not: [304],
            __typename: [8]
        },
        SampledPersonalBestQuarterliesConnection: {
            nodes: [306],
            edges: [307],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledPersonalBestQuarterly: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        SampledPersonalBestQuarterliesEdge: {
            cursor: [11],
            node: [306],
            __typename: [8]
        },
        SampledPersonalBestQuarterliesOrderBy: {},
        SampledPersonalBestQuarterlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        SampledPersonalBestQuarterlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            and: [310],
            or: [310],
            not: [310],
            __typename: [8]
        },
        SampledPersonalBestWeekliesConnection: {
            nodes: [312],
            edges: [313],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledPersonalBestWeekly: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        SampledPersonalBestWeekliesEdge: {
            cursor: [11],
            node: [312],
            __typename: [8]
        },
        SampledPersonalBestWeekliesOrderBy: {},
        SampledPersonalBestWeeklyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        SampledPersonalBestWeeklyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            and: [316],
            or: [316],
            not: [316],
            __typename: [8]
        },
        SampledPersonalBestYearliesConnection: {
            nodes: [318],
            edges: [319],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledPersonalBestYearly: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        SampledPersonalBestYearliesEdge: {
            cursor: [11],
            node: [318],
            __typename: [8]
        },
        SampledPersonalBestYearliesOrderBy: {},
        SampledPersonalBestYearlyCondition: {
            id: [5],
            idRecord: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        SampledPersonalBestYearlyFilter: {
            id: [15],
            idRecord: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            and: [322],
            or: [322],
            not: [322],
            __typename: [8]
        },
        SampledRecordsConnection: {
            nodes: [324],
            edges: [325],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledRecord: {
            id: [5],
            idUser: [5],
            time: [26],
            gameVersion: [8],
            isValid: [9],
            idLevel: [5],
            modVersion: [8],
            dateCreated: [6],
            dateUpdated: [6],
            splits: [26],
            speeds: [26],
            __typename: [8]
        },
        SampledRecordsEdge: {
            cursor: [11],
            node: [324],
            __typename: [8]
        },
        SampledRecordsOrderBy: {},
        SampledRecordCondition: {
            id: [5],
            idUser: [5],
            time: [26],
            gameVersion: [8],
            isValid: [9],
            idLevel: [5],
            modVersion: [8],
            dateCreated: [6],
            dateUpdated: [6],
            splits: [26],
            speeds: [26],
            __typename: [8]
        },
        SampledRecordFilter: {
            id: [15],
            idUser: [15],
            time: [25],
            gameVersion: [18],
            isValid: [19],
            idLevel: [15],
            modVersion: [18],
            dateCreated: [16],
            dateUpdated: [16],
            splits: [27],
            speeds: [27],
            and: [328],
            or: [328],
            not: [328],
            __typename: [8]
        },
        SampledRecordMediasConnection: {
            nodes: [330],
            edges: [331],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledRecordMedia: {
            id: [5],
            idRecord: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledRecordMediasEdge: {
            cursor: [11],
            node: [330],
            __typename: [8]
        },
        SampledRecordMediasOrderBy: {},
        SampledRecordMediaCondition: {
            id: [5],
            idRecord: [5],
            ghostUrl: [8],
            screenshotUrl: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledRecordMediaFilter: {
            id: [15],
            idRecord: [15],
            ghostUrl: [18],
            screenshotUrl: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [334],
            or: [334],
            not: [334],
            __typename: [8]
        },
        SampledStatsDailiesConnection: {
            nodes: [336],
            edges: [337],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledStatsDaily: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsDailiesEdge: {
            cursor: [11],
            node: [336],
            __typename: [8]
        },
        SampledStatsDailiesOrderBy: {},
        SampledStatsDailyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsDailyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            value: [20],
            and: [340],
            or: [340],
            not: [340],
            __typename: [8]
        },
        SampledStatsGlobalsConnection: {
            nodes: [342],
            edges: [343],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledStatsGlobal: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            value: [10],
            __typename: [8]
        },
        SampledStatsGlobalsEdge: {
            cursor: [11],
            node: [342],
            __typename: [8]
        },
        SampledStatsGlobalsOrderBy: {},
        SampledStatsGlobalCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            value: [10],
            __typename: [8]
        },
        SampledStatsGlobalFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            value: [20],
            and: [346],
            or: [346],
            not: [346],
            __typename: [8]
        },
        SampledStatsMonthliesConnection: {
            nodes: [348],
            edges: [349],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledStatsMonthly: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsMonthliesEdge: {
            cursor: [11],
            node: [348],
            __typename: [8]
        },
        SampledStatsMonthliesOrderBy: {},
        SampledStatsMonthlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsMonthlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            value: [20],
            and: [352],
            or: [352],
            not: [352],
            __typename: [8]
        },
        SampledStatsQuarterliesConnection: {
            nodes: [354],
            edges: [355],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledStatsQuarterly: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsQuarterliesEdge: {
            cursor: [11],
            node: [354],
            __typename: [8]
        },
        SampledStatsQuarterliesOrderBy: {},
        SampledStatsQuarterlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsQuarterlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            value: [20],
            and: [358],
            or: [358],
            not: [358],
            __typename: [8]
        },
        SampledStatsWeekliesConnection: {
            nodes: [360],
            edges: [361],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledStatsWeekly: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsWeekliesEdge: {
            cursor: [11],
            node: [360],
            __typename: [8]
        },
        SampledStatsWeekliesOrderBy: {},
        SampledStatsWeeklyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsWeeklyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            value: [20],
            and: [364],
            or: [364],
            not: [364],
            __typename: [8]
        },
        SampledStatsYearliesConnection: {
            nodes: [366],
            edges: [367],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledStatsYearly: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsYearliesEdge: {
            cursor: [11],
            node: [366],
            __typename: [8]
        },
        SampledStatsYearliesOrderBy: {},
        SampledStatsYearlyCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            key: [8],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            value: [10],
            __typename: [8]
        },
        SampledStatsYearlyFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            key: [18],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            value: [20],
            and: [370],
            or: [370],
            not: [370],
            __typename: [8]
        },
        SampledUpvotesConnection: {
            nodes: [372],
            edges: [373],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledUpvote: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledUpvotesEdge: {
            cursor: [11],
            node: [372],
            __typename: [8]
        },
        SampledUpvotesOrderBy: {},
        SampledUpvoteCondition: {
            id: [5],
            idUser: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledUpvoteFilter: {
            id: [15],
            idUser: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            and: [376],
            or: [376],
            not: [376],
            __typename: [8]
        },
        SampledUsersConnection: {
            nodes: [378],
            edges: [379],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledUser: {
            id: [5],
            steamName: [8],
            banned: [9],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [10],
            discordId: [10],
            __typename: [8]
        },
        SampledUsersEdge: {
            cursor: [11],
            node: [378],
            __typename: [8]
        },
        SampledUsersOrderBy: {},
        SampledUserCondition: {
            id: [5],
            steamName: [8],
            banned: [9],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [10],
            discordId: [10],
            __typename: [8]
        },
        SampledUserFilter: {
            id: [15],
            steamName: [18],
            banned: [19],
            dateCreated: [16],
            dateUpdated: [16],
            steamId: [20],
            discordId: [20],
            and: [382],
            or: [382],
            not: [382],
            __typename: [8]
        },
        SampledUserPointsConnection: {
            nodes: [384],
            edges: [385],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledUserPoint: {
            id: [5],
            idUser: [5],
            points: [5],
            dateCreated: [6],
            dateUpdated: [6],
            rank: [5],
            worldRecords: [5],
            __typename: [8]
        },
        SampledUserPointsEdge: {
            cursor: [11],
            node: [384],
            __typename: [8]
        },
        SampledUserPointsOrderBy: {},
        SampledUserPointCondition: {
            id: [5],
            idUser: [5],
            points: [5],
            dateCreated: [6],
            dateUpdated: [6],
            rank: [5],
            worldRecords: [5],
            __typename: [8]
        },
        SampledUserPointFilter: {
            id: [15],
            idUser: [15],
            points: [15],
            dateCreated: [16],
            dateUpdated: [16],
            rank: [15],
            worldRecords: [15],
            and: [388],
            or: [388],
            not: [388],
            __typename: [8]
        },
        SampledVersionsConnection: {
            nodes: [390],
            edges: [391],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledVersion: {
            id: [5],
            minimum: [8],
            latest: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledVersionsEdge: {
            cursor: [11],
            node: [390],
            __typename: [8]
        },
        SampledVersionsOrderBy: {},
        SampledVersionCondition: {
            id: [5],
            minimum: [8],
            latest: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledVersionFilter: {
            id: [15],
            minimum: [18],
            latest: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [394],
            or: [394],
            not: [394],
            __typename: [8]
        },
        SampledWorldRecordDailiesConnection: {
            nodes: [396],
            edges: [397],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledWorldRecordDaily: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        SampledWorldRecordDailiesEdge: {
            cursor: [11],
            node: [396],
            __typename: [8]
        },
        SampledWorldRecordDailiesOrderBy: {},
        SampledWorldRecordDailyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            day: [5],
            __typename: [8]
        },
        SampledWorldRecordDailyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            day: [15],
            and: [400],
            or: [400],
            not: [400],
            __typename: [8]
        },
        SampledWorldRecordGlobalsConnection: {
            nodes: [402],
            edges: [403],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledWorldRecordGlobal: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledWorldRecordGlobalsEdge: {
            cursor: [11],
            node: [402],
            __typename: [8]
        },
        SampledWorldRecordGlobalsOrderBy: {},
        SampledWorldRecordGlobalCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        SampledWorldRecordGlobalFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            and: [406],
            or: [406],
            not: [406],
            __typename: [8]
        },
        SampledWorldRecordMonthliesConnection: {
            nodes: [408],
            edges: [409],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledWorldRecordMonthly: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        SampledWorldRecordMonthliesEdge: {
            cursor: [11],
            node: [408],
            __typename: [8]
        },
        SampledWorldRecordMonthliesOrderBy: {},
        SampledWorldRecordMonthlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            month: [5],
            __typename: [8]
        },
        SampledWorldRecordMonthlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            month: [15],
            and: [412],
            or: [412],
            not: [412],
            __typename: [8]
        },
        SampledWorldRecordQuarterliesConnection: {
            nodes: [414],
            edges: [415],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledWorldRecordQuarterly: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        SampledWorldRecordQuarterliesEdge: {
            cursor: [11],
            node: [414],
            __typename: [8]
        },
        SampledWorldRecordQuarterliesOrderBy: {},
        SampledWorldRecordQuarterlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            quarter: [5],
            __typename: [8]
        },
        SampledWorldRecordQuarterlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            quarter: [15],
            and: [418],
            or: [418],
            not: [418],
            __typename: [8]
        },
        SampledWorldRecordWeekliesConnection: {
            nodes: [420],
            edges: [421],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledWorldRecordWeekly: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        SampledWorldRecordWeekliesEdge: {
            cursor: [11],
            node: [420],
            __typename: [8]
        },
        SampledWorldRecordWeekliesOrderBy: {},
        SampledWorldRecordWeeklyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            week: [5],
            __typename: [8]
        },
        SampledWorldRecordWeeklyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            week: [15],
            and: [424],
            or: [424],
            not: [424],
            __typename: [8]
        },
        SampledWorldRecordYearliesConnection: {
            nodes: [426],
            edges: [427],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        SampledWorldRecordYearly: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        SampledWorldRecordYearliesEdge: {
            cursor: [11],
            node: [426],
            __typename: [8]
        },
        SampledWorldRecordYearliesOrderBy: {},
        SampledWorldRecordYearlyCondition: {
            id: [5],
            idRecord: [5],
            idLevel: [5],
            dateCreated: [6],
            dateUpdated: [6],
            year: [5],
            __typename: [8]
        },
        SampledWorldRecordYearlyFilter: {
            id: [15],
            idRecord: [15],
            idLevel: [15],
            dateCreated: [16],
            dateUpdated: [16],
            year: [15],
            and: [430],
            or: [430],
            not: [430],
            __typename: [8]
        },
        UsersConnection: {
            nodes: [7],
            edges: [432],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        UsersEdge: {
            cursor: [11],
            node: [7],
            __typename: [8]
        },
        UsersOrderBy: {},
        UserCondition: {
            id: [5],
            steamName: [8],
            banned: [9],
            dateCreated: [6],
            dateUpdated: [6],
            steamId: [10],
            discordId: [10],
            __typename: [8]
        },
        VersionsConnection: {
            nodes: [436],
            edges: [437],
            pageInfo: [115],
            totalCount: [5],
            __typename: [8]
        },
        Version: {
            nodeId: [2],
            id: [5],
            minimum: [8],
            latest: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        VersionsEdge: {
            cursor: [11],
            node: [436],
            __typename: [8]
        },
        VersionsOrderBy: {},
        VersionCondition: {
            id: [5],
            minimum: [8],
            latest: [8],
            dateCreated: [6],
            dateUpdated: [6],
            __typename: [8]
        },
        VersionFilter: {
            id: [15],
            minimum: [18],
            latest: [18],
            dateCreated: [16],
            dateUpdated: [16],
            and: [440],
            or: [440],
            not: [440],
            __typename: [8]
        },
        ZRtmConnection: {
            nodes: [442],
            edges: [444],
            totalCount: [5],
            __typename: [8]
        },
        ZRtmRecord: {
            id: [5],
            idLevel: [5],
            workshopId: [10],
            authorId: [10],
            name: [8],
            imageUrl: [8],
            fileAuthor: [8],
            fileUid: [8],
            validationTimeAuthor: [26],
            validationTimeGold: [26],
            validationTimeSilver: [26],
            validationTimeBronze: [26],
            deleted: [9],
            createdAt: [6],
            updatedAt: [6],
            dateCreated: [6],
            dateUpdated: [6],
            amountCheckpoints: [5],
            amountFinishes: [5],
            amountBlocks: [5],
            numRecords: [443],
            __typename: [8]
        },
        BigInt: {},
        ZRtmEdge: {
            cursor: [11],
            node: [442],
            __typename: [8]
        },
        ZRtmRecordFilter: {
            id: [15],
            idLevel: [15],
            workshopId: [20],
            authorId: [20],
            name: [18],
            imageUrl: [18],
            fileAuthor: [18],
            fileUid: [18],
            validationTimeAuthor: [25],
            validationTimeGold: [25],
            validationTimeSilver: [25],
            validationTimeBronze: [25],
            deleted: [19],
            createdAt: [16],
            updatedAt: [16],
            dateCreated: [16],
            dateUpdated: [16],
            amountCheckpoints: [15],
            amountFinishes: [15],
            amountBlocks: [15],
            numRecords: [446],
            and: [445],
            or: [445],
            not: [445],
            __typename: [8]
        },
        BigIntFilter: {
            isNull: [9],
            equalTo: [443],
            notEqualTo: [443],
            distinctFrom: [443],
            notDistinctFrom: [443],
            in: [443],
            notIn: [443],
            lessThan: [443],
            lessThanOrEqualTo: [443],
            greaterThan: [443],
            greaterThanOrEqualTo: [443],
            __typename: [8]
        },
        Mutation: {
            updateWorldRecordGlobal: [
                448,
                {
                    input: [449, 'UpdateWorldRecordGlobalInput!']
                }
            ],
            __typename: [8]
        },
        UpdateWorldRecordGlobalPayload: {
            clientMutationId: [8],
            query: [0],
            __typename: [8]
        },
        UpdateWorldRecordGlobalInput: {
            clientMutationId: [8],
            __typename: [8]
        }
    }
}
