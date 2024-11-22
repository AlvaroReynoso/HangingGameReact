import image0 from '../assets/0.png';  //import specific file
import image1 from '../assets/1.png'; 
import image2 from '../assets/2.png'; 
import image3 from '../assets/3.png'; 
import image4 from '../assets/4.png'; 
import image5 from '../assets/5.png'; 
import image6 from '../assets/6.png'; 
import image7 from '../assets/7.png'; 
import image8 from '../assets/8.png'; 
import image9 from '../assets/9.png'; 

const images:string[]=[image0,        // const don't change my variable images
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,]

interface Props{
    imageNumber:number
}

export function HangImages({imageNumber}:Props){
    if(imageNumber>=9){
        imageNumber=9;
    }
    return(
        <div className='imgHang'>
            <img src={images[imageNumber]} alt="under stick" style={{width:250}}/></div>
        
    ) //JSX element
}