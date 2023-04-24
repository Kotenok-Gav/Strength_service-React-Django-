import { PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [bdf, setBdf] = useState([]);
  const [text, setText] = useState("");
  const [start_rocket, setStart_rocket] = useState("");



  const addBdfHandler = () => {
    const postBdf = async () => {
      const postBdfdata = {
        text: text,
        start_rocket: start_rocket,

      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/bdf/",
        postBdfdata
      );
      setBdf([...bdf, data])
      setText("")
      setStart_rocket("")
    };
    postBdf()
  };





  useEffect(() => {
    const fetchBdf = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/bdf/");
      setBdf(data);
    };
    fetchBdf();
  }, []);



  return (
    <div className="bg-slate-900 text-white h-screen relative">
      <div className="flex flex-col w-full p-10">
        <h1 className="text-5xl text-center pb-5">Todo App</h1>
        <div className="flex items-center justify-between bg-slate-700 rounded-xl px-4">
          <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text" className="w-full py-2 rounded-xl bg-slate-700 text-white outline-none"
              placeholder="1"
          />

            <i onClick={addBdfHandler}>
              <PlusIcon className="h-5 w-5 cursor-pointer hover:opacity-70" />
            </i>
        </div>
        <br></br>
        <div className="flex items-center justify-between bg-slate-700 rounded-xl px-4">
          <input
              value={start_rocket}
              onChange={(e) => setStart_rocket(e.target.value)}
              type="text" className="w-full py-2 rounded-xl bg-slate-700 text-white outline-none"
              placeholder="2"
          />

            <i onClick={addBdfHandler}>
              <PlusIcon className="h-5 w-5 cursor-pointer hover:opacity-70" />
            </i>
        </div>

        <div className="mt-5 flex flex-col space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            <div className="max-w-md mx-auto w-full p-5 h-full rounded-xl bg-blue-500 flex items-center justify-between">

            <button
              onClick={addBdfHandler}
              className="w-full p-2 rounded-xl bg-slate-700 text-white mt-2">
              Update
            </button>


            </div>
        </div>




        <div className="mt-5 flex flex-col space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {bdf?.map((bdf, index) => (
            <div key={bdf.id} className="max-w-md mx-auto w-full p-5 h-full rounded-xl bg-blue-500 flex items-center justify-between">
            <p>{bdf.text}</p>
            <p>{bdf.start_rocket}</p>


            </div>
          ))}
        </div>
      </div>
    </div>);
}

export default App;
