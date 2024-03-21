import Link from "next/link";

import classes from "./page.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.formContainer}>
          <h2>Login</h2>
          {/* TODO: Place action endpoint */}
          <form className={classes.form} method="POST">
            <input
              type="text"
              className={classes.username}
              id="username"
              name="_username"
              placeholder="Username"
            />
            <input
              type="password"
              className={classes.password}
              id="password"
              name="_password"
              placeholder="Password"
            />
            <div className={classes.checkboxContainer}>
              <label>
                <input
                  type="checkbox"
                  className={classes.checkbox}
                  id="remember_me"
                  name="_remember_me"
                />
                Remember me
              </label>
            </div>

            <input type="submit" className={classes.loginBtn} value="Log in" />
            <Link href="/register">Register</Link>
            <Link href="/reset/request">Forgot your password?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
