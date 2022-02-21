<template>
	<div class="main">
		<div class="signup">
			<div class="signup-content">
				<header>
				<h1>Register</h1>
				</header>

				<div class="signup-form">
					<form>
							<div class="mb-3">
								<label class="form-label">E-mail</label>
								<input type="email" class="form-control" v-model="email" required>
							</div>

							<div class="mb-3">
								<label class="form-label">Password</label>
								<input type="password" class="form-control" v-model="password" required>
							</div>

							<div class="mb-3" id="signIn">
								<a href="/login">Already registered? Sign In</a>
							</div>
					</form>

				</div>
				<input 
				type="submit" 
				class="btn" 
				value="Sign Up!"
				v-on:click="signUp"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
	name: "SignUp",
	data(){
		return{
			email: "",
			password: ""
		};
	},
	methods: {
		signUp: function(){
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				() => {
					alert("Sign up Successful");
					this.$router.replace("login");
				},
				() => {
					alert("Something Wrong, Sorry, Try again");
				}
			);
		}
	}
};
</script>

<style scoped>
.signup{
	display: flex;
	align-content: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.signup-content{
	border-radius: 20px;
    background-color: #AD70C1;
    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	margin-top: 50px;
}

header{
	width: 100%;
    display: flex;
    justify-content: center;
	align-content: flex-start;
}

h1{
	font-size: 35px;
	color: #272929;
}

#signIn a{
	text-decoration: none;
	color: #272929;
}

.btn{
    padding: 10px 15px;
    background-color: #8f01bf;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s opacity;
	color: #ecf0f1;
	justify-content: center;
    align-items: center;
}

.btn:hover{
    opacity: 0.8;
}

</style>