import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const TabsComponent = () => {
  return (
    <div className="w-full px-4 py-8 bg-white">
      <Tabs defaultValue="about" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
          <TabsTrigger value="about">Про нас</TabsTrigger>
          <TabsTrigger value="news">Новини</TabsTrigger>
          <TabsTrigger value="schedule">Розклад</TabsTrigger>
          <TabsTrigger value="teachers">Вчителі</TabsTrigger>
          <TabsTrigger value="contacts">Контакти</TabsTrigger>
        </TabsList>
        
        <TabsContent value="about">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Про Ліцей №17 "Успіх"</h3>
              <p className="text-gray-600">
                Ліцей №17 "Успіх" - це сучасний навчальний заклад, який забезпечує високоякісну освіту та всебічний розвиток учнів. 
                Наша місія - підготувати успішних, творчих та відповідальних громадян України.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="news">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Останні новини</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-semibold">Перемога на олімпіаді</h4>
                  <p className="text-gray-600">Наші учні здобули призові місця на міській олімпіаді з математики</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold">Спортивні досягнення</h4>
                  <p className="text-gray-600">Команда ліцею виборола перше місце у міських змаганнях з волейболу</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="schedule">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Розклад занять</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2">Час</th>
                      <th className="p-2">Понеділок</th>
                      <th className="p-2">Вівторок</th>
                      <th className="p-2">Середа</th>
                      <th className="p-2">Четвер</th>
                      <th className="p-2">П'ятниця</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">8:30 - 9:15</td>
                      <td className="p-2 border">Математика</td>
                      <td className="p-2 border">Українська мова</td>
                      <td className="p-2 border">Історія</td>
                      <td className="p-2 border">Фізика</td>
                      <td className="p-2 border">Література</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="teachers">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Наші вчителі</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded">
                  <h4 className="font-semibold">Іванова Марія Петрівна</h4>
                  <p className="text-gray-600">Вчитель математики, вища категорія</p>
                </div>
                <div className="p-4 border rounded">
                  <h4 className="font-semibold">Петренко Олена Василівна</h4>
                  <p className="text-gray-600">Вчитель української мови, вища категорія</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contacts">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Контакти</h3>
              <div className="space-y-4">
                <p><strong>Адреса:</strong> м. Чернівці, вул. Шкільна, 1</p>
                <p><strong>Телефон:</strong> (0372) 12-34-56</p>
                <p><strong>Email:</strong> lyceum17@example.com</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Графік роботи:</h4>
                  <p>Понеділок - П'ятниця: 8:00 - 17:00</p>
                  <p>Субота, Неділя: Вихідний</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsComponent;