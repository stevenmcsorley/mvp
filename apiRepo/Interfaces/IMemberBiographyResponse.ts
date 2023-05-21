export interface IMemberBiographyResponse {
  value: {
    representations: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
    electionsContested: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
    houseMemberships: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
    governmentPosts: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
    oppositionPosts: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
    otherPosts: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
    partyAffiliations: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
    committeeMemberships: {
      house: number;
      name: string;
      id: number;
      startDate: string;
      endDate: string | null;
      additionalInfo: string | null;
      additionalInfoLink: string | null;
    }[];
  };
  links: {
    rel: string;
    href: string;
    method: string;
  }[];
}
