import { setWorldConstructor } from 'cucumber'
import { api } from '../shared/classes/api'

export class World {
  constructor() {
    api.response = undefined
    api.error = undefined
  }
}

setWorldConstructor(World)
