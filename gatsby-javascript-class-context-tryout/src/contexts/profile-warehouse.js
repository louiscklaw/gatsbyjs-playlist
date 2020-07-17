
class ProfileWarehouse{
  constructor( username ){
    this.username = username
    this.value = {
      lg:{
        layout_settings:{
          a:11,b:12,c:13
        }
      },
      sm:{
        layout_settings:{
          a:1,b:1,c:1
        }
      }
    }
  }

  saveProfile(value_to_store) {
    this.value = value_to_store
  }

  loadProfile(){
    return this.value
  }

  saveLayoutSettings(breakpoint_name, value){
    this.value[breakpoint_name]={
      layout_settings: value
    }
  }

  saveLg(value_to_save){
    // this.value.lg.layout_settings=value_to_save
    return this.saveLayoutSettings('lg', value_to_save)
  }

  saveSm(value_to_save){
    this.value.sm = value_to_save
  }

  showCurrentProfile(){
    console.log(this.value)
    return this.value
  }

}

export {
  ProfileWarehouse
}