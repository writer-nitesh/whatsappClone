import { Outlet } from 'react-router-dom'
import { Navbar, TitleBar } from '../components'

export default function Main() {


    return (
        <div className='flex flex-col h-full'>
            <TitleBar />
            <Outlet />
            <Navbar />
        </div>
    )
}
