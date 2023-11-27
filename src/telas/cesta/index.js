// Bibliotecas e recursos
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Componentes
import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';

export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
        </View>
    </>         
}

const estilos = StyleSheet.create({    
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});