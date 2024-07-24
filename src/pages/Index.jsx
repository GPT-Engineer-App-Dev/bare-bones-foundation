import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-lime-100">
      <header className="bg-lime-500 text-white p-4">
        <h1 className="text-2xl font-bold">My Lime Green Application</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto bg-lime-200 border-lime-300">
          <CardHeader>
            <CardTitle className="text-lime-800">Welcome to Lime Paradise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lime-700">This is a lime green-themed application. Everything is refreshingly lime!</p>
            <Button className="bg-lime-500 hover:bg-lime-600 text-white">Get Started</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-lime-400 text-white p-4 text-center">
        <p>&copy; 2023 My Lime Green Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;