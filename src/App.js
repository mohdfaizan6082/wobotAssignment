import './App.css';

function App() {

  return (
    <div className="App bg-slate-200 flex flex-col justify-center items-center h-screen">
     <div className='bg-white w-[560px] h-[611px] rounded-xl justify-center text-center shadow-lg'>
      <div className='w-[400px] flex flex-col justify-center items-center ml-10'>
        <img className='ml-[90px] w-[250px]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--S0wmFAwV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/gps288sq4owbwhmn30jg.PNG" alt="logo"></img>
      <h1 className='ml-[130px] mx-10 mb-3 text-2xl w-[300px] font-semibold'>It's a delight to have you onboard</h1>
      <p className='w-full ml-[75px] text-xs text-gray-800'>Help us know you better<br></br>(This is how we optimize Wobot as per your business needs)</p>
   <div className='my-5'>
    <label className='mr-[220px]'>Company Name</label>
    <input type="text" name="company" placeholder='e.g Example Inc.' className='w-full ml-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'></input>
   </div>
   <div>
    <label className='mr-[270px]'>Industry</label>
    <select placeholder='Select' className='w-full ml-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'>
            <option value="" selected>Please choose</option>
            <option value="Aggriculture">Aggriculture</option>
            <option value="Education"> Education</option>
            <option value="Automobile"> Automobile</option>
            <option value="Finance"> Finance</option>
    </select>
   <div className='my-7'>
   <label className='mr-[230px]'>Company Size</label>
   <div className='ml-3'>
    <button type="select" className='bg-gray-200 p-1.5 text-sm rounded-md focus:bg-blue-500 focus:text-white mt-3 mx-3' >1-20</button>
    <button type="select" className='bg-gray-200 p-1.5 text-sm rounded-md focus:bg-blue-500 focus:text-white mt-3 mx-3' >20-50</button>
    <button type="select" className='bg-gray-200 p-1.5 text-sm rounded-md focus:bg-blue-500 focus:text-white mt-3 mx-3' >50-200</button>
    <button type="select" className='bg-gray-200 p-1.5 text-sm rounded-md focus:bg-blue-500 focus:text-white mt-3 mx-3' >201-500</button>
    <button type="select" className='bg-gray-200 p-1.5 text-sm rounded-md focus:bg-blue-500 focus:text-white mt-3 mx-3' >500+</button>
    </div>
   </div>
   </div>
   <button type="submit" className='bg-blue-500 text-white w-full rounded-lg p-2 ml-[4rem] focus:bg-blue-600'>Get Started</button>
   </div>
     </div>
     <footer className='w-full mt-6'>
      <a href="#" className='focus:text-blue-500'>Terms of use </a>|
      <a href="#" className='focus:text-blue-500'> Privacy Policy</a>
     </footer>
    </div>
  );
}

export default App;
