
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        height: 350,
        border: '1px solid #d3cede',
        borderRadius: 10,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin: 10,
        '& > *':{
            padding: '0 5px 5px 5px'

        }
        
    },
    image: {
    
        width:'100%',
        objectFit:'cover',

        borderRadius: '10px 10px 0 0',
        height: 150
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign:'center'
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Post = ({post}) => {
    const classes = useStyle();
    
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
    
     const addEllipsis = (str, limit) => {
         return str.length > limit ? str.substring(0, limit) + '...' : str;
     } 

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            
             <Typography className={classes.textColor}>{post.categories}</Typography>
            <Typography className={classes.heading}>{addEllipsis(post.title, 20)}</Typography>
            <Typography className={classes.textColor}>Author: {post.username}</Typography>
            <Typography className={classes.detail}>{addEllipsis(post.description, 100)}</Typography> 
        </Box>
    )
}

export default Post;