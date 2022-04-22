import React from "react";
import { View, Text } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginTop: 60 }}>
      <View >
        <Text>Nome: Jesse Lima</Text>
        <Text>Telefone: (91)98110-3798</Text>
        <Text onPress={() => navigation.navigate("Information", {
            nome: 'Jesse Lima',
            telefone: '(91)98110-3798',
            endereco: 'Passagem Nova',
            numero: 77,
            profissao: 'Analista de Sistemas',
            email: 'jessefplima@gmail.com'
        })}>
          Informações...
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Nome: Aline Lima</Text>
        <Text>Telefone: (91)98810-3565</Text>
        <Text onPress={() => navigation.navigate("Information", {
            nome: 'Aline Lima',
            telefone: '(91)98587-5862',
            endereco: 'Proximo do Utinga',
            numero: 88,
            profissao: 'Analista de Sistemas',
            email: 'alima@pscs.com'
        })}>
          Informações...
        </Text>
      </View>
    </View>
  );
}
