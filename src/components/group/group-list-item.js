import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocationOn from '@mui/icons-material/LocationOn';
import People from '@mui/icons-material/People';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign:"left",
    cursor:"pointer",
    border:"2px solid #fff",
    borderRadius:"1rem",
    padding:"0 1rem",
    display:"flex",
    justifyContent:"space-between",
    marginBottom:"1rem"
  },
  name:{
    color: theme.palette.primary.main,
  }
}));

function GroupListItem({ group }) {

    const classes = useStyles();
    const navigate = useNavigate()
    
    const groupClicked = groupId => {
        navigate(`/details/${groupId}`); 
     }
  


    return (
        <div>
            {group && 
            <div 
            onClick={()=> groupClicked(group.id)}
            className={classes.container}>
                <h3 ><span className={classes.name}>{group.name}</span>: <LocationOn/>{group.location}</h3>
                <h3><People/>{group.num_members}</h3>
                {/* <p>{group.description}</p> */}
            </div>
            }
        </div>
    );
}

export default GroupListItem;