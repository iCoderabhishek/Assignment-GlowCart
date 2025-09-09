import { OnboardingNavProp } from '../types/navigation.types';
import { useNavigation } from '@react-navigation/native';
import { Eye, Mail } from 'lucide-react-native';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import topBgImg from '../assets/images/login/topbg.png';
import appleImg from '../assets/images/socials/apple.png';
import facebookImg from '../assets/images/socials/facebook.png';
import googleImg from '../assets/images/socials/google.png';
import { styles } from '../styles/login.styles';

export default function Login() {
  const navigation = useNavigation<OnboardingNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.topBackgroundContainer}>
          <Image
            source={topBgImg as any}
            style={styles.topBackgroundImage}
            resizeMode="stretch"
          />

          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeTitle}>Hello Again!</Text>
            <Text style={styles.welcomeSubtitle}>
              Welcome back you've been missed.
            </Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your email Id"
              placeholderTextColor="#757575"
              style={styles.textInput}
            />
            <Mail size={19} color="#757575" style={styles.inputIcon} />
          </View>

          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#757575"
              secureTextEntry
              style={styles.textInput}
            />
            <Eye size={20} color="#757575" style={styles.inputIcon} />
          </View>

          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('index')}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or Continue With</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={googleImg as any}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={appleImg as any}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={facebookImg as any}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Not a Member?{' '}
              <Text
                onPress={() => navigation.navigate('register')}
                style={styles.registerLink}
              >
                Register Now
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
