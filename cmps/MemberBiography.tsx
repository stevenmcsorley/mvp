import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getMemberBiography} from '../apiRepo/MembersApi';
import {IMemberBiographyResponse} from '../apiRepo/Interfaces/IMemberBiographyResponse';

interface MemberBiographyProps {
  memberId: number;
}

const MemberBiography: React.FC<MemberBiographyProps> = ({memberId}) => {
  const [biography, setBiography] = useState<IMemberBiographyResponse | null>(
    null,
  );

  useEffect(() => {
    const fetchBiography = async () => {
      try {
        const data = await getMemberBiography(memberId);
        setBiography(data);
      } catch (error) {
        console.error('Failed to fetch member biography:', error);
      }
    };

    fetchBiography();
  }, [memberId]);

  if (!biography) {
    return <Text style={styles.loadingText}>Loading biography...</Text>;
  }

  // Render the member biography information
  return (
    <View>
      <Text>Biography</Text>
      {biography.value.representations.map(representation => (
        <View key={representation.id}>
          <Text>Constituency: {representation.name}</Text>
          <Text>ID: {representation.id}</Text>
          <Text>Start Date: {representation.startDate}</Text>
          <Text>End Date: {representation.endDate}</Text>
          <Text>Additional Info: {representation.additionalInfo}</Text>
          <Text>Additional Info Link: {representation.additionalInfoLink}</Text>
        </View>
      ))}
      {/* Render other sections of the member biography */}
    </View>
  );
};

export default MemberBiography;

// stylesheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  loadingText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'red',
  },
});
