<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1 :class="{'dark' : !isDarkMode , 'light' : isDarkMode}">Traffic Overview</h1>
        <div class="toggle" :class="{'light-box' : isDarkMode , 'dark-box' : !isDarkMode}">
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
      <apexChart width="100%" type="area" :options="options" :series="series"></apexChart>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import VueApexCharts from "vue-apexcharts";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "Home",
  components: {
    Header,
    apexChart: VueApexCharts,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  data() {
    return {
      options: {
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        colors: ["#14f1d9", "#7b42fb", "white"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        },
        chart: {
          id: "users"
        },
        xaxis: {
          type: "datetime"
        }
      },
      series: [
        {
          name: "active users",
          data: [
            [new Date("January 1, 2019"), 30],
            [new Date("January 5, 2019"), 40]
          ]
        },
        {
          name: "new users",
          data: [
            [new Date("January 1, 2019"), 80],
            [new Date("January 5, 2019"), 20]
          ]
        },
        {
          name: "other users",
          data: [
            [new Date("January 1, 2019"), 60],
            [new Date("January 5, 2019"), 10]
          ]
        }
      ]
    };
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56CCF2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56CCF2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56CCF2";
      this.$refs.months.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 15%;
  height: 100vh;

  .spread {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: 100%;
  }

  h1.dark {
    @include heading-3($black);
  }

  h1.light {
    @include heading-3($white);
  }

  .toggle {
    @include medium-text;
    color: $dark-gray;
    border-radius: 6px;
    width: 240px;
    display: flex;
    height: 50px;
    flex-wrap: nowrap;
    padding: 5px;

    &:hover {
      cursor: pointer;
    }
  }
  @mixin toggle-settings {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.33%;
    height: 100%;
  }
  .days {
    @include toggle-settings;
    background: $teal;
    border-radius: 4px;
    color: $white;
  }
  .weeks {
    @include toggle-settings;
  }
  .months {
    @include toggle-settings;
  }
}
</style>
