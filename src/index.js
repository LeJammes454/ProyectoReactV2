import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Vehiculo from './Vehiculo';
import Tarjeta from './Tarjeta';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Vehiculo
      nombre="Ford Ranger"
      imagen="https://i.pinimg.com/originals/a0/83/52/a08352bf98880fdad355ae5839bbda16.jpg"
      descripcion="Conoce la espectacular Camioneta Todoterreno Ford Ranger , la nueva
      integrante de la familia Ford"
    />
    <Vehiculo
      nombre="Zontes U1"
      imagen="https://zontesmalaysia.com/wp-content/uploads/2021/10/155U1-Orange-A.png"
      descripcion="¿Una Trail ligera, dinámica y provocativa? Sin duda alguna, la respuesta es: U1-125."
    />
    

  </StrictMode>
);
