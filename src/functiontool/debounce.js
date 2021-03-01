export  function  debounce(fn, wait) {
    let timer = null;
    return function() {
      let context = this;
      let args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    };
  }