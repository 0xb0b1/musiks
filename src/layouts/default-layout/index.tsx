import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { SideBar } from '../../components/sidebar'

export const DefaultLayout = () => {
  return (
    <div className='bg-gray-900 flex flex-col mx-0'>
      <Header />

      <section className='flex'>
        <SideBar />

        <Outlet />
      </section>
    </div>
  )
}
