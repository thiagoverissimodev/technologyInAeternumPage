"use client";
import Image from "next/image";
import Header from "./components/Header";
import SquigglyLines from "./components/SquigglyLines";
import Link from "next/link";
import {
  DeviceMobile,
  EnvelopeSimple,
  Gauge,
  Phone,
  Planet,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react";
import FormContact from "./components/FormContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex max-w-[1400] mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://api.whatsapp.com/send/?phone=5565999103791&text=Ol%C3%A1!%20Estou%20interessado(a)%20em%20construir%20um%20site!"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-4 px-6 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Design inovador, funcionalidades impactantes e{" "}
          <span className="text-green-600">altas conversões</span>
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Ganhe mais na Web com{" "}
          <span className="relative whitespace-nowrap text-green-600">
            <SquigglyLines />
            <span className="relative">Páginas</span>
          </span>{" "}
          que convertem.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Transformamos negócios com páginas de alto nível e com um retorno
          acima do investido.
        </h2>
        <Link
          className="bg-green-600 rounded-xl block text-white lg:text-xl uppercase px-10 sm:w-[28vw] lg:w-[31vw] py-3 sm:mt-10 mt-4 hover:bg-green-700 transition"
          href="https://api.whatsapp.com/send/?phone=5565999103791&text=Ol%C3%A1!%20Estou%20interessado(a)%20em%20construir%20um%20site!"
        >
          Comece seu site hoje
        </Link>
        <div className="flex flex-col justify-center items-center my-12 py-10">
          <div className="pt-9 flex flex-col">
            <Image
              alt="Imagem com frase de marketing do negócio"
              width={820}
              height={462}
              src="/capa-digit-teclado-cta.png"
              className="w-[75vw] object-cover h-760 rounded-2xl sm:mt-0 mt-2 shadow-green-main"
            />
          </div>
        </div>
        <div className="flex w-full flex-col sm:mt-10 mt-6">
          <h1 className="mx-auto max-w-7xl font-display text-4xl font-bold pb-12 tracking-normal text-gray-300 md:text-5xl">
            Mais clientes, mais visibilidade, mais confiança{" "}
            <span className="text-green-600">mais negócios todos os dias.</span>
          </h1>
          <div className="flex flex-col space-y-10 mt-6 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:space-x-6 sm:px-8">
              <div className="col-span-1 sm:p-12 p-2">
                <h3 className="mb-1 font-medium text-3xl text-start p-6">
                  A Technology in Aeternum
                </h3>
                <div className="p-7">
                  <p className="text-xl py-2 text-left">
                    A Technology in Aeternum surge no mercado ao enxergar que
                    muitas páginas criadas, mesmo nos dias atuais, não são
                    profissionais, são lentas e não convertem.
                  </p>
                  <p className="text-xl py-2 text-left">
                    A empresa veio para trazer profissionalismo, velocidade,
                    credibilidade, e claro, muitas vendas.
                  </p>
                  <p className="text-xl py-2 text-left">
                    A empresa foi fundada pelo Thiago Verissimo, professor
                    universitário, analista e desenvolvedor de sistemas, com
                    foco em construir páginas modernas e decisivas que aumentem
                    a visibilidade e conversão dos seus clientes
                  </p>
                  <Link
                    className="bg-green-600 rounded-xl block text-white lg:text-xl uppercase px-10 sm:w-[28vw] lg:w-[31vw] py-3 sm:mt-10 mt-4 hover:bg-green-700 transition"
                    href="https://api.whatsapp.com/send/?phone=5565999103791&text=Ol%C3%A1!%20Estou%20interessado(a)%20em%20construir%20um%20site!"
                  >
                    Comece seu site hoje
                  </Link>
                </div>
              </div>
              <div className="col-span-1 sm:mt-0 mt-8 sm:p-12 p-2">
                <div className="image-container">
                  <div className="bg-gradient-custom-radial"></div>
                  <Image
                    alt="Macbook com um template na tela"
                    width={500}
                    height={500}
                    src="/ae-ft-perfil-without-dot.png"
                    className="w-full block object-cover lg:h-[500px] rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col sm:mt-10 mt-6">
          <h1 className="mx-auto max-w-7xl font-display text-5xl font-bold pb-12 tracking-normal text-gray-300 sm:text-5xl">
            Um site profissional muda o{" "}
            <span className="text-green-600">rumo do seu negócio.</span>
          </h1>
          <div className="grid grid-cols-1 mx-7 md:grid-cols-2 gap-6 sm:p-12">
            <figure className="border border-green-900 rounded-xl sm:p-12 p-2">
              <div className="flex items-center justify-center">
                <Gauge
                  size={96}
                  className="bg-gradient-to-r from-green-500 to-green-800 rounded"
                />
              </div>
              <div className="pt-6 t space-y-4">
                <h1 className="font-medium text-2xl pt-6">
                  Sites Otimizados
                </h1>
                <p className="sm:text-xl py-4">
                  Tenha um site que carrega rapidamente e aumente suas vendas e
                  conversões de forma eficaz.
                </p>
              </div>
            </figure>
            <figure className="border border-green-900 rounded-xl sm:p-12 p-2">
              <div className="flex items-center justify-center">
                <DeviceMobile
                  size={95}
                  className="bg-gradient-to-r from-green-500 to-green-800 rounded"
                />
              </div>
              <div className="pt-6 t space-y-4">
                <h1 className="font-medium text-2xl pt-6">
                  Design Responsivo
                </h1>
                <p className="sm:text-xl py-4">
                  Seu site acessível em todos os dispositivos móveis. A maioria
                  dos seus clientes estão navegando pelo celular e o seu site
                  precisa estar preparado. Não perca mais vendas.
                </p>
              </div>
            </figure>
            <figure className="border border-green-900 rounded-xl sm:p-12 p-2">
              <div className="flex items-center justify-center">
                <ShieldCheck
                  size={96}
                  className="bg-gradient-to-r from-green-500 to-green-800 rounded"
                />
              </div>
              <div className="pt-6 t space-y-4">
                <h1 className="font-medium text-2xl pt-6">
                  Selo de Segurança
                </h1>
                <p className="sm:text-xl py-4">
                  Certificado SSL instalado para garantir mais segurança para
                  você e para os seus cliente ao acessarem o site.
                </p>
              </div>
            </figure>
            <figure className="border border-green-900 rounded-xl sm:p-12 p-2">
              <div className="flex items-center justify-center">
                <Planet
                  size={96}
                  className="bg-gradient-to-r from-green-500 to-green-800 rounded"
                />
              </div>
              <div className="pt-6 t space-y-4">
                <h1 className="font-medium text-2xl pt-6">
                  Mais alcance
                </h1>
                <p className="sm:text-xl py-4">
                  Uma página web irá garantir sua presença online, alcançar
                  audiências internacionais e explorar oportunidades de negócios
                  24 horas, 7 dias por semana!
                </p>
              </div>
            </figure>
          </div>
        </div>
        <div className="flex w-full flex-col sm:mt-10 mt-6">
          <p className="py-4 px-6 text-green-400 text-2xl mb-5 transition duration-300 ease-in-out">
            Vamos conversar sobre o seu site?
          </p>
          <h1 className="mx-auto max-w-7xl font-display text-5xl font-bold pb-12 tracking-normal text-gray-300 sm:text-6xl">
            Solicite seu orçamento
            <span className="text-green-600">{" "}agora mesmo!</span>
          </h1>
          <div className="grid grid-cols-1 mx-7 md:grid-cols-2 gap-6 sm:p-12">
            <div className="flex flex-col lg:items-start justify-around p-8">
              <Link href="https://api.whatsapp.com/send/?phone=5565999103791&text=Ol%C3%A1!%20Estou%20interessado(a)%20em%20construir%20um%20site!" className="flex flex-col md:flex-row py-8 items-center justify-center md:justify-between">
                <WhatsappLogo size={96} className="bg-green-500 rounded py-4 min-w-[96px]"/>
                <div className="flex flex-col items-center lg:items-start justify-center p-4">
                  <span className="md:text-2xl">Chamar no WhatsApp</span>
                </div>
              </Link>
              <div className="flex flex-col md:flex-row py-8 items-center justify-center md:justify-between">
                <Phone size={96} className="bg-green-500 rounded py-4 min-w-[96px]"/>
                <div className="flex flex-col items-center lg:items-start justify-center p-4">
                  <span className="text-sm md:text-xl lg:text-start">Ligue já</span>
                  <span className="text-sm md:text-2xl">(65) 99910-3791</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row py-8 items-center justify-center md:justify-between">
                <EnvelopeSimple size={96} className="bg-green-500 rounded py-4 min-w-[96px]"/>
                <div className="flex flex-col items-center lg:items-start justify-center p-4">
                  <span className="text-sm md:text-2xl text-start">Entre em contato</span>
                  <span className="text-sm md:text-1xl break-words">contato@technologyinaeternum.com.br</span>
                </div>
              </div>
            </div>
            <FormContact />
          </div>
        </div>
      </main>
        <Footer />
    </div>
  );
}
