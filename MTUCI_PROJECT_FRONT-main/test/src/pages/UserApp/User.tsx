import React, { useEffect, useState } from 'react';
import axios from 'axios';
import avatar from './Images/avatar1-1024x1024 1.png'
import './User.css'
import { Header } from '../../modules/Header/Header.tsx';


 export const UserPage: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setUser({ name: response.data.name, email: response.data.email });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div className='container'>
        <Header />
        <img className='avatar' src={avatar}/>
        <p className='nickname'>Привет, {user.name}</p>
        <p className='infotitle'>Персональные данные</p>
        <p className='email'>Email: {user.email}</p>
        <p className='communitytitle'>Ваши сообщества</p>
        <p className='stroka'>Планируется</p>
        <p className='coursetitle1'>Активные курсы</p>
        <p className='coursetitle2'>Пройденные курсы</p>
    </div>
  );
};
