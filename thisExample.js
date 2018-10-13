let outer = {
  name: 'OuterName'
}

var group = {

  title: 'My group',
  name: ['Vipul', 'Amit', 'Rahul'],
  showname:function(){
    console.log(this.title);

  },
  showname2(){
    this.name.forEach(name => {
      console.log(this.title);
    })
  }
  //showname3:name => console.log(this.title)      //Wrong way of using this is arrow functions as arrow functions do not have this of their own, instead
                                                //user this of the lexical context or outer context
}

group.showname()
group.showname2()
//roup.showname3()
