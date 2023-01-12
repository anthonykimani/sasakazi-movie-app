import react,{ useState, useEffect } from 'react';
import Search from './Search';

const MovieSection = () => {

    const [ movies, setMovies ] = useState([]);

    //fetch properties
    useEffect(()=>{
        const getMovies = async ()=>{
            let response = await fetch('https://movie-database-alternative.p.rapidapi.com',{

            })
        }
    },[])

    return ( 
        <div className='h-[300px]'>
            <div>
                <h3>Featured Movies</h3>
                <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
            <div>
                <Search />
            </div>
        </div>
     );
}
 
export default MovieSection;