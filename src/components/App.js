import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}