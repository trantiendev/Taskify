import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react';
import Link from 'next/link';

const MarketingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="w-6 h-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Word Forward
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        natus nobis quidem aut, soluta quis ratione. Rerum quaerat, dolores
        aliquam voluptatem maxime repellat voluptatibus alias explicabo
        recusandae laudantium et inventore.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Tasklify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
