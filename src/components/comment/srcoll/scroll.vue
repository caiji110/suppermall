<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    setTimeout(this.initbscroll, 20);
  },
  methods: {
    initbscroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: true,
      });
      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on("scroll", (position) => {
          this.$emit("scroll", position.y);
        });
      }
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
    //  console.log(this.scroll);
    },
    gototop(x,y) {
      this.scroll.scrollTo(x, y, 800);
    },
    finishedPullUp() {
     this.scroll&&this.scroll.finishPullUp();
    },
    refresh(){
     //  console.log('wobei');
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    }
  },

  // 存在问题：一开始home,id标签的宽度均为0？？为什么不会被盒子里面的内容撑开？
  // 可能是因为我所有东西都没有设置高度》？但是有内容啊为啥撑不开。
  // 直到给盒子（home）设定100vh才可以？
  // 而且设定完100vh，滚动页面发现home的高度居然是固定的？
  // 随着页面的滚动，home盒子会完全消失在视口中，这不科学
  // 直到将超出盒子部分隐藏再用Better scroll滚动才看起来正常一点？？
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
