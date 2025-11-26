import { makeRequest } from "@/config/api.config";

export const submitWaitlist = async (email: string) => {
    return await makeRequest({
      url: '/waitlist/create',
      method: 'POST',
      data: { email },
    });
  };

