import React, { useState, useEffect } from "react";
import { Button, DatePicker, Space, version } from "antd";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createHashRouter,
} from "react-router-dom";
import Login from "../pages/login/containers/login.jsx";
import Register from "../pages/register/containers/register.jsx";
import ConfirmEmail from "../pages/confirm-email/containers/confirm-email.jsx";
import AdditionalRegistration from "../pages/additional-registration/containers/additional-registration.jsx";

import ForgotPassword from "../pages/forgot/containers/forgot.jsx";

import Home from "../pages/home/containers/home.jsx";

import ErrorPage from "../components/error-page";

function Routes() {
  useEffect(() => {});

  const router = createHashRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     path: "contacts/:contactId",
      //     element: <Contact />,
      //   },
      // ],
    },
    {
      path: "register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
    {
      path: "confirm-email",
      element: <ConfirmEmail />,
      errorElement: <ErrorPage />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/additional-registration",
      element: <AdditionalRegistration />,
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     path: "contacts/:contactId",
      //     element: <Contact />,
      //   },
      // ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
