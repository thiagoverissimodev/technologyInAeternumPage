/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function FormContact() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pt-8">
            <div className="sm:col-span-full">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent p-3 lg:p-6 pl-1 text-gray-100 placeholder:text-gray-400 placeholder:lg:text-2xl placeholder:p-3 focus:ring-0 focus:p-4 focus:lg:text-2xl sm:leading-6 w-full"
                    placeholder="Nome"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-full">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent p-3 lg:p-6 pl-1 text-gray-100 placeholder:text-gray-400 placeholder:lg:text-2xl placeholder:p-3 focus:ring-0 focus:p-4 focus:lg:text-2xl sm:leading-6 w-full"
                    placeholder="E-mail"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-full">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block flex-1 border-0 bg-transparent p-3 lg:p-6 pl-1 text-gray-100 placeholder:text-gray-400 placeholder:lg:text-2xl placeholder:p-3 focus:ring-0 focus:p-4 focus:lg:text-2xl sm:leading-6 w-full"
                    placeholder="Telefone (WhatsApp)"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md border-0 p-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent placeholder:p-3  placeholder:text-gray-400 placeholder:lg:text-2xl focus:p-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  placeholder={'Mensagem'}
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="bg-green-600 rounded-xl block text-white lg:text-xl uppercase px-10 sm:w-[28vw] lg:w-[32vw] py-3 sm:mt-10 my-4 hover:bg-green-700 transition"
        >
          Fazer orçamento
        </button>
      </div>
    </form>
  )
}
