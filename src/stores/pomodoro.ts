import { defineStore } from 'pinia'
import doneSound from '@/assets/done_sound.mp3'
import clickSound from '@/assets/click_sound.mp3'

export const useCounterStore = defineStore('counter',  {
   // state é o estado do store
    state: () => ({
        isStartTimer: false,
        count: 0,
        timerId: null as ReturnType<typeof setInterval> | null,
    }),
    // actions são as ações que podem ser executadas no store
    actions: {
        shortBreak() {
            this.count = 60 * 5
        },
        longBreak() {
            this.count = 60 * 15
        },
        focus() {
            this.count = 60 * 25
        },

        playSound() {
            const audio = new Audio(doneSound)
            audio.play().catch(error => console.error('Error playing sound:', error));
        },

        playClickSound() {
            const audio = new Audio(clickSound)
            audio.play().catch(error => console.error('Error playing sound:', error));
        },

        startTimer() {
            this.playClickSound();
            if (this.count == 0) {
                return;
            }
            if (this.timerId !== null) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
            this.isStartTimer = true;
            this.timerId = setInterval(() => {
                this.count--
                if(this.count <= 0) {
                    if (this.timerId !== null) {
                        clearInterval(this.timerId);
                        this.timerId = null;
                    }
                    this.count = 0;
                    this.isStartTimer = false;
                    this.playSound();
                }
            }, 1000);
            return this.timerId;
        },

        cancelTimer() {
            if (this.timerId !== null) {
                clearInterval(this.timerId);
                this.timerId = null;
            }   
            this.count = 0;
            this.isStartTimer = false;
            this.playClickSound();
        },

    },
    // getters são as funções que podem ser usadas para obter o estado do store
    getters: {
        timerFormat: (state) => {
            const minutes = Math.floor(state.count / 60);
            const seconds = state.count % 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },
        animateTomato: (state) => {
            if(state.isStartTimer && state.count != 0) {
                return state.count % 2 == 0 ? 5 : -5;
            }
            return 0;
        },
    },
})
