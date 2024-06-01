import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import defaultImage from '../Images/audit-failed-3.png';

const Details = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const {
        urlToImage,
        source,
        title,
        description,
        publishedAt,
        url,
        content,
    } = route.params;




    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.SOurceTime}>

                <Text style={styles.source}>{source}</Text>
                <Text style={styles.date}>{new Date(publishedAt).toLocaleDateString()}</Text>

            </View>


            <Text style={styles.title}>{title}</Text>
            <Image source={ urlToImage ?  { uri: urlToImage }: defaultImage} style={styles.image} />


            <Text style={styles.description}>{description}</Text>
            {/* <Text style={styles.content}>{content}</Text> */}
            <Button title="Read More" onPress={() => Linking.openURL(url)}
            color="#841584" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginBottom:20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#000000',
        marginBottom:20
    },
    SOurceTime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    source: {
        fontSize: 16,
        color: '#888',
        marginTop: 5,
        color: '#10A881',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
        color: '#E71C23',
        fontWeight: '800',
    },
    description: {
        fontSize: 20,
        marginTop: 10,
        color: "#000000",
        marginBottom:20,
        fontWeight:"600"
    },
    content: {
        fontSize: 14,
        marginTop: 10,
        color: "red"
    },
});

export default Details;
