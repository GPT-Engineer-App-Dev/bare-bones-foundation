import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-100">
      <header className="bg-pink-500 text-white p-4">
        <h1 className="text-2xl font-bold">My Pink Application</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto bg-pink-200 border-pink-300">
          <CardHeader>
            <CardTitle className="text-pink-800">Welcome to Pink Paradise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-pink-700">This is a pink-themed application. Everything is beautifully pink!</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Get Started</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-pink-400 text-white p-4 text-center">
        <p>&copy; 2023 My Pink Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;