export interface LobeUser {
  avatar?: string;
  firstName?: string | null;
  fullName?: string | null;
  id: string;
  latestName?: string | null;
  username?: string | null;
}

export interface UserAuthState {
  isLoaded?: boolean;
  isSignedIn?: boolean;
  user?: LobeUser;
  userId?: string | null;
}

export const initialUserState: UserAuthState = {};
