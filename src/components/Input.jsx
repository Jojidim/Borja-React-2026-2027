export default function Input({ type = "text", value, onChange, placeholder, showClear = false, onClear }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2.5 border border-stone-300 rounded text-sm bg-white text-stone-900 focus:outline-none focus:border-stone-500"
      />
      {showClear && value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold"
        >
          ✕
        </button>
      )}
    </div>
  );
}