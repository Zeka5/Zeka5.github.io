import { useState } from 'react';
import { Music4, Scissors, Calendar, Clock } from 'lucide-react';
import { SubscribeForm } from './components/SubscribeForm';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-900 text-white p-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-2xl font-light mb-2">Zgrabi termin</h1>
            <h2 className="text-3xl font-bold mb-4">
              Upoznajte Zgrabi termin, novu aplikaciju za rezervacije kod frizera
            </h2>
            <p className="mb-6">
              Lako zakažite termine kod najboljih frizera, bez čekanja i stresa.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64">
              <img
                src="/screenshot.png"
                alt="Aplikacija Zgrabi termin"
                className="rounded-lg w-64"
              />

            </div>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">Šta dobijate?</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left column with image */}
            <div className="flex justify-center">
              <img
                src="/team2.png"
                alt="Zgrabi termin aplikacija"
                className="rounded-lg mx-auto"
              />
            </div>

            {/* Right column with features */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <Calendar size={24} className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Brze Rezervacije</h3>
                  <p className="text-gray-600">
                    Jednostavno pretraživanje slobodnih termina i brza rezervacija kod vašeg omiljenog frizera.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <Clock size={24} className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Podsetnci i Obaveštenja</h3>
                  <p className="text-gray-600">
                    Automatska obaveštenja o zakazanim terminima i podsetnici pre zakazanog vremena.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <Music4 size={24} className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ušteda Vremena</h3>
                  <p className="text-gray-600">
                    Rezervišite termin u bilo koje doba dana ili noći, bez potrebe za pozivima i čekanjem odgovora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Subscription Form */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Dolazi uskoro</h2>
            <p className="text-center mb-6">
              Prijavite se za novosti i obaveštenja o aplikaciji i specijalnim ponudama
            </p>
            <SubscribeForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          {/*<div className="grid md:grid-cols-3 gap-8 mb-8 ">
            <div>
              <h3 className="text-xl font-bold mb-4">Zgrabi termin</h3>
              <p>Najbrži način da rezervišete termin kod frizera</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Linkovi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">O nama</a></li>
                <li><a href="#" className="hover:underline">Frizeri</a></li>
                <li><a href="#" className="hover:underline">Kako radi</a></li>
                <li><a href="#" className="hover:underline">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Pratite nas</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-indigo-300">Facebook</a>
                <a href="#" className="hover:text-indigo-300">Instagram</a>
                <a href="#" className="hover:text-indigo-300">Twitter</a>
              </div>
            </div>
          </div>*/}
          <div className="border-t border-indigo-800 pt-4 text-center text-sm">
            <p>© 2025 Zgrabi termin. Sva prava zadržana.</p>
            <p className="mt-2">
              <a
                href="https://storyset.com/teamwork"
                className="hover:underline text-indigo-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Illustrations by Storyset
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
