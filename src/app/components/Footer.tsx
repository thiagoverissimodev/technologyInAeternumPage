export default function Footer() {
  return (
    <footer className="bg-zinc-800 w-full h-52 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          <div className="col-span-4">
            <span className="mb-3 mb-md-0 text-white md:text-2xl">
              © 2023 Techonology in Aeterum
            </span>
          </div>
          <div className="col-span-4">
            <span className="md:text-2xl">Desenvolvido por: Thiago Verissimo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
