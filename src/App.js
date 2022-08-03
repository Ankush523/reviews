import logo from './logo.svg';
import './App.css';
import Review from './components/Review';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center ">
      <h1 className='pb-[50px] text-[40px] text-sky-600'>Reviews</h1>
      <div className='w-[40%] h-[fit-content]'>
      <Review/>
      </div>
    </div>
  );
}

export default App;
