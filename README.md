# Starter Template with React Navigation

This is a minimal starter template for React Native apps using Expo and React Navigation.

It includes the following:

- Example [Native Stack](https://reactnavigation.org/docs/native-stack-navigator) with a nested [Bottom Tab](https://reactnavigation.org/docs/bottom-tab-navigator)
- Web support with [React Native for Web](https://necolas.github.io/react-native-web/)
- TypeScript support and configured for React Navigation
- Automatic deep link and URL handling configuration
- Expo [Development Build](https://docs.expo.dev/develop/development-builds/introduction/) with [Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)
- Edge-to-edge configured on Android with [`react-native-edge-to-edge`](https://www.npmjs.com/package/react-native-edge-to-edge)

## Getting Started

1. Create a new project using this template:

   ```sh
   npx create-expo-app@latest --template react-navigation/template
   ```

2. Edit the `app.json` file to configure the `name`, `slug`, `scheme` and bundle identifiers (`ios.bundleIdentifier` and `android.bundleIdentifier`) for your app.

3. Edit the `src/App.tsx` file to start working on your app.

## Running the app

- Install the dependencies:

  ```sh
  npm install
  ```

- Start the development server:

  ```sh
  npm start
  ```

- Build and run iOS and Android development builds:

  ```sh
  npm run ios
  # or
  npm run android
  ```

- In the terminal running the development server, press `i` to open the iOS simulator, `a` to open the Android device or emulator, or `w` to open the web browser.

## Notes

This project uses a [development build](https://docs.expo.dev/develop/development-builds/introduction/) and cannot be run with [Expo Go](https://expo.dev/go). To run the app with Expo Go, edit the `package.json` file, remove the `expo-dev-client` package and `--dev-client` flag from the `start` script. However, Edge-to-edge won't work on Expo Go.

We highly recommend using the development builds for normal development and testing.

The `ios` and `android` folder are gitignored in the project by default as they are automatically generated during the build process ([Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)). This means that you should not edit these folders directly and use [config plugins](https://docs.expo.dev/config-plugins/) instead. However, if you need to edit these folders, you can remove them from the `.gitignore` file so that they are tracked by git.

## Resources

- [React Navigation documentation](https://reactnavigation.org/)
- [Expo documentation](https://docs.expo.dev/)

---

Demo assets are from [lucide.dev](https://lucide.dev/)


---
title: React Native
description: A guide to React Native including setup, navigation, and native components.
published: false
# cover_image: https://direct_url_to_image.jpg
# Use a ratio of 100:42 for best results.
# published_at: 2025-01-25 03:35 +0000
---

## 🚀 Create a New React Native Project Using Expo
[Expo Documentation - Create Expo Project](https://docs.expo.dev/more/create-expo/)

## 🔀 Add Navigation to React Native
[React Navigation - Getting Started](https://reactnavigation.org/docs/getting-started)

## ⚖️ Difference Between CLI and EXPO

| Feature                        | Expo Go                         | Expo CLI                          |
|--------------------------------|--------------------------------|----------------------------------|
| **Purpose**                    | Run & preview apps            | Manage & build Expo projects     |
| **Installation Needed?**        | No (only install Expo Go app) | Yes (`npm install -g expo-cli`)  |
| **Works with Custom Native Code?** | ❌ No | ✅ Yes (bare workflow) |
| **Hot Reloading**              | ✅ Yes                         | ✅ Yes                            |
| **Builds Standalone Apps?**     | ❌ No                         | ✅ Yes (`expo build`)             |
| **Requires a Physical Device?** | ✅ Yes (or Emulator)         | ✅ Yes (for testing on devices)  |

---

## 📌 React Native Native Components with Props

| Component            | Description                                      | Key Props |
|----------------------|--------------------------------------------------|-----------|
| **View**            | Container for other components (like `<div>`)   | `style`, `onLayout` |
| **Text**            | Displays text content                           | `style`, `numberOfLines`, `ellipsizeMode` |
| **Image**           | Displays images                                 | `source`, `resizeMode`, `style` |
| **ScrollView**      | Scrollable container                            | `horizontal`, `showsVerticalScrollIndicator` |
| **FlatList**        | Optimized list for large datasets               | `data`, `renderItem`, `keyExtractor` |
| **SectionList**     | List with sections (grouped list)               | `sections`, `renderItem`, `renderSectionHeader` |
| **TextInput**       | Input field for text entry                      | `value`, `onChangeText`, `keyboardType` |
| **Button**          | Simple button component                         | `title`, `onPress`, `disabled` |
| **Pressable**       | More flexible button                            | `onPress`, `onLongPress`, `style` |
| **TouchableOpacity** | Button that fades when pressed                  | `onPress`, `activeOpacity` |
| **TouchableHighlight** | Button that highlights when pressed           | `onPress`, `underlayColor` |
| **Switch**         | A toggle switch                                  | `value`, `onValueChange` |
| **Slider**         | Selects a value in a range                       | `value`, `onValueChange`, `minimumValue`, `maximumValue` |
| **KeyboardAvoidingView** | Adjusts layout when keyboard appears       | `behavior`, `keyboardVerticalOffset` |
| **Modal**          | Pop-up modal window                              | `visible`, `onRequestClose`, `animationType` |
| **Alert**          | Shows a native alert                             | `title`, `message`, `buttons` |
| **StatusBar**      | Controls the status bar appearance               | `hidden`, `barStyle`, `backgroundColor` |
| **ActivityIndicator** | Displays a loading spinner                     | `animating`, `size`, `color` |
| **ImageBackground** | Uses an image as a background                    | `source`, `style`, `resizeMode` |
| **RefreshControl** | Enables pull-to-refresh in ScrollView            | `refreshing`, `onRefresh` |
| **Vibration**      | Controls device vibration                        | `vibrate` (method) |
| **Linking**        | Opens external links                             | `openURL`, `canOpenURL` (methods) |
| **Share**          | Opens a share dialog                             | `share` (method) |
| **Platform**       | Detects platform (iOS/Android)                   | `OS`, `Version`, `isTV` |
| **PermissionsAndroid** | Manages Android permissions                  | `request`, `check` (methods) |
| **NativeModules**  | Calls platform-specific native modules           | Varies by module |
| **PixelRatio**     | Handles pixel density scaling                    | `get`, `roundToNearestPixel` |

---

## 🔗 Useful Links
- [State of React Native 2024](https://results.2024.stateofreactnative.com/en-US)

