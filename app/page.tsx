import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Edit } from "lucide-react";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const HomePage = async () => {
  const data = await prisma.kontak.findMany();
  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-red-500">Add Contact</Button>
        </DrawerTrigger>
        <DrawerContent className="max-w-6xl mx-auto ">
          <DrawerHeader>
            <DrawerTitle className="text-center">
              Are you absolutely sure?
            </DrawerTitle>
            <DrawerDescription className="text-center">
              This action cannot be undone.
            </DrawerDescription>
          </DrawerHeader>
          <Input type="text" placeholder="Nama" />
          <Input type="phone" placeholder="Telepon" />
          <Input type="email" placeholder="Email" />
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className="py-5">
        <Avatar>
          <AvatarImage
            src="https://robohash.org/Kevin"
            className="bg-gray-600"
          />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
      </div>
      <Table>
        <TableCaption className="text-red-300">
          Ini Tabel Kontak Saya
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-green-300">No</TableHead>
            <TableHead className="text-green-300">Nama</TableHead>
            <TableHead className="text-green-300">Email</TableHead>
            <TableHead className="text-green-300">No Telepon</TableHead>
            <TableHead className="text-green-300">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="text-red-500">{user.id}</TableCell>
              <TableCell>{user.nama}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant={"outline"} size={"icon"}>
                  <Edit />
                </Button>
                <Button variant={"destructive"} size={"icon"}>
                  <Delete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HomePage;
