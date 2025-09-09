import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  appHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  appTitle: {
    fontFamily: 'Playfair Display',
    fontSize: 28,
    letterSpacing: 0.5,
    color: '#B84953',
  },
  headerIconsContainer: {
    flexDirection: 'row',
    gap: 32,
  },
  searchContainer: {
    position: 'relative',
  },
  searchInput: {
    fontFamily: 'Inter',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 48,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#8F8F8F',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 14,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#FFEDE8',
    borderWidth: 0.4,
    borderColor: '#333333',
  },
  listHeader: {
    paddingVertical: 24,
  },
  listHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'left',
    color: '#000',
  },
  productCount: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'left',
    color: '#636363',
    marginTop: 5,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    width: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  filterText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#424242',
    marginRight: 4,
    fontWeight: '500',
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  productItem: {
    width: '48%',
    marginBottom: 24,
    borderWidth: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 12,
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  productImageContainer: {
    aspectRatio: 1,
    backgroundColor: '#FFEDE8',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  productContent: {
    paddingTop: 16,
  },
  productTitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    color: '#000000',
    marginBottom: 4,
  },
  productPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#4B4B4B',
  },
  heartIcon: {
    width: 28,
    height: 28,
  },
  flatListContent: {
    paddingHorizontal: 24,
    paddingBottom: 96,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
});