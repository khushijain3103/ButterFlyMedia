import '@/styles/globals.css'
import Header from '@/components/Header';
import SideDetails from '@/components/profile/SideDetails';
import {useRouter} from 'next/router';
import { useState } from 'react';
import Router from 'next/router';


export default function App({ Component, pageProps }) {

    const router = useRouter();

  if(router.pathname === '/404'){
    return <Component {...pageProps} />
  }
  return(
    <div className='app'>
      <div className='sideDetails'>
        <SideDetails/>
      </div>
      <div className='app392RightSide'>
        <Header/>
        <Component {...pageProps} />
      </div>
      </div>
  ) 
}
