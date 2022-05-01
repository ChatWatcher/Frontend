import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import Simple from './Pages/Landing/Landing';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* if there on / redirect them to home*/}
          <Route path="/" element={<Simple />} />
          <Route path="/Home" element={<Simple />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
