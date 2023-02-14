import { createRouter, createWebHistory } from "vue-router";
import Calendar from "./components/Calendar.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import HowItWorks from "./pages/HowItWorks.vue";
import GhostMannequin from "./pages/GhostMannequin.vue";
import EcommerceService from "./pages/EcommerceService.vue";
import JewelleryService from "./pages/JewelleryService.vue";
import MultiClippingPath from "./pages/MultiClippingPath.vue";
import ClippingPath from "./pages/ClippingPath.vue";
import BackgroundRemoval from "./pages/BackgroungRemoval.vue";
import ImageMasking from "./pages/imageMasking.vue";
import ColorChange from "./pages/colorChange.vue";
import PhotoRetouch from "./pages/PhotoRetouch.vue";
import ShadowCreation from "./pages/ShadowCreation.vue";
import CarService from "./pages/CarService.vue";
import Prices from "./pages/Prices.vue";
import FreeTrial from "./pages/FreeTrial.vue";
import GetQuote from "./pages/GetQuote.vue";
import UserCrud from "./components/UserCrud.vue";
import VectorServices from "./pages/VectorServices.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/howItWorks", component: HowItWorks },
    { path: "/service", component: ClippingPath },
    { path: "/ghostMannequin", component: GhostMannequin },
    { path: "/ecommerceService", component: EcommerceService },
    { path: "/jewelleryService", component: JewelleryService },
    { path: "/multiClippingPath", component: MultiClippingPath },
    { path: "/clippingPath", component: ClippingPath },
    { path: "/prices", component: Prices },
    { path: "/calendar", component: Calendar },
    { path: "/FreeTrial", component: FreeTrial },
    { path: "/GetQuote", component: GetQuote },
    { path: "/backgroundRemoval", component: BackgroundRemoval },
    { path: "/imageMasking", component: ImageMasking },
    { path: "/colorChange", component: ColorChange },
    { path: "/photoRetouch", component: PhotoRetouch },
    { path: "/shadowCreation", component: ShadowCreation },
    { path: "/carService", component: CarService },
    { path: "/user-crud", component: UserCrud },
    { path: "/vectorServices", component: VectorServices }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});

export default router;