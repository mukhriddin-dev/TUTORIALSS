import React, { useState, useEffect } from "react";
import Api from "../../API/Api";
import axios from "axios";
const Home = () => {
  Api.getUser().then((item) => console.log(item.data));

  const user={
     id:new Date().getTime(),
     name:"Muhammad",
     surname:"Salah",
     email:"slah@gmail.com",
     addres:"Egypt",
  }

  function update(id,params){
       return axios.put(`https://backendsss.herokuapp.com/users/${id}`,params)
  }


  return (
    <>
      <h1>Home page</h1>

      <button
        className="btn btn-primary"
        onClick={() =>
          Api.searchUser(3774).then((item) => console.log(item.data))
        }
      >
        search
      </button>

      <button
        className="btn btn-primary"
        onClick={() =>
           update(3774,user)
        }
      >
        update
      </button>
    </>
  );
};

export default Home;
