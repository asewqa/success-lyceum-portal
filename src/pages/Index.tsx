import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TabsComponent from "../components/Tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, GraduationCap, Users, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Quick Stats */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <GraduationCap className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold">1000+</h3>
                <p className="text-gray-600">Учнів</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold">80+</h3>
                <p className="text-gray-600">Вчителів</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold">30+</h3>
                <p className="text-gray-600">Навчальних програм</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CalendarDays className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold">45</h3>
                <p className="text-gray-600">Років досвіду</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <TabsComponent />
      
      {/* Contact Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Зв'яжіться з нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Адреса</h3>
                <p>м. Чернівці, вул. Шкільна, 1</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Телефон</h3>
                <p>(0372) 12-34-56</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p>lyceum17@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;