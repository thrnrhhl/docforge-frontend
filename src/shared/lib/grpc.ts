import { VocabularyClient } from 'grpc-web-gen/VocabularyServiceClientPb';

export const vocabularyServiceClient = new VocabularyClient('http://localhost:8080');

const consoleLog = (color: string, methodName: string, payload: any) => {
  console.groupCollapsed(`%c${methodName}`, `color: ${color}`, payload);
  console.groupEnd();
}; 

export function grpcQuery<TRequest, TResponse>(
  clientMethod: (request: TRequest, metadata: any, callback: (err: any, response: TResponse) => void) => void,
  request: TRequest
): Promise<TResponse> {
  
  const methodName = clientMethod.name.split(" ").pop() ?? "";
  
  return new Promise((resolve, reject) => {
    consoleLog("blue", methodName, (request as any).toObject());
    clientMethod(request, {}, (err, response) => {
      if (err) {
        consoleLog("red", methodName, err);
        reject(err);
      } else {
        consoleLog("green", methodName, (response as any).toObject());
        resolve(response);
      }
    });
  });
}