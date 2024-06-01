import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// Import the default image
import { useNavigation } from '@react-navigation/native';
import defaultImage from '../Images/audit-failed-3.png';


export default function News() {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            apiKey: 'd9093fbd7f434e6f88e854a9d9479c8a'
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${month} ${day}, ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};

  return (
    <ScrollView style={styles.scrollPage}>
      {articles.map(({ article, urlToImage, source, title, description, publishedAt,url, content }, index) => (
       
          description !=null &&   <TouchableOpacity key={index} onPress={()=>navigation.navigate("Details", {
          urlToImage, 
          source: source.name , 
          title, 
          description, 
          publishedAt,
          url, 
          content
        })}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={urlToImage ? { uri: urlToImage } : defaultImage} // Use default image if urlToImage is not available
                style={styles.image}
                // Handle image loading error
                onError={(error) => console.log("Error loading image:", error)}
              />
              <View style={styles.textContainer}>
              <Text style={styles.time}>{formatDate(publishedAt)}</Text>
                <Text style={styles.sourceName}>{source.name}</Text>
                <Text style={styles.title}>{title}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollPage: {
    backgroundColor: '#EAF0F1',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 8,
    elevation: 4,
   
    
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  sourceName: {
    fontWeight: 'bold',
    color: '#10A881',
  },
  title: {
    color: '#2C3335',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    color: '#E71C23',
    marginTop: 0,
    fontWeight: '800',
    position:'absolute',
    right:0,
    top:0
  },
});

