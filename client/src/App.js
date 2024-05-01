import MainContainer from './components/MainContainer';
import './styles/main.css'

function App() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold">
        RealTime Chat
      </h1> */}
      <div className='max-w-[500px] mx-auto h-screen'>
        <MainContainer/>
      </div>
    </div>
  );
}

export default App;
