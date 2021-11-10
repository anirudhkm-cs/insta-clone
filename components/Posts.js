import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'a_k',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'I love myself!!!'
    },
    {
        id: '124',
        username: 'a_p',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'I love myself!!!'
    }
]
function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} 
                      id={post.id} 
                      username={post.username} 
                      userImg={post.userImg} 
                      img={post.img} 
                      caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts
