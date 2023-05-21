export interface IMemberResponse {
  items: MemberItem[];
  totalResults: number;
  resultContext: string;
  skip: number;
  take: number;
  links: Link[];
}

export interface MemberItem {
  value: {
    id: number;
    nameListAs: string;
    nameDisplayAs: string;
    nameFullTitle: string;
    nameAddressAs: string | null;
    latestParty: Party;
    gender: string;
    latestHouseMembership: HouseMembership;
    thumbnailUrl: string;
  };
  links: Link[];
}

export interface Party {
  id: number;
  name: string;
  abbreviation: string;
  backgroundColour: string;
  foregroundColour: string;
  isLordsMainParty: boolean;
  isLordsSpiritualParty: boolean;
  governmentType: number;
  isIndependentParty: boolean;
}

export interface HouseMembership {
  membershipFrom: string;
  membershipFromId: number;
  house: number;
  membershipStartDate: string;
  membershipEndDate: string | null;
  membershipEndReason: string | null;
  membershipEndReasonNotes: string | null;
  membershipEndReasonId: number | null;
  membershipStatus: {
    statusIsActive: boolean;
    statusDescription: string;
    statusNotes: string | null;
    statusId: number;
    status: number;
    statusStartDate: string;
  };
}

export interface Link {
  rel: string;
  href: string;
  method: string;
}
