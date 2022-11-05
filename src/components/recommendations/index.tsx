import axios from 'axios'
import { Heart, Play } from 'phosphor-react'
import { useState, useEffect } from 'react'

import { useRefreshToken } from '../../hooks/useRefreshToken'
import { api } from '../../services/api'
import { Loading } from '../loading'
// import { Loading } from '../Loading'

interface FeaturedPlaylistsProps {
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

export const Recommendations = () => {
  const { getRefreshToken } = useRefreshToken()
  const [isLoading, setIsLoading] = useState(true)
  const [featuredPlaylists, setFeaturedPlaylists] = useState<FeaturedPlaylistsProps>()

  useEffect(() => {
    const source = axios.CancelToken.source()

    const getFeaturedPlaylists = async () => {
      const myToken = await getRefreshToken()
      api
        .get('/browse/featured-playlists?offset=0', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + myToken,
          },
        })
        .then((response) => setFeaturedPlaylists(response.data))
        .finally(() => setIsLoading(false))
    }
    getFeaturedPlaylists()

    return () => {
      source.cancel()
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <section className='pb-8'>
      <h2 className='mt-8 mb-2 font-semibold'>Recomended playlists</h2>

      <table className='w-full bg-gray-800 rounded-3xl'>
        <thead>
          <tr>
            <th></th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'>
              Description
            </th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'>
              Name
            </th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'></th>
            <th className='px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left'>
              Number of Tracks
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {featuredPlaylists?.playlists.items.map((item, index) => (
            <tr key={index}>
              <td style={{ width: 72 }} className='px-4 py-3 text-sm'>
                <img src={item.images[0].url} alt='N' className='w-8 h-8 rounded-sm' />
              </td>
              <td>
                <a
                  className='text-gray-100 font-semibold text-none leading-6 text-xs hover:underline'
                  href='/'
                >
                  {item.description.split(' ', 8).join(' ')} ...
                </a>
              </td>
              <td className='px-4 py-3 text-sm'>{item.name}</td>
              <td style={{ width: 100 }} className='px-4 py-3 text-sm'></td>
              <td className='px-4 py-3 text-sm'>{item.tracks.total}</td>
              <td className='px-4 py-3 text-sm flex gap-4'>
                <button type='button'>
                  <Heart color='white' size={22} />
                </button>
                <button
                  type='button'
                  className='w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg'
                >
                  <Play color='green' size={22} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
