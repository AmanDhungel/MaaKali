import { DELETE, GET, POST } from "@/helper/fetcher";
import { KEY } from "@/lib/Keys";
import { ApiResponseType } from "@/types/ApiResponseType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const queryclient = useQueryClient();

export interface ContactProps {
  id: string;
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}
const GetContacts = async () => {
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

const PostContact = async () => {
  return useMutation({
    mutationKey: [KEY.Contact],
    mutationFn: async (data: ContactProps) => {
      return await POST("contact", data);
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
