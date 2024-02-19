import { Misty, MistyClose, MistyDescription } from '@oaoong/misty'
import BodyContents from './BodyContents'

import Alter from './assets/alternative.webp'

import './App.css'

function App() {
  return (
    <>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <Misty width="700px" height="500px" Contents={<BodyContents />}>
        <MistyClose />
        <MistyDescription>
          <img src={Alter} alt="body" />
        </MistyDescription>
      </Misty>
    </>
  )
}

export default App
