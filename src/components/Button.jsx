export default function Button({ children, variant = "default", onClick, type = "button", disabled = false }) {
  let styles = "px-4 py-2 rounded font-medium text-sm transition-colors ";
  
  if (disabled || variant === "muted") {
    styles += "bg-stone-200 text-stone-400 cursor-not-allowed";
  } else if (variant === "positive") {
    styles += "bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer";
  } else if (variant === "destructive") {
    styles += "bg-red-600 text-white hover:bg-red-700 cursor-pointer";
  } else {
    styles += "bg-stone-800 text-white hover:bg-stone-900 cursor-pointer";
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || variant === "muted"} className={styles}>
      {children}
    </button>
  );
}