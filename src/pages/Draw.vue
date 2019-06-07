<template>
  <div>
    <div class="actions-bar">
      <div class="button-group">
        <app-button
          class="btn btn__primary margin-right20"
          buttonType="button"
          @click="pencil">Pencil</app-button>
        <app-button
          class="btn btn__primary"
          buttonType="button"
          @click="eraser">Eraser</app-button>
      </div>
      <div class="button-group">
        <app-button
          class="btn btn__default margin-right20"
          buttonType="button"
          @click="clear">Clear</app-button>
        <app-button
          class="btn btn__default margin-right20"
          buttonType="button"
          @click="undo">Undo</app-button>
        <app-button
          class="btn btn__default"
          buttonType="button "
          @click="redo">Redo</app-button>
      </div>
    </div>
    <app-canvas ref="canvas-component"></app-canvas>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue';
import Canvas from '../components/Canvas.vue';

export default {
  name: 'draw',
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
    tool: {
      get() {
        const tool = this.$store.getters.getTool;

        return tool;
      },
      set(val) {
        this.$store.commit('tool', val);
      },
    },
  },
  methods: {

    /**
     * tools functionality  (pencil, eraser, clear canvas)
     */
    pencil() {
      this.tool = '#df4b26';
    },
    eraser() {
      this.tool = '#EEE';
    },
    clear() {
      if (this.redoArray.length === 0 && this.draw.length === 0) return;

      this.redoArray.length = 0;
      this.draw.length = 0;
      this.$refs['canvas-component'].redraw();
    },

    /**
     * undo and redo functionality
     */
    undo() {
      this.undoRedo(this.draw, this.redoArray);
    },
    redo() {
      this.undoRedo(this.redoArray, this.draw);
    },
    undoRedo(mainArray, seconderyArray) {
      if (mainArray.length === 0) return;

      const arr = mainArray[mainArray.length - 1];

      seconderyArray.push(arr);
      mainArray.pop();
      this.$refs['canvas-component'].redraw();
    },

  },
  components: {
    appButton: Button,
    appCanvas: Canvas,
  },
};
</script>

<style lang="scss" scoped>
  .actions-bar {
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px 0;
  }

  .button-group {
    display: flex;
  }
</style>
