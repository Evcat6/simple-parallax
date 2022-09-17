import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react'
import Second from './assets/Gradient-Fill-1-1.png';
import Third from './assets/Layer-2-1.png';
import Button from './Components/Button';
import { image_style, first_layer_img, sticky} from './data/styles'



function App() {

  const ref = useRef();

  return (
    <div className="App">
      <Parallax pages={3} ref={ref} >
        <ParallaxLayer 
        sticky={sticky(0)}
        offset={0} 
        style={first_layer_img}>
        <Button onClick={() => ref.current.scrollTo(3)} />
        </ParallaxLayer>
        <ParallaxLayer
        sticky={sticky(1)}
        offset={1} 
        >
          <img src={Second}  style={image_style} />
        </ParallaxLayer>
        <ParallaxLayer
        offset={3} 
        sticky={sticky(2)}
        >
          <img src={Third}  style={image_style} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App;
