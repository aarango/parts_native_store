import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Loading from '../../components/Loading'
//import appFirebase from '../../enviroment/Api';
import * as firebase from "firebase";

import  UserGuest from './UserGuest'
import UserLogged from './UserLogged'


const Account = () => {
  const [login, setLogin] = useState(false)

  //Pregunto si el usuario esta logueado y actualizo el estado
 /*useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      !user ? setLogin(false) : setLogin(true)
    })
  }, [])*/

  // Si no ha cambiado el estado está cargando
  if(login === null) return <Loading isVisible={false} text='Cargando....'/>


  return login ? <UserLogged /> : <UserGuest />
  }

export default Account;
