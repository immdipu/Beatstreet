import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.beatstreet.app',
  appName: 'Beatstreet',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
