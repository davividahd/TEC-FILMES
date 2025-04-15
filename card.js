import { Image , Text } from 'react-native';
import styles from './style';
   export default function Card({nome , notaRotten, imagem}) {    
    return (
 < Image style ={styles.imagecard}  ({uri: imagem}) >

  </Image>

  <Text style={styles.textcard}>{nome}</Text>,
  <Text style={styles.textcard}>{notaRotten}</Text>

);
   }
}
