// import React, { useState } from 'react';
// import { View, Text, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function App() {
//   const [image, setImage] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

// const pickImage = async () => {
//   let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   if (permission.status !== 'granted') {
//     alert('Permission denied!');
//     return;
//   }

//   let picked = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     base64: false,
//   });

//   if (!picked.canceled && picked.assets && picked.assets.length > 0) {
//     const uri = picked.assets[0].uri;
//     setImage(uri);
//     uploadImage(uri);
//   }
// };

//   const uploadImage = async (uri) => {
//   setLoading(true);
//   const formData = new FormData();

// formData.append('image', {
//   uri: uri,
//   name: 'upload.jpg',
//   type: 'image/jpeg'
// });


//   try {
//     const response = await fetch('https://3ff8007e2f4cb5da5f.gradio.live/', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();
//     console.log("Response from backend:", data);
//     setResult(data.result);
//   } catch (error) {
//     console.error('Upload error:', error);
//     alert('Upload failed!');
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>👕 Fashion Recommender</Text>
//       <Button title="Upload an Image" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={styles.image} />}
//       {loading && <ActivityIndicator size="large" color="blue" />}
//       {result && (
//         <View style={styles.result}>
//           <Text>Predicted: {result.predicted_category}</Text>
//           <Text>Recommendations: {result.recommendations.join(', ')}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   image: { width: 200, height: 200, marginTop: 20, borderRadius: 10 },
//   result: { marginTop: 20, alignItems: 'center' }
// });
// import React, { useState } from 'react';
// import { View, Text, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';

// export default function App() {
//   const [image, setImage] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const pickImage = async () => {
//     let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permission.status !== 'granted') {
//       alert('Permission denied!');
//       return;
//     }

//     let picked = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       base64: false,
//     });

//     if (!picked.canceled && picked.assets && picked.assets.length > 0) {
//       const uri = picked.assets[0].uri;
//       setImage(uri);
//       uploadImage(uri);
//     }
//   };


// const uploadImage = async (uri) => {
//   setLoading(true);
//   try {
//     const formData = new FormData();
//     formData.append('image', {
//       uri,
//       type: 'image/jpeg',
//       name: 'upload.jpg',
//     });

//     const response = await fetch('https://smooth-peas-dig.loca.lt/upload', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     const data = await response.json();
//     console.log(" Backend Response:", data);

//     const output = data?.["Predicted Category"] || 'Unknown';
//     const recommendations = data?.["Recommendations"]?.join(', ') || 'None';

//     setResult({
//       predicted_category: output,
//       recommendations: recommendations,
//     });

//   } catch (error) {
//     console.error(' Upload error:', error);
//     alert('Upload failed!');
//   } finally {
//     setLoading(false);
//   }
// };




//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>👕 Fashion Recommender</Text>
//       <Button title="Upload an Image" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={styles.image} />}
//       {loading && <ActivityIndicator size="large" color="blue" />}
//       {result && (
//         <View style={styles.result}>
//           <Text>Predicted: {result.predicted_category}</Text>
//           <Text>Recommendations: {result.recommendations}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   image: { width: 200, height: 200, marginTop: 20, borderRadius: 10 },
//   result: { marginTop: 20, alignItems: 'center' },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const pickImage = async () => {
    let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.status !== 'granted') {
      alert('Permission denied!');
      return;
    }

    let picked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: false,
    });

    if (!picked.canceled && picked.assets && picked.assets.length > 0) {
      const uri = picked.assets[0].uri;
      setImage(uri);
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri) => {
    setLoading(true);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append('image', {
        uri,
        type: 'image/jpeg',
        name: 'upload.jpg',
      });

      const response = await fetch('https://happy-bananas-shop.loca.lt/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      console.log('Backend Response:', data);

      if (data.error) {
        Alert.alert('Upload failed!', data.error);
        return;
      }

      setResult({
        predicted_category: data['Predicted Category'],
        recommendations: data['Recommendations'],
        score: data['Similarity Score'],
      });
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Upload failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={darkMode ? ['#121212', '#1f1f1f'] : ['#e0f7fa', '#ffffff']}
      style={styles.container}
    >
      {/* Dark Mode Toggle */}
      <TouchableOpacity onPress={() => setDarkMode(!darkMode)} style={styles.toggle}>
        <Text style={{ fontSize: 22 }}>{darkMode ? '☀️' : '🌙'}</Text>
      </TouchableOpacity>

      {/* Header Section */}
      <View style={styles.headerBlock}>
        <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>
          <Ionicons name="shirt" size={28} color={darkMode ? '#fff' : '#000'} /> Fashion Recommender
        </Text>

        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.uploadText}>Upload an Image</Text>
        </TouchableOpacity>

        <Text style={[styles.subtext, { color: darkMode ? '#ccc' : '#333' }]}>
          Let us help you complete the look.
        </Text>
      </View>

      {/* Selected Image Preview */}
      {image && <Image source={{ uri: image }} style={styles.image} />}

      {/* Loader */}
      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}

      {/* Result Card */}
      {result && (
        <View style={[styles.resultCard, { backgroundColor: darkMode ? '#2c2c2c' : '#e1f5fe' }]}>
          <Text style={styles.resultLabel}>Predicted:</Text>
          <Text style={styles.resultValue}>{result.predicted_category}</Text>

          <Text style={styles.resultLabel}>Recommendations:</Text>
          <View style={styles.recommendRow}>
            {result.recommendations.map((item, index) => (
              <View key={index} style={styles.chip}>
                <Ionicons name="shirt" size={14} color="#fff" />
                <Text style={styles.chipText}> {item} </Text>
              </View>
            ))}
          </View>

          <Text style={styles.resultLabel}>Similarity Score:</Text>
          <Text style={styles.resultValue}>{result.score.toFixed(2)}</Text>

          {/* Try Again */}
          <TouchableOpacity
            style={[styles.resetBtn, { backgroundColor: darkMode ? '#444' : '#80deea' }]}
            onPress={() => {
              setImage(null);
              setResult(null);
            }}
          >
            <Text style={styles.resetBtnText}>Try Another Image</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 20,
    position: 'relative',
  },
  toggle: {
    position: 'absolute',
    top: 55,
    right: 25,
    zIndex: 100,
    backgroundColor: '#ddd',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  headerBlock: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 18,
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 4,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },
  resultCard: {
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginTop: 10,
  },
  resultLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  resultValue: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  recommendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  chip: {
    flexDirection: 'row',
    backgroundColor: '#0288d1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 4,
    alignItems: 'center',
  },
  chipText: {
    color: '#fff',
    fontSize: 14,
  },
  resetBtn: {
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  resetBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
