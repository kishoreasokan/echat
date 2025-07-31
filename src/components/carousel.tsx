import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
  {
    title: "Welcome to Your Dashboard",
    description: "Here you can track your metrics, manage tasks, and stay updated with real-time data across all departments."
  },
  {
    title: "Team Collaboration",
    description: "Invite your team, assign roles, and collaborate efficiently with built-in tools designed for productivity."
  },
  {
    title: "Track Progress",
    description: "Visualize your workflow, identify bottlenecks, and make data-driven decisions to improve efficiency."
  },
  {
    title: "Customize Your View",
    description: "Tailor the dashboard layout and widgets to match your workflow. It’s all about flexibility and control."
  },
  {
    title: "Stay Notified",
    description: "Get instant alerts for important activities and upcoming deadlines. Never miss a thing!"
  }
];

const CarouselPlugin: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray mb-1 pl-2">System News</h2>
      <Carousel className="relative w-full">
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="absolute bottom-0 right-4 flex space-x-2">
          <CarouselPrevious className="static text-cyan-700" />
          <CarouselNext className="static text-cyan-700" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPlugin;
