import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

function Post() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AllPostsRequest();
  }, []);

  // fonction permettant de recuperer les donnees sur le serveur laravel distant
  const AllPostsRequest = async () => {
    await axios.get(`${process.env.REACT_APP_API}readAll/post`).then((res) => {
      setPosts(res.data.AllPosts);
      setLoading(false);
      // console.log(posts)
    });
  };

  // fonction permettant d'afficher les donnees sur le serveur laravel distant
  const AllPostsRender = () => {
    return loading ? (
      <Loader></Loader>
    ) : (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Profil</th>
              <th>Price</th>
              <th>Date Creation</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(({ id, Title, Description, Profil, Price, created_at }) => {
              return (
                <tr key={id}>
                  <th>{id}</th>
                  <td>{Title}</td>
                  <td>{Description}</td>
                  <td>{Profil}</td>
                  <td>{Price}</td>
                  <td>{created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="header">Post {posts.length}</div>
      <div>{AllPostsRender()}</div>
    </div>
  );
}

export default Post;
