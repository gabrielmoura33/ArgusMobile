import { Service } from './Services';
import { ProviderInfo } from './Statistics';

export interface Provider {
  id: string;
  name: string;
  email: string;
  mail_confirmed: boolean;
  isProvider: boolean;
  isArgusArtist: boolean;
  providerInfo: ProviderInfo;
  avatar_url: string;
  services?: Service[];
}
