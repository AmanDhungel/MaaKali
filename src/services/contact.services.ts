import { DELETE, GET, POST } from "@/helper/fetcher";
import { KEY } from "@/lib/Keys";
import { ApiResponseType } from "@/types/ApiResponseType";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface ContactProps {
  id: string;
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}
const GetContacts = () => {
  return useQuery<
    ApiResponseType<ContactProps[]>,
    AxiosError<{ message: string; error: Record<string, unknown> }>,
    ContactProps
  >({
    queryKey: [KEY.Contact],
    queryFn: () => {
      return GET<ApiResponseType<ContactProps[]>>(`contact`);
    },
  });
};

const PostContact = () => {
  return useMutation({
    mutationKey: [KEY.Contact],
    mutationFn: (data: ContactProps) => {
      return POST("contact", data);
    },
  });
};

const DeleteContact = async () => {
  return useMutation({
    mutationKey: [KEY.Contact],
    mutationFn: async (id: string) => {
      return await DELETE(`contact/${id}`);
    },
  });
};

export { GetContacts, PostContact, DeleteContact };
