import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './styles/Navbar.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    width: '100%',
    justifyContent:' center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'auto',
    },
    [theme.breakpoints.down('xl')]: {
      display: 'auto',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectHome: {
    background:'white',  
    marginTop:0
  },
}));


function Navbar() {
  const classes = useStyles();

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };

    
  const [lan, setLang] = useState('1');
  const handleChange = (event) => {
    setLang(event.target.value);
    onChangeLanguage()
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt=""/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='about'
              smooth={true}
              duration={1000}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Conóceme
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='portafolio'
              smooth={true}
              duration={1000}
              onClick={closeMobileMenu}
              className='nav-links'
            >
              Portafolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='price'
              smooth={true}
              duration={1000}
              onClick={closeMobileMenu}
              className='nav-links'
              
            >
              Precios
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='contact'
              smooth={true}
              duration={1000}
              onClick={closeMobileMenu}
              className='nav-links'
              
            >
              Contáctame
            </Link>
          </li>
          <FormControl
                      variant="outlined"
                      className={classes.formControl}
            
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lan}
                        onChange={handleChange}
                        className={classes.selectHome}
                        
                      >
                        
                        <MenuItem value={1}
                        
                        >{t('home.button')}</MenuItem>
                        <MenuItem value={2}
                        
                        >{t('home.button.lan')}</MenuItem>

                      </Select>
                    </FormControl>
          
          
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;