import './App.css'
import Content from './assets/components/Content'
import Hover from './assets/components/Hover'
import Sidebar from './assets/components/Sidebar'

function App() {
  return (
    <>
      <Hover />
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row lg:flex-row w-full lg:max-w-6xl">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
    
  );
}

export default App;
