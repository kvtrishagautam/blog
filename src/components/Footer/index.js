"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl bg-dark  m-2 sm:m-10 flex flex-col items-center text-light">
        <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
        </h3>
        <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-1 sm:p-2 rounded mx04"
        >
        <input 
            type="email"
            placeholder="email"
            {...register("email", {required: true, max: 12, min: 7, maxLength: 80, pattern: /^\S+@\S+$/i})} 
            className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input type="submit"
        className="bg-dark text-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
    </form>

    </footer>
  )
}

export default Footer