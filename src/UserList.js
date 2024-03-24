
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1 className='eya'>Liste des utilisateurs</h1>
    <ul>
      {listOfUsers.map(user => (
        <li key={user.id} className='remove'>
          <strong >Nom:</strong> {user.name}<br />
          <strong >Nom d'utilisateur:</strong> {user.username}<br />
          <strong >Ville:</strong> {user.address.city}<br />
          <strong >Email:</strong> {user.email}<br />
          <strong >Téléphone:</strong> {user.phone}<br />
          <strong >Société:</strong> {user.company.name}<br />
        </li>
      ))}
    </ul>
  </div>
  );
};

export default UserList;
