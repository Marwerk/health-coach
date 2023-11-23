// // import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'
// import axios from 'axios'

// export const useRoomStore = defineStore('Room',{
//   state: () => ({
//     rooms: [],
//     newRoom: {
//       type: '',
//       doorNumber: null,
//       units: 0,
//       capacity: 0,
//       amenities: [],
//     },
//     updatingRoom: null // holds the room currently being updated
//   }),

//   actions: {
//     setNewRoomField(field, value) {
//       this.newRoom[field] = value
//     },

//     setUpdatingRoom(room) {
//       this.updatingRoom = room
//     },

//     async fetchAllRooms() {
//       const response = await axios.get('/rooms')
//       this.rooms = response.data
//       return this.rooms
//     },
//   }
// })
