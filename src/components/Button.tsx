export default function Button({ children, onClick, className, primary = false }: { children: React.ReactNode; onClick: () => void; className?: string; primary?: boolean; }) {
  return (
    <button onClick={onClick} className={`text-white font-bold py-1 px-4 md:py-2 md:px-8 transform-gpu transition duration-200 hover:translate-x-1 ease-in-out shadow-xl rounded-full ${!primary ? `bg-violet-500 hover:bg-violet-600 ` : `bg-pink-500 hover:bg-pink-600 `}` + className}>
      {children}
    </button>
  );
}
