<!-- eslint-disable standard/object-curly-even-spacing -->
<template>
  <div>
    <h3>Mis Paneles</h3>
    <div class="boards-collection">
      <input
        type="text"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id">
      </board-card>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard'

export default{
  name: 'home-view',
  components: { BoardCard },
  data () {
    return {
      boardName: '',
      boards: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        { id: 1, name: 'Tareas'},
        // eslint-disable-next-line standard/object-curly-even-spacing
        { id: 2, name: 'Lista de la Compra'}
      ]
    }
  },
  methods: {
    add () {
      this.boards.push({ name: this.boardName })
    }
  }
}
</script>
<style scoped>
h3{
  text-align: left;
  margin: 1.5rem;
}
.boards-collection{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
}
input{
  box-sizing: border-box;
  background-color: #546E7A;
  border: 2px solid #546E7A;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}
:focus{
  background-color: white;
  color: #546E7A;
}
:active{
  background-color: white;
  color: #546E7A;
}
::placeholder{
  color:white;
}
</style>
