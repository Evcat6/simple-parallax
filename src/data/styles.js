import First from '../assets/Layer-3-1.png';

export const first_layer_img = {
    backgroundImage: `url(${First})`,
    backgroundSize: 'cover',
}

export  const image_style = {
    width: '100%',
    position: 'absolute', 
    bottom: 0,
    userSelect: 'none'
  }


export const sticky = (start) => {
    return { start, end: 4 }
}