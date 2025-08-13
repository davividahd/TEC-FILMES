import { Text, View, Image } from 'react-native';
import styles from './style';
export default function Banner() {
    return (
<View>
    <Text style={styles.textBanner}> Em cartaz   </Text>
    <Image style={styles.imagebanner} source= {require("../../../assets/bannerviagem.jpg" )}   />


</View>

    );
}
