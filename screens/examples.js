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

// get started container
<View style={styles.getStartedContainer}>
  <DevelopmentModeNotice />

  <Text style={styles.getStartedText}>Hi, welcome to Oak.</Text>



  <Text style={styles.getStartedText}>
    Change this text and your app will automatically preload.
  </Text>
</View>

// tab info container
<View style={styles.tabBarInfoContainer}>
  <Text style={styles.tabBarInfoText}>
    This is a tab bar. You can edit it in:
  </Text>

  <View
    style={[styles.codeHighlightContainer, styles.navigationFilename]}>
    <MonoText style={styles.codeHighlightText}>
      navigation/MainTabNavigator.js
    </MonoText>
  </View>
</View>

// dev mode notice
function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}
