
function Button(props){
  return (
    <button className={props.className}>
      {props.text}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button text="fijrst" className = "border-2 border-green-600 text-green-400 px-8 py-2 m-4 rounded-md" />
      <a href="https://www.google.com/" target='_blank'>
        <Button text="second" className="text-white px-10 py-4 m-4 bg-sky-400 rounded-lg" />
      </a>
      <Button text="third" className="bg-violet-100 text-purple-600 rounded-full m-4 px-6 py-2" />
      <Button text = "fourth" className="bg-cyan-800 text-cyan-200 p-10 rounded-lg m-2 hover:bg-cyan-200 hover:text-cyan-800" />

      <div className = {`${true? 'bg-red-500': 'bg-orange-400'} text-white`}>
        what should i write
      </div>  

    </div>
  );
}

export default App;
