/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {expect} from 'tstyche';
import {jest} from '@jest/globals';
import type {
  Mock,
  MockInstance,
  Mocked,
  MockedClass,
  MockedFunction,
  MockedObject,
  MockedShallow,
  ModuleMocker,
} from 'jest-mock';

expect(
  jest
    .autoMockOff()
    .autoMockOn()
    .clearAllMocks()
    .disableAutomock()
    .enableAutomock()
    .deepUnmock('moduleName')
    .doMock('moduleName')
    .doMock('moduleName', jest.fn())
    .doMock('moduleName', jest.fn(), {})
    .doMock('moduleName', jest.fn(), {virtual: true})
    .dontMock('moduleName')
    .isolateModules(() => {})
    .mock('moduleName')
    .mock('moduleName', jest.fn())
    .mock('moduleName', jest.fn(), {})
    .mock('moduleName', jest.fn(), {virtual: true})
    .unstable_mockModule('moduleName', jest.fn())
    .unstable_mockModule('moduleName', () => Promise.resolve(jest.fn()))
    .unstable_mockModule('moduleName', jest.fn(), {})
    .unstable_mockModule('moduleName', () => Promise.resolve(jest.fn()), {})
    .unstable_mockModule('moduleName', jest.fn(), {virtual: true})
    .unstable_mockModule('moduleName', () => Promise.resolve(jest.fn()), {
      virtual: true,
    })
    .resetAllMocks()
    .resetModules()
    .restoreAllMocks()
    .retryTimes(3)
    .setMock('moduleName', {a: 'b'})
    .setTimeout(6000)
    .unmock('moduleName')
    .useFakeTimers()
    .useFakeTimers({legacyFakeTimers: true})
    .useRealTimers(),
).type.toEqual<typeof jest>();

expect(jest.autoMockOff()).type.toEqual<typeof jest>();
expect(jest.autoMockOff(true)).type.toRaiseError();

expect(jest.autoMockOn()).type.toEqual<typeof jest>();
expect(jest.autoMockOn(false)).type.toRaiseError();

const someModule = {
  methodA: () => {},
  propertyB: 'B',
};

expect(jest.createMockFromModule('moduleName')).type.toBeUnknown();
expect(jest.createMockFromModule<typeof someModule>('moduleName')).type.toEqual<
  Mocked<typeof someModule>
>();
expect(jest.createMockFromModule()).type.toRaiseError();

expect(jest.deepUnmock('moduleName')).type.toEqual<typeof jest>();
expect(jest.deepUnmock()).type.toRaiseError();

expect(jest.doMock('moduleName')).type.toEqual<typeof jest>();
expect(jest.doMock('moduleName', jest.fn())).type.toEqual<typeof jest>();
expect(
  jest.doMock<{some: 'test'}>('moduleName', () => ({some: 'test'})),
).type.toEqual<typeof jest>();
expect(jest.doMock('moduleName', jest.fn(), {})).type.toEqual<typeof jest>();
expect(jest.doMock('moduleName', jest.fn(), {virtual: true})).type.toEqual<
  typeof jest
>();
expect(jest.doMock()).type.toRaiseError();
expect(
  jest.doMock<{some: 'test'}>('moduleName', () => false),
).type.toRaiseError();

expect(jest.dontMock('moduleName')).type.toEqual<typeof jest>();
expect(jest.dontMock()).type.toRaiseError();

expect(jest.disableAutomock()).type.toEqual<typeof jest>();
expect(jest.disableAutomock(true)).type.toRaiseError();

expect(jest.enableAutomock()).type.toEqual<typeof jest>();
expect(jest.enableAutomock('moduleName')).type.toRaiseError();

expect(jest.isolateModules(() => {})).type.toEqual<typeof jest>();
expect(jest.isolateModules()).type.toRaiseError();

expect(jest.isolateModulesAsync(async () => {})).type.toEqual<Promise<void>>();
expect(jest.isolateModulesAsync(() => {})).type.toRaiseError();
expect(jest.isolateModulesAsync()).type.toRaiseError();

expect(jest.mock('moduleName')).type.toEqual<typeof jest>();
expect(jest.mock('moduleName', jest.fn())).type.toEqual<typeof jest>();
expect(
  jest.mock<{some: 'test'}>('moduleName', () => ({some: 'test'})),
).type.toEqual<typeof jest>();
expect(jest.mock('moduleName', jest.fn(), {})).type.toEqual<typeof jest>();
expect(jest.mock('moduleName', jest.fn(), {virtual: true})).type.toEqual<
  typeof jest
