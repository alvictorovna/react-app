import React from 'react';
import {withLoginHOC} from './Login/withLoginHOC';

const HomeComponent = ()=> (
    <div className = 'home'>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta turpis, ut iaculis justo.</p>
    </div>
)
        

export const Home = withLoginHOC(HomeComponent);