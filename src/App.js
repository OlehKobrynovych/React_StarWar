import React from 'react';
import './App.css';
import Navbarr from './components/Navbarr';
import Loading from './components/Loading';

// import Dashboard from './components/Dashboard';
// import Peoples from './components/Peoples';
// import Planets from './components/Planets';
// import People from './components/People';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Peoples = React.lazy(() => import('./components/Peoples'));
const Planets = React.lazy(() => import('./components/Planets'));
const People = React.lazy(() => import('./components/People'));
const Planet = React.lazy(() => import('./components/Planet'));

function App() {

  console.log('App');
  

  return (
        <Container>
            <Navbarr />
            <React.Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/peoples" element={<Peoples />} />
                    <Route path="/people/:id" element={<People />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/planet/:id" element={<Planet />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </React.Suspense>
        </Container>
  );
}

export default React.memo(App);