>();
expect(jest.mock()).type.toRaiseError();
expect(
  jest.mock<{some: 'test'}>('moduleName', () => false),
).type.toRaiseError();

expect(jest.unstable_mockModule('moduleName', jest.fn())).type.toEqual<
  typeof jest
>();
expect(
  jest.unstable_mockModule<{some: 'test'}>('moduleName', () => ({
    some: 'test',
  })),
).type.toEqual<typeof jest>();
expect(
  jest.unstable_mockModule('moduleName', () => Promise.resolve(jest.fn())),
).type.toEqual<typeof jest>();
expect(
  jest.unstable_mockModule<{some: 'test'}>('moduleName', () =>
    Promise.resolve({
      some: 'test',
    }),
  ),
).type.toEqual<typeof jest>();
expect(jest.unstable_mockModule('moduleName', jest.fn(), {})).type.toEqual<
  typeof jest
>();
expect(
  jest.unstable_mockModule('moduleName', () => Promise.resolve(jest.fn()), {}),
).type.toEqual<typeof jest>();
expect(
  jest.unstable_mockModule('moduleName', jest.fn(), {virtual: true}),
).type.toEqual<typeof jest>();
expect(
  jest.unstable_mockModule('moduleName', () => Promise.resolve(jest.fn()), {
    virtual: true,
  }),
).type.toEqual<typeof jest>();
expect(jest.unstable_mockModule('moduleName')).type.toRaiseError();
expect(
  jest.unstable_mockModule<{some: 'test'}>('moduleName', () => false),
).type.toRaiseError();
expect(
  jest.unstable_mockModule<{some: 'test'}>('moduleName', () =>
    Promise.resolve(false),
  ),
).type.toRaiseError();

expect(jest.requireActual('./pathToModule')).type.toBeUnknown();
expect(jest.requireActual<{some: 'module'}>('./pathToModule')).type.toEqual<{
  some: 'module';
}>();
expect(jest.requireActual()).type.toRaiseError();

expect(jest.requireMock('./pathToModule')).type.toBeUnknown();
expect(jest.requireMock<{some: 'module'}>('./pathToModule')).type.toEqual<{
  some: 'module';
}>();
expect(jest.requireMock()).type.toRaiseError();

expect(jest.resetModules()).type.toEqual<typeof jest>();
expect(jest.resetModules('moduleName')).type.toRaiseError();

expect(jest.setMock('moduleName', {a: 'b'})).type.toEqual<typeof jest>();
expect(jest.setMock('moduleName')).type.toRaiseError();

expect(jest.unmock('moduleName')).type.toEqual<typeof jest>();
expect(jest.unmock()).type.toRaiseError();

// Mock Functions

expect(jest.clearAllMocks()).type.toEqual<typeof jest>();
expect(jest.clearAllMocks('moduleName')).type.toRaiseError();

expect(jest.resetAllMocks()).type.toEqual<typeof jest>();
expect(jest.resetAllMocks(true)).type.toRaiseError();

expect(jest.restoreAllMocks()).type.toEqual<typeof jest>();
expect(jest.restoreAllMocks(false)).type.toRaiseError();

expect(jest.isMockFunction(() => {})).type.toBeBoolean();
expect(jest.isMockFunction()).type.toRaiseError();

const maybeMock = (a: string, b: number) => true;

if (jest.isMockFunction(maybeMock)) {
  expect(maybeMock).type.toEqual<Mock<(a: string, b: number) => boolean>>();

  maybeMock.mockReturnValueOnce(false);
  expect(maybeMock.mockReturnValueOnce(123)).type.toRaiseError();
}

if (!jest.isMockFunction(maybeMock)) {
  expect(maybeMock).type.toEqual<(a: string, b: number) => boolean>();
}

const surelyMock = jest.fn((a: string, b: number) => true);

if (jest.isMockFunction(surelyMock)) {
  expect(surelyMock).type.toEqual<Mock<(a: string, b: number) => boolean>>();

  surelyMock.mockReturnValueOnce(false);
  expect(surelyMock.mockReturnValueOnce(123)).type.toRaiseError();
}

