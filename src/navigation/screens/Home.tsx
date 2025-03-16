// import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';

const hello = () => {
  console.log('Hello');
}
export function Home() {
  const [articles, setArticles] = React.useState<{ title: string, description: string }[]>([]);
  const [text, onChangeText] = React.useState('Useless Text');
  const getNewsList = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=9c96b28ea56a4c8e9bc5e83908969662');
      const json = await response.json();
      setArticles(json.articles);
    } catch (error) {
      console.error(error); // Error handling
    }
  }
  useEffect(() => {
    getNewsList();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button onPress={() => hello()}>Press me</Button>
      <Button screen="Profile" params={{ user: 'jane' }}>
        Go to Profile
      </Button>
      <Button screen="Settings">Go to Settings</Button> */}
        {/* <TextInputComponent onChangeText={(text) => console.log(text)} placeholder='Enter sq ft' /> */}
        <ScrollView style={styles.NewsContainer}>
          <FlatList
            data={articles}
            renderItem={({ item }) => <View style={styles.Article}>
              <Text style={styles.ArticleTitle}>{item.title}</Text>
              <Text style={styles.ArticleDesc}>{item.description}</Text>
            </View>}
            keyExtractor={(item, index) => item.title?.toString() || index.toString()}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  NewsContainer: {
    padding: 20,
  },
  Article: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  ArticleDesc: {
    fontSize: 12,
  },
  ArticleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  Input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
