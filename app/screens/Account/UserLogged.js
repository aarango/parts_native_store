import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Loading from '../../components/Loading';
import firebase from '../../enviroment/Api';

const userLogged = () => {
 const [loading, setLoading] = useState(false)
 const [loadingText, setLoadingText] = useState('')
  return (
    <View style={styles.viewUserInfo}>
      <Text>Usuario Logueado...</Text>
      <Text>Información del usuario</Text>
      <Text>Opciones de cuenta.</Text>
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionText}
        onPress={() =>
          firebase
            .auth()
            .signOut()
            .then(
              function () {
                console.log('Signed Out');
              },
              function (error) {
                console.error('Sign Out Error', error);
              },
            )
        }
      />
      <Loading text={loadingText} isVisible={loading}/>
    </View>
  );
};

export default userLogged;

const styles = StyleSheet.create({
  viewUserInfo:{
    minHeight: '100%',
    backgroundColor: '#f2f2f2'
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: Colors.PRIMARY,
    borderTopWidth: 1,
    borderBottomColor: Colors.PRIMARY,
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSessionText: {
    color: Colors.SECONDARY_TEXT,
  }
})
