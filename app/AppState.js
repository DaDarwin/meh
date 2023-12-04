import { Player } from './models/player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  players = [
  new Player('John', 0,),
  new Player('Jeff', 0),
  new Player('Joe', 0)]



  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())
console.log(AppState)