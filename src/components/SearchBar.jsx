import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {

  return (

    <div className="w-full max-w-md relative">
      <Search className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
      <input
        type="text"
        placeholder="Buscar produto..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="
          w-full pl-10 pr-4 py-2
          rounded-lg bg-[#0f1115]
          border border-zinc-700
          focus:outline-none focus:border-blue-500
        "
      />
    </div>

  );
}

export default SearchBar;