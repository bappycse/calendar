<template>
  <header>
    <!-- header inner -->
    <div class="header" v-on="handleScroll">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div class="full">
              <div class="center-desk">
                <router-link  to="/"><img src="../../assets/images/logo.png" alt="Photo Edits Logo"></router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <nav class="navigation navbar navbar-expand-md navbar-dark ">
              <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="">
                <nav>
                  <div class="menu-item">
                    <router-link  to="/">Home</router-link>
                  </div>
                  <div class="menu-item">
                    <router-link  to="/howItWorks">How It Works</router-link>
                  </div>
                  <div class="menu-item"  @mouseover="isOpen = true" @mouseleave="isOpen = false">
                    <router-link to="/service">Services</router-link>
                    <div class="sub_item" v-if="isOpen">
                      <div class="menu-item">
                        <router-link to="/clippingPath">Clipping Path </router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/backgroundRemoval">Background Removal</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/imageMasking">Image Masking</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/shadowCreation">Shadow Creation</router-link>
                      </div>

                      <div class="menu-item">
                        <router-link to="/ghostMannequin">Ghost Mannequin</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/photoRetouch">Photo Retouching</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/colorChange">Color Change</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/carService">Car Photo Edit Service</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/multiClippingPath">Multi Clipping Path</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/jewelleryService">Jewellery Photo Editing</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/ecommerceService">E-Commerce Service</router-link>
                      </div>
                      <div class="menu-item">
                        <router-link to="/vectorServices">Vector Services</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item">
                    <router-link to="/about">About Us</router-link>
                  </div>
                  <div class="menu-item">
                    <router-link to="/prices">Prices</router-link>
                  </div>
                  <div class="menu-item get_quote">
                    <router-link class="md:hidden nav-link" to="/GetQuote">Get Quote</router-link>
                  </div>
                  <div class="menu-item free_trial">
                    <router-link class="md:hidden nav-link" to="/FreeTrial">Free Trial</router-link>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {onMounted, ref} from "vue";
const scrollPosition = ref(0);

const isOpen = ref(false);

const updateScroll = () => {
  scrollPosition.value += window.scrollY;
}
onMounted(() => {
  window.addEventListener('handleScroll', updateScroll);
  console.log(scrollPosition.value);
})
</script>

<style scoped>
.navbar {
  padding: 0;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  display: flex;
  padding: 10px 15px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  transition: 0.4s;
}

nav .menu-item a {
  font-weight: 500;
  font-size: 18px;
}

nav .menu-item.active {
  background: #444;
  border-bottom-color: #FF5858;
}

nav .menu-item .sub_item {
  position: absolute;
  background: #e9f5ff;
  top: calc(100% + 5px);
  left: 55%;
  width: max-content;
  transform: translateX(-50%);
  border-radius: 12px;
  padding-bottom: 20px;
}

nav .menu-item .sub_item .menu-item {
  padding: 10px 20px 0;
}

nav .menu-item .sub_item .menu-item a {
 font-size: 16px;
  font-weight: 500;
}

.get_quote a{
  background: #0056b3;
  border-radius: 4px;
  color: #fff;
}

.free_trial a{
  padding-left: 0;
}
</style>