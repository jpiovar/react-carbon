interface UserRole {
  id: string;
  type: 'admin' | 'reader' | 'writer';
  detail: string;
}

interface UserData {
  DP_AUTH_TOKEN: string;
  lastActivityTime: number;
  userRole: UserRole | any;
}

export interface UserState {
  data: UserData | any;
  loading: boolean;
  error: any;
}
