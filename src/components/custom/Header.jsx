// import React from 'react'
// import { Button } from '@/components/ui/button'

// const Header = () => {
//   return (
//     <div className="p-4 shadow-sm flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <div className="w-[60px] h-[60px] overflow-hidden rounded-lg">
//           <img
//             src="/Ndes.svg"
//             alt="Logo"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//         <span className="text-2xl font-semibold">NextDestination</span>
//       </div>
//       <Button>Sign In</Button>
//     </div>
//   )
// }

// export default Header
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,

} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  });

  const login = useGoogleLogin({
    onSuccess: (res) => GetUserProfile(res),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching user profile: ", error);
      });
  };

  return (
    <div className="shadow-sm flex justify-between items-center px-6">
      <div className="flex items-center gap-4">
        <img
          src="/Ndes.svg"
          alt="Logo"
          className="h-[60px] w-[60px] object-cover rounded-md"
        />
        <span className="text-2xl font-bold">NextDestination</span>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <VisuallyHidden>Sign In Required</VisuallyHidden>
            </DialogTitle>
            <DialogDescription>
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/Ndes.svg" alt="logo" className="w-10 h-10" />
                <span className="text-xl font-bold">NextDestination</span>
              </div>
              <h2 className="font-bold text-lg text-center">
                Sign In to check out your travel plan
              </h2>
              <p className="text-center">
                Sign in to the App with Google authentication securely
              </p>

              <Button
                onClick={login}
                className="w-full mt-6 flex gap-4 items-center justify-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign in With Google
              </Button>
            </DialogDescription>
          </DialogHeader>

          <DialogClose className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">
            
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
