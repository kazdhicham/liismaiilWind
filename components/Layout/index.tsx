import React, { ReactElement, useEffect } from 'react'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
//import useInterface from '@/store/hooks/useInterface'
function Layout({ children }: { children: ReactElement }) {
    // const { show } = useInterface()

    return (
        <div className='h-screen font-mont overflow-x-hidden'>
            <Header />
            <div className='mt-12'>

                {children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout