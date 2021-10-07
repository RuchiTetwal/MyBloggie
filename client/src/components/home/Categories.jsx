import { Button, makeStyles,Table, TableCell, TableHead, TableRow, TableBody } from "@material-ui/core";
import { categories } from "../../constants/data";
import {Link} from  'react-router-dom';

const useStyles = makeStyles({
    create:{
        margin:20,
        background:'#6495ED',
        color:'#fff',
        width:'85%'
    },
    table:{
        border: '1px solid rgba(224,224,224,1'
    },
    link:{
        textDecoration:'none',

        color:'inherit'
    }
})

const Categories =()=>{
    const classes = useStyles();
    return(
        <>
            <Link className={classes.link} to={'/Create'}>
            <Button className={classes.create} varient="contained">Create Blog</Button>
            </Link>
            <Table classNa={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All Categories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category =>(
                            <TableRow>
                            <TableCell>{category}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
               
            </Table>
        </>
    )
}

export default Categories;