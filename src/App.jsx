import React from 'react';
import { ProjectsProvider } from './components/ProjectContext';
import MyRoutes from './routes'


function App() {
  return (
    <ProjectsProvider>
     <MyRoutes />
  </ProjectsProvider>
  )
}

export default App;