if (!jest.isMockFunction(surelyMock)) {
  expect(surelyMock).type.toBeNever();
}

const spiedObject = {
  methodA(a: number, b: string) {
    return true;
  },
};

const surelySpy = jest.spyOn(spiedObject, 'methodA');

if (jest.isMockFunction(surelySpy)) {
  expect(surelySpy).type.toEqual<
    MockInstance<(a: number, b: string) => boolean>
  >();

  surelySpy.mockReturnValueOnce(false);
  expect(surelyMock.mockReturnValueOnce(123)).type.toRaiseError();
}

if (!jest.isMockFunction(surelySpy)) {
  expect(surelySpy).type.toBeNever();
}

declare const stringMaybeMock: string;

if (jest.isMockFunction(stringMaybeMock)) {
  expect(stringMaybeMock).type.toEqual<
    string & Mock<(...args: Array<unknown>) => unknown>
  >();
}

if (!jest.isMockFunction(stringMaybeMock)) {
  expect(stringMaybeMock).type.toBeString();
}

declare const anyMaybeMock: any;

if (jest.isMockFunction(anyMaybeMock)) {
  expect(anyMaybeMock).type.toEqual<
    Mock<(...args: Array<unknown>) => unknown>
  >();
}

if (!jest.isMockFunction(anyMaybeMock)) {
  expect(anyMaybeMock).type.toBeAny();
}

declare const unknownMaybeMock: unknown;

if (jest.isMockFunction(unknownMaybeMock)) {
  expect(unknownMaybeMock).type.toEqual<
    Mock<(...args: Array<unknown>) => unknown>
  >();
}

if (!jest.isMockFunction(unknownMaybeMock)) {
  expect(unknownMaybeMock).type.toBeUnknown();
}

expect(jest.fn).type.toEqual<ModuleMocker['fn']>();

expect(jest.spyOn).type.toEqual<ModuleMocker['spyOn']>();

expect(jest.replaceProperty).type.toEqual<ModuleMocker['replaceProperty']>();

// Mock<T>

expect({} as jest.Mock<() => boolean>).type.toEqual<Mock<() => boolean>>();
expect({} as jest.Mock<(a: string) => string>).type.toEqual<
  Mock<(a: string) => string>
>();

// Mocked*<T>

class SomeClass {
  constructor(one: string, two?: boolean) {}

  methodA() {
    return true;
  }
  methodB(a: string, b?: number) {
    return;
  }
}

function someFunction(a: string, b?: number): boolean {
  return true;
}

const someObject = {
  SomeClass,

  _propertyC: false,

  methodA() {
    return;
  },
  methodB(b: string) {
    return true;
  },
  methodC: (c: number) => true,

  one: {
    more: {
      time: (t: number) => {
        return;
      },
    },
  },

  propertyA: 123,

  propertyB: 'value',

  set propertyC(value) {
    this._propertyC = value;
  },
  get propertyC() {
    return this._propertyC;
  },

  someClassInstance: new SomeClass('value'),
};

expect(someObject as jest.Mocked<typeof someObject>).type.toEqual<
  Mocked<typeof someObject>
>();

expect(SomeClass as jest.MockedClass<typeof SomeClass>).type.toEqual<
  MockedClass<typeof SomeClass>
>();

expect(someFunction as jest.MockedFunction<typeof someFunction>).type.toEqual<
  MockedFunction<typeof someFunction>
>();

expect(someObject as jest.MockedObject<typeof someObject>).type.toEqual<
  MockedObject<typeof someObject>
>();

// mocked()

expect(jest.mocked(someObject)).type.toEqual<Mocked<typeof someObject>>();
expect(jest.mocked(someObject, {shallow: false})).type.toEqual<
  Mocked<typeof someObject>
>();
expect(jest.mocked(someObject, {shallow: true})).type.toEqual<
  MockedShallow<typeof someObject>
>();

expect(jest.mocked('abc')).type.toRaiseError();

const mockObjectA = jest.mocked(someObject);

expect(mockObjectA.methodA.mock.calls[0]).type.toEqual<[]>();
expect(mockObjectA.methodB.mock.calls[0]).type.toEqual<[b: string]>();
expect(mockObjectA.methodC.mock.calls[0]).type.toEqual<[c: number]>();

