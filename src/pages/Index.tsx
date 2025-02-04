import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TabsComponent from "../components/Tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <TabsComponent />
    </div>
  );
};

export default Index;