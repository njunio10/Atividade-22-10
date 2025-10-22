import { useState } from "react";
import "./App.css";

function App() {
  const [aluno, setAluno] = useState({
    nome: "",
    nota: "",
    disciplina: "",
  });
  const [resultado, setResultado] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({ ...prev, [name]: value }));
  };

  const handleProcessar = () => {
    const nomeUpper = (aluno.nome || "").toUpperCase();
    const disciplinaLower = (aluno.disciplina || "").toLowerCase();
    const notaNumero = aluno.nota;
    const status = notaNumero > 6 ? "APROVADO" : "REPROVADO";

    setAluno((prev) => ({
      ...prev,
      nome: nomeUpper,
      disciplina: disciplinaLower,
    }));
    setResultado(status);
  };

  return (
    <div className="h-screen w-full bg-white text-gray-900 p-0">
      <div className="w-full h-full p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center ">
          Nota do Aluno
        </h1>
        <div className="space-y-4 max-w-sm mx-auto">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Nome</label>
            <input
              name="nome"
              type="text"
              value={aluno.nome}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Nota</label>
            <input
              name="nota"
              type="number"
              value={aluno.nota}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Disciplina</label>
            <input
              name="disciplina"
              type="text"
              value={aluno.disciplina}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleProcessar}
            className="w-full inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Processar
          </button>
        </div>

        <div className="mt-6 space-y-1 max-w-sm mx-auto">
          <p>
            <span className="font-semibold">Nome:</span> {aluno.nome}
          </p>
          <p>
            <span className="font-semibold">Disciplina:</span>{" "}
            {aluno.disciplina}
          </p>
          {resultado && (
            <p
              className={
                resultado === "APROVADO"
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              Resultado: {resultado}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
