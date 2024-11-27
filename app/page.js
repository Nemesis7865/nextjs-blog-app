"use client";
import Header from "../components/Header";
import BlogList from "@/components/BlogList";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../component/Header";
import BlogList from "@/component/BlogList";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
