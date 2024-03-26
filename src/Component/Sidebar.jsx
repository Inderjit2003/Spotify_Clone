import React from 'react'
import { Card, Stack } from 'react-bootstrap'
import UpSidebar from './UpSidebar'
import MidSidebar from './MidSidebar'
import FotSidebar from './FotSidebar'

export default function Sidebar() {
  return (
    <>
       <div>
        <Stack gap={3}>
          <div className='Up'>
            <Card style={{backgroundColor:'#121212' , border:'none'}} className='mx-2 mt-2'>
            <UpSidebar />
            </Card>
          </div>
          <div className='mid'>
            <Card style={{backgroundColor:'#121212' , border:'none'}} className=' ms-2 me-1'>
                  <MidSidebar />
                  <div className='fot mb-4'style={{marginTop:'10px'}} >
                      <FotSidebar />
                  </div>
            </Card>

          </div>
        </Stack>
       </div>
    </>
  )
}
