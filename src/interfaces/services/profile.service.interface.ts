export const IPROFILESERVICE = 'IPROFILESERVICE';

export interface IProfileService {
  getProfile: () => Promise<string>;
}
