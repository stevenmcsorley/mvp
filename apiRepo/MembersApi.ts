import fetch from 'node-fetch';

import {IMembersSearchParams} from './Interfaces/IMembersSearchParams';
import {IMemberResponse} from '../apiRepo/Interfaces/IMembersResponse';
import {IMemberBiographyResponse} from '../apiRepo/Interfaces/IMemberBiographyResponse';
import {Interest} from './Interfaces/IRegisteredInterestResponse';

const BASE_URL = 'https://members-api.parliament.uk';

export async function getMembersSearch(
  params: IMembersSearchParams,
): Promise<IMemberResponse> {
  const queryParams = new URLSearchParams(params as any).toString();
  const response = await fetch(`${BASE_URL}/api/Members/Search?${queryParams}`);
  return response.json() as Promise<IMemberResponse>;
}

export async function getMemberById(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}`);
  return response.json();
}

export async function getMemberBiography(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/Biography`);
  return response.json() as Promise<IMemberBiographyResponse>;
}

export async function getMemberContact(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/Contact`);
  return response.json();
}

export async function getMemberContributionSummary(id: number) {
  const response = await fetch(
    `${BASE_URL}/api/Members/${id}/ContributionSummary`,
  );
  return response.json();
}

export async function getMemberEdms(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/Edms`);
  return response.json();
}

export async function getMemberExperience(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/Experience`);
  return response.json();
}

export async function getMemberFocus(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/Focus`);
  return response.json();
}

export async function getMembersHistory() {
  const response = await fetch(`${BASE_URL}/api/Members/History`);
  return response.json();
}

export async function getMemberLatestElectionResult(id: number) {
  const response = await fetch(
    `${BASE_URL}/api/Members/${id}/LatestElectionResult`,
  );
  return response.json();
}

export async function getMemberPortrait(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/Portrait`);
  return response.json();
}

export async function getMemberPortraitUrl(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/PortraitUrl`);
  return response.json();
}

export async function getMemberRegisteredInterests(id: number) {
  const response = await fetch(
    `${BASE_URL}/api/Members/${id}/RegisteredInterests`,
  );
  const data = await response.json();
  console.log(data as Interest[]);
  return data as Interest[];
}

export async function getMemberStaff(id: number) {
  const response = await fetch(`${BASE_URL}/api/Members/${id}/Staff`);
  return response.json();
}

export async function getStateOfTheParties(house: string, forDate: string) {
  const response = await fetch(
    `${BASE_URL}/api/Parties/StateOfTheParties/${house}/${forDate}`,
  );
  return response.json();
}

export async function getLordsByType(forDate: string) {
  const response = await fetch(
    `${BASE_URL}/api/Parties/LordsByType/${forDate}`,
  );
  return response.json();
}

export async function getActiveParties(house: string) {
  const response = await fetch(`${BASE_URL}/api/Parties/GetActive/${house}`);
  return response.json();
}

export async function getGovernmentPosts() {
  const response = await fetch(`${BASE_URL}/api/Posts/GovernmentPosts`);
  return response.json();
}

export async function getOppositionPosts() {
  const response = await fetch(`${BASE_URL}/api/Posts/OppositionPosts`);
  return response.json();
}

export async function getSpokespersons() {
  const response = await fetch(`${BASE_URL}/api/Posts/Spokespersons`);
  return response.json();
}

export async function getDepartments(type: string) {
  const response = await fetch(`${BASE_URL}/api/Posts/Departments/${type}`);
  return response.json();
}

export async function getSpeakerAndDeputies(forDate: string) {
  const response = await fetch(
    `${BASE_URL}/api/Posts/SpeakerAndDeputies/${forDate}`,
  );
  return response.json();
}

export async function getPolicyInterests() {
  const response = await fetch(`${BASE_URL}/api/Reference/PolicyInterests`);
  return response.json();
}
