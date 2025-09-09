import { OnboardingNavProp } from '../types/navigation.types';
import { useNavigation } from '@react-navigation/native';
import { Eye, Mail } from 'lucide-react-native';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import topBgImg from '../assets/images/login/topbg.png';
import { styles } from '../styles/register.styles';

export default function Login() {
  const navigation = useNavigation<OnboardingNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Top Background Section */}
        <View style={styles.topBackgroundContainer}>
          <Image
            source={topBgImg as any}
            style={styles.topBackgroundImage}
            resizeMode="stretch"
          />

          {/* Header Text */}
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Join The Glow!</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          {/* Name Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#757575"
              style={styles.textInput}
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your email Id"
              placeholderTextColor="#757575"
              style={styles.textInput}
            />
            <Mail size={19} color="#757575" style={styles.inputIcon} />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#757575"
              secureTextEntry
              style={styles.textInput}
            />
            <Eye size={20} color="#757575" style={styles.inputIcon} />
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#757575"
              secureTextEntry
              style={styles.textInput}
            />
            <Eye size={20} color="#757575" style={styles.inputIcon} />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>

          {/* Register Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('index')}
            style={styles.registerButton}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={styles.registerLinkContainer}>
            <Text style={styles.registerLinkText}>
              Already a Member?{' '}
              <Text
                onPress={() => navigation.navigate('login')}
                style={styles.registerLinkHighlight}
              >
                Login Now
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
