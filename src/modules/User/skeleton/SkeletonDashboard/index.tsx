/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import theme from '../../../../global/styles/theme';

function SkeletonDashboard() {
  return (
    <ScrollView style={styles.container}>
      <SkeletonPlaceholder backgroundColor={theme.colors.DarkerBlue}>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <View style={styles.userInfoWrapper}>
            <View style={styles.userWelcomeLabel} />
            <View style={styles.userName} />
          </View>
        </View>
        <View style={styles.labelWrapper}>
          <View style={styles.label} />
          <View style={styles.seeMoreLabel} />
        </View>

        <View style={styles.categoryList}>
          <View style={styles.categoryCardWrapper}>
            <View style={styles.categoryComponent} />
          </View>
          <View style={styles.categoryCardWrapper}>
            <View style={styles.categoryComponent} />
          </View>
          <View style={styles.categoryCardWrapper}>
            <View style={styles.categoryComponent} />
          </View>
        </View>

        <View style={[styles.labelWrapper, styles.marginTop]}>
          <View style={styles.label} />
          <View style={styles.seeMoreLabel} />
        </View>

        <View style={styles.argusProviderList}>
          <View style={styles.argusProviderCardWrapper}>
            <View style={styles.argusProviderCard} />
          </View>
          <View style={styles.argusProviderCardWrapper}>
            <View style={styles.argusProviderCard} />
          </View>
        </View>
        <View style={[styles.labelWrapper, styles.marginTop]}>
          <View style={styles.label} />
          <View style={styles.seeMoreLabel} />
        </View>
        <View style={styles.relatedProviderList}>
          <View style={styles.relatedProviderCardWrapper}>
            <View style={styles.relatedProviderCard} />
          </View>
          <View style={styles.relatedProviderCardWrapper}>
            <View style={styles.relatedProviderCard} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20.4,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.Secondary,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  avatar: { width: 53, height: 53, borderRadius: 35 },
  userInfoWrapper: { marginLeft: '3%', width: '60%' },
  userWelcomeLabel: { width: '80%', height: 20, borderRadius: 4 },
  userName: { marginTop: 6, width: '100%', height: 20, borderRadius: 4 },
  labelWrapper: {
    width: '87%',
    marginTop: 28.34,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  label: { width: 78, height: 17, borderRadius: 5 },
  seeMoreLabel: { width: 58, height: 7, borderRadius: 5 },
  marginTop: {
    height: 18,
    marginTop: 30,
  },
  categoryList: {
    marginTop: RFValue(20),
    width: '100%',
    flexDirection: 'row',
  },
  categoryComponent: {
    width: 165,
    height: 137,
    marginRight: RFValue(1),
    borderRadius: 8,
  },
  categoryCardWrapper: {
    paddingRight: RFValue(15),
  },
  argusProviderList: {
    width: '95%',
    flexDirection: 'row',
    marginTop: 20,
  },
  argusProviderCardWrapper: {
    paddingRight: RFValue(15),
    height: 195,
  },
  argusProviderCard: {
    width: 167,
    height: '100%',
    borderRadius: 5,
  },
  relatedProviderList: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 20,
  },
  relatedProviderCardWrapper: {
    height: 195,
    width: '100%',
  },
  relatedProviderCard: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
});
export default SkeletonDashboard;
