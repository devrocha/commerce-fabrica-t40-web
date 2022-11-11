<template>
  <!-- cabeçalho do carrinho -->
  <div class="cart-header">
    <img src="@/assets/images/shopping-bag.png" />
    <h1>Carrinho</h1>
    <input type="text" placeholder="CEP" />
  </div>
  <!-- div com ítens do carrinho -->
  <div class="cart-items">
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <img src="@/assets/products-img/tênis 1.png" class="cart-product" />
          </td>
          <td>Tênis Branco Masculino Marca Tamanho 40</td>
          <td><button>botão</button></td>
          <td>R$200</td>
          <td>
            <img src="@/assets/images/trash-can.png" class="cart-trash" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- footer do carrinho -->
  <div class="cart-footer">
    <div>
      <p class="shipping-text">Frete:</p>
      <p class="shipping-cost">R$20,00</p>
    </div>
    <div>
      <p class="total-text">Total:</p>
      <p class="total-cost">R$220,00</p>
    </div>
    <button>Comprar</button>
  </div>
</template>

<script>
export default {};
</script>

<style src="./style.scss" scoped lang="scss" />