Vue.component('engine-item', {
  props: ['engine'],
  template: '<a class="d-block py-1" :href="https://www.google.com/search?q=">{{ engine.text }}</a>'
})

var q = new Vue({
  el: '#questions',
  data: {
    message: '',
    subject: '',
    onsite: ''
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<a class="d-block py-1" href="https://www.google.com/search?q=">{{ todo.text }}{{q.message}}</a>'
})

var test = new Vue({
  el: '#test',
  data: {
    groceryList: [
      { id: 0, text: '123' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})