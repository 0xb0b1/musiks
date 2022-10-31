import { ChangeThemeButton } from './changethemebutton'
import { Logo } from './logo'
import { SearchBox } from './searchbox'

export const Header = () => {
  return (
    <header className='flex w-full h-16 px-4 py-4 bg-gray-900 text-gray-50'>
      <div className='flex w-full items-center justify-between'>
        <Logo />

        <SearchBox />

        <ChangeThemeButton />
      </div>
    </header>
  )
}
