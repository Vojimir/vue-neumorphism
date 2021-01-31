<template>
  <div class="container">
    <div class="form">
      <h2>Register</h2>
      <div class="input">
        <div class="inputBox">
          <label>Username</label>
          <input type="text" name placeholder="John Doe" required />
        </div>
        <div class="inputBox " >
          <label>E-mail</label>
          <input v-bind:style = "[isEmailValid() ? {'color' : 'yellowgreen'} : {'color' : 'orangered'} ] " v-model="email" type="email" name="email" placeholder="Your@mail.com" required />
        </div>
        <div class="inputBox">
          <label>Password</label>
          <input type="password" name="password" placeholder="Your Password" id="password" required />
        </div>
        <div class="inputBox">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Your Password"
            id="password_confirmation"
            required
          />
        </div>
        <div class="inputBox" id="register">
          <input type="submit" value="Register" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            reg : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
      

    };
  },
  methods: {
    isEmailValid: function() {
        return this.reg.test(this.email) ? true : false;
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.form {
  position: relative;
  width: 350px;
  padding: 40px 40px 60px;
  /* background: #131419; */
  border-radius: 10px;
  text-align: center;
  box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
    7px 7px 15px rgba(70, 70, 70, 0.12);
    
}
.form h2 {
  color: yellowgreen;
  font-weight: 500;
}
.form .input {
  text-align: left;
  margin-top: 20px;
}
.form .input .inputBox {
  margin-top: 20px;
}
.form .input .inputBox label {
  display: block;
  color: yellowgreen;
  margin-bottom: 5px;
  font-size: 18px;
}
.form .input .inputBox input {
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  background: #ececec;
  border: none;
  outline: none;
  border-radius: 40px;
  padding: 5px 15px;
  font-size: 18px;
  color: grey;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.8),
    inset 2px 2px 6px rgba(70, 70, 70, 0.2);
}

.form .input .inputBox input[type="submit"] {
  margin-top: 20px;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.8),
    2px 2px 6px rgba(70, 70, 70, 0.2);
}
.form .input .inputBox input[type="submit"]:active {
  color: yellowgreen;
  margin-top: 20px;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.8),
    inset 2px 2px 6px rgba(70, 70, 70, 0.2);
}
</style>