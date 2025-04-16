import { Image, Text, View } from 'react-native';
import styles from './stylecard.js';

export default function Card({ nome, notaRotten, imagem }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imagecard} source={{ uri:(imagem) }} />
      <Text style={styles.textcard}>{nome}</Text>
      <Text style={styles.textcard}>{notaRotten}</Text>
    </View>
  );
}
