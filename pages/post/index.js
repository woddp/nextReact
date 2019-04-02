import Layout from '../components/layout'
import  fetch from 'isomorphic-unfetch'

const Post= (props)=>{

        if(props.show!=undefined){
            return (
                <Layout>
                    {props.show.data.data.map(({quality,videoUrl})=>{
                        return (
                            <div key={videoUrl}>
                                <h3>{quality}</h3>
                                <h3>{videoUrl}</h3>
                            </div>
                        )
                    })}
                </Layout>
            )
        }


}

Post.getInitialProps=async function (context) {
    const {id}=context.query;
    const  res=await  fetch(`http://woddp.yxilin.com/api/home/Pornhub/detailed?key=${id}`)
    const  show=await  res.json()
    return {show}
};

export  default Post;