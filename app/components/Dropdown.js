import Link from 'next/link'
import React from 'react'

export default function Dropdown({links}) {
  return (
    <div className='flex flex-col bg-white shadow-md p-2 rounded-sm mb-2'>
        {links.map(link => (
            <Link key={link.id}  href={link.name} >{link.name}</Link>
        ))}
    </div>
  )
}
