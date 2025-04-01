import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid gap-4 p-4">
      <Card className="rounded-2xl shadow-md">
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">Welcome to MentorAI</h1>
          <p className="mb-4">Your personalized AI learning coach</p>
          <Button>Start Learning</Button>
        </CardContent>
      </Card>
    </div>
  );
}
