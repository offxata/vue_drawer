<template>
  <canvas
    id="canvas"
    ref="canvas"
    class="canvas"
    width="980"
    height="400"
    @mousedown="mouseDown"
    @mousemove="mouseMove"
    @mouseup="mouseUp"
    @mouseleave="mouseLeave"></canvas>
</template>

<script>
export default {
  data() {
    return {
      el: null,
      canvas: null,
      paint: false,
    };
  },
  computed: {
    draw: {
      get() {
        const draw = this.$store.getters.getDraw;

        return draw;
      },
      set(val) {
        this.$store.commit('draw', val);
      },
    },
    redoArray: {
      get() {
        const redoArray = this.$store.getters.getRedoArray;

        return redoArray;
      },
      set(val) {
        this.$store.commit('redoArray', val);
      },
    },
    tool() {
      const tool = this.$store.getters.getTool;

      return tool;
    },
  },
  mounted() {
    this.canvas = this.$refs.canvas.getContext('2d');
    this.el = this.$refs.canvas;
  },
  methods: {
    /**
     * init drawing on mouse down
     */
    mouseDown(e) {
      const mouseX = e.pageX - this.el.offsetLeft;
      const mouseY = e.pageY - this.el.offsetTop;

      this.paint = true;
      this.draw.push([]);
      this.redoArray = [];
      this.addClick(mouseX, mouseY);
      this.redraw();
    },

    /**
     * drawing
     */
    mouseMove(e) {
      const mouseX = e.pageX - this.el.offsetLeft;
      const mouseY = e.pageY - this.el.offsetTop;
      if (this.paint) {
        this.addClick(mouseX, mouseY, true);
        this.redraw();
      }
    },

    /**
     * stop drawing
     */
    mouseUp() {
      this.paint = false;
    },
    mouseLeave() {
      this.paint = false;
    },

    /**
     * private methods,
     * functionality for drowing
     */
    addClick(x, y, dragging) {
      this.draw[this.draw.length - 1].push({
        xAxis: x,
        yAxis: y,
        color: this.tool,
        isDragging: dragging,
      });
    },
    redraw() {
      this.canvas.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
      this.canvas.lineJoin = 'round';
      this.canvas.lineWidth = 5;
      for (let t = 0; t < this.draw.length; t += 1) {
        for (let i = 0; i < this.draw[t].length; i += 1) {
          this.canvas.beginPath();
          if (this.draw[t][i].isDragging && i) {
            this.canvas.moveTo(this.draw[t][i - 1].xAxis, this.draw[t][i - 1].yAxis);
          } else {
            this.canvas.moveTo(this.draw[t][i].xAxis - 1, this.draw[t][i].yAxis);
          }
          this.canvas.lineTo(this.draw[t][i].xAxis, this.draw[t][i].yAxis);
          this.canvas.closePath();
          this.canvas.strokeStyle = this.draw[t][i].color;
          this.canvas.stroke();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .canvas {
    width: 100%;
    background: #EEE;
  }
</style>
