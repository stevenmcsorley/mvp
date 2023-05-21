import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getMembersSearch} from '../apiRepo/MembersApi';
import {IMembersSearchParams} from '../apiRepo/Interfaces/IMembersSearchParams';
import {
  IMemberResponse,
  MemberItem,
} from '../apiRepo/Interfaces/IMembersResponse';
import MemberBiography from './MemberBiography'; // Import the MemberBiography component
import MemberRegisteredInterests from './RegisteredInterests'; // Import the MemberRegisteredInterests component

const MembersSearchComponent = () => {
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null); // Track selected member ID

  const fetchMembers = async (name?: string) => {
    try {
      if (name || searchTerm) {
        const params: IMembersSearchParams = {
          Name: name || searchTerm,
          House: 1,
        };
        const data: IMemberResponse = await getMembersSearch(params);
        setMembers(data.items);
      } else {
        setMembers([]);
      }
    } catch (error) {
      console.error('Failed to fetch members:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleMemberClick = (name: string) => {
    setSearchTerm(name);
    fetchMembers(name);
  };

  const clearSearchTerm = () => {
    setSearchTerm('');
    setMembers([]); // Clear the members list
    setSelectedMemberId(null); // Clear the selected member ID
  };

  const renderMemberCard = ({item}: {item: MemberItem}) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => handleMemberClick(item.value.nameDisplayAs)}>
      <View style={styles.cardImageContainer}>
        <Image
          source={{uri: item.value.thumbnailUrl}}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardDetails}>
        <Text>{item.value.nameDisplayAs}</Text>
        <Text>{item.value.latestParty.name}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
          placeholder="Search for a member"
          onSubmitEditing={() => fetchMembers()}
          style={styles.searchInput}
          clearButtonMode="while-editing"
        />
        {searchTerm.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearSearchTerm}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={members}
        keyExtractor={item => item.value.id.toString()}
        renderItem={renderMemberCard}
      />
      <View>
        {members.length === 1 && ( // Only render MemberBiography if there is one member
          <>
            <MemberBiography memberId={members[0].value.id} />
            <ScrollView>
              <MemberRegisteredInterests memberId={members[0].value.id} />
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardImageContainer: {
    marginRight: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cardDetails: {
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  clearButton: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#888',
  },
});

export default MembersSearchComponent;
