import { performance } from "perf_hooks";

export function LogExecutionTime(
  target: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
) {
  try {
    let originalMethod: any = propertyDescriptor.value;
    if (typeof originalMethod === "function") {
      propertyDescriptor.value = async function (...args: any) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const finish = performance.now();

        let exTime = Number((finish - start) / 1000).toFixed(4);

        console.log(
          `${typeof originalMethod} ${methodName}(): ${exTime}s`
        );
        return result;
      };
    }
    return propertyDescriptor;
  } catch (e) {
    return;
  }
}