expect(mockObjectA.one.more.time.mock.calls[0]).type.toEqual<[t: number]>();

expect(mockObjectA.SomeClass.mock.calls[0]).type.toEqual<
  [one: string, two?: boolean]
>();
expect(mockObjectA.SomeClass.prototype.methodA.mock.calls[0]).type.toEqual<
  []
>();
expect(mockObjectA.SomeClass.prototype.methodB.mock.calls[0]).type.toEqual<
  [a: string, b?: number]
>();

expect(mockObjectA.someClassInstance.methodA.mock.calls[0]).type.toEqual<[]>();
expect(mockObjectA.someClassInstance.methodB.mock.calls[0]).type.toEqual<
  [a: string, b?: number]
>();

expect(mockObjectA.methodA.mockReturnValue(123)).type.toRaiseError();
expect(
  mockObjectA.methodA.mockImplementation((a: number) => 123),
).type.toRaiseError();
expect(mockObjectA.methodB.mockReturnValue(123)).type.toRaiseError();
expect(
  mockObjectA.methodB.mockImplementation((b: number) => 123),
).type.toRaiseError();
expect(mockObjectA.methodC.mockReturnValue(123)).type.toRaiseError();
expect(
  mockObjectA.methodC.mockImplementation((c: number) => 123),
).type.toRaiseError();

expect(mockObjectA.one.more.time.mockReturnValue(123)).type.toRaiseError();
expect(
  mockObjectA.one.more.time.mockImplementation((t: boolean) => 123),
).type.toRaiseError();

expect(
  mockObjectA.SomeClass.prototype.methodA.mockReturnValue(123),
).type.toRaiseError();
expect(
  mockObjectA.SomeClass.prototype.methodA.mockImplementation(
    (a: number) => 123,
  ),
).type.toRaiseError();
expect(
  mockObjectA.SomeClass.prototype.methodB.mockReturnValue(123),
).type.toRaiseError();
expect(
  mockObjectA.SomeClass.prototype.methodB.mockImplementation(
    (a: number) => 123,
  ),
).type.toRaiseError();

expect(
  mockObjectA.someClassInstance.methodA.mockReturnValue(123),
).type.toRaiseError();
expect(
  mockObjectA.someClassInstance.methodA.mockImplementation((a: number) => 123),
).type.toRaiseError();
expect(
  mockObjectA.someClassInstance.methodB.mockReturnValue(123),
).type.toRaiseError();
expect(
  mockObjectA.someClassInstance.methodB.mockImplementation((a: number) => 123),
).type.toRaiseError();

expect<typeof someObject>().type.toBeAssignable(mockObjectA);

// shallow mocked()

const mockObjectB = jest.mocked(someObject, {shallow: true});

expect(mockObjectB.methodA.mock.calls[0]).type.toEqual<[]>();
expect(mockObjectB.methodB.mock.calls[0]).type.toEqual<[b: string]>();
expect(mockObjectB.methodC.mock.calls[0]).type.toEqual<[c: number]>();

expect(mockObjectB.one.more.time.mock.calls[0]).type.toRaiseError();

expect(mockObjectB.SomeClass.mock.calls[0]).type.toEqual<
  [one: string, two?: boolean]
>();
expect(mockObjectB.SomeClass.prototype.methodA.mock.calls[0]).type.toEqual<
  []
>();
expect(mockObjectB.SomeClass.prototype.methodB.mock.calls[0]).type.toEqual<
  [a: string, b?: number]
>();

expect(mockObjectB.someClassInstance.methodA.mock.calls[0]).type.toRaiseError();
expect(mockObjectB.someClassInstance.methodB.mock.calls[0]).type.toRaiseError();

expect(mockObjectB.methodA.mockReturnValue(123)).type.toRaiseError();
expect(
  mockObjectB.methodA.mockImplementation((a: number) => 123),
).type.toRaiseError();
expect(mockObjectB.methodB.mockReturnValue(123)).type.toRaiseError();
expect(
  mockObjectB.methodB.mockImplementation((b: number) => 123),
).type.toRaiseError();
expect(mockObjectB.methodC.mockReturnValue(123)).type.toRaiseError();
expect(
  mockObjectB.methodC.mockImplementation((c: number) => 123),
).type.toRaiseError();

