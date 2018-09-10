import Vue from 'vue'
import ToDo from '@/components/ToDo'

describe('ToDo.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(ToDo)
    }).$mount()

    expect(vm.$el.querySelector('.title').textContent).to.contain('Todo')
  })

  it('initial value', () => {
    const vm = new Vue(ToDo).$mount()

    expect(vm.todoForm.taskName).to.equal('')
    expect(vm.taskList.length).to.equal(0)
  })

  it('call methods insertTask', () => {
    const vm = new Vue(ToDo).$mount()

    vm.todoForm.taskName = 'test'

    expect(vm.todoForm.taskName).to.equal('test')
    expect(vm.taskList.length).to.equal(0)

    vm.insertTask()

    expect(vm.todoForm.taskName).to.equal('')
    expect(vm.taskList.length).to.equal(1)
    expect(vm.taskList[0].task).to.equal('test')

    vm.insertTask()
    expect(vm.taskList.length).to.equal(1)
  })

  it('call methods deleteTask', () => {
    const vm = new Vue(ToDo).$mount()

    vm.taskList.push('test data')
    vm.taskList.push('test data2')

    vm.deleteTask(0)
    expect(vm.taskList.length).to.equal(1)
    expect(vm.taskList[0]).to.equal('test data2')

    vm.deleteTask(0)
    expect(vm.taskList.length).to.equal(0)
  })
})
