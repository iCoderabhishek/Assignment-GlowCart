import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDE8',
  },
  mainContainer: {
    flex: 1,
  },

  topBackgroundContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  topBackgroundImage: {
    width: '100%',
    height: '100%',
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 64,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
  },
  headerText: {
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Playfair Display',
    fontWeight: '800',
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: 0.68,
    color: '#B84953',
  },

  formSection: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
  },

  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingVertical: 20,
    fontSize: 16,
    fontFamily: 'Inter',
    height: 68,
    paddingLeft: 32,
    paddingRight: 48,
  },
  inputIcon: {
    position: 'absolute',
    right: 24,
    top: 24,
  },

  forgotPasswordContainer: {
    marginBottom: 32,
  },
  forgotPasswordText: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#CC3D3D',
  },

  registerButton: {
    backgroundColor: '#B84953',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 32,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 24,
    letterSpacing: -0.32,
  },

  registerLinkContainer: {
    alignItems: 'center',
    paddingTop: 32,
  },
  registerLinkText: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#6C6C6C',
  },
  registerLinkHighlight: {
    fontWeight: '600',
    color: '#CC3D3D',
  },
});