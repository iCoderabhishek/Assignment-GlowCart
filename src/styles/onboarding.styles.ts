import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3aca5af',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  onboardingImage: {
    width: 435,
    height: 600,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 256,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 60,
    textAlign: 'center',
    letterSpacing: -1,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  subtitleContainer: {
    position: 'absolute',
    bottom: 224,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    color: '#FFFFFF',
  },
  bottomSection: {
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButton: {
    backgroundColor: '#b84952e4',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: 240,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  getStartedButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loadingImage: {
    width: 400,
    height: 10,
    alignSelf: 'center',
    marginTop: 24,
  },
});