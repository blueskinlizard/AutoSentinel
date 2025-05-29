
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Dashboard
 * 
 */
export type Dashboard = $Result.DefaultSelection<Prisma.$DashboardPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model DashboardShare
 * 
 */
export type DashboardShare = $Result.DefaultSelection<Prisma.$DashboardSharePayload>
/**
 * Model DashboardRecipient
 * 
 */
export type DashboardRecipient = $Result.DefaultSelection<Prisma.$DashboardRecipientPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboard`: Exposes CRUD operations for the **Dashboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dashboards
    * const dashboards = await prisma.dashboard.findMany()
    * ```
    */
  get dashboard(): Prisma.DashboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboardShare`: Exposes CRUD operations for the **DashboardShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardShares
    * const dashboardShares = await prisma.dashboardShare.findMany()
    * ```
    */
  get dashboardShare(): Prisma.DashboardShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboardRecipient`: Exposes CRUD operations for the **DashboardRecipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardRecipients
    * const dashboardRecipients = await prisma.dashboardRecipient.findMany()
    * ```
    */
  get dashboardRecipient(): Prisma.DashboardRecipientDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Dashboard: 'Dashboard',
    Incident: 'Incident',
    DashboardShare: 'DashboardShare',
    DashboardRecipient: 'DashboardRecipient'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "dashboard" | "incident" | "dashboardShare" | "dashboardRecipient"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Dashboard: {
        payload: Prisma.$DashboardPayload<ExtArgs>
        fields: Prisma.DashboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findFirst: {
            args: Prisma.DashboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findMany: {
            args: Prisma.DashboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          create: {
            args: Prisma.DashboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          createMany: {
            args: Prisma.DashboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          delete: {
            args: Prisma.DashboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          update: {
            args: Prisma.DashboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          deleteMany: {
            args: Prisma.DashboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          upsert: {
            args: Prisma.DashboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          aggregate: {
            args: Prisma.DashboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboard>
          }
          groupBy: {
            args: Prisma.DashboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      DashboardShare: {
        payload: Prisma.$DashboardSharePayload<ExtArgs>
        fields: Prisma.DashboardShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>
          }
          findFirst: {
            args: Prisma.DashboardShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>
          }
          findMany: {
            args: Prisma.DashboardShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>[]
          }
          create: {
            args: Prisma.DashboardShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>
          }
          createMany: {
            args: Prisma.DashboardShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>[]
          }
          delete: {
            args: Prisma.DashboardShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>
          }
          update: {
            args: Prisma.DashboardShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>
          }
          deleteMany: {
            args: Prisma.DashboardShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>[]
          }
          upsert: {
            args: Prisma.DashboardShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardSharePayload>
          }
          aggregate: {
            args: Prisma.DashboardShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboardShare>
          }
          groupBy: {
            args: Prisma.DashboardShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardShareCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardShareCountAggregateOutputType> | number
          }
        }
      }
      DashboardRecipient: {
        payload: Prisma.$DashboardRecipientPayload<ExtArgs>
        fields: Prisma.DashboardRecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardRecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardRecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>
          }
          findFirst: {
            args: Prisma.DashboardRecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardRecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>
          }
          findMany: {
            args: Prisma.DashboardRecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>[]
          }
          create: {
            args: Prisma.DashboardRecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>
          }
          createMany: {
            args: Prisma.DashboardRecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardRecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>[]
          }
          delete: {
            args: Prisma.DashboardRecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>
          }
          update: {
            args: Prisma.DashboardRecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>
          }
          deleteMany: {
            args: Prisma.DashboardRecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardRecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardRecipientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>[]
          }
          upsert: {
            args: Prisma.DashboardRecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardRecipientPayload>
          }
          aggregate: {
            args: Prisma.DashboardRecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboardRecipient>
          }
          groupBy: {
            args: Prisma.DashboardRecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardRecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardRecipientCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardRecipientCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    dashboard?: DashboardOmit
    incident?: IncidentOmit
    dashboardShare?: DashboardShareOmit
    dashboardRecipient?: DashboardRecipientOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    DashboardsOwned: number
    DashboardsShared: number
    DashboardsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardsOwned?: boolean | UserCountOutputTypeCountDashboardsOwnedArgs
    DashboardsShared?: boolean | UserCountOutputTypeCountDashboardsSharedArgs
    DashboardsReceived?: boolean | UserCountOutputTypeCountDashboardsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDashboardsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDashboardsSharedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDashboardsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardRecipientWhereInput
  }


  /**
   * Count Type DashboardCountOutputType
   */

  export type DashboardCountOutputType = {
    IncidentCollection: number
    DashboardShare: number
  }

  export type DashboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IncidentCollection?: boolean | DashboardCountOutputTypeCountIncidentCollectionArgs
    DashboardShare?: boolean | DashboardCountOutputTypeCountDashboardShareArgs
  }

  // Custom InputTypes
  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardCountOutputType
     */
    select?: DashboardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeCountIncidentCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeCountDashboardShareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardShareWhereInput
  }


  /**
   * Count Type DashboardShareCountOutputType
   */

  export type DashboardShareCountOutputType = {
    Recipients: number
  }

  export type DashboardShareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipients?: boolean | DashboardShareCountOutputTypeCountRecipientsArgs
  }

  // Custom InputTypes
  /**
   * DashboardShareCountOutputType without action
   */
  export type DashboardShareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShareCountOutputType
     */
    select?: DashboardShareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DashboardShareCountOutputType without action
   */
  export type DashboardShareCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardRecipientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    DashboardsOwned?: boolean | User$DashboardsOwnedArgs<ExtArgs>
    DashboardsShared?: boolean | User$DashboardsSharedArgs<ExtArgs>
    DashboardsReceived?: boolean | User$DashboardsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardsOwned?: boolean | User$DashboardsOwnedArgs<ExtArgs>
    DashboardsShared?: boolean | User$DashboardsSharedArgs<ExtArgs>
    DashboardsReceived?: boolean | User$DashboardsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      DashboardsOwned: Prisma.$DashboardPayload<ExtArgs>[]
      DashboardsShared: Prisma.$DashboardSharePayload<ExtArgs>[]
      DashboardsReceived: Prisma.$DashboardRecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DashboardsOwned<T extends User$DashboardsOwnedArgs<ExtArgs> = {}>(args?: Subset<T, User$DashboardsOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DashboardsShared<T extends User$DashboardsSharedArgs<ExtArgs> = {}>(args?: Subset<T, User$DashboardsSharedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DashboardsReceived<T extends User$DashboardsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$DashboardsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.DashboardsOwned
   */
  export type User$DashboardsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    where?: DashboardWhereInput
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    cursor?: DashboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * User.DashboardsShared
   */
  export type User$DashboardsSharedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    where?: DashboardShareWhereInput
    orderBy?: DashboardShareOrderByWithRelationInput | DashboardShareOrderByWithRelationInput[]
    cursor?: DashboardShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardShareScalarFieldEnum | DashboardShareScalarFieldEnum[]
  }

  /**
   * User.DashboardsReceived
   */
  export type User$DashboardsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    where?: DashboardRecipientWhereInput
    orderBy?: DashboardRecipientOrderByWithRelationInput | DashboardRecipientOrderByWithRelationInput[]
    cursor?: DashboardRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardRecipientScalarFieldEnum | DashboardRecipientScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Dashboard
   */

  export type AggregateDashboard = {
    _count: DashboardCountAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  export type DashboardMinAggregateOutputType = {
    id: string | null
    name: string | null
    dashboardOwnerId: string | null
  }

  export type DashboardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dashboardOwnerId: string | null
  }

  export type DashboardCountAggregateOutputType = {
    id: number
    name: number
    dashboardOwnerId: number
    _all: number
  }


  export type DashboardMinAggregateInputType = {
    id?: true
    name?: true
    dashboardOwnerId?: true
  }

  export type DashboardMaxAggregateInputType = {
    id?: true
    name?: true
    dashboardOwnerId?: true
  }

  export type DashboardCountAggregateInputType = {
    id?: true
    name?: true
    dashboardOwnerId?: true
    _all?: true
  }

  export type DashboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboard to aggregate.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dashboards
    **/
    _count?: true | DashboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardMaxAggregateInputType
  }

  export type GetDashboardAggregateType<T extends DashboardAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboard[P]>
      : GetScalarType<T[P], AggregateDashboard[P]>
  }




  export type DashboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
    orderBy?: DashboardOrderByWithAggregationInput | DashboardOrderByWithAggregationInput[]
    by: DashboardScalarFieldEnum[] | DashboardScalarFieldEnum
    having?: DashboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardCountAggregateInputType | true
    _min?: DashboardMinAggregateInputType
    _max?: DashboardMaxAggregateInputType
  }

  export type DashboardGroupByOutputType = {
    id: string
    name: string
    dashboardOwnerId: string
    _count: DashboardCountAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  type GetDashboardGroupByPayload<T extends DashboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardGroupByOutputType[P]>
        }
      >
    >


  export type DashboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dashboardOwnerId?: boolean
    DashboardOwner?: boolean | UserDefaultArgs<ExtArgs>
    IncidentCollection?: boolean | Dashboard$IncidentCollectionArgs<ExtArgs>
    DashboardShare?: boolean | Dashboard$DashboardShareArgs<ExtArgs>
    _count?: boolean | DashboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dashboardOwnerId?: boolean
    DashboardOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dashboardOwnerId?: boolean
    DashboardOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectScalar = {
    id?: boolean
    name?: boolean
    dashboardOwnerId?: boolean
  }

  export type DashboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dashboardOwnerId", ExtArgs["result"]["dashboard"]>
  export type DashboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardOwner?: boolean | UserDefaultArgs<ExtArgs>
    IncidentCollection?: boolean | Dashboard$IncidentCollectionArgs<ExtArgs>
    DashboardShare?: boolean | Dashboard$DashboardShareArgs<ExtArgs>
    _count?: boolean | DashboardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DashboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardOwner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardOwner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DashboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dashboard"
    objects: {
      DashboardOwner: Prisma.$UserPayload<ExtArgs>
      IncidentCollection: Prisma.$IncidentPayload<ExtArgs>[]
      DashboardShare: Prisma.$DashboardSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dashboardOwnerId: string
    }, ExtArgs["result"]["dashboard"]>
    composites: {}
  }

  type DashboardGetPayload<S extends boolean | null | undefined | DashboardDefaultArgs> = $Result.GetResult<Prisma.$DashboardPayload, S>

  type DashboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardCountAggregateInputType | true
    }

  export interface DashboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dashboard'], meta: { name: 'Dashboard' } }
    /**
     * Find zero or one Dashboard that matches the filter.
     * @param {DashboardFindUniqueArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardFindUniqueArgs>(args: SelectSubset<T, DashboardFindUniqueArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dashboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardFindUniqueOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardFindFirstArgs>(args?: SelectSubset<T, DashboardFindFirstArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dashboards
     * const dashboards = await prisma.dashboard.findMany()
     * 
     * // Get first 10 Dashboards
     * const dashboards = await prisma.dashboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardFindManyArgs>(args?: SelectSubset<T, DashboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dashboard.
     * @param {DashboardCreateArgs} args - Arguments to create a Dashboard.
     * @example
     * // Create one Dashboard
     * const Dashboard = await prisma.dashboard.create({
     *   data: {
     *     // ... data to create a Dashboard
     *   }
     * })
     * 
     */
    create<T extends DashboardCreateArgs>(args: SelectSubset<T, DashboardCreateArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dashboards.
     * @param {DashboardCreateManyArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardCreateManyArgs>(args?: SelectSubset<T, DashboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dashboards and returns the data saved in the database.
     * @param {DashboardCreateManyAndReturnArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dashboard.
     * @param {DashboardDeleteArgs} args - Arguments to delete one Dashboard.
     * @example
     * // Delete one Dashboard
     * const Dashboard = await prisma.dashboard.delete({
     *   where: {
     *     // ... filter to delete one Dashboard
     *   }
     * })
     * 
     */
    delete<T extends DashboardDeleteArgs>(args: SelectSubset<T, DashboardDeleteArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dashboard.
     * @param {DashboardUpdateArgs} args - Arguments to update one Dashboard.
     * @example
     * // Update one Dashboard
     * const dashboard = await prisma.dashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardUpdateArgs>(args: SelectSubset<T, DashboardUpdateArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dashboards.
     * @param {DashboardDeleteManyArgs} args - Arguments to filter Dashboards to delete.
     * @example
     * // Delete a few Dashboards
     * const { count } = await prisma.dashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardDeleteManyArgs>(args?: SelectSubset<T, DashboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardUpdateManyArgs>(args: SelectSubset<T, DashboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards and returns the data updated in the database.
     * @param {DashboardUpdateManyAndReturnArgs} args - Arguments to update many Dashboards.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DashboardUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dashboard.
     * @param {DashboardUpsertArgs} args - Arguments to update or create a Dashboard.
     * @example
     * // Update or create a Dashboard
     * const dashboard = await prisma.dashboard.upsert({
     *   create: {
     *     // ... data to create a Dashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dashboard we want to update
     *   }
     * })
     */
    upsert<T extends DashboardUpsertArgs>(args: SelectSubset<T, DashboardUpsertArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardCountArgs} args - Arguments to filter Dashboards to count.
     * @example
     * // Count the number of Dashboards
     * const count = await prisma.dashboard.count({
     *   where: {
     *     // ... the filter for the Dashboards we want to count
     *   }
     * })
    **/
    count<T extends DashboardCountArgs>(
      args?: Subset<T, DashboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardAggregateArgs>(args: Subset<T, DashboardAggregateArgs>): Prisma.PrismaPromise<GetDashboardAggregateType<T>>

    /**
     * Group by Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardGroupByArgs['orderBy'] }
        : { orderBy?: DashboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dashboard model
   */
  readonly fields: DashboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dashboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DashboardOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    IncidentCollection<T extends Dashboard$IncidentCollectionArgs<ExtArgs> = {}>(args?: Subset<T, Dashboard$IncidentCollectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DashboardShare<T extends Dashboard$DashboardShareArgs<ExtArgs> = {}>(args?: Subset<T, Dashboard$DashboardShareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dashboard model
   */
  interface DashboardFieldRefs {
    readonly id: FieldRef<"Dashboard", 'String'>
    readonly name: FieldRef<"Dashboard", 'String'>
    readonly dashboardOwnerId: FieldRef<"Dashboard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dashboard findUnique
   */
  export type DashboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findUniqueOrThrow
   */
  export type DashboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findFirst
   */
  export type DashboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findFirstOrThrow
   */
  export type DashboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findMany
   */
  export type DashboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboards to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard create
   */
  export type DashboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Dashboard.
     */
    data: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
  }

  /**
   * Dashboard createMany
   */
  export type DashboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dashboards.
     */
    data: DashboardCreateManyInput | DashboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dashboard createManyAndReturn
   */
  export type DashboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * The data used to create many Dashboards.
     */
    data: DashboardCreateManyInput | DashboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dashboard update
   */
  export type DashboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Dashboard.
     */
    data: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
    /**
     * Choose, which Dashboard to update.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard updateMany
   */
  export type DashboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dashboards.
     */
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyInput>
    /**
     * Filter which Dashboards to update
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to update.
     */
    limit?: number
  }

  /**
   * Dashboard updateManyAndReturn
   */
  export type DashboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * The data used to update Dashboards.
     */
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyInput>
    /**
     * Filter which Dashboards to update
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dashboard upsert
   */
  export type DashboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Dashboard to update in case it exists.
     */
    where: DashboardWhereUniqueInput
    /**
     * In case the Dashboard found by the `where` argument doesn't exist, create a new Dashboard with this data.
     */
    create: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
    /**
     * In case the Dashboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
  }

  /**
   * Dashboard delete
   */
  export type DashboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter which Dashboard to delete.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard deleteMany
   */
  export type DashboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboards to delete
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to delete.
     */
    limit?: number
  }

  /**
   * Dashboard.IncidentCollection
   */
  export type Dashboard$IncidentCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Dashboard.DashboardShare
   */
  export type Dashboard$DashboardShareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    where?: DashboardShareWhereInput
    orderBy?: DashboardShareOrderByWithRelationInput | DashboardShareOrderByWithRelationInput[]
    cursor?: DashboardShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardShareScalarFieldEnum | DashboardShareScalarFieldEnum[]
  }

  /**
   * Dashboard without action
   */
  export type DashboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    incidentConfidence: number | null
    incidentCoords: number | null
  }

  export type IncidentSumAggregateOutputType = {
    incidentConfidence: number | null
    incidentCoords: number[]
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    dateCreated: Date | null
    imageData: Uint8Array | null
    incidentConfidence: number | null
    dashboardId: string | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    dateCreated: Date | null
    imageData: Uint8Array | null
    incidentConfidence: number | null
    dashboardId: string | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    dateCreated: number
    imageData: number
    incidentConfidence: number
    incidentCoords: number
    dashboardId: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    incidentConfidence?: true
    incidentCoords?: true
  }

  export type IncidentSumAggregateInputType = {
    incidentConfidence?: true
    incidentCoords?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    dateCreated?: true
    imageData?: true
    incidentConfidence?: true
    dashboardId?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    imageData?: true
    incidentConfidence?: true
    dashboardId?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    dateCreated?: true
    imageData?: true
    incidentConfidence?: true
    incidentCoords?: true
    dashboardId?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    dateCreated: Date
    imageData: Uint8Array
    incidentConfidence: number
    incidentCoords: number[]
    dashboardId: string
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    imageData?: boolean
    incidentConfidence?: boolean
    incidentCoords?: boolean
    dashboardId?: boolean
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    imageData?: boolean
    incidentConfidence?: boolean
    incidentCoords?: boolean
    dashboardId?: boolean
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    imageData?: boolean
    incidentConfidence?: boolean
    incidentCoords?: boolean
    dashboardId?: boolean
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    imageData?: boolean
    incidentConfidence?: boolean
    incidentCoords?: boolean
    dashboardId?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateCreated" | "imageData" | "incidentConfidence" | "incidentCoords" | "dashboardId", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      Dashboard: Prisma.$DashboardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dateCreated: Date
      imageData: Uint8Array
      incidentConfidence: number
      incidentCoords: number[]
      dashboardId: string
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dashboard<T extends DashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DashboardDefaultArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly dateCreated: FieldRef<"Incident", 'DateTime'>
    readonly imageData: FieldRef<"Incident", 'Bytes'>
    readonly incidentConfidence: FieldRef<"Incident", 'Int'>
    readonly incidentCoords: FieldRef<"Incident", 'Int[]'>
    readonly dashboardId: FieldRef<"Incident", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model DashboardShare
   */

  export type AggregateDashboardShare = {
    _count: DashboardShareCountAggregateOutputType | null
    _min: DashboardShareMinAggregateOutputType | null
    _max: DashboardShareMaxAggregateOutputType | null
  }

  export type DashboardShareMinAggregateOutputType = {
    id: string | null
    dashboardId: string | null
    sharerId: string | null
    SharedAt: Date | null
  }

  export type DashboardShareMaxAggregateOutputType = {
    id: string | null
    dashboardId: string | null
    sharerId: string | null
    SharedAt: Date | null
  }

  export type DashboardShareCountAggregateOutputType = {
    id: number
    dashboardId: number
    sharerId: number
    SharedAt: number
    _all: number
  }


  export type DashboardShareMinAggregateInputType = {
    id?: true
    dashboardId?: true
    sharerId?: true
    SharedAt?: true
  }

  export type DashboardShareMaxAggregateInputType = {
    id?: true
    dashboardId?: true
    sharerId?: true
    SharedAt?: true
  }

  export type DashboardShareCountAggregateInputType = {
    id?: true
    dashboardId?: true
    sharerId?: true
    SharedAt?: true
    _all?: true
  }

  export type DashboardShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardShare to aggregate.
     */
    where?: DashboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardShares to fetch.
     */
    orderBy?: DashboardShareOrderByWithRelationInput | DashboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardShares
    **/
    _count?: true | DashboardShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardShareMaxAggregateInputType
  }

  export type GetDashboardShareAggregateType<T extends DashboardShareAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardShare[P]>
      : GetScalarType<T[P], AggregateDashboardShare[P]>
  }




  export type DashboardShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardShareWhereInput
    orderBy?: DashboardShareOrderByWithAggregationInput | DashboardShareOrderByWithAggregationInput[]
    by: DashboardShareScalarFieldEnum[] | DashboardShareScalarFieldEnum
    having?: DashboardShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardShareCountAggregateInputType | true
    _min?: DashboardShareMinAggregateInputType
    _max?: DashboardShareMaxAggregateInputType
  }

  export type DashboardShareGroupByOutputType = {
    id: string
    dashboardId: string
    sharerId: string
    SharedAt: Date
    _count: DashboardShareCountAggregateOutputType | null
    _min: DashboardShareMinAggregateOutputType | null
    _max: DashboardShareMaxAggregateOutputType | null
  }

  type GetDashboardShareGroupByPayload<T extends DashboardShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardShareGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardShareGroupByOutputType[P]>
        }
      >
    >


  export type DashboardShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    sharerId?: boolean
    SharedAt?: boolean
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    Recipients?: boolean | DashboardShare$RecipientsArgs<ExtArgs>
    _count?: boolean | DashboardShareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardShare"]>

  export type DashboardShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    sharerId?: boolean
    SharedAt?: boolean
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardShare"]>

  export type DashboardShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    sharerId?: boolean
    SharedAt?: boolean
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardShare"]>

  export type DashboardShareSelectScalar = {
    id?: boolean
    dashboardId?: boolean
    sharerId?: boolean
    SharedAt?: boolean
  }

  export type DashboardShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dashboardId" | "sharerId" | "SharedAt", ExtArgs["result"]["dashboardShare"]>
  export type DashboardShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    Recipients?: boolean | DashboardShare$RecipientsArgs<ExtArgs>
    _count?: boolean | DashboardShareCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DashboardShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DashboardSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardShare"
    objects: {
      Dashboard: Prisma.$DashboardPayload<ExtArgs>
      SharedBy: Prisma.$UserPayload<ExtArgs>
      Recipients: Prisma.$DashboardRecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dashboardId: string
      sharerId: string
      SharedAt: Date
    }, ExtArgs["result"]["dashboardShare"]>
    composites: {}
  }

  type DashboardShareGetPayload<S extends boolean | null | undefined | DashboardShareDefaultArgs> = $Result.GetResult<Prisma.$DashboardSharePayload, S>

  type DashboardShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardShareCountAggregateInputType | true
    }

  export interface DashboardShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardShare'], meta: { name: 'DashboardShare' } }
    /**
     * Find zero or one DashboardShare that matches the filter.
     * @param {DashboardShareFindUniqueArgs} args - Arguments to find a DashboardShare
     * @example
     * // Get one DashboardShare
     * const dashboardShare = await prisma.dashboardShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardShareFindUniqueArgs>(args: SelectSubset<T, DashboardShareFindUniqueArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DashboardShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardShareFindUniqueOrThrowArgs} args - Arguments to find a DashboardShare
     * @example
     * // Get one DashboardShare
     * const dashboardShare = await prisma.dashboardShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardShareFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardShareFindFirstArgs} args - Arguments to find a DashboardShare
     * @example
     * // Get one DashboardShare
     * const dashboardShare = await prisma.dashboardShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardShareFindFirstArgs>(args?: SelectSubset<T, DashboardShareFindFirstArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardShareFindFirstOrThrowArgs} args - Arguments to find a DashboardShare
     * @example
     * // Get one DashboardShare
     * const dashboardShare = await prisma.dashboardShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardShareFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DashboardShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardShares
     * const dashboardShares = await prisma.dashboardShare.findMany()
     * 
     * // Get first 10 DashboardShares
     * const dashboardShares = await prisma.dashboardShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardShareWithIdOnly = await prisma.dashboardShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardShareFindManyArgs>(args?: SelectSubset<T, DashboardShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DashboardShare.
     * @param {DashboardShareCreateArgs} args - Arguments to create a DashboardShare.
     * @example
     * // Create one DashboardShare
     * const DashboardShare = await prisma.dashboardShare.create({
     *   data: {
     *     // ... data to create a DashboardShare
     *   }
     * })
     * 
     */
    create<T extends DashboardShareCreateArgs>(args: SelectSubset<T, DashboardShareCreateArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DashboardShares.
     * @param {DashboardShareCreateManyArgs} args - Arguments to create many DashboardShares.
     * @example
     * // Create many DashboardShares
     * const dashboardShare = await prisma.dashboardShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardShareCreateManyArgs>(args?: SelectSubset<T, DashboardShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DashboardShares and returns the data saved in the database.
     * @param {DashboardShareCreateManyAndReturnArgs} args - Arguments to create many DashboardShares.
     * @example
     * // Create many DashboardShares
     * const dashboardShare = await prisma.dashboardShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DashboardShares and only return the `id`
     * const dashboardShareWithIdOnly = await prisma.dashboardShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardShareCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DashboardShare.
     * @param {DashboardShareDeleteArgs} args - Arguments to delete one DashboardShare.
     * @example
     * // Delete one DashboardShare
     * const DashboardShare = await prisma.dashboardShare.delete({
     *   where: {
     *     // ... filter to delete one DashboardShare
     *   }
     * })
     * 
     */
    delete<T extends DashboardShareDeleteArgs>(args: SelectSubset<T, DashboardShareDeleteArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DashboardShare.
     * @param {DashboardShareUpdateArgs} args - Arguments to update one DashboardShare.
     * @example
     * // Update one DashboardShare
     * const dashboardShare = await prisma.dashboardShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardShareUpdateArgs>(args: SelectSubset<T, DashboardShareUpdateArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DashboardShares.
     * @param {DashboardShareDeleteManyArgs} args - Arguments to filter DashboardShares to delete.
     * @example
     * // Delete a few DashboardShares
     * const { count } = await prisma.dashboardShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardShareDeleteManyArgs>(args?: SelectSubset<T, DashboardShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardShares
     * const dashboardShare = await prisma.dashboardShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardShareUpdateManyArgs>(args: SelectSubset<T, DashboardShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardShares and returns the data updated in the database.
     * @param {DashboardShareUpdateManyAndReturnArgs} args - Arguments to update many DashboardShares.
     * @example
     * // Update many DashboardShares
     * const dashboardShare = await prisma.dashboardShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DashboardShares and only return the `id`
     * const dashboardShareWithIdOnly = await prisma.dashboardShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DashboardShareUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DashboardShare.
     * @param {DashboardShareUpsertArgs} args - Arguments to update or create a DashboardShare.
     * @example
     * // Update or create a DashboardShare
     * const dashboardShare = await prisma.dashboardShare.upsert({
     *   create: {
     *     // ... data to create a DashboardShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardShare we want to update
     *   }
     * })
     */
    upsert<T extends DashboardShareUpsertArgs>(args: SelectSubset<T, DashboardShareUpsertArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DashboardShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardShareCountArgs} args - Arguments to filter DashboardShares to count.
     * @example
     * // Count the number of DashboardShares
     * const count = await prisma.dashboardShare.count({
     *   where: {
     *     // ... the filter for the DashboardShares we want to count
     *   }
     * })
    **/
    count<T extends DashboardShareCountArgs>(
      args?: Subset<T, DashboardShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardShareAggregateArgs>(args: Subset<T, DashboardShareAggregateArgs>): Prisma.PrismaPromise<GetDashboardShareAggregateType<T>>

    /**
     * Group by DashboardShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardShareGroupByArgs['orderBy'] }
        : { orderBy?: DashboardShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardShare model
   */
  readonly fields: DashboardShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dashboard<T extends DashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DashboardDefaultArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SharedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Recipients<T extends DashboardShare$RecipientsArgs<ExtArgs> = {}>(args?: Subset<T, DashboardShare$RecipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DashboardShare model
   */
  interface DashboardShareFieldRefs {
    readonly id: FieldRef<"DashboardShare", 'String'>
    readonly dashboardId: FieldRef<"DashboardShare", 'String'>
    readonly sharerId: FieldRef<"DashboardShare", 'String'>
    readonly SharedAt: FieldRef<"DashboardShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DashboardShare findUnique
   */
  export type DashboardShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * Filter, which DashboardShare to fetch.
     */
    where: DashboardShareWhereUniqueInput
  }

  /**
   * DashboardShare findUniqueOrThrow
   */
  export type DashboardShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * Filter, which DashboardShare to fetch.
     */
    where: DashboardShareWhereUniqueInput
  }

  /**
   * DashboardShare findFirst
   */
  export type DashboardShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * Filter, which DashboardShare to fetch.
     */
    where?: DashboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardShares to fetch.
     */
    orderBy?: DashboardShareOrderByWithRelationInput | DashboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardShares.
     */
    cursor?: DashboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardShares.
     */
    distinct?: DashboardShareScalarFieldEnum | DashboardShareScalarFieldEnum[]
  }

  /**
   * DashboardShare findFirstOrThrow
   */
  export type DashboardShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * Filter, which DashboardShare to fetch.
     */
    where?: DashboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardShares to fetch.
     */
    orderBy?: DashboardShareOrderByWithRelationInput | DashboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardShares.
     */
    cursor?: DashboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardShares.
     */
    distinct?: DashboardShareScalarFieldEnum | DashboardShareScalarFieldEnum[]
  }

  /**
   * DashboardShare findMany
   */
  export type DashboardShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * Filter, which DashboardShares to fetch.
     */
    where?: DashboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardShares to fetch.
     */
    orderBy?: DashboardShareOrderByWithRelationInput | DashboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardShares.
     */
    cursor?: DashboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardShares.
     */
    skip?: number
    distinct?: DashboardShareScalarFieldEnum | DashboardShareScalarFieldEnum[]
  }

  /**
   * DashboardShare create
   */
  export type DashboardShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * The data needed to create a DashboardShare.
     */
    data: XOR<DashboardShareCreateInput, DashboardShareUncheckedCreateInput>
  }

  /**
   * DashboardShare createMany
   */
  export type DashboardShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardShares.
     */
    data: DashboardShareCreateManyInput | DashboardShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardShare createManyAndReturn
   */
  export type DashboardShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * The data used to create many DashboardShares.
     */
    data: DashboardShareCreateManyInput | DashboardShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardShare update
   */
  export type DashboardShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * The data needed to update a DashboardShare.
     */
    data: XOR<DashboardShareUpdateInput, DashboardShareUncheckedUpdateInput>
    /**
     * Choose, which DashboardShare to update.
     */
    where: DashboardShareWhereUniqueInput
  }

  /**
   * DashboardShare updateMany
   */
  export type DashboardShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardShares.
     */
    data: XOR<DashboardShareUpdateManyMutationInput, DashboardShareUncheckedUpdateManyInput>
    /**
     * Filter which DashboardShares to update
     */
    where?: DashboardShareWhereInput
    /**
     * Limit how many DashboardShares to update.
     */
    limit?: number
  }

  /**
   * DashboardShare updateManyAndReturn
   */
  export type DashboardShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * The data used to update DashboardShares.
     */
    data: XOR<DashboardShareUpdateManyMutationInput, DashboardShareUncheckedUpdateManyInput>
    /**
     * Filter which DashboardShares to update
     */
    where?: DashboardShareWhereInput
    /**
     * Limit how many DashboardShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardShare upsert
   */
  export type DashboardShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * The filter to search for the DashboardShare to update in case it exists.
     */
    where: DashboardShareWhereUniqueInput
    /**
     * In case the DashboardShare found by the `where` argument doesn't exist, create a new DashboardShare with this data.
     */
    create: XOR<DashboardShareCreateInput, DashboardShareUncheckedCreateInput>
    /**
     * In case the DashboardShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardShareUpdateInput, DashboardShareUncheckedUpdateInput>
  }

  /**
   * DashboardShare delete
   */
  export type DashboardShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
    /**
     * Filter which DashboardShare to delete.
     */
    where: DashboardShareWhereUniqueInput
  }

  /**
   * DashboardShare deleteMany
   */
  export type DashboardShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardShares to delete
     */
    where?: DashboardShareWhereInput
    /**
     * Limit how many DashboardShares to delete.
     */
    limit?: number
  }

  /**
   * DashboardShare.Recipients
   */
  export type DashboardShare$RecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    where?: DashboardRecipientWhereInput
    orderBy?: DashboardRecipientOrderByWithRelationInput | DashboardRecipientOrderByWithRelationInput[]
    cursor?: DashboardRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardRecipientScalarFieldEnum | DashboardRecipientScalarFieldEnum[]
  }

  /**
   * DashboardShare without action
   */
  export type DashboardShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardShare
     */
    select?: DashboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardShare
     */
    omit?: DashboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardShareInclude<ExtArgs> | null
  }


  /**
   * Model DashboardRecipient
   */

  export type AggregateDashboardRecipient = {
    _count: DashboardRecipientCountAggregateOutputType | null
    _min: DashboardRecipientMinAggregateOutputType | null
    _max: DashboardRecipientMaxAggregateOutputType | null
  }

  export type DashboardRecipientMinAggregateOutputType = {
    id: string | null
    dashboardShareId: string | null
    userId: string | null
  }

  export type DashboardRecipientMaxAggregateOutputType = {
    id: string | null
    dashboardShareId: string | null
    userId: string | null
  }

  export type DashboardRecipientCountAggregateOutputType = {
    id: number
    dashboardShareId: number
    userId: number
    _all: number
  }


  export type DashboardRecipientMinAggregateInputType = {
    id?: true
    dashboardShareId?: true
    userId?: true
  }

  export type DashboardRecipientMaxAggregateInputType = {
    id?: true
    dashboardShareId?: true
    userId?: true
  }

  export type DashboardRecipientCountAggregateInputType = {
    id?: true
    dashboardShareId?: true
    userId?: true
    _all?: true
  }

  export type DashboardRecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardRecipient to aggregate.
     */
    where?: DashboardRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardRecipients to fetch.
     */
    orderBy?: DashboardRecipientOrderByWithRelationInput | DashboardRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardRecipients
    **/
    _count?: true | DashboardRecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardRecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardRecipientMaxAggregateInputType
  }

  export type GetDashboardRecipientAggregateType<T extends DashboardRecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardRecipient[P]>
      : GetScalarType<T[P], AggregateDashboardRecipient[P]>
  }




  export type DashboardRecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardRecipientWhereInput
    orderBy?: DashboardRecipientOrderByWithAggregationInput | DashboardRecipientOrderByWithAggregationInput[]
    by: DashboardRecipientScalarFieldEnum[] | DashboardRecipientScalarFieldEnum
    having?: DashboardRecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardRecipientCountAggregateInputType | true
    _min?: DashboardRecipientMinAggregateInputType
    _max?: DashboardRecipientMaxAggregateInputType
  }

  export type DashboardRecipientGroupByOutputType = {
    id: string
    dashboardShareId: string
    userId: string
    _count: DashboardRecipientCountAggregateOutputType | null
    _min: DashboardRecipientMinAggregateOutputType | null
    _max: DashboardRecipientMaxAggregateOutputType | null
  }

  type GetDashboardRecipientGroupByPayload<T extends DashboardRecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardRecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardRecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardRecipientGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardRecipientGroupByOutputType[P]>
        }
      >
    >


  export type DashboardRecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardShareId?: boolean
    userId?: boolean
    DashboardShare?: boolean | DashboardShareDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardRecipient"]>

  export type DashboardRecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardShareId?: boolean
    userId?: boolean
    DashboardShare?: boolean | DashboardShareDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardRecipient"]>

  export type DashboardRecipientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardShareId?: boolean
    userId?: boolean
    DashboardShare?: boolean | DashboardShareDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardRecipient"]>

  export type DashboardRecipientSelectScalar = {
    id?: boolean
    dashboardShareId?: boolean
    userId?: boolean
  }

  export type DashboardRecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dashboardShareId" | "userId", ExtArgs["result"]["dashboardRecipient"]>
  export type DashboardRecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardShare?: boolean | DashboardShareDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardRecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardShare?: boolean | DashboardShareDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardRecipientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DashboardShare?: boolean | DashboardShareDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DashboardRecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardRecipient"
    objects: {
      DashboardShare: Prisma.$DashboardSharePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dashboardShareId: string
      userId: string
    }, ExtArgs["result"]["dashboardRecipient"]>
    composites: {}
  }

  type DashboardRecipientGetPayload<S extends boolean | null | undefined | DashboardRecipientDefaultArgs> = $Result.GetResult<Prisma.$DashboardRecipientPayload, S>

  type DashboardRecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardRecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardRecipientCountAggregateInputType | true
    }

  export interface DashboardRecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardRecipient'], meta: { name: 'DashboardRecipient' } }
    /**
     * Find zero or one DashboardRecipient that matches the filter.
     * @param {DashboardRecipientFindUniqueArgs} args - Arguments to find a DashboardRecipient
     * @example
     * // Get one DashboardRecipient
     * const dashboardRecipient = await prisma.dashboardRecipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardRecipientFindUniqueArgs>(args: SelectSubset<T, DashboardRecipientFindUniqueArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DashboardRecipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardRecipientFindUniqueOrThrowArgs} args - Arguments to find a DashboardRecipient
     * @example
     * // Get one DashboardRecipient
     * const dashboardRecipient = await prisma.dashboardRecipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardRecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardRecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardRecipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardRecipientFindFirstArgs} args - Arguments to find a DashboardRecipient
     * @example
     * // Get one DashboardRecipient
     * const dashboardRecipient = await prisma.dashboardRecipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardRecipientFindFirstArgs>(args?: SelectSubset<T, DashboardRecipientFindFirstArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardRecipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardRecipientFindFirstOrThrowArgs} args - Arguments to find a DashboardRecipient
     * @example
     * // Get one DashboardRecipient
     * const dashboardRecipient = await prisma.dashboardRecipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardRecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardRecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DashboardRecipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardRecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardRecipients
     * const dashboardRecipients = await prisma.dashboardRecipient.findMany()
     * 
     * // Get first 10 DashboardRecipients
     * const dashboardRecipients = await prisma.dashboardRecipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardRecipientWithIdOnly = await prisma.dashboardRecipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardRecipientFindManyArgs>(args?: SelectSubset<T, DashboardRecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DashboardRecipient.
     * @param {DashboardRecipientCreateArgs} args - Arguments to create a DashboardRecipient.
     * @example
     * // Create one DashboardRecipient
     * const DashboardRecipient = await prisma.dashboardRecipient.create({
     *   data: {
     *     // ... data to create a DashboardRecipient
     *   }
     * })
     * 
     */
    create<T extends DashboardRecipientCreateArgs>(args: SelectSubset<T, DashboardRecipientCreateArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DashboardRecipients.
     * @param {DashboardRecipientCreateManyArgs} args - Arguments to create many DashboardRecipients.
     * @example
     * // Create many DashboardRecipients
     * const dashboardRecipient = await prisma.dashboardRecipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardRecipientCreateManyArgs>(args?: SelectSubset<T, DashboardRecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DashboardRecipients and returns the data saved in the database.
     * @param {DashboardRecipientCreateManyAndReturnArgs} args - Arguments to create many DashboardRecipients.
     * @example
     * // Create many DashboardRecipients
     * const dashboardRecipient = await prisma.dashboardRecipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DashboardRecipients and only return the `id`
     * const dashboardRecipientWithIdOnly = await prisma.dashboardRecipient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardRecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardRecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DashboardRecipient.
     * @param {DashboardRecipientDeleteArgs} args - Arguments to delete one DashboardRecipient.
     * @example
     * // Delete one DashboardRecipient
     * const DashboardRecipient = await prisma.dashboardRecipient.delete({
     *   where: {
     *     // ... filter to delete one DashboardRecipient
     *   }
     * })
     * 
     */
    delete<T extends DashboardRecipientDeleteArgs>(args: SelectSubset<T, DashboardRecipientDeleteArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DashboardRecipient.
     * @param {DashboardRecipientUpdateArgs} args - Arguments to update one DashboardRecipient.
     * @example
     * // Update one DashboardRecipient
     * const dashboardRecipient = await prisma.dashboardRecipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardRecipientUpdateArgs>(args: SelectSubset<T, DashboardRecipientUpdateArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DashboardRecipients.
     * @param {DashboardRecipientDeleteManyArgs} args - Arguments to filter DashboardRecipients to delete.
     * @example
     * // Delete a few DashboardRecipients
     * const { count } = await prisma.dashboardRecipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardRecipientDeleteManyArgs>(args?: SelectSubset<T, DashboardRecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardRecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardRecipients
     * const dashboardRecipient = await prisma.dashboardRecipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardRecipientUpdateManyArgs>(args: SelectSubset<T, DashboardRecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardRecipients and returns the data updated in the database.
     * @param {DashboardRecipientUpdateManyAndReturnArgs} args - Arguments to update many DashboardRecipients.
     * @example
     * // Update many DashboardRecipients
     * const dashboardRecipient = await prisma.dashboardRecipient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DashboardRecipients and only return the `id`
     * const dashboardRecipientWithIdOnly = await prisma.dashboardRecipient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DashboardRecipientUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardRecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DashboardRecipient.
     * @param {DashboardRecipientUpsertArgs} args - Arguments to update or create a DashboardRecipient.
     * @example
     * // Update or create a DashboardRecipient
     * const dashboardRecipient = await prisma.dashboardRecipient.upsert({
     *   create: {
     *     // ... data to create a DashboardRecipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardRecipient we want to update
     *   }
     * })
     */
    upsert<T extends DashboardRecipientUpsertArgs>(args: SelectSubset<T, DashboardRecipientUpsertArgs<ExtArgs>>): Prisma__DashboardRecipientClient<$Result.GetResult<Prisma.$DashboardRecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DashboardRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardRecipientCountArgs} args - Arguments to filter DashboardRecipients to count.
     * @example
     * // Count the number of DashboardRecipients
     * const count = await prisma.dashboardRecipient.count({
     *   where: {
     *     // ... the filter for the DashboardRecipients we want to count
     *   }
     * })
    **/
    count<T extends DashboardRecipientCountArgs>(
      args?: Subset<T, DashboardRecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardRecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardRecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardRecipientAggregateArgs>(args: Subset<T, DashboardRecipientAggregateArgs>): Prisma.PrismaPromise<GetDashboardRecipientAggregateType<T>>

    /**
     * Group by DashboardRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardRecipientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardRecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardRecipientGroupByArgs['orderBy'] }
        : { orderBy?: DashboardRecipientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardRecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardRecipient model
   */
  readonly fields: DashboardRecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardRecipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardRecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DashboardShare<T extends DashboardShareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DashboardShareDefaultArgs<ExtArgs>>): Prisma__DashboardShareClient<$Result.GetResult<Prisma.$DashboardSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DashboardRecipient model
   */
  interface DashboardRecipientFieldRefs {
    readonly id: FieldRef<"DashboardRecipient", 'String'>
    readonly dashboardShareId: FieldRef<"DashboardRecipient", 'String'>
    readonly userId: FieldRef<"DashboardRecipient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DashboardRecipient findUnique
   */
  export type DashboardRecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DashboardRecipient to fetch.
     */
    where: DashboardRecipientWhereUniqueInput
  }

  /**
   * DashboardRecipient findUniqueOrThrow
   */
  export type DashboardRecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DashboardRecipient to fetch.
     */
    where: DashboardRecipientWhereUniqueInput
  }

  /**
   * DashboardRecipient findFirst
   */
  export type DashboardRecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DashboardRecipient to fetch.
     */
    where?: DashboardRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardRecipients to fetch.
     */
    orderBy?: DashboardRecipientOrderByWithRelationInput | DashboardRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardRecipients.
     */
    cursor?: DashboardRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardRecipients.
     */
    distinct?: DashboardRecipientScalarFieldEnum | DashboardRecipientScalarFieldEnum[]
  }

  /**
   * DashboardRecipient findFirstOrThrow
   */
  export type DashboardRecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DashboardRecipient to fetch.
     */
    where?: DashboardRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardRecipients to fetch.
     */
    orderBy?: DashboardRecipientOrderByWithRelationInput | DashboardRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardRecipients.
     */
    cursor?: DashboardRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardRecipients.
     */
    distinct?: DashboardRecipientScalarFieldEnum | DashboardRecipientScalarFieldEnum[]
  }

  /**
   * DashboardRecipient findMany
   */
  export type DashboardRecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DashboardRecipients to fetch.
     */
    where?: DashboardRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardRecipients to fetch.
     */
    orderBy?: DashboardRecipientOrderByWithRelationInput | DashboardRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardRecipients.
     */
    cursor?: DashboardRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardRecipients.
     */
    skip?: number
    distinct?: DashboardRecipientScalarFieldEnum | DashboardRecipientScalarFieldEnum[]
  }

  /**
   * DashboardRecipient create
   */
  export type DashboardRecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a DashboardRecipient.
     */
    data: XOR<DashboardRecipientCreateInput, DashboardRecipientUncheckedCreateInput>
  }

  /**
   * DashboardRecipient createMany
   */
  export type DashboardRecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardRecipients.
     */
    data: DashboardRecipientCreateManyInput | DashboardRecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardRecipient createManyAndReturn
   */
  export type DashboardRecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * The data used to create many DashboardRecipients.
     */
    data: DashboardRecipientCreateManyInput | DashboardRecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardRecipient update
   */
  export type DashboardRecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a DashboardRecipient.
     */
    data: XOR<DashboardRecipientUpdateInput, DashboardRecipientUncheckedUpdateInput>
    /**
     * Choose, which DashboardRecipient to update.
     */
    where: DashboardRecipientWhereUniqueInput
  }

  /**
   * DashboardRecipient updateMany
   */
  export type DashboardRecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardRecipients.
     */
    data: XOR<DashboardRecipientUpdateManyMutationInput, DashboardRecipientUncheckedUpdateManyInput>
    /**
     * Filter which DashboardRecipients to update
     */
    where?: DashboardRecipientWhereInput
    /**
     * Limit how many DashboardRecipients to update.
     */
    limit?: number
  }

  /**
   * DashboardRecipient updateManyAndReturn
   */
  export type DashboardRecipientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * The data used to update DashboardRecipients.
     */
    data: XOR<DashboardRecipientUpdateManyMutationInput, DashboardRecipientUncheckedUpdateManyInput>
    /**
     * Filter which DashboardRecipients to update
     */
    where?: DashboardRecipientWhereInput
    /**
     * Limit how many DashboardRecipients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardRecipient upsert
   */
  export type DashboardRecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the DashboardRecipient to update in case it exists.
     */
    where: DashboardRecipientWhereUniqueInput
    /**
     * In case the DashboardRecipient found by the `where` argument doesn't exist, create a new DashboardRecipient with this data.
     */
    create: XOR<DashboardRecipientCreateInput, DashboardRecipientUncheckedCreateInput>
    /**
     * In case the DashboardRecipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardRecipientUpdateInput, DashboardRecipientUncheckedUpdateInput>
  }

  /**
   * DashboardRecipient delete
   */
  export type DashboardRecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
    /**
     * Filter which DashboardRecipient to delete.
     */
    where: DashboardRecipientWhereUniqueInput
  }

  /**
   * DashboardRecipient deleteMany
   */
  export type DashboardRecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardRecipients to delete
     */
    where?: DashboardRecipientWhereInput
    /**
     * Limit how many DashboardRecipients to delete.
     */
    limit?: number
  }

  /**
   * DashboardRecipient without action
   */
  export type DashboardRecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardRecipient
     */
    select?: DashboardRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardRecipient
     */
    omit?: DashboardRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardRecipientInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DashboardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dashboardOwnerId: 'dashboardOwnerId'
  };

  export type DashboardScalarFieldEnum = (typeof DashboardScalarFieldEnum)[keyof typeof DashboardScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    imageData: 'imageData',
    incidentConfidence: 'incidentConfidence',
    incidentCoords: 'incidentCoords',
    dashboardId: 'dashboardId'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const DashboardShareScalarFieldEnum: {
    id: 'id',
    dashboardId: 'dashboardId',
    sharerId: 'sharerId',
    SharedAt: 'SharedAt'
  };

  export type DashboardShareScalarFieldEnum = (typeof DashboardShareScalarFieldEnum)[keyof typeof DashboardShareScalarFieldEnum]


  export const DashboardRecipientScalarFieldEnum: {
    id: 'id',
    dashboardShareId: 'dashboardShareId',
    userId: 'userId'
  };

  export type DashboardRecipientScalarFieldEnum = (typeof DashboardRecipientScalarFieldEnum)[keyof typeof DashboardRecipientScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    DashboardsOwned?: DashboardListRelationFilter
    DashboardsShared?: DashboardShareListRelationFilter
    DashboardsReceived?: DashboardRecipientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    DashboardsOwned?: DashboardOrderByRelationAggregateInput
    DashboardsShared?: DashboardShareOrderByRelationAggregateInput
    DashboardsReceived?: DashboardRecipientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    DashboardsOwned?: DashboardListRelationFilter
    DashboardsShared?: DashboardShareListRelationFilter
    DashboardsReceived?: DashboardRecipientListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type DashboardWhereInput = {
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    id?: StringFilter<"Dashboard"> | string
    name?: StringFilter<"Dashboard"> | string
    dashboardOwnerId?: StringFilter<"Dashboard"> | string
    DashboardOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    IncidentCollection?: IncidentListRelationFilter
    DashboardShare?: DashboardShareListRelationFilter
  }

  export type DashboardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dashboardOwnerId?: SortOrder
    DashboardOwner?: UserOrderByWithRelationInput
    IncidentCollection?: IncidentOrderByRelationAggregateInput
    DashboardShare?: DashboardShareOrderByRelationAggregateInput
  }

  export type DashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    name?: StringFilter<"Dashboard"> | string
    dashboardOwnerId?: StringFilter<"Dashboard"> | string
    DashboardOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    IncidentCollection?: IncidentListRelationFilter
    DashboardShare?: DashboardShareListRelationFilter
  }, "id">

  export type DashboardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dashboardOwnerId?: SortOrder
    _count?: DashboardCountOrderByAggregateInput
    _max?: DashboardMaxOrderByAggregateInput
    _min?: DashboardMinOrderByAggregateInput
  }

  export type DashboardScalarWhereWithAggregatesInput = {
    AND?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    OR?: DashboardScalarWhereWithAggregatesInput[]
    NOT?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dashboard"> | string
    name?: StringWithAggregatesFilter<"Dashboard"> | string
    dashboardOwnerId?: StringWithAggregatesFilter<"Dashboard"> | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    dateCreated?: DateTimeFilter<"Incident"> | Date | string
    imageData?: BytesFilter<"Incident"> | Uint8Array
    incidentConfidence?: IntFilter<"Incident"> | number
    incidentCoords?: IntNullableListFilter<"Incident">
    dashboardId?: StringFilter<"Incident"> | string
    Dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    imageData?: SortOrder
    incidentConfidence?: SortOrder
    incidentCoords?: SortOrder
    dashboardId?: SortOrder
    Dashboard?: DashboardOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    dateCreated?: DateTimeFilter<"Incident"> | Date | string
    imageData?: BytesFilter<"Incident"> | Uint8Array
    incidentConfidence?: IntFilter<"Incident"> | number
    incidentCoords?: IntNullableListFilter<"Incident">
    dashboardId?: StringFilter<"Incident"> | string
    Dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    imageData?: SortOrder
    incidentConfidence?: SortOrder
    incidentCoords?: SortOrder
    dashboardId?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    dateCreated?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    imageData?: BytesWithAggregatesFilter<"Incident"> | Uint8Array
    incidentConfidence?: IntWithAggregatesFilter<"Incident"> | number
    incidentCoords?: IntNullableListFilter<"Incident">
    dashboardId?: StringWithAggregatesFilter<"Incident"> | string
  }

  export type DashboardShareWhereInput = {
    AND?: DashboardShareWhereInput | DashboardShareWhereInput[]
    OR?: DashboardShareWhereInput[]
    NOT?: DashboardShareWhereInput | DashboardShareWhereInput[]
    id?: StringFilter<"DashboardShare"> | string
    dashboardId?: StringFilter<"DashboardShare"> | string
    sharerId?: StringFilter<"DashboardShare"> | string
    SharedAt?: DateTimeFilter<"DashboardShare"> | Date | string
    Dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    SharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    Recipients?: DashboardRecipientListRelationFilter
  }

  export type DashboardShareOrderByWithRelationInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    sharerId?: SortOrder
    SharedAt?: SortOrder
    Dashboard?: DashboardOrderByWithRelationInput
    SharedBy?: UserOrderByWithRelationInput
    Recipients?: DashboardRecipientOrderByRelationAggregateInput
  }

  export type DashboardShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardShareWhereInput | DashboardShareWhereInput[]
    OR?: DashboardShareWhereInput[]
    NOT?: DashboardShareWhereInput | DashboardShareWhereInput[]
    dashboardId?: StringFilter<"DashboardShare"> | string
    sharerId?: StringFilter<"DashboardShare"> | string
    SharedAt?: DateTimeFilter<"DashboardShare"> | Date | string
    Dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    SharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    Recipients?: DashboardRecipientListRelationFilter
  }, "id">

  export type DashboardShareOrderByWithAggregationInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    sharerId?: SortOrder
    SharedAt?: SortOrder
    _count?: DashboardShareCountOrderByAggregateInput
    _max?: DashboardShareMaxOrderByAggregateInput
    _min?: DashboardShareMinOrderByAggregateInput
  }

  export type DashboardShareScalarWhereWithAggregatesInput = {
    AND?: DashboardShareScalarWhereWithAggregatesInput | DashboardShareScalarWhereWithAggregatesInput[]
    OR?: DashboardShareScalarWhereWithAggregatesInput[]
    NOT?: DashboardShareScalarWhereWithAggregatesInput | DashboardShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DashboardShare"> | string
    dashboardId?: StringWithAggregatesFilter<"DashboardShare"> | string
    sharerId?: StringWithAggregatesFilter<"DashboardShare"> | string
    SharedAt?: DateTimeWithAggregatesFilter<"DashboardShare"> | Date | string
  }

  export type DashboardRecipientWhereInput = {
    AND?: DashboardRecipientWhereInput | DashboardRecipientWhereInput[]
    OR?: DashboardRecipientWhereInput[]
    NOT?: DashboardRecipientWhereInput | DashboardRecipientWhereInput[]
    id?: StringFilter<"DashboardRecipient"> | string
    dashboardShareId?: StringFilter<"DashboardRecipient"> | string
    userId?: StringFilter<"DashboardRecipient"> | string
    DashboardShare?: XOR<DashboardShareScalarRelationFilter, DashboardShareWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DashboardRecipientOrderByWithRelationInput = {
    id?: SortOrder
    dashboardShareId?: SortOrder
    userId?: SortOrder
    DashboardShare?: DashboardShareOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type DashboardRecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardRecipientWhereInput | DashboardRecipientWhereInput[]
    OR?: DashboardRecipientWhereInput[]
    NOT?: DashboardRecipientWhereInput | DashboardRecipientWhereInput[]
    dashboardShareId?: StringFilter<"DashboardRecipient"> | string
    userId?: StringFilter<"DashboardRecipient"> | string
    DashboardShare?: XOR<DashboardShareScalarRelationFilter, DashboardShareWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DashboardRecipientOrderByWithAggregationInput = {
    id?: SortOrder
    dashboardShareId?: SortOrder
    userId?: SortOrder
    _count?: DashboardRecipientCountOrderByAggregateInput
    _max?: DashboardRecipientMaxOrderByAggregateInput
    _min?: DashboardRecipientMinOrderByAggregateInput
  }

  export type DashboardRecipientScalarWhereWithAggregatesInput = {
    AND?: DashboardRecipientScalarWhereWithAggregatesInput | DashboardRecipientScalarWhereWithAggregatesInput[]
    OR?: DashboardRecipientScalarWhereWithAggregatesInput[]
    NOT?: DashboardRecipientScalarWhereWithAggregatesInput | DashboardRecipientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DashboardRecipient"> | string
    dashboardShareId?: StringWithAggregatesFilter<"DashboardRecipient"> | string
    userId?: StringWithAggregatesFilter<"DashboardRecipient"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    DashboardsOwned?: DashboardCreateNestedManyWithoutDashboardOwnerInput
    DashboardsShared?: DashboardShareCreateNestedManyWithoutSharedByInput
    DashboardsReceived?: DashboardRecipientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    DashboardsOwned?: DashboardUncheckedCreateNestedManyWithoutDashboardOwnerInput
    DashboardsShared?: DashboardShareUncheckedCreateNestedManyWithoutSharedByInput
    DashboardsReceived?: DashboardRecipientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsOwned?: DashboardUpdateManyWithoutDashboardOwnerNestedInput
    DashboardsShared?: DashboardShareUpdateManyWithoutSharedByNestedInput
    DashboardsReceived?: DashboardRecipientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsOwned?: DashboardUncheckedUpdateManyWithoutDashboardOwnerNestedInput
    DashboardsShared?: DashboardShareUncheckedUpdateManyWithoutSharedByNestedInput
    DashboardsReceived?: DashboardRecipientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardCreateInput = {
    id?: string
    name: string
    DashboardOwner: UserCreateNestedOneWithoutDashboardsOwnedInput
    IncidentCollection?: IncidentCreateNestedManyWithoutDashboardInput
    DashboardShare?: DashboardShareCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateInput = {
    id?: string
    name: string
    dashboardOwnerId: string
    IncidentCollection?: IncidentUncheckedCreateNestedManyWithoutDashboardInput
    DashboardShare?: DashboardShareUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DashboardOwner?: UserUpdateOneRequiredWithoutDashboardsOwnedNestedInput
    IncidentCollection?: IncidentUpdateManyWithoutDashboardNestedInput
    DashboardShare?: DashboardShareUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dashboardOwnerId?: StringFieldUpdateOperationsInput | string
    IncidentCollection?: IncidentUncheckedUpdateManyWithoutDashboardNestedInput
    DashboardShare?: DashboardShareUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardCreateManyInput = {
    id?: string
    name: string
    dashboardOwnerId: string
  }

  export type DashboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dashboardOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type IncidentCreateInput = {
    id?: string
    dateCreated?: Date | string
    imageData: Uint8Array
    incidentConfidence: number
    incidentCoords?: IncidentCreateincidentCoordsInput | number[]
    Dashboard: DashboardCreateNestedOneWithoutIncidentCollectionInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    dateCreated?: Date | string
    imageData: Uint8Array
    incidentConfidence: number
    incidentCoords?: IncidentCreateincidentCoordsInput | number[]
    dashboardId: string
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    imageData?: BytesFieldUpdateOperationsInput | Uint8Array
    incidentConfidence?: IntFieldUpdateOperationsInput | number
    incidentCoords?: IncidentUpdateincidentCoordsInput | number[]
    Dashboard?: DashboardUpdateOneRequiredWithoutIncidentCollectionNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    imageData?: BytesFieldUpdateOperationsInput | Uint8Array
    incidentConfidence?: IntFieldUpdateOperationsInput | number
    incidentCoords?: IncidentUpdateincidentCoordsInput | number[]
    dashboardId?: StringFieldUpdateOperationsInput | string
  }

  export type IncidentCreateManyInput = {
    id?: string
    dateCreated?: Date | string
    imageData: Uint8Array
    incidentConfidence: number
    incidentCoords?: IncidentCreateincidentCoordsInput | number[]
    dashboardId: string
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    imageData?: BytesFieldUpdateOperationsInput | Uint8Array
    incidentConfidence?: IntFieldUpdateOperationsInput | number
    incidentCoords?: IncidentUpdateincidentCoordsInput | number[]
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    imageData?: BytesFieldUpdateOperationsInput | Uint8Array
    incidentConfidence?: IntFieldUpdateOperationsInput | number
    incidentCoords?: IncidentUpdateincidentCoordsInput | number[]
    dashboardId?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardShareCreateInput = {
    id?: string
    SharedAt?: Date | string
    Dashboard: DashboardCreateNestedOneWithoutDashboardShareInput
    SharedBy: UserCreateNestedOneWithoutDashboardsSharedInput
    Recipients?: DashboardRecipientCreateNestedManyWithoutDashboardShareInput
  }

  export type DashboardShareUncheckedCreateInput = {
    id?: string
    dashboardId: string
    sharerId: string
    SharedAt?: Date | string
    Recipients?: DashboardRecipientUncheckedCreateNestedManyWithoutDashboardShareInput
  }

  export type DashboardShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dashboard?: DashboardUpdateOneRequiredWithoutDashboardShareNestedInput
    SharedBy?: UserUpdateOneRequiredWithoutDashboardsSharedNestedInput
    Recipients?: DashboardRecipientUpdateManyWithoutDashboardShareNestedInput
  }

  export type DashboardShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    sharerId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipients?: DashboardRecipientUncheckedUpdateManyWithoutDashboardShareNestedInput
  }

  export type DashboardShareCreateManyInput = {
    id?: string
    dashboardId: string
    sharerId: string
    SharedAt?: Date | string
  }

  export type DashboardShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    sharerId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardRecipientCreateInput = {
    id?: string
    DashboardShare: DashboardShareCreateNestedOneWithoutRecipientsInput
    User: UserCreateNestedOneWithoutDashboardsReceivedInput
  }

  export type DashboardRecipientUncheckedCreateInput = {
    id?: string
    dashboardShareId: string
    userId: string
  }

  export type DashboardRecipientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    DashboardShare?: DashboardShareUpdateOneRequiredWithoutRecipientsNestedInput
    User?: UserUpdateOneRequiredWithoutDashboardsReceivedNestedInput
  }

  export type DashboardRecipientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardRecipientCreateManyInput = {
    id?: string
    dashboardShareId: string
    userId: string
  }

  export type DashboardRecipientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardRecipientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DashboardListRelationFilter = {
    every?: DashboardWhereInput
    some?: DashboardWhereInput
    none?: DashboardWhereInput
  }

  export type DashboardShareListRelationFilter = {
    every?: DashboardShareWhereInput
    some?: DashboardShareWhereInput
    none?: DashboardShareWhereInput
  }

  export type DashboardRecipientListRelationFilter = {
    every?: DashboardRecipientWhereInput
    some?: DashboardRecipientWhereInput
    none?: DashboardRecipientWhereInput
  }

  export type DashboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DashboardShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DashboardRecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DashboardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dashboardOwnerId?: SortOrder
  }

  export type DashboardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dashboardOwnerId?: SortOrder
  }

  export type DashboardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dashboardOwnerId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DashboardScalarRelationFilter = {
    is?: DashboardWhereInput
    isNot?: DashboardWhereInput
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    imageData?: SortOrder
    incidentConfidence?: SortOrder
    incidentCoords?: SortOrder
    dashboardId?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    incidentConfidence?: SortOrder
    incidentCoords?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    imageData?: SortOrder
    incidentConfidence?: SortOrder
    dashboardId?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    imageData?: SortOrder
    incidentConfidence?: SortOrder
    dashboardId?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    incidentConfidence?: SortOrder
    incidentCoords?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DashboardShareCountOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    sharerId?: SortOrder
    SharedAt?: SortOrder
  }

  export type DashboardShareMaxOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    sharerId?: SortOrder
    SharedAt?: SortOrder
  }

  export type DashboardShareMinOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    sharerId?: SortOrder
    SharedAt?: SortOrder
  }

  export type DashboardShareScalarRelationFilter = {
    is?: DashboardShareWhereInput
    isNot?: DashboardShareWhereInput
  }

  export type DashboardRecipientCountOrderByAggregateInput = {
    id?: SortOrder
    dashboardShareId?: SortOrder
    userId?: SortOrder
  }

  export type DashboardRecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    dashboardShareId?: SortOrder
    userId?: SortOrder
  }

  export type DashboardRecipientMinOrderByAggregateInput = {
    id?: SortOrder
    dashboardShareId?: SortOrder
    userId?: SortOrder
  }

  export type DashboardCreateNestedManyWithoutDashboardOwnerInput = {
    create?: XOR<DashboardCreateWithoutDashboardOwnerInput, DashboardUncheckedCreateWithoutDashboardOwnerInput> | DashboardCreateWithoutDashboardOwnerInput[] | DashboardUncheckedCreateWithoutDashboardOwnerInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardOwnerInput | DashboardCreateOrConnectWithoutDashboardOwnerInput[]
    createMany?: DashboardCreateManyDashboardOwnerInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type DashboardShareCreateNestedManyWithoutSharedByInput = {
    create?: XOR<DashboardShareCreateWithoutSharedByInput, DashboardShareUncheckedCreateWithoutSharedByInput> | DashboardShareCreateWithoutSharedByInput[] | DashboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutSharedByInput | DashboardShareCreateOrConnectWithoutSharedByInput[]
    createMany?: DashboardShareCreateManySharedByInputEnvelope
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
  }

  export type DashboardRecipientCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardRecipientCreateWithoutUserInput, DashboardRecipientUncheckedCreateWithoutUserInput> | DashboardRecipientCreateWithoutUserInput[] | DashboardRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutUserInput | DashboardRecipientCreateOrConnectWithoutUserInput[]
    createMany?: DashboardRecipientCreateManyUserInputEnvelope
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
  }

  export type DashboardUncheckedCreateNestedManyWithoutDashboardOwnerInput = {
    create?: XOR<DashboardCreateWithoutDashboardOwnerInput, DashboardUncheckedCreateWithoutDashboardOwnerInput> | DashboardCreateWithoutDashboardOwnerInput[] | DashboardUncheckedCreateWithoutDashboardOwnerInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardOwnerInput | DashboardCreateOrConnectWithoutDashboardOwnerInput[]
    createMany?: DashboardCreateManyDashboardOwnerInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type DashboardShareUncheckedCreateNestedManyWithoutSharedByInput = {
    create?: XOR<DashboardShareCreateWithoutSharedByInput, DashboardShareUncheckedCreateWithoutSharedByInput> | DashboardShareCreateWithoutSharedByInput[] | DashboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutSharedByInput | DashboardShareCreateOrConnectWithoutSharedByInput[]
    createMany?: DashboardShareCreateManySharedByInputEnvelope
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
  }

  export type DashboardRecipientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardRecipientCreateWithoutUserInput, DashboardRecipientUncheckedCreateWithoutUserInput> | DashboardRecipientCreateWithoutUserInput[] | DashboardRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutUserInput | DashboardRecipientCreateOrConnectWithoutUserInput[]
    createMany?: DashboardRecipientCreateManyUserInputEnvelope
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DashboardUpdateManyWithoutDashboardOwnerNestedInput = {
    create?: XOR<DashboardCreateWithoutDashboardOwnerInput, DashboardUncheckedCreateWithoutDashboardOwnerInput> | DashboardCreateWithoutDashboardOwnerInput[] | DashboardUncheckedCreateWithoutDashboardOwnerInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardOwnerInput | DashboardCreateOrConnectWithoutDashboardOwnerInput[]
    upsert?: DashboardUpsertWithWhereUniqueWithoutDashboardOwnerInput | DashboardUpsertWithWhereUniqueWithoutDashboardOwnerInput[]
    createMany?: DashboardCreateManyDashboardOwnerInputEnvelope
    set?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    disconnect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    delete?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    update?: DashboardUpdateWithWhereUniqueWithoutDashboardOwnerInput | DashboardUpdateWithWhereUniqueWithoutDashboardOwnerInput[]
    updateMany?: DashboardUpdateManyWithWhereWithoutDashboardOwnerInput | DashboardUpdateManyWithWhereWithoutDashboardOwnerInput[]
    deleteMany?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
  }

  export type DashboardShareUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<DashboardShareCreateWithoutSharedByInput, DashboardShareUncheckedCreateWithoutSharedByInput> | DashboardShareCreateWithoutSharedByInput[] | DashboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutSharedByInput | DashboardShareCreateOrConnectWithoutSharedByInput[]
    upsert?: DashboardShareUpsertWithWhereUniqueWithoutSharedByInput | DashboardShareUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: DashboardShareCreateManySharedByInputEnvelope
    set?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    disconnect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    delete?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    update?: DashboardShareUpdateWithWhereUniqueWithoutSharedByInput | DashboardShareUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: DashboardShareUpdateManyWithWhereWithoutSharedByInput | DashboardShareUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: DashboardShareScalarWhereInput | DashboardShareScalarWhereInput[]
  }

  export type DashboardRecipientUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardRecipientCreateWithoutUserInput, DashboardRecipientUncheckedCreateWithoutUserInput> | DashboardRecipientCreateWithoutUserInput[] | DashboardRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutUserInput | DashboardRecipientCreateOrConnectWithoutUserInput[]
    upsert?: DashboardRecipientUpsertWithWhereUniqueWithoutUserInput | DashboardRecipientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardRecipientCreateManyUserInputEnvelope
    set?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    disconnect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    delete?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    update?: DashboardRecipientUpdateWithWhereUniqueWithoutUserInput | DashboardRecipientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardRecipientUpdateManyWithWhereWithoutUserInput | DashboardRecipientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardRecipientScalarWhereInput | DashboardRecipientScalarWhereInput[]
  }

  export type DashboardUncheckedUpdateManyWithoutDashboardOwnerNestedInput = {
    create?: XOR<DashboardCreateWithoutDashboardOwnerInput, DashboardUncheckedCreateWithoutDashboardOwnerInput> | DashboardCreateWithoutDashboardOwnerInput[] | DashboardUncheckedCreateWithoutDashboardOwnerInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardOwnerInput | DashboardCreateOrConnectWithoutDashboardOwnerInput[]
    upsert?: DashboardUpsertWithWhereUniqueWithoutDashboardOwnerInput | DashboardUpsertWithWhereUniqueWithoutDashboardOwnerInput[]
    createMany?: DashboardCreateManyDashboardOwnerInputEnvelope
    set?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    disconnect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    delete?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    update?: DashboardUpdateWithWhereUniqueWithoutDashboardOwnerInput | DashboardUpdateWithWhereUniqueWithoutDashboardOwnerInput[]
    updateMany?: DashboardUpdateManyWithWhereWithoutDashboardOwnerInput | DashboardUpdateManyWithWhereWithoutDashboardOwnerInput[]
    deleteMany?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
  }

  export type DashboardShareUncheckedUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<DashboardShareCreateWithoutSharedByInput, DashboardShareUncheckedCreateWithoutSharedByInput> | DashboardShareCreateWithoutSharedByInput[] | DashboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutSharedByInput | DashboardShareCreateOrConnectWithoutSharedByInput[]
    upsert?: DashboardShareUpsertWithWhereUniqueWithoutSharedByInput | DashboardShareUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: DashboardShareCreateManySharedByInputEnvelope
    set?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    disconnect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    delete?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    update?: DashboardShareUpdateWithWhereUniqueWithoutSharedByInput | DashboardShareUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: DashboardShareUpdateManyWithWhereWithoutSharedByInput | DashboardShareUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: DashboardShareScalarWhereInput | DashboardShareScalarWhereInput[]
  }

  export type DashboardRecipientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardRecipientCreateWithoutUserInput, DashboardRecipientUncheckedCreateWithoutUserInput> | DashboardRecipientCreateWithoutUserInput[] | DashboardRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutUserInput | DashboardRecipientCreateOrConnectWithoutUserInput[]
    upsert?: DashboardRecipientUpsertWithWhereUniqueWithoutUserInput | DashboardRecipientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardRecipientCreateManyUserInputEnvelope
    set?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    disconnect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    delete?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    update?: DashboardRecipientUpdateWithWhereUniqueWithoutUserInput | DashboardRecipientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardRecipientUpdateManyWithWhereWithoutUserInput | DashboardRecipientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardRecipientScalarWhereInput | DashboardRecipientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDashboardsOwnedInput = {
    create?: XOR<UserCreateWithoutDashboardsOwnedInput, UserUncheckedCreateWithoutDashboardsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsOwnedInput
    connect?: UserWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutDashboardInput = {
    create?: XOR<IncidentCreateWithoutDashboardInput, IncidentUncheckedCreateWithoutDashboardInput> | IncidentCreateWithoutDashboardInput[] | IncidentUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutDashboardInput | IncidentCreateOrConnectWithoutDashboardInput[]
    createMany?: IncidentCreateManyDashboardInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type DashboardShareCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardShareCreateWithoutDashboardInput, DashboardShareUncheckedCreateWithoutDashboardInput> | DashboardShareCreateWithoutDashboardInput[] | DashboardShareUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutDashboardInput | DashboardShareCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardShareCreateManyDashboardInputEnvelope
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<IncidentCreateWithoutDashboardInput, IncidentUncheckedCreateWithoutDashboardInput> | IncidentCreateWithoutDashboardInput[] | IncidentUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutDashboardInput | IncidentCreateOrConnectWithoutDashboardInput[]
    createMany?: IncidentCreateManyDashboardInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type DashboardShareUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardShareCreateWithoutDashboardInput, DashboardShareUncheckedCreateWithoutDashboardInput> | DashboardShareCreateWithoutDashboardInput[] | DashboardShareUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutDashboardInput | DashboardShareCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardShareCreateManyDashboardInputEnvelope
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDashboardsOwnedNestedInput = {
    create?: XOR<UserCreateWithoutDashboardsOwnedInput, UserUncheckedCreateWithoutDashboardsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsOwnedInput
    upsert?: UserUpsertWithoutDashboardsOwnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardsOwnedInput, UserUpdateWithoutDashboardsOwnedInput>, UserUncheckedUpdateWithoutDashboardsOwnedInput>
  }

  export type IncidentUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<IncidentCreateWithoutDashboardInput, IncidentUncheckedCreateWithoutDashboardInput> | IncidentCreateWithoutDashboardInput[] | IncidentUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutDashboardInput | IncidentCreateOrConnectWithoutDashboardInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutDashboardInput | IncidentUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: IncidentCreateManyDashboardInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutDashboardInput | IncidentUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutDashboardInput | IncidentUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type DashboardShareUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<DashboardShareCreateWithoutDashboardInput, DashboardShareUncheckedCreateWithoutDashboardInput> | DashboardShareCreateWithoutDashboardInput[] | DashboardShareUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutDashboardInput | DashboardShareCreateOrConnectWithoutDashboardInput[]
    upsert?: DashboardShareUpsertWithWhereUniqueWithoutDashboardInput | DashboardShareUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: DashboardShareCreateManyDashboardInputEnvelope
    set?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    disconnect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    delete?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    update?: DashboardShareUpdateWithWhereUniqueWithoutDashboardInput | DashboardShareUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: DashboardShareUpdateManyWithWhereWithoutDashboardInput | DashboardShareUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: DashboardShareScalarWhereInput | DashboardShareScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<IncidentCreateWithoutDashboardInput, IncidentUncheckedCreateWithoutDashboardInput> | IncidentCreateWithoutDashboardInput[] | IncidentUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutDashboardInput | IncidentCreateOrConnectWithoutDashboardInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutDashboardInput | IncidentUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: IncidentCreateManyDashboardInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutDashboardInput | IncidentUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutDashboardInput | IncidentUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type DashboardShareUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<DashboardShareCreateWithoutDashboardInput, DashboardShareUncheckedCreateWithoutDashboardInput> | DashboardShareCreateWithoutDashboardInput[] | DashboardShareUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardShareCreateOrConnectWithoutDashboardInput | DashboardShareCreateOrConnectWithoutDashboardInput[]
    upsert?: DashboardShareUpsertWithWhereUniqueWithoutDashboardInput | DashboardShareUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: DashboardShareCreateManyDashboardInputEnvelope
    set?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    disconnect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    delete?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    connect?: DashboardShareWhereUniqueInput | DashboardShareWhereUniqueInput[]
    update?: DashboardShareUpdateWithWhereUniqueWithoutDashboardInput | DashboardShareUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: DashboardShareUpdateManyWithWhereWithoutDashboardInput | DashboardShareUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: DashboardShareScalarWhereInput | DashboardShareScalarWhereInput[]
  }

  export type IncidentCreateincidentCoordsInput = {
    set: number[]
  }

  export type DashboardCreateNestedOneWithoutIncidentCollectionInput = {
    create?: XOR<DashboardCreateWithoutIncidentCollectionInput, DashboardUncheckedCreateWithoutIncidentCollectionInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutIncidentCollectionInput
    connect?: DashboardWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IncidentUpdateincidentCoordsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type DashboardUpdateOneRequiredWithoutIncidentCollectionNestedInput = {
    create?: XOR<DashboardCreateWithoutIncidentCollectionInput, DashboardUncheckedCreateWithoutIncidentCollectionInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutIncidentCollectionInput
    upsert?: DashboardUpsertWithoutIncidentCollectionInput
    connect?: DashboardWhereUniqueInput
    update?: XOR<XOR<DashboardUpdateToOneWithWhereWithoutIncidentCollectionInput, DashboardUpdateWithoutIncidentCollectionInput>, DashboardUncheckedUpdateWithoutIncidentCollectionInput>
  }

  export type DashboardCreateNestedOneWithoutDashboardShareInput = {
    create?: XOR<DashboardCreateWithoutDashboardShareInput, DashboardUncheckedCreateWithoutDashboardShareInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardShareInput
    connect?: DashboardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDashboardsSharedInput = {
    create?: XOR<UserCreateWithoutDashboardsSharedInput, UserUncheckedCreateWithoutDashboardsSharedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsSharedInput
    connect?: UserWhereUniqueInput
  }

  export type DashboardRecipientCreateNestedManyWithoutDashboardShareInput = {
    create?: XOR<DashboardRecipientCreateWithoutDashboardShareInput, DashboardRecipientUncheckedCreateWithoutDashboardShareInput> | DashboardRecipientCreateWithoutDashboardShareInput[] | DashboardRecipientUncheckedCreateWithoutDashboardShareInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutDashboardShareInput | DashboardRecipientCreateOrConnectWithoutDashboardShareInput[]
    createMany?: DashboardRecipientCreateManyDashboardShareInputEnvelope
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
  }

  export type DashboardRecipientUncheckedCreateNestedManyWithoutDashboardShareInput = {
    create?: XOR<DashboardRecipientCreateWithoutDashboardShareInput, DashboardRecipientUncheckedCreateWithoutDashboardShareInput> | DashboardRecipientCreateWithoutDashboardShareInput[] | DashboardRecipientUncheckedCreateWithoutDashboardShareInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutDashboardShareInput | DashboardRecipientCreateOrConnectWithoutDashboardShareInput[]
    createMany?: DashboardRecipientCreateManyDashboardShareInputEnvelope
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
  }

  export type DashboardUpdateOneRequiredWithoutDashboardShareNestedInput = {
    create?: XOR<DashboardCreateWithoutDashboardShareInput, DashboardUncheckedCreateWithoutDashboardShareInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardShareInput
    upsert?: DashboardUpsertWithoutDashboardShareInput
    connect?: DashboardWhereUniqueInput
    update?: XOR<XOR<DashboardUpdateToOneWithWhereWithoutDashboardShareInput, DashboardUpdateWithoutDashboardShareInput>, DashboardUncheckedUpdateWithoutDashboardShareInput>
  }

  export type UserUpdateOneRequiredWithoutDashboardsSharedNestedInput = {
    create?: XOR<UserCreateWithoutDashboardsSharedInput, UserUncheckedCreateWithoutDashboardsSharedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsSharedInput
    upsert?: UserUpsertWithoutDashboardsSharedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardsSharedInput, UserUpdateWithoutDashboardsSharedInput>, UserUncheckedUpdateWithoutDashboardsSharedInput>
  }

  export type DashboardRecipientUpdateManyWithoutDashboardShareNestedInput = {
    create?: XOR<DashboardRecipientCreateWithoutDashboardShareInput, DashboardRecipientUncheckedCreateWithoutDashboardShareInput> | DashboardRecipientCreateWithoutDashboardShareInput[] | DashboardRecipientUncheckedCreateWithoutDashboardShareInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutDashboardShareInput | DashboardRecipientCreateOrConnectWithoutDashboardShareInput[]
    upsert?: DashboardRecipientUpsertWithWhereUniqueWithoutDashboardShareInput | DashboardRecipientUpsertWithWhereUniqueWithoutDashboardShareInput[]
    createMany?: DashboardRecipientCreateManyDashboardShareInputEnvelope
    set?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    disconnect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    delete?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    update?: DashboardRecipientUpdateWithWhereUniqueWithoutDashboardShareInput | DashboardRecipientUpdateWithWhereUniqueWithoutDashboardShareInput[]
    updateMany?: DashboardRecipientUpdateManyWithWhereWithoutDashboardShareInput | DashboardRecipientUpdateManyWithWhereWithoutDashboardShareInput[]
    deleteMany?: DashboardRecipientScalarWhereInput | DashboardRecipientScalarWhereInput[]
  }

  export type DashboardRecipientUncheckedUpdateManyWithoutDashboardShareNestedInput = {
    create?: XOR<DashboardRecipientCreateWithoutDashboardShareInput, DashboardRecipientUncheckedCreateWithoutDashboardShareInput> | DashboardRecipientCreateWithoutDashboardShareInput[] | DashboardRecipientUncheckedCreateWithoutDashboardShareInput[]
    connectOrCreate?: DashboardRecipientCreateOrConnectWithoutDashboardShareInput | DashboardRecipientCreateOrConnectWithoutDashboardShareInput[]
    upsert?: DashboardRecipientUpsertWithWhereUniqueWithoutDashboardShareInput | DashboardRecipientUpsertWithWhereUniqueWithoutDashboardShareInput[]
    createMany?: DashboardRecipientCreateManyDashboardShareInputEnvelope
    set?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    disconnect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    delete?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    connect?: DashboardRecipientWhereUniqueInput | DashboardRecipientWhereUniqueInput[]
    update?: DashboardRecipientUpdateWithWhereUniqueWithoutDashboardShareInput | DashboardRecipientUpdateWithWhereUniqueWithoutDashboardShareInput[]
    updateMany?: DashboardRecipientUpdateManyWithWhereWithoutDashboardShareInput | DashboardRecipientUpdateManyWithWhereWithoutDashboardShareInput[]
    deleteMany?: DashboardRecipientScalarWhereInput | DashboardRecipientScalarWhereInput[]
  }

  export type DashboardShareCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<DashboardShareCreateWithoutRecipientsInput, DashboardShareUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: DashboardShareCreateOrConnectWithoutRecipientsInput
    connect?: DashboardShareWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDashboardsReceivedInput = {
    create?: XOR<UserCreateWithoutDashboardsReceivedInput, UserUncheckedCreateWithoutDashboardsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type DashboardShareUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<DashboardShareCreateWithoutRecipientsInput, DashboardShareUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: DashboardShareCreateOrConnectWithoutRecipientsInput
    upsert?: DashboardShareUpsertWithoutRecipientsInput
    connect?: DashboardShareWhereUniqueInput
    update?: XOR<XOR<DashboardShareUpdateToOneWithWhereWithoutRecipientsInput, DashboardShareUpdateWithoutRecipientsInput>, DashboardShareUncheckedUpdateWithoutRecipientsInput>
  }

  export type UserUpdateOneRequiredWithoutDashboardsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutDashboardsReceivedInput, UserUncheckedCreateWithoutDashboardsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsReceivedInput
    upsert?: UserUpsertWithoutDashboardsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardsReceivedInput, UserUpdateWithoutDashboardsReceivedInput>, UserUncheckedUpdateWithoutDashboardsReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DashboardCreateWithoutDashboardOwnerInput = {
    id?: string
    name: string
    IncidentCollection?: IncidentCreateNestedManyWithoutDashboardInput
    DashboardShare?: DashboardShareCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutDashboardOwnerInput = {
    id?: string
    name: string
    IncidentCollection?: IncidentUncheckedCreateNestedManyWithoutDashboardInput
    DashboardShare?: DashboardShareUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutDashboardOwnerInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutDashboardOwnerInput, DashboardUncheckedCreateWithoutDashboardOwnerInput>
  }

  export type DashboardCreateManyDashboardOwnerInputEnvelope = {
    data: DashboardCreateManyDashboardOwnerInput | DashboardCreateManyDashboardOwnerInput[]
    skipDuplicates?: boolean
  }

  export type DashboardShareCreateWithoutSharedByInput = {
    id?: string
    SharedAt?: Date | string
    Dashboard: DashboardCreateNestedOneWithoutDashboardShareInput
    Recipients?: DashboardRecipientCreateNestedManyWithoutDashboardShareInput
  }

  export type DashboardShareUncheckedCreateWithoutSharedByInput = {
    id?: string
    dashboardId: string
    SharedAt?: Date | string
    Recipients?: DashboardRecipientUncheckedCreateNestedManyWithoutDashboardShareInput
  }

  export type DashboardShareCreateOrConnectWithoutSharedByInput = {
    where: DashboardShareWhereUniqueInput
    create: XOR<DashboardShareCreateWithoutSharedByInput, DashboardShareUncheckedCreateWithoutSharedByInput>
  }

  export type DashboardShareCreateManySharedByInputEnvelope = {
    data: DashboardShareCreateManySharedByInput | DashboardShareCreateManySharedByInput[]
    skipDuplicates?: boolean
  }

  export type DashboardRecipientCreateWithoutUserInput = {
    id?: string
    DashboardShare: DashboardShareCreateNestedOneWithoutRecipientsInput
  }

  export type DashboardRecipientUncheckedCreateWithoutUserInput = {
    id?: string
    dashboardShareId: string
  }

  export type DashboardRecipientCreateOrConnectWithoutUserInput = {
    where: DashboardRecipientWhereUniqueInput
    create: XOR<DashboardRecipientCreateWithoutUserInput, DashboardRecipientUncheckedCreateWithoutUserInput>
  }

  export type DashboardRecipientCreateManyUserInputEnvelope = {
    data: DashboardRecipientCreateManyUserInput | DashboardRecipientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DashboardUpsertWithWhereUniqueWithoutDashboardOwnerInput = {
    where: DashboardWhereUniqueInput
    update: XOR<DashboardUpdateWithoutDashboardOwnerInput, DashboardUncheckedUpdateWithoutDashboardOwnerInput>
    create: XOR<DashboardCreateWithoutDashboardOwnerInput, DashboardUncheckedCreateWithoutDashboardOwnerInput>
  }

  export type DashboardUpdateWithWhereUniqueWithoutDashboardOwnerInput = {
    where: DashboardWhereUniqueInput
    data: XOR<DashboardUpdateWithoutDashboardOwnerInput, DashboardUncheckedUpdateWithoutDashboardOwnerInput>
  }

  export type DashboardUpdateManyWithWhereWithoutDashboardOwnerInput = {
    where: DashboardScalarWhereInput
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyWithoutDashboardOwnerInput>
  }

  export type DashboardScalarWhereInput = {
    AND?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
    OR?: DashboardScalarWhereInput[]
    NOT?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
    id?: StringFilter<"Dashboard"> | string
    name?: StringFilter<"Dashboard"> | string
    dashboardOwnerId?: StringFilter<"Dashboard"> | string
  }

  export type DashboardShareUpsertWithWhereUniqueWithoutSharedByInput = {
    where: DashboardShareWhereUniqueInput
    update: XOR<DashboardShareUpdateWithoutSharedByInput, DashboardShareUncheckedUpdateWithoutSharedByInput>
    create: XOR<DashboardShareCreateWithoutSharedByInput, DashboardShareUncheckedCreateWithoutSharedByInput>
  }

  export type DashboardShareUpdateWithWhereUniqueWithoutSharedByInput = {
    where: DashboardShareWhereUniqueInput
    data: XOR<DashboardShareUpdateWithoutSharedByInput, DashboardShareUncheckedUpdateWithoutSharedByInput>
  }

  export type DashboardShareUpdateManyWithWhereWithoutSharedByInput = {
    where: DashboardShareScalarWhereInput
    data: XOR<DashboardShareUpdateManyMutationInput, DashboardShareUncheckedUpdateManyWithoutSharedByInput>
  }

  export type DashboardShareScalarWhereInput = {
    AND?: DashboardShareScalarWhereInput | DashboardShareScalarWhereInput[]
    OR?: DashboardShareScalarWhereInput[]
    NOT?: DashboardShareScalarWhereInput | DashboardShareScalarWhereInput[]
    id?: StringFilter<"DashboardShare"> | string
    dashboardId?: StringFilter<"DashboardShare"> | string
    sharerId?: StringFilter<"DashboardShare"> | string
    SharedAt?: DateTimeFilter<"DashboardShare"> | Date | string
  }

  export type DashboardRecipientUpsertWithWhereUniqueWithoutUserInput = {
    where: DashboardRecipientWhereUniqueInput
    update: XOR<DashboardRecipientUpdateWithoutUserInput, DashboardRecipientUncheckedUpdateWithoutUserInput>
    create: XOR<DashboardRecipientCreateWithoutUserInput, DashboardRecipientUncheckedCreateWithoutUserInput>
  }

  export type DashboardRecipientUpdateWithWhereUniqueWithoutUserInput = {
    where: DashboardRecipientWhereUniqueInput
    data: XOR<DashboardRecipientUpdateWithoutUserInput, DashboardRecipientUncheckedUpdateWithoutUserInput>
  }

  export type DashboardRecipientUpdateManyWithWhereWithoutUserInput = {
    where: DashboardRecipientScalarWhereInput
    data: XOR<DashboardRecipientUpdateManyMutationInput, DashboardRecipientUncheckedUpdateManyWithoutUserInput>
  }

  export type DashboardRecipientScalarWhereInput = {
    AND?: DashboardRecipientScalarWhereInput | DashboardRecipientScalarWhereInput[]
    OR?: DashboardRecipientScalarWhereInput[]
    NOT?: DashboardRecipientScalarWhereInput | DashboardRecipientScalarWhereInput[]
    id?: StringFilter<"DashboardRecipient"> | string
    dashboardShareId?: StringFilter<"DashboardRecipient"> | string
    userId?: StringFilter<"DashboardRecipient"> | string
  }

  export type UserCreateWithoutDashboardsOwnedInput = {
    id?: string
    name: string
    password: string
    DashboardsShared?: DashboardShareCreateNestedManyWithoutSharedByInput
    DashboardsReceived?: DashboardRecipientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboardsOwnedInput = {
    id?: string
    name: string
    password: string
    DashboardsShared?: DashboardShareUncheckedCreateNestedManyWithoutSharedByInput
    DashboardsReceived?: DashboardRecipientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboardsOwnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardsOwnedInput, UserUncheckedCreateWithoutDashboardsOwnedInput>
  }

  export type IncidentCreateWithoutDashboardInput = {
    id?: string
    dateCreated?: Date | string
    imageData: Uint8Array
    incidentConfidence: number
    incidentCoords?: IncidentCreateincidentCoordsInput | number[]
  }

  export type IncidentUncheckedCreateWithoutDashboardInput = {
    id?: string
    dateCreated?: Date | string
    imageData: Uint8Array
    incidentConfidence: number
    incidentCoords?: IncidentCreateincidentCoordsInput | number[]
  }

  export type IncidentCreateOrConnectWithoutDashboardInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutDashboardInput, IncidentUncheckedCreateWithoutDashboardInput>
  }

  export type IncidentCreateManyDashboardInputEnvelope = {
    data: IncidentCreateManyDashboardInput | IncidentCreateManyDashboardInput[]
    skipDuplicates?: boolean
  }

  export type DashboardShareCreateWithoutDashboardInput = {
    id?: string
    SharedAt?: Date | string
    SharedBy: UserCreateNestedOneWithoutDashboardsSharedInput
    Recipients?: DashboardRecipientCreateNestedManyWithoutDashboardShareInput
  }

  export type DashboardShareUncheckedCreateWithoutDashboardInput = {
    id?: string
    sharerId: string
    SharedAt?: Date | string
    Recipients?: DashboardRecipientUncheckedCreateNestedManyWithoutDashboardShareInput
  }

  export type DashboardShareCreateOrConnectWithoutDashboardInput = {
    where: DashboardShareWhereUniqueInput
    create: XOR<DashboardShareCreateWithoutDashboardInput, DashboardShareUncheckedCreateWithoutDashboardInput>
  }

  export type DashboardShareCreateManyDashboardInputEnvelope = {
    data: DashboardShareCreateManyDashboardInput | DashboardShareCreateManyDashboardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDashboardsOwnedInput = {
    update: XOR<UserUpdateWithoutDashboardsOwnedInput, UserUncheckedUpdateWithoutDashboardsOwnedInput>
    create: XOR<UserCreateWithoutDashboardsOwnedInput, UserUncheckedCreateWithoutDashboardsOwnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboardsOwnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboardsOwnedInput, UserUncheckedUpdateWithoutDashboardsOwnedInput>
  }

  export type UserUpdateWithoutDashboardsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsShared?: DashboardShareUpdateManyWithoutSharedByNestedInput
    DashboardsReceived?: DashboardRecipientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsShared?: DashboardShareUncheckedUpdateManyWithoutSharedByNestedInput
    DashboardsReceived?: DashboardRecipientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IncidentUpsertWithWhereUniqueWithoutDashboardInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutDashboardInput, IncidentUncheckedUpdateWithoutDashboardInput>
    create: XOR<IncidentCreateWithoutDashboardInput, IncidentUncheckedCreateWithoutDashboardInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutDashboardInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutDashboardInput, IncidentUncheckedUpdateWithoutDashboardInput>
  }

  export type IncidentUpdateManyWithWhereWithoutDashboardInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutDashboardInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    dateCreated?: DateTimeFilter<"Incident"> | Date | string
    imageData?: BytesFilter<"Incident"> | Uint8Array
    incidentConfidence?: IntFilter<"Incident"> | number
    incidentCoords?: IntNullableListFilter<"Incident">
    dashboardId?: StringFilter<"Incident"> | string
  }

  export type DashboardShareUpsertWithWhereUniqueWithoutDashboardInput = {
    where: DashboardShareWhereUniqueInput
    update: XOR<DashboardShareUpdateWithoutDashboardInput, DashboardShareUncheckedUpdateWithoutDashboardInput>
    create: XOR<DashboardShareCreateWithoutDashboardInput, DashboardShareUncheckedCreateWithoutDashboardInput>
  }

  export type DashboardShareUpdateWithWhereUniqueWithoutDashboardInput = {
    where: DashboardShareWhereUniqueInput
    data: XOR<DashboardShareUpdateWithoutDashboardInput, DashboardShareUncheckedUpdateWithoutDashboardInput>
  }

  export type DashboardShareUpdateManyWithWhereWithoutDashboardInput = {
    where: DashboardShareScalarWhereInput
    data: XOR<DashboardShareUpdateManyMutationInput, DashboardShareUncheckedUpdateManyWithoutDashboardInput>
  }

  export type DashboardCreateWithoutIncidentCollectionInput = {
    id?: string
    name: string
    DashboardOwner: UserCreateNestedOneWithoutDashboardsOwnedInput
    DashboardShare?: DashboardShareCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutIncidentCollectionInput = {
    id?: string
    name: string
    dashboardOwnerId: string
    DashboardShare?: DashboardShareUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutIncidentCollectionInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutIncidentCollectionInput, DashboardUncheckedCreateWithoutIncidentCollectionInput>
  }

  export type DashboardUpsertWithoutIncidentCollectionInput = {
    update: XOR<DashboardUpdateWithoutIncidentCollectionInput, DashboardUncheckedUpdateWithoutIncidentCollectionInput>
    create: XOR<DashboardCreateWithoutIncidentCollectionInput, DashboardUncheckedCreateWithoutIncidentCollectionInput>
    where?: DashboardWhereInput
  }

  export type DashboardUpdateToOneWithWhereWithoutIncidentCollectionInput = {
    where?: DashboardWhereInput
    data: XOR<DashboardUpdateWithoutIncidentCollectionInput, DashboardUncheckedUpdateWithoutIncidentCollectionInput>
  }

  export type DashboardUpdateWithoutIncidentCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DashboardOwner?: UserUpdateOneRequiredWithoutDashboardsOwnedNestedInput
    DashboardShare?: DashboardShareUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutIncidentCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dashboardOwnerId?: StringFieldUpdateOperationsInput | string
    DashboardShare?: DashboardShareUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardCreateWithoutDashboardShareInput = {
    id?: string
    name: string
    DashboardOwner: UserCreateNestedOneWithoutDashboardsOwnedInput
    IncidentCollection?: IncidentCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutDashboardShareInput = {
    id?: string
    name: string
    dashboardOwnerId: string
    IncidentCollection?: IncidentUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutDashboardShareInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutDashboardShareInput, DashboardUncheckedCreateWithoutDashboardShareInput>
  }

  export type UserCreateWithoutDashboardsSharedInput = {
    id?: string
    name: string
    password: string
    DashboardsOwned?: DashboardCreateNestedManyWithoutDashboardOwnerInput
    DashboardsReceived?: DashboardRecipientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboardsSharedInput = {
    id?: string
    name: string
    password: string
    DashboardsOwned?: DashboardUncheckedCreateNestedManyWithoutDashboardOwnerInput
    DashboardsReceived?: DashboardRecipientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboardsSharedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardsSharedInput, UserUncheckedCreateWithoutDashboardsSharedInput>
  }

  export type DashboardRecipientCreateWithoutDashboardShareInput = {
    id?: string
    User: UserCreateNestedOneWithoutDashboardsReceivedInput
  }

  export type DashboardRecipientUncheckedCreateWithoutDashboardShareInput = {
    id?: string
    userId: string
  }

  export type DashboardRecipientCreateOrConnectWithoutDashboardShareInput = {
    where: DashboardRecipientWhereUniqueInput
    create: XOR<DashboardRecipientCreateWithoutDashboardShareInput, DashboardRecipientUncheckedCreateWithoutDashboardShareInput>
  }

  export type DashboardRecipientCreateManyDashboardShareInputEnvelope = {
    data: DashboardRecipientCreateManyDashboardShareInput | DashboardRecipientCreateManyDashboardShareInput[]
    skipDuplicates?: boolean
  }

  export type DashboardUpsertWithoutDashboardShareInput = {
    update: XOR<DashboardUpdateWithoutDashboardShareInput, DashboardUncheckedUpdateWithoutDashboardShareInput>
    create: XOR<DashboardCreateWithoutDashboardShareInput, DashboardUncheckedCreateWithoutDashboardShareInput>
    where?: DashboardWhereInput
  }

  export type DashboardUpdateToOneWithWhereWithoutDashboardShareInput = {
    where?: DashboardWhereInput
    data: XOR<DashboardUpdateWithoutDashboardShareInput, DashboardUncheckedUpdateWithoutDashboardShareInput>
  }

  export type DashboardUpdateWithoutDashboardShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DashboardOwner?: UserUpdateOneRequiredWithoutDashboardsOwnedNestedInput
    IncidentCollection?: IncidentUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutDashboardShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dashboardOwnerId?: StringFieldUpdateOperationsInput | string
    IncidentCollection?: IncidentUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type UserUpsertWithoutDashboardsSharedInput = {
    update: XOR<UserUpdateWithoutDashboardsSharedInput, UserUncheckedUpdateWithoutDashboardsSharedInput>
    create: XOR<UserCreateWithoutDashboardsSharedInput, UserUncheckedCreateWithoutDashboardsSharedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboardsSharedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboardsSharedInput, UserUncheckedUpdateWithoutDashboardsSharedInput>
  }

  export type UserUpdateWithoutDashboardsSharedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsOwned?: DashboardUpdateManyWithoutDashboardOwnerNestedInput
    DashboardsReceived?: DashboardRecipientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardsSharedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsOwned?: DashboardUncheckedUpdateManyWithoutDashboardOwnerNestedInput
    DashboardsReceived?: DashboardRecipientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DashboardRecipientUpsertWithWhereUniqueWithoutDashboardShareInput = {
    where: DashboardRecipientWhereUniqueInput
    update: XOR<DashboardRecipientUpdateWithoutDashboardShareInput, DashboardRecipientUncheckedUpdateWithoutDashboardShareInput>
    create: XOR<DashboardRecipientCreateWithoutDashboardShareInput, DashboardRecipientUncheckedCreateWithoutDashboardShareInput>
  }

  export type DashboardRecipientUpdateWithWhereUniqueWithoutDashboardShareInput = {
    where: DashboardRecipientWhereUniqueInput
    data: XOR<DashboardRecipientUpdateWithoutDashboardShareInput, DashboardRecipientUncheckedUpdateWithoutDashboardShareInput>
  }

  export type DashboardRecipientUpdateManyWithWhereWithoutDashboardShareInput = {
    where: DashboardRecipientScalarWhereInput
    data: XOR<DashboardRecipientUpdateManyMutationInput, DashboardRecipientUncheckedUpdateManyWithoutDashboardShareInput>
  }

  export type DashboardShareCreateWithoutRecipientsInput = {
    id?: string
    SharedAt?: Date | string
    Dashboard: DashboardCreateNestedOneWithoutDashboardShareInput
    SharedBy: UserCreateNestedOneWithoutDashboardsSharedInput
  }

  export type DashboardShareUncheckedCreateWithoutRecipientsInput = {
    id?: string
    dashboardId: string
    sharerId: string
    SharedAt?: Date | string
  }

  export type DashboardShareCreateOrConnectWithoutRecipientsInput = {
    where: DashboardShareWhereUniqueInput
    create: XOR<DashboardShareCreateWithoutRecipientsInput, DashboardShareUncheckedCreateWithoutRecipientsInput>
  }

  export type UserCreateWithoutDashboardsReceivedInput = {
    id?: string
    name: string
    password: string
    DashboardsOwned?: DashboardCreateNestedManyWithoutDashboardOwnerInput
    DashboardsShared?: DashboardShareCreateNestedManyWithoutSharedByInput
  }

  export type UserUncheckedCreateWithoutDashboardsReceivedInput = {
    id?: string
    name: string
    password: string
    DashboardsOwned?: DashboardUncheckedCreateNestedManyWithoutDashboardOwnerInput
    DashboardsShared?: DashboardShareUncheckedCreateNestedManyWithoutSharedByInput
  }

  export type UserCreateOrConnectWithoutDashboardsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardsReceivedInput, UserUncheckedCreateWithoutDashboardsReceivedInput>
  }

  export type DashboardShareUpsertWithoutRecipientsInput = {
    update: XOR<DashboardShareUpdateWithoutRecipientsInput, DashboardShareUncheckedUpdateWithoutRecipientsInput>
    create: XOR<DashboardShareCreateWithoutRecipientsInput, DashboardShareUncheckedCreateWithoutRecipientsInput>
    where?: DashboardShareWhereInput
  }

  export type DashboardShareUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: DashboardShareWhereInput
    data: XOR<DashboardShareUpdateWithoutRecipientsInput, DashboardShareUncheckedUpdateWithoutRecipientsInput>
  }

  export type DashboardShareUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dashboard?: DashboardUpdateOneRequiredWithoutDashboardShareNestedInput
    SharedBy?: UserUpdateOneRequiredWithoutDashboardsSharedNestedInput
  }

  export type DashboardShareUncheckedUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    sharerId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDashboardsReceivedInput = {
    update: XOR<UserUpdateWithoutDashboardsReceivedInput, UserUncheckedUpdateWithoutDashboardsReceivedInput>
    create: XOR<UserCreateWithoutDashboardsReceivedInput, UserUncheckedCreateWithoutDashboardsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboardsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboardsReceivedInput, UserUncheckedUpdateWithoutDashboardsReceivedInput>
  }

  export type UserUpdateWithoutDashboardsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsOwned?: DashboardUpdateManyWithoutDashboardOwnerNestedInput
    DashboardsShared?: DashboardShareUpdateManyWithoutSharedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    DashboardsOwned?: DashboardUncheckedUpdateManyWithoutDashboardOwnerNestedInput
    DashboardsShared?: DashboardShareUncheckedUpdateManyWithoutSharedByNestedInput
  }

  export type DashboardCreateManyDashboardOwnerInput = {
    id?: string
    name: string
  }

  export type DashboardShareCreateManySharedByInput = {
    id?: string
    dashboardId: string
    SharedAt?: Date | string
  }

  export type DashboardRecipientCreateManyUserInput = {
    id?: string
    dashboardShareId: string
  }

  export type DashboardUpdateWithoutDashboardOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    IncidentCollection?: IncidentUpdateManyWithoutDashboardNestedInput
    DashboardShare?: DashboardShareUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutDashboardOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    IncidentCollection?: IncidentUncheckedUpdateManyWithoutDashboardNestedInput
    DashboardShare?: DashboardShareUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateManyWithoutDashboardOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardShareUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dashboard?: DashboardUpdateOneRequiredWithoutDashboardShareNestedInput
    Recipients?: DashboardRecipientUpdateManyWithoutDashboardShareNestedInput
  }

  export type DashboardShareUncheckedUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipients?: DashboardRecipientUncheckedUpdateManyWithoutDashboardShareNestedInput
  }

  export type DashboardShareUncheckedUpdateManyWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardRecipientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    DashboardShare?: DashboardShareUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type DashboardRecipientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardShareId?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardRecipientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardShareId?: StringFieldUpdateOperationsInput | string
  }

  export type IncidentCreateManyDashboardInput = {
    id?: string
    dateCreated?: Date | string
    imageData: Uint8Array
    incidentConfidence: number
    incidentCoords?: IncidentCreateincidentCoordsInput | number[]
  }

  export type DashboardShareCreateManyDashboardInput = {
    id?: string
    sharerId: string
    SharedAt?: Date | string
  }

  export type IncidentUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    imageData?: BytesFieldUpdateOperationsInput | Uint8Array
    incidentConfidence?: IntFieldUpdateOperationsInput | number
    incidentCoords?: IncidentUpdateincidentCoordsInput | number[]
  }

  export type IncidentUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    imageData?: BytesFieldUpdateOperationsInput | Uint8Array
    incidentConfidence?: IntFieldUpdateOperationsInput | number
    incidentCoords?: IncidentUpdateincidentCoordsInput | number[]
  }

  export type IncidentUncheckedUpdateManyWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    imageData?: BytesFieldUpdateOperationsInput | Uint8Array
    incidentConfidence?: IntFieldUpdateOperationsInput | number
    incidentCoords?: IncidentUpdateincidentCoordsInput | number[]
  }

  export type DashboardShareUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SharedBy?: UserUpdateOneRequiredWithoutDashboardsSharedNestedInput
    Recipients?: DashboardRecipientUpdateManyWithoutDashboardShareNestedInput
  }

  export type DashboardShareUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharerId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipients?: DashboardRecipientUncheckedUpdateManyWithoutDashboardShareNestedInput
  }

  export type DashboardShareUncheckedUpdateManyWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharerId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardRecipientCreateManyDashboardShareInput = {
    id?: string
    userId: string
  }

  export type DashboardRecipientUpdateWithoutDashboardShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutDashboardsReceivedNestedInput
  }

  export type DashboardRecipientUncheckedUpdateWithoutDashboardShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardRecipientUncheckedUpdateManyWithoutDashboardShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}