import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';

import Cabecalho from '../../componentes/cabeçalho';
import Pesquisa from '../../componentes/pesquisa/pesquisa.js';
import Banner from '../../componentes/banner/banner.js';
import Card from '../../componentes/card/card.js';
import DATA from '../../../DATA/movies.js'

export default function Home() {
    return (
        <View style={styles.container}>



            <Cabecalho />


            <View style={styles.containerSearch}>

                <Pesquisa />

                <Banner />

                <View style={{ width: '90%' }}>

                    <FlatList
                        data={DATA}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Card
                                titulo = {item.nome}
                                nota = {item.notaRotten}
                                imagem = {item.imagem}
                            />
                        )}
                    />


                </View>


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
        marginTop: 300,
    },


},




);

