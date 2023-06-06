import { Center, Flex, Image, Box } from '@chakra-ui/react';
import Login from '../components/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
export default function Testing() {
 async function get() {
  await axios
   .get('http://192.168.207.48:2000/menus?offset=0', {
    headers: {
     'x-secret-key': 'sanyobaPOS'
    }
   })
   .then((res) => {
    setArr([...arr, ...res.data.menus]);
    // console.log(res.data);
   });
 }

 const [scrollDemo, setScrollDemo] = useState(0);
 useEffect(() => {
  get();
 }, []);
 useEffect(() => {
  const ini = document.querySelector('#scroller');
  console.log(scrollDemo.scrollTop);
  setScrollDemo(ini.scrollTop);
  if (scrollDemo.scrollTop == 500) {
   console.log(scrollDemo.scrollTop);
   get();
  }
 });
 const [arr, setArr] = useState([]);
 return (
  <>
   <InfiniteScroll

   //    loadMore={true}
   //    hasMore
   >
    <Flex
     bgColor={'red'}
     alignItems={'center'}
     w="100vw"
     h="400px"
     maxH="400px"
     flexDir={'column'}
     overflow={'scroll'}
     gap={'20px'}
     id="scroller"
    >
     {arr.map((val) => (
      <Center w="200px" h="200px" bgColor={'blue'} color={'white'}>
       {val.id}
      </Center>
     ))}
    </Flex>
   </InfiniteScroll>
  </>
 );
}
