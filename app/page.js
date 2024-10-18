'use client'
// import Image from "next/image";
import Header from "@/component/Header";
import BlogList from "@/component/BlogList";
import React from "react";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
   <Header/>
   <BlogList/>
  <Footer/>
   </>)
}
