export interface UserData {
  id: string;
  username: string;
  email: string;
}

interface SettingsData {
  theme: string;
  language: string;
}

interface PreferencesData {
  notifications: boolean;
  darkMode: boolean;
}

export interface StoredData {
  user: UserData;
  settings: SettingsData;
  preferences: PreferencesData;
}
export const initialData: StoredData = {
  user: {
    id: "",
    username: "",
    email: "",
  },
  settings: {
    theme: "",
    language: "",
  },
  preferences: {
    notifications: false,
    darkMode: false,
  },
};
