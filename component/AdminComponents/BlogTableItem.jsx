import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

<<<<<<< HEAD
const BlogTableItem = ({ authorImg, title, author }) => {
    const BlogDate = new Date(date)
=======
const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const BlogDate =new Date(date)

>>>>>>> d63e39bc6ec3b149d89eac4c29d872fdf18d95df
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
        />
        <p>{author ? author : "no author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
<<<<<<< HEAD
      <td className="px-6 py-4 cursor-pointer">x </td>
=======
      <td onClick={() => deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer">x </td>
>>>>>>> d63e39bc6ec3b149d89eac4c29d872fdf18d95df
    </tr>
  );
};

<<<<<<< HEAD
export default BlogTableItem;
=======
export default BlogTableItem;
>>>>>>> d63e39bc6ec3b149d89eac4c29d872fdf18d95df
