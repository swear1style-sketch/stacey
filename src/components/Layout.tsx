import { ReactNode, useState, createContext, useContext } from "react";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import LightboxModal, { LightboxData } from "./LightboxModal";

interface LightboxContextType {
  openLightbox: (data: LightboxData) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType>({
  openLightbox: () => {},
  closeLightbox: () => {},
});

export const useLightbox = () => useContext(LightboxContext);

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [activeLightboxData, setActiveLightboxData] = useState<LightboxData | null>(null);

  const openLightbox = (data: LightboxData) => {
    setActiveLightboxData(data);
  };

  const closeLightbox = () => {
    setActiveLightboxData(null);
  };

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-gold/30 selection:text-white">
        <div className="grain-overlay" />
        <Navbar />
        <main className="flex-1 w-full pt-20 sm:pt-24">{children}</main>
        <FooterSection />
        <LightboxModal data={activeLightboxData} onClose={closeLightbox} />
      </div>
    </LightboxContext.Provider>
  );
};

export default Layout;
