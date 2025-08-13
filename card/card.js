import { Image, Text, View } from 'react-native';
import styles from './stylecard.js';

export default function Card({ titulo, nota, imagem }) {
  return (
    <View >
      
      <Image style={styles.imagecard} source={{ uri:(`https://image.tmdb.org/t/p/original${imagem}`) }} />
      <Text style= {styles.textcard}>{titulo}</Text>
      <Text style={styles.textnota}  > Nota: {nota}</Text>
    </View>
  );
}
