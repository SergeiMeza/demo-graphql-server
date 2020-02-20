import { GraphQLResolveInfo } from "graphql"
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AppleMusicAlbum = {
  __typename?: "AppleMusicAlbum"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicAlbumAttributes>
  relationships?: Maybe<AppleMusicAlbumRelationships>
  type: Scalars["String"]
}

export type AppleMusicAlbumAttributes = {
  __typename?: "AppleMusicAlbumAttributes"
  artistName?: Maybe<Scalars["String"]>
  artwork?: Maybe<AppleMusicArtwork>
  contentRating?: Maybe<Scalars["String"]>
  copyright?: Maybe<Scalars["String"]>
  editorialNotes?: Maybe<AppleMusicEditorialNotes>
  genreNames?: Maybe<Array<Scalars["String"]>>
  isComplete?: Maybe<Scalars["Boolean"]>
  isSingle?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  playParams?: Maybe<AppleMusicPlayParameters>
  recordLabel?: Maybe<Scalars["String"]>
  releaseDate?: Maybe<Scalars["String"]>
  trackCount?: Maybe<Scalars["Int"]>
  url?: Maybe<Scalars["String"]>
  isMasteredForItunes?: Maybe<Scalars["Boolean"]>
}

export type AppleMusicAlbumRelationship = {
  __typename?: "AppleMusicAlbumRelationship"
  data?: Maybe<Array<AppleMusicAlbum>>
}

export type AppleMusicAlbumRelationships = {
  __typename?: "AppleMusicAlbumRelationships"
  artists?: Maybe<AppleMusicArtistRelationship>
  genres?: Maybe<AppleMusicGenreRelationship>
  tracks?: Maybe<AppleMusicTrackRelationship>
}

export type AppleMusicAlbumResponse = {
  __typename?: "AppleMusicAlbumResponse"
  data?: Maybe<Array<AppleMusicAlbum>>
}

export type AppleMusicAllStorefrontsInput = {
  l?: Maybe<Scalars["String"]>
}

export type AppleMusicAppleCurator = {
  __typename?: "AppleMusicAppleCurator"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicAppleCuratorAttributes>
  relationships?: Maybe<AppleMusicAppleCuratorRelationships>
  type: Scalars["String"]
}

