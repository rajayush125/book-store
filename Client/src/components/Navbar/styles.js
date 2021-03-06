import { makeStyles } from '@material-ui/core/styles';
import { LocalDiningOutlined, NoEncryption } from '@material-ui/icons';
import { mergeClasses, withThemeCreator } from '@material-ui/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    color:'white',
    boxShadow: 'none',
    background:'#1C2331',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      
    },
    
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    '&:hover': {
      color: '#ffff',
      boxShadow: 'none',    
    },
    
  },
  cartt : {
    '&:hover': {
      color: '#ffff',
      boxShadow: 'none',    
    },
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  link: {
    color: 'white',
    fontWeight: 'bold',
    padding:'15px',
    textDecoration: 'none',
    '&:hover': {
      color: '#ffff',
         
    },
    
  },
  log: {
    borderStyle: 'none',
    background:'#1C2331',
    color : 'white',
    fontWeight: 'bold'

  },
  searchs: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '40px',
    },
  searchb: {
    marginBottom: '10px',
    height: '50%',
    width: '50%',
    paddingLeft: '10px',
    },
}));

