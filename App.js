import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile({imgUri, genero, nome, email, telefone}) {

    const pessoa = {
        imgUri: '../assets/eu.jpg',
        genero: " Feminino",
        nome: " Geovana Gonçalves Veloso",    
        email: " geovana.gonncalves@icloud.com",
        telefone: " (61) 98162-5365"
    }

    return (

        <View style={styles.container}>
            

            <View>
                <Text style={styles.texto}>Profile da Geovana!                                                                     </Text>
            </View>
            
            <Image
                style={styles.imagem}
                source={require("../myapp/assets/eu.jpg")}>
            </Image>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Gênero:</Text>
                <Text style={styles.texto}>{pessoa.genero}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Nome:</Text>
                <Text style={styles.texto}>{pessoa.nome}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Telefone:</Text>
                <Text style={styles.texto}>{pessoa.telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>E-mail:</Text>
                <Text style={styles.texto}>{pessoa.email}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 5,
        marginTop: "10%"
    },

    labelContainer: {
       
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '98%',
        padding: 10
    },

    texto: {
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },

    textoLabel: {
        fontSize: 25,
        fontWeight: "bold"

    },

    imagem: {
        justifyContent: 'center',
        width: 300,
        height: 400,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 600,
        padding: 20,
        marginTop: 60,
        marginLeft: 10
    }
})