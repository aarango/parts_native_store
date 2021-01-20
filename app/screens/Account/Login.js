import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { header as images } from '@auteco/assets';
import { Colors } from '@auteco/theme';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  return (
    <ScrollView>
      <Image source={images.logo} resizeMode="contain" style={styles.logo} />
      <View style={styles.viewContainer}>
        <Text>Login Form</Text>
        <CreateAccount />
      </View>
    </ScrollView>
  );
};

export default Login;

function CreateAccount() {
  navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate('Register')}
      >
        {' '}
        Registrarse
      </Text>
      <Divider style={styles.divider} />
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: Colors.PRIMARY,
    height: 1,
  },
});
