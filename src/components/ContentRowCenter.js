import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Error404 from './Error404';
import Chart from './Chart';
import Main from './Main';
import {Routes,Route} from 'react-router-dom';

function ContentRowCenter(){
    return (
        <div className="row">
            
            <Routes>
            <Route path='/' element={<Main />}/>

            <Route path='/movies' element={<Chart />}/>

           <Route path='/lastmovie' element={<LastMovieInDb />}/>
           <Route path='/genres' element={<GenresInDb />}/>
           <Route path='*' element={<Error404/>}/>
           </Routes>

            
            

        </div>
    )
}

export default ContentRowCenter;