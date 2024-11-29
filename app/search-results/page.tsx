import dynamic from "next/dynamic";
import React from 'react';
const Search = dynamic(() => import("@/page/Search/Search"), {
    ssr: false,
  });
  
const Page = () => {
    return (
       <Search/>
    );
}

export default Page;
