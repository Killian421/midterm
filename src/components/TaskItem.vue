<template>
  <li :class="{ completed: task.completed }">
    <!-- Toggle task completion -->
    <input
      type="checkbox"
      v-model="task.completed"
      @change="$emit('toggle-task')"
    />

    <!-- Editable task text -->
    <span v-if="!isEditing">{{ task.text }}</span>
    <input v-else v-model="editedText" @keyup.enter="saveEdit" />

    <!-- Edit and Delete buttons -->
    <button @click="startEditing" v-if="!isEditing">Edit</button>
    <button @click="saveEdit" v-if="isEditing">Save</button>
    <button @click="cancelEdit" v-if="isEditing">Cancel</button>
    <button @click="$emit('remove-task')">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  data() {
    return {
      isEditing: false,
      editedText: '',
    }
  },
  methods: {
    startEditing() {
      this.isEditing = true
      this.editedText = this.task.text // Initialize editedText when editing starts
    },
    saveEdit() {
      if (this.editedText.trim() !== '') {
        this.$emit('edit-task', this.editedText) // Emit event with the new task text
        this.isEditing = false // Exit edit mode
      }
    },
    cancelEdit() {
      this.editedText = this.task.text // Revert changes
      this.isEditing = false // Exit edit mode
    },
  },
}
</script>

<style scoped>
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

li button {
  margin-left: 10px;
  background-color: #42b983;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}

li button:hover {
  background-color: #38a169;
}

li button:nth-of-type(1) {
  background-color: #42b983;
}

li button:nth-of-type(1):hover {
  background-color: #38a169;
}

li button:nth-of-type(2),
li button:nth-of-type(3) {
  background-color: #ff5555;
}

li button:nth-of-type(2):hover,
li button:nth-of-type(3):hover {
  background-color: #ff3333;
}
</style>
