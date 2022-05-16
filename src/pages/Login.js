import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div class="min-h-screen flex justify-center items-center">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 className="text-center font-bold text-3xl">Login</h1>
            <hr />
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a
                  href="#ff"
                  class="label-text-alt link link-hover text-blue-500"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
          <div class="divider px-8">OR</div>
          <div class="form-control px-7 pb-10">
            <button class="btn btn-primary">Google login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
