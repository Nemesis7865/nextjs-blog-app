import { assets } from "@/assets/assets";
<<<<<<< HEAD
import Sidebar from "@/component/AdminComponents/Sidebar";
=======
import Sidebar from "@/components/AdminComponents/Sidebar";
>>>>>>> d63e39bc6ec3b149d89eac4c29d872fdf18d95df
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<<<<<<< HEAD
export default function layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
      <Sidebar/>
      <div className="flex flex-col w-full">
=======
export default function Layout({ children }) {
  return (
    <>
      <div className="flex ">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
>>>>>>> d63e39bc6ec3b149d89eac4c29d872fdf18d95df
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} m alt="" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> d63e39bc6ec3b149d89eac4c29d872fdf18d95df
