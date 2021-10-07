import {Box , makeStyles, Button,TextareaAutosize, FormControl, InputBase} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    container:{
        padding: '0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0
        }
    },
    image:{
        width: '100%',
        height:'50vh',
        objectFit:'cover'
    },
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:'10px'
    },
    textField:{
        flex:1,
        margin:'0 30px',
        fontSize:25
    },
    textarea:{
        width:'100%',
        marginTop:50,
        border: 'none',
        fontSize:18
    }
}));

const UpateView = () =>{
    const classes = useStyles();
    const url ='https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80';

    return(
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="banner"/>

            <FormControl className={classes.form}>
                <AddCircle fontSize='large' color='action'/>

                <InputBase className={classes.textField} placeholder='Title'/>

                <Button varient="contained" color='primary'>
                Update
            </Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                />

            
        </Box>
    )
}

export default UpateView;