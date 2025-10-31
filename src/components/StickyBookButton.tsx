import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyBookButton = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg rounded-full px-6 py-3 flex items-center gap-2"
        onClick={() => window.location.href = '/booking'}
      >
        <Calendar className="w-5 h-5" />
        Book Now
      </Button>
    </div>
  );
};

export default StickyBookButton;