import { IFilters } from '../../../shared/@types/IFilters';
import { ApiResponse } from '../../../shared/@types/api.response';
import { Provider } from '../../../shared/entities/Provider';
import api from '../../../shared/services/api';

const prefix = 'api/v1';
const suffix = 'appointments';
export const AppointmentService = {
  fetchAppointments: async (
    query: IFilters<Provider>,
  ): Promise<ApiResponse<Provider>> => {
    return (
      await api.get(`${prefix}/${suffix}`, {
        params: query,
      })
    ).data;
  },

  saveAppointment: () => {
    //
  },
};
