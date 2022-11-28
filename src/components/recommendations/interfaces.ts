export interface FeaturedPlaylistsQueryProps {
  playlists: {
    items: {
      description: string
      href: string
      id: string
      images: {
        url: string
      }[]
      name: string
      tracks: {
        href: string
        total: number
      }
      uri: string
    }[]
  }
}
