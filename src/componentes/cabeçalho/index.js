
import { Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
export default function Cabecalho() {
    return (
       
            <View style={styles.viewHeader}>
                <TouchableOpacity>
                    <Feather style={{ marginLeft: -70 }} name="menu" size={36} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>TEC FILMES</Text>
            </View>
        
    );
}
