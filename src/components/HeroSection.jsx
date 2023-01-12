import heroImage from '../assets/hero-image.png';
import Navigation from './Navigation';

const HeroSection = () => {
    return ( 
        <div style={{ 
            backgroundImage: `url("${heroImage}")`}} className="w-[100%] min-h-[800px] h-[100%] bg-cover bg-no-repeat bg-black  bg-opacity-30 bg-blend-darken flex justify-between flex-col bg-fixed">
                <Navigation />
        </div>
     );
}
 
export default HeroSection;