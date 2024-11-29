import SearchDetail from '@/page/SearchDetail/SearchDetail';
import React from 'react';
type Params = {
    params: {
      id: number;
    };
}
const Page = ({params}: Params) => {
  console.log(params);
    return (
    <SearchDetail/>
    );
}

export default Page;
