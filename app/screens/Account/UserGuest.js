import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import * as images from '@auteco/assets';
import { Colors } from '@auteco/theme';
import { useNavigation } from '@react-navigation/native';

const userGuest = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image source={images.brands} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Necesitas un repuesto?</Text>
      <Text style={styles.description}>
        Consulta donde está el repuesto o la pieza que necesites, evita
        desplazamientos innecesarios, averigua en qué almacén está y cual está
        mas cerca a tu locación.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ir a mi perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  );
};

export default userGuest;

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 39,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
  },
  btnContainer: {
    padding: 6,
    fontSize: 16,
  },
  btnStyle: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
    width: '100%',
  },
});
