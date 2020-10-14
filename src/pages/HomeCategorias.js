import React, { useState, useEffect } from 'react';
import ProductCategory from '../components/Product';
import './styles/HomeProduct.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Category from '../components/Category';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none',
  },
}));

function HomeCategorias(props) {
  const classes = useStyles();

  const [prodcat, setprodcat] = useState('');

  const catid = props.datosca.match.params.idCat;
  
  useEffect(() => {
    axios.get("https://alpaka-peru.herokuapp.com/servicios/categorias_name/"+ catid ).then((res) => {
      let productcat = res.data;
      setprodcat(productcat);
    });
  }, [ catid]);



  return (
    <div className={classes.root}>
      <div className="container homecontent ">
        <Grid container>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div className="">Categorias</div>
              
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <div className="product-grid">
              <ProductCategory otorsda={prodcat} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeCategorias;
