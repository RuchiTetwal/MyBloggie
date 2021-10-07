import {Box, makeStyles, Typography} from '@material-ui/core';
import {Edit , Delete} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme)=>(
    {
        container:{
            padding:'0 100px',
            [theme.breakpoints.down('md')]:
            {
                padding:0
            }
        },
        image:{
            width:'100%',
            height:'50vh',
            objectFit:'cover'
        },
        icons:{
            float:'right'
        },
        icon:{
            margin:5,
            border:'1px solid #878787',
            padding:5,
            borderRadius:10
        },
        heading:{
            fontSize:38,
            fontWeight:600,
            textAlign:'center',
            margin:'50px 0 10px 0'
        },
        subheading:{
            color:'#878787',
            display:'flex',
            margin:'20px 0',
            [theme.breakpoints.down('sm')]:{
                display:'block'
            }
        },
        link:{
            textDecoration:'none'
        }
    })
)

const DetailView = ()=>{
    const classes= useStyles();
    const url='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80';
    return (
       
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image}/>
            <Box className={classes.icons}>
                <Link classname={classes.link} to='/update'><Edit className={classes.icon} color='primary'/></Link>
                <Delete className={classes.icon} color='error'/>
            </Box>

            <Typography className={classes.heading}>Title of the Blog</Typography>

            <Box className={classes.subheading}>
                <Typography>Author:<span style={{fontWeight:600}} >Author name</span></Typography>
                <Typography style={{marginLeft:'auto'}}>Date</Typography>
            </Box>

            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


            </Typography>
        </Box>
    )
}
export default DetailView;