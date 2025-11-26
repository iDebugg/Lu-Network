import { useMutation } from '@tanstack/react-query';
import { submitWaitlist } from '@/services/auth.services';
import { API_RESPONSE } from '@/types/api.types';

export const useJoinWaitlist = () => {
  return useMutation<API_RESPONSE<any>, Error, string>({
    mutationFn: submitWaitlist,
    onSuccess: (data) => {
      console.log('Successfully joined waitlist:', data);
    },
    onError: (error) => {
      console.error('Error joining waitlist:', error);
    },
  });
};