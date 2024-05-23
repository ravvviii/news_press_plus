import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import the default image
import defaultImage from '../Images/audit-failed-3.png';

export default function News() {
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

  return (
    <ScrollView style={styles.scrollPage}>
      {articles.map(({ article, urlToImage, source, title, description, publishedAt,url }, index) => (
        <TouchableOpacity key={index} onPress={()=>openWebsite(url)}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={urlToImage ? { uri: urlToImage } : defaultImage} // Use default image if urlToImage is not available
                style={styles.image}
                // Handle image loading error
                onError={(error) => console.log("Error loading image:", error)}
              />
              <View style={styles.textContainer}>
                <Text style={styles.time}>{new Date(publishedAt).toLocaleDateString('en-US')}</Text>
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
    marginTop: 5,
    fontWeight: '800',
    position:'absolute',
    right:3,
    top:0
  },
});

