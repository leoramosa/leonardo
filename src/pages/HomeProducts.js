import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import './styles/HomeProduct.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Category from '../components/Category';
import Container from '@material-ui/core/Container';
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

function HomeProducts() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [catego, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)

   const obtenerDatos = async () => {
     const data = await fetch("https://alpaka-peru.herokuapp.com/servicios/productos/");
     const product = await data.json();
     setProducts(product)
   }

   const obtenerCategorias = async () => {
     const datacategoria = await fetch("https://alpaka-peru.herokuapp.com/servicios/categorias/");
     const categories = await datacategoria.json();
     setCategories(categories)
   }


  useEffect(() => {
    obtenerDatos()
    obtenerCategorias()
    setLoading(false)
  }, []);

  return (
    <Container className="HomeLayout">
      <div className={classes.root}>
        <div className="container homecontent ">
          <Grid container>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className="">Categorias</div>
                <div className="">
                  <Category datosca={catego} />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <Product datos={products} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
export default HomeProducts;
