<template>
  <section class="game-board" v-if="isGameStarted">
    <Card
        v-for="(card, index) in cardList"
        :matched="card.matched"
        :value="card.value"
        :key="`card-${index}`"
        :visible="card.visible"
        :position="card.position"
        @select-card="flipCard"
    />
  </section>
  <va-button @click="startGame" color="info" class="mr-4">Shuffle Game</va-button>
  <h2> {{status}}</h2>
  <h1>Mistakes: {{mistakes}}</h1>
</template>

<script>
import  Card from '../components/Card'
import _ from 'lodash'
import { ref, watch, computed } from 'vue'
import axios from "axios";
export default {
  name: 'Game',
  components: {
    Card
  },

  setup() {
    const cardList = ref([])
    const userSelection = ref([])
    let mistakes = ref(0)
    let isGameStarted = ref(false)

    const status = computed(() => {
      if (remainingPairs.value === 0) {
        return 'U won!'
      }
      else {
        return `Remaining Pairs : ${remainingPairs.value}`
      }
    })

    const remainingPairs = computed(() => {
      const remainingCards = cardList.value.filter(card => card.matched === false).length

      return remainingCards / 2
    })

    const shuffleCards = () => {
      cardList.value = _.shuffle(cardList.value)
    }

    const startGame = () => {
      isGameStarted.value = true
      shuffleCards()

      cardList.value = cardList.value.map((card,index) => {
        return {
          ...card,
          matched: false,
          visible: false,
          position:index,
        }
      })
    }

    for(let i = 0; i < 8; i++) {
      cardList.value.push({
        value: i,
        visible: false,
        position: i,
        matched: false
      })
    }
    for(let i = 0; i < 8; i++) {
      cardList.value.push({
        value: i,
        visible: false,
        position: i+8,
        matched: false
      })
    }

    const flipCard = (payload) => {
      cardList.value[payload.position].visible = true

      if (userSelection.value[0]) {
        if(userSelection.value[0].position === payload.position && userSelection.value[0].faceValue === payload.faceValue) {
          return
        } else {
          userSelection.value[1] = payload
        }
      } else {
        userSelection.value[0] = payload
      }
    }

    watch(userSelection, (currentValue) => {
      if (currentValue.length === 2) {

        const cardOne = currentValue[0]
        const cardTwo = currentValue[1]

        if(cardOne.faceValue === cardTwo.faceValue) {
          cardList.value[cardOne.position].matched = true
          cardList.value[cardTwo.position].matched = true
        } else {
          mistakes.value++
          setTimeout(() => {
            cardList.value[cardOne.position].visible = false
            cardList.value[cardTwo.position].visible = false
          },2000)
        }

        userSelection.value.length = 0
      }
    }, { deep: true })
    return {
      cardList,
      flipCard,
      userSelection,
      status,
      remainingPairs,
      shuffleCards,
      isGameStarted,
      startGame,
      mistakes,
      gameStat
    }
  }
}
</script>

<style>

.game-board {
  display: grid;
  grid-template-columns: 130px 130px 130px 130px;
  grid-template-rows: 175px 175px 175px 175px;
  grid-gap: 30px;
  justify-content: center;
}
</style>
