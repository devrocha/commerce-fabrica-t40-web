<script>
export default {};
</script>

<template>
    <div align="center">
    <v-btn variant="flat" color="secondary" @click="handleClickOpenLogin()">
      Login
    </v-btn>
    <CreateClienteModal :openModal="openModal" @closeModal="openModal = $event" />
    <v-btn variant="flat" color="secondary" @click="handleClickOpenSouCliente()">
      Já sou cliente
    </v-btn>
    <CreateClienteModal :openModal="openModal" @closeModal="openModal = $event" />
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Nome"
              required
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Sobrenome"
              required
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-btn class="mr-4" type="submit"> Enviar </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
