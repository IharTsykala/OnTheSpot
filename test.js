// const sum = (a,b) => a+b

// const array = [1,2,3,4,5]

// const sumArray = array.reduce((a,b) => sum(a,b), 0)

// try{
//   const request = async () => {
//     const response // = await ...
//     if (response.status === 'error') throw response.error
//   }

// } catch(err) {
//   console.log(err.message)
//   throw err
// }

// const old = {
//   first: 1,
// };

// let third;

// third = Object.assign({}, old, {second: 2})

// third = {...old, ...{second: 2}}

const Subject = function() {
  this.observers = [];

  return {
  subscribeObserver: (observer) => this.observers.push(observer),  
  
  helloObserver: (observer) => observer.notify('obs')
};
}

var Observer = function() {
  return {
  notify: function(index) {
      console.log("Observer " + index);
  }
  }
}

const subject = new Subject();

const observer = new Observer()

subject.subscribeObserver(observer)

subject.helloObserver()

