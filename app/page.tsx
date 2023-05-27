"use client"
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#1378fd] to-[#3b63e6] p-10 flex flex-col justify-center">
        
        {/*Building the Hero section*/}

      <Card className="max-w-4xl mx-auto">
        <Text className="text-4xl font-bold text-center md-10">
          NexWeather AI
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 Plus More Awesomeness
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#FDB813] to-[#e48e2b]">
          <CityPicker />
        </Card>
      </Card>
      
    </div>
  )
}