expect(
  mockObjectB.SomeClass.prototype.methodA.mockReturnValue(123),
).type.toRaiseError();
expect(
  mockObjectB.SomeClass.prototype.methodA.mockImplementation(
    (a: number) => 123,
  ),
).type.toRaiseError();
expect(
  mockObjectB.SomeClass.prototype.methodB.mockReturnValue(123),
).type.toRaiseError();
expect(
  mockObjectB.SomeClass.prototype.methodB.mockImplementation(
    (a: number) => 123,
  ),
).type.toRaiseError();

expect<typeof someObject>().type.toBeAssignable(mockObjectB);

// Replaced

expect<jest.Replaced<number>>().type.toBeAssignable(
  jest.replaceProperty(someObject, 'propertyA', 123),
);

// Spied

expect<jest.Spied<typeof someObject.methodA>>().type.toBeAssignable(
  jest.spyOn(someObject, 'methodA'),
);

expect<jest.Spied<typeof someObject.SomeClass>>().type.toBeAssignable(
  jest.spyOn(someObject, 'SomeClass'),
);

// Spied*

expect<jest.SpiedClass<typeof someObject.SomeClass>>().type.toBeAssignable(
  jest.spyOn(someObject, 'SomeClass'),
);

expect<jest.SpiedFunction<typeof someObject.methodB>>().type.toBeAssignable(
  jest.spyOn(someObject, 'methodB'),
);

expect<jest.SpiedGetter<typeof someObject.propertyC>>().type.toBeAssignable(
  jest.spyOn(someObject, 'propertyC', 'get'),
);

expect<jest.SpiedSetter<typeof someObject.propertyC>>().type.toBeAssignable(
  jest.spyOn(someObject, 'propertyC', 'set'),
);

// Mock Timers

expect(jest.advanceTimersByTime(6000)).type.toBeVoid();
expect(jest.advanceTimersByTime()).type.toRaiseError();

expect(jest.advanceTimersByTimeAsync(6000)).type.toEqual<Promise<void>>();
expect(jest.advanceTimersByTimeAsync()).type.toRaiseError();

expect(jest.advanceTimersToNextTimer()).type.toBeVoid();
expect(jest.advanceTimersToNextTimer(2)).type.toBeVoid();
expect(jest.advanceTimersToNextTimer('2')).type.toRaiseError();

expect(jest.advanceTimersToNextTimerAsync()).type.toEqual<Promise<void>>();
expect(jest.advanceTimersToNextTimerAsync(2)).type.toEqual<Promise<void>>();
expect(jest.advanceTimersToNextTimerAsync('2')).type.toRaiseError();

expect(jest.clearAllTimers()).type.toBeVoid();
expect(jest.clearAllTimers(false)).type.toRaiseError();

expect(jest.getTimerCount()).type.toBeNumber();
expect(jest.getTimerCount(true)).type.toRaiseError();

expect(jest.now()).type.toBeNumber();
expect(jest.now('1995-12-17T03:24:00')).type.toRaiseError();

expect(jest.getRealSystemTime()).type.toBeNumber();
expect(jest.getRealSystemTime(true)).type.toRaiseError();

expect(jest.runAllImmediates()).type.toBeVoid();
expect(jest.runAllImmediates(true)).type.toRaiseError();

expect(jest.runAllTicks()).type.toBeVoid();
expect(jest.runAllTicks(true)).type.toRaiseError();

expect(jest.runAllTimers()).type.toBeVoid();
expect(jest.runAllTimers(false)).type.toRaiseError();

expect(jest.runAllTimersAsync()).type.toEqual<Promise<void>>();
expect(jest.runAllTimersAsync(false)).type.toRaiseError();

expect(jest.runOnlyPendingTimers()).type.toBeVoid();
expect(jest.runOnlyPendingTimers(true)).type.toRaiseError();

expect(jest.runOnlyPendingTimersAsync()).type.toEqual<Promise<void>>();
expect(jest.runOnlyPendingTimersAsync(true)).type.toRaiseError();

expect(jest.advanceTimersToNextFrame()).type.toBeVoid();
expect(jest.advanceTimersToNextFrame(true)).type.toRaiseError();
expect(jest.advanceTimersToNextFrame(100)).type.toRaiseError();

