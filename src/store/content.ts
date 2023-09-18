import { makeAutoObservable } from "mobx"

class Content {

  data:any = []
  URL = ''
  current = 0
  
  constructor(){
    makeAutoObservable(this)
  }

  fetchData(){
    fetch(this.URL )
      .then(response => response.json())
      .then(json => {
        this.data = [...json]
      })
  }

  changeCurrent(i: number){
    this.current = i
  }
  
}

export default new Content()