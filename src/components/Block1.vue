<template>
  <!--<div class="hello"></div>-->
  <div class="container">
    <div class="block">
      <div>
        <img v-if="width > 900" src="../assets/images/download-copy.png" />
        <img v-else src="../assets/images/download.png" />
      </div>
      <div>
        <div v-if="intt == 0">
          Выберите время:
          <button
            class="time_button"
            v-on:click="(currentTime += 1), (startTime += 1)"
          >
            1сек
          </button>
          <button
            class="time_button"
            v-on:click="(currentTime += 10), (startTime += 10)"
          >
            10сек
          </button>
          <button
            class="time_button"
            v-on:click="(currentTime += 30), (startTime += 30)"
          >
            30сек
          </button>
          <button
            class="time_button"
            v-on:click="(currentTime += 60), (startTime += 60)"
          >
            60сек
          </button>
        </div>
        <div v-else style="opacity: 0">
          Выберите время:
          <button
            class="time_button"
            v-on:click="(currentTime += 1), (startTime += 1)"
          >
            1сек
          </button>
          <button
            class="time_button"
            v-on:click="(currentTime += 10), (startTime += 10)"
          >
            10сек
          </button>
          <button
            class="time_button"
            v-on:click="(currentTime += 30), (startTime += 30)"
          >
            30сек
          </button>
          <button
            class="time_button"
            v-on:click="(currentTime += 60), (startTime += 60)"
          >
            60сек
          </button>
        </div>
        <div>
          <button
            v-if="intt == 0"
            class="klick"
            :disabled="currentTime <= 0"
            @click="start"
          >
            НАЧАТЬ
          </button>
          <button
            v-else
            class="klick"
            :disabled="currentTime <= 0 || stop == 2"
            @click="clickMethod"
          >
            КЛИК
          </button>
          <button class="stop" v-on:click="stopMethod">рестарт!</button>
        </div>
        <div>
          <button
            v-show="intt + stop == 3"
            class="pause_button"
            :disabled="currentTime <= 0"
            v-on:click="startButtomTimer"
          >
            продолжить
          </button>
          <button
            v-show="intt + stop == 2"
            class="pause_button"
            :disabled="currentTime <= 0"
            v-on:click="stopButtonTimer"
          >
            пауза
          </button>
        </div>
        <div>Времени осталось: {{ currentTime }} сек</div>
        <div>Всего кликов: {{ numClicks }}</div>
      </div>
    </div>
    <div class="block2">
      <img v-show="cps == 0" src="../assets/images/Untitled1.png" />
      <b v-show="cps > 0">ТВОЙ CPS: {{ cps }}</b>
      <div>
        <img v-if="cps > 8" src="../assets/images/Untitled4.png" />
        <img v-else-if="cps > 6" src="../assets/images/Untitled.png" />
        <img v-else-if="cps > 4" src="../assets/images/Untitled3.png" />
        <img v-else-if="cps > 0" src="../assets/images/Untitled2.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cps: 0,
      images: "../assets/images/download-copy.png ",
      numClicks: 0,
      intt: 0,
      width: 10000,
      imagesS: "../assets/images/download.png",
      currentTime: 0,
      timer: null,
      startTime: 0,
      stop: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    stopButtonTimer() {
      clearTimeout(this.timer);
      this.stop = 2;
    },
    startButtomTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
        this.cps = this.numClicks / (this.startTime - this.currentTime);
        this.cps = this.cps.toFixed(1);
      }, 1000);
      this.stop = 1;
    },
    start() {
      this.intt += 1;
      this.timer = setInterval(() => {
        this.currentTime--;
        this.cps = this.numClicks / (this.startTime - this.currentTime);
        this.cps = this.cps.toFixed(1);
      }, 1000);
      this.stop = 1;
    },
    clickMethod() {
      this.numClicks += 1;
    },
    stopMethod() {
      this.numClicks = 0;
      this.currentTime = 0;
      this.intt = 0;
      this.startTime = 0;
      this.cps = 0;
      this.stop = 0;
      clearTimeout(this.timer);
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
.block2 {
  font-size: 40px;
}
.klick {
  margin: 100px 0 10px 0;
  font-size: 50px;
  border-radius: 20%;
  padding: 50px;
  background-color: rgb(15, 161, 34);
  border: none;
  min-width: 291px;
}

.stop {
  margin: 100px 0 10px 10px;
  font-size: 50px;
  border-radius: 20%;
  padding: 47px;
  background-color: #d15757;
  border: none;
  min-width: 291px;
}

.block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.time_button {
  border: none;
  font-size: 20px;
  border-left: teal;
}

.pause_button {
  margin: 10px 0 10px 10px;
  font-size: 25px;
  border-radius: 20%;
  padding: 25px;
  border: none;
}
.contacts {
  color: white;
}
.hello {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 0px;
  background-color: bisque;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
@media (max-width: 592px) {
  .klick {
    margin: 10px 0 0px 0;
    font-size: 50px;
    border-radius: 20%;
    padding: 50px;
    background-color: rgb(15, 161, 34);
    border: none;
    min-width: 291px;
  }

  .stop {
    margin: 10px 0 0px 0px;
    font-size: 50px;
    border-radius: 20%;
    padding: 47px;
    background-color: #d15757;
    border: none;
    min-width: 291px;
  }

  .pause_button {
    margin: 10px 0 0px 0px;
    font-size: 25px;
    border-radius: 20%;
    padding: 25px;
    border: none;
  }
}
</style>