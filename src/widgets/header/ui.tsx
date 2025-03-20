"use client";

import { FC } from "react";
import { Avatar,Button, Drawer, Navbar } from "@/shared/ui";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const Header: FC = () => {
  return (
    <div className="flex items-center px-4 justify-between py-3">
      <span className="text-lg md:text-lg font-semibold text-neutral-500">Docforge</span>

    <img src="https://placehold.co/150" className="w-8 h-8 rounded-full object-cover"/>

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
