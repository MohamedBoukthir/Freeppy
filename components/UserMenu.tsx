"use client";

import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Avatar from "./Avatar";
import Link from "next/link";
import MenuItems from "./MenuItems";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";

const UserMenu = () => {
  const [isOpen, SetIsOpen] = useState(false);

  // opn the toggle func
  const toggleOpen = useCallback(() => {
    SetIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          <Avatar src={null} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            <div>
              <Link href="/orders">
                <MenuItems onClick={toggleOpen}>Your Orders</MenuItems>
              </Link>
              <Link href="/admin">
                <MenuItems onClick={toggleOpen}>Admin Dashboard</MenuItems>
              </Link>
              <MenuItems onClick={() => {
                toggleOpen();
                signOut();
              }}>
                Log Out
              </MenuItems>
            </div>
            <div>
            <Link href="/login">
                <MenuItems onClick={toggleOpen}>Login</MenuItems>
              </Link>
              <Link href="/register">
                <MenuItems onClick={toggleOpen}>Register</MenuItems>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Menu DropDown */}
      {isOpen ? <BackDrop onClick={toggleOpen}/> : null }

    </>
  );
};

export default UserMenu;
