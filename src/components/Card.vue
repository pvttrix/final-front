<template>
  <div class="card" @click="selectCard">
    <div v-if="visible" class="card-face is-front">
      <img :src="require(`../assets/${value}.png`)" alt="${value}" class="back-face">
    </div>
    <div v-else class="card-face is-back">

      <img src="../assets/back.png" alt="" class="back-face">

    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    matched: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const selectCard = () => {
      context.emit('select-card', {
        position: props.position,
        faceValue: props.value,
        matched: props.matched
      })
    }

    return {
      selectCard
    }
  }

}
</script>

<style scoped>
.card {
  border: 5px solid #ccc;
  position: relative;
}
.card-face {
  height:100%;
  width:100%;
  position: absolute;
}

.card-face.is-front {
  color:white
}
.back-face,.font-face {
  object-fit: cover;
  width:100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: translate(-50%);
}
.card-face.is-back {
  background-color: blue;

}
</style>
