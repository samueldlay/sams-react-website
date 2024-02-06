type PortfolioCardProps = { title: string, description: string, image?: string, repoUrl?: string }

export default function PortfolioCard({ title = "Test", description = "Test description", image = "", repoUrl = "" }: PortfolioCardProps) {
  return (
    <div className="w-screen rounded-md relative p-4 sm:p-2 sm:transform
     sm:hover:translate-x-1 sm:hover:-translate-y-1 sm:w-1/3 sm:h-72 sm:hover:border sm:hover:border-slate-400 sm:bg-opacity-100 hover:translate-x-0
      hover:-translate-y-0 bg-slate-500 border border-slate-400 transition duration-100 
       hover:bg-opacity-40 shadow-md hover:shadow-xl overflow-hidden h-64 items-center">
      <h2 className="text-2xl h-8 font-bold transform hover:text-slate-800 transition-all duration-200">{title}
        <span className="">↗</span>
      </h2>
      <p className="">{description}</p>
    </div>
  );
}
