import React from 'react';
import {withLoginHOC} from './Login/withLoginHOC'

const profileComponent = ()=> (
    <div className = 'profile'>
       <h1>Profile</h1>
       <p>Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat congue. In bibendum vestibulum orci et feugiat.</p>
    </div>
)
        

export const Profile = withLoginHOC(profileComponent);