export default {
    actions:{
        async fetchPosts(ctx, posts){
            ctx.commit('createPost', posts)
        },
        
    },
    mutations:{
        updatePosts(state, payload){
            state.posts.push = payload
        },
        createPost(state, newPost){
            state.posts.unshift(newPost)
            
        }
    },
    state: {
        posts: []
    },
    getters: {
        VALID_POSTS(state){
            return state.posts.filter(p => {
                return p.title 
            })
        },
        ALL_POSTS(state){
            return state.posts       
        },
        POSTS_COUNT(state, getters){
            return getters.VALID_POSTS.length
        }
    }
}