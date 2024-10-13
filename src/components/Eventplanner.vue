<template>
  <div>
    <h1>Event Planner</h1>

    <!-- Input fields for occasion and date -->
    <input v-model="newEvent.occasion" placeholder="Occasion" />
    <input v-model="newEvent.date" type="date" />
    <button @click="addEvent">Add Event</button>

    <!-- Event List -->
    <ul>
      <li v-for="(event, index) in events" :key="index">
        <h3>{{ event.occasion }} on {{ event.date }}</h3>
        <button @click="removeEvent(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newEvent: {
        occasion: '',
        date: '',
      },
      events: [],
    }
  },
  methods: {
    addEvent() {
      if (this.newEvent.occasion.trim() && this.newEvent.date) {
        this.events.push({ ...this.newEvent })
        this.newEvent.occasion = ''
        this.newEvent.date = ''
      } else {
        alert('Please fill in all fields!')
      }
    },
    removeEvent(index) {
      this.events.splice(index, 1)
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}

input {
  margin: 5px;
  padding: 8px;
  width: 200px;
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
  text-align: center;
}

li h3 {
  margin: 0;
}
</style>
