import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDE8',
  },
  scrollView: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#000',
  },
  headerButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },

  profileSection: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    marginBottom: 2,
  },
  profileEmail: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#666',
  },

  menuCard: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    color: '#070707',
  },
  menuSubtitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  logoutIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    transform: [{ scaleX: -1 }],
  },
  logoutText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    color: '#B84953',
  },
});
