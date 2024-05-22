export enum ServerSimulationType {
  Normal = 0,
  Slow   = 1,
  Error  = 2,
}

export function simulate<T>(type: ServerSimulationType, fn: () => T): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    switch (type) {
      case ServerSimulationType.Normal: return resolve(fn());
      case ServerSimulationType.Slow:   return setTimeout(() => resolve(fn()), 3000);
      case ServerSimulationType.Error:  return reject(new Error("Dangerous Server Error"));
      default:                          return reject(new Error("Invalid Simulation Type"));
    }
  });
}