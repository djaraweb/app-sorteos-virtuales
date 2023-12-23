import { useState } from 'react';
import ImageEvento from './assets/Evento.png';
import viteLogo from '/vite.svg';
import './App.css';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(false);
  const [numberRandom, setNumberRandom] = useState(0);
  const [values, setValues] = useState({
    txtmin: 1000,
    txtmax: 3000,
  });

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };

    // Sincroniza el estado de nuevo
    setValues(newValues);
  }

  const generateNumber = () => {
    setLoading(true);
    const interval = setTimeout(() => {
      setLoading(false);
      console.log(values.txtmin, values.txtmax);

      setNumberRandom(random(values.txtmin, values.txtmax));
    }, 2000);
  };

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <section className="bg-gray-100 shadow-sm rounded-lg p-5 flex items-center gap-4">
      <img
        src={ImageEvento}
        className="rounded-2xl shadow h-[620px]"
        alt="Vite logo"
      />
      <div className="flex-1">
        <div className="bg-blue-500 text-white p-3 rounded-lg font-bold shadow  flex items-center justify-between">
          <input
            name="txtmin"
            value={values.txtmin}
            onChange={handleChange}
            type="number"
            className="block w-20 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-2xl ">Rango de Números</span>
          <input
            name="txtmax"
            value={values.txtmax}
            onChange={handleChange}
            type="number"
            className="block w-20 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="p-8">
          {loading ? (
            <Loading />
          ) : (
            <span className="text-8xl font-semibold">{numberRandom}</span>
          )}
        </div>

        <button
          type="button"
          onClick={() => generateNumber()}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg  px-5 py-5"
        >
          Obtener Número Ganador
        </button>
      </div>
    </section>
  );
}

export default App;
