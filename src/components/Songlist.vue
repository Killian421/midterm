<template>
  <div>
    <h1>Song List</h1>

    <!-- Input fields for new song -->
    <input v-model="newSong.name" placeholder="Song Name" />
    <input v-model="newSong.singer" placeholder="Singer" />
    <input v-model="newSong.link" placeholder="Song Link" />
    <button @click="addSong">Add Song</button>

    <!-- Song List -->
    <ul>
      <li v-for="(song, index) in songs" :key="index">
        <h3>{{ song.name }} by {{ song.singer }}</h3>
        <a :href="song.link" target="_blank">Listen here</a>
        <button @click="removeSong(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSong: {
        name: '',
        singer: '',
        link: '',
      },
      songs: [],
    }
  },
  methods: {
    addSong() {
      if (
        this.newSong.name.trim() &&
        this.newSong.singer.trim() &&
        this.newSong.link.trim()
      ) {
        this.songs.push({ ...this.newSong })
        this.newSong.name = ''
        this.newSong.singer = ''
        this.newSong.link = ''
      } else {
        alert('Please fill in all fields!')
      }
    },
    removeSong(index) {
      this.songs.splice(index, 1)
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

li a {
  color: #42b983;
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}
</style>
