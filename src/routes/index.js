import { Router } from 'express'
const router = Router()

const generos = ['Fantasía', 'Terror', 'Ciencia Ficción'];

router.get('/', (req, res) => {
    res.render('index', { title: 'ficRealm', generos });
});

router.get('/about', (req, res) => res.render('about', {title: 'ficRealm'}))

router.get('/resultado', (req, res) => {
    const query = req.query.query;
    res.render('resultados', { title: 'ficRealm', query });
  });

  router.get('/cuento', (req, res) => {
    const query = req.query.query;
    res.render('cuento', { title: 'ficRealm', query });
  });

  router.get('/subircuento', (req, res) => res.render('subircuento', {title: 'ficRealm'}))

  router.get('/confirmacion', (req, res) => res.render('confirmacion', {title: 'ficRealm'}))

router.get('/uHaf7tNp2dqR8YzB6m', (req, res) => {
  res.render('indexAdmin', { title: 'ficRealm', generos });
});

router.get('/editarCuento/:id', async (req, res) => {
  const cuentoId = req.params.id;
  try {
      const cuento = await getCuentoById(cuentoId);
      res.render('editarCuento', { cuento: cuento.data(), id: cuentoId });
  } catch (error) {
      console.error('Error al obtener el cuento:', error);
      res.status(500).send('Error al obtener el cuento ');
  }
});

export default router