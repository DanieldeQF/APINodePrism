
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
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model equipamento
 * 
 */
export type equipamento = $Result.DefaultSelection<Prisma.$equipamentoPayload>
/**
 * Model funcionario
 * 
 */
export type funcionario = $Result.DefaultSelection<Prisma.$funcionarioPayload>
/**
 * Model ordemservico
 * 
 */
export type ordemservico = $Result.DefaultSelection<Prisma.$ordemservicoPayload>
/**
 * Model servico
 * 
 */
export type servico = $Result.DefaultSelection<Prisma.$servicoPayload>
/**
 * Model servicosfuncionario
 * 
 */
export type servicosfuncionario = $Result.DefaultSelection<Prisma.$servicosfuncionarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
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
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipamento`: Exposes CRUD operations for the **equipamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipamentos
    * const equipamentos = await prisma.equipamento.findMany()
    * ```
    */
  get equipamento(): Prisma.equipamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.funcionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordemservico`: Exposes CRUD operations for the **ordemservico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ordemservicos
    * const ordemservicos = await prisma.ordemservico.findMany()
    * ```
    */
  get ordemservico(): Prisma.ordemservicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.servicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicosfuncionario`: Exposes CRUD operations for the **servicosfuncionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicosfuncionarios
    * const servicosfuncionarios = await prisma.servicosfuncionario.findMany()
    * ```
    */
  get servicosfuncionario(): Prisma.servicosfuncionarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    cliente: 'cliente',
    equipamento: 'equipamento',
    funcionario: 'funcionario',
    ordemservico: 'ordemservico',
    servico: 'servico',
    servicosfuncionario: 'servicosfuncionario'
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
      modelProps: "cliente" | "equipamento" | "funcionario" | "ordemservico" | "servico" | "servicosfuncionario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      equipamento: {
        payload: Prisma.$equipamentoPayload<ExtArgs>
        fields: Prisma.equipamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.equipamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.equipamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          findFirst: {
            args: Prisma.equipamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.equipamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          findMany: {
            args: Prisma.equipamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>[]
          }
          create: {
            args: Prisma.equipamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          createMany: {
            args: Prisma.equipamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.equipamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          update: {
            args: Prisma.equipamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          deleteMany: {
            args: Prisma.equipamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.equipamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.equipamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          aggregate: {
            args: Prisma.EquipamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipamento>
          }
          groupBy: {
            args: Prisma.equipamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.equipamentoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoCountAggregateOutputType> | number
          }
        }
      }
      funcionario: {
        payload: Prisma.$funcionarioPayload<ExtArgs>
        fields: Prisma.funcionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funcionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funcionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findFirst: {
            args: Prisma.funcionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funcionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findMany: {
            args: Prisma.funcionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          create: {
            args: Prisma.funcionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          createMany: {
            args: Prisma.funcionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.funcionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          update: {
            args: Prisma.funcionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          deleteMany: {
            args: Prisma.funcionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funcionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.funcionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.funcionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.funcionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      ordemservico: {
        payload: Prisma.$ordemservicoPayload<ExtArgs>
        fields: Prisma.ordemservicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordemservicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordemservicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload>
          }
          findFirst: {
            args: Prisma.ordemservicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordemservicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload>
          }
          findMany: {
            args: Prisma.ordemservicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload>[]
          }
          create: {
            args: Prisma.ordemservicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload>
          }
          createMany: {
            args: Prisma.ordemservicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordemservicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload>
          }
          update: {
            args: Prisma.ordemservicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload>
          }
          deleteMany: {
            args: Prisma.ordemservicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordemservicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordemservicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordemservicoPayload>
          }
          aggregate: {
            args: Prisma.OrdemservicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdemservico>
          }
          groupBy: {
            args: Prisma.ordemservicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdemservicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordemservicoCountArgs<ExtArgs>
            result: $Utils.Optional<OrdemservicoCountAggregateOutputType> | number
          }
        }
      }
      servico: {
        payload: Prisma.$servicoPayload<ExtArgs>
        fields: Prisma.servicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload>
          }
          findFirst: {
            args: Prisma.servicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload>
          }
          findMany: {
            args: Prisma.servicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload>[]
          }
          create: {
            args: Prisma.servicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload>
          }
          createMany: {
            args: Prisma.servicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.servicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload>
          }
          update: {
            args: Prisma.servicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload>
          }
          deleteMany: {
            args: Prisma.servicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.servicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.servicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      servicosfuncionario: {
        payload: Prisma.$servicosfuncionarioPayload<ExtArgs>
        fields: Prisma.servicosfuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicosfuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicosfuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload>
          }
          findFirst: {
            args: Prisma.servicosfuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicosfuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload>
          }
          findMany: {
            args: Prisma.servicosfuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload>[]
          }
          create: {
            args: Prisma.servicosfuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload>
          }
          createMany: {
            args: Prisma.servicosfuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.servicosfuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload>
          }
          update: {
            args: Prisma.servicosfuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.servicosfuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicosfuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.servicosfuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosfuncionarioPayload>
          }
          aggregate: {
            args: Prisma.ServicosfuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicosfuncionario>
          }
          groupBy: {
            args: Prisma.servicosfuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicosfuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicosfuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicosfuncionarioCountAggregateOutputType> | number
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
    cliente?: clienteOmit
    equipamento?: equipamentoOmit
    funcionario?: funcionarioOmit
    ordemservico?: ordemservicoOmit
    servico?: servicoOmit
    servicosfuncionario?: servicosfuncionarioOmit
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    equipamento: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipamento?: boolean | ClienteCountOutputTypeCountEquipamentoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEquipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipamentoWhereInput
  }


  /**
   * Count Type EquipamentoCountOutputType
   */

  export type EquipamentoCountOutputType = {
    ordemservico: number
  }

  export type EquipamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemservico?: boolean | EquipamentoCountOutputTypeCountOrdemservicoArgs
  }

  // Custom InputTypes
  /**
   * EquipamentoCountOutputType without action
   */
  export type EquipamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipamentoCountOutputType
     */
    select?: EquipamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipamentoCountOutputType without action
   */
  export type EquipamentoCountOutputTypeCountOrdemservicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordemservicoWhereInput
  }


  /**
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    servicosfuncionario: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicosfuncionario?: boolean | FuncionarioCountOutputTypeCountServicosfuncionarioArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountServicosfuncionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicosfuncionarioWhereInput
  }


  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    ordemservico: number
    servicosfuncionario: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemservico?: boolean | ServicoCountOutputTypeCountOrdemservicoArgs
    servicosfuncionario?: boolean | ServicoCountOutputTypeCountServicosfuncionarioArgs
  }

  // Custom InputTypes
  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountOrdemservicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordemservicoWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountServicosfuncionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicosfuncionarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    idCliente: number | null
    Numero: number | null
  }

  export type ClienteSumAggregateOutputType = {
    idCliente: number | null
    Numero: number | null
  }

  export type ClienteMinAggregateOutputType = {
    idCliente: number | null
    Nome: string | null
    CPF_CNPJ: string | null
    EmailContato: string | null
    TelefoneContato: string | null
    Logradouro: string | null
    CEP: string | null
    Cidade: string | null
    Bairro: string | null
    Numero: number | null
    UF: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    idCliente: number | null
    Nome: string | null
    CPF_CNPJ: string | null
    EmailContato: string | null
    TelefoneContato: string | null
    Logradouro: string | null
    CEP: string | null
    Cidade: string | null
    Bairro: string | null
    Numero: number | null
    UF: string | null
  }

  export type ClienteCountAggregateOutputType = {
    idCliente: number
    Nome: number
    CPF_CNPJ: number
    EmailContato: number
    TelefoneContato: number
    Logradouro: number
    CEP: number
    Cidade: number
    Bairro: number
    Numero: number
    UF: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    idCliente?: true
    Numero?: true
  }

  export type ClienteSumAggregateInputType = {
    idCliente?: true
    Numero?: true
  }

  export type ClienteMinAggregateInputType = {
    idCliente?: true
    Nome?: true
    CPF_CNPJ?: true
    EmailContato?: true
    TelefoneContato?: true
    Logradouro?: true
    CEP?: true
    Cidade?: true
    Bairro?: true
    Numero?: true
    UF?: true
  }

  export type ClienteMaxAggregateInputType = {
    idCliente?: true
    Nome?: true
    CPF_CNPJ?: true
    EmailContato?: true
    TelefoneContato?: true
    Logradouro?: true
    CEP?: true
    Cidade?: true
    Bairro?: true
    Numero?: true
    UF?: true
  }

  export type ClienteCountAggregateInputType = {
    idCliente?: true
    Nome?: true
    CPF_CNPJ?: true
    EmailContato?: true
    TelefoneContato?: true
    Logradouro?: true
    CEP?: true
    Cidade?: true
    Bairro?: true
    Numero?: true
    UF?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    idCliente: number
    Nome: string
    CPF_CNPJ: string
    EmailContato: string | null
    TelefoneContato: string | null
    Logradouro: string | null
    CEP: string | null
    Cidade: string | null
    Bairro: string | null
    Numero: number | null
    UF: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCliente?: boolean
    Nome?: boolean
    CPF_CNPJ?: boolean
    EmailContato?: boolean
    TelefoneContato?: boolean
    Logradouro?: boolean
    CEP?: boolean
    Cidade?: boolean
    Bairro?: boolean
    Numero?: boolean
    UF?: boolean
    equipamento?: boolean | cliente$equipamentoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type clienteSelectScalar = {
    idCliente?: boolean
    Nome?: boolean
    CPF_CNPJ?: boolean
    EmailContato?: boolean
    TelefoneContato?: boolean
    Logradouro?: boolean
    CEP?: boolean
    Cidade?: boolean
    Bairro?: boolean
    Numero?: boolean
    UF?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCliente" | "Nome" | "CPF_CNPJ" | "EmailContato" | "TelefoneContato" | "Logradouro" | "CEP" | "Cidade" | "Bairro" | "Numero" | "UF", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipamento?: boolean | cliente$equipamentoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      equipamento: Prisma.$equipamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCliente: number
      Nome: string
      CPF_CNPJ: string
      EmailContato: string | null
      TelefoneContato: string | null
      Logradouro: string | null
      CEP: string | null
      Cidade: string | null
      Bairro: string | null
      Numero: number | null
      UF: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `idCliente`
     * const clienteWithIdClienteOnly = await prisma.cliente.findMany({ select: { idCliente: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
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
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipamento<T extends cliente$equipamentoArgs<ExtArgs> = {}>(args?: Subset<T, cliente$equipamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly idCliente: FieldRef<"cliente", 'Int'>
    readonly Nome: FieldRef<"cliente", 'String'>
    readonly CPF_CNPJ: FieldRef<"cliente", 'String'>
    readonly EmailContato: FieldRef<"cliente", 'String'>
    readonly TelefoneContato: FieldRef<"cliente", 'String'>
    readonly Logradouro: FieldRef<"cliente", 'String'>
    readonly CEP: FieldRef<"cliente", 'String'>
    readonly Cidade: FieldRef<"cliente", 'String'>
    readonly Bairro: FieldRef<"cliente", 'String'>
    readonly Numero: FieldRef<"cliente", 'Int'>
    readonly UF: FieldRef<"cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.equipamento
   */
  export type cliente$equipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    where?: equipamentoWhereInput
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    cursor?: equipamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model equipamento
   */

  export type AggregateEquipamento = {
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  export type EquipamentoAvgAggregateOutputType = {
    idEquipamento: number | null
    Cliente_idCliente: number | null
  }

  export type EquipamentoSumAggregateOutputType = {
    idEquipamento: number | null
    Cliente_idCliente: number | null
  }

  export type EquipamentoMinAggregateOutputType = {
    idEquipamento: number | null
    Nome: string | null
    Descricao: string | null
    Status: string | null
    Cliente_idCliente: number | null
  }

  export type EquipamentoMaxAggregateOutputType = {
    idEquipamento: number | null
    Nome: string | null
    Descricao: string | null
    Status: string | null
    Cliente_idCliente: number | null
  }

  export type EquipamentoCountAggregateOutputType = {
    idEquipamento: number
    Nome: number
    Descricao: number
    Status: number
    Cliente_idCliente: number
    _all: number
  }


  export type EquipamentoAvgAggregateInputType = {
    idEquipamento?: true
    Cliente_idCliente?: true
  }

  export type EquipamentoSumAggregateInputType = {
    idEquipamento?: true
    Cliente_idCliente?: true
  }

  export type EquipamentoMinAggregateInputType = {
    idEquipamento?: true
    Nome?: true
    Descricao?: true
    Status?: true
    Cliente_idCliente?: true
  }

  export type EquipamentoMaxAggregateInputType = {
    idEquipamento?: true
    Nome?: true
    Descricao?: true
    Status?: true
    Cliente_idCliente?: true
  }

  export type EquipamentoCountAggregateInputType = {
    idEquipamento?: true
    Nome?: true
    Descricao?: true
    Status?: true
    Cliente_idCliente?: true
    _all?: true
  }

  export type EquipamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipamento to aggregate.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned equipamentos
    **/
    _count?: true | EquipamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipamentoMaxAggregateInputType
  }

  export type GetEquipamentoAggregateType<T extends EquipamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipamento[P]>
      : GetScalarType<T[P], AggregateEquipamento[P]>
  }




  export type equipamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipamentoWhereInput
    orderBy?: equipamentoOrderByWithAggregationInput | equipamentoOrderByWithAggregationInput[]
    by: EquipamentoScalarFieldEnum[] | EquipamentoScalarFieldEnum
    having?: equipamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipamentoCountAggregateInputType | true
    _avg?: EquipamentoAvgAggregateInputType
    _sum?: EquipamentoSumAggregateInputType
    _min?: EquipamentoMinAggregateInputType
    _max?: EquipamentoMaxAggregateInputType
  }

  export type EquipamentoGroupByOutputType = {
    idEquipamento: number
    Nome: string | null
    Descricao: string | null
    Status: string | null
    Cliente_idCliente: number
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  type GetEquipamentoGroupByPayload<T extends equipamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
        }
      >
    >


  export type equipamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEquipamento?: boolean
    Nome?: boolean
    Descricao?: boolean
    Status?: boolean
    Cliente_idCliente?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    ordemservico?: boolean | equipamento$ordemservicoArgs<ExtArgs>
    _count?: boolean | EquipamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>



  export type equipamentoSelectScalar = {
    idEquipamento?: boolean
    Nome?: boolean
    Descricao?: boolean
    Status?: boolean
    Cliente_idCliente?: boolean
  }

  export type equipamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEquipamento" | "Nome" | "Descricao" | "Status" | "Cliente_idCliente", ExtArgs["result"]["equipamento"]>
  export type equipamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    ordemservico?: boolean | equipamento$ordemservicoArgs<ExtArgs>
    _count?: boolean | EquipamentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $equipamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "equipamento"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>
      ordemservico: Prisma.$ordemservicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idEquipamento: number
      Nome: string | null
      Descricao: string | null
      Status: string | null
      Cliente_idCliente: number
    }, ExtArgs["result"]["equipamento"]>
    composites: {}
  }

  type equipamentoGetPayload<S extends boolean | null | undefined | equipamentoDefaultArgs> = $Result.GetResult<Prisma.$equipamentoPayload, S>

  type equipamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<equipamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipamentoCountAggregateInputType | true
    }

  export interface equipamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipamento'], meta: { name: 'equipamento' } }
    /**
     * Find zero or one Equipamento that matches the filter.
     * @param {equipamentoFindUniqueArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends equipamentoFindUniqueArgs>(args: SelectSubset<T, equipamentoFindUniqueArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {equipamentoFindUniqueOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends equipamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, equipamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindFirstArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends equipamentoFindFirstArgs>(args?: SelectSubset<T, equipamentoFindFirstArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindFirstOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends equipamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, equipamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipamentos
     * const equipamentos = await prisma.equipamento.findMany()
     * 
     * // Get first 10 Equipamentos
     * const equipamentos = await prisma.equipamento.findMany({ take: 10 })
     * 
     * // Only select the `idEquipamento`
     * const equipamentoWithIdEquipamentoOnly = await prisma.equipamento.findMany({ select: { idEquipamento: true } })
     * 
     */
    findMany<T extends equipamentoFindManyArgs>(args?: SelectSubset<T, equipamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipamento.
     * @param {equipamentoCreateArgs} args - Arguments to create a Equipamento.
     * @example
     * // Create one Equipamento
     * const Equipamento = await prisma.equipamento.create({
     *   data: {
     *     // ... data to create a Equipamento
     *   }
     * })
     * 
     */
    create<T extends equipamentoCreateArgs>(args: SelectSubset<T, equipamentoCreateArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipamentos.
     * @param {equipamentoCreateManyArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends equipamentoCreateManyArgs>(args?: SelectSubset<T, equipamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Equipamento.
     * @param {equipamentoDeleteArgs} args - Arguments to delete one Equipamento.
     * @example
     * // Delete one Equipamento
     * const Equipamento = await prisma.equipamento.delete({
     *   where: {
     *     // ... filter to delete one Equipamento
     *   }
     * })
     * 
     */
    delete<T extends equipamentoDeleteArgs>(args: SelectSubset<T, equipamentoDeleteArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipamento.
     * @param {equipamentoUpdateArgs} args - Arguments to update one Equipamento.
     * @example
     * // Update one Equipamento
     * const equipamento = await prisma.equipamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends equipamentoUpdateArgs>(args: SelectSubset<T, equipamentoUpdateArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipamentos.
     * @param {equipamentoDeleteManyArgs} args - Arguments to filter Equipamentos to delete.
     * @example
     * // Delete a few Equipamentos
     * const { count } = await prisma.equipamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends equipamentoDeleteManyArgs>(args?: SelectSubset<T, equipamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends equipamentoUpdateManyArgs>(args: SelectSubset<T, equipamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipamento.
     * @param {equipamentoUpsertArgs} args - Arguments to update or create a Equipamento.
     * @example
     * // Update or create a Equipamento
     * const equipamento = await prisma.equipamento.upsert({
     *   create: {
     *     // ... data to create a Equipamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipamento we want to update
     *   }
     * })
     */
    upsert<T extends equipamentoUpsertArgs>(args: SelectSubset<T, equipamentoUpsertArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoCountArgs} args - Arguments to filter Equipamentos to count.
     * @example
     * // Count the number of Equipamentos
     * const count = await prisma.equipamento.count({
     *   where: {
     *     // ... the filter for the Equipamentos we want to count
     *   }
     * })
    **/
    count<T extends equipamentoCountArgs>(
      args?: Subset<T, equipamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipamentoAggregateArgs>(args: Subset<T, EquipamentoAggregateArgs>): Prisma.PrismaPromise<GetEquipamentoAggregateType<T>>

    /**
     * Group by Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoGroupByArgs} args - Group by arguments.
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
      T extends equipamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipamentoGroupByArgs['orderBy'] }
        : { orderBy?: equipamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, equipamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the equipamento model
   */
  readonly fields: equipamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ordemservico<T extends equipamento$ordemservicoArgs<ExtArgs> = {}>(args?: Subset<T, equipamento$ordemservicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the equipamento model
   */
  interface equipamentoFieldRefs {
    readonly idEquipamento: FieldRef<"equipamento", 'Int'>
    readonly Nome: FieldRef<"equipamento", 'String'>
    readonly Descricao: FieldRef<"equipamento", 'String'>
    readonly Status: FieldRef<"equipamento", 'String'>
    readonly Cliente_idCliente: FieldRef<"equipamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * equipamento findUnique
   */
  export type equipamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento findUniqueOrThrow
   */
  export type equipamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento findFirst
   */
  export type equipamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento findFirstOrThrow
   */
  export type equipamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento findMany
   */
  export type equipamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamentos to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento create
   */
  export type equipamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a equipamento.
     */
    data: XOR<equipamentoCreateInput, equipamentoUncheckedCreateInput>
  }

  /**
   * equipamento createMany
   */
  export type equipamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipamentos.
     */
    data: equipamentoCreateManyInput | equipamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * equipamento update
   */
  export type equipamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a equipamento.
     */
    data: XOR<equipamentoUpdateInput, equipamentoUncheckedUpdateInput>
    /**
     * Choose, which equipamento to update.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento updateMany
   */
  export type equipamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipamentos.
     */
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyInput>
    /**
     * Filter which equipamentos to update
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to update.
     */
    limit?: number
  }

  /**
   * equipamento upsert
   */
  export type equipamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the equipamento to update in case it exists.
     */
    where: equipamentoWhereUniqueInput
    /**
     * In case the equipamento found by the `where` argument doesn't exist, create a new equipamento with this data.
     */
    create: XOR<equipamentoCreateInput, equipamentoUncheckedCreateInput>
    /**
     * In case the equipamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipamentoUpdateInput, equipamentoUncheckedUpdateInput>
  }

  /**
   * equipamento delete
   */
  export type equipamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter which equipamento to delete.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento deleteMany
   */
  export type equipamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipamentos to delete
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to delete.
     */
    limit?: number
  }

  /**
   * equipamento.ordemservico
   */
  export type equipamento$ordemservicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    where?: ordemservicoWhereInput
    orderBy?: ordemservicoOrderByWithRelationInput | ordemservicoOrderByWithRelationInput[]
    cursor?: ordemservicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdemservicoScalarFieldEnum | OrdemservicoScalarFieldEnum[]
  }

  /**
   * equipamento without action
   */
  export type equipamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
  }


  /**
   * Model funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    idUsuario: number | null
    TipoUsuario: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    idUsuario: number | null
    TipoUsuario: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    idUsuario: number | null
    Nome: string | null
    Senha: string | null
    TipoUsuario: number | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    idUsuario: number | null
    Nome: string | null
    Senha: string | null
    TipoUsuario: number | null
  }

  export type FuncionarioCountAggregateOutputType = {
    idUsuario: number
    Nome: number
    Senha: number
    TipoUsuario: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    idUsuario?: true
    TipoUsuario?: true
  }

  export type FuncionarioSumAggregateInputType = {
    idUsuario?: true
    TipoUsuario?: true
  }

  export type FuncionarioMinAggregateInputType = {
    idUsuario?: true
    Nome?: true
    Senha?: true
    TipoUsuario?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    idUsuario?: true
    Nome?: true
    Senha?: true
    TipoUsuario?: true
  }

  export type FuncionarioCountAggregateInputType = {
    idUsuario?: true
    Nome?: true
    Senha?: true
    TipoUsuario?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionario to aggregate.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type funcionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithAggregationInput | funcionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: funcionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    idUsuario: number
    Nome: string
    Senha: string
    TipoUsuario: number
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends funcionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type funcionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    Nome?: boolean
    Senha?: boolean
    TipoUsuario?: boolean
    servicosfuncionario?: boolean | funcionario$servicosfuncionarioArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>



  export type funcionarioSelectScalar = {
    idUsuario?: boolean
    Nome?: boolean
    Senha?: boolean
    TipoUsuario?: boolean
  }

  export type funcionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUsuario" | "Nome" | "Senha" | "TipoUsuario", ExtArgs["result"]["funcionario"]>
  export type funcionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicosfuncionario?: boolean | funcionario$servicosfuncionarioArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $funcionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funcionario"
    objects: {
      servicosfuncionario: Prisma.$servicosfuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUsuario: number
      Nome: string
      Senha: string
      TipoUsuario: number
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type funcionarioGetPayload<S extends boolean | null | undefined | funcionarioDefaultArgs> = $Result.GetResult<Prisma.$funcionarioPayload, S>

  type funcionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funcionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface funcionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funcionario'], meta: { name: 'funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {funcionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funcionarioFindUniqueArgs>(args: SelectSubset<T, funcionarioFindUniqueArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funcionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funcionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, funcionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funcionarioFindFirstArgs>(args?: SelectSubset<T, funcionarioFindFirstArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funcionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, funcionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `idUsuario`
     * const funcionarioWithIdUsuarioOnly = await prisma.funcionario.findMany({ select: { idUsuario: true } })
     * 
     */
    findMany<T extends funcionarioFindManyArgs>(args?: SelectSubset<T, funcionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {funcionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends funcionarioCreateArgs>(args: SelectSubset<T, funcionarioCreateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {funcionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funcionarioCreateManyArgs>(args?: SelectSubset<T, funcionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionario.
     * @param {funcionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends funcionarioDeleteArgs>(args: SelectSubset<T, funcionarioDeleteArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {funcionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funcionarioUpdateArgs>(args: SelectSubset<T, funcionarioUpdateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {funcionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funcionarioDeleteManyArgs>(args?: SelectSubset<T, funcionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funcionarioUpdateManyArgs>(args: SelectSubset<T, funcionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {funcionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends funcionarioUpsertArgs>(args: SelectSubset<T, funcionarioUpsertArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends funcionarioCountArgs>(
      args?: Subset<T, funcionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioGroupByArgs} args - Group by arguments.
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
      T extends funcionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funcionarioGroupByArgs['orderBy'] }
        : { orderBy?: funcionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, funcionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funcionario model
   */
  readonly fields: funcionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funcionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicosfuncionario<T extends funcionario$servicosfuncionarioArgs<ExtArgs> = {}>(args?: Subset<T, funcionario$servicosfuncionarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the funcionario model
   */
  interface funcionarioFieldRefs {
    readonly idUsuario: FieldRef<"funcionario", 'Int'>
    readonly Nome: FieldRef<"funcionario", 'String'>
    readonly Senha: FieldRef<"funcionario", 'String'>
    readonly TipoUsuario: FieldRef<"funcionario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * funcionario findUnique
   */
  export type funcionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findUniqueOrThrow
   */
  export type funcionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findFirst
   */
  export type funcionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findFirstOrThrow
   */
  export type funcionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findMany
   */
  export type funcionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario create
   */
  export type funcionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a funcionario.
     */
    data: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
  }

  /**
   * funcionario createMany
   */
  export type funcionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funcionario update
   */
  export type funcionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a funcionario.
     */
    data: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
    /**
     * Choose, which funcionario to update.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario updateMany
   */
  export type funcionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
  }

  /**
   * funcionario upsert
   */
  export type funcionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the funcionario to update in case it exists.
     */
    where: funcionarioWhereUniqueInput
    /**
     * In case the funcionario found by the `where` argument doesn't exist, create a new funcionario with this data.
     */
    create: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
    /**
     * In case the funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
  }

  /**
   * funcionario delete
   */
  export type funcionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter which funcionario to delete.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario deleteMany
   */
  export type funcionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to delete
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to delete.
     */
    limit?: number
  }

  /**
   * funcionario.servicosfuncionario
   */
  export type funcionario$servicosfuncionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    where?: servicosfuncionarioWhereInput
    orderBy?: servicosfuncionarioOrderByWithRelationInput | servicosfuncionarioOrderByWithRelationInput[]
    cursor?: servicosfuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicosfuncionarioScalarFieldEnum | ServicosfuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario without action
   */
  export type funcionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
  }


  /**
   * Model ordemservico
   */

  export type AggregateOrdemservico = {
    _count: OrdemservicoCountAggregateOutputType | null
    _avg: OrdemservicoAvgAggregateOutputType | null
    _sum: OrdemservicoSumAggregateOutputType | null
    _min: OrdemservicoMinAggregateOutputType | null
    _max: OrdemservicoMaxAggregateOutputType | null
  }

  export type OrdemservicoAvgAggregateOutputType = {
    idOrdemServico: number | null
    Equipamento_idEquipamento: number | null
    Servico_idServico: number | null
  }

  export type OrdemservicoSumAggregateOutputType = {
    idOrdemServico: number | null
    Equipamento_idEquipamento: number | null
    Servico_idServico: number | null
  }

  export type OrdemservicoMinAggregateOutputType = {
    idOrdemServico: number | null
    Equipamento_idEquipamento: number | null
    Servico_idServico: number | null
  }

  export type OrdemservicoMaxAggregateOutputType = {
    idOrdemServico: number | null
    Equipamento_idEquipamento: number | null
    Servico_idServico: number | null
  }

  export type OrdemservicoCountAggregateOutputType = {
    idOrdemServico: number
    Equipamento_idEquipamento: number
    Servico_idServico: number
    _all: number
  }


  export type OrdemservicoAvgAggregateInputType = {
    idOrdemServico?: true
    Equipamento_idEquipamento?: true
    Servico_idServico?: true
  }

  export type OrdemservicoSumAggregateInputType = {
    idOrdemServico?: true
    Equipamento_idEquipamento?: true
    Servico_idServico?: true
  }

  export type OrdemservicoMinAggregateInputType = {
    idOrdemServico?: true
    Equipamento_idEquipamento?: true
    Servico_idServico?: true
  }

  export type OrdemservicoMaxAggregateInputType = {
    idOrdemServico?: true
    Equipamento_idEquipamento?: true
    Servico_idServico?: true
  }

  export type OrdemservicoCountAggregateInputType = {
    idOrdemServico?: true
    Equipamento_idEquipamento?: true
    Servico_idServico?: true
    _all?: true
  }

  export type OrdemservicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ordemservico to aggregate.
     */
    where?: ordemservicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordemservicos to fetch.
     */
    orderBy?: ordemservicoOrderByWithRelationInput | ordemservicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordemservicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordemservicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordemservicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ordemservicos
    **/
    _count?: true | OrdemservicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdemservicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdemservicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdemservicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdemservicoMaxAggregateInputType
  }

  export type GetOrdemservicoAggregateType<T extends OrdemservicoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdemservico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdemservico[P]>
      : GetScalarType<T[P], AggregateOrdemservico[P]>
  }




  export type ordemservicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordemservicoWhereInput
    orderBy?: ordemservicoOrderByWithAggregationInput | ordemservicoOrderByWithAggregationInput[]
    by: OrdemservicoScalarFieldEnum[] | OrdemservicoScalarFieldEnum
    having?: ordemservicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdemservicoCountAggregateInputType | true
    _avg?: OrdemservicoAvgAggregateInputType
    _sum?: OrdemservicoSumAggregateInputType
    _min?: OrdemservicoMinAggregateInputType
    _max?: OrdemservicoMaxAggregateInputType
  }

  export type OrdemservicoGroupByOutputType = {
    idOrdemServico: number
    Equipamento_idEquipamento: number
    Servico_idServico: number
    _count: OrdemservicoCountAggregateOutputType | null
    _avg: OrdemservicoAvgAggregateOutputType | null
    _sum: OrdemservicoSumAggregateOutputType | null
    _min: OrdemservicoMinAggregateOutputType | null
    _max: OrdemservicoMaxAggregateOutputType | null
  }

  type GetOrdemservicoGroupByPayload<T extends ordemservicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdemservicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdemservicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdemservicoGroupByOutputType[P]>
            : GetScalarType<T[P], OrdemservicoGroupByOutputType[P]>
        }
      >
    >


  export type ordemservicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idOrdemServico?: boolean
    Equipamento_idEquipamento?: boolean
    Servico_idServico?: boolean
    equipamento?: boolean | equipamentoDefaultArgs<ExtArgs>
    servico?: boolean | servicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordemservico"]>



  export type ordemservicoSelectScalar = {
    idOrdemServico?: boolean
    Equipamento_idEquipamento?: boolean
    Servico_idServico?: boolean
  }

  export type ordemservicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idOrdemServico" | "Equipamento_idEquipamento" | "Servico_idServico", ExtArgs["result"]["ordemservico"]>
  export type ordemservicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipamento?: boolean | equipamentoDefaultArgs<ExtArgs>
    servico?: boolean | servicoDefaultArgs<ExtArgs>
  }

  export type $ordemservicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ordemservico"
    objects: {
      equipamento: Prisma.$equipamentoPayload<ExtArgs>
      servico: Prisma.$servicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idOrdemServico: number
      Equipamento_idEquipamento: number
      Servico_idServico: number
    }, ExtArgs["result"]["ordemservico"]>
    composites: {}
  }

  type ordemservicoGetPayload<S extends boolean | null | undefined | ordemservicoDefaultArgs> = $Result.GetResult<Prisma.$ordemservicoPayload, S>

  type ordemservicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordemservicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdemservicoCountAggregateInputType | true
    }

  export interface ordemservicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ordemservico'], meta: { name: 'ordemservico' } }
    /**
     * Find zero or one Ordemservico that matches the filter.
     * @param {ordemservicoFindUniqueArgs} args - Arguments to find a Ordemservico
     * @example
     * // Get one Ordemservico
     * const ordemservico = await prisma.ordemservico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordemservicoFindUniqueArgs>(args: SelectSubset<T, ordemservicoFindUniqueArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ordemservico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordemservicoFindUniqueOrThrowArgs} args - Arguments to find a Ordemservico
     * @example
     * // Get one Ordemservico
     * const ordemservico = await prisma.ordemservico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordemservicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ordemservicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ordemservico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordemservicoFindFirstArgs} args - Arguments to find a Ordemservico
     * @example
     * // Get one Ordemservico
     * const ordemservico = await prisma.ordemservico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordemservicoFindFirstArgs>(args?: SelectSubset<T, ordemservicoFindFirstArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ordemservico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordemservicoFindFirstOrThrowArgs} args - Arguments to find a Ordemservico
     * @example
     * // Get one Ordemservico
     * const ordemservico = await prisma.ordemservico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordemservicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ordemservicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ordemservicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordemservicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ordemservicos
     * const ordemservicos = await prisma.ordemservico.findMany()
     * 
     * // Get first 10 Ordemservicos
     * const ordemservicos = await prisma.ordemservico.findMany({ take: 10 })
     * 
     * // Only select the `idOrdemServico`
     * const ordemservicoWithIdOrdemServicoOnly = await prisma.ordemservico.findMany({ select: { idOrdemServico: true } })
     * 
     */
    findMany<T extends ordemservicoFindManyArgs>(args?: SelectSubset<T, ordemservicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ordemservico.
     * @param {ordemservicoCreateArgs} args - Arguments to create a Ordemservico.
     * @example
     * // Create one Ordemservico
     * const Ordemservico = await prisma.ordemservico.create({
     *   data: {
     *     // ... data to create a Ordemservico
     *   }
     * })
     * 
     */
    create<T extends ordemservicoCreateArgs>(args: SelectSubset<T, ordemservicoCreateArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ordemservicos.
     * @param {ordemservicoCreateManyArgs} args - Arguments to create many Ordemservicos.
     * @example
     * // Create many Ordemservicos
     * const ordemservico = await prisma.ordemservico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordemservicoCreateManyArgs>(args?: SelectSubset<T, ordemservicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ordemservico.
     * @param {ordemservicoDeleteArgs} args - Arguments to delete one Ordemservico.
     * @example
     * // Delete one Ordemservico
     * const Ordemservico = await prisma.ordemservico.delete({
     *   where: {
     *     // ... filter to delete one Ordemservico
     *   }
     * })
     * 
     */
    delete<T extends ordemservicoDeleteArgs>(args: SelectSubset<T, ordemservicoDeleteArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ordemservico.
     * @param {ordemservicoUpdateArgs} args - Arguments to update one Ordemservico.
     * @example
     * // Update one Ordemservico
     * const ordemservico = await prisma.ordemservico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordemservicoUpdateArgs>(args: SelectSubset<T, ordemservicoUpdateArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ordemservicos.
     * @param {ordemservicoDeleteManyArgs} args - Arguments to filter Ordemservicos to delete.
     * @example
     * // Delete a few Ordemservicos
     * const { count } = await prisma.ordemservico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordemservicoDeleteManyArgs>(args?: SelectSubset<T, ordemservicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordemservicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordemservicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ordemservicos
     * const ordemservico = await prisma.ordemservico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordemservicoUpdateManyArgs>(args: SelectSubset<T, ordemservicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ordemservico.
     * @param {ordemservicoUpsertArgs} args - Arguments to update or create a Ordemservico.
     * @example
     * // Update or create a Ordemservico
     * const ordemservico = await prisma.ordemservico.upsert({
     *   create: {
     *     // ... data to create a Ordemservico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ordemservico we want to update
     *   }
     * })
     */
    upsert<T extends ordemservicoUpsertArgs>(args: SelectSubset<T, ordemservicoUpsertArgs<ExtArgs>>): Prisma__ordemservicoClient<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ordemservicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordemservicoCountArgs} args - Arguments to filter Ordemservicos to count.
     * @example
     * // Count the number of Ordemservicos
     * const count = await prisma.ordemservico.count({
     *   where: {
     *     // ... the filter for the Ordemservicos we want to count
     *   }
     * })
    **/
    count<T extends ordemservicoCountArgs>(
      args?: Subset<T, ordemservicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdemservicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ordemservico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemservicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdemservicoAggregateArgs>(args: Subset<T, OrdemservicoAggregateArgs>): Prisma.PrismaPromise<GetOrdemservicoAggregateType<T>>

    /**
     * Group by Ordemservico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordemservicoGroupByArgs} args - Group by arguments.
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
      T extends ordemservicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordemservicoGroupByArgs['orderBy'] }
        : { orderBy?: ordemservicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordemservicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdemservicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ordemservico model
   */
  readonly fields: ordemservicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ordemservico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordemservicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipamento<T extends equipamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, equipamentoDefaultArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servico<T extends servicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicoDefaultArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ordemservico model
   */
  interface ordemservicoFieldRefs {
    readonly idOrdemServico: FieldRef<"ordemservico", 'Int'>
    readonly Equipamento_idEquipamento: FieldRef<"ordemservico", 'Int'>
    readonly Servico_idServico: FieldRef<"ordemservico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ordemservico findUnique
   */
  export type ordemservicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * Filter, which ordemservico to fetch.
     */
    where: ordemservicoWhereUniqueInput
  }

  /**
   * ordemservico findUniqueOrThrow
   */
  export type ordemservicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * Filter, which ordemservico to fetch.
     */
    where: ordemservicoWhereUniqueInput
  }

  /**
   * ordemservico findFirst
   */
  export type ordemservicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * Filter, which ordemservico to fetch.
     */
    where?: ordemservicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordemservicos to fetch.
     */
    orderBy?: ordemservicoOrderByWithRelationInput | ordemservicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ordemservicos.
     */
    cursor?: ordemservicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordemservicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordemservicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ordemservicos.
     */
    distinct?: OrdemservicoScalarFieldEnum | OrdemservicoScalarFieldEnum[]
  }

  /**
   * ordemservico findFirstOrThrow
   */
  export type ordemservicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * Filter, which ordemservico to fetch.
     */
    where?: ordemservicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordemservicos to fetch.
     */
    orderBy?: ordemservicoOrderByWithRelationInput | ordemservicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ordemservicos.
     */
    cursor?: ordemservicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordemservicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordemservicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ordemservicos.
     */
    distinct?: OrdemservicoScalarFieldEnum | OrdemservicoScalarFieldEnum[]
  }

  /**
   * ordemservico findMany
   */
  export type ordemservicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * Filter, which ordemservicos to fetch.
     */
    where?: ordemservicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ordemservicos to fetch.
     */
    orderBy?: ordemservicoOrderByWithRelationInput | ordemservicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ordemservicos.
     */
    cursor?: ordemservicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ordemservicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ordemservicos.
     */
    skip?: number
    distinct?: OrdemservicoScalarFieldEnum | OrdemservicoScalarFieldEnum[]
  }

  /**
   * ordemservico create
   */
  export type ordemservicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * The data needed to create a ordemservico.
     */
    data: XOR<ordemservicoCreateInput, ordemservicoUncheckedCreateInput>
  }

  /**
   * ordemservico createMany
   */
  export type ordemservicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ordemservicos.
     */
    data: ordemservicoCreateManyInput | ordemservicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ordemservico update
   */
  export type ordemservicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * The data needed to update a ordemservico.
     */
    data: XOR<ordemservicoUpdateInput, ordemservicoUncheckedUpdateInput>
    /**
     * Choose, which ordemservico to update.
     */
    where: ordemservicoWhereUniqueInput
  }

  /**
   * ordemservico updateMany
   */
  export type ordemservicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ordemservicos.
     */
    data: XOR<ordemservicoUpdateManyMutationInput, ordemservicoUncheckedUpdateManyInput>
    /**
     * Filter which ordemservicos to update
     */
    where?: ordemservicoWhereInput
    /**
     * Limit how many ordemservicos to update.
     */
    limit?: number
  }

  /**
   * ordemservico upsert
   */
  export type ordemservicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * The filter to search for the ordemservico to update in case it exists.
     */
    where: ordemservicoWhereUniqueInput
    /**
     * In case the ordemservico found by the `where` argument doesn't exist, create a new ordemservico with this data.
     */
    create: XOR<ordemservicoCreateInput, ordemservicoUncheckedCreateInput>
    /**
     * In case the ordemservico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordemservicoUpdateInput, ordemservicoUncheckedUpdateInput>
  }

  /**
   * ordemservico delete
   */
  export type ordemservicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    /**
     * Filter which ordemservico to delete.
     */
    where: ordemservicoWhereUniqueInput
  }

  /**
   * ordemservico deleteMany
   */
  export type ordemservicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ordemservicos to delete
     */
    where?: ordemservicoWhereInput
    /**
     * Limit how many ordemservicos to delete.
     */
    limit?: number
  }

  /**
   * ordemservico without action
   */
  export type ordemservicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
  }


  /**
   * Model servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    idServico: number | null
  }

  export type ServicoSumAggregateOutputType = {
    idServico: number | null
  }

  export type ServicoMinAggregateOutputType = {
    idServico: number | null
    TipoServico: string | null
    DataInicio: Date | null
    DataFim: Date | null
    Status: string | null
    Setor: string | null
  }

  export type ServicoMaxAggregateOutputType = {
    idServico: number | null
    TipoServico: string | null
    DataInicio: Date | null
    DataFim: Date | null
    Status: string | null
    Setor: string | null
  }

  export type ServicoCountAggregateOutputType = {
    idServico: number
    TipoServico: number
    DataInicio: number
    DataFim: number
    Status: number
    Setor: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    idServico?: true
  }

  export type ServicoSumAggregateInputType = {
    idServico?: true
  }

  export type ServicoMinAggregateInputType = {
    idServico?: true
    TipoServico?: true
    DataInicio?: true
    DataFim?: true
    Status?: true
    Setor?: true
  }

  export type ServicoMaxAggregateInputType = {
    idServico?: true
    TipoServico?: true
    DataInicio?: true
    DataFim?: true
    Status?: true
    Setor?: true
  }

  export type ServicoCountAggregateInputType = {
    idServico?: true
    TipoServico?: true
    DataInicio?: true
    DataFim?: true
    Status?: true
    Setor?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servico to aggregate.
     */
    where?: servicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicoOrderByWithRelationInput | servicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type servicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicoWhereInput
    orderBy?: servicoOrderByWithAggregationInput | servicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: servicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    idServico: number
    TipoServico: string | null
    DataInicio: Date | null
    DataFim: Date | null
    Status: string | null
    Setor: string | null
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends servicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type servicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idServico?: boolean
    TipoServico?: boolean
    DataInicio?: boolean
    DataFim?: boolean
    Status?: boolean
    Setor?: boolean
    ordemservico?: boolean | servico$ordemservicoArgs<ExtArgs>
    servicosfuncionario?: boolean | servico$servicosfuncionarioArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>



  export type servicoSelectScalar = {
    idServico?: boolean
    TipoServico?: boolean
    DataInicio?: boolean
    DataFim?: boolean
    Status?: boolean
    Setor?: boolean
  }

  export type servicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idServico" | "TipoServico" | "DataInicio" | "DataFim" | "Status" | "Setor", ExtArgs["result"]["servico"]>
  export type servicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemservico?: boolean | servico$ordemservicoArgs<ExtArgs>
    servicosfuncionario?: boolean | servico$servicosfuncionarioArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $servicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servico"
    objects: {
      ordemservico: Prisma.$ordemservicoPayload<ExtArgs>[]
      servicosfuncionario: Prisma.$servicosfuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idServico: number
      TipoServico: string | null
      DataInicio: Date | null
      DataFim: Date | null
      Status: string | null
      Setor: string | null
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type servicoGetPayload<S extends boolean | null | undefined | servicoDefaultArgs> = $Result.GetResult<Prisma.$servicoPayload, S>

  type servicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface servicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servico'], meta: { name: 'servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {servicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicoFindUniqueArgs>(args: SelectSubset<T, servicoFindUniqueArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicoFindUniqueOrThrowArgs>(args: SelectSubset<T, servicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicoFindFirstArgs>(args?: SelectSubset<T, servicoFindFirstArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicoFindFirstOrThrowArgs>(args?: SelectSubset<T, servicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `idServico`
     * const servicoWithIdServicoOnly = await prisma.servico.findMany({ select: { idServico: true } })
     * 
     */
    findMany<T extends servicoFindManyArgs>(args?: SelectSubset<T, servicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {servicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends servicoCreateArgs>(args: SelectSubset<T, servicoCreateArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {servicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicoCreateManyArgs>(args?: SelectSubset<T, servicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servico.
     * @param {servicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends servicoDeleteArgs>(args: SelectSubset<T, servicoDeleteArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {servicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicoUpdateArgs>(args: SelectSubset<T, servicoUpdateArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {servicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicoDeleteManyArgs>(args?: SelectSubset<T, servicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicoUpdateManyArgs>(args: SelectSubset<T, servicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servico.
     * @param {servicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends servicoUpsertArgs>(args: SelectSubset<T, servicoUpsertArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends servicoCountArgs>(
      args?: Subset<T, servicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicoGroupByArgs} args - Group by arguments.
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
      T extends servicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicoGroupByArgs['orderBy'] }
        : { orderBy?: servicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servico model
   */
  readonly fields: servicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordemservico<T extends servico$ordemservicoArgs<ExtArgs> = {}>(args?: Subset<T, servico$ordemservicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordemservicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicosfuncionario<T extends servico$servicosfuncionarioArgs<ExtArgs> = {}>(args?: Subset<T, servico$servicosfuncionarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the servico model
   */
  interface servicoFieldRefs {
    readonly idServico: FieldRef<"servico", 'Int'>
    readonly TipoServico: FieldRef<"servico", 'String'>
    readonly DataInicio: FieldRef<"servico", 'DateTime'>
    readonly DataFim: FieldRef<"servico", 'DateTime'>
    readonly Status: FieldRef<"servico", 'String'>
    readonly Setor: FieldRef<"servico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * servico findUnique
   */
  export type servicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * Filter, which servico to fetch.
     */
    where: servicoWhereUniqueInput
  }

  /**
   * servico findUniqueOrThrow
   */
  export type servicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * Filter, which servico to fetch.
     */
    where: servicoWhereUniqueInput
  }

  /**
   * servico findFirst
   */
  export type servicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * Filter, which servico to fetch.
     */
    where?: servicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicoOrderByWithRelationInput | servicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicos.
     */
    cursor?: servicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * servico findFirstOrThrow
   */
  export type servicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * Filter, which servico to fetch.
     */
    where?: servicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicoOrderByWithRelationInput | servicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicos.
     */
    cursor?: servicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * servico findMany
   */
  export type servicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * Filter, which servicos to fetch.
     */
    where?: servicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicoOrderByWithRelationInput | servicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicos.
     */
    cursor?: servicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * servico create
   */
  export type servicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * The data needed to create a servico.
     */
    data?: XOR<servicoCreateInput, servicoUncheckedCreateInput>
  }

  /**
   * servico createMany
   */
  export type servicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicos.
     */
    data: servicoCreateManyInput | servicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servico update
   */
  export type servicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * The data needed to update a servico.
     */
    data: XOR<servicoUpdateInput, servicoUncheckedUpdateInput>
    /**
     * Choose, which servico to update.
     */
    where: servicoWhereUniqueInput
  }

  /**
   * servico updateMany
   */
  export type servicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicos.
     */
    data: XOR<servicoUpdateManyMutationInput, servicoUncheckedUpdateManyInput>
    /**
     * Filter which servicos to update
     */
    where?: servicoWhereInput
    /**
     * Limit how many servicos to update.
     */
    limit?: number
  }

  /**
   * servico upsert
   */
  export type servicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * The filter to search for the servico to update in case it exists.
     */
    where: servicoWhereUniqueInput
    /**
     * In case the servico found by the `where` argument doesn't exist, create a new servico with this data.
     */
    create: XOR<servicoCreateInput, servicoUncheckedCreateInput>
    /**
     * In case the servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicoUpdateInput, servicoUncheckedUpdateInput>
  }

  /**
   * servico delete
   */
  export type servicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
    /**
     * Filter which servico to delete.
     */
    where: servicoWhereUniqueInput
  }

  /**
   * servico deleteMany
   */
  export type servicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicos to delete
     */
    where?: servicoWhereInput
    /**
     * Limit how many servicos to delete.
     */
    limit?: number
  }

  /**
   * servico.ordemservico
   */
  export type servico$ordemservicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ordemservico
     */
    select?: ordemservicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ordemservico
     */
    omit?: ordemservicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordemservicoInclude<ExtArgs> | null
    where?: ordemservicoWhereInput
    orderBy?: ordemservicoOrderByWithRelationInput | ordemservicoOrderByWithRelationInput[]
    cursor?: ordemservicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdemservicoScalarFieldEnum | OrdemservicoScalarFieldEnum[]
  }

  /**
   * servico.servicosfuncionario
   */
  export type servico$servicosfuncionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    where?: servicosfuncionarioWhereInput
    orderBy?: servicosfuncionarioOrderByWithRelationInput | servicosfuncionarioOrderByWithRelationInput[]
    cursor?: servicosfuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicosfuncionarioScalarFieldEnum | ServicosfuncionarioScalarFieldEnum[]
  }

  /**
   * servico without action
   */
  export type servicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servico
     */
    select?: servicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servico
     */
    omit?: servicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicoInclude<ExtArgs> | null
  }


  /**
   * Model servicosfuncionario
   */

  export type AggregateServicosfuncionario = {
    _count: ServicosfuncionarioCountAggregateOutputType | null
    _avg: ServicosfuncionarioAvgAggregateOutputType | null
    _sum: ServicosfuncionarioSumAggregateOutputType | null
    _min: ServicosfuncionarioMinAggregateOutputType | null
    _max: ServicosfuncionarioMaxAggregateOutputType | null
  }

  export type ServicosfuncionarioAvgAggregateOutputType = {
    idServicosFuncionario: number | null
    Funcionario_idUsuario: number | null
    Servico_idServico: number | null
  }

  export type ServicosfuncionarioSumAggregateOutputType = {
    idServicosFuncionario: number | null
    Funcionario_idUsuario: number | null
    Servico_idServico: number | null
  }

  export type ServicosfuncionarioMinAggregateOutputType = {
    idServicosFuncionario: number | null
    Funcionario_idUsuario: number | null
    Servico_idServico: number | null
  }

  export type ServicosfuncionarioMaxAggregateOutputType = {
    idServicosFuncionario: number | null
    Funcionario_idUsuario: number | null
    Servico_idServico: number | null
  }

  export type ServicosfuncionarioCountAggregateOutputType = {
    idServicosFuncionario: number
    Funcionario_idUsuario: number
    Servico_idServico: number
    _all: number
  }


  export type ServicosfuncionarioAvgAggregateInputType = {
    idServicosFuncionario?: true
    Funcionario_idUsuario?: true
    Servico_idServico?: true
  }

  export type ServicosfuncionarioSumAggregateInputType = {
    idServicosFuncionario?: true
    Funcionario_idUsuario?: true
    Servico_idServico?: true
  }

  export type ServicosfuncionarioMinAggregateInputType = {
    idServicosFuncionario?: true
    Funcionario_idUsuario?: true
    Servico_idServico?: true
  }

  export type ServicosfuncionarioMaxAggregateInputType = {
    idServicosFuncionario?: true
    Funcionario_idUsuario?: true
    Servico_idServico?: true
  }

  export type ServicosfuncionarioCountAggregateInputType = {
    idServicosFuncionario?: true
    Funcionario_idUsuario?: true
    Servico_idServico?: true
    _all?: true
  }

  export type ServicosfuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicosfuncionario to aggregate.
     */
    where?: servicosfuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosfuncionarios to fetch.
     */
    orderBy?: servicosfuncionarioOrderByWithRelationInput | servicosfuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicosfuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosfuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosfuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicosfuncionarios
    **/
    _count?: true | ServicosfuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicosfuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicosfuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicosfuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicosfuncionarioMaxAggregateInputType
  }

  export type GetServicosfuncionarioAggregateType<T extends ServicosfuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicosfuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicosfuncionario[P]>
      : GetScalarType<T[P], AggregateServicosfuncionario[P]>
  }




  export type servicosfuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicosfuncionarioWhereInput
    orderBy?: servicosfuncionarioOrderByWithAggregationInput | servicosfuncionarioOrderByWithAggregationInput[]
    by: ServicosfuncionarioScalarFieldEnum[] | ServicosfuncionarioScalarFieldEnum
    having?: servicosfuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicosfuncionarioCountAggregateInputType | true
    _avg?: ServicosfuncionarioAvgAggregateInputType
    _sum?: ServicosfuncionarioSumAggregateInputType
    _min?: ServicosfuncionarioMinAggregateInputType
    _max?: ServicosfuncionarioMaxAggregateInputType
  }

  export type ServicosfuncionarioGroupByOutputType = {
    idServicosFuncionario: number
    Funcionario_idUsuario: number
    Servico_idServico: number
    _count: ServicosfuncionarioCountAggregateOutputType | null
    _avg: ServicosfuncionarioAvgAggregateOutputType | null
    _sum: ServicosfuncionarioSumAggregateOutputType | null
    _min: ServicosfuncionarioMinAggregateOutputType | null
    _max: ServicosfuncionarioMaxAggregateOutputType | null
  }

  type GetServicosfuncionarioGroupByPayload<T extends servicosfuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicosfuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicosfuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicosfuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicosfuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type servicosfuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idServicosFuncionario?: boolean
    Funcionario_idUsuario?: boolean
    Servico_idServico?: boolean
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    servico?: boolean | servicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicosfuncionario"]>



  export type servicosfuncionarioSelectScalar = {
    idServicosFuncionario?: boolean
    Funcionario_idUsuario?: boolean
    Servico_idServico?: boolean
  }

  export type servicosfuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idServicosFuncionario" | "Funcionario_idUsuario" | "Servico_idServico", ExtArgs["result"]["servicosfuncionario"]>
  export type servicosfuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    servico?: boolean | servicoDefaultArgs<ExtArgs>
  }

  export type $servicosfuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicosfuncionario"
    objects: {
      funcionario: Prisma.$funcionarioPayload<ExtArgs>
      servico: Prisma.$servicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idServicosFuncionario: number
      Funcionario_idUsuario: number
      Servico_idServico: number
    }, ExtArgs["result"]["servicosfuncionario"]>
    composites: {}
  }

  type servicosfuncionarioGetPayload<S extends boolean | null | undefined | servicosfuncionarioDefaultArgs> = $Result.GetResult<Prisma.$servicosfuncionarioPayload, S>

  type servicosfuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicosfuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicosfuncionarioCountAggregateInputType | true
    }

  export interface servicosfuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicosfuncionario'], meta: { name: 'servicosfuncionario' } }
    /**
     * Find zero or one Servicosfuncionario that matches the filter.
     * @param {servicosfuncionarioFindUniqueArgs} args - Arguments to find a Servicosfuncionario
     * @example
     * // Get one Servicosfuncionario
     * const servicosfuncionario = await prisma.servicosfuncionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicosfuncionarioFindUniqueArgs>(args: SelectSubset<T, servicosfuncionarioFindUniqueArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicosfuncionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicosfuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Servicosfuncionario
     * @example
     * // Get one Servicosfuncionario
     * const servicosfuncionario = await prisma.servicosfuncionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicosfuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, servicosfuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicosfuncionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosfuncionarioFindFirstArgs} args - Arguments to find a Servicosfuncionario
     * @example
     * // Get one Servicosfuncionario
     * const servicosfuncionario = await prisma.servicosfuncionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicosfuncionarioFindFirstArgs>(args?: SelectSubset<T, servicosfuncionarioFindFirstArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicosfuncionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosfuncionarioFindFirstOrThrowArgs} args - Arguments to find a Servicosfuncionario
     * @example
     * // Get one Servicosfuncionario
     * const servicosfuncionario = await prisma.servicosfuncionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicosfuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, servicosfuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicosfuncionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosfuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicosfuncionarios
     * const servicosfuncionarios = await prisma.servicosfuncionario.findMany()
     * 
     * // Get first 10 Servicosfuncionarios
     * const servicosfuncionarios = await prisma.servicosfuncionario.findMany({ take: 10 })
     * 
     * // Only select the `idServicosFuncionario`
     * const servicosfuncionarioWithIdServicosFuncionarioOnly = await prisma.servicosfuncionario.findMany({ select: { idServicosFuncionario: true } })
     * 
     */
    findMany<T extends servicosfuncionarioFindManyArgs>(args?: SelectSubset<T, servicosfuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicosfuncionario.
     * @param {servicosfuncionarioCreateArgs} args - Arguments to create a Servicosfuncionario.
     * @example
     * // Create one Servicosfuncionario
     * const Servicosfuncionario = await prisma.servicosfuncionario.create({
     *   data: {
     *     // ... data to create a Servicosfuncionario
     *   }
     * })
     * 
     */
    create<T extends servicosfuncionarioCreateArgs>(args: SelectSubset<T, servicosfuncionarioCreateArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicosfuncionarios.
     * @param {servicosfuncionarioCreateManyArgs} args - Arguments to create many Servicosfuncionarios.
     * @example
     * // Create many Servicosfuncionarios
     * const servicosfuncionario = await prisma.servicosfuncionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicosfuncionarioCreateManyArgs>(args?: SelectSubset<T, servicosfuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicosfuncionario.
     * @param {servicosfuncionarioDeleteArgs} args - Arguments to delete one Servicosfuncionario.
     * @example
     * // Delete one Servicosfuncionario
     * const Servicosfuncionario = await prisma.servicosfuncionario.delete({
     *   where: {
     *     // ... filter to delete one Servicosfuncionario
     *   }
     * })
     * 
     */
    delete<T extends servicosfuncionarioDeleteArgs>(args: SelectSubset<T, servicosfuncionarioDeleteArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicosfuncionario.
     * @param {servicosfuncionarioUpdateArgs} args - Arguments to update one Servicosfuncionario.
     * @example
     * // Update one Servicosfuncionario
     * const servicosfuncionario = await prisma.servicosfuncionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicosfuncionarioUpdateArgs>(args: SelectSubset<T, servicosfuncionarioUpdateArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicosfuncionarios.
     * @param {servicosfuncionarioDeleteManyArgs} args - Arguments to filter Servicosfuncionarios to delete.
     * @example
     * // Delete a few Servicosfuncionarios
     * const { count } = await prisma.servicosfuncionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicosfuncionarioDeleteManyArgs>(args?: SelectSubset<T, servicosfuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicosfuncionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosfuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicosfuncionarios
     * const servicosfuncionario = await prisma.servicosfuncionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicosfuncionarioUpdateManyArgs>(args: SelectSubset<T, servicosfuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicosfuncionario.
     * @param {servicosfuncionarioUpsertArgs} args - Arguments to update or create a Servicosfuncionario.
     * @example
     * // Update or create a Servicosfuncionario
     * const servicosfuncionario = await prisma.servicosfuncionario.upsert({
     *   create: {
     *     // ... data to create a Servicosfuncionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicosfuncionario we want to update
     *   }
     * })
     */
    upsert<T extends servicosfuncionarioUpsertArgs>(args: SelectSubset<T, servicosfuncionarioUpsertArgs<ExtArgs>>): Prisma__servicosfuncionarioClient<$Result.GetResult<Prisma.$servicosfuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicosfuncionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosfuncionarioCountArgs} args - Arguments to filter Servicosfuncionarios to count.
     * @example
     * // Count the number of Servicosfuncionarios
     * const count = await prisma.servicosfuncionario.count({
     *   where: {
     *     // ... the filter for the Servicosfuncionarios we want to count
     *   }
     * })
    **/
    count<T extends servicosfuncionarioCountArgs>(
      args?: Subset<T, servicosfuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicosfuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicosfuncionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosfuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicosfuncionarioAggregateArgs>(args: Subset<T, ServicosfuncionarioAggregateArgs>): Prisma.PrismaPromise<GetServicosfuncionarioAggregateType<T>>

    /**
     * Group by Servicosfuncionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosfuncionarioGroupByArgs} args - Group by arguments.
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
      T extends servicosfuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicosfuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: servicosfuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicosfuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicosfuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicosfuncionario model
   */
  readonly fields: servicosfuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicosfuncionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicosfuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends funcionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, funcionarioDefaultArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servico<T extends servicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicoDefaultArgs<ExtArgs>>): Prisma__servicoClient<$Result.GetResult<Prisma.$servicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the servicosfuncionario model
   */
  interface servicosfuncionarioFieldRefs {
    readonly idServicosFuncionario: FieldRef<"servicosfuncionario", 'Int'>
    readonly Funcionario_idUsuario: FieldRef<"servicosfuncionario", 'Int'>
    readonly Servico_idServico: FieldRef<"servicosfuncionario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * servicosfuncionario findUnique
   */
  export type servicosfuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which servicosfuncionario to fetch.
     */
    where: servicosfuncionarioWhereUniqueInput
  }

  /**
   * servicosfuncionario findUniqueOrThrow
   */
  export type servicosfuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which servicosfuncionario to fetch.
     */
    where: servicosfuncionarioWhereUniqueInput
  }

  /**
   * servicosfuncionario findFirst
   */
  export type servicosfuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which servicosfuncionario to fetch.
     */
    where?: servicosfuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosfuncionarios to fetch.
     */
    orderBy?: servicosfuncionarioOrderByWithRelationInput | servicosfuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicosfuncionarios.
     */
    cursor?: servicosfuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosfuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosfuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicosfuncionarios.
     */
    distinct?: ServicosfuncionarioScalarFieldEnum | ServicosfuncionarioScalarFieldEnum[]
  }

  /**
   * servicosfuncionario findFirstOrThrow
   */
  export type servicosfuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which servicosfuncionario to fetch.
     */
    where?: servicosfuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosfuncionarios to fetch.
     */
    orderBy?: servicosfuncionarioOrderByWithRelationInput | servicosfuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicosfuncionarios.
     */
    cursor?: servicosfuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosfuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosfuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicosfuncionarios.
     */
    distinct?: ServicosfuncionarioScalarFieldEnum | ServicosfuncionarioScalarFieldEnum[]
  }

  /**
   * servicosfuncionario findMany
   */
  export type servicosfuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which servicosfuncionarios to fetch.
     */
    where?: servicosfuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosfuncionarios to fetch.
     */
    orderBy?: servicosfuncionarioOrderByWithRelationInput | servicosfuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicosfuncionarios.
     */
    cursor?: servicosfuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosfuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosfuncionarios.
     */
    skip?: number
    distinct?: ServicosfuncionarioScalarFieldEnum | ServicosfuncionarioScalarFieldEnum[]
  }

  /**
   * servicosfuncionario create
   */
  export type servicosfuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a servicosfuncionario.
     */
    data: XOR<servicosfuncionarioCreateInput, servicosfuncionarioUncheckedCreateInput>
  }

  /**
   * servicosfuncionario createMany
   */
  export type servicosfuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicosfuncionarios.
     */
    data: servicosfuncionarioCreateManyInput | servicosfuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicosfuncionario update
   */
  export type servicosfuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a servicosfuncionario.
     */
    data: XOR<servicosfuncionarioUpdateInput, servicosfuncionarioUncheckedUpdateInput>
    /**
     * Choose, which servicosfuncionario to update.
     */
    where: servicosfuncionarioWhereUniqueInput
  }

  /**
   * servicosfuncionario updateMany
   */
  export type servicosfuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicosfuncionarios.
     */
    data: XOR<servicosfuncionarioUpdateManyMutationInput, servicosfuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which servicosfuncionarios to update
     */
    where?: servicosfuncionarioWhereInput
    /**
     * Limit how many servicosfuncionarios to update.
     */
    limit?: number
  }

  /**
   * servicosfuncionario upsert
   */
  export type servicosfuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the servicosfuncionario to update in case it exists.
     */
    where: servicosfuncionarioWhereUniqueInput
    /**
     * In case the servicosfuncionario found by the `where` argument doesn't exist, create a new servicosfuncionario with this data.
     */
    create: XOR<servicosfuncionarioCreateInput, servicosfuncionarioUncheckedCreateInput>
    /**
     * In case the servicosfuncionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicosfuncionarioUpdateInput, servicosfuncionarioUncheckedUpdateInput>
  }

  /**
   * servicosfuncionario delete
   */
  export type servicosfuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
    /**
     * Filter which servicosfuncionario to delete.
     */
    where: servicosfuncionarioWhereUniqueInput
  }

  /**
   * servicosfuncionario deleteMany
   */
  export type servicosfuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicosfuncionarios to delete
     */
    where?: servicosfuncionarioWhereInput
    /**
     * Limit how many servicosfuncionarios to delete.
     */
    limit?: number
  }

  /**
   * servicosfuncionario without action
   */
  export type servicosfuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosfuncionario
     */
    select?: servicosfuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosfuncionario
     */
    omit?: servicosfuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicosfuncionarioInclude<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    idCliente: 'idCliente',
    Nome: 'Nome',
    CPF_CNPJ: 'CPF_CNPJ',
    EmailContato: 'EmailContato',
    TelefoneContato: 'TelefoneContato',
    Logradouro: 'Logradouro',
    CEP: 'CEP',
    Cidade: 'Cidade',
    Bairro: 'Bairro',
    Numero: 'Numero',
    UF: 'UF'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EquipamentoScalarFieldEnum: {
    idEquipamento: 'idEquipamento',
    Nome: 'Nome',
    Descricao: 'Descricao',
    Status: 'Status',
    Cliente_idCliente: 'Cliente_idCliente'
  };

  export type EquipamentoScalarFieldEnum = (typeof EquipamentoScalarFieldEnum)[keyof typeof EquipamentoScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    idUsuario: 'idUsuario',
    Nome: 'Nome',
    Senha: 'Senha',
    TipoUsuario: 'TipoUsuario'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const OrdemservicoScalarFieldEnum: {
    idOrdemServico: 'idOrdemServico',
    Equipamento_idEquipamento: 'Equipamento_idEquipamento',
    Servico_idServico: 'Servico_idServico'
  };

  export type OrdemservicoScalarFieldEnum = (typeof OrdemservicoScalarFieldEnum)[keyof typeof OrdemservicoScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    idServico: 'idServico',
    TipoServico: 'TipoServico',
    DataInicio: 'DataInicio',
    DataFim: 'DataFim',
    Status: 'Status',
    Setor: 'Setor'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const ServicosfuncionarioScalarFieldEnum: {
    idServicosFuncionario: 'idServicosFuncionario',
    Funcionario_idUsuario: 'Funcionario_idUsuario',
    Servico_idServico: 'Servico_idServico'
  };

  export type ServicosfuncionarioScalarFieldEnum = (typeof ServicosfuncionarioScalarFieldEnum)[keyof typeof ServicosfuncionarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const clienteOrderByRelevanceFieldEnum: {
    Nome: 'Nome',
    CPF_CNPJ: 'CPF_CNPJ',
    EmailContato: 'EmailContato',
    TelefoneContato: 'TelefoneContato',
    Logradouro: 'Logradouro',
    CEP: 'CEP',
    Cidade: 'Cidade',
    Bairro: 'Bairro',
    UF: 'UF'
  };

  export type clienteOrderByRelevanceFieldEnum = (typeof clienteOrderByRelevanceFieldEnum)[keyof typeof clienteOrderByRelevanceFieldEnum]


  export const equipamentoOrderByRelevanceFieldEnum: {
    Nome: 'Nome',
    Descricao: 'Descricao',
    Status: 'Status'
  };

  export type equipamentoOrderByRelevanceFieldEnum = (typeof equipamentoOrderByRelevanceFieldEnum)[keyof typeof equipamentoOrderByRelevanceFieldEnum]


  export const funcionarioOrderByRelevanceFieldEnum: {
    Nome: 'Nome',
    Senha: 'Senha'
  };

  export type funcionarioOrderByRelevanceFieldEnum = (typeof funcionarioOrderByRelevanceFieldEnum)[keyof typeof funcionarioOrderByRelevanceFieldEnum]


  export const servicoOrderByRelevanceFieldEnum: {
    TipoServico: 'TipoServico',
    Status: 'Status',
    Setor: 'Setor'
  };

  export type servicoOrderByRelevanceFieldEnum = (typeof servicoOrderByRelevanceFieldEnum)[keyof typeof servicoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    idCliente?: IntFilter<"cliente"> | number
    Nome?: StringFilter<"cliente"> | string
    CPF_CNPJ?: StringFilter<"cliente"> | string
    EmailContato?: StringNullableFilter<"cliente"> | string | null
    TelefoneContato?: StringNullableFilter<"cliente"> | string | null
    Logradouro?: StringNullableFilter<"cliente"> | string | null
    CEP?: StringNullableFilter<"cliente"> | string | null
    Cidade?: StringNullableFilter<"cliente"> | string | null
    Bairro?: StringNullableFilter<"cliente"> | string | null
    Numero?: IntNullableFilter<"cliente"> | number | null
    UF?: StringNullableFilter<"cliente"> | string | null
    equipamento?: EquipamentoListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    idCliente?: SortOrder
    Nome?: SortOrder
    CPF_CNPJ?: SortOrder
    EmailContato?: SortOrderInput | SortOrder
    TelefoneContato?: SortOrderInput | SortOrder
    Logradouro?: SortOrderInput | SortOrder
    CEP?: SortOrderInput | SortOrder
    Cidade?: SortOrderInput | SortOrder
    Bairro?: SortOrderInput | SortOrder
    Numero?: SortOrderInput | SortOrder
    UF?: SortOrderInput | SortOrder
    equipamento?: equipamentoOrderByRelationAggregateInput
    _relevance?: clienteOrderByRelevanceInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    idCliente?: number
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    Nome?: StringFilter<"cliente"> | string
    CPF_CNPJ?: StringFilter<"cliente"> | string
    EmailContato?: StringNullableFilter<"cliente"> | string | null
    TelefoneContato?: StringNullableFilter<"cliente"> | string | null
    Logradouro?: StringNullableFilter<"cliente"> | string | null
    CEP?: StringNullableFilter<"cliente"> | string | null
    Cidade?: StringNullableFilter<"cliente"> | string | null
    Bairro?: StringNullableFilter<"cliente"> | string | null
    Numero?: IntNullableFilter<"cliente"> | number | null
    UF?: StringNullableFilter<"cliente"> | string | null
    equipamento?: EquipamentoListRelationFilter
  }, "idCliente">

  export type clienteOrderByWithAggregationInput = {
    idCliente?: SortOrder
    Nome?: SortOrder
    CPF_CNPJ?: SortOrder
    EmailContato?: SortOrderInput | SortOrder
    TelefoneContato?: SortOrderInput | SortOrder
    Logradouro?: SortOrderInput | SortOrder
    CEP?: SortOrderInput | SortOrder
    Cidade?: SortOrderInput | SortOrder
    Bairro?: SortOrderInput | SortOrder
    Numero?: SortOrderInput | SortOrder
    UF?: SortOrderInput | SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    idCliente?: IntWithAggregatesFilter<"cliente"> | number
    Nome?: StringWithAggregatesFilter<"cliente"> | string
    CPF_CNPJ?: StringWithAggregatesFilter<"cliente"> | string
    EmailContato?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    TelefoneContato?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    Logradouro?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    CEP?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    Cidade?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    Bairro?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    Numero?: IntNullableWithAggregatesFilter<"cliente"> | number | null
    UF?: StringNullableWithAggregatesFilter<"cliente"> | string | null
  }

  export type equipamentoWhereInput = {
    AND?: equipamentoWhereInput | equipamentoWhereInput[]
    OR?: equipamentoWhereInput[]
    NOT?: equipamentoWhereInput | equipamentoWhereInput[]
    idEquipamento?: IntFilter<"equipamento"> | number
    Nome?: StringNullableFilter<"equipamento"> | string | null
    Descricao?: StringNullableFilter<"equipamento"> | string | null
    Status?: StringNullableFilter<"equipamento"> | string | null
    Cliente_idCliente?: IntFilter<"equipamento"> | number
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    ordemservico?: OrdemservicoListRelationFilter
  }

  export type equipamentoOrderByWithRelationInput = {
    idEquipamento?: SortOrder
    Nome?: SortOrderInput | SortOrder
    Descricao?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Cliente_idCliente?: SortOrder
    cliente?: clienteOrderByWithRelationInput
    ordemservico?: ordemservicoOrderByRelationAggregateInput
    _relevance?: equipamentoOrderByRelevanceInput
  }

  export type equipamentoWhereUniqueInput = Prisma.AtLeast<{
    idEquipamento?: number
    AND?: equipamentoWhereInput | equipamentoWhereInput[]
    OR?: equipamentoWhereInput[]
    NOT?: equipamentoWhereInput | equipamentoWhereInput[]
    Nome?: StringNullableFilter<"equipamento"> | string | null
    Descricao?: StringNullableFilter<"equipamento"> | string | null
    Status?: StringNullableFilter<"equipamento"> | string | null
    Cliente_idCliente?: IntFilter<"equipamento"> | number
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    ordemservico?: OrdemservicoListRelationFilter
  }, "idEquipamento">

  export type equipamentoOrderByWithAggregationInput = {
    idEquipamento?: SortOrder
    Nome?: SortOrderInput | SortOrder
    Descricao?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Cliente_idCliente?: SortOrder
    _count?: equipamentoCountOrderByAggregateInput
    _avg?: equipamentoAvgOrderByAggregateInput
    _max?: equipamentoMaxOrderByAggregateInput
    _min?: equipamentoMinOrderByAggregateInput
    _sum?: equipamentoSumOrderByAggregateInput
  }

  export type equipamentoScalarWhereWithAggregatesInput = {
    AND?: equipamentoScalarWhereWithAggregatesInput | equipamentoScalarWhereWithAggregatesInput[]
    OR?: equipamentoScalarWhereWithAggregatesInput[]
    NOT?: equipamentoScalarWhereWithAggregatesInput | equipamentoScalarWhereWithAggregatesInput[]
    idEquipamento?: IntWithAggregatesFilter<"equipamento"> | number
    Nome?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    Descricao?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    Status?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    Cliente_idCliente?: IntWithAggregatesFilter<"equipamento"> | number
  }

  export type funcionarioWhereInput = {
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    idUsuario?: IntFilter<"funcionario"> | number
    Nome?: StringFilter<"funcionario"> | string
    Senha?: StringFilter<"funcionario"> | string
    TipoUsuario?: IntFilter<"funcionario"> | number
    servicosfuncionario?: ServicosfuncionarioListRelationFilter
  }

  export type funcionarioOrderByWithRelationInput = {
    idUsuario?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    TipoUsuario?: SortOrder
    servicosfuncionario?: servicosfuncionarioOrderByRelationAggregateInput
    _relevance?: funcionarioOrderByRelevanceInput
  }

  export type funcionarioWhereUniqueInput = Prisma.AtLeast<{
    idUsuario?: number
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    Nome?: StringFilter<"funcionario"> | string
    Senha?: StringFilter<"funcionario"> | string
    TipoUsuario?: IntFilter<"funcionario"> | number
    servicosfuncionario?: ServicosfuncionarioListRelationFilter
  }, "idUsuario">

  export type funcionarioOrderByWithAggregationInput = {
    idUsuario?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    TipoUsuario?: SortOrder
    _count?: funcionarioCountOrderByAggregateInput
    _avg?: funcionarioAvgOrderByAggregateInput
    _max?: funcionarioMaxOrderByAggregateInput
    _min?: funcionarioMinOrderByAggregateInput
    _sum?: funcionarioSumOrderByAggregateInput
  }

  export type funcionarioScalarWhereWithAggregatesInput = {
    AND?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    OR?: funcionarioScalarWhereWithAggregatesInput[]
    NOT?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    idUsuario?: IntWithAggregatesFilter<"funcionario"> | number
    Nome?: StringWithAggregatesFilter<"funcionario"> | string
    Senha?: StringWithAggregatesFilter<"funcionario"> | string
    TipoUsuario?: IntWithAggregatesFilter<"funcionario"> | number
  }

  export type ordemservicoWhereInput = {
    AND?: ordemservicoWhereInput | ordemservicoWhereInput[]
    OR?: ordemservicoWhereInput[]
    NOT?: ordemservicoWhereInput | ordemservicoWhereInput[]
    idOrdemServico?: IntFilter<"ordemservico"> | number
    Equipamento_idEquipamento?: IntFilter<"ordemservico"> | number
    Servico_idServico?: IntFilter<"ordemservico"> | number
    equipamento?: XOR<EquipamentoScalarRelationFilter, equipamentoWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, servicoWhereInput>
  }

  export type ordemservicoOrderByWithRelationInput = {
    idOrdemServico?: SortOrder
    Equipamento_idEquipamento?: SortOrder
    Servico_idServico?: SortOrder
    equipamento?: equipamentoOrderByWithRelationInput
    servico?: servicoOrderByWithRelationInput
  }

  export type ordemservicoWhereUniqueInput = Prisma.AtLeast<{
    idOrdemServico?: number
    AND?: ordemservicoWhereInput | ordemservicoWhereInput[]
    OR?: ordemservicoWhereInput[]
    NOT?: ordemservicoWhereInput | ordemservicoWhereInput[]
    Equipamento_idEquipamento?: IntFilter<"ordemservico"> | number
    Servico_idServico?: IntFilter<"ordemservico"> | number
    equipamento?: XOR<EquipamentoScalarRelationFilter, equipamentoWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, servicoWhereInput>
  }, "idOrdemServico">

  export type ordemservicoOrderByWithAggregationInput = {
    idOrdemServico?: SortOrder
    Equipamento_idEquipamento?: SortOrder
    Servico_idServico?: SortOrder
    _count?: ordemservicoCountOrderByAggregateInput
    _avg?: ordemservicoAvgOrderByAggregateInput
    _max?: ordemservicoMaxOrderByAggregateInput
    _min?: ordemservicoMinOrderByAggregateInput
    _sum?: ordemservicoSumOrderByAggregateInput
  }

  export type ordemservicoScalarWhereWithAggregatesInput = {
    AND?: ordemservicoScalarWhereWithAggregatesInput | ordemservicoScalarWhereWithAggregatesInput[]
    OR?: ordemservicoScalarWhereWithAggregatesInput[]
    NOT?: ordemservicoScalarWhereWithAggregatesInput | ordemservicoScalarWhereWithAggregatesInput[]
    idOrdemServico?: IntWithAggregatesFilter<"ordemservico"> | number
    Equipamento_idEquipamento?: IntWithAggregatesFilter<"ordemservico"> | number
    Servico_idServico?: IntWithAggregatesFilter<"ordemservico"> | number
  }

  export type servicoWhereInput = {
    AND?: servicoWhereInput | servicoWhereInput[]
    OR?: servicoWhereInput[]
    NOT?: servicoWhereInput | servicoWhereInput[]
    idServico?: IntFilter<"servico"> | number
    TipoServico?: StringNullableFilter<"servico"> | string | null
    DataInicio?: DateTimeNullableFilter<"servico"> | Date | string | null
    DataFim?: DateTimeNullableFilter<"servico"> | Date | string | null
    Status?: StringNullableFilter<"servico"> | string | null
    Setor?: StringNullableFilter<"servico"> | string | null
    ordemservico?: OrdemservicoListRelationFilter
    servicosfuncionario?: ServicosfuncionarioListRelationFilter
  }

  export type servicoOrderByWithRelationInput = {
    idServico?: SortOrder
    TipoServico?: SortOrderInput | SortOrder
    DataInicio?: SortOrderInput | SortOrder
    DataFim?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Setor?: SortOrderInput | SortOrder
    ordemservico?: ordemservicoOrderByRelationAggregateInput
    servicosfuncionario?: servicosfuncionarioOrderByRelationAggregateInput
    _relevance?: servicoOrderByRelevanceInput
  }

  export type servicoWhereUniqueInput = Prisma.AtLeast<{
    idServico?: number
    AND?: servicoWhereInput | servicoWhereInput[]
    OR?: servicoWhereInput[]
    NOT?: servicoWhereInput | servicoWhereInput[]
    TipoServico?: StringNullableFilter<"servico"> | string | null
    DataInicio?: DateTimeNullableFilter<"servico"> | Date | string | null
    DataFim?: DateTimeNullableFilter<"servico"> | Date | string | null
    Status?: StringNullableFilter<"servico"> | string | null
    Setor?: StringNullableFilter<"servico"> | string | null
    ordemservico?: OrdemservicoListRelationFilter
    servicosfuncionario?: ServicosfuncionarioListRelationFilter
  }, "idServico">

  export type servicoOrderByWithAggregationInput = {
    idServico?: SortOrder
    TipoServico?: SortOrderInput | SortOrder
    DataInicio?: SortOrderInput | SortOrder
    DataFim?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Setor?: SortOrderInput | SortOrder
    _count?: servicoCountOrderByAggregateInput
    _avg?: servicoAvgOrderByAggregateInput
    _max?: servicoMaxOrderByAggregateInput
    _min?: servicoMinOrderByAggregateInput
    _sum?: servicoSumOrderByAggregateInput
  }

  export type servicoScalarWhereWithAggregatesInput = {
    AND?: servicoScalarWhereWithAggregatesInput | servicoScalarWhereWithAggregatesInput[]
    OR?: servicoScalarWhereWithAggregatesInput[]
    NOT?: servicoScalarWhereWithAggregatesInput | servicoScalarWhereWithAggregatesInput[]
    idServico?: IntWithAggregatesFilter<"servico"> | number
    TipoServico?: StringNullableWithAggregatesFilter<"servico"> | string | null
    DataInicio?: DateTimeNullableWithAggregatesFilter<"servico"> | Date | string | null
    DataFim?: DateTimeNullableWithAggregatesFilter<"servico"> | Date | string | null
    Status?: StringNullableWithAggregatesFilter<"servico"> | string | null
    Setor?: StringNullableWithAggregatesFilter<"servico"> | string | null
  }

  export type servicosfuncionarioWhereInput = {
    AND?: servicosfuncionarioWhereInput | servicosfuncionarioWhereInput[]
    OR?: servicosfuncionarioWhereInput[]
    NOT?: servicosfuncionarioWhereInput | servicosfuncionarioWhereInput[]
    idServicosFuncionario?: IntFilter<"servicosfuncionario"> | number
    Funcionario_idUsuario?: IntFilter<"servicosfuncionario"> | number
    Servico_idServico?: IntFilter<"servicosfuncionario"> | number
    funcionario?: XOR<FuncionarioScalarRelationFilter, funcionarioWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, servicoWhereInput>
  }

  export type servicosfuncionarioOrderByWithRelationInput = {
    idServicosFuncionario?: SortOrder
    Funcionario_idUsuario?: SortOrder
    Servico_idServico?: SortOrder
    funcionario?: funcionarioOrderByWithRelationInput
    servico?: servicoOrderByWithRelationInput
  }

  export type servicosfuncionarioWhereUniqueInput = Prisma.AtLeast<{
    idServicosFuncionario?: number
    AND?: servicosfuncionarioWhereInput | servicosfuncionarioWhereInput[]
    OR?: servicosfuncionarioWhereInput[]
    NOT?: servicosfuncionarioWhereInput | servicosfuncionarioWhereInput[]
    Funcionario_idUsuario?: IntFilter<"servicosfuncionario"> | number
    Servico_idServico?: IntFilter<"servicosfuncionario"> | number
    funcionario?: XOR<FuncionarioScalarRelationFilter, funcionarioWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, servicoWhereInput>
  }, "idServicosFuncionario">

  export type servicosfuncionarioOrderByWithAggregationInput = {
    idServicosFuncionario?: SortOrder
    Funcionario_idUsuario?: SortOrder
    Servico_idServico?: SortOrder
    _count?: servicosfuncionarioCountOrderByAggregateInput
    _avg?: servicosfuncionarioAvgOrderByAggregateInput
    _max?: servicosfuncionarioMaxOrderByAggregateInput
    _min?: servicosfuncionarioMinOrderByAggregateInput
    _sum?: servicosfuncionarioSumOrderByAggregateInput
  }

  export type servicosfuncionarioScalarWhereWithAggregatesInput = {
    AND?: servicosfuncionarioScalarWhereWithAggregatesInput | servicosfuncionarioScalarWhereWithAggregatesInput[]
    OR?: servicosfuncionarioScalarWhereWithAggregatesInput[]
    NOT?: servicosfuncionarioScalarWhereWithAggregatesInput | servicosfuncionarioScalarWhereWithAggregatesInput[]
    idServicosFuncionario?: IntWithAggregatesFilter<"servicosfuncionario"> | number
    Funcionario_idUsuario?: IntWithAggregatesFilter<"servicosfuncionario"> | number
    Servico_idServico?: IntWithAggregatesFilter<"servicosfuncionario"> | number
  }

  export type clienteCreateInput = {
    Nome: string
    CPF_CNPJ: string
    EmailContato?: string | null
    TelefoneContato?: string | null
    Logradouro?: string | null
    CEP?: string | null
    Cidade?: string | null
    Bairro?: string | null
    Numero?: number | null
    UF?: string | null
    equipamento?: equipamentoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    idCliente?: number
    Nome: string
    CPF_CNPJ: string
    EmailContato?: string | null
    TelefoneContato?: string | null
    Logradouro?: string | null
    CEP?: string | null
    Cidade?: string | null
    Bairro?: string | null
    Numero?: number | null
    UF?: string | null
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    EmailContato?: NullableStringFieldUpdateOperationsInput | string | null
    TelefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    Logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableIntFieldUpdateOperationsInput | number | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
    equipamento?: equipamentoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    idCliente?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    EmailContato?: NullableStringFieldUpdateOperationsInput | string | null
    TelefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    Logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableIntFieldUpdateOperationsInput | number | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
    equipamento?: equipamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    idCliente?: number
    Nome: string
    CPF_CNPJ: string
    EmailContato?: string | null
    TelefoneContato?: string | null
    Logradouro?: string | null
    CEP?: string | null
    Cidade?: string | null
    Bairro?: string | null
    Numero?: number | null
    UF?: string | null
  }

  export type clienteUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    EmailContato?: NullableStringFieldUpdateOperationsInput | string | null
    TelefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    Logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableIntFieldUpdateOperationsInput | number | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateManyInput = {
    idCliente?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    EmailContato?: NullableStringFieldUpdateOperationsInput | string | null
    TelefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    Logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableIntFieldUpdateOperationsInput | number | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoCreateInput = {
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
    cliente: clienteCreateNestedOneWithoutEquipamentoInput
    ordemservico?: ordemservicoCreateNestedManyWithoutEquipamentoInput
  }

  export type equipamentoUncheckedCreateInput = {
    idEquipamento?: number
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
    Cliente_idCliente: number
    ordemservico?: ordemservicoUncheckedCreateNestedManyWithoutEquipamentoInput
  }

  export type equipamentoUpdateInput = {
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: clienteUpdateOneRequiredWithoutEquipamentoNestedInput
    ordemservico?: ordemservicoUpdateManyWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateInput = {
    idEquipamento?: IntFieldUpdateOperationsInput | number
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Cliente_idCliente?: IntFieldUpdateOperationsInput | number
    ordemservico?: ordemservicoUncheckedUpdateManyWithoutEquipamentoNestedInput
  }

  export type equipamentoCreateManyInput = {
    idEquipamento?: number
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
    Cliente_idCliente: number
  }

  export type equipamentoUpdateManyMutationInput = {
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoUncheckedUpdateManyInput = {
    idEquipamento?: IntFieldUpdateOperationsInput | number
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Cliente_idCliente?: IntFieldUpdateOperationsInput | number
  }

  export type funcionarioCreateInput = {
    Nome: string
    Senha: string
    TipoUsuario: number
    servicosfuncionario?: servicosfuncionarioCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateInput = {
    idUsuario?: number
    Nome: string
    Senha: string
    TipoUsuario: number
    servicosfuncionario?: servicosfuncionarioUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    TipoUsuario?: IntFieldUpdateOperationsInput | number
    servicosfuncionario?: servicosfuncionarioUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    TipoUsuario?: IntFieldUpdateOperationsInput | number
    servicosfuncionario?: servicosfuncionarioUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioCreateManyInput = {
    idUsuario?: number
    Nome: string
    Senha: string
    TipoUsuario: number
  }

  export type funcionarioUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    TipoUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type funcionarioUncheckedUpdateManyInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    TipoUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type ordemservicoCreateInput = {
    equipamento: equipamentoCreateNestedOneWithoutOrdemservicoInput
    servico: servicoCreateNestedOneWithoutOrdemservicoInput
  }

  export type ordemservicoUncheckedCreateInput = {
    idOrdemServico?: number
    Equipamento_idEquipamento: number
    Servico_idServico: number
  }

  export type ordemservicoUpdateInput = {
    equipamento?: equipamentoUpdateOneRequiredWithoutOrdemservicoNestedInput
    servico?: servicoUpdateOneRequiredWithoutOrdemservicoNestedInput
  }

  export type ordemservicoUncheckedUpdateInput = {
    idOrdemServico?: IntFieldUpdateOperationsInput | number
    Equipamento_idEquipamento?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type ordemservicoCreateManyInput = {
    idOrdemServico?: number
    Equipamento_idEquipamento: number
    Servico_idServico: number
  }

  export type ordemservicoUpdateManyMutationInput = {

  }

  export type ordemservicoUncheckedUpdateManyInput = {
    idOrdemServico?: IntFieldUpdateOperationsInput | number
    Equipamento_idEquipamento?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type servicoCreateInput = {
    TipoServico?: string | null
    DataInicio?: Date | string | null
    DataFim?: Date | string | null
    Status?: string | null
    Setor?: string | null
    ordemservico?: ordemservicoCreateNestedManyWithoutServicoInput
    servicosfuncionario?: servicosfuncionarioCreateNestedManyWithoutServicoInput
  }

  export type servicoUncheckedCreateInput = {
    idServico?: number
    TipoServico?: string | null
    DataInicio?: Date | string | null
    DataFim?: Date | string | null
    Status?: string | null
    Setor?: string | null
    ordemservico?: ordemservicoUncheckedCreateNestedManyWithoutServicoInput
    servicosfuncionario?: servicosfuncionarioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type servicoUpdateInput = {
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    ordemservico?: ordemservicoUpdateManyWithoutServicoNestedInput
    servicosfuncionario?: servicosfuncionarioUpdateManyWithoutServicoNestedInput
  }

  export type servicoUncheckedUpdateInput = {
    idServico?: IntFieldUpdateOperationsInput | number
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    ordemservico?: ordemservicoUncheckedUpdateManyWithoutServicoNestedInput
    servicosfuncionario?: servicosfuncionarioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type servicoCreateManyInput = {
    idServico?: number
    TipoServico?: string | null
    DataInicio?: Date | string | null
    DataFim?: Date | string | null
    Status?: string | null
    Setor?: string | null
  }

  export type servicoUpdateManyMutationInput = {
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicoUncheckedUpdateManyInput = {
    idServico?: IntFieldUpdateOperationsInput | number
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicosfuncionarioCreateInput = {
    funcionario: funcionarioCreateNestedOneWithoutServicosfuncionarioInput
    servico: servicoCreateNestedOneWithoutServicosfuncionarioInput
  }

  export type servicosfuncionarioUncheckedCreateInput = {
    idServicosFuncionario?: number
    Funcionario_idUsuario: number
    Servico_idServico: number
  }

  export type servicosfuncionarioUpdateInput = {
    funcionario?: funcionarioUpdateOneRequiredWithoutServicosfuncionarioNestedInput
    servico?: servicoUpdateOneRequiredWithoutServicosfuncionarioNestedInput
  }

  export type servicosfuncionarioUncheckedUpdateInput = {
    idServicosFuncionario?: IntFieldUpdateOperationsInput | number
    Funcionario_idUsuario?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type servicosfuncionarioCreateManyInput = {
    idServicosFuncionario?: number
    Funcionario_idUsuario: number
    Servico_idServico: number
  }

  export type servicosfuncionarioUpdateManyMutationInput = {

  }

  export type servicosfuncionarioUncheckedUpdateManyInput = {
    idServicosFuncionario?: IntFieldUpdateOperationsInput | number
    Funcionario_idUsuario?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EquipamentoListRelationFilter = {
    every?: equipamentoWhereInput
    some?: equipamentoWhereInput
    none?: equipamentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type equipamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteOrderByRelevanceInput = {
    fields: clienteOrderByRelevanceFieldEnum | clienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clienteCountOrderByAggregateInput = {
    idCliente?: SortOrder
    Nome?: SortOrder
    CPF_CNPJ?: SortOrder
    EmailContato?: SortOrder
    TelefoneContato?: SortOrder
    Logradouro?: SortOrder
    CEP?: SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrder
    Numero?: SortOrder
    UF?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    idCliente?: SortOrder
    Numero?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    idCliente?: SortOrder
    Nome?: SortOrder
    CPF_CNPJ?: SortOrder
    EmailContato?: SortOrder
    TelefoneContato?: SortOrder
    Logradouro?: SortOrder
    CEP?: SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrder
    Numero?: SortOrder
    UF?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    idCliente?: SortOrder
    Nome?: SortOrder
    CPF_CNPJ?: SortOrder
    EmailContato?: SortOrder
    TelefoneContato?: SortOrder
    Logradouro?: SortOrder
    CEP?: SortOrder
    Cidade?: SortOrder
    Bairro?: SortOrder
    Numero?: SortOrder
    UF?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    idCliente?: SortOrder
    Numero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ClienteScalarRelationFilter = {
    is?: clienteWhereInput
    isNot?: clienteWhereInput
  }

  export type OrdemservicoListRelationFilter = {
    every?: ordemservicoWhereInput
    some?: ordemservicoWhereInput
    none?: ordemservicoWhereInput
  }

  export type ordemservicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type equipamentoOrderByRelevanceInput = {
    fields: equipamentoOrderByRelevanceFieldEnum | equipamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type equipamentoCountOrderByAggregateInput = {
    idEquipamento?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    Status?: SortOrder
    Cliente_idCliente?: SortOrder
  }

  export type equipamentoAvgOrderByAggregateInput = {
    idEquipamento?: SortOrder
    Cliente_idCliente?: SortOrder
  }

  export type equipamentoMaxOrderByAggregateInput = {
    idEquipamento?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    Status?: SortOrder
    Cliente_idCliente?: SortOrder
  }

  export type equipamentoMinOrderByAggregateInput = {
    idEquipamento?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    Status?: SortOrder
    Cliente_idCliente?: SortOrder
  }

  export type equipamentoSumOrderByAggregateInput = {
    idEquipamento?: SortOrder
    Cliente_idCliente?: SortOrder
  }

  export type ServicosfuncionarioListRelationFilter = {
    every?: servicosfuncionarioWhereInput
    some?: servicosfuncionarioWhereInput
    none?: servicosfuncionarioWhereInput
  }

  export type servicosfuncionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type funcionarioOrderByRelevanceInput = {
    fields: funcionarioOrderByRelevanceFieldEnum | funcionarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type funcionarioCountOrderByAggregateInput = {
    idUsuario?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    TipoUsuario?: SortOrder
  }

  export type funcionarioAvgOrderByAggregateInput = {
    idUsuario?: SortOrder
    TipoUsuario?: SortOrder
  }

  export type funcionarioMaxOrderByAggregateInput = {
    idUsuario?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    TipoUsuario?: SortOrder
  }

  export type funcionarioMinOrderByAggregateInput = {
    idUsuario?: SortOrder
    Nome?: SortOrder
    Senha?: SortOrder
    TipoUsuario?: SortOrder
  }

  export type funcionarioSumOrderByAggregateInput = {
    idUsuario?: SortOrder
    TipoUsuario?: SortOrder
  }

  export type EquipamentoScalarRelationFilter = {
    is?: equipamentoWhereInput
    isNot?: equipamentoWhereInput
  }

  export type ServicoScalarRelationFilter = {
    is?: servicoWhereInput
    isNot?: servicoWhereInput
  }

  export type ordemservicoCountOrderByAggregateInput = {
    idOrdemServico?: SortOrder
    Equipamento_idEquipamento?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type ordemservicoAvgOrderByAggregateInput = {
    idOrdemServico?: SortOrder
    Equipamento_idEquipamento?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type ordemservicoMaxOrderByAggregateInput = {
    idOrdemServico?: SortOrder
    Equipamento_idEquipamento?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type ordemservicoMinOrderByAggregateInput = {
    idOrdemServico?: SortOrder
    Equipamento_idEquipamento?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type ordemservicoSumOrderByAggregateInput = {
    idOrdemServico?: SortOrder
    Equipamento_idEquipamento?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type servicoOrderByRelevanceInput = {
    fields: servicoOrderByRelevanceFieldEnum | servicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type servicoCountOrderByAggregateInput = {
    idServico?: SortOrder
    TipoServico?: SortOrder
    DataInicio?: SortOrder
    DataFim?: SortOrder
    Status?: SortOrder
    Setor?: SortOrder
  }

  export type servicoAvgOrderByAggregateInput = {
    idServico?: SortOrder
  }

  export type servicoMaxOrderByAggregateInput = {
    idServico?: SortOrder
    TipoServico?: SortOrder
    DataInicio?: SortOrder
    DataFim?: SortOrder
    Status?: SortOrder
    Setor?: SortOrder
  }

  export type servicoMinOrderByAggregateInput = {
    idServico?: SortOrder
    TipoServico?: SortOrder
    DataInicio?: SortOrder
    DataFim?: SortOrder
    Status?: SortOrder
    Setor?: SortOrder
  }

  export type servicoSumOrderByAggregateInput = {
    idServico?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FuncionarioScalarRelationFilter = {
    is?: funcionarioWhereInput
    isNot?: funcionarioWhereInput
  }

  export type servicosfuncionarioCountOrderByAggregateInput = {
    idServicosFuncionario?: SortOrder
    Funcionario_idUsuario?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type servicosfuncionarioAvgOrderByAggregateInput = {
    idServicosFuncionario?: SortOrder
    Funcionario_idUsuario?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type servicosfuncionarioMaxOrderByAggregateInput = {
    idServicosFuncionario?: SortOrder
    Funcionario_idUsuario?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type servicosfuncionarioMinOrderByAggregateInput = {
    idServicosFuncionario?: SortOrder
    Funcionario_idUsuario?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type servicosfuncionarioSumOrderByAggregateInput = {
    idServicosFuncionario?: SortOrder
    Funcionario_idUsuario?: SortOrder
    Servico_idServico?: SortOrder
  }

  export type equipamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<equipamentoCreateWithoutClienteInput, equipamentoUncheckedCreateWithoutClienteInput> | equipamentoCreateWithoutClienteInput[] | equipamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutClienteInput | equipamentoCreateOrConnectWithoutClienteInput[]
    createMany?: equipamentoCreateManyClienteInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type equipamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<equipamentoCreateWithoutClienteInput, equipamentoUncheckedCreateWithoutClienteInput> | equipamentoCreateWithoutClienteInput[] | equipamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutClienteInput | equipamentoCreateOrConnectWithoutClienteInput[]
    createMany?: equipamentoCreateManyClienteInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type equipamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<equipamentoCreateWithoutClienteInput, equipamentoUncheckedCreateWithoutClienteInput> | equipamentoCreateWithoutClienteInput[] | equipamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutClienteInput | equipamentoCreateOrConnectWithoutClienteInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutClienteInput | equipamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: equipamentoCreateManyClienteInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutClienteInput | equipamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutClienteInput | equipamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type equipamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<equipamentoCreateWithoutClienteInput, equipamentoUncheckedCreateWithoutClienteInput> | equipamentoCreateWithoutClienteInput[] | equipamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutClienteInput | equipamentoCreateOrConnectWithoutClienteInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutClienteInput | equipamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: equipamentoCreateManyClienteInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutClienteInput | equipamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutClienteInput | equipamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type clienteCreateNestedOneWithoutEquipamentoInput = {
    create?: XOR<clienteCreateWithoutEquipamentoInput, clienteUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEquipamentoInput
    connect?: clienteWhereUniqueInput
  }

  export type ordemservicoCreateNestedManyWithoutEquipamentoInput = {
    create?: XOR<ordemservicoCreateWithoutEquipamentoInput, ordemservicoUncheckedCreateWithoutEquipamentoInput> | ordemservicoCreateWithoutEquipamentoInput[] | ordemservicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutEquipamentoInput | ordemservicoCreateOrConnectWithoutEquipamentoInput[]
    createMany?: ordemservicoCreateManyEquipamentoInputEnvelope
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
  }

  export type ordemservicoUncheckedCreateNestedManyWithoutEquipamentoInput = {
    create?: XOR<ordemservicoCreateWithoutEquipamentoInput, ordemservicoUncheckedCreateWithoutEquipamentoInput> | ordemservicoCreateWithoutEquipamentoInput[] | ordemservicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutEquipamentoInput | ordemservicoCreateOrConnectWithoutEquipamentoInput[]
    createMany?: ordemservicoCreateManyEquipamentoInputEnvelope
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
  }

  export type clienteUpdateOneRequiredWithoutEquipamentoNestedInput = {
    create?: XOR<clienteCreateWithoutEquipamentoInput, clienteUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEquipamentoInput
    upsert?: clienteUpsertWithoutEquipamentoInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutEquipamentoInput, clienteUpdateWithoutEquipamentoInput>, clienteUncheckedUpdateWithoutEquipamentoInput>
  }

  export type ordemservicoUpdateManyWithoutEquipamentoNestedInput = {
    create?: XOR<ordemservicoCreateWithoutEquipamentoInput, ordemservicoUncheckedCreateWithoutEquipamentoInput> | ordemservicoCreateWithoutEquipamentoInput[] | ordemservicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutEquipamentoInput | ordemservicoCreateOrConnectWithoutEquipamentoInput[]
    upsert?: ordemservicoUpsertWithWhereUniqueWithoutEquipamentoInput | ordemservicoUpsertWithWhereUniqueWithoutEquipamentoInput[]
    createMany?: ordemservicoCreateManyEquipamentoInputEnvelope
    set?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    disconnect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    delete?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    update?: ordemservicoUpdateWithWhereUniqueWithoutEquipamentoInput | ordemservicoUpdateWithWhereUniqueWithoutEquipamentoInput[]
    updateMany?: ordemservicoUpdateManyWithWhereWithoutEquipamentoInput | ordemservicoUpdateManyWithWhereWithoutEquipamentoInput[]
    deleteMany?: ordemservicoScalarWhereInput | ordemservicoScalarWhereInput[]
  }

  export type ordemservicoUncheckedUpdateManyWithoutEquipamentoNestedInput = {
    create?: XOR<ordemservicoCreateWithoutEquipamentoInput, ordemservicoUncheckedCreateWithoutEquipamentoInput> | ordemservicoCreateWithoutEquipamentoInput[] | ordemservicoUncheckedCreateWithoutEquipamentoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutEquipamentoInput | ordemservicoCreateOrConnectWithoutEquipamentoInput[]
    upsert?: ordemservicoUpsertWithWhereUniqueWithoutEquipamentoInput | ordemservicoUpsertWithWhereUniqueWithoutEquipamentoInput[]
    createMany?: ordemservicoCreateManyEquipamentoInputEnvelope
    set?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    disconnect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    delete?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    update?: ordemservicoUpdateWithWhereUniqueWithoutEquipamentoInput | ordemservicoUpdateWithWhereUniqueWithoutEquipamentoInput[]
    updateMany?: ordemservicoUpdateManyWithWhereWithoutEquipamentoInput | ordemservicoUpdateManyWithWhereWithoutEquipamentoInput[]
    deleteMany?: ordemservicoScalarWhereInput | ordemservicoScalarWhereInput[]
  }

  export type servicosfuncionarioCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<servicosfuncionarioCreateWithoutFuncionarioInput, servicosfuncionarioUncheckedCreateWithoutFuncionarioInput> | servicosfuncionarioCreateWithoutFuncionarioInput[] | servicosfuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutFuncionarioInput | servicosfuncionarioCreateOrConnectWithoutFuncionarioInput[]
    createMany?: servicosfuncionarioCreateManyFuncionarioInputEnvelope
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
  }

  export type servicosfuncionarioUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<servicosfuncionarioCreateWithoutFuncionarioInput, servicosfuncionarioUncheckedCreateWithoutFuncionarioInput> | servicosfuncionarioCreateWithoutFuncionarioInput[] | servicosfuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutFuncionarioInput | servicosfuncionarioCreateOrConnectWithoutFuncionarioInput[]
    createMany?: servicosfuncionarioCreateManyFuncionarioInputEnvelope
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
  }

  export type servicosfuncionarioUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<servicosfuncionarioCreateWithoutFuncionarioInput, servicosfuncionarioUncheckedCreateWithoutFuncionarioInput> | servicosfuncionarioCreateWithoutFuncionarioInput[] | servicosfuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutFuncionarioInput | servicosfuncionarioCreateOrConnectWithoutFuncionarioInput[]
    upsert?: servicosfuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput | servicosfuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: servicosfuncionarioCreateManyFuncionarioInputEnvelope
    set?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    disconnect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    delete?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    update?: servicosfuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput | servicosfuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: servicosfuncionarioUpdateManyWithWhereWithoutFuncionarioInput | servicosfuncionarioUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: servicosfuncionarioScalarWhereInput | servicosfuncionarioScalarWhereInput[]
  }

  export type servicosfuncionarioUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<servicosfuncionarioCreateWithoutFuncionarioInput, servicosfuncionarioUncheckedCreateWithoutFuncionarioInput> | servicosfuncionarioCreateWithoutFuncionarioInput[] | servicosfuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutFuncionarioInput | servicosfuncionarioCreateOrConnectWithoutFuncionarioInput[]
    upsert?: servicosfuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput | servicosfuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: servicosfuncionarioCreateManyFuncionarioInputEnvelope
    set?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    disconnect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    delete?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    update?: servicosfuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput | servicosfuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: servicosfuncionarioUpdateManyWithWhereWithoutFuncionarioInput | servicosfuncionarioUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: servicosfuncionarioScalarWhereInput | servicosfuncionarioScalarWhereInput[]
  }

  export type equipamentoCreateNestedOneWithoutOrdemservicoInput = {
    create?: XOR<equipamentoCreateWithoutOrdemservicoInput, equipamentoUncheckedCreateWithoutOrdemservicoInput>
    connectOrCreate?: equipamentoCreateOrConnectWithoutOrdemservicoInput
    connect?: equipamentoWhereUniqueInput
  }

  export type servicoCreateNestedOneWithoutOrdemservicoInput = {
    create?: XOR<servicoCreateWithoutOrdemservicoInput, servicoUncheckedCreateWithoutOrdemservicoInput>
    connectOrCreate?: servicoCreateOrConnectWithoutOrdemservicoInput
    connect?: servicoWhereUniqueInput
  }

  export type equipamentoUpdateOneRequiredWithoutOrdemservicoNestedInput = {
    create?: XOR<equipamentoCreateWithoutOrdemservicoInput, equipamentoUncheckedCreateWithoutOrdemservicoInput>
    connectOrCreate?: equipamentoCreateOrConnectWithoutOrdemservicoInput
    upsert?: equipamentoUpsertWithoutOrdemservicoInput
    connect?: equipamentoWhereUniqueInput
    update?: XOR<XOR<equipamentoUpdateToOneWithWhereWithoutOrdemservicoInput, equipamentoUpdateWithoutOrdemservicoInput>, equipamentoUncheckedUpdateWithoutOrdemservicoInput>
  }

  export type servicoUpdateOneRequiredWithoutOrdemservicoNestedInput = {
    create?: XOR<servicoCreateWithoutOrdemservicoInput, servicoUncheckedCreateWithoutOrdemservicoInput>
    connectOrCreate?: servicoCreateOrConnectWithoutOrdemservicoInput
    upsert?: servicoUpsertWithoutOrdemservicoInput
    connect?: servicoWhereUniqueInput
    update?: XOR<XOR<servicoUpdateToOneWithWhereWithoutOrdemservicoInput, servicoUpdateWithoutOrdemservicoInput>, servicoUncheckedUpdateWithoutOrdemservicoInput>
  }

  export type ordemservicoCreateNestedManyWithoutServicoInput = {
    create?: XOR<ordemservicoCreateWithoutServicoInput, ordemservicoUncheckedCreateWithoutServicoInput> | ordemservicoCreateWithoutServicoInput[] | ordemservicoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutServicoInput | ordemservicoCreateOrConnectWithoutServicoInput[]
    createMany?: ordemservicoCreateManyServicoInputEnvelope
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
  }

  export type servicosfuncionarioCreateNestedManyWithoutServicoInput = {
    create?: XOR<servicosfuncionarioCreateWithoutServicoInput, servicosfuncionarioUncheckedCreateWithoutServicoInput> | servicosfuncionarioCreateWithoutServicoInput[] | servicosfuncionarioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutServicoInput | servicosfuncionarioCreateOrConnectWithoutServicoInput[]
    createMany?: servicosfuncionarioCreateManyServicoInputEnvelope
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
  }

  export type ordemservicoUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<ordemservicoCreateWithoutServicoInput, ordemservicoUncheckedCreateWithoutServicoInput> | ordemservicoCreateWithoutServicoInput[] | ordemservicoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutServicoInput | ordemservicoCreateOrConnectWithoutServicoInput[]
    createMany?: ordemservicoCreateManyServicoInputEnvelope
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
  }

  export type servicosfuncionarioUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<servicosfuncionarioCreateWithoutServicoInput, servicosfuncionarioUncheckedCreateWithoutServicoInput> | servicosfuncionarioCreateWithoutServicoInput[] | servicosfuncionarioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutServicoInput | servicosfuncionarioCreateOrConnectWithoutServicoInput[]
    createMany?: servicosfuncionarioCreateManyServicoInputEnvelope
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ordemservicoUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ordemservicoCreateWithoutServicoInput, ordemservicoUncheckedCreateWithoutServicoInput> | ordemservicoCreateWithoutServicoInput[] | ordemservicoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutServicoInput | ordemservicoCreateOrConnectWithoutServicoInput[]
    upsert?: ordemservicoUpsertWithWhereUniqueWithoutServicoInput | ordemservicoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ordemservicoCreateManyServicoInputEnvelope
    set?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    disconnect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    delete?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    update?: ordemservicoUpdateWithWhereUniqueWithoutServicoInput | ordemservicoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ordemservicoUpdateManyWithWhereWithoutServicoInput | ordemservicoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ordemservicoScalarWhereInput | ordemservicoScalarWhereInput[]
  }

  export type servicosfuncionarioUpdateManyWithoutServicoNestedInput = {
    create?: XOR<servicosfuncionarioCreateWithoutServicoInput, servicosfuncionarioUncheckedCreateWithoutServicoInput> | servicosfuncionarioCreateWithoutServicoInput[] | servicosfuncionarioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutServicoInput | servicosfuncionarioCreateOrConnectWithoutServicoInput[]
    upsert?: servicosfuncionarioUpsertWithWhereUniqueWithoutServicoInput | servicosfuncionarioUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: servicosfuncionarioCreateManyServicoInputEnvelope
    set?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    disconnect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    delete?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    update?: servicosfuncionarioUpdateWithWhereUniqueWithoutServicoInput | servicosfuncionarioUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: servicosfuncionarioUpdateManyWithWhereWithoutServicoInput | servicosfuncionarioUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: servicosfuncionarioScalarWhereInput | servicosfuncionarioScalarWhereInput[]
  }

  export type ordemservicoUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ordemservicoCreateWithoutServicoInput, ordemservicoUncheckedCreateWithoutServicoInput> | ordemservicoCreateWithoutServicoInput[] | ordemservicoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ordemservicoCreateOrConnectWithoutServicoInput | ordemservicoCreateOrConnectWithoutServicoInput[]
    upsert?: ordemservicoUpsertWithWhereUniqueWithoutServicoInput | ordemservicoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ordemservicoCreateManyServicoInputEnvelope
    set?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    disconnect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    delete?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    connect?: ordemservicoWhereUniqueInput | ordemservicoWhereUniqueInput[]
    update?: ordemservicoUpdateWithWhereUniqueWithoutServicoInput | ordemservicoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ordemservicoUpdateManyWithWhereWithoutServicoInput | ordemservicoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ordemservicoScalarWhereInput | ordemservicoScalarWhereInput[]
  }

  export type servicosfuncionarioUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<servicosfuncionarioCreateWithoutServicoInput, servicosfuncionarioUncheckedCreateWithoutServicoInput> | servicosfuncionarioCreateWithoutServicoInput[] | servicosfuncionarioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: servicosfuncionarioCreateOrConnectWithoutServicoInput | servicosfuncionarioCreateOrConnectWithoutServicoInput[]
    upsert?: servicosfuncionarioUpsertWithWhereUniqueWithoutServicoInput | servicosfuncionarioUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: servicosfuncionarioCreateManyServicoInputEnvelope
    set?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    disconnect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    delete?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    connect?: servicosfuncionarioWhereUniqueInput | servicosfuncionarioWhereUniqueInput[]
    update?: servicosfuncionarioUpdateWithWhereUniqueWithoutServicoInput | servicosfuncionarioUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: servicosfuncionarioUpdateManyWithWhereWithoutServicoInput | servicosfuncionarioUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: servicosfuncionarioScalarWhereInput | servicosfuncionarioScalarWhereInput[]
  }

  export type funcionarioCreateNestedOneWithoutServicosfuncionarioInput = {
    create?: XOR<funcionarioCreateWithoutServicosfuncionarioInput, funcionarioUncheckedCreateWithoutServicosfuncionarioInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutServicosfuncionarioInput
    connect?: funcionarioWhereUniqueInput
  }

  export type servicoCreateNestedOneWithoutServicosfuncionarioInput = {
    create?: XOR<servicoCreateWithoutServicosfuncionarioInput, servicoUncheckedCreateWithoutServicosfuncionarioInput>
    connectOrCreate?: servicoCreateOrConnectWithoutServicosfuncionarioInput
    connect?: servicoWhereUniqueInput
  }

  export type funcionarioUpdateOneRequiredWithoutServicosfuncionarioNestedInput = {
    create?: XOR<funcionarioCreateWithoutServicosfuncionarioInput, funcionarioUncheckedCreateWithoutServicosfuncionarioInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutServicosfuncionarioInput
    upsert?: funcionarioUpsertWithoutServicosfuncionarioInput
    connect?: funcionarioWhereUniqueInput
    update?: XOR<XOR<funcionarioUpdateToOneWithWhereWithoutServicosfuncionarioInput, funcionarioUpdateWithoutServicosfuncionarioInput>, funcionarioUncheckedUpdateWithoutServicosfuncionarioInput>
  }

  export type servicoUpdateOneRequiredWithoutServicosfuncionarioNestedInput = {
    create?: XOR<servicoCreateWithoutServicosfuncionarioInput, servicoUncheckedCreateWithoutServicosfuncionarioInput>
    connectOrCreate?: servicoCreateOrConnectWithoutServicosfuncionarioInput
    upsert?: servicoUpsertWithoutServicosfuncionarioInput
    connect?: servicoWhereUniqueInput
    update?: XOR<XOR<servicoUpdateToOneWithWhereWithoutServicosfuncionarioInput, servicoUpdateWithoutServicosfuncionarioInput>, servicoUncheckedUpdateWithoutServicosfuncionarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type equipamentoCreateWithoutClienteInput = {
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
    ordemservico?: ordemservicoCreateNestedManyWithoutEquipamentoInput
  }

  export type equipamentoUncheckedCreateWithoutClienteInput = {
    idEquipamento?: number
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
    ordemservico?: ordemservicoUncheckedCreateNestedManyWithoutEquipamentoInput
  }

  export type equipamentoCreateOrConnectWithoutClienteInput = {
    where: equipamentoWhereUniqueInput
    create: XOR<equipamentoCreateWithoutClienteInput, equipamentoUncheckedCreateWithoutClienteInput>
  }

  export type equipamentoCreateManyClienteInputEnvelope = {
    data: equipamentoCreateManyClienteInput | equipamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type equipamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: equipamentoWhereUniqueInput
    update: XOR<equipamentoUpdateWithoutClienteInput, equipamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<equipamentoCreateWithoutClienteInput, equipamentoUncheckedCreateWithoutClienteInput>
  }

  export type equipamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: equipamentoWhereUniqueInput
    data: XOR<equipamentoUpdateWithoutClienteInput, equipamentoUncheckedUpdateWithoutClienteInput>
  }

  export type equipamentoUpdateManyWithWhereWithoutClienteInput = {
    where: equipamentoScalarWhereInput
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type equipamentoScalarWhereInput = {
    AND?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
    OR?: equipamentoScalarWhereInput[]
    NOT?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
    idEquipamento?: IntFilter<"equipamento"> | number
    Nome?: StringNullableFilter<"equipamento"> | string | null
    Descricao?: StringNullableFilter<"equipamento"> | string | null
    Status?: StringNullableFilter<"equipamento"> | string | null
    Cliente_idCliente?: IntFilter<"equipamento"> | number
  }

  export type clienteCreateWithoutEquipamentoInput = {
    Nome: string
    CPF_CNPJ: string
    EmailContato?: string | null
    TelefoneContato?: string | null
    Logradouro?: string | null
    CEP?: string | null
    Cidade?: string | null
    Bairro?: string | null
    Numero?: number | null
    UF?: string | null
  }

  export type clienteUncheckedCreateWithoutEquipamentoInput = {
    idCliente?: number
    Nome: string
    CPF_CNPJ: string
    EmailContato?: string | null
    TelefoneContato?: string | null
    Logradouro?: string | null
    CEP?: string | null
    Cidade?: string | null
    Bairro?: string | null
    Numero?: number | null
    UF?: string | null
  }

  export type clienteCreateOrConnectWithoutEquipamentoInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutEquipamentoInput, clienteUncheckedCreateWithoutEquipamentoInput>
  }

  export type ordemservicoCreateWithoutEquipamentoInput = {
    servico: servicoCreateNestedOneWithoutOrdemservicoInput
  }

  export type ordemservicoUncheckedCreateWithoutEquipamentoInput = {
    idOrdemServico?: number
    Servico_idServico: number
  }

  export type ordemservicoCreateOrConnectWithoutEquipamentoInput = {
    where: ordemservicoWhereUniqueInput
    create: XOR<ordemservicoCreateWithoutEquipamentoInput, ordemservicoUncheckedCreateWithoutEquipamentoInput>
  }

  export type ordemservicoCreateManyEquipamentoInputEnvelope = {
    data: ordemservicoCreateManyEquipamentoInput | ordemservicoCreateManyEquipamentoInput[]
    skipDuplicates?: boolean
  }

  export type clienteUpsertWithoutEquipamentoInput = {
    update: XOR<clienteUpdateWithoutEquipamentoInput, clienteUncheckedUpdateWithoutEquipamentoInput>
    create: XOR<clienteCreateWithoutEquipamentoInput, clienteUncheckedCreateWithoutEquipamentoInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutEquipamentoInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutEquipamentoInput, clienteUncheckedUpdateWithoutEquipamentoInput>
  }

  export type clienteUpdateWithoutEquipamentoInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    EmailContato?: NullableStringFieldUpdateOperationsInput | string | null
    TelefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    Logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableIntFieldUpdateOperationsInput | number | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateWithoutEquipamentoInput = {
    idCliente?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    EmailContato?: NullableStringFieldUpdateOperationsInput | string | null
    TelefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    Logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Cidade?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableIntFieldUpdateOperationsInput | number | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordemservicoUpsertWithWhereUniqueWithoutEquipamentoInput = {
    where: ordemservicoWhereUniqueInput
    update: XOR<ordemservicoUpdateWithoutEquipamentoInput, ordemservicoUncheckedUpdateWithoutEquipamentoInput>
    create: XOR<ordemservicoCreateWithoutEquipamentoInput, ordemservicoUncheckedCreateWithoutEquipamentoInput>
  }

  export type ordemservicoUpdateWithWhereUniqueWithoutEquipamentoInput = {
    where: ordemservicoWhereUniqueInput
    data: XOR<ordemservicoUpdateWithoutEquipamentoInput, ordemservicoUncheckedUpdateWithoutEquipamentoInput>
  }

  export type ordemservicoUpdateManyWithWhereWithoutEquipamentoInput = {
    where: ordemservicoScalarWhereInput
    data: XOR<ordemservicoUpdateManyMutationInput, ordemservicoUncheckedUpdateManyWithoutEquipamentoInput>
  }

  export type ordemservicoScalarWhereInput = {
    AND?: ordemservicoScalarWhereInput | ordemservicoScalarWhereInput[]
    OR?: ordemservicoScalarWhereInput[]
    NOT?: ordemservicoScalarWhereInput | ordemservicoScalarWhereInput[]
    idOrdemServico?: IntFilter<"ordemservico"> | number
    Equipamento_idEquipamento?: IntFilter<"ordemservico"> | number
    Servico_idServico?: IntFilter<"ordemservico"> | number
  }

  export type servicosfuncionarioCreateWithoutFuncionarioInput = {
    servico: servicoCreateNestedOneWithoutServicosfuncionarioInput
  }

  export type servicosfuncionarioUncheckedCreateWithoutFuncionarioInput = {
    idServicosFuncionario?: number
    Servico_idServico: number
  }

  export type servicosfuncionarioCreateOrConnectWithoutFuncionarioInput = {
    where: servicosfuncionarioWhereUniqueInput
    create: XOR<servicosfuncionarioCreateWithoutFuncionarioInput, servicosfuncionarioUncheckedCreateWithoutFuncionarioInput>
  }

  export type servicosfuncionarioCreateManyFuncionarioInputEnvelope = {
    data: servicosfuncionarioCreateManyFuncionarioInput | servicosfuncionarioCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type servicosfuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: servicosfuncionarioWhereUniqueInput
    update: XOR<servicosfuncionarioUpdateWithoutFuncionarioInput, servicosfuncionarioUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<servicosfuncionarioCreateWithoutFuncionarioInput, servicosfuncionarioUncheckedCreateWithoutFuncionarioInput>
  }

  export type servicosfuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: servicosfuncionarioWhereUniqueInput
    data: XOR<servicosfuncionarioUpdateWithoutFuncionarioInput, servicosfuncionarioUncheckedUpdateWithoutFuncionarioInput>
  }

  export type servicosfuncionarioUpdateManyWithWhereWithoutFuncionarioInput = {
    where: servicosfuncionarioScalarWhereInput
    data: XOR<servicosfuncionarioUpdateManyMutationInput, servicosfuncionarioUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type servicosfuncionarioScalarWhereInput = {
    AND?: servicosfuncionarioScalarWhereInput | servicosfuncionarioScalarWhereInput[]
    OR?: servicosfuncionarioScalarWhereInput[]
    NOT?: servicosfuncionarioScalarWhereInput | servicosfuncionarioScalarWhereInput[]
    idServicosFuncionario?: IntFilter<"servicosfuncionario"> | number
    Funcionario_idUsuario?: IntFilter<"servicosfuncionario"> | number
    Servico_idServico?: IntFilter<"servicosfuncionario"> | number
  }

  export type equipamentoCreateWithoutOrdemservicoInput = {
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
    cliente: clienteCreateNestedOneWithoutEquipamentoInput
  }

  export type equipamentoUncheckedCreateWithoutOrdemservicoInput = {
    idEquipamento?: number
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
    Cliente_idCliente: number
  }

  export type equipamentoCreateOrConnectWithoutOrdemservicoInput = {
    where: equipamentoWhereUniqueInput
    create: XOR<equipamentoCreateWithoutOrdemservicoInput, equipamentoUncheckedCreateWithoutOrdemservicoInput>
  }

  export type servicoCreateWithoutOrdemservicoInput = {
    TipoServico?: string | null
    DataInicio?: Date | string | null
    DataFim?: Date | string | null
    Status?: string | null
    Setor?: string | null
    servicosfuncionario?: servicosfuncionarioCreateNestedManyWithoutServicoInput
  }

  export type servicoUncheckedCreateWithoutOrdemservicoInput = {
    idServico?: number
    TipoServico?: string | null
    DataInicio?: Date | string | null
    DataFim?: Date | string | null
    Status?: string | null
    Setor?: string | null
    servicosfuncionario?: servicosfuncionarioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type servicoCreateOrConnectWithoutOrdemservicoInput = {
    where: servicoWhereUniqueInput
    create: XOR<servicoCreateWithoutOrdemservicoInput, servicoUncheckedCreateWithoutOrdemservicoInput>
  }

  export type equipamentoUpsertWithoutOrdemservicoInput = {
    update: XOR<equipamentoUpdateWithoutOrdemservicoInput, equipamentoUncheckedUpdateWithoutOrdemservicoInput>
    create: XOR<equipamentoCreateWithoutOrdemservicoInput, equipamentoUncheckedCreateWithoutOrdemservicoInput>
    where?: equipamentoWhereInput
  }

  export type equipamentoUpdateToOneWithWhereWithoutOrdemservicoInput = {
    where?: equipamentoWhereInput
    data: XOR<equipamentoUpdateWithoutOrdemservicoInput, equipamentoUncheckedUpdateWithoutOrdemservicoInput>
  }

  export type equipamentoUpdateWithoutOrdemservicoInput = {
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: clienteUpdateOneRequiredWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateWithoutOrdemservicoInput = {
    idEquipamento?: IntFieldUpdateOperationsInput | number
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Cliente_idCliente?: IntFieldUpdateOperationsInput | number
  }

  export type servicoUpsertWithoutOrdemservicoInput = {
    update: XOR<servicoUpdateWithoutOrdemservicoInput, servicoUncheckedUpdateWithoutOrdemservicoInput>
    create: XOR<servicoCreateWithoutOrdemservicoInput, servicoUncheckedCreateWithoutOrdemservicoInput>
    where?: servicoWhereInput
  }

  export type servicoUpdateToOneWithWhereWithoutOrdemservicoInput = {
    where?: servicoWhereInput
    data: XOR<servicoUpdateWithoutOrdemservicoInput, servicoUncheckedUpdateWithoutOrdemservicoInput>
  }

  export type servicoUpdateWithoutOrdemservicoInput = {
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    servicosfuncionario?: servicosfuncionarioUpdateManyWithoutServicoNestedInput
  }

  export type servicoUncheckedUpdateWithoutOrdemservicoInput = {
    idServico?: IntFieldUpdateOperationsInput | number
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    servicosfuncionario?: servicosfuncionarioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ordemservicoCreateWithoutServicoInput = {
    equipamento: equipamentoCreateNestedOneWithoutOrdemservicoInput
  }

  export type ordemservicoUncheckedCreateWithoutServicoInput = {
    idOrdemServico?: number
    Equipamento_idEquipamento: number
  }

  export type ordemservicoCreateOrConnectWithoutServicoInput = {
    where: ordemservicoWhereUniqueInput
    create: XOR<ordemservicoCreateWithoutServicoInput, ordemservicoUncheckedCreateWithoutServicoInput>
  }

  export type ordemservicoCreateManyServicoInputEnvelope = {
    data: ordemservicoCreateManyServicoInput | ordemservicoCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type servicosfuncionarioCreateWithoutServicoInput = {
    funcionario: funcionarioCreateNestedOneWithoutServicosfuncionarioInput
  }

  export type servicosfuncionarioUncheckedCreateWithoutServicoInput = {
    idServicosFuncionario?: number
    Funcionario_idUsuario: number
  }

  export type servicosfuncionarioCreateOrConnectWithoutServicoInput = {
    where: servicosfuncionarioWhereUniqueInput
    create: XOR<servicosfuncionarioCreateWithoutServicoInput, servicosfuncionarioUncheckedCreateWithoutServicoInput>
  }

  export type servicosfuncionarioCreateManyServicoInputEnvelope = {
    data: servicosfuncionarioCreateManyServicoInput | servicosfuncionarioCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type ordemservicoUpsertWithWhereUniqueWithoutServicoInput = {
    where: ordemservicoWhereUniqueInput
    update: XOR<ordemservicoUpdateWithoutServicoInput, ordemservicoUncheckedUpdateWithoutServicoInput>
    create: XOR<ordemservicoCreateWithoutServicoInput, ordemservicoUncheckedCreateWithoutServicoInput>
  }

  export type ordemservicoUpdateWithWhereUniqueWithoutServicoInput = {
    where: ordemservicoWhereUniqueInput
    data: XOR<ordemservicoUpdateWithoutServicoInput, ordemservicoUncheckedUpdateWithoutServicoInput>
  }

  export type ordemservicoUpdateManyWithWhereWithoutServicoInput = {
    where: ordemservicoScalarWhereInput
    data: XOR<ordemservicoUpdateManyMutationInput, ordemservicoUncheckedUpdateManyWithoutServicoInput>
  }

  export type servicosfuncionarioUpsertWithWhereUniqueWithoutServicoInput = {
    where: servicosfuncionarioWhereUniqueInput
    update: XOR<servicosfuncionarioUpdateWithoutServicoInput, servicosfuncionarioUncheckedUpdateWithoutServicoInput>
    create: XOR<servicosfuncionarioCreateWithoutServicoInput, servicosfuncionarioUncheckedCreateWithoutServicoInput>
  }

  export type servicosfuncionarioUpdateWithWhereUniqueWithoutServicoInput = {
    where: servicosfuncionarioWhereUniqueInput
    data: XOR<servicosfuncionarioUpdateWithoutServicoInput, servicosfuncionarioUncheckedUpdateWithoutServicoInput>
  }

  export type servicosfuncionarioUpdateManyWithWhereWithoutServicoInput = {
    where: servicosfuncionarioScalarWhereInput
    data: XOR<servicosfuncionarioUpdateManyMutationInput, servicosfuncionarioUncheckedUpdateManyWithoutServicoInput>
  }

  export type funcionarioCreateWithoutServicosfuncionarioInput = {
    Nome: string
    Senha: string
    TipoUsuario: number
  }

  export type funcionarioUncheckedCreateWithoutServicosfuncionarioInput = {
    idUsuario?: number
    Nome: string
    Senha: string
    TipoUsuario: number
  }

  export type funcionarioCreateOrConnectWithoutServicosfuncionarioInput = {
    where: funcionarioWhereUniqueInput
    create: XOR<funcionarioCreateWithoutServicosfuncionarioInput, funcionarioUncheckedCreateWithoutServicosfuncionarioInput>
  }

  export type servicoCreateWithoutServicosfuncionarioInput = {
    TipoServico?: string | null
    DataInicio?: Date | string | null
    DataFim?: Date | string | null
    Status?: string | null
    Setor?: string | null
    ordemservico?: ordemservicoCreateNestedManyWithoutServicoInput
  }

  export type servicoUncheckedCreateWithoutServicosfuncionarioInput = {
    idServico?: number
    TipoServico?: string | null
    DataInicio?: Date | string | null
    DataFim?: Date | string | null
    Status?: string | null
    Setor?: string | null
    ordemservico?: ordemservicoUncheckedCreateNestedManyWithoutServicoInput
  }

  export type servicoCreateOrConnectWithoutServicosfuncionarioInput = {
    where: servicoWhereUniqueInput
    create: XOR<servicoCreateWithoutServicosfuncionarioInput, servicoUncheckedCreateWithoutServicosfuncionarioInput>
  }

  export type funcionarioUpsertWithoutServicosfuncionarioInput = {
    update: XOR<funcionarioUpdateWithoutServicosfuncionarioInput, funcionarioUncheckedUpdateWithoutServicosfuncionarioInput>
    create: XOR<funcionarioCreateWithoutServicosfuncionarioInput, funcionarioUncheckedCreateWithoutServicosfuncionarioInput>
    where?: funcionarioWhereInput
  }

  export type funcionarioUpdateToOneWithWhereWithoutServicosfuncionarioInput = {
    where?: funcionarioWhereInput
    data: XOR<funcionarioUpdateWithoutServicosfuncionarioInput, funcionarioUncheckedUpdateWithoutServicosfuncionarioInput>
  }

  export type funcionarioUpdateWithoutServicosfuncionarioInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    TipoUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type funcionarioUncheckedUpdateWithoutServicosfuncionarioInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Senha?: StringFieldUpdateOperationsInput | string
    TipoUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type servicoUpsertWithoutServicosfuncionarioInput = {
    update: XOR<servicoUpdateWithoutServicosfuncionarioInput, servicoUncheckedUpdateWithoutServicosfuncionarioInput>
    create: XOR<servicoCreateWithoutServicosfuncionarioInput, servicoUncheckedCreateWithoutServicosfuncionarioInput>
    where?: servicoWhereInput
  }

  export type servicoUpdateToOneWithWhereWithoutServicosfuncionarioInput = {
    where?: servicoWhereInput
    data: XOR<servicoUpdateWithoutServicosfuncionarioInput, servicoUncheckedUpdateWithoutServicosfuncionarioInput>
  }

  export type servicoUpdateWithoutServicosfuncionarioInput = {
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    ordemservico?: ordemservicoUpdateManyWithoutServicoNestedInput
  }

  export type servicoUncheckedUpdateWithoutServicosfuncionarioInput = {
    idServico?: IntFieldUpdateOperationsInput | number
    TipoServico?: NullableStringFieldUpdateOperationsInput | string | null
    DataInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    ordemservico?: ordemservicoUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type equipamentoCreateManyClienteInput = {
    idEquipamento?: number
    Nome?: string | null
    Descricao?: string | null
    Status?: string | null
  }

  export type equipamentoUpdateWithoutClienteInput = {
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    ordemservico?: ordemservicoUpdateManyWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateWithoutClienteInput = {
    idEquipamento?: IntFieldUpdateOperationsInput | number
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    ordemservico?: ordemservicoUncheckedUpdateManyWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateManyWithoutClienteInput = {
    idEquipamento?: IntFieldUpdateOperationsInput | number
    Nome?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordemservicoCreateManyEquipamentoInput = {
    idOrdemServico?: number
    Servico_idServico: number
  }

  export type ordemservicoUpdateWithoutEquipamentoInput = {
    servico?: servicoUpdateOneRequiredWithoutOrdemservicoNestedInput
  }

  export type ordemservicoUncheckedUpdateWithoutEquipamentoInput = {
    idOrdemServico?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type ordemservicoUncheckedUpdateManyWithoutEquipamentoInput = {
    idOrdemServico?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type servicosfuncionarioCreateManyFuncionarioInput = {
    idServicosFuncionario?: number
    Servico_idServico: number
  }

  export type servicosfuncionarioUpdateWithoutFuncionarioInput = {
    servico?: servicoUpdateOneRequiredWithoutServicosfuncionarioNestedInput
  }

  export type servicosfuncionarioUncheckedUpdateWithoutFuncionarioInput = {
    idServicosFuncionario?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type servicosfuncionarioUncheckedUpdateManyWithoutFuncionarioInput = {
    idServicosFuncionario?: IntFieldUpdateOperationsInput | number
    Servico_idServico?: IntFieldUpdateOperationsInput | number
  }

  export type ordemservicoCreateManyServicoInput = {
    idOrdemServico?: number
    Equipamento_idEquipamento: number
  }

  export type servicosfuncionarioCreateManyServicoInput = {
    idServicosFuncionario?: number
    Funcionario_idUsuario: number
  }

  export type ordemservicoUpdateWithoutServicoInput = {
    equipamento?: equipamentoUpdateOneRequiredWithoutOrdemservicoNestedInput
  }

  export type ordemservicoUncheckedUpdateWithoutServicoInput = {
    idOrdemServico?: IntFieldUpdateOperationsInput | number
    Equipamento_idEquipamento?: IntFieldUpdateOperationsInput | number
  }

  export type ordemservicoUncheckedUpdateManyWithoutServicoInput = {
    idOrdemServico?: IntFieldUpdateOperationsInput | number
    Equipamento_idEquipamento?: IntFieldUpdateOperationsInput | number
  }

  export type servicosfuncionarioUpdateWithoutServicoInput = {
    funcionario?: funcionarioUpdateOneRequiredWithoutServicosfuncionarioNestedInput
  }

  export type servicosfuncionarioUncheckedUpdateWithoutServicoInput = {
    idServicosFuncionario?: IntFieldUpdateOperationsInput | number
    Funcionario_idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type servicosfuncionarioUncheckedUpdateManyWithoutServicoInput = {
    idServicosFuncionario?: IntFieldUpdateOperationsInput | number
    Funcionario_idUsuario?: IntFieldUpdateOperationsInput | number
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