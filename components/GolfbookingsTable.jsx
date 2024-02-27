import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GolfbookingsTable = ({ currentData }) => {
  return (
    <Table className=" bg-primary/20 my-5">
      <TableCaption>A list of Booking.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Players</TableHead>
          <TableHead>Holes</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead className="text-right">Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentData.map((data, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{data.date}</TableCell>
            <TableCell>{data.bookingTime}</TableCell>
            <TableCell>{data.numPlayers}</TableCell>
            <TableCell>{data.holes}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.cel}</TableCell>
            <TableCell className="text-right">{data.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GolfbookingsTable;
