export default function Avatar({ src, alt, variant = "default" }) {
  let styles = "object-cover bg-stone-100 ";

  if (variant === "frame") {
    styles += "w-16 h-16 rounded-md border-2 border-stone-300 p-1";
  } else if (variant === "rounded") {
    styles += "w-16 h-16 rounded-full";
  } else {
    styles += "w-16 h-16 rounded-lg";
  }

  return <img src={src || "https://via.placeholder.com/150"} alt={alt || "Avatar"} className={styles} />;
}