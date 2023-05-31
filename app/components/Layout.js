"use client"
import React, { Suspense } from 'react'
import Head from 'next/head'
import {FaBars, FaBell} from "react-icons/fa"
import { Avatar } from '@mui/material'
import Link from 'next/link'
import Loading from '../loading'

export const metadata = {
  title: 'Landing page',
  description: 'Generated by create next app',
}

export default function Layout({children, title = "Landing page", keywords="", description=""}) {
     {/* head */}
    <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords}/>
        <meta name="description" content={description}/>
    </Head>
  return (
    <div>
        <nav className='bg-white p-2 shadow-md sticky top-0 z-10 flex items-center justify-between container mx-auto'>
          <div className='flex items-center gap-4'>
            <FaBars/>
            <h1>E-Recruitment Portal</h1>
          </div>

          <div className='flex items-center gap-4'>
            <div><FaBell/></div>
            <Avatar>P</Avatar>
          </div>
        </nav>


      <Suspense fallback={<Loading/>}>
        <main className='min-h-screen flex gap-2'>
            <aside className="w-52 shadow-md h-96 bg-blue-900 p-2">
                <div className='sticky top-0 h-96 flex flex-col gap-4'>
                        <Link href="/">
                          <button className='bg-blue-600 w-full text-white  p-2 rounded-sm shadow-sm'>Dashboard</button>
                        </Link>
                        <Link href="/jobs">
                          <button className='bg-blue-600 w-full text-white  p-2 rounded-sm shadow-sm'>Job Profile</button>
                        </Link>
                        <Link href="/applications">
                          <button className='bg-blue-600 w-full text-white  p-2 rounded-sm shadow-sm'>My Applications</button>
                        </Link>
                        <Link href="/books">
                          <button className='bg-blue-600 w-full text-white  p-2 rounded-sm shadow-sm'>Books & Supervision</button>
                        </Link>
                        <Link href="/account">
                          <button className='bg-blue-600 w-full text-white  p-2 rounded-sm shadow-sm'>My Account</button>
                        </Link>
                        <Link href="/">
                          <button className='bg-blue-600 w-full text-white p-2 rounded-sm shadow-sm'>Logout</button>
                        </Link>
                </div>
            </aside>

            <section className='p-2 bg-inherit w-full'>
                {children}
            </section>
        </main>
       </Suspense>
    </div>
  )
}
