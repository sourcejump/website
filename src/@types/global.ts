// Use this interface to define the props of a page
export interface NextPageProps<T = Record<string, string>> {
  params: T;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// Use this interface for HTTP response
export interface HttpResponse<T = unknown, E = string[]> {
  code: number;
  message?: string;
  payload?: T;
  errors?: E;
}
