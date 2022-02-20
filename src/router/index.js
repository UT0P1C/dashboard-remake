import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Home from "../views/Home";

const firebaseConfig = {
	apiKey: "AIzaSyBHsniZlSX3yFa7Kt97GwF50MeX6ANaMLc",
	authDomain: "vue-auth-firebase-a5706.firebaseapp.com",
	projectId: "vue-auth-firebase-a5706",
	storageBucket: "vue-auth-firebase-a5706.appspot.com",
	messagingSenderId: "131400519137",
	appId: "1:131400519137:web:9d3f7068921caa54fed6a0",
	measurementId: "G-FRV5WJEKT4"
};

firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login
	},
	{
		path: "home",
		name: "Home",
		component: Home,
		meta: {
			requeresAuth: true
		}
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if (requiresAuth && !currentUser){
		next("login");
	}
	else if (requiresAuth && currentUser){
		next("home");
	}
	else{
		next();
	}
});

export default router;
