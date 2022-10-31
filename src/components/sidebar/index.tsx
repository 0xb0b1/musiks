import { Folder, House, Playlist } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (
    <aside className='flex px-2 py-2 w-auto bg-gradient-to-t from-gray-800 h-home'>
      <ul className='flex flex-col gap-2 text-white py-4'>
        <li>
          <NavLink
            className='has-tooltip bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer'
            to='/'
          >
            <House size={22} />
            <span className='tooltip bg-gray-700 rounded-xl p-4 font-semibold text-sm text-gray-200'>
              Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className='has-tooltip bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer'
            to='/categories'
          >
            <Folder size={22} />
            <span className='tooltip bg-gray-700 rounded-xl p-4 font-semibold text-sm text-gray-200'>
              Categories
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className='has-tooltip bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer'
            to='/playlists'
          >
            <Playlist size={22} />
            <span className='tooltip bg-gray-700 rounded-xl p-4 font-semibold text-sm text-gray-200'>
              Playlists
            </span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}
