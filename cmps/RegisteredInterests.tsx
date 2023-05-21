import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getMemberRegisteredInterests} from '../apiRepo/MembersApi';
import {Interest} from '../apiRepo/Interfaces/IRegisteredInterestResponse';

interface MemberRegisteredInterestsProps {
  memberId: number;
}

const MemberRegisteredInterests: React.FC<MemberRegisteredInterestsProps> = ({
  memberId,
}) => {
  const [registeredInterests, setRegisteredInterests] = useState<
    Interest[] | null
  >(null);

  useEffect(() => {
    const fetchRegisteredInterests = async () => {
      try {
        const data = await getMemberRegisteredInterests(memberId);
        setRegisteredInterests(data?.value);
      } catch (error) {
        console.error('Failed to fetch member registered interests:', error);
      }
    };

    fetchRegisteredInterests();
  }, [memberId]);

  if (!registeredInterests) {
    return (
      <Text style={styles.loadingText}>Loading registered interests...</Text>
    );
  }

  // Render the member's registered interests
  return (
    <View>
      <Text>Registered Interests</Text>
      {registeredInterests.map(category => (
        <View key={category.id}>
          <Text>Category: {category.name}</Text>
          {category.interests.map(interest => (
            <View key={interest.id}>
              <Text>Interest: {interest.interest}</Text>
              <Text>Created When: {interest.createdWhen}</Text>
              <Text>Last Amended When: {interest.lastAmendedWhen}</Text>
              {/* Render additional fields for the interest */}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default MemberRegisteredInterests;

// StyleSheet
const styles = StyleSheet.create({
  loadingText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'red',
  },
});
