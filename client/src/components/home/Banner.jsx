
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}) center/100% #000`,
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            background:'#000000',
            lineHeight: 1
        },
    
    }
})

const Banner = () => {
    const classes = useStyle();
    
    return (
        <>
            <Box className={classes.image}>
                <Typography >MY BLOGGIE</Typography>
    
            </Box>
        </>
    )
}

export default Banner;