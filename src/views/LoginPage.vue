<template>
  <div>
    <nav class="text-center py-3">
      <button class="btn btn-danger btn-sm me-3" @click="home()">Home</button>
      <button class="btn bg-dark btn-sm" @click="login()">Login</button>
    </nav>

    <div class="container col-5 shadow-sm p-5 my-5">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="userData.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="userData.password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="accountLogin()">Login</button>
    </div>
  </div>
</template>

<script src="../js/login.js"></script>
