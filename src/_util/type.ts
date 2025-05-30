 
export type AnyObject = Record<PropertyKey, any>;

export type GetProps<T extends React.ComponentType<any> | object> = T extends React.ComponentType<
  infer P
>
  ? P
  : T extends object
    ? T
    : never;


export type GetProp<
    T extends React.ComponentType<any> | object,
    PropName extends keyof GetProps<T>,
  > = NonNullable<GetProps<T>[PropName]>;

type ReactRefComponent<Props extends { ref?: React.Ref<any> | string }> = (
    props: Props,
  ) => React.ReactNode;

  type ExtractRefAttributesRef<T> = T extends React.RefAttributes<infer P> ? P : never;


  export type GetRef<T extends ReactRefComponent<any> | React.Component<any>> =
  T extends React.Component<any>
    ? T
    : T extends React.ComponentType<infer P>
      ? ExtractRefAttributesRef<P>
      : never;