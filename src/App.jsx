import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Itemdetails from './components/Itemdetails/Itemdetails';
import Search from './components/Search/Search';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import Ingredients from './components/Ingredients/Ingredients';


let routers = createBrowserRouter ([
  {
    path: '/' , element: <Layout/> , children: [
    {index: true, element: <Home />},
    {path: 'home' , element : <Home/>},
    {path: 'about' , element : <About/>},
    {path: 'search' , element : <Search/>},
    {path: 'category' , element :<Category/> },
    {path: '/category/:categoryName' , element :<CategoryDetails/> },
    {path: 'ingredients' , element :<Ingredients/> },
    {path: 'contact' , element : <Contact/>},
    {path: '/:idMeal' , element : <Itemdetails/>},
  ]}
])

function App() {

  return <RouterProvider router ={routers} > </RouterProvider>

}

export default App;
