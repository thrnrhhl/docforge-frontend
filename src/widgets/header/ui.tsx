"use client";

import { FC } from "react";
import { Avatar,Button, Drawer, Navbar } from "@/shared/ui";
import {
  ArrowRightIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

export const Header: FC = () => {
  return (
    <div className="h-10 flex items-center px-4 justify-between border-b border-b-neutral-300 border-solid">
      <span className="text-xl md:text-xl font-heading font-black">Docforge</span>

      <div className="flex items-center gap-5">
        <div className="items-center gap-2 hidden md:flex">
          <Avatar size={7.5} />

          <span className="text-sm">Администратор</span>
        </div>

        <Button
          variant="tertinary"
          className="w-6 h-6 p-0 hidden md:flex"
          onClick={() => {}}
        >
          <ArrowRightIcon className="w-4 h-4" />
        </Button>

        <Button
          variant="unstyled"
          className="md:hidden"
          onClick={() => {}}
        >
          <Bars3BottomRightIcon className="text-black w-5 h-5" />
        </Button>
      </div>

      <Drawer
        header="Меню"
        open={false}
        onOpenChange={() => {}}
        childrenClassName="px-2 py-0 flex flex-col"
      >
        <div className="flex-1">
        <Navbar />
        </div>

        <div className="flex justify-between gap-2 px-2">
          <div className="flex items-center gap-2">
            <Avatar size={7.5} />

            <span className="text-sm">Администратор</span>
          </div>

          <Button variant="tertinary" className="w-fit" onClick={() => {}}>
            Выйти из системы <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
