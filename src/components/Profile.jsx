import React from 'react'

const Profile = () => {
    return  <content className="content">
        <div className="content_Banner">
            <img src="https://images.unsplash.com/photo-1549212871-3670799df695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MjElM0E5fGVufDB8fDB8fHww&w=1000&q=80"/>
        </div>
        <div className="profile_info">
            <img src="https://cdn.openart.ai/stable_diffusion/1545ab07e817a8167478bbd626e3d4040ed53c00_2000x2000.webp"/>
            <div className='description'>
                desc
            </div>
        </div>
        <div className="myPosts">
        My posts
            <div className='newPost'>
                newPost
            </div>
        </div>
        <div className='posts'>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
            <div>
                post 3
            </div>
        </div>
    </content>
}

export default Profile