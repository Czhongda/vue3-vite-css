<script setup lang="ts">
</script>
<template>
  <div>
    <span>grid</span>
    <div class="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>
    <span>grid-template-areas</span>
    <section id="page">
      <header>Header</header>
      <nav>Navigation</nav>
      <main>Main area</main>
      <footer>Footer</footer>
    </section>
    <span>justify-items</span>
    <div id="container1">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>
  </div>
</template> 
<style lang="scss" scoped>
.container {
  // min-height: 100vh;
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px 50px;
  grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";

  .item {
    font-size: 2em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }

  .item-1 {
    background-color: #ef342a;
  }

  .item-2 {
    background-color: #f68f26;
  }

  .item-3 {
    background-color: #4ba946;
  }

  .item-4 {
    background-color: #0376c2;
  }

  .item-5 {
    background-color: #c077af;
  }

  .item-6 {
    background-color: #f8d29d;
  }
}

#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page>header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page>nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page>main {
  grid-area: main;
  background-color: #ffff64;
}

#page>footer {
  grid-area: foot;
  background-color: #8cffa0;
}

#container1 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  // justify-items: start;
  // justify-items: strech;
  justify-items: center;
  // justify-items: end;
  align-items: center;

  place-content: center center;

  .item {
    font-size: 2em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }

  .item-1 {
    background-color: #ef342a;
  }

  .item-2 {
    background-color: #f68f26;
  }

  .item-3 {
    background-color: #4ba946;
  }

  .item-4 {
    background-color: #0376c2;
  }

  .item-5 {
    background-color: #c077af;
  }

  .item-6 {
    background-color: #f8d29d;
  }

  .item-7 {
    background-color: #b5a87f;
  }
}
</style>