import TecladoImg from '../components/img/Teclado-Mecânico-RGB.jpg';
import MouseImg from '../components/img/Mouse-Gamer-Pro.jpg';
import HeadsetImg from '../components/img/Headset-7.1-Gamer.jpg';
import MonitorImg from '../components/img/Monitor-144Hz.jpg';
import DuploMonitorImg from '../components/img/Duplo-Monitor-200Hz.jpg';
import PlacaVideoImg from '../components/img/Placa-Video-Geforce-RTX.jpg';
import PlacaAORUSImg from '../components/img/Placa-Mae-Gigabyte-X870E-AORUS-Pro.jpg';
import CadeiraGamerImg from '../components/img/Cadeira-Gamer.jpg';
import CadeiraGamerRGBImg from '../components/img/Cadeira-Gamer-Luzes-RGB.png'
import CadeiraGamerLaranjaImg from '../components/img/Cadeira-Gamer-Laranja.jpg'
import CadeiraBrancoPretoImg from '../components/img/Cadeira-Gamer-Branco-Preto.png'
import CadeiraAzulPretoImg from '../components/img/Cadeira-Gamer-Azul-Preto.png'
import CadeiraEscritorioImg from '../components/img/Cadeira-Escritorio.jpg'
import CoolersColoridoImg from '../components/img/Coolers-RGB-Colorido.png'
import PlacaVideo3060Img from '../components/img/Placa-Video-Geforce-RTX-NVIDIA-3060.png'
import MemoriaRamImg from '../components/img/Memoria-Ram-Dois-Pentes-8GB.png'
import MouseRGBImg from '../components/img/Mouse-RGB.jpg'
import MouseGravaStarImg from '../components/img/GravaStar-Mercury-M1-Pro.png'
import GabineteAquarioImg from '../components/img/Gabinete-Aquario-Branco.png'
import SSDSataImg from '../components/img/SSD-Sata-500Mb.png'






const products = [
  
  { id: 1, name: 'Teclado Mecânico Gamer', price: 350.00, image: TecladoImg, category: 'hardware' },
  { id: 2, name: 'Mouse Gamer RGB + Teclado + Mouse Pad', price: 250.00, image: MouseImg, category: 'hardware' },
  { id: 3, name: 'Mouse Gamer RGB Colorido', price: 250.00, image: MouseRGBImg, category: 'hardware' },
  { id: 4, name: 'Mouse Gamer GravaStar Mercury', price: 350.00, image: MouseGravaStarImg, category: 'hardware' },
  { id: 5, name: 'Coolers RGB Coloridos 5 UNID', price: 500.00, image: CoolersColoridoImg, category: 'hardware' },
  { id: 6, name: 'Headset Gamer 7.1', price: 450.00, image: HeadsetImg, category: 'hardware' },
  { id: 7, name: 'Memoria Ram Dois Pentes de 8GB', price: 400.00, image: MemoriaRamImg, category: 'hardware' },
  { id: 8, name: 'Placa de Vídeo Geforce RTX 3060', price: 1500.00, image: PlacaVideo3060Img, category: 'hardware' },
  { id: 9, name: 'Monitor Gamer 144Hz', price: 1250.00, image: MonitorImg, category: 'hardware' },
  { id: 10, name: "Monitor duplo 200Hz", price: 890.90, image: DuploMonitorImg, category: 'hardware' },
  { id: 11, name: "Placa de Video Geforce RTX", price: 1500.90, image: PlacaVideoImg, category: 'hardware' },
  { id: 12, name: "Placa Mãe Gigabyt X870E AORUS", price: 2500.00, image: PlacaAORUSImg, category: 'hardware' },
  { id: 13, name: "Gabinete Aquario Branco com Tubos em RGB", price: 900.90, image: GabineteAquarioImg, category: 'hardware' },
  { id: 14, name: "SSD de Cabo Sata de 500MB", price: 150.00, image: SSDSataImg, category: 'hardware' },
  { id: 15, name: "Cadeira Gamer Pro", price: 1800.00, image: CadeiraGamerImg, category: 'cadeira' },
  { id: 16, name: "Cadeira Gamer RGB", price: 850.00, image: CadeiraGamerRGBImg, category: 'cadeira' },
  { id: 17, name: "Cadeira Gamer Laranja", price: 600.00, image: CadeiraGamerLaranjaImg, category: 'cadeira' },
  { id: 18, name: "Cadeira Gamer Branco com Preto", price: 700.00, image: CadeiraBrancoPretoImg, category: 'cadeira' },
  { id: 19, name: "Cadeira Gamer Azul com Preto", price: 750.00, image: CadeiraAzulPretoImg, category: 'cadeira' },
  { id: 20, name: "Cadeira Para Escritorio", price: 850.00, image: CadeiraEscritorioImg, category: 'cadeira' },

];

export default products;