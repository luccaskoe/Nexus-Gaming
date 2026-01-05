import React from 'react';

function Footer() {
  return (

    <footer className="mt-24 bg-[#0c0e12] border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-3 text-blue-500">Nexus <span className="text-purple-500"> Gaming</span></h4>
                  <p className="text-sm text-gray-400">Seu hub gamer completo.</p>
            </div>
        <div>

      <h4 className="font-bold mb-3">Institucional</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer">Sobre nós</li>
          <li className="hover:text-white cursor-pointer">Política de Privacidade</li>
          <li className="hover:text-white cursor-pointer">Termos de Uso</li>
        </ul>
    </div>
<div>

  <h4 className="font-bold mb-3">Pagamentos</h4>
      <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer"> •  Pix </li>
          <li className="hover:text-white cursor-pointer"> •  Cartão </li>
          <li className="hover:text-white cursor-pointer"> •  Boleto </li>
        </ul>
        
              </div>
          </div>
    </footer>

  );
}                                                                                                                                                                            

export default Footer;