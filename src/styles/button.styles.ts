import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Button variants
  primaryButton: {
    backgroundColor: '#B84953',
  },
  secondaryButton: {
    backgroundColor: '#FFEDE8',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#B84953',
  },

  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 36,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    height: 48,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    height: 61,
  },

  fullWidth: {
    width: '100%',
  },

  disabled: {
    backgroundColor: '#E5E7EB',
    shadowOpacity: 0,
    elevation: 0,
  },

  buttonText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    textAlign: 'center',
  },

  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#B84953',
  },
  outlineText: {
    color: '#B84953',
  },

  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 24,
    letterSpacing: -0.32,
  },

  disabledText: {
    color: '#9CA3AF',
  },
});