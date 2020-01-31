// homeScreen.js

// help container
<View style={styles.helpContainer}>
  <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
    <Text style={styles.helpLinkText}>
      Handle help press
    </Text>
  </TouchableOpacity>
</View>

// code highlight container
<View
  style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
  <MonoText>Mono Text stuff: screens/HomeScreen.js</MonoText>
</View>


// welcome images
<View style={styles.welcomeContainer}>
  <Image
    source={
      __DEV__
        ? require('../assets/images/robot-dev.png')
        : require('../assets/images/robot-prod.png')
    }
    style={styles.welcomeImage}
  />
</View>
