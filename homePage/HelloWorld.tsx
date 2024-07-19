import React from "react";
import { Text, View } from "react-native";
import {styles} from "./StyleSheetAPI";


export default function HelloWorld() {
    return (
        <View>
            {/*çoklu stillerde en sondaki elemandaki olan özellik diğerlerini ezer.*/}            
            <Text style={[styles.lightBlueBg, styles.box]} >Hello World</Text>
        </View>
    );
}
