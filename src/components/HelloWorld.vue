<template>
  <div class="body">
    <h2 class="text-white">Are you Fine?</h2>
    <h1>
      <span>I</span><span>'</span><span>M</span><br>
      <span>F</span><span>I</span><span>N</span><span>E</span><span>.</span><br>
      <span>A</span><span>P</span><span>P</span><span>L</span><span>E</span><span>!</span>
    </h1>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({}),
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);

.body {
    width: 100vw;
    height: calc( 100vh - 64px );
    background: #789e4f;
    -webkit-font-smoothing: antialiased;
    padding: 5vw;
    justify-content: center;
    align-items: center;
}

h1 {
    height: 100px;
}

h1 span {
    position: relative;
    top: 30vh;
    display: inline-block;
    animation: bounce .3s ease infinite alternate;
    font-family: 'Press Start 2P', cursive;
    font-size: 80px;
    color: #FFF;
    text-shadow: 0 1px 0 #CCC,
    0 2px 0 #CCC,
    0 3px 0 #CCC,
    0 4px 0 #CCC,
    0 5px 0 #CCC,
    0 6px 0 transparent,
    0 7px 0 transparent,
    0 8px 0 transparent,
    0 9px 0 transparent,
    0 10px 10px rgba(0, 0, 0, .4);
}

h1 span:nth-child(2) { animation-delay: .1s; }
h1 span:nth-child(3) { animation-delay: .2s; }
h1 span:nth-child(4) { animation-delay: .3s; }
h1 span:nth-child(5) { animation-delay: .4s; }
h1 span:nth-child(6) { animation-delay: .5s; }
h1 span:nth-child(7) { animation-delay: .6s; }
h1 span:nth-child(8) { animation-delay: .7s; }
h1 span:nth-child(9) { animation-delay: .8s; }
h1 span:nth-child(10) { animation-delay: .9s; }
h1 span:nth-child(11) { animation-delay: 1s; }
h1 span:nth-child(12) { animation-delay: 1.1s; }
h1 span:nth-child(13) { animation-delay: 1.2s; }
h1 span:nth-child(14) { animation-delay: 1.3s; }
h1 span:nth-child(15) { animation-delay: 1.4s; }
h1 span:nth-child(16) { animation-delay: 1.5s; }
@keyframes bounce {
    100% {
        top: 25vh;
        text-shadow: 0 1px 0 #CCC,
        0 2px 0 #CCC,
        0 3px 0 #CCC,
        0 4px 0 #CCC,
        0 5px 0 #CCC,
        0 6px 0 #CCC,
        0 7px 0 #CCC,
        0 8px 0 #CCC,
        0 9px 0 #CCC,
        0 50px 25px rgba(0, 0, 0, .2);
    }
}
</style>