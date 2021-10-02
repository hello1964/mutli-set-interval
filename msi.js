class IntervalItem {
  
    static allItems = []
    
    static runAll() {
      IntervalItem.allItems.forEach((e) => {
        e.getFunc()
      })
    }
    
    constructor(func, milliseconds, active = false) {
      this.func = func
      this.milliseconds = milliseconds
      this.active = active
      this.resetFunc = () => {}
      this.toggleFunc = (cycle, active) => {}
      
      this.cycle = 0
      
      IntervalItem.allItems.push(this)
    }
    
    getFunc() {
      if (this.active && this.cycle % (this.milliseconds) == 0) {
        this.func(this.cycle)
      }
      this.cycle += 1
    }
    
    setFunc(func) {
      this.func = func
    }
    
    reset() {
      this.cycle = 0
      this.resetFunc()
    }
    
    activate(reset = false) {
      this.active = true
      if (reset) {
        this.reset()
      }
      this.toggleFunc(this.active, this.cycle)
    }
    
    deactivate(reset = false) {
      this.active = false
      if (reset) {
        this.reset()
      }
      this.toggleFunc(this.active, this.cycle)
    }
    
    toggle(reset = false) {
      if (reset) {
        this.reset()
      }
      if (this.active) {
        this.active = false
      } else {
        this.active = true
      }
      this.toggleFunc(this.active, this.cycle)
    }
  }
  
  setInterval(() => {
    IntervalItem.runAll()
  }, 10)