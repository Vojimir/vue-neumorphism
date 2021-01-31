<template>
  <div class="container">
    <section class="top-nav">
      <div>Logo Here</div>
      <div class="flexbox">
        <div class="search">
          <div>
            <input type="text" placeholder="       Search . . ." required />
          </div>
        </div>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <router-link class="link" to="/register">Register</router-link>
        </li>
        <li>
          <router-link class="link" to="/login">Login</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>



<script>
export default {};
</script>

<style  scoped>
.container {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: #00BAF0; */
  background: linear-gradient(
    90deg,
    rgba(145, 186, 2, 1) 50%,
    rgba(255, 171, 0, 1) 100%
  );
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  height: 50px;
  padding: 1em;
  /* position: fixed; */
  /* top: 0; */
  /* width: 100%; */
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  padding-right: 20px;
}
.link {
  text-decoration: none;
  color: white;
}
.link:hover {
  color: #444;
}
.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}
@media (min-width: 1024px) {
  .top-nav {
    top: 0;
    position: fixed;
    width: 100%;
  }
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    visibility: hidden;
    position: absolute;
    top: 0;
    margin-top: 70px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: none;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    visibility: visible;

    background: linear-gradient(
      90deg,
      rgba(145, 186, 2, 1) 50%,
      rgba(255, 171, 0, 1) 100%
    );
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
  
}

/* Search input style */

.flexbox {
  /* background: linear-gradient(155deg, #55c7ed, #2bb3e0, #3bc1ed); */
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.search {
  margin: 20px;
}

.search > div {
  display: inline-block;
  position: relative;
}

.search > div:after {
  content: "";
  background: white;
  width: 4px;
  height: 20px;
  position: absolute;
  top: 40px;
  right: 2px;
  transform: rotate(135deg);
  box-shadow: 1px 0 #F9AB00;
}

.search > div > input {
  color: white;
  font-size: 16px;
  background: transparent;
  width: 25px;
  height: 25px;
  padding: 10px;
  border: solid 3px white;
  outline: none;
  border-radius: 35px;
  box-shadow: 0 1px #F9AB00;
  transition: width 1.0s;
}

.search > div > input::placeholder {
  color: #efefef;
  opacity: 1;
}

.search > div > input::-ms-placeholder {
  color: #efefef;
}

.search > div > input::-ms-input-placeholder {
  color: #efefef;
}

.search > div > input:focus,
.search > div > input:valid {
  width: 250px;
}
@media (max-width: 700px){
.search > div > input:focus,
.search > div > input:valid {
  width: 180px;
}
}
</style>