expect(jest.setSystemTime()).type.toBeVoid();
expect(jest.setSystemTime(1_483_228_800_000)).type.toBeVoid();
expect(jest.setSystemTime(Date.now())).type.toBeVoid();
expect(jest.setSystemTime(new Date(1995, 11, 17))).type.toBeVoid();
expect(jest.setSystemTime('1995-12-17T03:24:00')).type.toRaiseError();

expect(jest.useFakeTimers()).type.toEqual<typeof jest>();

expect(jest.useFakeTimers({advanceTimers: true})).type.toEqual<typeof jest>();
expect(jest.useFakeTimers({advanceTimers: 10})).type.toEqual<typeof jest>();
expect(jest.useFakeTimers({advanceTimers: 'fast'})).type.toRaiseError();

expect(jest.useFakeTimers({doNotFake: ['Date']})).type.toEqual<typeof jest>();
expect(
  jest.useFakeTimers({
    doNotFake: [
      'Date',
      'hrtime',
      'nextTick',
      'performance',
      'queueMicrotask',
      'requestAnimationFrame',
      'cancelAnimationFrame',
      'requestIdleCallback',
      'cancelIdleCallback',
      'setImmediate',
      'clearImmediate',
      'setInterval',
      'clearInterval',
      'setTimeout',
      'clearTimeout',
    ],
  }),
).type.toEqual<typeof jest>();
expect(jest.useFakeTimers({doNotFake: ['globalThis']})).type.toRaiseError();

expect(jest.useFakeTimers({legacyFakeTimers: true})).type.toEqual<
  typeof jest
>();
expect(jest.useFakeTimers({legacyFakeTimers: 1000})).type.toRaiseError();
expect(
  jest.useFakeTimers({doNotFake: ['Date'], legacyFakeTimers: true}),
).type.toRaiseError();
expect(
  jest.useFakeTimers({enableGlobally: true, legacyFakeTimers: true}),
).type.toRaiseError();
expect(
  jest.useFakeTimers({legacyFakeTimers: true, now: 1_483_228_800_000}),
).type.toRaiseError();
expect(
  jest.useFakeTimers({legacyFakeTimers: true, timerLimit: 1000}),
).type.toRaiseError();

expect(jest.useFakeTimers({now: 1_483_228_800_000})).type.toEqual<
  typeof jest
>();
expect(jest.useFakeTimers({now: Date.now()})).type.toEqual<typeof jest>();
expect(jest.useFakeTimers({now: new Date(1995, 11, 17)})).type.toEqual<
  typeof jest
>();
expect(jest.useFakeTimers({now: '1995-12-17T03:24:00'})).type.toRaiseError();

expect(jest.useFakeTimers({timerLimit: 1000})).type.toEqual<typeof jest>();
expect(jest.useFakeTimers({timerLimit: true})).type.toRaiseError();

expect(jest.useFakeTimers({enableGlobally: true})).type.toRaiseError();
expect(jest.useFakeTimers('legacy')).type.toRaiseError();
expect(jest.useFakeTimers('modern')).type.toRaiseError();

expect(jest.useRealTimers()).type.toEqual<typeof jest>();
expect(jest.useRealTimers(true)).type.toRaiseError();

// Misc

expect(jest.retryTimes(3)).type.toEqual<typeof jest>();
expect(jest.retryTimes(3, {logErrorsBeforeRetry: true})).type.toEqual<
  typeof jest
>();
expect(jest.retryTimes(3, {logErrorsBeforeRetry: 'all'})).type.toRaiseError();
expect(jest.retryTimes({logErrorsBeforeRetry: true})).type.toRaiseError();
expect(jest.retryTimes(3, {waitBeforeRetry: 1000})).type.toEqual<typeof jest>();
expect(jest.retryTimes(3, {waitBeforeRetry: true})).type.toRaiseError();
expect(jest.retryTimes({logErrorsBeforeRetry: 'all'})).type.toRaiseError();
expect(jest.retryTimes()).type.toRaiseError();

expect(jest.setTimeout(6000)).type.toEqual<typeof jest>();
expect(jest.setTimeout()).type.toRaiseError();

expect(jest.getSeed()).type.toBeNumber();
expect(jest.getSeed(123)).type.toRaiseError();

expect(jest.isEnvironmentTornDown()).type.toBeBoolean();
expect(jest.isEnvironmentTornDown(123)).type.toRaiseError();
