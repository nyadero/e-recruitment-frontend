import React, { useState } from 'react'
import Link from 'next/link'
import {FaAngleDown, FaAngleUp, FaBars, FaBell, FaBriefcase, FaDashcube} from "react-icons/fa"
import Dropdown from './Dropdown'

// submenu links
const dashboardMenus = [{id: 1, name: "link1"}, {id:2, name: "link2"}, {id:3, name: "link3"}, {id:4, name: "link4"}]
const jobsMenus = [{id: 1, name: "link1"}, {id:2, name: "link2"}, {id:3, name: "link3"}, {id:4, name: "link4"}]
const applicationsMenus = [{id: 1, name: "link1"}, {id:2, name: "link2"}, {id:3, name: "link3"}, {id:4, name: "link4"}]
const booksMenus = [{id: 1, name: "link1"}, {id:2, name: "link2"}, {id:3, name: "link3"}, {id:4, name: "link4"}]
const accountMenus = [{id: 1, name: "link1"}, {id:2, name: "link2"}, {id:3, name: "link3"}, {id:4, name: "link4"}]

export default function Sidebar() {
  const [showDashboardSubmenu, setShowDashboardSubmenu] = useState(false)
  const [showJobsSubmenu, setShowJobsSubmenu] = useState(false)
  const [showApplicationsSubmenu, setShowApplicationsSubmenu] = useState(false)
  const [showBooksSubmenu, setShowBooksSubmenu] = useState(false)
  const [showAccountSubmenu, setShowAccountSubmenu] = useState(false);

  // show dashboard dropdown 
  const showsDashboardDropdown = () => {
    setShowDashboardSubmenu(!showDashboardSubmenu)
    setShowJobsSubmenu(false)
    setShowAccountSubmenu(false)
    setShowBooksSubmenu(false)
    setShowApplicationsSubmenu(false)
  }

  // show jobs dropdown
  const showJobsDropdown = () => {
    setShowJobsSubmenu(!showJobsSubmenu)
    setShowDashboardSubmenu(false)
    setShowAccountSubmenu(false)
    setShowBooksSubmenu(false)
    setShowApplicationsSubmenu(false)
  }

  // show books dropdown
  const showBooksDropdown = () => {
     setShowBooksSubmenu(!showBooksSubmenu)
     setShowJobsSubmenu(false)
    setShowAccountSubmenu(false)
    setShowDashboardSubmenu(false)
    setShowApplicationsSubmenu(false)
  }

  // show applications dropdown
  const showApplicationsDropdown = () => {
    setShowApplicationsSubmenu(!showApplicationsSubmenu);
    setShowJobsSubmenu(false)
    setShowAccountSubmenu(false)
    setShowBooksSubmenu(false)
    setShowDashboardSubmenu(false)
  }

  // show account dropdown
  const showAccountDropdown = () => {
    setShowAccountSubmenu(!showAccountSubmenu)
    setShowDashboardSubmenu(false)
    setShowJobsSubmenu(false)
    setShowBooksSubmenu(false)
    setShowApplicationsSubmenu(false)
  }

  return (
    <div className='h-full flex flex-col gap-4'>
        <ul>
          {/* dashboard */}
          <li className='border-b mb-2'>
            <div className='flex items-center justify-between mb-1'>
              <div className='flex items-center gap-2'>
                <span className='flex items-center justify-center text-white'><FaDashcube className='text-lg'/></span>
                <h3 className='text-lg text-white font-semibold'>Dashboard</h3>
              </div>
              <button className='flex items-center justify-center text-white text-lg' onClick={showsDashboardDropdown}>{showDashboardSubmenu ? <FaAngleUp/> : <FaAngleDown/>}</button>
            </div>

            {/* show dropdown */}
            {showDashboardSubmenu && <Dropdown links={dashboardMenus} />}
          </li>

          {/* jobs */}
          <li className='border-b mb-2'>
            <div className='flex items-center justify-between mb-1'>
              <div className='flex items-center gap-2'>
                <span className='flex items-center justify-center text-white'><FaBriefcase className='text-lg'/></span>
                <h3 className='text-lg text-white font-medium'>Jobs</h3>
              </div>
              <button className='flex items-center justify-center text-white text-lg' onClick={showJobsDropdown}>{showJobsSubmenu ? <FaAngleUp/> : <FaAngleDown/>}</button>
            </div>

            {/* show dropdown */}
            {showJobsSubmenu && <Dropdown links={jobsMenus} />}
          </li>

          {/* applications */}
          <li className='border-b mb-2'>
            <div className='flex items-center justify-between mb-1'>
              <div className='flex items-center gap-2'>
                <span className='flex items-center justify-center text-white'><FaDashcube className='text-lg'/></span>
                <h3 className='text-lg text-white font-medium'>My Applications</h3>
              </div>
              <button className='flex items-center justify-center text-white text-lg' onClick={showApplicationsDropdown}>{showApplicationsSubmenu ? <FaAngleUp/> : <FaAngleDown/>}</button>
            </div>

            {/* show dropdown */}
            {showApplicationsSubmenu && <Dropdown links={applicationsMenus} />}
          </li>


          {/* books */}
          <li className='border-b mb-2'>
            <div className='flex items-center justify-between mb-1'>
              <div className='flex items-center gap-2'>
                <span className='flex items-center justify-center text-white'><FaDashcube className='text-lg'/></span>
                <h3 className='text-lg text-white font-medium'>Books</h3>
              </div>
              <button className='flex items-center justify-center text-white text-lg' onClick={showBooksDropdown}>{showBooksSubmenu ? <FaAngleUp/> : <FaAngleDown/>}</button>
            </div>

            {/* show dropdown */}
            {showBooksSubmenu && <Dropdown links={booksMenus} />}
          </li>

          {/* account */}
          <li className='border-b mb-2'>
            <div className='flex items-center justify-between mb-1'>
              <div className='flex items-center gap-2'>
                <span className='flex items-center justify-center text-white'><FaDashcube className='text-lg'/></span>
                <h3 className='text-lg text-white font-medium'>My Account</h3>
              </div>
              <button className='flex items-center justify-center text-white text-lg' onClick={showAccountDropdown}>{showAccountSubmenu ? <FaAngleUp/> : <FaAngleDown/>}</button>
            </div>

            {/* show dropdown */}
            {showAccountSubmenu && <Dropdown links={accountMenus} />}
          </li>
        </ul>
                       
    </div>
  )
}
