import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';


const imagem = Math.floor(Math.random() * 4 + 1)




export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.viewHerder}>
        <TouchableOpacity>

          <Feather style={{ marginLeft: -70 }} name='menu' size={36} color='#FFF' >
        </Feather>


        </TouchableOpacity>
        <Text style={styles.textHeader}> TEC FILMES </Text>
      </View>

      <View style={styles.containerSearch}>
        <TextInput style={styles.inputSearch} placeholder='Digite o filme que deseja buscar '>

        </TextInput>

        <Text style = {styles.textBanner}> Em cartaz   </Text>
        <Image style = {styles.imageBanner} source={require(`./assets/a viagem de chiriho.jpg`)}>

        </Image>

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

  viewHerder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginLeft: 10

  },

  textHeader: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginRight: 75


  },
  containerSearch: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    marginTop: 30,
    alignItems: "center",
    borderRadius: 3



  },
  inputSearch: {
    height: 35,
    width: "100%",
    marginLeft: 5




  },
  imageBanner:{ 
    width:'90%',
    height:200,
    marginTop:15,
    borderRadius:10
   



  },
  textBanner:{
fontSize:30,
color:"white",
marginTop:15,
marginLeft:-180,
fontWeight:"bold"



  }







});
