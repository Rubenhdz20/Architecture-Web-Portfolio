import React, { createContext, useState } from 'react';

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: '/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg',
      images: ['../public/Fuentes del Molino/IMG_4680.jpeg', '../public/Fuentes del Molino/IMG_4309.jpeg', '../public/Fuentes del Molino/IMG_4311.jpeg', '../public/Fuentes del Molino/IMG_4422.jpeg', '../public/Fuentes del Molino/IMG_5051.jpeg', '../public/Fuentes del Molino/IMG_6737 2.jpeg', '../public/Fuentes del Molino/IMG_4322.jpeg', '../public/Fuentes del Molino/IMG_5041.jpeg', '../public/Fuentes del Molino/IMG_5055.jpeg', '../public/Fuentes del Molino/IMG_5743.jpeg', '../public/Fuentes del Molino/IMG_6740.jpeg', '../public/Fuentes del Molino/IMG_6739.jpeg', '../public/Fuentes del Molino/IMG_7156.jpeg', '../public/Fuentes del Molino/IMG_8732.jpeg', '../public/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg', '../public/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', '../public/Fuentes del Molino/IMG_9791.jpeg'], 
      name: 'Casa Fuentes del Molino',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    },
    {
      id: 2,
      image: '/Altana/IMG_1159.jpg', 
      images: ['../public/Altana/IMG_5769.jpeg', '../public/Altana/IMG_5772.jpeg', '../public/Altana/IMG_5775.jpeg', '../public/Altana/IMG_5903.jpeg', '../public/Altana/IMG_8700.jpeg', '../public/Altana/IMG_8702.jpeg', '../public/Altana/IMG_8711.jpeg', '../public/Altana/IMG_9281.jpg', '../public/Altana/IMG_9379.jpeg', '../public/Altana/IMG_9380.jpeg', '../public/Altana/IMG_9382.jpeg', '../public/Altana/IMG_9383.jpeg', '../public/Altana/IMG_9525.jpeg', '../public/Altana/IMG_9527.jpeg', '../public/Altana/IMG_9531.jpeg', '../public/Altana/IMG_9532.jpeg'], 
      name: 'Fraccionamiento Altana',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    },
    {
      id: 3,
      image: '/San Pieri/IMG_1399.jpeg', 
      images: ['../public/San Pieri/IMG_1159.jpg', '../public/San Pieri/IMG_1396.jpeg', '../public/San Pieri/IMG_1398.jpg', '../public/San Pieri/IMG_1399.jpeg', '../public/San Pieri/IMG_1400.jpeg', '../public/San Pieri/IMG_1401.jpeg', '../public/San Pieri/IMG_2244.jpeg', '../public/San Pieri/IMG_9525 (1).jpeg', '../public/San Pieri/SP-01.jpg', '../public/San Pieri/SP-01.jpg', '../public/San Pieri/SP-02.jpg', '../public/San Pieri/SP-03.jpg'], 
      name: 'Fraccionamiento San Pieri',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    },
    {
      id: 4,
      image: '/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 
      images: [''], 
      name: 'Casa 950',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    }
  ]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };