<template>
  <div class="chessboard">
    <Card v-for="card of cards" :key="card.id" :card="card" @onFlip="onFlip" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { ICard, IStatus } from '@/IType'
import { GameStoreKey } from '@/stores'
import Card from './Card.vue'

export default defineComponent({
  name: 'ChessBoard',
  components: { Card },
  setup: () => {
    let lastCard = ref<ICard | null>(null)
    const { state, dispatch, commit } = useStore(GameStoreKey)
    const realtimeStatus = computed(() => state.status)
    const realtimeNonMatchedPairs = computed(() => state.nonMatchedPairs)
    const realtimeCards = computed(() => state.cards)

    const onFlip = (e: ICard) => {
      if (realtimeStatus.value === IStatus.READY) {
        dispatch('updateStatus', IStatus.PLAYING)
      }
      if (!lastCard.value) {
        lastCard.value = e
        return
      }
      if (lastCard.value !== e && lastCard.value.name === e.name) {
        lastCard.value = null
        commit('updateNonMatchedPairs', -1)
        if (!realtimeNonMatchedPairs.value) {
          dispatch('updateStatus', IStatus.PASSED)
        }
        return
      } else {
        commit('changeStatus', IStatus.WAITING)
      }

      const savedLastCard = lastCard.value
      lastCard.value = null
      dispatch('flipsDelay', {
        timeout: 6000,
        cards: [savedLastCard, e]
      })
    }

    return {
      onFlip,
      cards: realtimeCards
    }
  }
})
</script>

<style scoped>
.chessboard {
  max-width: 80%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}
</style>
