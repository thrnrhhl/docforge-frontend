import { useCallback, useEffect, useState } from "react";

export function useGrpcQuery<TRequest, TResponse>(
  clientMethod: (request: TRequest, metadata: any, callback: (err: any, response: TResponse) => void) => void,
  request: TRequest | null
) {
  const [data, setData] = useState<TResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!request) return;

    setLoading(true);
    setError(null);

    try {
      const response = await new Promise<TResponse>((resolve, reject) => {
        clientMethod(request, {}, (err, response: TResponse) => {
          if (err) {
            return reject(err);
          }
         
          resolve(response)
        });
      });

      setData(response);
    } catch (err: any) {
      setError(err.message || "Ошибка запроса");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}