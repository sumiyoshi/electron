<template>
    <el-main>

        <div class="title">Todo</div>

        <!-- タスク入力 -->
        <el-form :model="todoForm" :rules="todoFormRules" ref="todoForm">
            <el-form-item label="" prop="taskName">
                <el-input v-model="todoForm.taskName" placeholder="タスク名を入力" clearable>
                    <el-button slot="append" size="mini" @click="insertTask">追加</el-button>
                </el-input>
            </el-form-item>
        </el-form>

        <!-- タスク一覧 -->
        <el-table :data="taskList" :show-header="false" stripe>
            <el-table-column prop="task" width="auto"></el-table-column>
            <el-table-column align="center" width="100px">
                <template slot-scope="record">
                    <el-button size="mini" type="danger" @click="deleteTask(record.$index)">削除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-main>
</template>

<script>
  export default {
    data () {
      return {
        taskList: [],
        todoForm: {
          taskName: ''
        },
        todoFormRules: {
          taskName: [
            { required: true, message: '入力必須です', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // タスク追加
      insertTask () {
        this.$refs['todoForm'].validate((valid) => {
          if (valid) {
            this.taskList.push({task: this.todoForm.taskName})
            this.todoForm.taskName = ''
          }
        })
      },
      // レコード削除
      deleteTask (index) {
        this.taskList.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
    main.el-main {
        width: 600px;
        margin: 0 auto;
    }
</style>