<template>
  <div class="score-board">
    <Progress />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Progress from './Progress.vue'

export default defineComponent({
  name: 'ScoreBoard',
  components: {
    Progress,
  }
})
</script>

<style scoped>
.score-board {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
