<template>
  <div>
    <h1>Task Manager</h1>

    <!-- Input for new task -->
    <input
      v-model="newTask"
      placeholder="Add a new task"
      @keyup.enter="addTask"
    />
    <button @click="addTask">Add Task</button>

    <!-- Task List -->
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ completed: task.completed }"
      >
        <!-- Toggle task completion -->
        <input
          type="checkbox"
          v-model="task.completed"
          @change="toggleTask(index)"
        />

        <!-- Editable task text -->
        <span v-if="!task.isEditing">{{ task.text }}</span>
        <input
          v-else
          v-model="task.editedText"
          @keyup.enter="saveEdit(index)"
        />

        <!-- Edit, Save, Cancel, and Delete buttons -->
        <button @click="editTask(index)" v-if="!task.isEditing">Edit</button>
        <button @click="saveEdit(index)" v-if="task.isEditing">Save</button>
        <button @click="cancelEdit(index)" v-if="task.isEditing">Cancel</button>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [
        {
          text: 'Buy groceries',
          completed: false,
          isEditing: false,
          editedText: '',
        },
        {
          text: 'Read a book',
          completed: false,
          isEditing: false,
          editedText: '',
        },
      ],
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          text: this.newTask,
          completed: false,
          isEditing: false,
          editedText: '',
        })
        this.newTask = ''
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed
    },
    editTask(index) {
      this.tasks[index].isEditing = true
      this.tasks[index].editedText = this.tasks[index].text // Initialize the edit field with the original text
    },
    saveEdit(index) {
      if (this.tasks[index].editedText.trim() !== '') {
        this.tasks[index].text = this.tasks[index].editedText
        this.tasks[index].isEditing = false
      }
    },
    cancelEdit(index) {
      this.tasks[index].editedText = this.tasks[index].text // Revert to the original text
      this.tasks[index].isEditing = false
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}

input[type='text'] {
  margin-bottom: 20px;
  padding: 8px;
  width: 300px;
  font-size: 16px;
}

button {
  margin-left: 10px;
  background-color: #42b983;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #38a169;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.completed span {
  text-decoration: line-through;
  color: grey;
}

li input[type='checkbox'] {
  margin-right: 10px;
}
</style>
