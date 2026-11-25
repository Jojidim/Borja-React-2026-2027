import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const AVAILABLE_TYPES = ["Grass", "Water", "Fire", "Rock", "Flying"];

export default function Form({ onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(["Grass"]);

  const handleTypeToggle = (type) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter((t) => t !== type));
      }
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSubmit({
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      avatar: avatar.trim(),
      types: selectedTypes,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4 text-stone-900">New Pokemon</h2>
      
      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-1">Name</label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Pokemon Name" showClear onClear={() => setName("")} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-1">Description</label>
        <div className="relative w-full">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Pokemon description..."
            className="w-full p-2.5 border border-stone-300 rounded text-sm bg-white text-stone-900 focus:outline-none focus:border-stone-500 min-h-[80px]"
          />
          {description && (
            <button
              type="button"
              onClick={() => setDescription("")}
              className="absolute right-2.5 top-3 text-stone-400 hover:text-stone-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-1">Avatar Image URL</label>
        <Input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="https://..." showClear onClear={() => setAvatar("")} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-2">Types (Select one or more)</label>
        <div className="flex flex-wrap gap-3">
          {AVAILABLE_TYPES.map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm text-stone-800 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(t)}
                onChange={() => handleTypeToggle(t)}
                className="rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
              />
              {t}
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="muted" onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="positive">Save Pokemon</Button>
      </div>
    </form>
  );
}