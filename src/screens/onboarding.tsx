import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// img imports here
import { OnboardingNavProp } from '../types/navigation.types';
import newLoadingImg from '../assets/images/onboarding/newLoading.png';
import onboardingImg from '../assets/images/onboarding/onboarding-img.png';
import { styles } from '../styles/onboarding.styles';

export default function OnboardingButton() {
  const navigation = useNavigation<OnboardingNavProp>();
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.mainContainer}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Image
              source={onboardingImg as any}
              style={styles.onboardingImage}
            />
          </View>

          {/* Title near bottom center */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Viorra</Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Your Beauty, Delivered.</Text>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <Pressable
              onPress={() => navigation.navigate('login')}
              style={styles.getStartedButton}
            >
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </Pressable>

            <Image
              source={newLoadingImg as any}
              style={styles.loadingImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </>
    </SafeAreaView>
  );
}
