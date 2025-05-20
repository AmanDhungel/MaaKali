export interface ApiResponseType<T> {
  status: number;
  message: string | null;
  error: string | null;
  data: T;
  pagination?: {
    total_number: number;
    count: number;
    per_page: string;
    current_page: number;
    last_page: number;
  };
  // move this later to TrialResponse only
  sites?: {
    id: number;
    label: string;
    site_no: string;
    title: string;
    value: number;
  }[];
}
