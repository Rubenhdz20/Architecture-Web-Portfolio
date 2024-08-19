import React, { createContext, useState } from 'react';

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: 'dist/Casa950/photo_2024-06-22 18.27.38.jpeg', 
      images: ['dist/Casa950/photo_2024-06-22 18.01.03.jpeg', 'dist/Casa950/photo_2024-06-22 18.13.25.jpeg', 'dist/Casa950/photo_2024-06-22 18.14.00.jpeg', 'dist/Casa950/photo_2024-06-22 18.14.16.jpeg', 'dist/Casa950/photo_2024-06-22 18.14.39.jpeg', 'dist/Casa950/photo_2024-06-22 18.15.04.jpeg', 'dist/Casa950/photo_2024-06-22 18.15.17.jpeg', 'dist/Casa950/photo_2024-06-22 18.15.31.jpeg', 'dist/Casa950/photo_2024-06-22 18.15.49.jpeg', 'dist/Casa950/photo_2024-06-22 18.16.49.jpeg', 'dist/Casa950/photo_2024-06-22 18.17.03.jpeg', 'dist/Casa950/photo_2024-06-22 18.17.16.jpeg', 'dist/Casa950/photo_2024-06-22 18.17.29.jpeg', 'dist/Casa950/photo_2024-06-22 18.17.41.jpeg', 'dist/Casa950/photo_2024-06-22 18.17.50.jpeg', 'dist/Casa950/photo_2024-06-22 18.18.02.jpeg', 'dist/Casa950/photo_2024-06-22 18.18.16.jpeg', 'dist/Casa950/photo_2024-06-22 18.18.28.jpeg', 'dist/Casa950/photo_2024-06-22 18.18.42.jpeg', 'dist/Casa950/photo_2024-06-22 18.18.57.jpeg', 'dist/Casa950/photo_2024-06-22 18.19.12.jpeg', 'dist/Casa950/photo_2024-06-22 18.19.28.jpeg', 'dist/Casa950/photo_2024-06-22 18.19.39.jpeg', 'dist/Casa950/photo_2024-06-22 18.19.50.jpeg', 'dist/Casa950/photo_2024-06-22 18.20.00.jpeg', 'dist/Casa950/photo_2024-06-22 18.20.09.jpeg', 'dist/Casa950/photo_2024-06-22 18.20.19.jpeg', 'dist/Casa950/photo_2024-06-22 18.20.33.jpeg', 'dist/Casa950/photo_2024-06-22 18.20.48.jpeg', 'dist/Casa950/photo_2024-06-22 18.21.05.jpeg', 'dist/Casa950/photo_2024-06-22 18.21.31.jpeg', 'dist/Casa950/photo_2024-06-22 18.21.42.jpeg', 'dist/Casa950/photo_2024-06-22 18.21.53.jpeg', 'dist/Casa950/photo_2024-06-22 18.22.02.jpeg', 'dist/Casa950/photo_2024-06-22 18.22.14.jpeg', 'dist/Casa950/photo_2024-06-22 18.22.31.jpeg', 'dist/Casa950/photo_2024-06-22 18.22.41.jpeg', 'dist/Casa950/photo_2024-06-22 18.22.58.jpeg', 'dist/Casa950/photo_2024-06-22 18.23.21.jpeg', 'dist/Casa950/photo_2024-06-22 18.23.30.jpeg', 'dist/Casa950/photo_2024-06-22 18.24.10.jpeg', 'dist/Casa950/photo_2024-06-22 18.24.21.jpeg', 'dist/Casa950/photo_2024-06-22 18.24.29.jpeg', 'dist/Casa950/photo_2024-06-22 18.24.41.jpeg', 'dist/Casa950/photo_2024-06-22 18.24.57.jpeg', 'dist/Casa950/photo_2024-06-22 18.25.25.jpeg', 'dist/Casa950/photo_2024-06-22 18.25.42.jpeg', 'dist/Casa950/photo_2024-06-22 18.25.51.jpeg', 'dist/Casa950/photo_2024-06-22 18.26.02.jpeg', 'dist/Casa950/photo_2024-06-22 18.26.13.jpeg', 'dist/Casa950/photo_2024-06-22 18.26.22.jpeg', 'dist/Casa950/photo_2024-06-22 18.26.43.jpeg', 'dist/Casa950/photo_2024-06-22 18.26.55.jpeg', 'dist/Casa950/photo_2024-06-22 18.27.08.jpeg', 'dist/Casa950/photo_2024-06-22 18.27.17.jpeg', 'dist/Casa950/photo_2024-06-22 18.27.26.jpeg', 'dist/Casa950/photo_2024-06-22 18.27.38.jpeg', 'dist/Casa950/photo_2024-06-22 18.27.59.jpeg'], 
      name: 'Casa 950',
      date: 'Puebla, Mexico - Febrero 2024',
      description: 'Esta casa tiene una superficie de total construida de 640m2, la intención en este proyecto fue dejar ventanales grandes para mayor ventilación e iluminación, se realizó la distribución de la siguiente manera: ',
      details: 'Planta Baja (Sala - Comedor - Cocina - Bodega - Recámara  Principal - Medio Baño - Área de Asadores)',
      details2: 'Primer Nivel (3 Recámaras - Sala de Tv - Oficina - Área de Lavado)',
      details3: 'Segundo Nivel (Roof Garden - Cuarto de Juegos - Medio Baño - Cuarto de Servicio)'
    },
    {
      id: 2,
      image: 'dist/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg',
      images: ['dist/Fuentes del Molino/IMG_4680.jpeg', 'dist/Fuentes del Molino/IMG_4309.jpeg', 'dist/Fuentes del Molino/IMG_4311.jpeg', 'dist/Fuentes del Molino/IMG_4422.jpeg', 'dist/Fuentes del Molino/IMG_5051.jpeg', 'dist/Fuentes del Molino/IMG_6737 2.jpeg', 'dist/Fuentes del Molino/IMG_4322.jpeg', 'dist/Fuentes del Molino/IMG_5041.jpeg', 'dist/Fuentes del Molino/IMG_5055.jpeg', 'dist/Fuentes del Molino/IMG_5743.jpeg', 'dist/Fuentes del Molino/IMG_6740.jpeg', 'dist/Fuentes del Molino/IMG_6739.jpeg', 'dist/Fuentes del Molino/IMG_7156.jpeg', 'dist/Fuentes del Molino/IMG_8732.jpeg', 'dist/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg', 'dist/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 'dist/Fuentes del Molino/IMG_9791.jpeg'], 
      name: 'Casa Fuentes del Molino',
      date: 'Puebla, Mexico - Enero 2023',
      description: 'La Casa Fuentes del Molino se destaca por su diseño arquitectónico contemporáneo y funcional, con una superficie total construida de 400 m². Este proyecto, ubicado en una esquina, presenta el reto de trabajar con dos fachadas, lateral y principal, optimizando así la integración y el aprovechamiento del terreno. Cada nivel ha sido diseñado meticulosamente para proporcionar confort y funcionalidad, asegurando una experiencia de vida óptima y armoniosa para sus habitantes. ',
      details: 'Planta Baja (Sala - Comedor - Cocina - Cuarto de Servicio - Recámara - Baño Completo)',
      details2: 'Primer Nivel (3 Recámaras - Sala de Tv - Oficina)',
      details3: 'Segundo Nivel (Roof Garden - Recámara)'
    },
    {
      id: 3,
      image: 'dist/Altana/IMG_1159.jpg', 
      images: ['dist/Altana/IMG_5769.jpeg', 'dist/Altana/IMG_5772.jpeg', 'dist/Altana/IMG_5775.jpeg', 'dist/Altana/IMG_5903.jpeg', 'dist/Altana/IMG_8700.jpeg', 'dist/Altana/IMG_8702.jpeg', 'dist/Altana/IMG_8711.jpeg', 'dist/Altana/IMG_9281.jpg', 'dist/Altana/IMG_9379.jpeg', 'dist/Altana/IMG_9380.jpeg', 'dist/Altana/IMG_9382.jpeg', 'dist/Altana/IMG_9383.jpeg', 'dist/Altana/IMG_9525.jpeg', 'dist/Altana/IMG_9383.jpeg', 'dist/Altana/IMG_9531.jpeg', 'dist/Altana/IMG_9532.jpeg'], 
      name: 'Fraccionamiento Altana',
      date: 'Puebla, Mexico - Abril 2022',
      description: 'Fraccionamiento de 2 hectáreas, donde se logró diseñar y distribuir 110 lotes cada uno con sus salidas de servicios de luz, agua y drenaje. En este proyecto se quiso hacer un estilo toscano y moderno dejando como característica la piedra, madera, herrería en caseta de vigilancia y casa club.'
    },
    {
      id: 4,
      image: 'dist/San Pieri/IMG_1399.jpeg', 
      images: ['dist/San Pieri/IMG_1159.jpg', 'dist/San Pieri/IMG_1396.jpeg', 'dist/San Pieri/IMG_1398.jpg', 'dist/San Pieri/IMG_1399.jpeg', 'dist/San Pieri/IMG_1400.jpeg', 'dist/San Pieri/IMG_1401.jpeg', 'dist/San Pieri/IMG_2244.jpeg', 'dist/San Pieri/IMG_9525 (1).jpeg', 'dist/San Pieri/SP-01.jpg',  'dist/San Pieri/SP-02.jpg', 'dist/San Pieri/SP-03.jpg'], 
      name: 'Fraccionamiento San Pieri',
      date: 'Puebla, Mexico - Febrero 2021',
      description: 'Fraccionamiento de 1 hectárea, donde se logró diseñar y distribuir 63 lotes cada uno con sus salidas de servicios de luz, agua y drenaje. En este proyecto se quiso hacer un estilo toscano dejando como característica la piedra en caseta de vigilancia y casa club.'
    },
  ]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };