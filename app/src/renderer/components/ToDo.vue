<template>
    <el-main>
        <!-- タスク入力 -->
        <el-input v-model="input" placeholder="タスク名を入力" clearable>
            <el-button slot="append" size="mini" @click="insertTask">追加</el-button>
        </el-input>
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
        input: ''
      }
    },
    methods: {
      // タスク追加
      insertTask () {
        this.taskList.push({task: this.input})
        this.input = ''
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
        margin: 0px auto;
    }
</style>