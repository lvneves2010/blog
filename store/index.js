import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit( vuexContext, context ) {
                return new Promise((res, rej) =>{
                  setTimeout(() => {
                    vuexContext.commit( 'setPosts', [
                          {
                          id: '1',
                          title: ' The First Post',
                          previewText: 'this is  the first post',
                          thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/518/613/non_2x/abstract-technology-background-concept-circle-circuit-digital-metal-blue-on-hi-tech-future-design-vector.jpg'
                          },
                          {
                          id: '2',
                          title: 'Second Post',
                          previewText: 'this is  the second post',
                          thumbnail: 'https://www.managedhealthcareexecutive.com/sites/default/files/Technology%20Power%20Button_2.png'
                          }
                        ]
                    )
                    res()
                  }, 1500)
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit( 'setPosts', posts )
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore