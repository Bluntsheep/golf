"use client";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ updateDate, idName }) {
  const [date, setDate] = useState();

  useEffect(() => {
    const data = date ? date.toLocaleDateString() : date;
    console.log(date);
    updateDate(data, idName);
  }, [date]);

  const testDates = () => {
    const date1 = "26/02/2024";
    const date2 = new Date().toLocaleDateString();
    console.log(date2);
    date1 < date2 ? console.log(true) : console.log(false);
  };

  testDates();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal bg-primary border-none rounded-[50px]",
            !date && "text-muted-foreground"
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className=" bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}
