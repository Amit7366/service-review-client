import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
