<template>
    <div class="container">
        <!-- logo da loja -->
        <div>
            <img src="@/assets/images/logo.png"/>
        </div>
        <div class="header-buttons">
            <button>Home</button>
            <button>Calças</button>
            <button>Camisetas</button>
            <button>Vestidos</button>
            <button>Pijamas</button>
        </div>
        <div>
            <input>
            <button><img src="@/assets/images/shopping-bag.svg"/></button>
            <button><img src="@/assets/images/user-circle.svg"/></button>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    width: 100vw;
    height: 50px;
    border: 1px solid;

    .header-buttons {
        button {

            background: red;
        }
    }
}
</style>