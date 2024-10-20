import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { api } from '../axios';
import { ReadDecimalResponse } from './read-interfaces';

// TODO: FUNCTIONS
const readDecimalAxios = async () =>
  (await api.get<ReadDecimalResponse>(`/contracts/matic/decimals`)).data;

export const useReadDecimalQuery = (options?: UseQueryOptions<ReadDecimalResponse>) =>
  useQuery<ReadDecimalResponse>(['api', 'read', 'matic decimals'], readDecimalAxios, {
    ...options,
  });
