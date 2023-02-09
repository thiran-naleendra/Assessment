import  { useState, useEffect } from 'react';
import axios from 'axios';



const TableComponent = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db";
  useEffect(()=>{
    const getPost = async() =>{

      const {data: res} = await axios.get(apiEndPoint)
      setPosts(res)
    };
    getPost();
  },[]);

  return(
    <>
    <h2> this is {posts.length} in the db</h2>
    <table>
      <thead>
        <th>name</th>
        <th>discription</th>
        <th>price</th>
        <th>status</th>
        <th>rating</th>
        <th>rated by</th>
        <th>Img</th>
      </thead>

    <tbody>
      {posts.map(post =>{
        <tr key={post.id}>
          <td>{post.name}</td>
        </tr>
      })
      }
    </tbody>

    </table>
    </>
  );
} ;
export default TableComponent;
