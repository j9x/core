// using literal strings instead of numbers so that it's easier to inspect
// debugger events
// 使用文字字符串而不是数字，以便更容易地检查调试器事件  
export const enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate'
}

export const enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear'
}
