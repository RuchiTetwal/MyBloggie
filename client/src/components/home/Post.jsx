import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    container:{
        height:350,
        margin:10,
        borderRadius:10,
        border:'1px solid black',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        '&>*':{
            padding:'0 5px 5px 5px'
        }
    },
    image:{
        height:150,
        width:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0 '
    },
    text:{
        color:'#878787',
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:600
    },
    detail:{
        wordBreak:'break-word'
    }

})
const Post =()=>{
    const url = 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80';
    const classes= useStyles();

    return (

        <>
            <Box className = {classes.container}>
                <img className ={classes.image} src={url} alt="post image"/>
                <Typography className={classes.text}>Type</Typography>
                <Typography className={classes.heading}>Heading</Typography>
                <Typography className={classes.text}>Author Name</Typography>
                <Typography className={classes.detail}>Content</Typography>
            </Box>
        </>
    )
}

export default Post;