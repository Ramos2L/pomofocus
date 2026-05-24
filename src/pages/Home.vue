<script setup lang="ts">
import { useCounterStore } from '@/stores/pomodoro.ts'
import btnFocus from '@/assets/btn_focus.png'
import btnShortTimer from '@/assets/btn_short_timer.png'
import btnLongTimer from '@/assets/btn_long_timer.png'
import cancelTimer from '@/assets/cancel_timer.png'
import startTimer from '@/assets/start_timer.png'

import TomatoHero from '@/components/TomatoHero.vue'
import ActionsTimer from '@/components/ActionsTimer.vue'
import ButtonImage from '@/components/ButtonImage.vue'
const counterStore = useCounterStore()
</script>

<template>
    <div class="flex flex-col items-center justify-center">
      <TomatoHero :timerFormat="counterStore.timerFormat" :animateTomato="counterStore.animateTomato" />

      <div v-if="!counterStore.isStartTimer">
        <ButtonImage :image="startTimer" :onClick="counterStore.startTimer" />
      </div>

      <ActionsTimer
        v-if="!counterStore.isStartTimer"
        :actions="[
          { icon: btnFocus, onClick: counterStore.focus },
          { icon: btnShortTimer, onClick: counterStore.shortBreak },
          { icon: btnLongTimer, onClick: counterStore.longBreak },
        ]"
      />
      <ButtonImage v-else :onClick="counterStore.cancelTimer" :image="cancelTimer" />
    </div>
</template>

<style scoped></style>
