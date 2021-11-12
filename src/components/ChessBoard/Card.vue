<template>
  <div class="container" @click="doFlip">
    <div class="card" :class="{ flipped: card.flipped }">
      <img v-if="card.flipped" class="front" src="../../assets/front.png" />
      <audio v-if="card.flipped" autoplay :src="'../../sounds/' + card.name + '.mp3'" />
      <img class="back" src="../../assets/back.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType, computed } from 'vue'
import { useStore } from 'vuex'
import { ICard, IStatus } from '@/IType'
import { GameStoreKey } from '@/stores'

export default defineComponent({
  name: 'Card',
  props: {
    card: {
      type: Object as PropType<ICard>,
      required: true
    }
  },
  emits: {
    onFlip: (payload: ICard) => {
      return !!payload
    }
  },
  setup: (props, context) => {
    const { card } = toRefs(props)
    const { state, commit } = useStore(GameStoreKey)
    const realtimeStatus = computed(() => state.status)

    const doFlip = (e: MouseEvent) => {
      if (card.value.flipped || realtimeStatus.value === IStatus.WAITING) {
        return
      }
      commit('flips', [card.value])
      context.emit('onFlip', card.value)
    }

    return {
      card,
      doFlip
    }
  }
})
</script>

<style scoped>
audio {
  display: none !important;
}

.container {
  width: 120px;
  height: 145px;
  margin: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
  }
}
</style>
