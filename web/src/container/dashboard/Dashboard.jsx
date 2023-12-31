import React, { useEffect } from 'react';
import { Grid, useMediaQuery, useTheme} from '@mui/material/';
import NavDashboard from '../../components/navDashboard/NavDashboard';
import { makeStyles } from '@mui/styles';
const linksArray = ['Charts', 'Users'];
import NavDashboard2 from '../../components/navDachboard2/NavDashboard2';
import NewsItems from '../../components/news/NewsItems'

const useStyle = makeStyles({
  btn: {
    background: 'black',
    color: 'white'
  }
});
export default function Dashboard() {

  const styles = useStyle();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  

  
  return (
    <div>
      <NavDashboard 
      links={linksArray}
       />
      <Grid container>
          {
            !isMatch &&
            <Grid item md={3} columns={2}>
              <NavDashboard2/>
            </Grid>
          }

          <Grid item xs={12} md={9}
                    
                    sx={{
                    marginTop: '9rem',
                }} >
                    <NewsItems/>
                </Grid>
      </Grid>
        

    </div>
  )
};;
