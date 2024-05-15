import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
        <BrowserRouter>
        <Header/>
        <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
              
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;

// import React from 'react';
// import './index.css';
// function App() {
//   return (
//     <div className="h-svh mx-auto w-[80%]">
//     <header className="flex flex-row justify-between mx-2 mt-2 mb-4 border-b border-gray-400 pb-4 pt-2">
//       <div className="w-32">
//         <svg id="logo-54" width="120" viewBox="0 0 170 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//           {/* SVG paths here */}
//         </svg>
//       </div>
//       <div>
//         <nav>
//           <ul className="flex flex-row gap-2">
//             <li><a href="/" className="text-xs hover:underline">home</a></li>
//             <li><a href="/" className="text-xs hover:underline">about</a></li>
//             <li><a href="/" className="text-xs hover:underline">contact</a></li>
//             <li><a href="/" className="text-xs bg-orange-600 p-1 rounded-lg text-white shadow-lg hover:bg-orange-500">login</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//     <main className="flex flex-row flex-wrap">
//       {Array.from({ length: 12 }).map((_, index) => (
//         <section key={index}>
//           <div className="w-48 border border-gray-300 p-2 m-2 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer">
//             <h1 className="text-xl">Headline</h1>
//             <h3 className="text-lg">Subheadline</h3>
//             <p className="text-xs w-36 h-12 line-clamp-3">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.
//             </p>
//           </div>
//         </section>
//       ))}
//     </main>
//     <footer className="flex flex-row justify-between mt-10 border-t border-gray-400 pt-5">
//       <div>
//         <h3 className="text-sm uppercase font-bold">resources</h3>
//         <ul>
//           <li><a href="/" className="text-xs hover:underline">Application</a></li>
//           <li><a href="/" className="text-xs hover:underline">Documentation</a></li>
//           <li><a href="/" className="text-xs hover:underline">Systems</a></li>
//           <li><a href="/" className="text-xs hover:underline">FAQ</a></li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-sm uppercase font-bold">pricing</h3>
//         <ul>
//           <li><a href="/" className="text-xs hover:underline">Overview</a></li>
//           <li><a href="/" className="text-xs hover:underline">Premium Plan</a></li>
//           <li><a href="/" className="text-xs hover:underline">Affiliate</a></li>
//           <li><a href="/" className="text-xs hover:underline">Promotion</a></li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-sm uppercase font-bold">company</h3>
//         <ul>
//           <li><a href="/" className="text-xs hover:underline">About us</a></li>
//           <li><a href="/" className="text-xs hover:underline">Blog</a></li>
//           <li><a href="/" className="text-xs hover:underline">Partnership</a></li>
//           <li><a href="/" className="text-xs hover:underline">Press</a></li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-sm uppercase font-bold">social</h3>
//         <ul>
//           <li><a href="/" className="text-xs hover:underline">Facebook</a></li>
//           <li><a href="/" className="text-xs hover:underline">Twitter</a></li>
//           <li><a href="/" className="text-xs hover:underline">Instagram</a></li>
//           <li><a href="/" className="text-xs hover:underline">LinkedIn</a></li>
//         </ul>
//       </div>
//     </footer>
//   </div>
// );
// };

// export default App;
