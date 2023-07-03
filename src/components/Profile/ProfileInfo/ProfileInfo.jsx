import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return  (
        <div className={ classes.profile_info }>
            <div className={classes.bannerPlace}>
                <img className={classes.content_banner} src="https://images.unsplash.com/photo-1549212871-3670799df695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MjElM0E5fGVufDB8fDB8fHww&w=1000&q=80"/>
            </div>
            <div className={ classes.descriptionBlock }>
                <div className={ classes.imageBlock}>
                    <img className={classes.profile_image} src="https://cdn.openart.ai/stable_diffusion/1545ab07e817a8167478bbd626e3d4040ed53c00_2000x2000.webp"/>
                </div>
                <div className={classes.description}>Mr Capy</div>                
            </div>

        </div>
    )
}

export default ProfileInfo