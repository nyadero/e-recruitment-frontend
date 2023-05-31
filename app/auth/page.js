'use client'
import React from 'react'

export default function login() {
  return (
    <main className="flex items-center justify-center h-screen">
       <div className='bg-white w-1/2 rounded-md shadow-md flex'>
           <div className='w-1/2 p-3'>
              <h2>Lets get started</h2>
              <p>Short description</p>

              <div>
                <form>
                  {/* name */}
                  <div className='w-full flex flex-col mb-2'>
                    <label>Name</label>
                    <input type="text" placeholder='your name' className='w-full border p-1 border-black mt-1'/>
                  </div>

                  {/* email */}
                   <div className='w-full flex flex-col mb-2'>
                    <label>Email</label>
                    <input type='email' placeholder='email address' className='w-full border p-1 border-black mt-1' />
                  </div>

                  {/* country */}
                  <div className='w-full flex flex-col mb-2'>
                    <label>Country</label>
                    <select className='w-full border p-1 border-black mt-1' >
                      <option>Kenya</option>
                      <option>Kenya</option>
                      <option>Kenya</option>
                      <option>Kenya</option>
                    </select>
                  </div>

                  {/* terms of service */}
                  <div className='w-full flex flex-col mb-2'>
                    <label>Terms of Service</label>
                    <div className='flex items-center gap-2'>
                      <input type="checkbox" className='p-2'/>
                      <p>I agree to the terms of service</p>
                    </div>
                  </div>

                  {/* button */}
                  <button className='w-full bg-green-800 p-2 rounded-md mt-2 text-white'>Get started</button>
                </form>
              </div>
           </div>

           {/* image container */}
           <div className='w-1/2 bg-slate-500'>
             <img src='/banner.jpg' width="100%" height="100%" className='object-cover h-full' />
           </div>
       </div>
    </main>
   )
}
