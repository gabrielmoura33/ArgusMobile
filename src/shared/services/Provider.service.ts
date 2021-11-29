import { IFilters } from '../@types/IFilters';
import { ApiResponse } from '../@types/api.response';
import { Provider } from '../entities/Provider';
import api from './api';

const prefix = 'api/v1';
const suffix = 'providers';
export const ProviderService = {
  fetchProviders: async (
    query: IFilters<Provider>,
  ): Promise<ApiResponse<Provider>> => {
    return (
      await api.get(`${prefix}/${suffix}`, {
        params: query,
      })
    ).data;
  },
};
