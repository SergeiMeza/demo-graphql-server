import fs from "fs"
import Axios from "axios"
import express from "express"
import { ApolloServer, gql } from "apollo-server-express"
import { Resolvers } from "./generated/graphql"
import { getAppleMusicAuthorizationToken } from "./helpers"

const typeDefs = gql`
  ${fs.readFileSync(__dirname + "/schema.graphql", { encoding: "utf8" })}
`

const resolvers: Resolvers = {
  Query: {
    appleMusicStorefronts: async (_, { input }, ctx) => {
      const { l, ids } = input
      let res = await Axios({
        method: "GET",
        url: "https://api.music.apple.com/v1/storefronts",
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else throw new Error()
    },
    appleMusicAllStorefronts: async (_, { input }, ctx) => {
      const { l } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/storefronts`,
        params: {
          l,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else throw new Error()
    },
    appleMusicSearch: async (_, { input }, ctx) => {
      const { l, limit, offset, storefront, term, types } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/search`,
        params: {
          l,
          limit,
          offset,
          term,
          types: types
            ? types!.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : undefined,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) {
        return {
          results: {
            ...res.data.results,
            appleCurators: res.data.results["apple-curators"],
            musicVideos: res.data.results["music-videos"],
          },
        }
      } else return null
    },
    appleMusicSearchHints: async (_, { input }, ctx) => {
      const { l, limit, storefront, term, types } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/search/hints`,
        params: {
          l,
          limit,
          term,
          types: types
            ? types.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : undefined,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicCharts: async (_, { input }, ctx) => {
      const { storefront, types, offset, limit, l, chart, genre } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/charts`,
        params: {
          l,
          limit,
          offset,
          genre,
          chart,
          types: types.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) {
        return {
          ...res.data.results,
          musicVideos: res.data.results["music-videos"],
        } as any
      } else return null
    },
    appleMusicPlaylists: async (_, { input }, ctx) => {
      const { ids, l, storefront, include } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/playlists`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : undefined,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicCurators: async (_, { input }, ctx) => {
      let { ids, include, storefront, l } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/curators`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : undefined,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicAppleCurators: async (_, { input }, ctx) => {
      let { ids, include, storefront, l } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/apple-curators`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : undefined,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicAlbums: async (_, { input }, ctx) => {
      let { ids, include, l, storefront } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/albums`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : include,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicArtists: async (_, { input }, ctx) => {
      let { ids, include, l, storefront } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/artists`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : include,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicSongs: async (_, { input }, ctx) => {
      let { ids, include, l, storefront } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/songs`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : include,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicMusicVideos: async (_, { input }, ctx) => {
      let { ids, include, l, storefront } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/music-videos`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : include,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicStations: async (_, { input }, ctx) => {
      let { ids, include, l, storefront } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/stations`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
          include: include
            ? include.reduce((prev, curr) => `${prev && prev + ","}${curr}`)
            : include,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicGenres: async (_, { input }, ctx) => {
      let { ids, l, storefront } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/genres`,
        params: {
          ids: ids.reduce((prev, curr) => `${prev && prev + ","}${curr}`),
          l,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicTopGenres: async (_, { input }, ctx) => {
      let { l, storefront } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/genres`,
        params: {
          l,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicAlbumRelationship: async (_, { input }, ctx) => {
      let { id, storefront, l, limit, relationship } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/albums/${id}/${relationship}`,
        params: {
          l,
          limit,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicAppleCuratorRelationship: async (_, { input }, ctx) => {
      let { id, storefront, l, limit, relationship } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/apple-curators/${id}/${relationship}`,
        params: {
          l,
          limit,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicArtistRelationship: async (_, { input }, ctx) => {
      let { id, storefront, l, limit, relationship } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/artists/${id}/${relationship}`,
        params: {
          l,
          limit,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicCuratorRelationship: async (_, { input }, ctx) => {
      let { id, storefront, l, limit, relationship } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/curators/${id}/${relationship}`,
        params: {
          l,
          limit,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicMusicVideoRelationship: async (_, { input }, ctx) => {
      let { id, storefront, l, limit, relationship } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/music-videos/${id}/${relationship}`,
        params: {
          l,
          limit,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicPlaylistRelationship: async (_, { input }, ctx) => {
      let { id, storefront, l, limit, relationship } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/playlists/${id}/${relationship}`,
        params: {
          l,
          limit,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
    appleMusicSongRelationship: async (_, { input }, ctx) => {
      let { id, storefront, l, limit, relationship } = input
      let res = await Axios({
        method: "GET",
        url: `https://api.music.apple.com/v1/catalog/${storefront}/songs/${id}/${relationship}`,
        params: {
          l,
          limit,
        },
        headers: {
          Authorization: getAppleMusicAuthorizationToken(),
        },
      })
      if (res.status === 200) return res.data
      else return null
    },
  },
  AppleMusicResource: {
    __resolveType: (obj, _) => {
      if (obj.type === "songs") return "AppleMusicSong"
      else if (obj.type === "albums") return "AppleMusicAlbum"
      else if (obj.type === "music-videos") return "AppleMusicMusicVideo"
      else if (obj.type === "artists") return "AppleMusicArtist"
      else if (obj.type === "playlists") return "AppleMusicPlaylist"
      else if (obj.type === "curators") return "AppleMusicCurator"
      else if (obj.type === "apple-curators") return "AppleMusicAppleCurator"
      else if (obj.type === "genres") return "AppleMusicGenre"
      else if (obj.type === "stations") return "AppleMusicStation"
      else throw new Error()
    },
  },
  AppleMusicTrack: {
    __resolveType: (obj, _) => {
      if (obj.type === "songs") return "AppleMusicSong"
      else if (obj.type === "music-videos") return "AppleMusicMusicVideo"
      else throw new Error()
    },
  },
}

const app = express()

app.get("/", (req, res) => res.send({ message: "working" }))

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  subscriptions: false,

  context: ({ req }) => {
    let user = req.headers["user"]
    if (user && typeof user === "string") {
      return { user: JSON.parse(user) }
    }
  },
})

async function main() {
  server.applyMiddleware({ app })

  app.listen({ port: 4000 })
  console.log(`🚀 Server ready at ${server.graphqlPath}`)
}

main().catch(err => {
  console.log(err)
  process.exit(1)
})
