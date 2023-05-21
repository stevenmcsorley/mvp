export interface IMembersSearchParams {
  Name?: string;
  Location?: string;
  PostTitle?: string;
  PartyId?: number;
  House?: number;
  ConstituencyId?: number;
  NameStartsWith?: string;
  Gender?: string;
  MembershipStartedSince?: string;
  'MembershipEnded.MembershipEndedSince'?: string;
  'MembershipEnded.MembershipEndReasonIds'?: number[];
  'MembershipInDateRange.WasMemberOnOrAfter'?: string;
  'MembershipInDateRange.WasMemberOnOrBefore'?: string;
  'MembershipInDateRange.WasMemberOfHouse'?: number;
  IsEligible?: boolean;
  IsCurrentMember?: boolean;
  PolicyInterestId?: number;
  Experience?: string;
  skip?: number;
  take?: number;
}
