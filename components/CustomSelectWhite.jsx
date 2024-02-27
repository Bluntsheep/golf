"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";

const CustomSelectWhite = ({ name, title, values, idName, onchange }) => {
  const [inputvalue, setInputValue] = useState("");
  const inputRef = useRef();

  const updateValue = (e) => {
    setInputValue(e);
    onchange(e, idName);
  };

  return (
    <Select value={inputvalue} onValueChange={(e) => updateValue(e)} required>
      <SelectTrigger className="w-[400px]  border-white border-b-primary placeholder:text-primary">
        <SelectValue placeholder={name} />
      </SelectTrigger>
      <SelectContent className=" bg-white">
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {values.map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelectWhite;
