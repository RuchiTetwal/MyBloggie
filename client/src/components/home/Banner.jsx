import { makeStyles, Box,Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image:{
        background: `url(${'https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg'}) center/100% repeat-x #000`,
        width:'100%',
        height:'70vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        '& :first-child':{
            fontSize: 70,
            color: '#FFFFFF',
            textShadow : '3px 3px 3px  black'
        },

    }
});

const Banner = ()=>{
    const classes = useStyles();

    return(
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
        </Box>
    )
}

export default Banner;