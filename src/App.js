import './App.css';

// pages
import Home from './Pages/home';
import About from './Pages/about';

import RootLayout from './layout/rootLayout';
import Faq from './Pages/help/faq';
import Contact, { contactAction } from './Pages/help/contact';
import HelpLayout from './layout/helpLayout';
import NotFound from './Pages/notFound';
import CareerLayout from './layout/careerLayout';
import Career , {CareerLoader} from './Pages/career/career';
import CareerDetails from './Pages/career/careerDetails';
import { CareerDetailsLoader } from './Pages/career/careerDetails';
import CareerErrorDetails from './Pages/career/careerErrorDetails';

// import { BrowserRouter , Routes, Route, Link, NavLink } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';

const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='help' element={<HelpLayout />}>
                  <Route path='faq' element={<Faq />} />
                  <Route path='contact' element={<Contact />} action={contactAction} />
              </Route>

              <Route path='careers' element={<CareerLayout />} errorElement={<CareerErrorDetails />}>
                  <Route index element = {<Career />} loader = {CareerLoader}/>
                  <Route path=':id' element = {<CareerDetails />} loader={CareerDetailsLoader} />
              </Route>


              <Route path='*' element={<NotFound />} />
          </Route>
        )
)





function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>    
  );
}

export default App;


//  <BrowserRouter>
//             <header>
//               <nav>
//                 <h1>Hello</h1>
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="about">about</NavLink>
//               </nav>
//             </header>
//             <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path="about" element={<About />} />
              
//             </Routes>
//       </BrowserRouter>


