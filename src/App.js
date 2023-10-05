import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import DashboardIcon from '@mui/icons-material/Dashboard';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress  variant="determinate" size={70} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          variant:'outlined'
          // variant="determinate"
        }}
      >
        <Typography variant="outlined" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

  function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);}

function createData(name, value) {
  return { name, value};
}
const rows = [
  createData('Correct Answers:', 9),
  createData('Wrong Answers', 1),
  createData('Unanswered', 1),
  createData('Skipped', 0),
  createData('Out of Time', 0),
  createData('Time Used', 2,30),
];


const drawerWidth = 240;
export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'auto',
    color: theme.palette.text.secondary,
  }));

  const drawer = (
    <div>
        <img src="https://vils.ai/wp-content/themes/hello-elementor/assets/img/logo.png" alt="Sidebar Image" style={{ width: '50%', marginTop:'20px' , marginLeft:'20px' }} />
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {['Dashboard', '1 on 1 mentor', 'Mock Interviews', 'Practice Test', 'Communication'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Reports', 'Settings', 'Premium'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardIcon />: <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },  height: '80px', backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }  , }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"  sx={{ flexGrow: 1, textAlign: 'center' , color:'black' }}>
            Writing Test 7
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ 
          width: { sm: drawerWidth }, 
          flexShrink: { sm: 0 },
          borderBottomRightRadius: 50,
                height: '750px',
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
               width: drawerWidth ,
               borderBottomRightRadius: 50,
                height: '750px',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  borderBottomRightRadius: 50,
            height: '750px',boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.2)', },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box  component="main"
        sx={{ flexGrow: 0, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)`}}}>
        <Toolbar /> 
      
<Grid container spacing={1} style={{border: 'none'}} >
  <Grid item xs={7} >
    <Item style={{ height: '700px' }}>
    <Grid item xs={7}>
     <Item  style={{ height: '350px', width: '843px' , marginLeft:'-10px'}} >
      <Typography variant='h6'><b>Your Answer:</b></Typography>
      <Typography>
      The most challenging software for me is specifically to be specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is, uh, they are quite <span style={{backgroundColor:'#DCA11D'}}>nuance and</span> all the constraints and, uh spill small, small things that needs to be learned up. Yeah. This question, it almost took <span style={{backgroundColor:'#E26161'}}>three to four</span> months to <span style={{backgroundColor:'#1C98EB'}}>complete</span> a entire software of the Adobe Illustrator.
      </Typography>
      <Typography>
      The most challenging software for me is specifically to be specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is, uh, they are quite nuance and all the constraints and, uh spill small, small things that needs to be learned up. Yeah. This question, it almost took three to four months to complete a entire software of the Adobe Illustrator.
      </Typography>
      <Typography>
      The most challenging software for me is specifically to be specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is, uh, they are quite nuance and all the constraints and, uh spill small, small things that needs to be learned up.
      </Typography>
       <div style={{display:'flex' }}>
      <div style={{display:'flex'}}><div style={{height:'10px', width:'30px' , backgroundColor:'#E26161', marginTop:'3px' , marginLeft:'290px'}}></div> &nbsp;Grammatical error</div>
      <div style={{display:'flex'}}><div style={{height:'10px', width:'30px' , backgroundColor:'#DCA11D' , marginTop:'3px', marginLeft:'9px'}}></div> &nbsp;Vocabulary error</div>
      <div style={{display:'flex'}}><div style={{height:'10px', width:'30px' , backgroundColor:'#1C98EB', marginTop:'3px', marginLeft:'12px'}}></div> &nbsp;Spelling error</div>
      </div>
      </Item>
    <Item  style={{ height: '345px', width: '843px', marginLeft:'-10px'}} >
     <div>
     <Typography variant='h6'><b>Management Score</b></Typography>
   <div style={{display:'flex', marginTop:'10px'}}>
    <div style={{marginLeft:'20px'}}><CircularProgressWithLabel value={59} /></div>
    <div style={{marginLeft:'20px' }}>
    <Typography variant='h6'><b>Focus Management</b></Typography>
    <Typography>Focus Score: Focus score refers to the ability of an individual to concentrate and direct their attention towards a specific task or information. </Typography>
   </div>
   </div>
   <div style={{display:'flex', marginTop:'10px'}}>
    <div style={{marginLeft:'20px' }}><CircularProgressWithLabel value={89} /></div>
    <div style={{marginLeft:'20px' }}>
    <Typography variant='h6'><b>Time Management</b></Typography>
    <Typography>Time Management: Time management is the practice of planning, organizing, and allocating time to tasks and activities in a way that maximizes productivity and efficiency.  </Typography>
   </div>
   </div>
   <div style={{display:'flex' , marginTop:'10px'}}>
    <div style={{marginLeft:'20px'}}><CircularProgressWithLabel value={39} /></div>
    <div style={{marginLeft:'20px'}}>
    <Typography variant='h6'><b>Critical Thinking</b></Typography>
    <Typography>Critical thinking is the process of analyzing, evaluating, and interpreting information or situations in a logical and systematic manner. </Typography>
   </div>
   </div>


     </div>




     </Item>
    </Grid> 
    </Item>
  </Grid>




  <Grid item xs={5} >
    <Item style={{ height: '700px' }}>
    {/* <Grid item xs={7}> */}
    <div>
    <Item style={{ height: '90px', width: '577px' , backgroundColor: '#BAE2FD' , textAlign:'center'}} ><Typography variant='h4' style={{marginTop:'10px'}}><b>Results</b></Typography></Item>
    <Item style={{ height: '580px', width: '577px'}} >
    <Typography variant='h6'><b>Results</b></Typography>
    <Typography variant='h5'><b>Score 74%</b></Typography>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 74, label: 'A' },
            { id: 1, value: 10, label: 'B' },
            { id: 2, value: 15, label: 'C' },
          ],
        },
      ]}
      width={500}
      height={200}
    />

<TableContainer component={Paper} style={{width:'580px' ,marginLeft:'-10px',height:'333px'}}>
      <Table sx={{ minWidth: 450, maxHeight: 20  }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Analysis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '& td, & th': { border: 0, padding: 1.55 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{row.value1}</TableCell>
              <TableCell align="right">{row.value2}</TableCell>
              <TableCell align="right">{row.value3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </Item>
    </div>
  {/* </Grid>  */}
    </Item>
  </Grid>

</Grid>







      </Box>
    </Box>
  );
}
