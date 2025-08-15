const Cat = () => {
  return (
    <div className="p-2 border-2 rounded-lg border-amber-400">
      <i className="fa-solid fa-cat text-7xl text-amber-400" />
    </div>
  );
};
function App() {
  return (
    <div>
      <div className="flex justify-center items-center h-64 p-4 m-4 border-2 border-blue-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-between h-64 p-4 m-4 border-2 border-red-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-center h-64 p-4 m-4 border-2 border-green-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-around items-end h-64 p-4 m-4 border-2 border-purple-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-around items-center h-64 p-4 m-4 border-2 border-orange-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
    </div>
  );
}

export default App;
