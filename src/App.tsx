import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PluginsList from "@/components/PluginsList";

// type Props = {};

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-6 flex-grow">
        <PluginsList title="Popular wordpress plugins" />
      </main>
      <Footer />
    </div>
  );
}
