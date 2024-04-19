import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";
import style from "./signUp.module.css";

const registerApi = "http://localhost:8084/Api/v1/patron/registerPatron";
const TownCrier = () => {
    const [isLoading, setIsLoading] = useState(false);



    const handleSubscribe = async (values, { resetForm }) => {
        try {
            setIsLoading(true);
            const payload = {
                username: values.username,
                password: values.password,
                email: values.email,


            };
            console.log(payload)
            const response = await axios.post(registerApi, payload);
            console.log(response)
            console.log(response.data)

            if (response.status === 201) {
                toast.success(`Hi ${values.username}, You are now a citizen`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsLoading(false);
                console.log(response);
                resetForm();
            } else {
                toast.error('Subscription failed. Please try again', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error during subscription:', error);
            toast.error('Subscription failed. Please try again', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password:'',
                    email: '',

                }}

                onSubmit={handleSubscribe}
            >
                {({ values, errors , touched, handleChange, handleBlur }) => (
                    <Form>
                        <div className={style.subCont}>
                            <div className={style.innerCont}>
                                <div className={style.contentCont}>
                                    <div className={style.contentSection}>
                                        <p className={style.topic}>Hear From Our Town Crier</p>
                                        <p className={style.text}>
                                            Subscribe to our newsletter to stay connected to our activities,
                                            get insights and updates on what's happening in our community!
                                        </p>
                                    </div>
                                </div>
                                <div className={style.inputSection}>
                                    <div>
                                        <Field
                                            type="username"
                                            name="username"
                                            placeholder="Enter your username "
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{
                                                borderColor: errors.username && touched.username ? "red" : "inherit",
                                            }}
                                        />
                                        {errors.username && touched.username && (
                                            <div className={style.error}>{errors.username}</div>
                                        )}
                                    </div>

                                    <div>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password "
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{
                                                borderColor: errors.password && touched.password ? "red" : "inherit",
                                            }}
                                        />
                                        {errors.password && touched.password && (
                                            <div className={style.error}>{errors.password}</div>
                                        )}
                                    </div>


                                    <div>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{
                                                borderColor: errors.email && touched.email ? "red" : "inherit",
                                            }}
                                        />
                                        {errors.email && touched.email && (
                                            <div className={style.error}>{errors.email}</div>
                                        )}
                                    </div>

                                    <div className={style.btn}>
                                        <button type="submit" className={style.btn}>
                                            {isLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <Icon width={24} height={24} icon={loadingLoop} />
                                                </div>
                                            ) : (
                                                "Subscribe"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </div>
    );
};

export default TownCrier;
