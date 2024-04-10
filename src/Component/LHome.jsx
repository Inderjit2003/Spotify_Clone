import React from 'react'
import SplitPane from 'react-split-pane'
import { Container } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Sidebar from './Sidebar'
import Plylist from './Plylist'
import Bottom from './Bottom'
export default function LHome() {
  return (
    <div>

<div className='container'>

        <Container className={`${Style.container}`}>
          <SplitPane   split='vertical'
             minSize={305}
             maxSize={-1100}
             defaultSize={400}
             style={{backgroundColor:'black'}}
             >
            <div  className={` me-1 ${Style.pane}`} >
                  <Sidebar />
            </div>
            <div className={`me-1 ${Style.pane}`}>
                <Plylist />
            </div>
          </SplitPane>
          </Container>
       </div>
       <Bottom />
      </div>
  )
}
