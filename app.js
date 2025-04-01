mport { StyleSheet, Text, View, TextInput, Image, Flatlits } from 'react-native';
import Cabecalho from './src/componentes/cabeçalho/index.js';
import Pesquisa from './src/componentes/pesquisa/pesquisa.js';
import DATA from './movies.js';
const imagem = Math.floor(Math.random() * 4 + 1)




export default function App() {


  return (

    <View style={styles.container}>

     
    <Cabecalho/>


      <View style={styles.containerSearch}>
 
        <Pesquisa/>

        <Text style={styles.textBanner}> Em cartaz   </Text>
        <Image style={styles.imageBanner} source={require(`./assets/a viagem de chiriho.jpg`)}></Image>
    
         
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
    justifyContent: 'center',
  },


 
  imageBanner: {
    width: '40%',
    height: '100%',
    marginTop: 15,
    borderRadius: 10




  },
  textBanner: {
    fontSize: 45,
    color: "black",
    marginTop: 15,
    marginLeft: -8,
    fontWeight: "bold"



  }







});
