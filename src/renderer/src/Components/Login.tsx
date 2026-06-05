function App(): React.JSX.Element {
  return (
    <main className="login-shell">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-heading">
          <h1 id="login-title">Sign in to continue</h1>
        </div>

        <form className="login-form">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
          />

          <div className="form-row">
            <a href="#forgot-password">Forgot password?</a>
          </div>
          <div className="form-row">
            <a href="#forgot-password">Create a new account</a>
          </div>

          <button type="submit">Log in</button>
        </form>
      </section>
    </main>
  )
}

export default App
