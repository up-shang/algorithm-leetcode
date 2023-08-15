export class Store { //容器
  constructor(options) {
    console.log(options)
    //响应式
    // this.state = options.state

    //getters  getters.名称  {属性：fn} 变成{属性：值}  具有缓存机制
    let computed = {}
    let getters = options.getters
    this.getters = {}
    foreachV(getters, (key, fn) => {
      computed[key] = () => {
        return fn(this.state)
      }
      Object.defineProperty(this.getters, key, {
        get: () => {
          return this.vm[key] //
        }
      })
    })
    this.vm = new Vue({
      data: {
        state: options.state
      },
      computed
    })
    //actions和mutations
    let mutations = options.mutations
    this.mutations = {}
    foreachV(mutations, (key, fn) => {
      this.mutations[key] = (data) => {
        fn(this.state, data)//addAge()     
      }
    })
    let actions = options.actions
    this.actions = {}
    foreachV(actions, (key, fn) => {
      this.actions[key] = (data) => {
        fn(this, data)//addAge()     
      }
    })
  }
  commit = (name, data) => {
    //触发方法 mutations
    this.mutations[name](data)
  }
  dispatch = (name, data) => {
    this.actions[name](data)
  }

  //添加属性监听
  get state() {
    return this.vm.state
  }
}