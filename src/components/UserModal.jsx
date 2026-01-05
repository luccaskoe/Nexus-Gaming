import { useState } from "react";
import { useUser } from "./context/UserContext";

export default function UserModal({ isOpen, onClose }) {
  const { login } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    login({ name, email });
    onClose();
  }

  return (

    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111318] p-6 rounded-xl w-full max-w-sm"
      >
        <h2 className="text-lg font-bold mb-4 cursor-pointer">Entrar</h2>

        <input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-[#0f1115]"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-[#0f1115]"
        />

        <button className="w-full bg-blue-500 py-2 rounded cursor-pointer">
          Entrar
        </button>
      </form>
    </div>

  );
}