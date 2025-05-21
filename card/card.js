import { Image, Text, View } from 'react-native';
import styles from './stylecard.js';

export default function Card({ titulo, nota, imagem }) {
  return (
    <View >
      <Image style={styles.imagecard} source={{ uri:(imagem) }} />
      <Text   style= {styles.textcard}>{titulo}</Text>
      <Text style={styles.textnota} >{nota}</Text>
    </View>
  );
}