export type AppleMusicAppleCuratorAttributes = {
  __typename?: "AppleMusicAppleCuratorAttributes"
  artwork?: Maybe<AppleMusicArtwork>
  editorialNotes?: Maybe<AppleMusicEditorialNotes>
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type AppleMusicAppleCuratorRelationships = {
  __typename?: "AppleMusicAppleCuratorRelationships"
  playlists?: Maybe<AppleMusicPlaylistRelationship>
}

export type AppleMusicAppleCuratorResponse = {
  __typename?: "AppleMusicAppleCuratorResponse"
  data?: Maybe<Array<AppleMusicAppleCurator>>
}

export type AppleMusicArtist = {
  __typename?: "AppleMusicArtist"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicArtistAttributes>
  relationships?: Maybe<AppleMusicArtistRelationships>
  type: Scalars["String"]
}

export type AppleMusicArtistAttributes = {
  __typename?: "AppleMusicArtistAttributes"
  editorialNotes?: Maybe<AppleMusicEditorialNotes>
  genreNames?: Maybe<Array<Scalars["String"]>>
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type AppleMusicArtistRelationship = {
  __typename?: "AppleMusicArtistRelationship"
  data?: Maybe<Array<AppleMusicArtist>>
}

export type AppleMusicArtistRelationships = {
  __typename?: "AppleMusicArtistRelationships"
  albums?: Maybe<AppleMusicAlbumRelationship>
  genres?: Maybe<AppleMusicGenreRelationship>
  musicVideos?: Maybe<AppleMusicMusicVideoRelationship>
  playlists?: Maybe<AppleMusicPlaylistRelationship>
  station?: Maybe<AppleMusicStationRelationship>
}

export type AppleMusicArtistResponse = {
  __typename?: "AppleMusicArtistResponse"
  data?: Maybe<Array<AppleMusicArtist>>
}

export type AppleMusicArtwork = {
  __typename?: "AppleMusicArtwork"
  bgColor?: Maybe<Scalars["String"]>
  height?: Maybe<Scalars["Int"]>
  width?: Maybe<Scalars["Int"]>
  textColor1?: Maybe<Scalars["String"]>
  textColor2?: Maybe<Scalars["String"]>
  textColor3?: Maybe<Scalars["String"]>
  textColor4?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type AppleMusicChart = {
  __typename?: "AppleMusicChart"
  name?: Maybe<Scalars["String"]>
  chart: Scalars["String"]
  href?: Maybe<Scalars["String"]>
  next?: Maybe<Scalars["String"]>
  data?: Maybe<Array<AppleMusicResource>>
}

export type AppleMusicChartInput = {
  storefront: Scalars["String"]
  types: Array<Scalars["String"]>
  l?: Maybe<Scalars["String"]>
  chart?: Maybe<Scalars["String"]>
  genre?: Maybe<Scalars["String"]>
  limit?: Maybe<Scalars["Int"]>
  offset?: Maybe<Scalars["Int"]>
}

export type AppleMusicChartResponse = {
  __typename?: "AppleMusicChartResponse"
  albums?: Maybe<Array<AppleMusicChart>>
  musicVideos?: Maybe<Array<AppleMusicChart>>
  songs?: Maybe<Array<AppleMusicChart>>
  playlists?: Maybe<Array<AppleMusicChart>>
}

export type AppleMusicCurator = {
  __typename?: "AppleMusicCurator"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicCuratorAttributes>
  relationships?: Maybe<AppleMusicCuratorRelationships>
  type: Scalars["String"]
}

export type AppleMusicCuratorAttributes = {
  __typename?: "AppleMusicCuratorAttributes"
  artwork?: Maybe<AppleMusicArtwork>
  editorialNotes?: Maybe<AppleMusicEditorialNotes>
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type AppleMusicCuratorRelationship = {
  __typename?: "AppleMusicCuratorRelationship"
  data?: Maybe<Array<AppleMusicCurator>>
}

export type AppleMusicCuratorRelationships = {
  __typename?: "AppleMusicCuratorRelationships"
  playlists?: Maybe<AppleMusicPlaylistRelationship>
}

export type AppleMusicCuratorResponse = {
  __typename?: "AppleMusicCuratorResponse"
  data?: Maybe<Array<AppleMusicCurator>>
}

export type AppleMusicEditorialNotes = {
  __typename?: "AppleMusicEditorialNotes"
  short?: Maybe<Scalars["String"]>
  standard?: Maybe<Scalars["String"]>
}

export type AppleMusicGenre = {
  __typename?: "AppleMusicGenre"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicGenreAttributes>
  type: Scalars["String"]
}

export type AppleMusicGenreAttributes = {
  __typename?: "AppleMusicGenreAttributes"
  name?: Maybe<Scalars["String"]>
}

export type AppleMusicGenreRelationship = {
  __typename?: "AppleMusicGenreRelationship"
  data?: Maybe<Array<AppleMusicGenre>>
}

export type AppleMusicGenreResponse = {
  __typename?: "AppleMusicGenreResponse"
  data?: Maybe<Array<AppleMusicGenre>>
}

export type AppleMusicMusicVideo = {
  __typename?: "AppleMusicMusicVideo"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicMusicVideoAttributes>
  relationships?: Maybe<AppleMusicMusicVideoRelationships>
  type: Scalars["String"]
}

export type AppleMusicMusicVideoAttributes = {
  __typename?: "AppleMusicMusicVideoAttributes"
  albumName?: Maybe<Scalars["String"]>
  artistName?: Maybe<Scalars["String"]>
  artwork?: Maybe<AppleMusicArtwork>
  contentRating?: Maybe<Scalars["String"]>
  durationInMillis?: Maybe<Scalars["Int"]>
  editorialNotes?: Maybe<AppleMusicEditorialNotes>
  genreNames?: Maybe<Array<Scalars["String"]>>
  isrc?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  playParams?: Maybe<AppleMusicPlayParameters>
  previews?: Maybe<Array<AppleMusicPreview>>
  releaseDate?: Maybe<Scalars["String"]>
  trackNumber?: Maybe<Scalars["Int"]>
  url?: Maybe<Scalars["String"]>
  videoSubType?: Maybe<Scalars["String"]>
  hasHDR?: Maybe<Scalars["Boolean"]>
  has4K?: Maybe<Scalars["Boolean"]>
}

export type AppleMusicMusicVideoRelationship = {
  __typename?: "AppleMusicMusicVideoRelationship"
  data?: Maybe<Array<AppleMusicMusicVideo>>
}

export type AppleMusicMusicVideoRelationships = {
  __typename?: "AppleMusicMusicVideoRelationships"
  albums?: Maybe<AppleMusicAlbumRelationship>
  artists?: Maybe<AppleMusicArtistRelationship>
  genres?: Maybe<AppleMusicGenreRelationship>
}

export type AppleMusicMusicVideoResponse = {
  __typename?: "AppleMusicMusicVideoResponse"
  data?: Maybe<Array<AppleMusicMusicVideo>>
}

export type AppleMusicPlaylist = {
  __typename?: "AppleMusicPlaylist"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicPlaylistAttributes>
  relationships?: Maybe<AppleMusicPlaylistRelationships>
  type: Scalars["String"]
}

export type AppleMusicPlaylistAttributes = {
  __typename?: "AppleMusicPlaylistAttributes"
  artwork?: Maybe<AppleMusicArtwork>
  curatorName?: Maybe<Scalars["String"]>
  description?: Maybe<AppleMusicEditorialNotes>
  lastModifiedDate?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  playParams?: Maybe<AppleMusicPlayParameters>
  playlistType?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type AppleMusicPlaylistRelationship = {
  __typename?: "AppleMusicPlaylistRelationship"
  data?: Maybe<Array<AppleMusicPlaylist>>
}

export type AppleMusicPlaylistRelationships = {
  __typename?: "AppleMusicPlaylistRelationships"
  curator?: Maybe<AppleMusicCuratorRelationship>
  tracks?: Maybe<AppleMusicTrackRelationship>
}

export type AppleMusicPlaylistResponse = {
  __typename?: "AppleMusicPlaylistResponse"
  data?: Maybe<Array<AppleMusicPlaylist>>
}

export type AppleMusicPlayParameters = {
  __typename?: "AppleMusicPlayParameters"
  id?: Maybe<Scalars["String"]>
  kind?: Maybe<Scalars["String"]>
}

export type AppleMusicPreview = {
  __typename?: "AppleMusicPreview"
  artwork?: Maybe<AppleMusicArtwork>
  url?: Maybe<Scalars["String"]>
  hlsUrl?: Maybe<Scalars["String"]>
}

export type AppleMusicRelationshipInput = {
  id: Scalars["String"]
  relationship: Scalars["String"]
  storefront: Scalars["String"]
  l?: Maybe<Scalars["String"]>
  limit?: Maybe<Scalars["Int"]>
}

export type AppleMusicResource =
  | AppleMusicAlbum
  | AppleMusicArtist
  | AppleMusicSong
  | AppleMusicMusicVideo
  | AppleMusicPlaylist
  | AppleMusicStation
  | AppleMusicGenre
  | AppleMusicCurator
  | AppleMusicAppleCurator

export type AppleMusicResourceInput = {
  ids: Array<Scalars["String"]>
  storefront: Scalars["String"]
  include?: Maybe<Array<Scalars["String"]>>
  l?: Maybe<Scalars["String"]>
}

export type AppleMusicResourcePaginationInput = {
  storefront: Scalars["String"]
  l?: Maybe<Scalars["String"]>
  limit?: Maybe<Scalars["Int"]>
  offset?: Maybe<Scalars["String"]>
}

export type AppleMusicResourceResponse = {
  __typename?: "AppleMusicResourceResponse"
  data?: Maybe<Array<AppleMusicResource>>
}

export type AppleMusicSearchHints = {
  __typename?: "AppleMusicSearchHints"
  terms?: Maybe<Array<Scalars["String"]>>
}

export type AppleMusicSearchHintsResponse = {
  __typename?: "AppleMusicSearchHintsResponse"
  results?: Maybe<AppleMusicSearchHints>
}

export type AppleMusicSearchInput = {
  storefront: Scalars["String"]
  term: Scalars["String"]
  l?: Maybe<Scalars["String"]>
  limit?: Maybe<Scalars["Int"]>
  offset?: Maybe<Scalars["String"]>
  types?: Maybe<Array<Scalars["String"]>>
}

export type AppleMusicSearchResponse = {
  __typename?: "AppleMusicSearchResponse"
  results?: Maybe<AppleMusicSearchResults>
}

export type AppleMusicSearchResults = {
  __typename?: "AppleMusicSearchResults"
  appleCurators?: Maybe<AppleMusicAppleCuratorResponse>
  curators?: Maybe<AppleMusicCuratorResponse>
  playlists?: Maybe<AppleMusicPlaylistResponse>
  albums?: Maybe<AppleMusicAlbumResponse>
  artists?: Maybe<AppleMusicArtistResponse>
  musicVideos?: Maybe<AppleMusicMusicVideoResponse>
  songs?: Maybe<AppleMusicSongResponse>
  stations?: Maybe<AppleMusicStationResponse>
}

export type AppleMusicSong = {
  __typename?: "AppleMusicSong"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicSongAttributes>
  relationships?: Maybe<AppleMusicSongRelationships>
  type: Scalars["String"]
}

export type AppleMusicSongAttributes = {
  __typename?: "AppleMusicSongAttributes"
  albumName?: Maybe<Scalars["String"]>
  artistName?: Maybe<Scalars["String"]>
  artwork?: Maybe<AppleMusicArtwork>
  composerName?: Maybe<Scalars["String"]>
  contentRating?: Maybe<Scalars["String"]>
  discNumber?: Maybe<Scalars["Int"]>
  durationInMillis?: Maybe<Scalars["Int"]>
  editorialNotes?: Maybe<AppleMusicEditorialNotes>
  genreNames?: Maybe<Array<Scalars["String"]>>
  isrc?: Maybe<Scalars["String"]>
  movementCount?: Maybe<Scalars["Int"]>
  movementName?: Maybe<Scalars["String"]>
  movementNumber?: Maybe<Scalars["Int"]>
  name: Scalars["String"]
  playParams?: Maybe<AppleMusicPlayParameters>
  previews?: Maybe<Array<AppleMusicPreview>>
  releaseDate?: Maybe<Scalars["String"]>
  trackNumber?: Maybe<Scalars["Int"]>
  url?: Maybe<Scalars["String"]>
  workName?: Maybe<Scalars["String"]>
}

export type AppleMusicSongRelationships = {
  __typename?: "AppleMusicSongRelationships"
  albums?: Maybe<AppleMusicAlbumRelationship>
  artists?: Maybe<AppleMusicArtistRelationship>
  genres?: Maybe<AppleMusicGenreRelationship>
  station?: Maybe<AppleMusicStationRelationship>
}

export type AppleMusicSongResponse = {
  __typename?: "AppleMusicSongResponse"
  data?: Maybe<Array<AppleMusicSong>>
}

export type AppleMusicStation = {
  __typename?: "AppleMusicStation"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicStationAttributes>
  type: Scalars["String"]
}

export type AppleMusicStationAttributes = {
  __typename?: "AppleMusicStationAttributes"
  artwork?: Maybe<AppleMusicArtwork>
  durationInMillis?: Maybe<Scalars["Int"]>
  editorialNotes?: Maybe<AppleMusicEditorialNotes>
  episodeNumber?: Maybe<Scalars["Int"]>
  isLive?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type AppleMusicStationRelationship = {
  __typename?: "AppleMusicStationRelationship"
  data?: Maybe<AppleMusicStation>
}

export type AppleMusicStationResponse = {
  __typename?: "AppleMusicStationResponse"
  data?: Maybe<Array<AppleMusicStation>>
}

export type AppleMusicStorefront = {
  __typename?: "AppleMusicStorefront"
  id: Scalars["ID"]
  attributes?: Maybe<AppleMusicStorefrontAttributes>
  type: Scalars["String"]
}

export type AppleMusicStorefrontAttributes = {
  __typename?: "AppleMusicStorefrontAttributes"
  defaultLanguageTag?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  supportedLanguageTags?: Maybe<Array<Scalars["String"]>>
}

export type AppleMusicStorefrontResponse = {
  __typename?: "AppleMusicStorefrontResponse"
  data?: Maybe<Array<AppleMusicStorefront>>
}

export type AppleMusicStorefrontsInput = {
  ids: Array<Scalars["String"]>
  l?: Maybe<Scalars["String"]>
}

export type AppleMusicTrack = AppleMusicSong | AppleMusicMusicVideo

export type AppleMusicTrackRelationship = {
  __typename?: "AppleMusicTrackRelationship"
  data?: Maybe<Array<AppleMusicTrack>>
}

export type Query = {
  __typename?: "Query"
  /** Storefronts */
  appleMusicStorefronts?: Maybe<AppleMusicStorefrontResponse>
  appleMusicAllStorefronts?: Maybe<AppleMusicStorefrontResponse>
  /** Search */
  appleMusicSearch?: Maybe<AppleMusicSearchResponse>
  appleMusicSearchHints?: Maybe<AppleMusicSearchHintsResponse>
  /** Charts */
  appleMusicCharts?: Maybe<AppleMusicChartResponse>
  /** Resources */
  appleMusicPlaylists?: Maybe<AppleMusicPlaylistResponse>
  appleMusicCurators?: Maybe<AppleMusicCuratorResponse>
  appleMusicAppleCurators?: Maybe<AppleMusicCuratorResponse>
  appleMusicAlbums?: Maybe<AppleMusicAlbumResponse>
  appleMusicArtists?: Maybe<AppleMusicArtistResponse>
  appleMusicSongs?: Maybe<AppleMusicSongResponse>
  appleMusicMusicVideos?: Maybe<AppleMusicMusicVideoResponse>
  appleMusicStations?: Maybe<AppleMusicStationResponse>
  appleMusicGenres?: Maybe<AppleMusicGenreResponse>
  appleMusicTopGenres?: Maybe<AppleMusicGenreResponse>
  /** Relationships */
  appleMusicPlaylistRelationship?: Maybe<AppleMusicResourceResponse>
  appleMusicAlbumRelationship?: Maybe<AppleMusicResourceResponse>
  appleMusicArtistRelationship?: Maybe<AppleMusicResourceResponse>
  appleMusicSongRelationship?: Maybe<AppleMusicResourceResponse>
  appleMusicMusicVideoRelationship?: Maybe<AppleMusicResourceResponse>
  appleMusicCuratorRelationship?: Maybe<AppleMusicResourceResponse>
  appleMusicAppleCuratorRelationship?: Maybe<AppleMusicResourceResponse>
}

export type QueryAppleMusicStorefrontsArgs = {
  input: AppleMusicStorefrontsInput
}

export type QueryAppleMusicAllStorefrontsArgs = {
  input: AppleMusicAllStorefrontsInput
}

export type QueryAppleMusicSearchArgs = {
  input: AppleMusicSearchInput
}

export type QueryAppleMusicSearchHintsArgs = {
  input: AppleMusicSearchInput
}

export type QueryAppleMusicChartsArgs = {
  input: AppleMusicChartInput
}

export type QueryAppleMusicPlaylistsArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicCuratorsArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicAppleCuratorsArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicAlbumsArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicArtistsArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicSongsArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicMusicVideosArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicStationsArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicGenresArgs = {
  input: AppleMusicResourceInput
}

export type QueryAppleMusicTopGenresArgs = {
  input: AppleMusicResourcePaginationInput
}

export type QueryAppleMusicPlaylistRelationshipArgs = {
  input: AppleMusicRelationshipInput
}

export type QueryAppleMusicAlbumRelationshipArgs = {
  input: AppleMusicRelationshipInput
}

export type QueryAppleMusicArtistRelationshipArgs = {
  input: AppleMusicRelationshipInput
}

export type QueryAppleMusicSongRelationshipArgs = {
  input: AppleMusicRelationshipInput
}

export type QueryAppleMusicMusicVideoRelationshipArgs = {
  input: AppleMusicRelationshipInput
}

export type QueryAppleMusicCuratorRelationshipArgs = {
  input: AppleMusicRelationshipInput
}

export type QueryAppleMusicAppleCuratorRelationshipArgs = {
  input: AppleMusicRelationshipInput
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo,
) => boolean

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  AppleMusicStorefrontsInput: AppleMusicStorefrontsInput
  String: ResolverTypeWrapper<Scalars["String"]>
  AppleMusicStorefrontResponse: ResolverTypeWrapper<
    AppleMusicStorefrontResponse
  >
  AppleMusicStorefront: ResolverTypeWrapper<AppleMusicStorefront>
  ID: ResolverTypeWrapper<Scalars["ID"]>
  AppleMusicStorefrontAttributes: ResolverTypeWrapper<
    AppleMusicStorefrontAttributes
  >
  AppleMusicAllStorefrontsInput: AppleMusicAllStorefrontsInput
  AppleMusicSearchInput: AppleMusicSearchInput
  Int: ResolverTypeWrapper<Scalars["Int"]>
  AppleMusicSearchResponse: ResolverTypeWrapper<AppleMusicSearchResponse>
  AppleMusicSearchResults: ResolverTypeWrapper<AppleMusicSearchResults>
  AppleMusicAppleCuratorResponse: ResolverTypeWrapper<
    AppleMusicAppleCuratorResponse
  >
  AppleMusicAppleCurator: ResolverTypeWrapper<AppleMusicAppleCurator>
  AppleMusicAppleCuratorAttributes: ResolverTypeWrapper<
    AppleMusicAppleCuratorAttributes
  >
  AppleMusicArtwork: ResolverTypeWrapper<AppleMusicArtwork>
  AppleMusicEditorialNotes: ResolverTypeWrapper<AppleMusicEditorialNotes>
  AppleMusicAppleCuratorRelationships: ResolverTypeWrapper<
    AppleMusicAppleCuratorRelationships
  >
  AppleMusicPlaylistRelationship: ResolverTypeWrapper<
    AppleMusicPlaylistRelationship
  >
  AppleMusicPlaylist: ResolverTypeWrapper<AppleMusicPlaylist>
  AppleMusicPlaylistAttributes: ResolverTypeWrapper<
    AppleMusicPlaylistAttributes
  >
  AppleMusicPlayParameters: ResolverTypeWrapper<AppleMusicPlayParameters>
  AppleMusicPlaylistRelationships: ResolverTypeWrapper<
    AppleMusicPlaylistRelationships
  >
  AppleMusicCuratorRelationship: ResolverTypeWrapper<
    AppleMusicCuratorRelationship
  >
  AppleMusicCurator: ResolverTypeWrapper<AppleMusicCurator>
  AppleMusicCuratorAttributes: ResolverTypeWrapper<AppleMusicCuratorAttributes>
  AppleMusicCuratorRelationships: ResolverTypeWrapper<
    AppleMusicCuratorRelationships
  >
  AppleMusicTrackRelationship: ResolverTypeWrapper<
    Omit<AppleMusicTrackRelationship, "data"> & {
      data?: Maybe<Array<ResolversTypes["AppleMusicTrack"]>>
    }
  >
  AppleMusicTrack:
    | ResolversTypes["AppleMusicSong"]
    | ResolversTypes["AppleMusicMusicVideo"]
  AppleMusicSong: ResolverTypeWrapper<AppleMusicSong>
  AppleMusicSongAttributes: ResolverTypeWrapper<AppleMusicSongAttributes>
  AppleMusicPreview: ResolverTypeWrapper<AppleMusicPreview>
  AppleMusicSongRelationships: ResolverTypeWrapper<AppleMusicSongRelationships>
  AppleMusicAlbumRelationship: ResolverTypeWrapper<AppleMusicAlbumRelationship>
  AppleMusicAlbum: ResolverTypeWrapper<AppleMusicAlbum>
  AppleMusicAlbumAttributes: ResolverTypeWrapper<AppleMusicAlbumAttributes>
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>
  AppleMusicAlbumRelationships: ResolverTypeWrapper<
    AppleMusicAlbumRelationships
  >
  AppleMusicArtistRelationship: ResolverTypeWrapper<
    AppleMusicArtistRelationship
  >
  AppleMusicArtist: ResolverTypeWrapper<AppleMusicArtist>
  AppleMusicArtistAttributes: ResolverTypeWrapper<AppleMusicArtistAttributes>
  AppleMusicArtistRelationships: ResolverTypeWrapper<
    AppleMusicArtistRelationships
  >
  AppleMusicGenreRelationship: ResolverTypeWrapper<AppleMusicGenreRelationship>
  AppleMusicGenre: ResolverTypeWrapper<AppleMusicGenre>
  AppleMusicGenreAttributes: ResolverTypeWrapper<AppleMusicGenreAttributes>
  AppleMusicMusicVideoRelationship: ResolverTypeWrapper<
    AppleMusicMusicVideoRelationship
  >
  AppleMusicMusicVideo: ResolverTypeWrapper<AppleMusicMusicVideo>
  AppleMusicMusicVideoAttributes: ResolverTypeWrapper<
    AppleMusicMusicVideoAttributes
  >
  AppleMusicMusicVideoRelationships: ResolverTypeWrapper<
    AppleMusicMusicVideoRelationships
  >
  AppleMusicStationRelationship: ResolverTypeWrapper<
    AppleMusicStationRelationship
  >
  AppleMusicStation: ResolverTypeWrapper<AppleMusicStation>
  AppleMusicStationAttributes: ResolverTypeWrapper<AppleMusicStationAttributes>
  AppleMusicCuratorResponse: ResolverTypeWrapper<AppleMusicCuratorResponse>
  AppleMusicPlaylistResponse: ResolverTypeWrapper<AppleMusicPlaylistResponse>
  AppleMusicAlbumResponse: ResolverTypeWrapper<AppleMusicAlbumResponse>
  AppleMusicArtistResponse: ResolverTypeWrapper<AppleMusicArtistResponse>
  AppleMusicMusicVideoResponse: ResolverTypeWrapper<
    AppleMusicMusicVideoResponse
  >
  AppleMusicSongResponse: ResolverTypeWrapper<AppleMusicSongResponse>
  AppleMusicStationResponse: ResolverTypeWrapper<AppleMusicStationResponse>
  AppleMusicSearchHintsResponse: ResolverTypeWrapper<
    AppleMusicSearchHintsResponse
  >
  AppleMusicSearchHints: ResolverTypeWrapper<AppleMusicSearchHints>
  AppleMusicChartInput: AppleMusicChartInput
  AppleMusicChartResponse: ResolverTypeWrapper<AppleMusicChartResponse>
  AppleMusicChart: ResolverTypeWrapper<
    Omit<AppleMusicChart, "data"> & {
      data?: Maybe<Array<ResolversTypes["AppleMusicResource"]>>
    }
  >
  AppleMusicResource:
    | ResolversTypes["AppleMusicAlbum"]
    | ResolversTypes["AppleMusicArtist"]
    | ResolversTypes["AppleMusicSong"]
    | ResolversTypes["AppleMusicMusicVideo"]
    | ResolversTypes["AppleMusicPlaylist"]
    | ResolversTypes["AppleMusicStation"]
    | ResolversTypes["AppleMusicGenre"]
    | ResolversTypes["AppleMusicCurator"]
    | ResolversTypes["AppleMusicAppleCurator"]
  AppleMusicResourceInput: AppleMusicResourceInput
  AppleMusicGenreResponse: ResolverTypeWrapper<AppleMusicGenreResponse>
  AppleMusicResourcePaginationInput: AppleMusicResourcePaginationInput
  AppleMusicRelationshipInput: AppleMusicRelationshipInput
  AppleMusicResourceResponse: ResolverTypeWrapper<
    Omit<AppleMusicResourceResponse, "data"> & {
      data?: Maybe<Array<ResolversTypes["AppleMusicResource"]>>
    }
  >
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  AppleMusicStorefrontsInput: AppleMusicStorefrontsInput
  String: Scalars["String"]
  AppleMusicStorefrontResponse: AppleMusicStorefrontResponse
  AppleMusicStorefront: AppleMusicStorefront
  ID: Scalars["ID"]
  AppleMusicStorefrontAttributes: AppleMusicStorefrontAttributes
  AppleMusicAllStorefrontsInput: AppleMusicAllStorefrontsInput
  AppleMusicSearchInput: AppleMusicSearchInput
  Int: Scalars["Int"]
  AppleMusicSearchResponse: AppleMusicSearchResponse
  AppleMusicSearchResults: AppleMusicSearchResults
  AppleMusicAppleCuratorResponse: AppleMusicAppleCuratorResponse
  AppleMusicAppleCurator: AppleMusicAppleCurator
  AppleMusicAppleCuratorAttributes: AppleMusicAppleCuratorAttributes
  AppleMusicArtwork: AppleMusicArtwork
  AppleMusicEditorialNotes: AppleMusicEditorialNotes
  AppleMusicAppleCuratorRelationships: AppleMusicAppleCuratorRelationships
  AppleMusicPlaylistRelationship: AppleMusicPlaylistRelationship
  AppleMusicPlaylist: AppleMusicPlaylist
  AppleMusicPlaylistAttributes: AppleMusicPlaylistAttributes
  AppleMusicPlayParameters: AppleMusicPlayParameters
  AppleMusicPlaylistRelationships: AppleMusicPlaylistRelationships
  AppleMusicCuratorRelationship: AppleMusicCuratorRelationship
  AppleMusicCurator: AppleMusicCurator
  AppleMusicCuratorAttributes: AppleMusicCuratorAttributes
  AppleMusicCuratorRelationships: AppleMusicCuratorRelationships
  AppleMusicTrackRelationship: Omit<AppleMusicTrackRelationship, "data"> & {
    data?: Maybe<Array<ResolversParentTypes["AppleMusicTrack"]>>
  }
  AppleMusicTrack:
    | ResolversParentTypes["AppleMusicSong"]
    | ResolversParentTypes["AppleMusicMusicVideo"]
  AppleMusicSong: AppleMusicSong
  AppleMusicSongAttributes: AppleMusicSongAttributes
  AppleMusicPreview: AppleMusicPreview
  AppleMusicSongRelationships: AppleMusicSongRelationships
  AppleMusicAlbumRelationship: AppleMusicAlbumRelationship
  AppleMusicAlbum: AppleMusicAlbum
  AppleMusicAlbumAttributes: AppleMusicAlbumAttributes
  Boolean: Scalars["Boolean"]
  AppleMusicAlbumRelationships: AppleMusicAlbumRelationships
  AppleMusicArtistRelationship: AppleMusicArtistRelationship
  AppleMusicArtist: AppleMusicArtist
  AppleMusicArtistAttributes: AppleMusicArtistAttributes
  AppleMusicArtistRelationships: AppleMusicArtistRelationships
  AppleMusicGenreRelationship: AppleMusicGenreRelationship
  AppleMusicGenre: AppleMusicGenre
  AppleMusicGenreAttributes: AppleMusicGenreAttributes
  AppleMusicMusicVideoRelationship: AppleMusicMusicVideoRelationship
  AppleMusicMusicVideo: AppleMusicMusicVideo
  AppleMusicMusicVideoAttributes: AppleMusicMusicVideoAttributes
  AppleMusicMusicVideoRelationships: AppleMusicMusicVideoRelationships
  AppleMusicStationRelationship: AppleMusicStationRelationship
  AppleMusicStation: AppleMusicStation
  AppleMusicStationAttributes: AppleMusicStationAttributes
  AppleMusicCuratorResponse: AppleMusicCuratorResponse
  AppleMusicPlaylistResponse: AppleMusicPlaylistResponse
  AppleMusicAlbumResponse: AppleMusicAlbumResponse
  AppleMusicArtistResponse: AppleMusicArtistResponse
  AppleMusicMusicVideoResponse: AppleMusicMusicVideoResponse
  AppleMusicSongResponse: AppleMusicSongResponse
  AppleMusicStationResponse: AppleMusicStationResponse
  AppleMusicSearchHintsResponse: AppleMusicSearchHintsResponse
  AppleMusicSearchHints: AppleMusicSearchHints
  AppleMusicChartInput: AppleMusicChartInput
  AppleMusicChartResponse: AppleMusicChartResponse
  AppleMusicChart: Omit<AppleMusicChart, "data"> & {
    data?: Maybe<Array<ResolversParentTypes["AppleMusicResource"]>>
  }
  AppleMusicResource:
    | ResolversParentTypes["AppleMusicAlbum"]
    | ResolversParentTypes["AppleMusicArtist"]
    | ResolversParentTypes["AppleMusicSong"]
    | ResolversParentTypes["AppleMusicMusicVideo"]
    | ResolversParentTypes["AppleMusicPlaylist"]
    | ResolversParentTypes["AppleMusicStation"]
    | ResolversParentTypes["AppleMusicGenre"]
    | ResolversParentTypes["AppleMusicCurator"]
    | ResolversParentTypes["AppleMusicAppleCurator"]
  AppleMusicResourceInput: AppleMusicResourceInput
  AppleMusicGenreResponse: AppleMusicGenreResponse
  AppleMusicResourcePaginationInput: AppleMusicResourcePaginationInput
  AppleMusicRelationshipInput: AppleMusicRelationshipInput
  AppleMusicResourceResponse: Omit<AppleMusicResourceResponse, "data"> & {
    data?: Maybe<Array<ResolversParentTypes["AppleMusicResource"]>>
  }
}

export type AppleMusicAlbumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAlbum"] = ResolversParentTypes["AppleMusicAlbum"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicAlbumAttributes"]>,
    ParentType,
    ContextType
  >
  relationships?: Resolver<
    Maybe<ResolversTypes["AppleMusicAlbumRelationships"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAlbumAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAlbumAttributes"] = ResolversParentTypes["AppleMusicAlbumAttributes"]
> = {
  artistName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  contentRating?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  copyright?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  editorialNotes?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  genreNames?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >
  isComplete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >
  isSingle?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  playParams?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlayParameters"]>,
    ParentType,
    ContextType
  >
  recordLabel?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  releaseDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  trackCount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  isMasteredForItunes?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAlbumRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAlbumRelationship"] = ResolversParentTypes["AppleMusicAlbumRelationship"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicAlbum"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAlbumRelationshipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAlbumRelationships"] = ResolversParentTypes["AppleMusicAlbumRelationships"]
> = {
  artists?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtistRelationship"]>,
    ParentType,
    ContextType
  >
  genres?: Resolver<
    Maybe<ResolversTypes["AppleMusicGenreRelationship"]>,
    ParentType,
    ContextType
  >
  tracks?: Resolver<
    Maybe<ResolversTypes["AppleMusicTrackRelationship"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAlbumResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAlbumResponse"] = ResolversParentTypes["AppleMusicAlbumResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicAlbum"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAppleCuratorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAppleCurator"] = ResolversParentTypes["AppleMusicAppleCurator"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicAppleCuratorAttributes"]>,
    ParentType,
    ContextType
  >
  relationships?: Resolver<
    Maybe<ResolversTypes["AppleMusicAppleCuratorRelationships"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAppleCuratorAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAppleCuratorAttributes"] = ResolversParentTypes["AppleMusicAppleCuratorAttributes"]
> = {
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  editorialNotes?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAppleCuratorRelationshipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAppleCuratorRelationships"] = ResolversParentTypes["AppleMusicAppleCuratorRelationships"]
> = {
  playlists?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlaylistRelationship"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicAppleCuratorResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicAppleCuratorResponse"] = ResolversParentTypes["AppleMusicAppleCuratorResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicAppleCurator"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicArtist"] = ResolversParentTypes["AppleMusicArtist"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtistAttributes"]>,
    ParentType,
    ContextType
  >
  relationships?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtistRelationships"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicArtistAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicArtistAttributes"] = ResolversParentTypes["AppleMusicArtistAttributes"]
> = {
  editorialNotes?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  genreNames?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicArtistRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicArtistRelationship"] = ResolversParentTypes["AppleMusicArtistRelationship"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicArtist"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicArtistRelationshipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicArtistRelationships"] = ResolversParentTypes["AppleMusicArtistRelationships"]
> = {
  albums?: Resolver<
    Maybe<ResolversTypes["AppleMusicAlbumRelationship"]>,
    ParentType,
    ContextType
  >
  genres?: Resolver<
    Maybe<ResolversTypes["AppleMusicGenreRelationship"]>,
    ParentType,
    ContextType
  >
  musicVideos?: Resolver<
    Maybe<ResolversTypes["AppleMusicMusicVideoRelationship"]>,
    ParentType,
    ContextType
  >
  playlists?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlaylistRelationship"]>,
    ParentType,
    ContextType
  >
  station?: Resolver<
    Maybe<ResolversTypes["AppleMusicStationRelationship"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicArtistResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicArtistResponse"] = ResolversParentTypes["AppleMusicArtistResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicArtist"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicArtworkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicArtwork"] = ResolversParentTypes["AppleMusicArtwork"]
> = {
  bgColor?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  height?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  width?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  textColor1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  textColor2?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  textColor3?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  textColor4?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicChartResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicChart"] = ResolversParentTypes["AppleMusicChart"]
> = {
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  chart?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  href?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  next?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicResource"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicChartResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicChartResponse"] = ResolversParentTypes["AppleMusicChartResponse"]
> = {
  albums?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicChart"]>>,
    ParentType,
    ContextType
  >
  musicVideos?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicChart"]>>,
    ParentType,
    ContextType
  >
  songs?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicChart"]>>,
    ParentType,
    ContextType
  >
  playlists?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicChart"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicCuratorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicCurator"] = ResolversParentTypes["AppleMusicCurator"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicCuratorAttributes"]>,
    ParentType,
    ContextType
  >
  relationships?: Resolver<
    Maybe<ResolversTypes["AppleMusicCuratorRelationships"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicCuratorAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicCuratorAttributes"] = ResolversParentTypes["AppleMusicCuratorAttributes"]
> = {
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  editorialNotes?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicCuratorRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicCuratorRelationship"] = ResolversParentTypes["AppleMusicCuratorRelationship"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicCurator"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicCuratorRelationshipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicCuratorRelationships"] = ResolversParentTypes["AppleMusicCuratorRelationships"]
> = {
  playlists?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlaylistRelationship"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicCuratorResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicCuratorResponse"] = ResolversParentTypes["AppleMusicCuratorResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicCurator"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicEditorialNotesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicEditorialNotes"] = ResolversParentTypes["AppleMusicEditorialNotes"]
> = {
  short?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  standard?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicGenreResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicGenre"] = ResolversParentTypes["AppleMusicGenre"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicGenreAttributes"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicGenreAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicGenreAttributes"] = ResolversParentTypes["AppleMusicGenreAttributes"]
> = {
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicGenreRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicGenreRelationship"] = ResolversParentTypes["AppleMusicGenreRelationship"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicGenre"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicGenreResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicGenreResponse"] = ResolversParentTypes["AppleMusicGenreResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicGenre"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicMusicVideoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicMusicVideo"] = ResolversParentTypes["AppleMusicMusicVideo"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicMusicVideoAttributes"]>,
    ParentType,
    ContextType
  >
  relationships?: Resolver<
    Maybe<ResolversTypes["AppleMusicMusicVideoRelationships"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicMusicVideoAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicMusicVideoAttributes"] = ResolversParentTypes["AppleMusicMusicVideoAttributes"]
> = {
  albumName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  artistName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  contentRating?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  durationInMillis?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >
  editorialNotes?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  genreNames?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >
  isrc?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  playParams?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlayParameters"]>,
    ParentType,
    ContextType
  >
  previews?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicPreview"]>>,
    ParentType,
    ContextType
  >
  releaseDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  trackNumber?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  videoSubType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  hasHDR?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>
  has4K?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicMusicVideoRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicMusicVideoRelationship"] = ResolversParentTypes["AppleMusicMusicVideoRelationship"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicMusicVideo"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicMusicVideoRelationshipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicMusicVideoRelationships"] = ResolversParentTypes["AppleMusicMusicVideoRelationships"]
> = {
  albums?: Resolver<
    Maybe<ResolversTypes["AppleMusicAlbumRelationship"]>,
    ParentType,
    ContextType
  >
  artists?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtistRelationship"]>,
    ParentType,
    ContextType
  >
  genres?: Resolver<
    Maybe<ResolversTypes["AppleMusicGenreRelationship"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicMusicVideoResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicMusicVideoResponse"] = ResolversParentTypes["AppleMusicMusicVideoResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicMusicVideo"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicPlaylistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicPlaylist"] = ResolversParentTypes["AppleMusicPlaylist"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlaylistAttributes"]>,
    ParentType,
    ContextType
  >
  relationships?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlaylistRelationships"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicPlaylistAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicPlaylistAttributes"] = ResolversParentTypes["AppleMusicPlaylistAttributes"]
> = {
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  curatorName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  description?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  lastModifiedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  playParams?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlayParameters"]>,
    ParentType,
    ContextType
  >
  playlistType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicPlaylistRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicPlaylistRelationship"] = ResolversParentTypes["AppleMusicPlaylistRelationship"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicPlaylist"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicPlaylistRelationshipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicPlaylistRelationships"] = ResolversParentTypes["AppleMusicPlaylistRelationships"]
> = {
  curator?: Resolver<
    Maybe<ResolversTypes["AppleMusicCuratorRelationship"]>,
    ParentType,
    ContextType
  >
  tracks?: Resolver<
    Maybe<ResolversTypes["AppleMusicTrackRelationship"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicPlaylistResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicPlaylistResponse"] = ResolversParentTypes["AppleMusicPlaylistResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicPlaylist"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicPlayParametersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicPlayParameters"] = ResolversParentTypes["AppleMusicPlayParameters"]
> = {
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  kind?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicPreviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicPreview"] = ResolversParentTypes["AppleMusicPreview"]
> = {
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  hlsUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicResourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicResource"] = ResolversParentTypes["AppleMusicResource"]
> = {
  __resolveType: TypeResolveFn<
    | "AppleMusicAlbum"
    | "AppleMusicArtist"
    | "AppleMusicSong"
    | "AppleMusicMusicVideo"
    | "AppleMusicPlaylist"
    | "AppleMusicStation"
    | "AppleMusicGenre"
    | "AppleMusicCurator"
    | "AppleMusicAppleCurator",
    ParentType,
    ContextType
  >
}

export type AppleMusicResourceResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicResourceResponse"] = ResolversParentTypes["AppleMusicResourceResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicResource"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSearchHintsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSearchHints"] = ResolversParentTypes["AppleMusicSearchHints"]
> = {
  terms?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSearchHintsResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSearchHintsResponse"] = ResolversParentTypes["AppleMusicSearchHintsResponse"]
> = {
  results?: Resolver<
    Maybe<ResolversTypes["AppleMusicSearchHints"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSearchResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSearchResponse"] = ResolversParentTypes["AppleMusicSearchResponse"]
> = {
  results?: Resolver<
    Maybe<ResolversTypes["AppleMusicSearchResults"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSearchResultsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSearchResults"] = ResolversParentTypes["AppleMusicSearchResults"]
> = {
  appleCurators?: Resolver<
    Maybe<ResolversTypes["AppleMusicAppleCuratorResponse"]>,
    ParentType,
    ContextType
  >
  curators?: Resolver<
    Maybe<ResolversTypes["AppleMusicCuratorResponse"]>,
    ParentType,
    ContextType
  >
  playlists?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlaylistResponse"]>,
    ParentType,
    ContextType
  >
  albums?: Resolver<
    Maybe<ResolversTypes["AppleMusicAlbumResponse"]>,
    ParentType,
    ContextType
  >
  artists?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtistResponse"]>,
    ParentType,
    ContextType
  >
  musicVideos?: Resolver<
    Maybe<ResolversTypes["AppleMusicMusicVideoResponse"]>,
    ParentType,
    ContextType
  >
  songs?: Resolver<
    Maybe<ResolversTypes["AppleMusicSongResponse"]>,
    ParentType,
    ContextType
  >
  stations?: Resolver<
    Maybe<ResolversTypes["AppleMusicStationResponse"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSongResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSong"] = ResolversParentTypes["AppleMusicSong"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicSongAttributes"]>,
    ParentType,
    ContextType
  >
  relationships?: Resolver<
    Maybe<ResolversTypes["AppleMusicSongRelationships"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSongAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSongAttributes"] = ResolversParentTypes["AppleMusicSongAttributes"]
> = {
  albumName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  artistName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  composerName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  contentRating?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  discNumber?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  durationInMillis?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >
  editorialNotes?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  genreNames?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >
  isrc?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  movementCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >
  movementName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  movementNumber?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  playParams?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlayParameters"]>,
    ParentType,
    ContextType
  >
  previews?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicPreview"]>>,
    ParentType,
    ContextType
  >
  releaseDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  trackNumber?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  workName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSongRelationshipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSongRelationships"] = ResolversParentTypes["AppleMusicSongRelationships"]
> = {
  albums?: Resolver<
    Maybe<ResolversTypes["AppleMusicAlbumRelationship"]>,
    ParentType,
    ContextType
  >
  artists?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtistRelationship"]>,
    ParentType,
    ContextType
  >
  genres?: Resolver<
    Maybe<ResolversTypes["AppleMusicGenreRelationship"]>,
    ParentType,
    ContextType
  >
  station?: Resolver<
    Maybe<ResolversTypes["AppleMusicStationRelationship"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicSongResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicSongResponse"] = ResolversParentTypes["AppleMusicSongResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicSong"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicStationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicStation"] = ResolversParentTypes["AppleMusicStation"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicStationAttributes"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicStationAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicStationAttributes"] = ResolversParentTypes["AppleMusicStationAttributes"]
> = {
  artwork?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtwork"]>,
    ParentType,
    ContextType
  >
  durationInMillis?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >
  editorialNotes?: Resolver<
    Maybe<ResolversTypes["AppleMusicEditorialNotes"]>,
    ParentType,
    ContextType
  >
  episodeNumber?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >
  isLive?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicStationRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicStationRelationship"] = ResolversParentTypes["AppleMusicStationRelationship"]
> = {
  data?: Resolver<
    Maybe<ResolversTypes["AppleMusicStation"]>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicStationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicStationResponse"] = ResolversParentTypes["AppleMusicStationResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicStation"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicStorefrontResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicStorefront"] = ResolversParentTypes["AppleMusicStorefront"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  attributes?: Resolver<
    Maybe<ResolversTypes["AppleMusicStorefrontAttributes"]>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicStorefrontAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicStorefrontAttributes"] = ResolversParentTypes["AppleMusicStorefrontAttributes"]
> = {
  defaultLanguageTag?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  supportedLanguageTags?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicStorefrontResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicStorefrontResponse"] = ResolversParentTypes["AppleMusicStorefrontResponse"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicStorefront"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AppleMusicTrackResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicTrack"] = ResolversParentTypes["AppleMusicTrack"]
> = {
  __resolveType: TypeResolveFn<
    "AppleMusicSong" | "AppleMusicMusicVideo",
    ParentType,
    ContextType
  >
}

export type AppleMusicTrackRelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AppleMusicTrackRelationship"] = ResolversParentTypes["AppleMusicTrackRelationship"]
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes["AppleMusicTrack"]>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  appleMusicStorefronts?: Resolver<
    Maybe<ResolversTypes["AppleMusicStorefrontResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicStorefrontsArgs, "input">
  >
  appleMusicAllStorefronts?: Resolver<
    Maybe<ResolversTypes["AppleMusicStorefrontResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicAllStorefrontsArgs, "input">
  >
  appleMusicSearch?: Resolver<
    Maybe<ResolversTypes["AppleMusicSearchResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicSearchArgs, "input">
  >
  appleMusicSearchHints?: Resolver<
    Maybe<ResolversTypes["AppleMusicSearchHintsResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicSearchHintsArgs, "input">
  >
  appleMusicCharts?: Resolver<
    Maybe<ResolversTypes["AppleMusicChartResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicChartsArgs, "input">
  >
  appleMusicPlaylists?: Resolver<
    Maybe<ResolversTypes["AppleMusicPlaylistResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicPlaylistsArgs, "input">
  >
  appleMusicCurators?: Resolver<
    Maybe<ResolversTypes["AppleMusicCuratorResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicCuratorsArgs, "input">
  >
  appleMusicAppleCurators?: Resolver<
    Maybe<ResolversTypes["AppleMusicCuratorResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicAppleCuratorsArgs, "input">
  >
  appleMusicAlbums?: Resolver<
    Maybe<ResolversTypes["AppleMusicAlbumResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicAlbumsArgs, "input">
  >
  appleMusicArtists?: Resolver<
    Maybe<ResolversTypes["AppleMusicArtistResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicArtistsArgs, "input">
  >
  appleMusicSongs?: Resolver<
    Maybe<ResolversTypes["AppleMusicSongResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicSongsArgs, "input">
  >
  appleMusicMusicVideos?: Resolver<
    Maybe<ResolversTypes["AppleMusicMusicVideoResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicMusicVideosArgs, "input">
  >
  appleMusicStations?: Resolver<
    Maybe<ResolversTypes["AppleMusicStationResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicStationsArgs, "input">
  >
  appleMusicGenres?: Resolver<
    Maybe<ResolversTypes["AppleMusicGenreResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicGenresArgs, "input">
  >
  appleMusicTopGenres?: Resolver<
    Maybe<ResolversTypes["AppleMusicGenreResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicTopGenresArgs, "input">
  >
  appleMusicPlaylistRelationship?: Resolver<
    Maybe<ResolversTypes["AppleMusicResourceResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicPlaylistRelationshipArgs, "input">
  >
  appleMusicAlbumRelationship?: Resolver<
    Maybe<ResolversTypes["AppleMusicResourceResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicAlbumRelationshipArgs, "input">
  >
  appleMusicArtistRelationship?: Resolver<
    Maybe<ResolversTypes["AppleMusicResourceResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicArtistRelationshipArgs, "input">
  >
  appleMusicSongRelationship?: Resolver<
    Maybe<ResolversTypes["AppleMusicResourceResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicSongRelationshipArgs, "input">
  >
  appleMusicMusicVideoRelationship?: Resolver<
    Maybe<ResolversTypes["AppleMusicResourceResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicMusicVideoRelationshipArgs, "input">
  >
  appleMusicCuratorRelationship?: Resolver<
    Maybe<ResolversTypes["AppleMusicResourceResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicCuratorRelationshipArgs, "input">
  >
  appleMusicAppleCuratorRelationship?: Resolver<
    Maybe<ResolversTypes["AppleMusicResourceResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppleMusicAppleCuratorRelationshipArgs, "input">
  >
}

export type Resolvers<ContextType = any> = {
  AppleMusicAlbum?: AppleMusicAlbumResolvers<ContextType>
  AppleMusicAlbumAttributes?: AppleMusicAlbumAttributesResolvers<ContextType>
  AppleMusicAlbumRelationship?: AppleMusicAlbumRelationshipResolvers<
    ContextType
  >
  AppleMusicAlbumRelationships?: AppleMusicAlbumRelationshipsResolvers<
    ContextType
  >
  AppleMusicAlbumResponse?: AppleMusicAlbumResponseResolvers<ContextType>
  AppleMusicAppleCurator?: AppleMusicAppleCuratorResolvers<ContextType>
  AppleMusicAppleCuratorAttributes?: AppleMusicAppleCuratorAttributesResolvers<
    ContextType
  >
  AppleMusicAppleCuratorRelationships?: AppleMusicAppleCuratorRelationshipsResolvers<
    ContextType
  >
  AppleMusicAppleCuratorResponse?: AppleMusicAppleCuratorResponseResolvers<
    ContextType
  >
  AppleMusicArtist?: AppleMusicArtistResolvers<ContextType>
  AppleMusicArtistAttributes?: AppleMusicArtistAttributesResolvers<ContextType>
  AppleMusicArtistRelationship?: AppleMusicArtistRelationshipResolvers<
    ContextType
  >
  AppleMusicArtistRelationships?: AppleMusicArtistRelationshipsResolvers<
    ContextType
  >
  AppleMusicArtistResponse?: AppleMusicArtistResponseResolvers<ContextType>
  AppleMusicArtwork?: AppleMusicArtworkResolvers<ContextType>
  AppleMusicChart?: AppleMusicChartResolvers<ContextType>
  AppleMusicChartResponse?: AppleMusicChartResponseResolvers<ContextType>
  AppleMusicCurator?: AppleMusicCuratorResolvers<ContextType>
  AppleMusicCuratorAttributes?: AppleMusicCuratorAttributesResolvers<
    ContextType
  >
  AppleMusicCuratorRelationship?: AppleMusicCuratorRelationshipResolvers<
    ContextType
  >
  AppleMusicCuratorRelationships?: AppleMusicCuratorRelationshipsResolvers<
    ContextType
  >
  AppleMusicCuratorResponse?: AppleMusicCuratorResponseResolvers<ContextType>
  AppleMusicEditorialNotes?: AppleMusicEditorialNotesResolvers<ContextType>
  AppleMusicGenre?: AppleMusicGenreResolvers<ContextType>
  AppleMusicGenreAttributes?: AppleMusicGenreAttributesResolvers<ContextType>
  AppleMusicGenreRelationship?: AppleMusicGenreRelationshipResolvers<
    ContextType
  >
  AppleMusicGenreResponse?: AppleMusicGenreResponseResolvers<ContextType>
  AppleMusicMusicVideo?: AppleMusicMusicVideoResolvers<ContextType>
  AppleMusicMusicVideoAttributes?: AppleMusicMusicVideoAttributesResolvers<
    ContextType
  >
  AppleMusicMusicVideoRelationship?: AppleMusicMusicVideoRelationshipResolvers<
    ContextType
  >
  AppleMusicMusicVideoRelationships?: AppleMusicMusicVideoRelationshipsResolvers<
    ContextType
  >
  AppleMusicMusicVideoResponse?: AppleMusicMusicVideoResponseResolvers<
    ContextType
  >
  AppleMusicPlaylist?: AppleMusicPlaylistResolvers<ContextType>
  AppleMusicPlaylistAttributes?: AppleMusicPlaylistAttributesResolvers<
    ContextType
  >
  AppleMusicPlaylistRelationship?: AppleMusicPlaylistRelationshipResolvers<
    ContextType
  >
  AppleMusicPlaylistRelationships?: AppleMusicPlaylistRelationshipsResolvers<
    ContextType
  >
  AppleMusicPlaylistResponse?: AppleMusicPlaylistResponseResolvers<ContextType>
  AppleMusicPlayParameters?: AppleMusicPlayParametersResolvers<ContextType>
  AppleMusicPreview?: AppleMusicPreviewResolvers<ContextType>
  AppleMusicResource?: AppleMusicResourceResolvers
  AppleMusicResourceResponse?: AppleMusicResourceResponseResolvers<ContextType>
  AppleMusicSearchHints?: AppleMusicSearchHintsResolvers<ContextType>
  AppleMusicSearchHintsResponse?: AppleMusicSearchHintsResponseResolvers<
    ContextType
  >
  AppleMusicSearchResponse?: AppleMusicSearchResponseResolvers<ContextType>
  AppleMusicSearchResults?: AppleMusicSearchResultsResolvers<ContextType>
  AppleMusicSong?: AppleMusicSongResolvers<ContextType>
  AppleMusicSongAttributes?: AppleMusicSongAttributesResolvers<ContextType>
  AppleMusicSongRelationships?: AppleMusicSongRelationshipsResolvers<
    ContextType
  >
  AppleMusicSongResponse?: AppleMusicSongResponseResolvers<ContextType>
  AppleMusicStation?: AppleMusicStationResolvers<ContextType>
  AppleMusicStationAttributes?: AppleMusicStationAttributesResolvers<
    ContextType
  >
  AppleMusicStationRelationship?: AppleMusicStationRelationshipResolvers<
    ContextType
  >
  AppleMusicStationResponse?: AppleMusicStationResponseResolvers<ContextType>
  AppleMusicStorefront?: AppleMusicStorefrontResolvers<ContextType>
  AppleMusicStorefrontAttributes?: AppleMusicStorefrontAttributesResolvers<
    ContextType
  >
  AppleMusicStorefrontResponse?: AppleMusicStorefrontResponseResolvers<
    ContextType
  >
  AppleMusicTrack?: AppleMusicTrackResolvers
  AppleMusicTrackRelationship?: AppleMusicTrackRelationshipResolvers<
    ContextType
  >
  Query?: QueryResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
