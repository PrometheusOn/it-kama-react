let renderEntireTree = () => {
    console.log('state changed')
}

const state = {
    profilePage: {
        textNewPost:'',
        posts:[
            {id: 1, message: 'Hi, how are you', likesCount: 787},
            {id: 2, message: "I'm hungry... always hungry", likesCount: 512},
            {id: 3, message: "it's my first post", likesCount: 837},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Rama', img: 'https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album'},
            {id: 2, name: 'Amir', img: 'https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg'},
            {id: 3, name: 'Artur', img: 'https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg'},
            {id: 4, name: 'Semen', img: 'https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg'}
        ],
        messages:[
            {id: 1, message: 'hi'},
            {id: 2, message: 'how are you'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'wait...Are you nigger?'},
        ],
        textNewMessage:''
    },
    sidebar:{
        friendsList: [
            {id: 1, name: 'Rama', img: 'https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album'},
            {id: 2, name: 'Amir', img: 'https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg'},
            {id: 3, name: 'Artur', img: 'https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg'},
            {id: 4, name: 'Semen', img: 'https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg'},
        ]   
    }
}

const addPost = () => {
    let newPost = {
        id: 4, 
        message: state.profilePage.textNewPost, 
        likesCount: 127
    }
    state.profilePage.posts.push( newPost )
    state.profilePage.textNewPost = ''
    renderEntireTree( state )
}

const updatePostText = ( text ) => {
    state.profilePage.textNewPost = text
    renderEntireTree( state )
}

const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.textNewMessage
    }
    state.dialogsPage.messages.push( newMessage )
    state.dialogsPage.textNewMessage = ''
    renderEntireTree( state )
}

const updateMessageText = ( text ) => {
    state.dialogsPage.textNewMessage = text
    renderEntireTree( state )
}

const subscribe = ( observer ) => {
    renderEntireTree = observer // патерн наблюдатель
} 

export { state, addPost, updatePostText, addMessage, updateMessageText, subscribe };